import Image from "next/image";
import Breadcrumbs from "./breadcrumbs";
import ShareButtons from "./share-buttons";

interface ArticleHeaderProps {
  title: string;
  author: string;
  publicationDate: Date;
  readingTime: number;
  featuredImage?: string;
  slug: string;
  description?: string;
  excerpt?: string;
}

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

const ArticleHeader = ({
  title,
  author,
  publicationDate,
  readingTime,
  featuredImage,
  slug,
  description,
  excerpt,
}: ArticleHeaderProps) => {
  return (
    <header className="mb-8">
      <Breadcrumbs />
      <h1 className="text-white text-4xl font-bold mb-4">{title}</h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>{author}</span>
          <span>•</span>
          <time dateTime={publicationDate.toISOString()}>
            {formatDate(publicationDate)}
          </time>
          <span>•</span>
          <span>{readingTime} min read</span>
        </div>
        <ShareButtons
          url={`https://martinfenocchio.com/blogs/${slug}`}
          title={title}
          description={description || excerpt}
        />
      </div>
      {featuredImage && (
        <div className="relative w-full h-auto mb-8 rounded-lg overflow-hidden">
          <Image
            src={featuredImage}
            alt={title}
            width={1200}
            height={630}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            loading="eager"
            priority
          />
        </div>
      )}
    </header>
  );
};

export default ArticleHeader;

