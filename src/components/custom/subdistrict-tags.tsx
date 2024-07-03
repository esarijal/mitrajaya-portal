import { createRegionalTagsUrl } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { useParams } from "react-router-dom";
import { useGetSubdistrictWithArticles } from "@/hooks/useGetSubdistrictWithArticles";

function SubDistrictTags({
  color = "primary",
}: {
  color?: "primary" | "secondary";
}) {
  const { district_id } = useParams();

  const { data: subdistrictTags } = useGetSubdistrictWithArticles({
    districtID: district_id as string,
  });

  return (
    <div className="min-w-[360px] space-y-7">
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
