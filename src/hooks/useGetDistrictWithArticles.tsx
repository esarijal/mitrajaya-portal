import { DistrictType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchCDistrictWithArticles({ cityID }: { cityID: string }) {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/kotas/${cityID}/kecamatans`
  );

  return response.data.data as DistrictType[];
}

export function useGetDistrictWithArticles({ cityID }: { cityID: string }) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["districtWithArticles"],
    queryFn: () => fetchCDistrictWithArticles({ cityID }),
    enabled: !!cityID,
  });

  return { data, isLoading, isError, isSuccess };
}
