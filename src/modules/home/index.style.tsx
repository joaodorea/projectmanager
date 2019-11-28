import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template: 1fr / 2fr 1fr;
  grid-column-gap: 20px;
  background-color: ${p => p.theme.color.beige};
  padding: ${p => p.theme.PL};
`;
export const Column = styled.div``;

export const Card = styled.div`
  ${p => p.theme.CardContainer}
`;
export const Title = styled.div`
  ${p => p.theme.title}
`;
