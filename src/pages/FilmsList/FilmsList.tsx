import React, { useState } from "react";
import { Container, Box, CircularProgress, Typography } from "@mui/material";
import FilmsContainer from "../../components/FilmsContainer/FilmsContainer";
import Search from "../../components/Search/Search";
import useSearchMovies from "../../hooks/apiCalls/useSearchMovies";
import useGetPopularMovies from "../../hooks/apiCalls/useGetPopularMovies";
import { useIntl } from "react-intl";

const FilmsList: React.FC = () => {
  const { formatMessage } = useIntl();

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

  // TODO: Extraer loading, error y noDataMsg a componentes
  const renderMainContent = () => {
    if (isLoading())
      return (
        <Box justifyContent={"center"} alignItems='center' display={"flex"}>
          <CircularProgress />
        </Box>
      );
    if (isError())
      return (
        <Typography align='center'>
          {formatMessage({
            id: "error.genericError",
          })}
        </Typography>
      );
    if (isEmptyData())
      return (
        <Typography align='center'>
          {formatMessage({
            id: "error.dataNotFounded",
          })}
        </Typography>
      );

    return (
      <FilmsContainer
        data={dataSearch.data || dataFilms.data}
        page={page}
        setPage={setPage}
      ></FilmsContainer>
    );
  };

  //TODO: Extraer título a componente
  return (
    <Container maxWidth='xl'>
      <Box
        sx={{ p: 3 }}
        justifyContent={"center"}
        alignItems='center'
        display={"flex"}
      >
        <Typography
          variant='h2'
          noWrap
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "primary.main",
            textDecoration: "none",
          }}
        >
          {formatMessage({
            id: "filmsList.title",
          })}
        </Typography>
      </Box>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {renderMainContent()}
    </Container>
  );
};

export default FilmsList;
