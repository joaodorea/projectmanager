import React from "react";
import { ThemeProvider, css } from "styled-components";
import { getValueAndUnit, lighten } from "polished";

const Theme = {
  color: {
    gray: "#9c9c9c",
    grays: [
      "#FAFAFA",
      "#F5F5F5",
      "#EEEEEE",
      "#E0E0E0",
      "#BDBDBD",
      "#9E9E9E",
      "#757575",
      "#616161",
      "#424242",
      "#212121"
    ],
    yellow: "#ffc107",
    black: "#000000",
    beige: "#eeebe4"
  },
  fontSize: {
    xm: ".8rem",
    sm: ".9rem",
    md: "1rem"
  },
  PL: "30px",
  PM: "20px",
  PS: "10px",
  PX: "5px",
  BtnRadius: ["2px", "4px", "8px", "16px"]
};

Theme.color.lightGray = Theme.color.grays[7];
Theme.color.darkGray = Theme.color.grays[9];

Theme.BtnSmRadius = Theme.BtnRadius[1];

Theme.BtnCellSm = css`
  color: ${p => p.theme.color[p.color]};
  background-color: ${p =>
    !p.color ? "unset" : lighten(0.4, p.theme.color[p.color])};
  cursor: pointer;
  padding: 5px 15px;
  font-size: 0.6rem;
  border-radius: 20px;
  border: none;
  font-weight: bold;
`;

Theme.avatar = props => ({
  width: props.size,
  height: props.size,
  "border-radius": props.rounded
    ? getValueAndUnit(props.size)[0] * 0.2
    : props.circle
    ? "50%"
    : "unset"
});

Theme.headerMainTextColor = Theme.color.darkGray;

Theme.sidebarPadding = Theme.PL;
Theme.sidebarBgHover = Theme.color.darkGray;
Theme.sidebarHoverSelec = css`
  &:hover {
    background-color: ${Theme.color.darkGray};
  }
  ${props =>
    !props.selected ||
    "background-color:" +
      Theme.color.darkGray +
      ";border-left: 3px solid " +
      props.theme.color.yellow}
`;

export default function({ children }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
}