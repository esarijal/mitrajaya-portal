import { createRegionalTagsUrl } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { useParams } from "react-router-dom";
import { useGetRegionList } from "@/hooks/useGetRegionList";

function SubDistrictTags({
  color = "primary",
}: {
  color?: "primary" | "secondary";
}) {
  const { district_id, prov_id, city_id } = useParams();

  const { data: subdistrictTags } = useGetRegionList({
    prov_id: prov_id as string,
    city_id: city_id as string,
    district_id: district_id as string,
  });

  return (
    <div className="min-w-[360px] lg:w-[360px] space-y-7">
      <h2
        className={
          color === "primary" ? "text-primary" : "text-secondary-foreground"
        }
      >
        Berita Berdasarkan Kelurahan
      </h2>
      <div className="flex flex-wrap gap-3">
        {subdistrictTags &&
          subdistrictTags.map((tag) => (
            <a
              href={createRegionalTagsUrl({
                id: tag.id,
                name: tag.kelurahan_name,
              })}
              key={tag.id}
            >
              <Badge
                variant={color === "primary" ? "default" : "secondary"}
                className="cursor-pointer"
              >
                {tag.kelurahan_name}
              </Badge>
            </a>
          ))}
      </div>
    </div>
  );
}

export default SubDistrictTags;
