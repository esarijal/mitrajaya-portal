import NewsCard from "@/components/custom/news-card";
import ProvinceTags from "@/components/custom/province-tags";
import RecommendedTags from "@/components/custom/recommended-tags";
import ShowMoreButton from "@/components/custom/show-more-button";
import { useGetArticlesByTags } from "@/hooks/useGetArticlesByTags";
import { useState } from "react";
import { useParams } from "react-router-dom";

function NewsTags() {
  const { tag_name } = useParams();
  const [pageSize, setPageSize] = useState(5);

  const { data: news } = useGetArticlesByTags({ tagName: tag_name as string });

  return (
    <div className="space-y-[52px] md:space-y-[72px]">
      <hgroup className="border-t regional-news-title">
        <h1 className="capitalize">{tag_name}</h1>
        <p>Menampilkan seluruh berita dengan tag {tag_name}</p>
      </hgroup>

      <div className="flex flex-col gap-8 lg:flex-row">
        {news && news.data && news.data.length > 0 && (
          <div className="flex flex-col w-full gap-4 md:gap-8">
            <div className="space-y-4 md:space-y-8">
              {news.data.map((article) => (
                <div key={article.id}>
                  <NewsCard
                    id={article.id}
                    size="small"
                    title={article.title}
                    subHeading={article.content}
                    image={article.image_url}
                    publishDate={article.published_at}
                    updateDate={article.updated_at}
                  />
                </div>
              ))}
            </div>

            <ShowMoreButton
              pageSize={pageSize}
              setPageSize={setPageSize}
              totalPage={news.total_pages}
            />
          </div>
        )}
        <div className="flex flex-col flex-1 gap-8">
          <RecommendedTags />
          <ProvinceTags />
        </div>
      </div>
    </div>
  );
}

export default NewsTags;
