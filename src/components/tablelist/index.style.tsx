import styled from "../../assets/styled/styled-components";

export interface IImageProps {
  rounded?: boolean;
  size: string;
  src: string;
}
export interface ICellProps {
  black?: boolean;
}

export const Card = styled.div`
  background-color: white;
  width: 100%;
  border-radius: ${p => p.theme.BtnRadius[2]};
  box-shadow: 0px 2px 4px hsla(0, 0%, 0%, 0.03);
`;
export const Table = styled.table`
  width: 100%;
`;

export const Header = styled.thead`
  color: ${p => p.theme.color.lightGray};
  border-bottom: 1px solid ${p => p.theme.color.dividerColor};
`;

export const HeaderCell = styled.th`
  color: ${p => p.theme.color.grays[5]};
  font-weight: ${p => p.theme.fontWeight.bold};
  text-align: left;
  padding: ${p => p.theme.space[4]} ${p => p.theme.space[4]}
    ${p => p.theme.space[2]};
  & + & {
    padding: ${p => p.theme.space[4]} ${p => p.theme.space[2]}
      ${p => p.theme.space[2]};
  }
`;

export const List = styled.tbody`
  padding: ${p => p.theme.space[5]};
  border-radius: ${p => p.theme.BtnRadius[2]};
`;

export const Row = styled.tr`
  color: ${p => p.theme.color.lightGray};

  & + & {
    border-top: 1px solid ${p => p.theme.color.dividerColor};
  }
  &:hover {
    background-color: ${p => p.theme.color.grays[0]};
  }
`;

export const Cell = styled.td<ICellProps>`
  color: ${p => (p.black ? "black" : p.theme.color.lightGray)};  
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[4]};
  & + & {
    padding: ${p => p.theme.space[2]};
  }
  /* font-weight: ${p => p.theme.fontWeight.bold}; */
  vertical-align: middle;
`;
export const Pill = styled.span`
  position: relative;
  left: -${p => p.theme.space[2]};
  ${p => p.theme.BtnCellSm};
`;
export const Button = styled.button`
  ${p => p.theme.BtnMd};
`;
export const Image = styled.img<IImageProps>`
  ${p => p.theme.avatar}
`;
