import React from "react";
import useNavigateSearch from "../../hooks/useNavigateSearch";
import { IMAGE_PATH } from "../../api/api.constants";
import { ROUTES } from "../../routes/routes";
import { Film as FilmType } from "../../models/film";

type Props = {
  film: number;
  data: FilmType;
};

const Film = ({ film, data }: Props) => {
  const navigateSearch = useNavigateSearch();

  return (
    <>
      <img
        width='200px'
        src={`${IMAGE_PATH}${data.poster_path}`}
        alt={data.title}
        onClick={() => navigateSearch(ROUTES.FILM_DETAILS, { film: film })}
      />
    </>
  );
};

export default Film;
