import DistrictTags from "@/components/custom/district-tags";
import Loader from "@/components/custom/loader";
import NewsCard from "@/components/custom/news-card";
import NewsCategoryNav from "@/components/custom/news-category-nav";
import RecommendedTags from "@/components/custom/recommended-tags";
import RegionalBreadcrumb from "@/components/custom/regional-breadcrumb";
import ShowMoreButton from "@/components/custom/show-more-button";
import { useGetCityLatestArticles } from "@/hooks/useGetCityLatestArticles";
import { useState } from "react";
import { useParams } from "react-router-dom";

function CityNews() {
  const { city_name, city_id } = useParams();

  const [pageSize, setPageSize] = useState(5);
  const {
    data: cityNews,
    isLoading,
    isSuccess,
  } = useGetCityLatestArticles({
    cityID: city_id as string,
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
          <h1>{city_name}</h1>
          <p>Menampilkan berita di {city_name}</p>
        </hgroup>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {cityNews && cityNews.data && cityNews.data.length > 0 && (
          <div className="flex flex-col w-full gap-4 md:gap-8">
            <div className="space-y-4 md:space-y-8">
              {cityNews.data.map((article) => (
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
              totalPage={cityNews.total_pages}
            />
          </div>
        )}

        {isSuccess && cityNews && !cityNews.data && (
          <div className="flex flex-col w-full gap-4 md:gap-8">
            <h3 className="text-xl font-medium text-white">Belum Ada Berita</h3>
            <p className="text-primary-foreground">
              Tidak ada berita di lokasi ini. Coba ganti lokasi untuk melihat
              berita dari daerah lain.
            </p>
          </div>
        )}
        <div className="flex flex-col flex-1 gap-8">
          <DistrictTags />
          <RecommendedTags />
        </div>
      </div>
    </div>
  );
}

export default CityNews;
