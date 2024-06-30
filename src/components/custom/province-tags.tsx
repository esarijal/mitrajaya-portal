import { useNavigate } from "react-router-dom";
import { Badge } from "../ui/badge";

function ProvinceTags() {
  const provinceTags = [
    {
      id: 1,
      prov_name: "Tag 1",
    },
    {
      id: 2,
      prov_name: "Tag 2",
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

  const navigate = useNavigate();
  const handleOnClick = (id: number) => {
    navigate(`/tag/${id}`);
  };

  return (
    <div className="min-w-[360px] space-y-7">
      <h2>Berita Berdasarkan Provinsi</h2>
      <div className="flex flex-wrap gap-3">
        {provinceTags &&
          provinceTags.map((tag) => (
            <Badge
              className="cursor-pointer"
              onClick={() => handleOnClick(tag.id)}
            >
              {tag.prov_name}{" "}
            </Badge>
          ))}
      </div>
    </div>
  );
}

export default ProvinceTags;
