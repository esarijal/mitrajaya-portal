import { createRegionalTagsUrl } from "@/lib/utils";
import { Badge } from "../ui/badge";

function ProvinceTags({
  color = "primary",
}: {
  color?: "primary" | "secondary";
}) {
  const provinceTags = [
    {
      id: 1,
      name: "provinsi satu",
    },
    {
      id: 2,
      name: "provinsi dua",
    },
    {
      id: 3,
      name: "Tag 3",
    },
    {
      id: 4,
      name: "Tag 4",
    },
    {
      id: 5,
      name: "Tag 5",
    },
    {
      id: 6,
      name: "Tag 6",
    },
    {
      id: 6,
      name: "Tag 6",
    },
    {
      id: 7,
      name: "Tag 723123",
    },
    {
      id: 8,
      name: "Tag 8",
    },
    {
      id: 9,
      name: "Tag 9",
    },
    {
      id: 10,
      name: "Tag 10",
    },
  ];

  return (
    <div className="min-w-[360px] space-y-7">
      <h2
        className={
          color === "primary" ? "text-primary" : "text-secondary-foreground"
        }
      >
        Berita Berdasarkan Provinsi
      </h2>
      <div className="flex flex-wrap gap-3">
        {provinceTags &&
          provinceTags.map((tag) => (
            <a href={createRegionalTagsUrl(tag)} key={tag.id}>
              <Badge
                variant={color === "primary" ? "default" : "secondary"}
                className="cursor-pointer"
              >
                {tag.name}{" "}
              </Badge>
            </a>
          ))}
      </div>
    </div>
  );
}

export default ProvinceTags;
