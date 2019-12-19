import styled from "../../assets/styled/styled-components";

export interface ICardProps {
  padding?: boolean;
  half?: string;
}

export const Content = styled.div`
  display: grid;
  grid-template: 1fr / 2fr 1fr;
  grid-column-gap: 20px;
  background-color: ${p => p.theme.color.beige};
  padding: ${p => p.theme.space[4]};
`;
export const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: start;
  & > * {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const Card = styled.div<ICardProps>`
  ${p => p.theme.CardContainer};
  width: ${p => (p.half ? "calc(50% - 15px)" : "100%")};
  ${p =>
    p.half &&
    (p.half === "right" ? `margin-left: 15px;` : `margin-right: 15px;`)}
`;

export const Title = styled.div`
  ${p => p.theme.title};
`;

export const HighlightedNumber = styled.div`
  font-size: ${p => p.theme.fontSize[8]};
  font-weight: ${p => p.theme.fontWeight.bolder};
`;
