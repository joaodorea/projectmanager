import React from "react";
import { ThemeProvider } from "styled-components";

const Theme = {
  color_yellow: "#ffc107",
  color_darkGray: "#202020",
  color_gray: "#9c9c9c",
};

export default function({ children }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
}
