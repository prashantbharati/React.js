import React from "react";
import Todo from "../Todo/Todo";
const TodoList = ({ todos, deletetodo, marktodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            task={todo.task}
            completed={todo.completed}
            deletetodo={deletetodo}
            marktodo={marktodo}
            id={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
