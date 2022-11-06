import React from "react";
import { Typography } from "@mui/material";
import { useIntl } from "react-intl";

type Props = {
  title?: string;
  titleTag?: string;
};

const TitleDesktop = ({ title, titleTag }: Props) => {
  const { formatMessage } = useIntl();
  return (
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
      {titleTag
        ? formatMessage({
            id: titleTag,
          })
        : title}
    </Typography>
  );
};

export default TitleDesktop;
