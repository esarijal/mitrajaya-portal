import { ArticleType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchTopTrendingtArticles() {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/top5-trending-articles`
  );

  return response.data.data as ArticleType[];
}

export function useGetTopTrendingArticles() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["topTrendingtArticles"],
    queryFn: () => fetchTopTrendingtArticles(),
  });

  return { data, isLoading, isError, isSuccess };
}
