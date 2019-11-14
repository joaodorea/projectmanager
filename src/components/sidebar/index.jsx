import React from "react";

import UserInfo from "./UserInfo/userInfo";
import Projects from "./Projects/projects";
import Teams from "./Teams/teams";

import {
  Sidebar,
  SidebarHeader,
  SidebarSubtitle,
  SearchIcon,
  TasksIcon,
  SearchTitle,
  Stats,
  StatsNumber,
  StatsTitle,
  Menu,
  MenuItem,
  Notifications,
  Footer,
  Highlighted
} from "./index.style";

export default function SidebarWrapper() {
  return (
    <Sidebar>
      <SidebarHeader>
        <TasksIcon className="fas fa-tasks"></TasksIcon>
        <SearchTitle>Projects</SearchTitle>
        <SearchIcon className="fas fa-search"></SearchIcon>
      </SidebarHeader>
      <UserInfo />
      <Stats>
        <StatsNumber>372</StatsNumber>
        <StatsTitle order="1">Completed Tasks</StatsTitle>
        <StatsNumber>11</StatsNumber>
        <StatsTitle order="2">Open Tasks</StatsTitle>
      </Stats>
      <Menu>
        <SidebarSubtitle>Menu</SidebarSubtitle>
        <MenuItem>Home</MenuItem>
        <MenuItem>My Tasks</MenuItem>
        <MenuItem>
          Notifications <Notifications>3</Notifications>
        </MenuItem>
      </Menu>
      <Projects />
      <Teams />
      <Footer>
        <Highlighted>Invite your team</Highlighted> and start collaborating!
      </Footer>
    </Sidebar>
  );
}
