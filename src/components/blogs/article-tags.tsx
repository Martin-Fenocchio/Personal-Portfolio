interface ArticleTagsProps {
  tags?: string[];
}

const ArticleTags = ({ tags }: ArticleTagsProps) => {
  const displayTags = tags && tags.length > 0 
    ? tags 
    : ["performance", "web development", "SEO"];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {displayTags.map((tag, index) => (
        <span
          key={`${tag}-${index}`}
          className="px-3 py-1 text-sm font-medium bg-mediumBlue text-green rounded-full border border-green/30 hover:border-green transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ArticleTags;

