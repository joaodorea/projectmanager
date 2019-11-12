import React from "react";

import UserInfo from "./UserInfo/UserInfo";
import Projects from "./Projects";
// import Teams from "./Teams/Teams";

import {
  Sidebar,
  Sidebar_Header,
  Sidebar_Subtitle,
  Search_Icon,
  Tasks_Icon,
  Search_Title,
  Stats,
  Stats_Number,
  Stats_Title,
  Menu,
  Menu_Item,
  Notifications
} from "./index.style";

export default function SidebarWrapper() {
  return (
    <Sidebar>
      <Sidebar_Header>
        <Tasks_Icon className="fas fa-tasks"></Tasks_Icon>
        <Search_Title>Projects</Search_Title>
        <Search_Icon className="fas fa-search"></Search_Icon>
      </Sidebar_Header>
      <UserInfo />
      <Stats>
        <Stats_Number>372</Stats_Number>
        <Stats_Title order="1">Completed Tasks</Stats_Title>
        <Stats_Number>11</Stats_Number>
        <Stats_Title order="2">Open Tasks</Stats_Title>
      </Stats>
      <Menu>
        <Sidebar_Subtitle>Menu</Sidebar_Subtitle>
        <Menu_Item>Home</Menu_Item>
        <Menu_Item>My Tasks</Menu_Item>
        <Menu_Item>
          Notifications <Notifications>3</Notifications>
        </Menu_Item>
      </Menu>
      <Sidebar_Subtitle>Projects</Sidebar_Subtitle>
      <Projects />
      {/* <Teams /> */}
    </Sidebar>
  );
}
