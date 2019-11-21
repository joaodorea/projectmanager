import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${p => p.theme.color.beige};
  padding: ${p => p.theme.PL};
`;

export const Container = styled.div`
  background-color: white;
  padding: ${p => p.theme.PL};
  border-radius: ${p => p.theme.BtnRadius[2]};
`;

export const Header = styled.div`
  display: flex;
  color: ${p => p.theme.color.lightGray};
`;

export const List = styled.div`
  background-color: white;
  padding: ${p => p.theme.PL};
  border-radius: ${p => p.theme.BtnRadius[2]};
`;
