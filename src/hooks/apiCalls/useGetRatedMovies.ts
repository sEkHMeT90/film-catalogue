import { useQuery } from "@tanstack/react-query";
import apiCall from "../../api/api";
import { API_METHODS, API_PATHS, commonParams } from "../../api/api.constants";
import { getRatedMoviesParams } from "../../models/apiParams";

type Props = {
  sessionId: string;
  sortBy?: string;
};

const useGetRatedMovies = ({ sessionId, sortBy = "created_at.asc" }: Props) => {
  const getRatedMoviesParams: getRatedMoviesParams = {
    ...commonParams,
    sort_by: sortBy,
  };

  const API_URL = API_PATHS.GET_RATED_MOVIES.replace(
    "{guest_session_id}",
    sessionId
  );

  return useQuery({
    queryKey: ["myList", getRatedMoviesParams],
    queryFn: () => apiCall(API_METHODS.GET, API_URL, getRatedMoviesParams),
    enabled: sessionId != undefined && sessionId != "",
  });
};

export default useGetRatedMovies;
