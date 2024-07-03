import { Badge } from "../ui/badge";
import { useGetRelatedTags } from "@/hooks/useGetRelatedTags";

function RelatedTags({ articleID }: { articleID: number | undefined }) {
  const { data: tags } = useGetRelatedTags({
    articleID: String(articleID) as string,
  });

  return (
    articleID &&
    tags && (
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-secondary-foreground">Tag Terkait</h2>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {tags.map((tag) => (
            <a href={`/tag/${tag.id}/${tag.name}`}>
              <Badge variant={"secondary"} className="h-10 cursor-pointer">
                {tag.name}
              </Badge>
            </a>
          ))}
        </div>
      </div>
    )
  );
}

export default RelatedTags;
