import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Container, Box, CircularProgress } from "@mui/material";
import FilmsContainer from "../../components/FilmsContainer/FilmsContainer";
import Search from "../../components/Search/Search";
import useSearchMovies from "../../hooks/apiCalls/useSearchMovies";
import useGetPopularMovies from "../../hooks/apiCalls/useGetPopularMovies";

const FilmsList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const dataFilms = useGetPopularMovies({ page, searchQuery });
  const dataSearch = useSearchMovies({ page, searchQuery });

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
