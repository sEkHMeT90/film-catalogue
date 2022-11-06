import { useQuery } from "@tanstack/react-query";
import apiCall from "../../api/api";
import { API_METHODS, API_PATHS, commonParams } from "../../api/api.constants";

const useSession = () => {
  return useQuery(["session", commonParams], () =>
    apiCall(API_METHODS.GET, API_PATHS.CREATE_GUEST_SESSION, commonParams)
  );
};

export default useSession;
