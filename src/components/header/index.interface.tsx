import IThemeProps from "~styled/interface";

export interface IHeaderProps {
  submenu: boolean;
}

export interface IItemProps {
  active?: boolean;
  theme?: IThemeProps;
}

export interface IUserProps {
  circle?: boolean;
  size: string;
}
