import styled from "styled-components";
import { IIconProps, IContainerProps } from "./index.interface";

export const Container = styled.div<IContainerProps>`
  ${p => p.theme.CardContainer}
`;

export const Title = styled.h2`
  ${p => p.theme.title};
  margin-bottom: ${p => p.theme.PM};
`;
export const Activity = styled.div``;
export const SubTitle = styled.h3`
  color: ${p => p.theme.color.lightGray};
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSize.sm};
  font-weight: ${p => p.theme.fontWeight.bold};
  margin-bottom: ${p => p.theme.PM};
`;
export const List = styled.div``;
export const Item = styled.div`
  display: grid;
  grid-template: 1fr 1fr/ 50px 1fr;
  grid-column-gap: 15px;
  margin: ${p => p.theme.PS} 0;
`;
export const Icon = styled.div<IIconProps>`
  border-radius: 50%;
  background: ${({ color, theme }) => theme.color[color] || color};
  color: hsla(0, 0%, 0%, 0.7);
  font-size: ${p => p.theme.fontSize.sm};
  text-align: center;
  line-height: 40px;
  width: 40px;
  margin: auto;
`;
export const Text = styled.p`
  margin-bottom: ${p => p.theme.PS};
`;
export const Time = styled.div`
  grid-column: 2/3;
  color: ${p => p.theme.color.lightGray};
  font-weight: ${p => p.theme.fontWeight.bold};
`;
