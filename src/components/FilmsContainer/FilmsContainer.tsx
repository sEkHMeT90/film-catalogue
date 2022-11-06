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
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              m='3px'
              sx={{
                width: "100%",
                borderStyle: "solid",
                borderColor: "primary.dark",
                borderRadius: "10px",
                backgroundColor: "primary.light",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
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
