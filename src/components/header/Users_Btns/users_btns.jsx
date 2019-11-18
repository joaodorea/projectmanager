import React from "react";
import { Wrapper, User, Button } from "./users_btn";

export default function Users_Btn() {
  return (
    <Wrapper>
      <User circle size="20px" src="http://lorempixel.com/100/100/people/1" />
      <User circle size="20px" src="http://lorempixel.com/100/100/people/2" />
      <User circle size="20px" src="http://lorempixel.com/100/100/people/3" />
      <Button color="lightGray">Add</Button>
      <Button color="yellow">Chat</Button>
    </Wrapper>
  );
}
