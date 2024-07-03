import { ArticleResponsePaging } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchRegionTrendingArticles({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/region-trending-articles?page=${page}&pageSize=${pageSize}`
  );

  return response.data as ArticleResponsePaging;
}

export function useGetRegionTrendingArticles({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["regionTrendingArticles", page, pageSize],
    queryFn: () => fetchRegionTrendingArticles({ page, pageSize }),
  });

  return { data, isLoading, isError, isSuccess };
}
