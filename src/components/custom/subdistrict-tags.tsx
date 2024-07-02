import { Badge } from "../ui/badge";

function SubDistrictTags() {
  const subdistrictTags = [
    {
      id: 1,
      name: "kelurahan satu",
    },
    {
      id: 2,
      name: "kelurahan dua",
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

  const url = window.location;
  return (
    <div className="min-w-[360px] space-y-7">
      <h2>Berita Berdasarkan Kelurahan</h2>
      <div className="flex flex-wrap gap-3">
        {subdistrictTags &&
          subdistrictTags.map((tag) => (
            <a href={`${url.pathname}/${tag.id}/${tag.name}`}>
              <Badge className="cursor-pointer">{tag.name} </Badge>
            </a>
          ))}
      </div>
    </div>
  );
}

export default SubDistrictTags;
