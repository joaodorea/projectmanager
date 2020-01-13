import styled from "../../assets/styled/styled-components";

interface ICardProps {
  padding?: boolean;
}

export const Container = styled.div`
  background-color: ${p => p.theme.color.beige};
  padding: ${p => p.theme.space[4]};
`;

export const Card = styled.div<ICardProps>`
  ${p => p.theme.CardContainer}
`;
export const Title = styled.div`
  ${p => p.theme.title}
`;
