import React from "react";
import { Pagination as MUIPagination, Box } from "@mui/material";
import { ResultFilms } from "../../models/resultFilms";

type Props = {
  data: ResultFilms;
  page: number;
  setPage: (page: number) => void;
};

const Pagination = ({ data, page, setPage }: Props) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const totalPages = data.total_pages <= 500 ? data.total_pages : 500;

  return (
    <Box
      sx={{ p: 5 }}
      justifyContent={"center"}
      alignItems='center'
      display={"flex"}
    >
      <MUIPagination
        count={totalPages}
        defaultPage={page}
        color='primary'
        onChange={handleChange}
      />
    </Box>
  );
};

export default Pagination;
