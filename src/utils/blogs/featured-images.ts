import type { StaticImageData } from "next/image";

import corewebvitalsCover from "../../assets/blogs/cwv/cover.avif";
import masteringimagecomponentCover from "../../assets/blogs/image-component/cover.avif";
import optimizingapageCover from "../../assets/blogs/optimizing-page/cover.avif";
import understandingimageformatsCover from "../../assets/blogs/images-format/cover.avif";
import chromeuserexperiencereportcruxCover from "../../assets/blogs/crux/cover.png";
import cumulativelayoutshiftclsCover from "../../assets/blogs/cls/cover.png";
import largestcontentfulpaintlcpCover from "../../assets/blogs/lcp/cover.png";
import optimizinglottieanimationsperformanceCover from "../../assets/blogs/lotties/cover.png";
import optimizingtransfersizeforperformanceCover from "../../assets/blogs/transferred-size/cover.png";
import optimizingvideosforperformanceCover from "../../assets/blogs/video/cover.png";
import speedindexvisualprogressionCover from "../../assets/blogs/speed-index/cover.png";
import timetofirstbyteCover from "../../assets/blogs/ttfb/cover.png";
import totalblockingtimeCover from "../../assets/blogs/tbt/cover.png";
import whypagespeedscoresfluctuateCover from "../../assets/blogs/fluctuations/cover.png";

const DEFAULT_BLUR_DATA_URL = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAxUlEQVR4nAG6AEX/AAMDAgAAAUFDRm94eHN6f3B1fniBhm1wc0VAPXVpZQAAAAARDhV9aJGZqrTK3uDS5tHS6N/KxstHMS0vJSIAAgICAgACaFhyn6XAtcjKxs2+tdbXp8DFpFBIQQ0KACAmKT5MVIGLjP3//6GqrL/FybTn7revsYYxKxsEAQA+UF6esr14gIrm4taKkm3IlnHKjIufpakzNzUoIyEABQwPEB0lAAACEA4AUlAYOyEOIAgKBgUFLC8oYVBLBw5JGGrltooAAAAASUVORK5CYII=`;

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
  },
  "chrome-user-experience-report-crux": {
    ...chromeuserexperiencereportcruxCover,
    blurDataURL: DEFAULT_BLUR_DATA_URL,
  },
  "cumulative-layout-shift-cls": {
    ...cumulativelayoutshiftclsCover,
    blurDataURL: DEFAULT_BLUR_DATA_URL,
  },
  "largest-contentful-paint-lcp": {
    ...largestcontentfulpaintlcpCover,
    blurDataURL: DEFAULT_BLUR_DATA_URL,
  },
  "optimizing-lottie-animations-performance": {
    ...optimizinglottieanimationsperformanceCover,
    blurDataURL: DEFAULT_BLUR_DATA_URL,
  },
  "optimizing-transfer-size-for-performance": {
    ...optimizingtransfersizeforperformanceCover,
    blurDataURL: DEFAULT_BLUR_DATA_URL,
  },
  "optimizing-videos-for-performance": {
    ...optimizingvideosforperformanceCover,
    blurDataURL: DEFAULT_BLUR_DATA_URL,
  },
  "speed-index-visual-progression": {
    ...speedindexvisualprogressionCover,
    blurDataURL: DEFAULT_BLUR_DATA_URL,
  },
  "time-to-first-byte-ttfb": {
    ...timetofirstbyteCover,
    blurDataURL: DEFAULT_BLUR_DATA_URL,
  },
  "total-blocking-time-tbt": {
    ...totalblockingtimeCover,
    blurDataURL: DEFAULT_BLUR_DATA_URL,
  },
  "why-lighthouse-pagespeed-scores-fluctuate": {
    ...whypagespeedscoresfluctuateCover,
    blurDataURL: DEFAULT_BLUR_DATA_URL,
  },
};
