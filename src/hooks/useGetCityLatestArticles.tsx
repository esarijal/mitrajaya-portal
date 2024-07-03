import { ArticleResponsePaging } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchCityLatestArticles({
  cityID,
  page,
  pageSize,
}: {
  cityID: string;
  page: number;
  pageSize: number;
}) {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/kotas/${cityID}/latest-articles?page=${page}&pageSize=${pageSize}`
  );

  return response.data as ArticleResponsePaging;
}

export function useGetCityLatestArticles({
  cityID,
  page,
  pageSize,
}: {
  cityID: string;
  page: number;
  pageSize: number;
}) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["cityLatestArticles"],
    queryFn: () => fetchCityLatestArticles({ cityID, page, pageSize }),
    enabled: !!cityID,
  });

  return { data, isLoading, isError, isSuccess };
}
