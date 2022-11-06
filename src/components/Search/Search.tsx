import React from "react";
import { TextField, Box } from "@mui/material";
import { useIntl } from "react-intl";

type Props = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

const Search = ({ searchQuery, setSearchQuery }: Props) => {
  const { formatMessage } = useIntl();
  return (
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
          label={formatMessage({
            id: "filmsList.search",
          })}
          variant='outlined'
          placeholder={formatMessage({
            id: "filmsList.enterFilmSearch",
          })}
          size='small'
        />
      </form>
    </Box>
  );
};

export default Search;
