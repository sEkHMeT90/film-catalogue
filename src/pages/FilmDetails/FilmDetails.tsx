import { Box, Rating } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useLocation } from "react-router-dom";
import { IMAGE_PATH } from "../../api/api.constants";
import useSession from "../../hooks/apiCalls/useSession";
import useRateMovie from "../../hooks/apiCalls/useRateMovie";

const FilmDetails: React.FC = () => {
  const { data } = useSession();
  const { state } = useLocation();
  //TODO: Redireccionar a FilmList cuando no exista state (se ponga la URL a mano)
  const { filmData } = state;

  const setRating = (e: React.SyntheticEvent<Element, Event>) => {
    const target = e.target as HTMLTextAreaElement;
    useRateMovie({
      guestSessionId: data?.guest_session_id,
      filmDataId: filmData.id,
      value: +target.value,
    });
  };

  // TODO: componetizar vista
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
