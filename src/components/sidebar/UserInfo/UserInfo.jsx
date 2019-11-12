import React from "react";
import { Wrapper, Avatar, Name, Job, IconMore } from "./UserInfo.style";

export default function UserTag() {
  return (
    <Wrapper>
      <Avatar src="http://lorempixel.com/100/100/people/1" />
      <Name>João Paulo Dórea</Name>
      <Job>Front-end Developer</Job>
      <IconMore className="fas fa-ellipsis-h"></IconMore>
    </Wrapper>
  );
}
