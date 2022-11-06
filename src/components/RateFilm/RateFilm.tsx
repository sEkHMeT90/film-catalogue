import React from "react";
import { Rating } from "@mui/material";
import useRateMovie from "../../hooks/apiCalls/useRateMovie";

type Props = {
  sessionId: string;
  filmId: string;
};

const RateFilm = ({ sessionId, filmId }: Props) => {
  const setRating = (e: React.SyntheticEvent<Element, Event>) => {
    const target = e.target as HTMLTextAreaElement;
    useRateMovie({
      guestSessionId: sessionId,
      filmDataId: filmId,
      value: +target.value,
    });
  };
  return (
    <Rating
      name='customized-10'
      max={10}
      precision={0.5}
      onChange={(e) => setRating(e)}
    />
  );
};

export default RateFilm;
