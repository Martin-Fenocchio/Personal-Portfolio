import type { Metadata } from "next";
import PortfolioHome from "../src/components/redesign/portfolio-home";
import "../src/assets/styles/portfolio-redesign.scss";
import { getAllArticles } from "../src/utils/blogs/blog-data";

export const metadata: Metadata = {
  title: "Martín Fenocchio — Tech Lead",
  description: "Portfolio of Martín Fenocchio, Tech Lead and full-stack developer.",
};

export default async function Page() {
  const articles = await getAllArticles();
  const featuredArticles = articles.slice(0, 3).map((article) => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    readingTime: article.readingTime,
    publicationDate: article.publicationDate.toISOString(),
    featuredImage:
      typeof article.featuredImage === "string"
        ? article.featuredImage
        : article.featuredImage?.src,
  }));

  return <PortfolioHome featuredArticles={featuredArticles} />;
}
