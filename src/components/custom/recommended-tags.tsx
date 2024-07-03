import { useGetRecommendedTags } from "@/hooks/useGetRecommededTags";
import { Badge } from "../ui/badge";

function RecommendedTags() {
  const { data: recommendedTags } = useGetRecommendedTags();

  return (
    recommendedTags &&
    recommendedTags.length > 0 && (
      <div className="min-w-[360px] space-y-7">
        <h2>Rekomendasi Topik</h2>
        <div className="flex flex-wrap gap-3">
          {recommendedTags.map((tag) => (
            <a key={tag.id} href={`/tag/${tag.id}/${tag.name}`}>
              <Badge className="cursor-pointer">{tag.name}</Badge>
            </a>
          ))}
        </div>
      </div>
    )
  );
}

export default RecommendedTags;
