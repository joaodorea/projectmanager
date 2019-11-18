import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: ${p => p.theme.PL};
  padding-bottom: ${p => (p.submenu ? 0 : p.theme.PL)};
  color: ${p => p.theme.headerMainTextColor};
  box-shadow: 3px 3px 6px hsl(0, 0%, 95%);
`;

export const Title = styled.h2`
  flex: 1;
  font-size: 1.7rem;
  font-weight: 900;
`;
export const TitleOptions = styled.i`
  background-color: ${p => p.theme.color.grays[1]};
  color: ${p => p.theme.color.grays[5]};
  padding: 5px;
  margin-left: 10px;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
`;
