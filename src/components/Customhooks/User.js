import React, { useRef, useState } from "react";
import useInputForm from "./useInputForm";
const User = () => {
  const [username, setUsername, resetUsername] = useInputForm("");
  const [password, setPassword, resetPassword] = useInputForm("");
  const emailinputRef = useRef(); // line 1
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(emailinputRef.current.value); // 3rd line
    // setPassword("");
    // setUsername("");
    resetPassword();
    resetUsername();
    emailinputRef.current.value = "";
  };

  const handleuserchange = (event) => {
    setUsername(event.target.value);
  };
  const handlepasswordchange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          placeholder="username"
          type="text"
          onChange={handleuserchange}
          value={username}
        ></input>

        <label>Password</label>
        <input
          placeholder="password"
          type="text"
          onChange={handlepasswordchange}
          value={password}
        ></input>

        <label>Email</label>
        <input
          placeholder="email"
          type="text"
          //   onChange={handlepasswordchange}
          //   value={password}
          ref={emailinputRef} // line 2
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default User;
