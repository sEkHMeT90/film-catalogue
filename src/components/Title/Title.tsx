import React from "react";
import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  const { formatMessage } = useIntl();
  return (
    <Box
      sx={{ p: 3 }}
      justifyContent={"center"}
      alignItems='center'
      display={"flex"}
    >
      <Typography
        variant='h2'
        noWrap
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "primary.main",
          textDecoration: "none",
        }}
      >
        {formatMessage({
          id: title,
        })}
      </Typography>
    </Box>
  );
};

export default Title;
