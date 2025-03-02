import Loader from "@/components/custom/loader";
import RenderNewsContent from "@/components/custom/render-news-content";
import { useGetArticleDetail } from "@/hooks/useGetDetailArticles";
import { useParams } from "react-router-dom";
import RelatedTags from "@/components/custom/related-tags";
import RelatedArticles from "@/components/custom/related-articles";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ArticleComments from "@/components/custom/article-comments";
import ShareButton from "@/components/custom/share-button";

function NewsDetail() {
  const { news_id, news_title } = useParams();

  const { data: news, isLoading: newsIsLoading } = useGetArticleDetail({
    articleID: news_id as string,
  });

  if (newsIsLoading) return <Loader color="secondary" />;

  if (!news) return <div>news undefined</div>;

  return (
    <div className="max-w-[820px] mx-auto pt-5 md:pt-20 space-y-6 md:space-y-10">
      <Breadcrumb>
        <BreadcrumbList className="text-sm md:text-lg flex-nowrap text-nowrap">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Artikel</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/#"
              className="font-semibold text-secondary-foreground md:max-w-[500px] max-w-[200px] truncate text-ellipsis overflow-clip"
            >
              {decodeURIComponent(news_title ?? "")}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <article className="space-y-6 md:space-y-10">
        {/* title */}
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-xl font-semibold md:text-4xl">{decodeURIComponent(news?.title)}</h1>
          <div className="flex items-center justify-between px-2 py-4 border-y border-[#DDE2EE] md:py-5 md:px-5">
            <div className="flex flex-col gap-2 md:flex-row">
              {news.author_name && (
                <>
                  <p className="text-xs font-normal max-w-52 md:text-base text-primary-foreground line-clamp-1">
                    Oleh : {news?.author_name}
                  </p>
                  <span className="hidden text-primary-foreground md:block">
                    |
                  </span>
                </>
              )}
              <time
                className="text-xs font-normal md:text-base text-primary-foreground"
                dateTime={
                  news?.updated_at > news?.published_at
                    ? news?.updated_at
                    : news?.published_at
                }
              >
                {new Date(
                  news?.updated_at > news?.published_at
                    ? news?.updated_at
                    : news?.published_at
                )
                  .toLocaleString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    timeZone: "UTC",
                  })
                  .replace("pukul", ",")}{" "}
                WIB
              </time>
            </div>

            <ShareButton />
          </div>
        </div>

        {/* image or video cover */}
        {news?.image_url && (
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

        {/* content */}
        <RenderNewsContent content={news?.content} />
      </article>

      <RelatedTags articleID={news?.id} />

      {/* comments */}
      <ArticleComments articleID={news?.id} />

      {/* related articles */}
      <RelatedArticles articleID={news?.id} />
    </div>
  );
}

export default NewsDetail;
