import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import classes from "./TodoApp.module.css";
import Form from "../Form/Form";
const TodoApp = () => {
  const defaulttodo = [
    {
      id: "1",
      task: "Go to market",
      completed: false,
    },
    {
      id: "2",
      task: "Go to class",
      completed: false,
    },
    {
      id: "3",
      task: "Play videogames",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(defaulttodo);

  const deletetodo = (id) => {
    setTodos((prevstate) => {
      return prevstate.filter((todo) => todo.id !== id);
    });
  };

  const markthrough = (id) => {
    setTodos((prevstate) => {
      return prevstate.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  return (
    <div className={classes.topdiv}>
      <h1>To-DO List APP</h1>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        deletetodo={deletetodo}
        markthrough={markthrough}
      />
    </div>
  );
};

export default TodoApp;
