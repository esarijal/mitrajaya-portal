import { useNavigate } from "react-router-dom";
import { Badge } from "../ui/badge";

function RecommendedTags() {
  const recommendedTags = [
    {
      id: 1,
      name: "Tag 1",
    },
    {
      id: 2,
      name: "Tag 2",
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
  const navigate = useNavigate();
  const handleOnClick = (id: number) => {
    navigate(`/tag/${id}`);
  };

  return (
    <div className="min-w-[360px] space-y-7">
      <h2>Rekomendasi Topik</h2>
      <div className="flex flex-wrap gap-3">
        {recommendedTags &&
          recommendedTags.map((tag) => (
            <Badge
              className="cursor-pointer"
              onClick={() => handleOnClick(tag.id)}
            >
              {tag.name}{" "}
            </Badge>
          ))}
      </div>
    </div>
  );
}

export default RecommendedTags;
