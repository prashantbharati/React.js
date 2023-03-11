import React from "react";
import { FaTrash } from "react-icons/fa";
import classes from "./Todo.module.css";
const Todo = ({ task, completed, deletetodo, id, markthrough }) => {
  return (
    <li className={classes.todo}>
      <input
        type="checkbox"
        defaultChecked={completed}
        onClick={() => markthrough(id)}
      />
      <span
        className={classes.todotext}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </span>
      <span className={classes.todoicon} onClick={() => deletetodo(id)}>
        <FaTrash />
      </span>
    </li>
  );
};

export default Todo;
