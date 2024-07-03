import { ArticleResponsePaging } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchLatestArticlesByCategory({
  page,
  pageSize,
  categoryID,
}: {
  page: number;
  pageSize: number;
  categoryID: string;
}) {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/categories/${categoryID}/latest-articles?page=${page}&pageSize=${pageSize}`
  );

  return response.data as ArticleResponsePaging;
}

export function useGetLatestArticlesByCategory({
  page,
  pageSize,
  categoryID,
}: {
  page: number;
  pageSize: number;
  categoryID: string;
}) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["latestArticlesByCategory", page, pageSize, categoryID],
    queryFn: () =>
      fetchLatestArticlesByCategory({ page, pageSize, categoryID }),
    enabled: !!categoryID,
  });

  return { data, isLoading, isError, isSuccess };
}
