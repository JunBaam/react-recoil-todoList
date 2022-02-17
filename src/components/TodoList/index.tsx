import React, { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { ITodoItems } from "../../interface/todo";
import { todosState } from "../../recoil/todo";
import TodoItem from "../TodoItem";
import { Container, NoList } from "./styles";

const TodoList: React.FC = () => {
  // NOTE: useState 대신 리코일을 선언
  const [todos, setTodos] = useRecoilState<ITodoItems[]>(todosState);

  const onComplete = useCallback(
    (id: number) => {
      setTodos(
        todos.map((todo: ITodoItems) => {
          return todo.id === id
            ? {
                ...todo,
                isCompleted: !todo.isCompleted,
              }
            : todo;
        })
      );
    },
    [todos, setTodos]
  );

  const onDelete = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo: ITodoItems) => todo.id !== id));
    },
    [setTodos, todos]
  );

  return (
    <Container>
      {todos.length > 0 ? (
        todos.map((todo: ITodoItems) => {
          const { id, contents, isCompleted } = todo;

          return (
            <TodoItem
              key={id}
              id={id}
              contents={contents}
              isCompleted={isCompleted}
              onComplete={onComplete}
              onDelete={onDelete}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })
      ) : (
        <NoList>Todo가 없습니다. 자유롭게 추가해보세요!</NoList>
      )}
    </Container>
  );
};

export default TodoList;
