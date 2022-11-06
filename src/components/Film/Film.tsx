import React from "react";
import { IMAGE_PATH } from "../../api/api.constants";
import { ROUTES } from "../../routes/routes";
import { Film as FilmType } from "../../models/film";
import { useNavigate } from "react-router-dom";

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
    </>
  );
};

export default Film;
