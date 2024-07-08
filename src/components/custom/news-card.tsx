import { convertHtmlToPlainText } from "@/lib/utils";

const NewsCard = ({
  size = "large",
  title,
  subHeading,
  image,
  publishDate,
  updateDate,
  id,
  color = "primary",
}: {
  size?: "large" | "small" | "regular";
  title: string;
  subHeading?: string;
  image: string;
  publishDate: string;
  updateDate: string;
  id: number;
  color?: "primary" | "secondary";
}) => {
  const url = window.location;

  const handleOnClick = () => {
    if (url.pathname.includes("/daerah")) {
      window.location.href = `/detail-berita${url.pathname}/${id}/${title}`;
    } else {
      window.location.href = `/detail-berita/${id}/${title}`;
    }
  };

  const date = updateDate > publishDate ? updateDate : publishDate;

  const LargeNewsCard = () => {
    return (
      <div
        onClick={handleOnClick}
        className="flex flex-col-reverse justify-between w-full gap-5 cursor-pointer md:flex-row group"
      >
        <div className="flex flex-col justify-between gap-2">
          <div className="flex flex-col w-full space-y-2 md:space-y-3">
            <h1 className="text-base font-medium line-clamp-3 md:text-[32px] text-primary leading-snug group-hover:underline group-hover:text-active">
              {title}
            </h1>
            <h2 className="hidden text-xs font-normal md:text-base text-primary-foreground md:line-clamp-2">
              {convertHtmlToPlainText(subHeading)}
            </h2>
          </div>
          <time
            className="text-xs font-normal md:text-base text-primary-foreground"
            dateTime={date}
          >
            {new Date(date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        {/* Image or Video Element */}
        {image && (
          <>
            {image.includes(".mp4") ? (
              <video
                controls={false}
                muted
                className="md:h-[320px] h-[180px] rounded-xl object-cover md:rounded-[20px] aspect-square"
              >
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={image}
                alt="image"
                className="md:h-[320px] h-[180px] rounded-xl object-cover md:rounded-[20px] aspect-square"
              />
            )}
          </>
        )}
      </div>
    );
  };

  const RegularNewsCard = () => {
    return (
      <div
        onClick={handleOnClick}
        className="w-full space-y-3 cursor-pointer article-card md:space-y-4 group"
      >
        {/* Image or Video Element */}
        {image && (
          <>
            {image.includes(".mp4") ? (
              <video
                controls={false}
                muted
                className="h-[180px] w-full rounded-xl object-cover md:h-[205px] md:rounded-[20px]"
              >
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={image}
                alt="image"
                className="h-[180px] w-full rounded-xl object-cover md:h-[205px] md:rounded-[20px]"
              />
            )}
          </>
        )}
        <div className="flex flex-col space-y-1 md:space-y-2">
          <h1
            className={`font-medium line-clamp-2 ${
              color === "primary" ? "text-primary" : "text-secondary-foreground"
            } group-hover:underline group-hover:text-active`}
          >
            {title}
          </h1>
          <time
            className="text-xs font-normal text-primary-foreground md:text-sm"
            dateTime={date}
          >
            {new Date(date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </div>
    );
  };

  const SmallNewsCard = () => {
    return (
      <div
        onClick={handleOnClick}
        className="flex flex-col w-full gap-3 cursor-pointer md:items-center md:flex-row article-card h-fit md:gap-7 group"
      >
        {/* Image or Video Element */}
        {image && (
          <>
            {image.includes(".mp4") ? (
              <video
                controls={false}
                muted
                className="h-[200px] w-full rounded-2xl object-cover md:h-[170px] md:w-[250px]"
              >
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={image}
                alt="image"
                className="h-[200px] w-full rounded-2xl object-cover md:h-[170px] md:w-[250px]"
              />
            )}
          </>
        )}
        <div className="flex flex-col flex-1 space-y-2 md:space-y-4">
          <h1 className="text-base font-medium text-primary md:text-xl group-hover:underline group-hover:text-active">
            {title}
          </h1>
          <h2 className="hidden text-base font-normal md:line-clamp-2 text-primary-foreground ">
            {convertHtmlToPlainText(subHeading)}
          </h2>
          <time
            className="font-copy text-[11px]  font-normal md:text-sm text-primary-foreground"
            dateTime={date}
          >
            {new Date(date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </div>
    );
  };

  return (
    (size === "large" && <LargeNewsCard />) ||
    (size === "regular" && <RegularNewsCard />) ||
    (size === "small" && <SmallNewsCard />)
  );
};

export default NewsCard;
