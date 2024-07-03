import { ArticleResponsePaging } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchSubdistrictLatestArticles({
  subdistrictID,
  page,
  pageSize,
}: {
  subdistrictID: string;
  page: number;
  pageSize: number;
}) {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/kelurahans/${subdistrictID}/latest-articles?page=${page}&pageSize=${pageSize}`
  );

  return response.data as ArticleResponsePaging;
}

export function useGetSubdistrictLatestArticles({
  subdistrictID,
  page,
  pageSize,
}: {
  subdistrictID: string;
  page: number;
  pageSize: number;
}) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["subdistrictLatestArticles"],
    queryFn: () =>
      fetchSubdistrictLatestArticles({ subdistrictID, page, pageSize }),
    enabled: !!subdistrictID,
  });

  return { data, isLoading, isError, isSuccess };
}
