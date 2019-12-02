import styled from "styled-components";
import { IUserProps } from "../index.interface";

export const Wrapper = styled.div`
  display: flex;
`;

export const User = styled.img<IUserProps>`
  ${p => p.theme.avatar};
  margin: 0 2px;
`;

export const Button = styled.button`
  ${p => p.theme.BtnCellSm};
  margin: 0 5px;
`;
