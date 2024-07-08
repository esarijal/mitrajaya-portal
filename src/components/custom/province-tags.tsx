import { useGetRegionList } from "@/hooks/useGetRegionList";
import { Badge } from "../ui/badge";

function ProvinceTags({
  color = "primary",
}: {
  color?: "primary" | "secondary";
}) {
  const { data: provinceTags } = useGetRegionList({});

  return (
    provinceTags &&
    provinceTags.length > 0 && (
      <div className="min-w-[360px] lg:w-[360px] space-y-7">
        <h2
          className={
            color === "primary" ? "text-primary" : "text-secondary-foreground"
          }
        >
          Berita Berdasarkan Provinsi
        </h2>
        <div className="flex flex-wrap gap-3">
          {provinceTags.map((tag) => (
            <a href={`/daerah/1/${tag.id}/${tag.prov_name}`} key={tag.id}>
              <Badge
                variant={color === "primary" ? "default" : "secondary"}
                className="cursor-pointer"
              >
                {tag.prov_name}{" "}
              </Badge>
            </a>
          ))}
        </div>
      </div>
    )
  );
}

export default ProvinceTags;
