import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import ArticleContent from "../../../src/components/blogs/article-content";
import TableOfContents from "../../../src/components/blogs/table-of-contents";
import ShareButtons from "../../../src/components/blogs/share-buttons";
import ReadingProgress from "../../../src/components/blogs/reading-progress";
import ScrollToTop from "../../../src/components/blogs/scroll-to-top";
import Breadcrumbs from "../../../src/components/blogs/breadcrumbs";
import RelatedArticles from "../../../src/components/blogs/related-articles";
import AuthorSection from "../../../src/components/blogs/author-section";
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

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

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
  const ogImage = article.metadata?.ogImage || article.featuredImage;

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

  const relatedArticles = await getRelatedArticles(slug, 2);

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <main className="max-w-7xl mx-auto px-4 py-4 lg:py-12">
        <article className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:max-w-3xl">
            <header className="mb-8">
              <Breadcrumbs />
              <h1 className="text-white text-4xl font-bold mb-4">
                {article.title}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{article.author}</span>
                  <span>•</span>
                  <time dateTime={article.publicationDate.toISOString()}>
                    {formatDate(article.publicationDate)}
                  </time>
                  <span>•</span>
                  <span>{article.readingTime} min read</span>
                </div>
                <ShareButtons
                  url={`https://martinfenocchio.com/blogs/${article.slug}`}
                  title={article.title}
                  description={article.metadata?.description || article.excerpt}
                />
              </div>
              {article.featuredImage && (
                <div className="relative w-full h-auto mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    width={1200}
                    height={630}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              )}
            </header>
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
