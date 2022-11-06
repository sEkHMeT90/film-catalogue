import apiCall from "../../api/api";
import { API_METHODS, API_PATHS, commonParams } from "../../api/api.constants";
import { rateMovieParams } from "../../models/apiParams";

type Props = {
  guestSessionId: string;
  filmDataId: string;
  value: number;
};

const useRateMovie = ({ guestSessionId, filmDataId, value }: Props) => {
  const rateMovieParams: rateMovieParams = {
    ...commonParams,
    guest_session_id: guestSessionId,
  };

  const API_URL = API_PATHS.RATE_MOVIE.replace("{movie_id}", filmDataId);

  apiCall(API_METHODS.POST, API_URL, rateMovieParams, {
    value: value,
  });
};

export default useRateMovie;
