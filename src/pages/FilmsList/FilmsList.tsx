import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { commonParams, API_PATHS, API_METHODS } from "../../api/api.constants";
import apiCall from "../../api/api";
import {
  getPopularMoviesParams,
  searchMovieParams,
} from "../../models/apiParams";
import { FormattedMessage } from "react-intl";
import { Container, Box, CircularProgress } from "@mui/material";
import FilmsContainer from "../../components/FilmsContainer/FilmsContainer";
import Search from "../../components/Search/Search";

const FilmsList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  //TODO: Extraer funcionalidad a hook
  const getFilmsParams: getPopularMoviesParams = {
    ...commonParams,
    page: page,
  };

  const getSearchParams: searchMovieParams = {
    ...commonParams,
    page: page,
    query: searchQuery,
  };

  const dataFilms = useQuery({
    queryKey: ["movies", getFilmsParams],
    queryFn: () =>
      apiCall(API_METHODS.GET, API_PATHS.GET_POPULAR_MOVIES, getFilmsParams),
    enabled: searchQuery == "",
  });

  const dataSearch = useQuery({
    queryKey: ["searchMovies", getSearchParams],
    queryFn: () =>
      apiCall(API_METHODS.GET, API_PATHS.SEARCH_MOVIES, getSearchParams),
    enabled: searchQuery != "",
  });

  //TODO: Resetear paginación tras cada búsqueda y al eliminar el searchQuery

  const isLoading = () => {
    return (
      (dataFilms.fetchStatus != "idle" && dataFilms.isLoading) ||
      (dataSearch.fetchStatus != "idle" && dataSearch.isLoading)
    );
  };

  if (dataFilms.isError || dataFilms.isError) {
    //TODO: Mejorar mensaje de error
    return <div>Error!</div>;
  }

  return (
    <Container maxWidth='xl'>
      <Box
        sx={{ p: 5 }}
        justifyContent={"center"}
        alignItems='center'
        display={"flex"}
      >
        <FormattedMessage id='filmsList.title' />
      </Box>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isLoading() ? (
        <CircularProgress />
      ) : (
        <FilmsContainer
          data={dataSearch.data || dataFilms.data}
          page={page}
          setPage={setPage}
        ></FilmsContainer>
      )}
    </Container>
  );
};

export default FilmsList;
