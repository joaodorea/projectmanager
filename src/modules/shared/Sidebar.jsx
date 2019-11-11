import React from "react";

import Title from "./Sidebar_Title";
import Profile from "./Sidebar_Profile";
import Menu from "./Sidebar_Menu";
import Projects from "./Sidebar_Projects";
import Teams from "./Sidebar_Teams";
import Invite from "./Sidebar_Invite";

import { Sidebar } from "../../components/sidebar/index.style";

export default function SidebarWrapper() {
  return (
    <Sidebar>
      <Title />
      <Profile />
      <Menu />
      <Projects />
      <Teams />
      <Invite />
    </Sidebar>
  );
}
