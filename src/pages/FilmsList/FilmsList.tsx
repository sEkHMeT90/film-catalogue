import React from "react";
import { useQuery } from "@tanstack/react-query";
import { commonParams, API_PATHS, API_METHODS } from "../../api/api.constants";
import apiCall from "../../api/api";
import { getPopularMoviesParams } from "../../models/apiParams";
import { FormattedMessage } from "react-intl";
import { Container } from "@mui/material";
import FilmsContainer from "../../components/FilmsContainer/FilmsContainer";

const FilmsList: React.FC = () => {
  const params: getPopularMoviesParams = { ...commonParams, page: 3 };

  const { data, isError, isLoading } = useQuery(["movies", params], () =>
    apiCall(API_METHODS.GET, API_PATHS.GET_POPULAR_MOVIES, params)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <Container>
      <FormattedMessage id='filmsList.title' />
      <FilmsContainer data={data}></FilmsContainer>
    </Container>
  );
};

export default FilmsList;
