import { BlogArticle } from "../../utils/blogs/types";
import RelatedArticleCard from "./related-article-card";

interface RelatedArticlesProps {
  articles: BlogArticle[];
}

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-8 border-t border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <RelatedArticleCard key={article.slug} article={article} index={index} />
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;

