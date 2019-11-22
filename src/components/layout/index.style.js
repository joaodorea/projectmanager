import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  min-height: 100vh;
  min-width: 100vw;
  grid-template: auto 1fr/350px 1fr;
`;

export const Content = styled.div`
  background-color: ${p => p.theme.color.beige};
  padding: ${p => p.theme.PL};
`;
