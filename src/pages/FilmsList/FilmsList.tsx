import React, { useState } from "react";
import { Container } from "@mui/material";
import FilmsContainer from "../../components/FilmsContainer/FilmsContainer";
import Search from "../../components/Search/Search";
import useSearchMovies from "../../hooks/apiCalls/useSearchMovies";
import useGetPopularMovies from "../../hooks/apiCalls/useGetPopularMovies";
import Title from "../../components/Title/Title";
import MainContent from "../../components/MainContent/MainContent";

const FilmsList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const dataFilms = useGetPopularMovies({ page, searchQuery });
  const dataSearch = useSearchMovies({ page, searchQuery });

  //TODO: Resetear paginación tras cada búsqueda y al eliminar el searchQuery
  //TODO: Extraer lógica

  const isLoading = () => {
    return (
      (dataFilms.fetchStatus != "idle" && dataFilms.isLoading) ||
      (dataSearch.fetchStatus != "idle" && dataSearch.isLoading)
    );
  };

  const isError = () => {
    return dataFilms.isError || dataFilms.isError;
  };

  const isEmptyData = () => {
    return (
      (searchQuery != "" && dataSearch?.data?.total_results === 0) ||
      dataFilms?.data?.total_results === 0
    );
  };

  //TODO: Mejorar estilos del listado
  return (
    <Container maxWidth='xl'>
      <Title titleTag='filmsList.title' />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <MainContent
        isLoading={isLoading()}
        isError={isError()}
        isEmptyData={isEmptyData()}
      >
        <FilmsContainer
          data={dataSearch.data || dataFilms.data}
          page={page}
          setPage={setPage}
        ></FilmsContainer>
      </MainContent>
    </Container>
  );
};

export default FilmsList;
