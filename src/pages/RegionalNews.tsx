import NewsCard from "@/components/custom/news-card";
import NewsCategoryNav from "@/components/custom/news-category-nav";
import ProvinceTags from "@/components/custom/province-tags";
import RecommendedTags from "@/components/custom/recommended-tags";
import ShowMoreButton from "@/components/custom/show-more-button";
import { useGetLatestArticlesByCategory } from "@/hooks/useGetLatestAriclesByCategory";
import { useGetRegionTrendingArticles } from "@/hooks/useGetRegionTrendingArticles";
import { useState } from "react";
import { useParams } from "react-router-dom";

function RegionalNews() {
  const { id: categoryID } = useParams();
  const [regionPageSize, setRegionPageSize] = useState(5);
  const { data: regionalNews } = useGetRegionTrendingArticles({
    page: 1,
    pageSize: regionPageSize,
  });

  const [latestNewsPageSize, setLatestNewsPageSize] = useState(5);

  const { data: latestArticles } = useGetLatestArticlesByCategory({
    page: 1,
    pageSize: latestNewsPageSize,
    categoryID: categoryID as string,
  });

  return (
    <div className="space-y-[52px] md:space-y-[72px]">
      <div>
        <NewsCategoryNav />
        <hgroup className="regional-news-title">
          <h1>Indonesia</h1>
          <p>Menampilkan seluruh berita di Indonesia</p>
        </hgroup>
      </div>

      <div>
        <h2 className="pb-5 border-b my-7 md:my-16">Sedang Viral</h2>
        <div className="flex flex-col gap-8 lg:flex-row">
          {regionalNews &&
            regionalNews.data &&
            regionalNews.data.length > 0 && (
              <div className="flex flex-col w-full gap-4 md:gap-8">
                <div className="space-y-4 md:space-y-8">
                  {regionalNews.data.map((article) => (
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
                  pageSize={regionPageSize}
                  setPageSize={setRegionPageSize}
                  totalPage={regionalNews.total_pages}
                />
              </div>
            )}
          <div className="flex flex-col flex-1 gap-8">
            <RecommendedTags />
            <ProvinceTags />
          </div>
        </div>
      </div>

      <div>
        <h2 className="pb-5 border-b my-7 md:my-16">Berita Terkini</h2>
        <div className="flex flex-col gap-8 lg:flex-row">
          {latestArticles &&
            latestArticles.data &&
            latestArticles.data.length > 0 && (
              <div className="flex flex-col items-center gap-4 md:gap-8">
                <div className="space-y-4 md:space-y-8">
                  {latestArticles.data.map((article) => (
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
                  pageSize={latestNewsPageSize}
                  totalPage={latestArticles.total_pages}
                  setPageSize={setLatestNewsPageSize}
                />
              </div>
            )}
          <div className="flex flex-col gap-8"></div>
        </div>
      </div>
    </div>
  );
}

export default RegionalNews;
