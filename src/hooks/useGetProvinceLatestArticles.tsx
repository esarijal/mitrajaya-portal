import { ArticleResponsePaging } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchProvinceLatestArticles({
  provID,
  page,
  pageSize,
}: {
  provID: string;
  page: number;
  pageSize: number;
}) {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/provinces/${provID}/latest-articles?page=${page}&pageSize=${pageSize}`
  );

  return response.data as ArticleResponsePaging;
}

export function useGetProvinceLatestArticles({
  provID,
  page,
  pageSize,
}: {
  provID: string;
  page: number;
  pageSize: number;
}) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["provinceLatestArticles"],
    queryFn: () => fetchProvinceLatestArticles({ provID, page, pageSize }),
    enabled: !!provID,
  });

  return { data, isLoading, isError, isSuccess };
}
