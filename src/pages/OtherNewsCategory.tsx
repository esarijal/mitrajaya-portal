import Loader from "@/components/custom/loader";
import NewsCard from "@/components/custom/news-card";
import NewsCategoryNav from "@/components/custom/news-category-nav";
import ProvinceTags from "@/components/custom/province-tags";
import RecommendedTags from "@/components/custom/recommended-tags";
import ShowMoreButton from "@/components/custom/show-more-button";
import { useGetLatestArticlesByCategory } from "@/hooks/useGetLatestAriclesByCategory";
import { useState } from "react";
import { useParams } from "react-router-dom";

function OtherNewsCategory() {
  const { name, id } = useParams();

  const [pageSize, setPageSize] = useState(5);
  const { data: news, isLoading: newsIsLoading } =
    useGetLatestArticlesByCategory({
      page: 1,
      pageSize,
      categoryID: id as string,
    });

  if (newsIsLoading) {
    return <Loader />;
  }

  return (
    <div className="space-y-[52px] md:space-y-[72px]">
      <div>
        <NewsCategoryNav />
        <hgroup className="regional-news-title">
          <h1 className="capitalize">Berita {name}</h1>
          <p>
            Menampilkan seluruh berita <span className="lowercase">{name}</span>
          </p>
        </hgroup>
      </div>

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

export default OtherNewsCategory;
