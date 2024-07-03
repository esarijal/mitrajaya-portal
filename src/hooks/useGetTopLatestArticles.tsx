import { ArticleType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchTopLatestArticles() {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/top4-latest-articles`
  );

  return response.data.data as ArticleType[];
}

export function useGetTopLatesArticles() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["topLatestArticles"],
    queryFn: () => fetchTopLatestArticles(),
  });

  return { data, isLoading, isError, isSuccess };
}
