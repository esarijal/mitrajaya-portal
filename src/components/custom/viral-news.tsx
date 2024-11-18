import { ArticleType } from "@/types/type";

function ViralNews({ news }: { news: ArticleType[] | undefined }) {
  return (
    news &&
    news.length > 0 && (
      <div className="space-y-7 min-w-[360px]">
        <h2>Berita Viral</h2>
        <div className="flex flex-col gap-4">
          {news.map((item, index) => (
            <a
              key={item.id}
              className="flex gap-3 cursor-pointer group"
              href={`/detail-berita/${item.id}/${item.title}`}
            >
              <div className="h-6 mt-1 aspect-square bg-[#DC0000] text-center rounded">
                <p className="text-primary">{index + 1}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-base text-primary group-hover:underline group-hover:text-active">
                  {item.title}
                </h1>
                <time
                  className="text-xs font-normal text-primary-foreground md:text-sm"
                  dateTime={
                    item.updated_at > item.published_at
                      ? item.updated_at
                      : item.published_at
                  }
                >
                  {new Date(
                    item.updated_at > item.published_at
                      ? item.updated_at
                      : item.published_at
                  ).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
              </div>
            </a>
          ))}
        </div>
      </div>
    )
  );
}

export default ViralNews;
