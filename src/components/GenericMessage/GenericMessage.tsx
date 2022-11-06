import React from "react";
import { Typography } from "@mui/material";
import { useIntl } from "react-intl";

type Props = {
  msg: string;
};

const GenericMessage = ({ msg }: Props) => {
  const { formatMessage } = useIntl();
  return (
    <Typography align='center'>
      {formatMessage({
        id: msg,
      })}
    </Typography>
  );
};

export default GenericMessage;
