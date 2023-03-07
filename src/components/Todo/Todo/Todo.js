import React from "react";
import { FaTrash } from "react-icons/fa";
import classes from "./Todo.module.css";
const Todo = ({ task, completed, deletetodo, id, markthrough }) => {
  return (
    <li className={classes.todo}>
      <input
        onClick={() => markthrough(id)}
        type="checkbox"
        defaultChecked={completed}
      />
      <span
        style={{ textDecoration: completed ? "line-through" : "none" }}
        className={classes.todotext}
      >
        {" "}
        {task}{" "}
      </span>
      <span onClick={() => deletetodo(id)} className={classes.todoicon}>
        <FaTrash />
      </span>
    </li>
  );
};

export default Todo;
