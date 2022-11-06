import { Box, Typography, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IMAGE_PATH } from "../../api/api.constants";
import useSession from "../../hooks/apiCalls/useSession";
import RateFilm from "../../components/RateFilm/RateFilm";
import Title from "../../components/Title/Title";
import { ROUTES } from "../../routes/routes";
import Image from "../../components/Image/Image";
import { useIntl } from "react-intl";
import { itemsToShow } from "./FilmDetails.constants";

const FilmDetails: React.FC = () => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();
  const { data } = useSession();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate(ROUTES.FILMS_LIST);
    }
  }, [state]);

  // TODO: Componetizar vista
  // TODO: Formatear la fecha
  return (
    state &&
    state.filmData && (
      <Box sx={{ p: 5 }} justifyContent={"center"} alignItems='center'>
        <Title title={state.filmData.title} />

        <Box display='flex' justifyContent={"center"} alignItems='center'>
          <Image
            src={`${IMAGE_PATH}${state.filmData.poster_path}`}
            title={state.filmData.title}
          />
        </Box>
        <Box
          pt='20px'
          pb='20px'
          display='flex'
          justifyContent={"center"}
          alignItems='center'
        >
          <RateFilm
            sessionId={data?.guest_session_id}
            filmId={state.filmData.id}
          />
        </Box>

        <Container maxWidth='md'>
          {itemsToShow.map((item) => {
            const itemTitle = `${formatMessage({
              id: `filmDetails.${item}`,
            })}: `;

            if (state.filmData[item])
              return (
                <Box pb={3} key={state.filmData[item].id} alignItems='center'>
                  <Typography
                    variant='h6'
                    paragraph={false}
                    pr={4}
                    color='primary'
                  >
                    {itemTitle}
                  </Typography>
                  <Typography>{state.filmData[item]}</Typography>
                </Box>
              );
          })}
        </Container>
      </Box>
    )
  );
};

export default FilmDetails;
