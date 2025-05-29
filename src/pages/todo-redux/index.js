import React from "react";
import TodoList from "./TodoList";
import { useTheme } from "../../contexts/ThemeContext";

function TodoRedux() {
  const { theme } = useTheme();

  return (
    <div className={`page-content ${theme}`}>
      <TodoList />
    </div>
  );
}

export default TodoRedux;
