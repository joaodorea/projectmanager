import { css } from "styled-components";
import { getValueAndUnit, lighten } from "polished";

const color: any = {
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
  beige: "#eeebe4",
  green: "#7db874",
  lightGreen: "#cef8c6",
  lightYellow: "cornsilk",
  lightBlue: "#e3efff"
};
const fontSize = [
  ".8rem",
  "1rem",
  "1.2rem",
  "1.4rem",
  "1.6rem",
  "1.8rem",
  "2.4rem",
  "2.8rem",
  "3.2rem",
  "4.0rem",
  "4.8rem"
];
const fontWeight = {
  regular: 400,
  bold: 700,
  bolder: 900
};

const space = [
  "0",
  ".4rem",
  ".8rem",
  "1.2rem",
  "1.6rem",
  "2.0rem",
  "3.2rem",
  "4.8rem",
  "6.4rem",
  "9.6rem"
];
const BtnRadius = ["2px", "4px", "8px", "16px"];

color.primary = color.yellow;
color.lightGray = color.grays[7];
color.darkGray = color.grays[9];
color.dividerColor = color.grays[2];

const title = css`
  font-size: ${p => p.theme.fontSize.lg};
  font-weight: ${p => p.theme.fontWeight.bold};
`;

const BtnSmRadius = BtnRadius[1];
const BtnCellSm = css`
  color: ${({ color, theme }: any) => theme.color[color] || color};
  background-color: ${({ color, theme }: any) =>
    !color ? "unset" : lighten(0.4, theme.color[color] || color)};
  cursor: pointer;
  padding: 5px 15px;
  font-size: 0.6rem;
  border-radius: 20px;
  border: none;
  font-weight: bold;
`;
const BtnMd = css`
  ${BtnCellSm};
  padding: 7px 20px;
  font-size: ${fontSize[0]};
`;

const CardContainer = css`
  background-color: white;
  width: 100%;
  padding: ${({ padding }: any) => (padding ? space[5] : "unset")};
  border-radius: ${p => p.theme.BtnRadius[2]};
  box-shadow: 0px 2px 4px hsla(0, 0%, 0%, 0.03);
`;

const avatar = css`
  width: ${({ size }: any) => size};
  height: ${({ size }: any) => size};
  border-radius: ${({ rounded, size, circle }: any) => {
    return rounded
      ? +getValueAndUnit(size)[0] * 0.2 + "px"
      : circle
      ? "50%"
      : "unset";
  }};
`;

const headerMainTextColor = color.darkGray;

const sidebarPadding = space[4];
const sidebarBgHover = color.darkGray;
const sidebarHoverSelec = css`
  background-color: ${({ selected }: any) =>
    selected ? color.darkGray : "transparent"};
  border-left: 3px solid
    ${({ selected }: any) => (selected ? color.primary : "transparent")};

  &:hover {
    background-color: ${color.darkGray};
  }
`;

interface StyleClosetTheme {
  color: any;
  fontSize: string[];
  fontWeight: object;
  space: string[];
  BtnRadius: string[];
  title: any;
  BtnSmRadius: any;
  BtnCellSm: any;
  BtnMd: any;
  CardContainer: any;
  avatar: any;
  headerMainTextColor: any;
  sidebarPadding: any;
  sidebarBgHover: any;
  sidebarHoverSelec: any;
}

const theme: StyleClosetTheme = {
  color,
  fontSize,
  fontWeight,
  space,
  BtnRadius,
  title,
  BtnSmRadius,
  BtnCellSm,
  BtnMd,
  CardContainer,
  avatar,
  headerMainTextColor,
  sidebarPadding,
  sidebarBgHover,
  sidebarHoverSelec
};

export { theme, StyleClosetTheme };
