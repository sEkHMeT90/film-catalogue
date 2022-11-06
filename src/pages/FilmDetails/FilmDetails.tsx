import { Box, Rating } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useLocation } from "react-router-dom";
import apiCall from "../../api/api";
import {
  API_METHODS,
  API_PATHS,
  commonParams,
  IMAGE_PATH,
} from "../../api/api.constants";
import useSession from "../../hooks/useSession";
import { rateMovieParams } from "../../models/apiParams";

const FilmDetails: React.FC = () => {
  //TODO: Dar repaso a tipos any
  //TODO: Extraer funcionalidad a hooks
  const { state } = useLocation();
  const { filmData } = state;
  const { data } = useSession();
  console.log(filmData);

  const rateMovieParams: rateMovieParams = {
    ...commonParams,
    guest_session_id: data?.guest_session_id,
  };

  const API_URL = API_PATHS.RATE_MOVIE.replace("{movie_id}", filmData.id);

  const setRating = (e: any) => {
    apiCall(API_METHODS.POST, API_URL, rateMovieParams, {
      value: e.target.value,
    });
  };

  return (
    data && (
      <Box sx={{ p: 5 }} justifyContent={"center"} alignItems='center'>
        <h1>
          <FormattedMessage id='filmDetails.title' />
        </h1>
        <h2>{filmData.title}</h2>
        <img
          width='200px'
          src={`${IMAGE_PATH}${filmData.poster_path}`}
          alt={filmData.title}
        />
        <p>{filmData.overview}</p>

        <Rating
          name='customized-10'
          max={10}
          precision={0.5}
          onChange={(e) => setRating(e)}
        />
      </Box>
    )
  );
};

export default FilmDetails;
