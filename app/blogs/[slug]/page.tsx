/* eslint-disable react-refresh/only-export-components */
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleContent from "../../../src/components/blogs/article-content";
import TableOfContents from "../../../src/components/blogs/table-of-contents";
import ReadingProgress from "../../../src/components/blogs/reading-progress";
import ScrollToTop from "../../../src/components/blogs/scroll-to-top";
import RelatedArticles from "../../../src/components/blogs/related-articles";
import AuthorSection from "../../../src/components/blogs/author-section";
import ArticleHeader from "../../../src/components/blogs/article-header";
import {
  getArticleBySlug,
  getArticleSlugs,
  getRelatedArticles,
} from "../../../src/utils/blogs/blog-data";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const description =
    article.metadata?.description || article.excerpt || article.title;
  const ogImage =
    article.metadata?.ogImage ||
    (typeof article.featuredImage === "string"
      ? article.featuredImage
      : article.featuredImage?.src);

  return {
    title: `${article.title} | Martín Fenocchio`,
    description,
    openGraph: {
      title: article.title,
      description,
      type: "article",
      publishedTime: article.publicationDate.toISOString(),
      authors: [article.author],
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card:
        (article.metadata?.twitterCard as
          | "summary"
          | "summary_large_image"
          | "app"
          | undefined) || "summary_large_image",
      title: article.title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

const BlogArticlePage = async ({ params }: BlogArticlePageProps) => {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(slug, 4);

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <main className="max-w-7xl mx-auto px-4 py-4 lg:py-12">
        <article className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:max-w-3xl">
            <ArticleHeader
              title={article.title}
              author={article.author}
              publicationDate={article.publicationDate}
              readingTime={article.readingTime}
              featuredImage={article.featuredImage}
              slug={article.slug}
              description={article.metadata?.description}
              excerpt={article.excerpt}
            />
            <ArticleContent
              content={article.content}
              headings={article.headings}
            />
            <RelatedArticles articles={relatedArticles} />
          </div>
          <aside className="lg:flex-shrink-0 ">
            <div className="sticky top-8 w-full lg:w-64 lg:ml-8 mb-8 lg:mb-0">
              <TableOfContents headings={article.headings} />
              <AuthorSection />
            </div>
          </aside>
        </article>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default BlogArticlePage;
