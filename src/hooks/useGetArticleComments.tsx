import { ArticleCommentType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchArticleComments({ articleID }: { articleID: string }) {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/articles/${articleID}/comments`
  );

  return response.data.data as ArticleCommentType[];
}

export function useGetArticleComments({ articleID }: { articleID: string }) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["articleComments"],
    queryFn: () => fetchArticleComments({ articleID }),
    enabled: !!articleID,
  });

  return { data, isLoading, isError, isSuccess };
}
