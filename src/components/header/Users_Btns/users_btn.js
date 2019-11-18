import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const User = styled.img`
  ${p => p.theme.avatar(p)};
  margin: 0 2px;
`;

export const Button = styled.button`
    ${p => p.theme.BtnCellSm};
    margin: 0 5px;
`;

