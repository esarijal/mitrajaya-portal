import { ArticleCategoryType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchCategories() {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/categories`
  );

  return response.data.data as ArticleCategoryType[];
}

export function useGetCategories() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });

  return { data, isLoading, isError, isSuccess };
}
