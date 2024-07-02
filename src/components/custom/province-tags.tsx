import { Badge } from "../ui/badge";

function ProvinceTags() {
  const provinceTags = [
    {
      id: 1,
      prov_name: "provinsi satu",
    },
    {
      id: 2,
      prov_name: "provinsi dua",
    },
    {
      id: 3,
      prov_name: "Tag 3",
    },
    {
      id: 4,
      prov_name: "Tag 4",
    },
    {
      id: 5,
      prov_name: "Tag 5",
    },
    {
      id: 6,
      prov_name: "Tag 6",
    },
    {
      id: 6,
      prov_name: "Tag 6",
    },
    {
      id: 7,
      prov_name: "Tag 723123",
    },
    {
      id: 8,
      prov_name: "Tag 8",
    },
    {
      id: 9,
      prov_name: "Tag 9",
    },
    {
      id: 10,
      prov_name: "Tag 10",
    },
  ];

  const url = window.location;
  return (
    <div className="min-w-[360px] space-y-7">
      <h2>Berita Berdasarkan Provinsi</h2>
      <div className="flex flex-wrap gap-3">
        {provinceTags &&
          provinceTags.map((tag) => (
            <a href={`${url.pathname}/${tag.id}/${tag.prov_name}`}>
              <Badge className="cursor-pointer">{tag.prov_name} </Badge>
            </a>
          ))}
      </div>
    </div>
  );
}

export default ProvinceTags;
