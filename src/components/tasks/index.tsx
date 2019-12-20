import React, { FunctionComponent } from "react";

import {
  Container,
  Title,
  NewTask,
  TaskItem,
  Description,
  Owner,
  Avatar,
  Category,
  CheckBox
} from "./index.style";

interface IProps {
  title: string;
}

export const Task = () => {
  return (
    <TaskItem>
      <CheckBox />
      <Description>Find top 5 customers and get review from them.</Description>
      <Owner>
        <Avatar circle src="http://lorempixel.com/100/100/people/1" />
        <Category color="#7656d6">Marketing</Category>
      </Owner>
    </TaskItem>
  );
};

const TaskList: FunctionComponent<IProps> = ({ title }) => {
  return (
    <Container padding>
      <Title>
        {title} <NewTask color="#3e8e41">+ Add Task</NewTask>
      </Title>
      <Task />
      <Task />
      <Task />
    </Container>
  );
};

export default TaskList;
