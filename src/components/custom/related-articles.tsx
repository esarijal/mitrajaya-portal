import { useGetRelatedArticles } from "@/hooks/useGetRelatedArticles";
import NewsCard from "./news-card";

function RelatedArticles({ articleID }: { articleID: number | undefined }) {
  const { data: relatedArticles } = useGetRelatedArticles({
    articleID: String(articleID) as string,
  });

  return (
    relatedArticles &&
    relatedArticles.length > 0 && (
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-secondary-foreground">Berita terkait</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {relatedArticles.map((article) => (
            <NewsCard
              size="regular"
              color="secondary"
              key={article.id}
              id={article.id}
              title={article.title}
              image={article.image_url}
              publishDate={article.published_at}
              updateDate={article.updated_at}
            />
          ))}
        </div>
      </div>
    )
  );
}

export default RelatedArticles;
