import React, { useState } from "react";
import { Container } from "@mui/material";
import FilmsContainer from "../../components/FilmsContainer/FilmsContainer";
import Search from "../../components/Search/Search";
import useSearchMovies from "../../hooks/apiCalls/useSearchMovies";
import useGetPopularMovies from "../../hooks/apiCalls/useGetPopularMovies";
import { useIntl } from "react-intl";
import Title from "../../components/Title/Title";
import GenericMessage from "../../components/GenericMessage/GenericMessage";
import Spinner from "../../components/Spinner/Spinner";

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
      (searchQuery != "" && dataSearch.data.total_results === 0) ||
      dataFilms.data.total_results === 0
    );
  };

  //TODO: Extraer renderMainContent a un componente reutilizable
  const renderMainContent = () => {
    if (isLoading()) return <Spinner />;
    if (isError()) return <GenericMessage msg='error.genericError' />;
    if (isEmptyData()) return <GenericMessage msg='error.dataNotFounded' />;

    return (
      <FilmsContainer
        data={dataSearch.data || dataFilms.data}
        page={page}
        setPage={setPage}
      ></FilmsContainer>
    );
  };

  return (
    <Container maxWidth='xl'>
      <Title title='filmsList.title' />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {renderMainContent()}
    </Container>
  );
};

export default FilmsList;
