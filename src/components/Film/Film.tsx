import React from "react";
import { IMAGE_PATH } from "../../api/api.constants";
import { Film as FilmType } from "../../models/film";

type Props = {
  data: FilmType;
};

const Film = ({ data }: Props) => {
  return (
    <>
      <img
        width='200px'
        src={`${IMAGE_PATH}${data.poster_path}`}
        alt={data.title}
      />
      {/*  <div>{data.original_title}</div> */}
    </>
  );
};

export default Film;
