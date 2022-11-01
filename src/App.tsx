import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Translations from "./components/Translations/Translations";
import Header from "./components/Header/Header";
import Routing from "./routes/routing";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Translations>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </Translations>
    </QueryClientProvider>
  );
};

export default App;
