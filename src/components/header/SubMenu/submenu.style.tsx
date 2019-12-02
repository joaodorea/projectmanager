import styled from "../../../assets/styled/styled-components";
import { IItemProps } from "../index.interface";
import IThemeProps from "../../../assets/styled/interface";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${({ theme }: { theme: IThemeProps }) => theme.space[4]};
  margin-left: -15px;
`;

export const Item = styled.span<IItemProps>`
  position: relative;
  bottom: -2px;
  padding: 15px;
  color: ${p => (p.active ? p.theme.color.grays[9] : p.theme.color.grays[7])};
  font-size: ${p => p.theme.fontSize[2]};
  cursor: pointer;
  font-weight: 600;
  border-bottom: ${p => (p.active ? "2px solid " + p.theme.color.primary : "")};
`;
