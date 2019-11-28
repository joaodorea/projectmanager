import React from "react";
import { Projects, Item, Image } from "./projects.style";
import { SidebarSubtitle } from "../index.style";

export default function Sidebar_Profile() {
  return (
    <Projects>
      <SidebarSubtitle>Projects</SidebarSubtitle>
      <Item>
        <Image />
        Dashboard Ui Kit
      </Item>
      <Item selected>
        <Image />
        CRM System
      </Item>
      <Item>
        <Image />
        Website Redesign
      </Item>
      <Item>
        <Image />
        Communication Tool
      </Item>
    </Projects>
  );
}
