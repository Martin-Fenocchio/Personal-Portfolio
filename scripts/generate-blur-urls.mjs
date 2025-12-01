import { getPlaiceholder } from "plaiceholder";
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join, basename } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

const sanitizeSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const generateSlug = (filename, frontmatter) => {
  if (frontmatter?.slug) {
    return sanitizeSlug(frontmatter.slug);
  }
  return sanitizeSlug(filename.replace(/\.md$/, ""));
};

const parseFrontmatter = (content) => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }

  const frontmatterText = match[1];
  const markdownContent = match[2];
  
  const data = {};
  frontmatterText.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      data[key] = value;
    }
  });

  return { data, content: markdownContent };
};

const generateBlurDataURL = async (imagePath) => {
  try {
    const buffer = readFileSync(imagePath);
    const { base64 } = await getPlaiceholder(buffer, { size: 10 });
    return base64.startsWith("data:") ? base64 : `data:image/png;base64,${base64}`;
  } catch (error) {
    console.error(`Error generating blur for ${imagePath}:`, error);
    throw error;
  }
};

const generateBlurDataURLs = async () => {
  const blogsDir = join(rootDir, "content", "blogs");
  const imagesDir = join(rootDir, "src", "assets", "blogs");

  console.log("Scanning markdown files and image directories...");

  // Get all markdown files
  const markdownFiles = readdirSync(blogsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = join(blogsDir, file);
      const content = readFileSync(filePath, "utf-8");
      const { data: frontmatter } = parseFrontmatter(content);
      const slug = generateSlug(file, frontmatter);
      return { file, slug, frontmatter };
    });

  // Get all image directories
  const imageDirs = readdirSync(imagesDir)
    .filter((item) => {
      const itemPath = join(imagesDir, item);
      return statSync(itemPath).isDirectory();
    })
    .map((dir) => {
      const dirPath = join(imagesDir, dir);
      const files = readdirSync(dirPath);
      const coverFile = files.find((f) => f.startsWith("cover."));
      return coverFile ? { dir, coverPath: join(dirPath, coverFile) } : null;
    })
    .filter(Boolean);

  // Match markdown files with image directories based on featuredImage path
  const imageMappings = [];
  
  for (const mdFile of markdownFiles) {
    const featuredImage = mdFile.frontmatter?.featuredImage;
    if (!featuredImage) continue;

    // Extract directory name from featuredImage path (e.g., "/blogs/cwv/cover.avif" -> "cwv")
    const imagePathMatch = featuredImage.match(/\/blogs\/([^/]+)\//);
    if (!imagePathMatch) continue;

    const imageDirName = imagePathMatch[1];
    const imageDir = imageDirs.find((img) => img.dir === imageDirName);
    
    if (imageDir) {
      imageMappings.push({
        slug: mdFile.slug,
        importPath: `../../assets/blogs/${imageDir.dir}/${basename(imageDir.coverPath)}`,
        imagePath: imageDir.coverPath,
        importName: `${mdFile.slug.replace(/-/g, "")}Cover`,
      });
    }
  }

  if (imageMappings.length === 0) {
    console.warn("⚠️  No featured images found to process");
    return;
  }

  console.log(`Found ${imageMappings.length} featured image(s) to process...`);

  // Generate blur data URLs for all images
  const blurResults = await Promise.all(
    imageMappings.map(async (mapping) => {
      const blurDataURL = await generateBlurDataURL(mapping.imagePath);
      return { ...mapping, blurDataURL };
    })
  );

  // Generate imports
  const imports = blurResults
    .map(
      (result) =>
        `import ${result.importName} from "${result.importPath}";`
    )
    .join("\n");

  // Generate featuredImages object
  const featuredImagesEntries = blurResults
    .map(
      (result) => `  "${result.slug}": {
    ...${result.importName},
    blurDataURL: \`${result.blurDataURL}\`,
  }`
    )
    .join(",\n");

  const featuredImagesContent = `import type { StaticImageData } from "next/image";

${imports}

export const featuredImages: Record<string, StaticImageData> = {
${featuredImagesEntries}
};
`;

  const outputPath = join(rootDir, "src", "utils", "blogs", "featured-images.ts");
  writeFileSync(outputPath, featuredImagesContent, "utf-8");

  console.log(`✅ Generated blur data URLs for ${blurResults.length} image(s)`);
  console.log(`✅ Saved to ${outputPath}`);
};

generateBlurDataURLs().catch((error) => {
  console.error("Failed to generate blur data URLs:", error);
});

