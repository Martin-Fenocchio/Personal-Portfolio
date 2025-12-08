"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt?: string;
  featuredImage?: string | StaticImageData;
  publicationDate: Date;
  readingTime: number;
  slug: string;
}

const BlogCard = ({
  title,
  excerpt,
  featuredImage,
  publicationDate,
  readingTime,
  slug,
}: BlogCardProps) => {
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const handleClick = () => {
    // Navigation handled by Link component
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  return (
    <Link
      href={`/blogs/${slug}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`Read article: ${title}`}
      className="group block"
    >
      <article className="flex flex-col border-2 border-mediumBlue rounded-xl bg-mediumBlue p-4 transition-transform duration-200 h-full">
        {featuredImage && (
          <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex-1 flex flex-col">
          <h3 className="text-green font-bold text-xl mb-2 group-hover:text-yellow transition-colors">
            {title}
          </h3>
          {excerpt && (
            <p className="text-white text-sm mb-4 flex-1 line-clamp-3">
              {excerpt}
            </p>
          )}
          <div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
            <time dateTime={publicationDate.toISOString()}>
              {formatDate(publicationDate)}
            </time>
            <span>{readingTime} min read</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;

