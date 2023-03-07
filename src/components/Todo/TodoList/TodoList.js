import React from "react";
import Todo from "../Todo/Todo";
import initialtodo from "../initialtodo";
const TodoList = ({ todos, deletetodo, markthrough }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            task={todo.task}
            completed={todo.completed}
            deletetodo={deletetodo}
            id={todo.id}
            markthrough={markthrough}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
