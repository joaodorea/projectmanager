import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    color: any;
    fontSize: object;
    fontWeight: object;
    dividerColor: string;
    title: string;
    BtnSmRadius: string;
    PL: string;
    PM: string;
    PS: string;
    PX: string;
    BtnRadius: string[];
    title: any;
  }
}
