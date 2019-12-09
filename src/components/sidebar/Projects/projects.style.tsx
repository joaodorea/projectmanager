import styled from "styled-components";

export interface IItemProps {
  selected?: boolean;
}
export interface IImageProps {
  url?: string;
}

export const Projects = styled.div``;
export const Item = styled.div<IItemProps>`
  display: flex;
  align-items: center;
  padding: 10px ${props => props.theme.sidebarPadding};
  cursor: pointer;
  ${p => p.theme.sidebarHoverSelec}
`;
export const Image = styled.div<IImageProps>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-right: 10px;
  background: ${props => props.url || props.theme.primary};
`;
