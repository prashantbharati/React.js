import React, { useEffect, useState } from "react";
import TodoList from "../TodoList/TodoList";
import classes from "./TodoApp.module.css";
import Form from "../Form/Form";
const TodoApp = () => {
  const defaulttodo = JSON.parse(localStorage.getItem("todos") || "[]");

  // const defaulttodo = [
  //   {
  //     id: "1562",
  //     task: "Go to school",
  //     completed: false,
  //   },
  //   {
  //     id: "1772",
  //     task: "Play music",
  //     completed: false,
  //   },
  //   {
  //     id: "1500",
  //     task: "Learn react",
  //     completed: false,
  //   },
  // ];

  const [todos, setTodos] = useState(defaulttodo);

  useEffect(() => {
    // console.log("useeffect ran");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deletetodo = (id) => {
    setTodos((prevstate) => {
      return prevstate.filter((todo) => todo.id !== id);
    });
  };

  const marktodo = (id) => {
    setTodos((prevstate) => {
      return prevstate.map((todo) =>
        todo.id !== id ? todo : { ...todo, completed: !todo.completed }
      );
    });
  };

  return (
    <div className={classes.topdiv}>
      <h1>ToDO APP</h1>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} deletetodo={deletetodo} marktodo={marktodo} />
    </div>
  );
};

export default TodoApp;
