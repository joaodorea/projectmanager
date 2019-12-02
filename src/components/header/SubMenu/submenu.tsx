import React from "react";
import { Wrapper, Item } from "./submenu.style";

export default function submenu() {
  return (
    <Wrapper>
      <Item>Tasks</Item>
      <Item active>Kanban</Item>
      <Item>Activity</Item>
    </Wrapper>
  );
}
