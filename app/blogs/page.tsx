import { Metadata } from "next";
import BlogListing from "../../src/components/blogs/blog-listing";
import { getAllArticles } from "../../src/utils/blogs/blog-data";
import Navbar from "../../src/components/home/navbar/navbar";

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
      <div className="max-lg:hidden">
        <Navbar />
        <div className="line" />
      </div>

      <main className="max-w-[1000px] mx-auto px-4 lg:py-12 lg:pt-24">
        <header className="mb-12">
          <h1 className="text-white text-4xl lg:text-6xl lg:text-center font-bold mb-4  mt-5 lg:mt-10">Articles</h1>
          <p className="text-gray-200 max-lg:mb-8 text-lg lg:text-center md:max-w-[75%] mx-auto">
          Practical guides, insights, and deep dives into software development—covering everything from React and Next.js to TypeScript and web development best practices.
          </p>
        </header>
        <BlogListing articles={articles} gridCols={""} />
      </main>
    </div>
  );
};

export default BlogsPage;

