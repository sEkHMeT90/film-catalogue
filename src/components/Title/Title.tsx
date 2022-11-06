import React from "react";
import { Box } from "@mui/material";
import TitleDesktop from "./TitleDesktop";
import TitleMobile from "./TitleMobile";

type Props = {
  title?: string;
  titleTag?: string;
};

const Title = (props: Props) => {
  return (
    <Box
      sx={{ p: 3 }}
      justifyContent={"center"}
      alignItems='center'
      display={"flex"}
    >
      <TitleDesktop {...props} />
      <TitleMobile {...props} />
    </Box>
  );
};

export default Title;
