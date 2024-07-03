import Loader from "@/components/custom/loader";
import NewsCard from "@/components/custom/news-card";
import NewsCategoryNav from "@/components/custom/news-category-nav";
import ProvinceTags from "@/components/custom/province-tags";
import RecommendedTags from "@/components/custom/recommended-tags";
import ShowMoreButton from "@/components/custom/show-more-button";
import ViralNews from "@/components/custom/viral-news";
import { useGetLatestArticles } from "@/hooks/useGetLatestArticles";
import { useGetTopLatesArticles } from "@/hooks/useGetTopLatestArticles";
import { useGetTopTrendingArticles } from "@/hooks/useGetTopTrendingArticles";
import { useState } from "react";

function Home() {
  const [pageSize, setPageSize] = useState(5);

  const { data: topLatestArticles, isLoading } = useGetTopLatesArticles();
  const { data: trendingArticles } = useGetTopTrendingArticles();

  const { data: latestArticles } = useGetLatestArticles({ page: 1, pageSize });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="space-y-[52px] md:space-y-[72px]">
      <NewsCategoryNav />
      <div className="flex flex-col gap-8 lg:flex-row">
        {topLatestArticles && topLatestArticles.length > 0 && (
          <div className="grid gap-4 md:grid-cols-3">
            {topLatestArticles.map((article, index) => (
              <div
                className={index === 0 ? "md:col-span-3" : "col-span-1"}
                key={article.id}
              >
                <NewsCard
                  key={article.id}
                  id={article.id}
                  size={index === 0 ? "large" : "regular"}
                  title={article.title}
                  subHeading={article.content}
                  image={article.image_url}
                  publishDate={article.published_at}
                  updateDate={article.updated_at}
                />
              </div>
            ))}
          </div>
        )}
        <ViralNews news={trendingArticles} />
      </div>

      <div>
        <h2 className="pb-5 border-b my-7 md:my-16">Berita lainnya</h2>
        <div className="flex flex-col gap-8 lg:flex-row">
          {latestArticles &&
            latestArticles.data &&
            latestArticles.data.length > 0 && (
              <div className="flex flex-col w-full gap-4 md:gap-8">
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

                <div className="mx-auto">
                  <ShowMoreButton
                    totalPage={latestArticles.total_pages}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                  />
                </div>
              </div>
            )}
          <div className="flex flex-col flex-1 gap-8">
            <RecommendedTags />
            <ProvinceTags />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
