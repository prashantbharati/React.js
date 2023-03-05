import React, { useState } from "react";
import Happyblock from "./Happyblock";
import useToggle from "./useToggle";
const Happy = () => {
  const [ishappy, setIshappy] = useToggle(true);

  const handleclick = () => {
    setIshappy();
  };

  return (
    <div>
      {ishappy && <Happyblock />}
      <button onClick={handleclick}>Toggle</button>
    </div>
  );
};

export default Happy;
