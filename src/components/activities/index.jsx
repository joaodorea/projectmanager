import React from "react";
import {
  Container,
  Title,
  Activity,
  SubTitle,
  List,
  Item,
  Icon,
  Text,
  Time
} from "./index.style";

export default function Activities() {
  return (
    <Container padding>
      <Title>Activity</Title>
      <Activity>
        <SubTitle>Today</SubTitle>
        <List>
          <Item>
            <Icon color="lightGreen" className="fas fa-check" />
            <Text>Darika Samak mark as done Listing on Product Hunt</Text>
            <Time>8:40 PM</Time>
          </Item>
          <Item>
            <Icon color="lightYellow" className="fas fa-comment-alt" />
            <Text>Darika Samak mark as done Listing on Product Hunt</Text>
            <Time>7:32 PM</Time>
          </Item>
          <Item>
            <Icon color="lightBlue" className="fas fa-download" />
            <Text>Darika Samak mark as done Listing on Product Hunt</Text>
            <Time>6:02 PM</Time>
          </Item>
        </List>
      </Activity>
      <Activity>
        <SubTitle>Yesterday</SubTitle>
        <List>
          <Item>
            <Icon color="lightGreen" className="fas fa-check" />
            <Text>Darika Samak mark as done Listing on Product Hunt</Text>
            <Time>8:40 PM</Time>
          </Item>
          <Item>
            <Icon color="lightYellow" className="fas fa-comment-alt" />
            <Text>Darika Samak mark as done Listing on Product Hunt</Text>
            <Time>7:32 PM</Time>
          </Item>
          <Item>
            <Icon color="lightBlue" className="fas fa-download" />
            <Text>Darika Samak mark as done Listing on Product Hunt</Text>
            <Time>6:02 PM</Time>
          </Item>
        </List>
      </Activity>
    </Container>
  );
}
