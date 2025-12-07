import type { StaticImageData } from "next/image";

import corewebvitalsCover from "../../assets/blogs/cwv/cover.avif";
import masteringimagecomponentCover from "../../assets/blogs/image-component/cover.avif";
import optimizingapageCover from "../../assets/blogs/optimizing-page/cover.avif";
import understandingimageformatsCover from "../../assets/blogs/images-format/cover.avif";

export const featuredImages: Record<string, StaticImageData> = {
  "core-web-vitals": {
    ...corewebvitalsCover,
    blurDataURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAxUlEQVR4nAG6AEX/AAMDAgAAAUFDRm94eHN6f3B1fniBhm1wc0VAPXVpZQAAAAARDhV9aJGZqrTK3uDS5tHS6N/KxstHMS0vJSIAAgICAgACaFhyn6XAtcjKxs2+tdbXp8DFpFBIQQ0KACAmKT5MVIGLjP3//6GqrL/FybTn7revsYYxKxsEAQA+UF6esr14gIrm4taKkm3IlnHKjIufpakzNzUoIyEABQwPEB0lAAACEA4AUlAYOyEOIAgKBgUFLC8oYVBLBw5JGGrltooAAAAASUVORK5CYII=`,
  },
  "mastering-image-component": {
    ...masteringimagecomponentCover,
    blurDataURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAxUlEQVR4nAG6AEX/AAAuVgARNT15kVibrVKVqmCqvU+UqDyCngALLwAsVQAAMEsALU0AL1AAVHcmbZQ2g6Zdma10m58ASnEDPFMAAChDJU5jamZeTHGEXnqRfJShabfbVpGyYZy6ATtQAAAmQk1reP/2zbvY1EhqeHiYoGO54x9tlVWRtAxCVwAZRWEJOVIGSm0CT3cALUkAKEdxrcmMyt8OTG0WSmYAH0puACRDGkhsVY+2Q3GPPmuJaZ7BOFt8ABw7IUluLElDMb1PSmAAAAAASUVORK5CYII=`,
  },
  "optimizing-a-page": {
    ...optimizingapageCover,
    blurDataURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAxUlEQVR4nAG6AEX/AAMDAgAAAUFDRm94eHN6f3B1fniBhm1wc0VAPXVpZQAAAAARDhV9aJGZqrTK3uDS5tHS6N/KxstHMS0vJSIAAgICAgACaFhyn6XAtcjKxs2+tdbXp8DFpFBIQQ0KACAmKT5MVIGLjP3//6GqrL/FybTn7revsYYxKxsEAQA+UF6esr14gIrm4taKkm3IlnHKjIufpakzNzUoIyEABQwPEB0lAAACEA4AUlAYOyEOIAgKBgUFLC8oYVBLBw5JGGrltooAAAAASUVORK5CYII=`,
  },
  "understanding-image-formats": {
    ...understandingimageformatsCover,
    blurDataURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAxUlEQVR4nAG6AEX/AIPy/7T//2Th/z6EmUxcVk5dVTN7kWPf/67//3Hn/wAAlMoAr9tJ5v9smJNQQSJOOh1xlI1g7v8kxO8Yn9EAAE5qAFxwAIOVlN7dnK2blaaYltvgAHWLAFRgAFRuAF+LaHqRaVFaQ1dhTDxILTU9I09cTzhMOEeAahFNYQAAXDRdj0mRoVjHp2tWTjw6PCpiaFU9fZA0ZogAS0EAABAWAE4qK5VCpLtYmnpTjXpTRFJOADxgEEhVADMnQyJM9c0+d/wAAAAASUVORK5CYII=`,
  }
};
