import { SubdistrictType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchSubdistrictWithArticles({
  districtID,
}: {
  districtID: string;
}) {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/kecamatans/${districtID}/kelurahans`
  );

  return response.data.data as SubdistrictType[];
}

export function useGetSubdistrictWithArticles({
  districtID,
}: {
  districtID: string;
}) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["subdistrictWithArticles"],
    queryFn: () => fetchSubdistrictWithArticles({ districtID }),
    enabled: !!districtID,
  });

  return { data, isLoading, isError, isSuccess };
}
