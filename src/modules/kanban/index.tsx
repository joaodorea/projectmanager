import React, { FC, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Container, ColumnWrapper, Column, Title } from "./index.style";

import { Task } from "../../components/tasks";

interface IState {
  columnOrder: Array<string>;
  tasks: any;
  columns: any;
}

const initialData: IState = {
  tasks: {
    "task-1": { id: "task-1", content: "task 01" },
    "task-2": { id: "task-2", content: "task 02" },
    "task-3": { id: "task-3", content: "task 03" },
    "task-4": { id: "task-4", content: "task 04" },
    "task-5": { id: "task-5", content: "task 05" },
    "task-6": { id: "task-6", content: "task 06" },
    "task-7": { id: "task-7", content: "task 07" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Backlog",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "To do",
      taskIds: ["task-5", "task-6"]
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-7"]
    }
  },
  columnOrder: ["column-1", "column-2", "column-3"]
};

const Kanban: FC<RouteComponentProps> = function() {
  const [state, setState] = useState(initialData);
  const onDragEnd = (result: any) => {
    const { destination, source } = result;
    if (!destination) return;

    let newState = { ...state };
    const changedItem = newState.columns[source.droppableId].taskIds.splice(
      source.index,
      1
    );
    newState.columns[destination.droppableId].taskIds.splice(
      destination.index,
      0,
      changedItem
    );

    setState(newState);
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {state.columnOrder.map((columnId, index) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId: any) => state.tasks[taskId]
          );
          return (
            <ColumnWrapper key={index}>
              <Title>{column.title}</Title>
              <Droppable droppableId={column.id}>
                {provided => (
                  <Column ref={provided.innerRef} {...provided.droppableProps}>
                    {tasks.map((
                      task: any,
                      index: number // key=task.id task=task
                    ) => (
                      <Draggable
                        draggableId={task.id}
                        index={index}
                        key={task.id}
                      >
                        {providedDrag => (
                          <div
                            ref={providedDrag.innerRef}
                            {...providedDrag.draggableProps}
                            {...providedDrag.dragHandleProps}
                          >
                            <Task />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Column>
                )}
              </Droppable>
            </ColumnWrapper>
          );
        })}
      </DragDropContext>
    </Container>
  );
};

export default Kanban;
