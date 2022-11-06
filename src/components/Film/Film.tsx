import React from "react";
import { IMAGE_PATH } from "../../api/api.constants";
import { ROUTES } from "../../routes/routes";
import { Film as FilmType } from "../../models/film";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

type Props = {
  data: FilmType;
};

const Film = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <img
        width='200px'
        src={`${IMAGE_PATH}${data.poster_path}`}
        alt={data.title}
        onClick={() =>
          navigate(ROUTES.FILM_DETAILS, { state: { filmData: data } })
        }
      />
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        paddingTop='5px'
        sx={{
          width: "100%",
          height: "100%",
          borderStyle: "solid",
          borderColor: "primary.dark",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>{data.title}</Typography>
        <Typography>{data.release_date}</Typography>
      </Box>
    </>
  );
};

export default Film;
