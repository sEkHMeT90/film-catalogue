import React from "react";
import { TextField, Box } from "@mui/material";

type Props = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

const Search = ({ searchQuery, setSearchQuery }: Props) => (
  <Box
    sx={{ p: 5 }}
    justifyContent={"center"}
    alignItems='center'
    display={"flex"}
  >
    <form>
      <TextField
        id='search'
        className='text'
        defaultValue={searchQuery}
        onChange={(e) => {
          const target = e.target as HTMLTextAreaElement;
          setSearchQuery(target.value);
        }}
        label='Enter a film to search'
        variant='outlined'
        placeholder='Search...'
        size='small'
      />
    </form>
  </Box>
);

export default Search;
