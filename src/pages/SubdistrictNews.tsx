import Loader from "@/components/custom/loader";
import NewsCard from "@/components/custom/news-card";
import NewsCategoryNav from "@/components/custom/news-category-nav";
import RecommendedTags from "@/components/custom/recommended-tags";
import RegionalBreadcrumb from "@/components/custom/regional-breadcrumb";
import ShowMoreButton from "@/components/custom/show-more-button";
import { useGetSubdistrictLatestArticles } from "@/hooks/useGetSubdistrictLatestArticles";
import { useState } from "react";
import { useParams } from "react-router-dom";

function SubdistrictNews() {
  const { subdistrict_name, subdistrict_id } = useParams();
  const [pageSize, setPageSize] = useState(5);

  const { data: subdistrictNews, isLoading } = useGetSubdistrictLatestArticles({
    subdistrictID: subdistrict_id as string,
    page: 1,
    pageSize,
  });

  if (isLoading) return <Loader />;

  return (
    <div className="space-y-[52px] md:space-y-[72px]">
      <div>
        {/* Breadcrumb */}
        <div className="pt-4 pb-2 md:pb-10 md:pt-9">
          <RegionalBreadcrumb />
        </div>

        <NewsCategoryNav />
        <hgroup className="regional-news-title">
          <h1>{subdistrict_name}</h1>
          <p>Menampilkan berita di {subdistrict_name}</p>
        </hgroup>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {subdistrictNews &&
          subdistrictNews.data &&
          subdistrictNews.data.length > 0 && (
            <div className="flex flex-col w-full gap-4 md:gap-8">
              <div className="space-y-4 md:space-y-8">
                {subdistrictNews.data.map((article) => (
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
                totalPage={subdistrictNews.total_pages}
              />
            </div>
          )}
        <div className="flex flex-col flex-1 gap-8">
          <RecommendedTags />
        </div>
      </div>
    </div>
  );
}

export default SubdistrictNews;
