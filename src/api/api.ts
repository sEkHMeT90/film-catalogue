import { rateMovieBody } from "../models/apiParams";
import createApi from "./api-config";

const apiCall = async (
  customMethod: string,
  url: string,
  params?: any,
  body?: rateMovieBody
) => {
  const api = createApi(customMethod);
  const { data } = await api(url, { params: params, data: body });
  return data;
};

export default apiCall;
