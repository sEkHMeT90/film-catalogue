import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Routing from "./routes/routing";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
