import { ArticleResponsePaging } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchArticlesByTags({ tagName }: { tagName: string }) {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/tags/${tagName}/articles`
  );

  return response.data as ArticleResponsePaging;
}

export function useGetArticlesByTags({ tagName }: { tagName: string }) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["articlesByTags"],
    queryFn: () => fetchArticlesByTags({ tagName }),
    enabled: !!tagName,
  });

  return { data, isLoading, isError, isSuccess };
}
