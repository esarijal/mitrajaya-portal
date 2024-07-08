import ArticleComments from "@/components/custom/article-comments";
import CityTags from "@/components/custom/city-tags";
import DistrictTags from "@/components/custom/district-tags";
import Loader from "@/components/custom/loader";
import ProvinceTags from "@/components/custom/province-tags";
import RegionalBreadcrumb from "@/components/custom/regional-breadcrumb";
import SubDistrictTags from "@/components/custom/subdistrict-tags";
import { useGetArticleDetail } from "@/hooks/useGetDetailArticles";
import { Share2 } from "lucide-react";
import { useParams } from "react-router-dom";

function RegionalNewsDetail() {
  const { prov_name, city_name, district_name, subdistrict_name, news_id } =
    useParams();

  const renderRegionNewsTags = () => {
    if (subdistrict_name) {
      return <SubDistrictTags color="secondary" />;
    } else if (district_name) {
      return <DistrictTags color="secondary" />;
    } else if (city_name) {
      return <CityTags color="secondary" />;
    } else if (prov_name) {
      return <ProvinceTags color="secondary" />;
    } else {
      return null;
    }
  };

  const { data: news, isLoading: newsIsLoading } = useGetArticleDetail({
    articleID: news_id as string,
  });

  const handleRenderContent = (content: string) => {
    return {
      __html: content,
    };
  };

  if (newsIsLoading) return <Loader color="secondary" />;

  if (!news) return <div>news undefined</div>;

  return (
    <div className="pt-5 space-y-6 md:pt-20 md:space-y-10">
      <div>
        <RegionalBreadcrumb color="secondary" />
      </div>
      <article className="space-y-6 md:space-y-10">
        {/* title */}
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-xl font-semibold md:text-4xl">{news.title}</h1>
          <div className="flex items-center justify-between px-2 py-4 border-y border-[#DDE2EE] md:py-5 md:px-5">
            <time
              className="text-xs font-normal md:text-base text-primary-foreground"
              dateTime={
                news.updated_at > news.published_at
                  ? news.updated_at
                  : news.published_at
              }
            >
              {new Date(
                news.updated_at > news.published_at
                  ? news.updated_at
                  : news.published_at
              ).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <button className="flex gap-2 text-xs font-normal text-primary-foreground md:text-base">
              Share{" "}
              <Share2
                fill="#667697"
                className="h-[14px] aspect-square md:h-6"
              />
            </button>
          </div>
        </div>
        {/* Image or Video Cover */}
        {news.image_url && (
          <>
            {news.image_url.includes(".mp4") ? (
              <video
                controls
                className="w-full rounded-[8px] h-[200px] md:h-[450px] object-contain bg-secondary-foreground"
              >
                <source src={news.image_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={news.image_url}
                alt="image"
                className="w-full rounded-[8px] h-[200px] md:h-[450px] object-contain bg-secondary-foreground"
              />
            )}
          </>
        )}
      </article>
      <div className="flex flex-row-reverse lg:gap-16">
        {/* region news tags */}
        <div className="hidden lg:block">{renderRegionNewsTags()}</div>

        <div className="w-full space-y-6 md:space-y-8">
          {/* content */}
          <article>
            <div
              className="text-base md:text-lg"
              dangerouslySetInnerHTML={handleRenderContent(news?.content)}
            />
          </article>

          {/* region news tags */}
          <div className="block lg:hidden">{renderRegionNewsTags()}</div>

          {/* comments */}
          <ArticleComments articleID={news?.id} />
        </div>
      </div>
    </div>
  );
}

export default RegionalNewsDetail;
