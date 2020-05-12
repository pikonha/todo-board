import { useState, useEffect } from "react";

export enum TODO_STATUS {
  PENDING,
  DOING,
  DONE,
}

export interface Todo {
  id: number;
  description: string;
  status: TODO_STATUS;
}

export interface TodoDTO {
  description: string;
  status?: TODO_STATUS;
}

export interface Column {
  header: string;
  todoIds: number[];
}

export default function useTodo() {
  const [todos, todosSet] = useState<Todo[]>([]);
  const [columns, columnsSet] = useState<Column[]>([
    {
      header: "Pending",
      todoIds: [],
    },
    {
      header: "Doing",
      todoIds: [],
    },
    {
      header: "Done",
      todoIds: [],
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("todo-app")) {
      const { todos, columns } = JSON.parse(
        localStorage.getItem("todo-app") || "{}"
      );
      todosSet(todos);
      columnsSet(columns);
    }
  }, []);

  useEffect(
    () => localStorage.setItem("todo-app", JSON.stringify({ todos, columns })),
    [columns, todos]
  );

  function addTodo({ description, status = TODO_STATUS.PENDING }: TodoDTO) {
    todosSet([
      ...todos,
      {
        id: todos.length,
        description,
        status,
      },
    ]);
  }

  return { todos, columns, addTodo };
}
