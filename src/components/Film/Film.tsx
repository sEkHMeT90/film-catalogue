import React from "react";
import { IMAGE_PATH } from "../../api/api.constants";
import { Film as FilmType } from "../../models/film";
import { Box, Typography } from "@mui/material";
import Image from "../Image/Image";

type Props = {
  data: FilmType;
};

const Film = ({ data }: Props) => {
  return (
    <>
      <Image src={`${IMAGE_PATH}${data.poster_path}`} data={data} />
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        paddingTop='5px'
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          {data.title}
        </Typography>
        <Typography sx={{ color: "white" }}>{data.release_date}</Typography>
      </Box>
    </>
  );
};

export default Film;
