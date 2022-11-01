import createApi from "./api-config";

const apiCall = async (customMethod: string, url: string, params: any) => {
  const api = createApi(customMethod);
  const { data } = await api(url, { params });
  return data;
};

export default apiCall;
