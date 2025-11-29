import fs from "fs";
import path from "path";
import { parseFrontmatter, processMarkdown } from "./markdown";
import { calculateReadingTime } from "./reading-time";
import {
  BlogArticle,
  BlogArticleFrontmatter,
  ArticleMetadata,
} from "./types";

const BLOGS_DIRECTORY = path.join(process.cwd(), "content", "blogs");

const sanitizeSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const generateSlug = (
  filename: string,
  frontmatter?: BlogArticleFrontmatter
): string => {
  if (frontmatter?.slug) {
    return sanitizeSlug(frontmatter.slug);
  }
  return sanitizeSlug(filename.replace(/\.md$/, ""));
};

const parseArticleFile = async (
  filename: string
): Promise<BlogArticle | null> => {
  try {
    const filePath = path.join(BLOGS_DIRECTORY, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data: frontmatter, content: markdownContent } =
      parseFrontmatter(fileContent);

    const frontmatterData = frontmatter as BlogArticleFrontmatter;

    if (!frontmatterData.title || !frontmatterData.date) {
      console.warn(
        `Article ${filename} is missing required frontmatter (title or date)`
      );
      return null;
    }

    const slug = generateSlug(filename, frontmatterData);
    const { content: htmlContent, headings } = await processMarkdown(
      markdownContent
    );
    const readingTime = calculateReadingTime(markdownContent);

    const metadata: ArticleMetadata | undefined = frontmatterData.description ||
      frontmatterData.keywords ||
      frontmatterData.ogImage ||
      frontmatterData.twitterCard
      ? {
          description: frontmatterData.description,
          keywords: frontmatterData.keywords,
          ogImage: frontmatterData.ogImage || frontmatterData.featuredImage,
          twitterCard: frontmatterData.twitterCard || "summary_large_image",
        }
      : undefined;

    return {
      slug,
      title: frontmatterData.title,
      content: htmlContent,
      excerpt: frontmatterData.excerpt,
      featuredImage: frontmatterData.featuredImage,
      author: frontmatterData.author || "Martín Fenocchio",
      publicationDate: new Date(frontmatterData.date),
      readingTime,
      headings,
      metadata,
      tags: frontmatterData.tags,
    };
  } catch (error) {
    console.error(`Error parsing article file ${filename}:`, error);
    return null;
  }
};

export const getAllArticles = async (): Promise<BlogArticle[]> => {
  try {
    if (!fs.existsSync(BLOGS_DIRECTORY)) {
      return [];
    }

    const files = fs.readdirSync(BLOGS_DIRECTORY);
    const markdownFiles = files.filter((file) => file.endsWith(".md"));

    const articles = await Promise.all(
      markdownFiles.map((file) => parseArticleFile(file))
    );

    const validArticles = articles.filter(
      (article): article is BlogArticle => article !== null
    );

    return validArticles.sort((a, b) => {
      return (
        b.publicationDate.getTime() - a.publicationDate.getTime()
      );
    });
  } catch (error) {
    console.error("Error reading blog articles:", error);
    return [];
  }
};

export const getArticleBySlug = async (
  slug: string
): Promise<BlogArticle | null> => {
  try {
    const articles = await getAllArticles();
    return articles.find((article) => article.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error);
    return null;
  }
};

export const getArticleSlugs = async (): Promise<string[]> => {
  try {
    const articles = await getAllArticles();
    return articles.map((article) => article.slug);
  } catch (error) {
    console.error("Error fetching article slugs:", error);
    return [];
  }
};

export const getRelatedArticles = async (
  currentSlug: string,
  limit: number = 3
): Promise<BlogArticle[]> => {
  try {
    const currentArticle = await getArticleBySlug(currentSlug);
    if (!currentArticle) {
      return [];
    }
    
    const articles = await getAllArticles();
    const relatedArticles = articles.filter(
      (article) => article.slug !== currentSlug
    );
    
    if (relatedArticles.length === 0) {
      return Array(limit).fill(currentArticle).slice(0, limit);
    }
    
    return relatedArticles.slice(0, limit);
  } catch (error) {
    console.error("Error fetching related articles:", error);
    const currentArticle = await getArticleBySlug(currentSlug);
    if (!currentArticle) {
      return [];
    }
    return Array(limit).fill(currentArticle).slice(0, limit);
  }
};

