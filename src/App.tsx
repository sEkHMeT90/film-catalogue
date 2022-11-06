import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Translations from "./components/Translations/Translations";
import Header from "./components/Header/Header";
import Routing from "./routes/routing";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";

const queryClient = new QueryClient();

//TODO: Dar repaso a tipos any
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Translations>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Header />
            <Routing />
          </ThemeProvider>
        </BrowserRouter>
      </Translations>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
