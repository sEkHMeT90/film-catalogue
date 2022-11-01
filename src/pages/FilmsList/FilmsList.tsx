import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FormattedMessage } from "react-intl";
import { commonParams, API_PATHS, API_METHODS } from "../../api/api.constants";
import apiCall from "../../api/api";
import { getPopularMoviesParams } from "../../models/api/params";

const FilmsList: React.FC = () => {
  const params: getPopularMoviesParams = { ...commonParams };

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
    <>
      <p>
        <FormattedMessage id='filmList.title' />
      </p>
      ${JSON.stringify(data)}
    </>
  );
};

export default FilmsList;
