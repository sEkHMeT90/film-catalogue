import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { IntlProvider } from "react-intl";
import flatten from "flat";
import Spanish from "./translations/es-ES.json";
import English from "./translations/en-US.json";

import Header from "./components/Header/Header";
import Routing from "./routes/routing";

const queryClient = new QueryClient();

const App = () => {
  const localLang = navigator.language;
  const lang = localLang === "es-ES" ? Spanish : English;

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale={localLang} messages={flatten(lang)}>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </IntlProvider>
    </QueryClientProvider>
  );
};

export default App;
