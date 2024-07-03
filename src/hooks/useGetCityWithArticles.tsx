import { CityType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchCityWithArticles({ provID }: { provID: string }) {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/provinces/${provID}/kotas`
  );

  return response.data.data as CityType[];
}

export function useGetCityWithArticles({ provID }: { provID: string }) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["cityWithArticles"],
    queryFn: () => fetchCityWithArticles({ provID }),
    enabled: !!provID,
  });

  return { data, isLoading, isError, isSuccess };
}
