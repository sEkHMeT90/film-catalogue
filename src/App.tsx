import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Translations from "./components/Translations/Translations";
import Header from "./components/Header/Header";
import Routing from "./routes/routing";

const queryClient = new QueryClient();

//TODO: Dar repaso a tipos any
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Translations>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </Translations>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
