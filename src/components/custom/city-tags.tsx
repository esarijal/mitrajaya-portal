import { createRegionalTagsUrl } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { useGetCityWithArticles } from "@/hooks/useGetCityWithArticles";
import { useParams } from "react-router-dom";

function CityTags({ color = "primary" }: { color?: "primary" | "secondary" }) {
  const { prov_id } = useParams();
  const { data: cityTags } = useGetCityWithArticles({
    provID: prov_id as string,
  });

  return (
    <div className="min-w-[360px] space-y-7">
      <h2
        className={
          color === "primary" ? "text-primary" : "text-secondary-foreground"
        }
      >
        Berita Berdasarkan Kabupaten / Kota
      </h2>
      <div className="flex flex-wrap gap-3">
        {cityTags &&
          cityTags.map((tag) => (
            <a
              href={createRegionalTagsUrl({
                id: tag.id,
                name: tag.kota_name,
              })}
              key={tag.id}
            >
              <Badge
                variant={color === "primary" ? "default" : "secondary"}
                className="cursor-pointer"
              >
                {tag.kota_name}{" "}
              </Badge>
            </a>
          ))}
      </div>
    </div>
  );
}

export default CityTags;
