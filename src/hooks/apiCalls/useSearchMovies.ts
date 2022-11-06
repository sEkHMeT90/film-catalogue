import { useQuery } from "@tanstack/react-query";
import apiCall from "../../api/api";
import { API_METHODS, API_PATHS, commonParams } from "../../api/api.constants";
import { searchMovieParams } from "../../models/apiParams";

type Props = {
  page: number;
  searchQuery: string;
};

const useSearchMovies = ({ page, searchQuery }: Props) => {
  const getSearchParams: searchMovieParams = {
    ...commonParams,
    page: page,
    query: searchQuery,
  };

  return useQuery({
    queryKey: ["searchMovies", getSearchParams],
    queryFn: () =>
      apiCall(API_METHODS.GET, API_PATHS.SEARCH_MOVIES, getSearchParams),
    enabled: searchQuery != "",
  });
};

export default useSearchMovies;
