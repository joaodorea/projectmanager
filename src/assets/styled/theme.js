import React from "react";
import { ThemeProvider, css } from "styled-components";

const Theme = {
  color_yellow: "#ffc107",
  color_darkGray: "#202020",
  color_gray: "#9c9c9c",
  PL: "30px",
  PM: "20px",
  PS: "10px",
  PX: "5px"
};

Theme.sidebarPadding = Theme.PL;
Theme.sidebarBgHover = Theme.color_darkGray;
Theme.sidebarHoverSelec = css`
  &:hover {
    background-color: ${Theme.color_darkGray};
  }
  ${props =>
    !props.selected ||
    "background-color:" +
      Theme.color_darkGray +
      ";border-left: 3px solid " +
      props.theme.color_yellow}
`;

export default function({ children }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
}
