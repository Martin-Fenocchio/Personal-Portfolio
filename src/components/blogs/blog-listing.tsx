"use client";

import { BlogArticle } from "../../utils/blogs/types";
import BlogCard from "./blog-card";

interface BlogListingProps {
  articles: BlogArticle[];
}

const BlogListing = ({ articles }: BlogListingProps) => {
  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-white text-2xl font-bold mb-4">No articles yet</h2>
        <p className="text-gray-400 max-w-md">
          Check back soon for new blog posts and articles!
        </p>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {articles.map((article) => (
          <BlogCard
            key={article.slug}
            title={article.title}
            excerpt={article.excerpt}
            featuredImage={article.featuredImage}
            publicationDate={article.publicationDate}
            readingTime={article.readingTime}
            slug={article.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogListing;

