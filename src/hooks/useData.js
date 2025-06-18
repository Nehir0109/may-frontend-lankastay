import useSWR from "swr";
import { fetcher, baseURL } from "../utils/utils";

const useData = (endpoint) => {
  const fullEndpoint = `${baseURL}/${endpoint}`;

  const { data, error } = useSWR(fullEndpoint, fetcher, {
    revalidateOnReconnect: false,
    revalidateOnFocus: false,
  });

  // localStorage'ta veri varsa ve SWR'dan veri henüz gelmemişse onu kullan
  const localData = localStorage.getItem(fullEndpoint);
  if (localData && localData !== "undefined" && !data) {
    return {
      data: JSON.parse(localData),
      loading: false,
      error: error ? error.message : null,
    };
  }

  // SWR'dan veri geldiyse localStorage'a kaydet
  if (data) {
    localStorage.setItem(fullEndpoint, JSON.stringify(data));
  }

  const loading = !data && !error;

  return {
    data: data || null,
    loading,
    error: error ? error.message : null,
  };
};

export default useData;
