import React from "react";
import { ResultFilms } from "../../models/resultFilms";
import { Film as FilmType } from "../../models/film";

import { Grid } from "@mui/material";
import Film from "../Film/Film";
import Pagination from "../Pagination/Pagination";

type Props = {
  data: ResultFilms;
  page: number;
  setPage: (page: number) => void;
};

const FilmsContainer = ({ data, page, setPage }: Props) => {
  return (
    <>
      <Grid
        container
        rowSpacing={3}
        justifyContent='center'
        columns={{ xs: 4, sm: 5, md: 8, lg: 10 }}
      >
        {data.results.map((movie: FilmType, index: number) => {
          return (
            <Grid
              item
              xs={3}
              sm={2}
              md={2}
              lg={2}
              display='flex'
              justifyContent='center'
              flexDirection={"column"}
              key={index}
            >
              <Film data={movie} />
            </Grid>
          );
        })}
      </Grid>
      <Pagination data={data} page={page} setPage={setPage} />
    </>
  );
};

export default FilmsContainer;
