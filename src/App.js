import React from "react";
import CountryTablePage from "./components/pages/CountryTablePage";
import { GlobalStyle } from "./style/GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <CountryTablePage />
    </div>
  );
};

export default App;
