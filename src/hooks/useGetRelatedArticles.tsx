import { ArticleType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchRelatedArticles({ articleID }: { articleID: string }) {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/articles/${articleID}/related`
  );

  return response.data.data as ArticleType[];
}

export function useGetRelatedArticles({ articleID }: { articleID: string }) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["relatedArticles"],
    queryFn: () => fetchRelatedArticles({ articleID }),
    enabled: !!articleID,
  });

  return { data, isLoading, isError, isSuccess };
}
