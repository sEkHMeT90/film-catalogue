import React from "react";
import { BrowserRouter } from "react-router-dom";

import { IntlProvider } from "react-intl";
import flatten from "flat";
import Spanish from "./translations/es-ES.json";
import English from "./translations/en-US.json";

import Header from "./components/Header/Header";
import Routing from "./routes/routing";

const App = () => {
  const localLang = navigator.language;
  const lang = localLang === "es-ES" ? Spanish : English;

  return (
    <IntlProvider locale={localLang} messages={flatten(lang)}>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </IntlProvider>
  );
};

export default App;
