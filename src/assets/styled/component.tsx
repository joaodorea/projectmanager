import React from "react";
import { ThemeProvider } from "./styled-components";
import { theme } from "./theme";
import GlobalStyle from "./global";

export default function({ children }: any) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
}
