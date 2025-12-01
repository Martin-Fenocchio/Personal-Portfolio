import { getPlaiceholder } from "plaiceholder";
import path from "path";
import fs from "fs";

const generateBlurDataURL = async (imagePath: string): Promise<string> => {
  try {
    const buffer = fs.readFileSync(imagePath);
    const { base64 } = await getPlaiceholder(buffer, { size: 10 });
    return base64;
  } catch (error) {
    console.error(`Error generating blur for ${imagePath}:`, error);
    throw error;
  }
};

export const generateBlurDataURLs = async (): Promise<
  Record<string, string>
> => {
  const imagesDir = path.join(process.cwd(), "src", "assets", "blogs");
  const blurDataURLs: Record<string, string> = {};

  const coreWebVitalsPath = path.join(imagesDir, "cwv", "cover.avif");
  const understandingImageFormatsPath = path.join(
    imagesDir,
    "images-format",
    "cover.avif"
  );

  try {
    blurDataURLs["core-web-vitals"] = await generateBlurDataURL(
      coreWebVitalsPath
    );
    blurDataURLs["understanding-image-formats"] =
      await generateBlurDataURL(understandingImageFormatsPath);
  } catch (error) {
    console.error("Error generating blur data URLs:", error);
  }

  return blurDataURLs;
};

