import { ProvinceType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchProvinceWithArticles() {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/provinces/published-articles`
  );

  return response.data.data as ProvinceType[];
}

export function useGetProvinceWithArticles() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["provinceWithArticles"],
    queryFn: () => fetchProvinceWithArticles(),
  });

  return { data, isLoading, isError, isSuccess };
}
