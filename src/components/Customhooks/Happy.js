import React, { useState } from "react";
import Happyblock from "./Happyblock";
import useToggle from "./useToggle";
const Happy = () => {
  const [toggle, setToggle] = useToggle(true);

  const handleclick = () => {
    setToggle();
  };

  return (
    <div>
      {toggle && <Happyblock />}
      <button onClick={handleclick}>Toggle</button>
    </div>
  );
};

export default Happy;
