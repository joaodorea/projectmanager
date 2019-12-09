import React, { FunctionComponent } from "react";
import { ThemeProvider } from "./styled-components";
import { theme } from "./theme";
import GlobalStyle from "./global";

const Comp: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Comp;
