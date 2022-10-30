import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";

import FilmsList from "../pages/FilmDetails/FilmDetails";
import FilmDetails from "../pages/FilmsList/FilmsList";
import MyList from "../pages/MyList/MyList";

const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTES.FILMS_LIST} element={<FilmsList />} />
      <Route path={ROUTES.FILM_DETAILS} element={<FilmDetails />} />
      <Route path={ROUTES.MY_LIST} element={<MyList />} />
    </Routes>
  );
};

export default Routing;
