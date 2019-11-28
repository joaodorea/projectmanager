import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  width: 100%;
  /* padding: ${p => p.theme.PL}; */
  border-radius: ${p => p.theme.BtnRadius[2]};
  box-shadow: 0px 2px 4px hsla(0, 0%, 0%, 0.03);
`;
export const Table = styled.table`
  width: 100%;
`;

export const Header = styled.thead`
  color: ${p => p.theme.color.lightGray};
  border-bottom: 1px solid ${p => p.theme.dividerColor};
`;

export const HeaderCell = styled.th`
  color: ${p => p.theme.color.grays[5]};
  font-weight: ${p => p.theme.fontWeight.bold};
  text-align: left;
  padding: ${p => p.theme.PM} ${p => p.theme.PM} ${p => p.theme.PS};
  & + & {
    padding: ${p => p.theme.PM} ${p => p.theme.PS} ${p => p.theme.PS};
  }
`;

export const List = styled.tbody`
  padding: ${p => p.theme.PL};
  border-radius: ${p => p.theme.BtnRadius[2]};
`;

export const Row = styled.tr`
  color: ${p => p.theme.color.lightGray};

  & + & {
    border-top: 1px solid ${p => p.theme.dividerColor};
  }
  &:hover {
    background-color: ${p => p.theme.color.grays[0]};
  }
`;

export const Cell = styled.td`
  color: ${p => (p.black ? "black" : p.theme.lightGray)};  
  padding: ${p => p.theme.PS} ${p => p.theme.PM};
  & + & {
    padding: ${p => p.theme.PS};
  }
  /* font-weight: ${p => p.theme.fontWeight.bold}; */
  vertical-align: middle;
`;
export const Pill = styled.span`
  position: relative;
  left: -${p => p.theme.PS};
  ${p => p.theme.BtnCellSm};
`;
export const Button = styled.button`
  ${p => p.theme.BtnMd};
`;
export const Image = styled.img`
  ${p => p.theme.avatar}
`;
