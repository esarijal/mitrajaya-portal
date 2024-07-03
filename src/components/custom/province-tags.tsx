import { Badge } from "../ui/badge";
import { useGetProvinceWithArticles } from "@/hooks/useGetProvinceWithArticles";

function ProvinceTags({
  color = "primary",
}: {
  color?: "primary" | "secondary";
}) {
  const { data: provinceTags } = useGetProvinceWithArticles();

  return (
    provinceTags &&
    provinceTags.length > 0 && (
      <div className="min-w-[360px] space-y-7">
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
