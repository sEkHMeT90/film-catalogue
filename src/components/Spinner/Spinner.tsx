import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box justifyContent={"center"} alignItems='center' display={"flex"}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
