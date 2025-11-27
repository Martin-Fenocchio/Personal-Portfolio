import { Metadata } from "next";
import BlogListing from "../../src/components/blogs/blog-listing";
import { getAllArticles } from "../../src/utils/blogs/blog-data";

export const metadata: Metadata = {
  title: "Blog | Martín Fenocchio",
  description:
    "Read articles about software development, React, Next.js, TypeScript, and web development.",
  openGraph: {
    title: "Blog | Martín Fenocchio",
    description:
      "Read articles about software development, React, Next.js, TypeScript, and web development.",
    type: "website",
    url: "https://martinfenocchio.com/blogs",
  },
};

const BlogsPage = async () => {
  const articles = await getAllArticles();

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-[1000px] mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-white text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-400 text-lg">
            Articles about software development, web technologies, and programming
            insights.
          </p>
        </header>
        <BlogListing articles={articles} />
      </main>
    </div>
  );
};

export default BlogsPage;

