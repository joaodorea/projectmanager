import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";

import Message from "../../components/chat";
import { Task } from "../../components/tasks";

import {
  Container,
  Title,
  TaskWrapper,
  Tasklist,
  Description,
  Header,
  Top,
  Bottom,
  Subtitle,
  Item,
  // Actions,
  TaskDesc,
  TitleSecond,
  Text,
  Atachs,
  FileImg,
  FileName,
  FileSize,
  Discussion,
  AddComment,
  Avatar,
  Input,
  DisList
} from "./index.style";

const Tasks: FunctionComponent<RouteComponentProps> = () => {
  return (
    <Container>
      <TaskWrapper>
        <Title>Backlog</Title>
        <Tasklist>
          <Task />
          <Task />
          <Task />
        </Tasklist>
        <Title>To do</Title>
        <Tasklist>
          <Task />
        </Tasklist>
        <Title>Done</Title>
        <Tasklist>
          <Task />
          <Task />
        </Tasklist>
      </TaskWrapper>

      <Description>
        <Header>
          <Top>
            <Title>Find top 5 customer requests</Title>
            <Subtitle>Added by Kristin A. yesterday at 12:41pm</Subtitle>
          </Top>
          <Bottom>
            <Item>
              <TitleSecond>Asign to</TitleSecond>
              <div>
                <Avatar></Avatar>
                <Text>Linzell Bowman</Text>
              </div>
            </Item>
            <Item>
              <TitleSecond>Due on</TitleSecond>
              <Text>Tue, Dec 25</Text>
            </Item>
            <Item>
              <TitleSecond>Tag</TitleSecond>
              <Text>Marketing</Text>
            </Item>
            <Item>
              <TitleSecond>Followers</TitleSecond>
              <div>
                <Avatar></Avatar>
                <Avatar></Avatar>
                <Avatar></Avatar>
              </div>
            </Item>
          </Bottom>
          {/* <Actions></Actions> */}
        </Header>

        <TaskDesc>
          <TitleSecond>Description</TitleSecond>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            officia, id nulla quibusdam praesentium alias autem laboriosam vel
            laborum quam ducimus ut voluptate repellendus rerum non quasi
            delectus temporibus consequatur.
          </Text>
        </TaskDesc>

        <Atachs>
          <FileImg></FileImg>
          <FileName>Redesign Brief 2019.pdf</FileName>
          <FileSize>159 KB</FileSize>
        </Atachs>

        <Discussion>
          <AddComment>
            <Avatar></Avatar>
            <Input />
          </AddComment>

          <DisList>
            <Message></Message>
          </DisList>
        </Discussion>
      </Description>
    </Container>
  );
};

export default Tasks;
