import { ArticleResponsePaging } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchDistrictLatestArticles({
  districtID,
  page,
  pageSize,
}: {
  districtID: string;
  page: number;
  pageSize: number;
}) {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/kecamatans/${districtID}/latest-articles?page=${page}&pageSize=${pageSize}`
  );

  return response.data as ArticleResponsePaging;
}

export function useGetDistrictLatestArticles({
  districtID,
  page,
  pageSize,
}: {
  districtID: string;
  page: number;
  pageSize: number;
}) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["districtLatestArticles"],
    queryFn: () => fetchDistrictLatestArticles({ districtID, page, pageSize }),
    enabled: !!districtID,
  });

  return { data, isLoading, isError, isSuccess };
}
