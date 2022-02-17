import React from "react";

import TodoList from "../TodoList";
import Input from "../Input";
import { Container } from "./styles";

const TodoListTemplate: React.FC = () => {
  return (
    <Container>
      <TodoList />
      <Input />
    </Container>
  );
};

export default TodoListTemplate;
