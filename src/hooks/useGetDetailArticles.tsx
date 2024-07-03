import { ArticleType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchArticleDetail({ articleID }: { articleID: string }) {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/articles/${articleID}`
  );

  return response.data.data as ArticleType;
}

export function useGetArticleDetail({ articleID }: { articleID: string }) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["detailArticle"],
    queryFn: () => fetchArticleDetail({ articleID }),
    enabled: !!articleID,
  });

  return { data, isLoading, isError, isSuccess };
}
