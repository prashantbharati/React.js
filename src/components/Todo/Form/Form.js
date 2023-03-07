import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
const Form = ({ todos, setTodos }) => {
  const [userInput, setuserInput] = useState("");
  console.log(todos);

  const handlechangne = (event) => {
    setuserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(userInputref.current.value);
    // userInputref.current.value = "";
    setTodos((prevstate) => {
      return [
        ...prevstate,
        {
          id: uuid(),
          task: userInput,
          completed: false,
        },
      ];
    });

    setuserInput("");
    // userInputref.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Enter the task</label>
        <input
          placeholder="Enter task"
          value={userInput}
          onChange={handlechangne}
        />
      </div>
      <button type="submit">ADD</button>
    </form>
  );
};

export default Form;
