import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type resType = {
  id: number;
  prov_name: string;
  kota_name: string;
  kecamatan_name: string;
  kelurahan_name: string;
};
async function fetchRegionList({
  prov_id,
  city_id,
  district_id,
}: {
  prov_id?: string;
  city_id?: string;
  district_id?: string;
}) {
  let url = `${import.meta.env.VITE_API_KORWIL_BASE_URL}/portal/provinsi`;

  if (prov_id) {
    url += `/${prov_id}/kota`;
  }

  if (city_id) {
    url += `/${city_id}/kecamatan`;
  }

  if (district_id) {
    url += `/${district_id}/kelurahan`;
  }

  const response = await axios.get(`${url}?pageSize=999`);

  return response.data.data as resType[];
}

export function useGetRegionList({
  prov_id,
  city_id,
  district_id,
}: {
  prov_id?: string;
  city_id?: string;
  district_id?: string;
}) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["regionList"],
    queryFn: () => fetchRegionList({ prov_id, city_id, district_id }),
  });

  return { data, isLoading, isError, isSuccess };
}
