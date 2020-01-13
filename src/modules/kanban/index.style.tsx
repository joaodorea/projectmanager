import styled from "../../assets/styled/styled-components";

export const Container = styled.div`
  display: flex;
  padding: ${p => p.theme.space[5]};
  height: 100%;

  & > * + * {
    margin-left: ${p => p.theme.space[4]};
  }
`;

export const ColumnWrapper = styled.div`
  ${p => p.theme.CardContainer};
  padding: ${p => p.theme.space[4]};
`;

export const Title = styled.h3`
  ${p => p.theme.title};
  margin-bottom: ${p => p.theme.space[5]};
`;

export const Column = styled.div`
  height: 100%;
`;
