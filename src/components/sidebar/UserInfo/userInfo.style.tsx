import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template: 1fr 1fr/60px 1fr 20px;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  align-items: center;
  /* margin: 20px -${props => props.theme.sidebarPadding}; */
  padding: 20px ${props => props.theme.sidebarPadding};
  background-color: ${props => props.theme.color.darkGray};
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 60px;
  grid-row: 1/3;
`;

export const Name = styled.h3`
  color: white;
  margin: 0;
  align-self: flex-end;
`;

export const Job = styled.p`
  color: ${props => props.theme.color.gray};
  margin: 0;
  font-weight: 600;
  align-self: flex-start;
`;

export const IconMore = styled.p`
  color: ${props => props.theme.color.gray};
  grid-area: 1/3/3/4;
  cursor: pointer;
`;
