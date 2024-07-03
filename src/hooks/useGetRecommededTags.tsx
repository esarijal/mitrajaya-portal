import { ArticleTagType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchRecommendedTags() {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/recommended-tags`
  );

  return response.data.data as ArticleTagType[];
}

export function useGetRecommendedTags() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["recommendedTags"],
    queryFn: () => fetchRecommendedTags(),
  });

  return { data, isLoading, isError, isSuccess };
}
