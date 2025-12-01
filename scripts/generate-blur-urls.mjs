import { getPlaiceholder } from "plaiceholder";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

const generateBlurDataURL = async (imagePath) => {
  try {
    const buffer = readFileSync(imagePath);
    const { base64 } = await getPlaiceholder(buffer, { size: 10 });
    // plaiceholder returns just the base64 string, we need to add the data URL prefix
    return base64.startsWith("data:") ? base64 : `data:image/png;base64,${base64}`;
  } catch (error) {
    console.error(`Error generating blur for ${imagePath}:`, error);
    throw error;
  }
};

const generateBlurDataURLs = async () => {
  const imagesDir = join(rootDir, "src", "assets", "blogs");

  const coreWebVitalsPath = join(imagesDir, "cwv", "cover.avif");
  const understandingImageFormatsPath = join(
    imagesDir,
    "images-format",
    "cover.avif"
  );

  console.log("Generating blur data URLs...");

  const coreWebVitalsBlur = await generateBlurDataURL(coreWebVitalsPath);
  const understandingImageFormatsBlur = await generateBlurDataURL(
    understandingImageFormatsPath
  );

  const featuredImagesContent = `import type { StaticImageData } from "next/image";

import coreWebVitalsCover from "../../assets/blogs/cwv/cover.avif";
import understandingImageFormatsCover from "../../assets/blogs/images-format/cover.avif";

export const featuredImages: Record<string, StaticImageData> = {
  "core-web-vitals": {
    ...coreWebVitalsCover,
    blurDataURL: \`${coreWebVitalsBlur}\`,
  },
  "understanding-image-formats": {
    ...understandingImageFormatsCover,
    blurDataURL: \`${understandingImageFormatsBlur}\`,
  },
};
`;

  const outputPath = join(rootDir, "src", "utils", "blogs", "featured-images.ts");
  writeFileSync(outputPath, featuredImagesContent, "utf-8");

  console.log("✅ Blur data URLs generated and saved to featured-images.ts");
};

generateBlurDataURLs().catch((error) => {
  console.error("Failed to generate blur data URLs:", error);
});

