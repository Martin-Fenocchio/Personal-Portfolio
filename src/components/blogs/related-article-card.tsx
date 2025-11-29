import Image from "next/image";
import Link from "next/link";
import { BlogArticle } from "../../utils/blogs/types";

interface RelatedArticleCardProps {
  article: BlogArticle;
  index: number;
}

const RelatedArticleCard = ({ article, index }: RelatedArticleCardProps) => {
  return (
    <Link
      key={`${article.slug}-${index}`}
      href={`/blogs/${article.slug}`}
      className="group block bg-white/10 rounded-lg overflow-hidden hover:bg-darkBlue transition-colors hover:border-green"
    >
      {article.featuredImage && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green transition-colors line-clamp-2">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-sm text-gray-400 line-clamp-3 mb-3">
            {article.excerpt}
          </p>
        )}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <time dateTime={article.publicationDate.toISOString()}>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).format(article.publicationDate)}
          </time>
          <span>•</span>
          <span>{article.readingTime} min read</span>
        </div>
      </div>
    </Link>
  );
};

export default RelatedArticleCard;

