import type { StaticImageData } from "next/image";

import coreWebVitalsCover from "../../assets/blogs/cwv/cover.avif";
import understandingImageFormatsCover from "../../assets/blogs/images-format/cover.avif";

export const featuredImages: Record<string, StaticImageData> = {
  "core-web-vitals": coreWebVitalsCover,
  "understanding-image-formats": understandingImageFormatsCover,
};

