import styled from "styled-components";

export const Sidebar = styled.div`
  background-color: black;
  color: white;
  height: 100%;
  /* padding: ${props => props.theme.sidebarPadding}; */
  grid-row: 1/3;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 900;
  padding: 20px ${p => p.theme.sidebarPadding};
`;
export const SidebarSubtitle = styled.h3`
  color: ${props => props.theme.color.gray};
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0 ${p => p.theme.sidebarPadding};
  margin-top: ${props => props.theme.sidebarPadding};
`;
export const SearchTitle = styled.h2`
  font-size: 1.2rem;
  padding: 0 15px;
  flex: 1;
`;

export const TasksIcon = styled.i`
  color: ${props => props.theme.color.yellow};
`;

export const SearchIcon = styled.i`
  /* position: relative; */
  color: ${props => props.theme.color.gray};
  font-size: 1rem;
  cursor: pointer;
  padding: 10px;
  /* right: -10px; */
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme.color.darkGray};
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template: 1fr 1fr/1fr 1fr;
  grid-row-gap: 5px;
  padding: ${p => p.theme.sidebarPadding};
  padding-bottom: 0;
`;

export const StatsNumber = styled.p`
  font-size: 1.5rem;
  color: white;
  font-weight: 600;
  order: ${props => props.order || 0};
`;

export const StatsTitle = styled.p`
  color: ${props => props.theme.color.gray};
  order: ${props => props.order || 0};
  font-weight: 600;
`;

export const Menu = styled.div`
  font-weight: 600;
`;

export const MenuItem = styled.p`
  color: white;
  font-weight: 600;
  cursor: pointer;
  padding: 10px ${p => p.theme.sidebarPadding};
  &:hover {
    background-color: ${p => p.theme.color.darkGray};
  }
`;

export const Notifications = styled.span`
  display: inline-block;
  width: 18px;
  margin-left: 5px;
  background-color: ${props => props.theme.color.yellow};
  color: black;
  border-radius: 50%;
  line-height: 18px;
  text-align: center;
`;

export const Footer = styled.footer`
  padding: ${p => p.theme.sidebarPadding};
  width: 70%;
  line-height: 1.4rem;
`;

export const Highlighted = styled.span`
  color: ${p => p.theme.color.yellow};
  border-bottom: 1px dotted ${p => p.theme.color.yellow};
  cursor: pointer;
`;
