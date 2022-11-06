import { useQuery } from "@tanstack/react-query";
import apiCall from "../../api/api";
import { API_METHODS, API_PATHS, commonParams } from "../../api/api.constants";
import { getPopularMoviesParams } from "../../models/apiParams";

type Props = {
  page: number;
  searchQuery: string;
};

const useGetPopularMovies = ({ page, searchQuery }: Props) => {
  const getFilmsParams: getPopularMoviesParams = {
    ...commonParams,
    page: page,
  };

  return useQuery({
    queryKey: ["movies", getFilmsParams],
    queryFn: () =>
      apiCall(API_METHODS.GET, API_PATHS.GET_POPULAR_MOVIES, getFilmsParams),
    enabled: searchQuery == "",
  });
};

export default useGetPopularMovies;
