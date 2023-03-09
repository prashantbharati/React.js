import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const Form = ({ setTodos }) => {
  const [usertask, setUsertask] = useState("");

  const handlechange = (event) => {
    setUsertask(event.target.value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(usertask);

    setTodos((prevstate) => {
      return [
        ...prevstate,
        {
          id: uuid(),
          task: usertask,
          completed: false,
        },
      ];
    });

    setUsertask("");
  };

  return (
    <form onSubmit={handlesubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>Enter your task</label>
        <input
          placeholder="enter task"
          type="text"
          onChange={handlechange}
          value={usertask}
        ></input>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
