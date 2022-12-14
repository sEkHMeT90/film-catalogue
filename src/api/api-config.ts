import axios from "axios";
import { API_BASE_URL } from "./api.constants";

const createApi = (customMethod: string) => {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    method: customMethod,
    timeout: 1000,
  });
};

export default createApi;
