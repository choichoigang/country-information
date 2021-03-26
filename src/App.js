import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/GlobalStyle";
import CountryTablePage from "./components/pages/CountryTablePage";
import theme from "./style/theme";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CountryTablePage />
      </ThemeProvider>
    </div>
  );
};

export default App;
