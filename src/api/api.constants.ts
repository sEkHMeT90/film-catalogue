const API_KEY = "8f781d70654b5a6f2fa69770d1d115a3";
export const API_BASE_URL = "https://api.themoviedb.org/3";

export const commonParams = {
  api_key: API_KEY,
  language: "es-ES",
};

export const API_PATHS = {
  CREATE_GUEST_SESSION: "/authentication/guest_session/new",
  GET_POPULAR_MOVIES: "/movie/popular",
  SEARCH_MOVIES: "/search/movie",
  RATE_MOVIE: "/movie/{movie_id}/rating",
};

export const API_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};
