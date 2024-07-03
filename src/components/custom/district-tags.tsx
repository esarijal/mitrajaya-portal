import { createRegionalTagsUrl } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { useGetDistrictWithArticles } from "@/hooks/useGetDistrictWithArticles";
import { useParams } from "react-router-dom";

function DistrictTags({
  color = "primary",
}: {
  color?: "primary" | "secondary";
}) {
  const { city_id } = useParams();

  const { data: districtTags } = useGetDistrictWithArticles({
    cityID: city_id as string,
  });

  return (
    <div className="min-w-[360px] space-y-7">
      <h2
        className={
          color === "primary" ? "text-primary" : "text-secondary-foreground"
        }
      >
        Berita Berdasarkan Kecamatan
      </h2>
      <div className="flex flex-wrap gap-3">
        {districtTags &&
          districtTags.map((tag) => (
            <a
              href={createRegionalTagsUrl({
                id: tag.id,
                name: tag.kecamatan_name,
              })}
              key={tag.id}
            >
              <Badge
                variant={color === "primary" ? "default" : "secondary"}
                className="cursor-pointer"
              >
                {tag.kecamatan_name}
              </Badge>
            </a>
          ))}
      </div>
    </div>
  );
}

export default DistrictTags;
