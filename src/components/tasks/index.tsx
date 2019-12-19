import React, { FunctionComponent } from "react";

import {
  Container,
  Title,
  NewTask,
  Task,
  Description,
  Owner,
  Avatar,
  Category,
  CheckBox
} from "./index.style";

interface IProps {
  title: string;
}

const TaskList: FunctionComponent<IProps> = ({ title }) => {
  return (
    <Container padding>
      <Title>
        {title} <NewTask color="#3e8e41">+ Add Task</NewTask>
      </Title>
      <Task>
        <CheckBox />
        <Description>
          Find top 5 customers and get review from them.
        </Description>
        <Owner>
          <Avatar
            circle
            src="http://lorempixel.com/100/100/people/1"
          />
          <Category color="#7656d6">Marketing</Category>
        </Owner>
      </Task>
      <Task>
        <CheckBox checked />
        <Description>Finish this app til feb.</Description>
        <Owner>
          <Avatar
            circle
            src="http://lorempixel.com/100/100/people/2"
          />
          <Category color="#FF9800">Development</Category>
        </Owner>
      </Task>
      <Task>
        <CheckBox checked />
        <Description>
          Start the backend when the basic layout is done.
        </Description>
        <Owner>
          <Avatar
            circle
            src="http://lorempixel.com/100/100/people/2"
          />
          <Category color="#FF9800">Development</Category>
        </Owner>
      </Task>
    </Container>
  );
};

export default TaskList;
