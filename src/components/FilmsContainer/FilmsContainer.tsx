import React from "react";
import { ResultFilms } from "../../models/resultFilms";
import { Film as FilmType } from "../../models/film";

import { Grid } from "@mui/material";
import Film from "../Film/Film";

type Props = {
  data: ResultFilms;
};

const FilmsContainer = ({ data }: Props) => {
  return (
    <Grid
      container
      direction='row'
      rowSpacing={2}
      columnSpacing={{ xs: 2, sm: 2, md: 2 }}
    >
      {data.results.map((movie: FilmType, index: number) => {
        return (
          <Grid item key={index}>
            <Film data={movie} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FilmsContainer;
