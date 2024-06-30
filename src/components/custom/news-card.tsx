const NewsCard = ({
  size = "large",
  title,
  subHeading,
  image,
  publishDate,
  updateDate,
  id,
}: {
  size?: "large" | "small" | "regular";
  title: string;
  subHeading: string;
  image: string;
  publishDate: string;
  updateDate: string;
  id: number;
}) => {
  const handleOnClick = () => {
    window.location.href = `/berita/${id}`;
  };

  const date = updateDate > publishDate ? updateDate : publishDate;

  const LargeNewsCard = () => {
    return (
      <div
        onClick={handleOnClick}
        className="flex flex-col-reverse w-full gap-5 md:flex-row"
      >
        <div className="flex flex-col justify-between gap-2">
          <div className="flex flex-col w-full space-y-2 md:space-y-3">
            <h1 className="text-base font-medium line-clamp-3 md:text-[32px] text-primary leading-snug">
              {title}
            </h1>
            <h2 className="hidden text-xs font-normal md:text-base text-primary-foreground md:line-clamp-2">
              {subHeading}
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
        <img
          src={image}
          className="md:h-[320px] h-[180px] rounded-xl object-cover md:rounded-[20px] aspect-square"
          alt="image"
        />
      </div>
    );
  };

  const RegularNewsCard = () => {
    return (
      <div
        onClick={handleOnClick}
        className="w-full space-y-3 article-card md:space-y-4"
      >
        <img
          src={image}
          className="h-[180px] w-full rounded-xl object-cover md:h-[205px] md:rounded-[20px]"
          alt="image"
        />
        <div className="flex flex-col space-y-1 md:space-y-2">
          <h1 className="font-medium line-clamp-2 text-primary">{title}</h1>
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
        className="flex flex-col w-full gap-3 md:items-center md:flex-row article-card h-fit md:gap-7"
      >
        <img
          src={image}
          className="h-[200px] w-full rounded-2xl object-cover md:h-[170px] md:w-[250px]"
          alt="image"
        />
        <div className="flex flex-col space-y-2 md:space-y-4">
          <h1 className="text-base font-medium text-primary md:text-xl">
            {title}
          </h1>
          <h2 className="hidden text-base font-normal md:line-clamp-2 text-primary-foreground ">
            {subHeading}
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
