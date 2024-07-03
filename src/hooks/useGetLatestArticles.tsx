import { ArticleResponsePaging } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchLatestArticles({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/latest-articles?page=${page}&pageSize=${pageSize}`
  );

  return response.data as ArticleResponsePaging;
}

export function useGetLatestArticles({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["latestArticles", page, pageSize],
    queryFn: () => fetchLatestArticles({ page, pageSize }),
  });

  return { data, isLoading, isError, isSuccess };
}
