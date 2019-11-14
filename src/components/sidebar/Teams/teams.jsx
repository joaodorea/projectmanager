import React from "react";
import { Teams, Item, UserAvatar, Text } from "./teams.style";
import { SidebarSubtitle } from "../index.style";

export default function Sidebar_Profile() {
  return (
    <Teams>
      <SidebarSubtitle>Teams</SidebarSubtitle>
      <Item>
        <Text>Front-end</Text>
        <UserAvatar src="http://lorempixel.com/100/100/people/1" />
        <UserAvatar src="http://lorempixel.com/100/100/people/2" />
        <UserAvatar src="http://lorempixel.com/100/100/people/3" />
      </Item>
      <Item>
        <Text>Back-end</Text>
        <UserAvatar src="http://lorempixel.com/100/100/people/4" />
        <UserAvatar src="http://lorempixel.com/100/100/people/5" />
      </Item>
      <Item>
        <Text>Design</Text>
        <UserAvatar src="http://lorempixel.com/100/100/people/6" />
        <UserAvatar src="http://lorempixel.com/100/100/people/7" />
        <UserAvatar src="http://lorempixel.com/100/100/people/8" />
        <UserAvatar src="http://lorempixel.com/100/100/people/" />
      </Item>
    </Teams>
  );
}
