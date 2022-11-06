import React from "react";
import { Rating } from "@mui/material";
import useRateMovie from "../../hooks/apiCalls/useRateMovie";

type Props = {
  sessionId: string;
  filmId: string;
};

//TODO: Mostrar mensaje informativo al usuario al hacer la votación (success/error)
const RateFilm = ({ sessionId, filmId }: Props) => {
  const setRating = (e: React.SyntheticEvent<Element, Event>) => {
    const target = e.target as HTMLTextAreaElement;
    useRateMovie({
      guestSessionId: sessionId,
      filmDataId: filmId,
      value: +target.value,
    });
  };
  const ratingName = `rating-${filmId}`;
  return (
    <Rating
      name={ratingName}
      max={10}
      precision={0.5}
      onChange={(e) => setRating(e)}
    />
  );
};

export default RateFilm;
