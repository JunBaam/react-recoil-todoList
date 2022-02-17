import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoListTemplate from "./components/TodoListTemplate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoListTemplate />} />
    </Routes>
  );
}

export default App;
