import React from "react";
import Todo from "../Todo/Todo";
const TodoList = ({ todos, deletetodo, markthrough }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            task={todo.task}
            deletetodo={deletetodo}
            markthrough={markthrough}
            completed={todo.completed}
            id={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
