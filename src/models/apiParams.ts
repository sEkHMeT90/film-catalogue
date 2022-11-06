export type getPopularMoviesParams = {
  api_key: string;
  page?: number;
  region?: number;
  language?: string;
};

export type searchMovieParams = {
  api_key: string;
  query: string;
  language?: string;
  include_adult?: boolean;
  region?: string;
  year?: number;
  primary_release_year?: number;
  page?: number;
};

export type rateMovieParams = {
  api_key: string;
  guest_session_id?: string;
  session_id?: boolean;
};

export type rateMovieBody = {
  value: number;
};

export type createNewSessionParams = {
  api_key: string;
};

export type getRatedMoviesParams = {
  api_key: string;
  language?: string;
  sort_by?: string;
};
