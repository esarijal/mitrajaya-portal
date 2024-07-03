import { ArticleTagType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchRelatedTags({ articleID }: { articleID: string }) {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/articles/${articleID}/tags`
  );

  return response.data.data as ArticleTagType[];
}

export function useGetRelatedTags({ articleID }: { articleID: string }) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["relatedTags"],
    queryFn: () => fetchRelatedTags({ articleID }),
    enabled: !!articleID,
  });

  return { data, isLoading, isError, isSuccess };
}
