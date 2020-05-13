import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useTodos, { Task, TASK_STATUS } from "./useTodo";

const TaskItem: React.FC<Task> = ({ description, status }: Task) => {
  return (
    <TaskItemContainer>
      <TaskItemHeader>
        <TaskItemStatus isDone={status === TASK_STATUS.DONE} />
      </TaskItemHeader>
      <TaskItemContent>{description}</TaskItemContent>
    </TaskItemContainer>
  );
};

const TodoBoard: React.FC = () => {
  const { tasks } = useTodos();

  console.log(tasks);

  return (
    <Container>
      <Content>
        <div>
          <h3>Pending</h3>
          {tasks
            .filter((task) => task.status === TASK_STATUS.PENDING)
            .map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                description={task.description}
                status={task.status}
              />
            ))}
        </div>
        <div>
          <h3>Doing</h3>
          {tasks
            .filter((task) => task.status === TASK_STATUS.DOING)
            .map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                description={task.description}
                status={task.status}
              />
            ))}
        </div>
        <div>
          <h3>Done</h3>
          {tasks
            .filter((task) => task.status === TASK_STATUS.DONE)
            .map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                description={task.description}
                status={task.status}
              />
            ))}
        </div>
      </Content>
    </Container>
  );
};

export default TodoBoard;

const Container = styled.div`
  padding: 4rem 0 1rem;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  > div {
    flex: 1 1 400px;
    padding: 0 40px;
    text-align: center;
    height: 100%;

    h3 {
      color: #595959;
      margin-bottom: 1.5rem;
    }

    & + div {
      border-left: 1px solid #adadad;
    }
  }
`;

const TaskItemContainer = styled.div`
  flex: 1 0 300px;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 10px;
  padding: 0.9rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const TaskItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: #595959;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.5rem;
  font-size: 16px;
`;

const TaskItemStatus = styled.div<{ isDone: boolean }>`
  height: 20px;
  width: 20px;
  background-color: ${({ isDone }) =>
    isDone ? "#68d391" : "rgba(0, 0, 0, 0.06)"};
  border-radius: 50%;
  display: inline-block;
`;

const TaskItemContent = styled.div`
  margin-top: 1rem;
  color: rgba(89, 89, 89, 0.75);
`;
