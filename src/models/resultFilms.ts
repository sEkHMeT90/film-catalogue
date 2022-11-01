import { Film } from "./film";

export type ResultFilms = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Film[];
};
