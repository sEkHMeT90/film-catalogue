const API_KEY = "8f781d70654b5a6f2fa69770d1d115a3";
export const BASE_URL = "https://api.themoviedb.org";
export const API_BASE_URL = `${BASE_URL}/3`;
export const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
export const IMAGE_FULL_PATH = "https://image.tmdb.org/t/p/original";

export const commonParams = {
  api_key: API_KEY,
  language: "es-ES",
};

//TODO: Mejorar construcción de URLs (RATE_MOVIE y GET_RATED_MOVIES)
export const API_PATHS = {
  CREATE_GUEST_SESSION: "/authentication/guest_session/new",
  GET_POPULAR_MOVIES: "/movie/popular",
  SEARCH_MOVIES: "/search/movie",
  RATE_MOVIE: "/movie/{movie_id}/rating",
  GET_RATED_MOVIES: "/guest_session/{guest_session_id}/rated/movies",
};

export const API_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};
