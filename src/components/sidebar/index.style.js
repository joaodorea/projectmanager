import styled from "styled-components";

export const Sidebar = styled.div`
  background-color: black;
  color: white;
  height: 100%;
  padding: 30px;
  grid-row: 1/3;
  font-size: 0.9rem;
`;

export const Sidebar_Header = styled.header`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 900;
`;
export const Sidebar_Subtitle = styled.h3`
  color: ${props => props.theme.color_gray};
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-top: 20px;
`;
export const Search_Title = styled.h2`
  font-size: 1.2rem;
  padding: 0 15px;
  flex: 1;
`;

export const Tasks_Icon = styled.i`
  color: ${props => props.theme.color_yellow};
`;

export const Search_Icon = styled.i`
  /* position: relative; */
  color: ${props => props.theme.color_gray};
  font-size: 1rem;
  cursor: pointer;
  padding: 10px;
  /* right: -10px; */
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme.color_darkGray};
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template: 1fr 1fr/1fr 1fr;
  grid-row-gap: 10px;
`;

export const Stats_Number = styled.p`
  font-size: 1.5rem;
  color: white;
  font-weight: 600;
  order: ${props => props.order || 0};
`;

export const Stats_Title = styled.p`
  color: ${props => props.theme.color_gray};
  order: ${props => props.order || 0};
  font-weight: 600;
`;

export const Menu = styled.div`
  font-weight: 600;
`;

export const Menu_Item = styled.p`
  color: white;
  margin-top: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export const Notifications = styled.span`
  display: inline-block;
  width: 18px;
  margin-left: 5px;
  background-color: ${props => props.theme.color_yellow};
  color: black;
  border-radius: 50%;
  line-height: 18px;
  text-align: center;
`;
