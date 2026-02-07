import type { StaticImageData } from "next/image";

export interface BlogArticle {
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  featuredImage?: string | StaticImageData;
  author: string;
  publicationDate: Date;
  readingTime: number;
  headings: ArticleSection[];
  metadata?: ArticleMetadata;
  tags?: string[];
  order?: number;
}

export interface ArticleSection {
  id: string;
  text: string;
  level: number;
  children?: ArticleSection[];
}

export interface ArticleMetadata {
  description?: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: string;
}

export interface BlogArticleFrontmatter {
  title: string;
  date: string;
  author?: string;
  featuredImage?: string;
  excerpt?: string;
  description?: string;
  keywords?: string[];
  slug?: string;
  ogImage?: string;
  twitterCard?: string;
  tags?: string[];
  order?: number;
}

