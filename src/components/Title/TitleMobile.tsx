import React from "react";
import { Typography } from "@mui/material";
import { useIntl } from "react-intl";

type Props = {
  title?: string;
  titleTag?: string;
};

const TitleMobile = ({ title, titleTag }: Props) => {
  const { formatMessage } = useIntl();
  return (
    <Typography
      variant='h4'
      sx={{
        mr: 2,
        display: { xs: "flex", md: "none" },
        textAlign: "center",
        fontFamily: "monospace",
        fontWeight: 700,
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

export default TitleMobile;
