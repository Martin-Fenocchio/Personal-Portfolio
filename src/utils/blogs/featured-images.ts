import type { StaticImageData } from "next/image";

import coreWebVitalsCover from "../../assets/blogs/cwv/cover.avif";
import understandingImageFormatsCover from "../../assets/blogs/images-format/cover.avif";

export const featuredImages: Record<string, StaticImageData> = {
  "core-web-vitals": {
    ...coreWebVitalsCover,
    blurDataURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAxUlEQVR4nAG6AEX/AAMDAgAAAUFDRm94eHN6f3B1fniBhm1wc0VAPXVpZQAAAAARDhV9aJGZqrTK3uDS5tHS6N/KxstHMS0vJSIAAgICAgACaFhyn6XAtcjKxs2+tdbXp8DFpFBIQQ0KACAmKT5MVIGLjP3//6GqrL/FybTn7revsYYxKxsEAQA+UF6esr14gIrm4taKkm3IlnHKjIufpakzNzUoIyEABQwPEB0lAAACEA4AUlAYOyEOIAgKBgUFLC8oYVBLBw5JGGrltooAAAAASUVORK5CYII=`,
  },
  "understanding-image-formats": {
    ...understandingImageFormatsCover,
    blurDataURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAxUlEQVR4nAG6AEX/AIPy/7T//2Th/z6EmUxcVk5dVTN7kWPf/67//3Hn/wAAlMoAr9tJ5v9smJNQQSJOOh1xlI1g7v8kxO8Yn9EAAE5qAFxwAIOVlN7dnK2blaaYltvgAHWLAFRgAFRuAF+LaHqRaVFaQ1dhTDxILTU9I09cTzhMOEeAahFNYQAAXDRdj0mRoVjHp2tWTjw6PCpiaFU9fZA0ZogAS0EAABAWAE4qK5VCpLtYmnpTjXpTRFJOADxgEEhVADMnQyJM9c0+d/wAAAAASUVORK5CYII=`,
  },
};
