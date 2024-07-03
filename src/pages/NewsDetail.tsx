import Loader from "@/components/custom/loader";
import RenderNewsContent from "@/components/custom/render-news-content";
import { useGetArticleDetail } from "@/hooks/useGetDetailArticles";
import { Share2 } from "lucide-react";
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
              {news_title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <article className="space-y-6 md:space-y-10">
        {/* title */}
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-xl font-semibold md:text-4xl">{news?.title}</h1>
          <div className="flex items-center justify-between px-2 py-4 border-y border-[#DDE2EE] md:py-5 md:px-5">
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

        {/* image cover */}
        <img
          src={news?.image_url}
          alt="image"
          className="w-full rounded-[8px] h-[200px] md:h-[450px] object-cover"
        />

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
