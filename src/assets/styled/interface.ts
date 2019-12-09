export default interface StyleClosetTheme {
  color: Color;
  fontSize: string[];
  fontWeight: fontWeight;
  space: Array<string>;
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

export interface Color {
  gray: string;
  grays: Array<string>;
  yellow: string;
  black: string;
  beige: string;
  green: string;
  lightGreen: string;
  lightYellow: string;
  lightBlue: string;

  primary?: string;
  lightGray?: string;
  darkGray?: string;
  dividerColor?: string;
}

export interface fontWeight {
  regular: number;
  bold: number;
  bolder: number;
}
