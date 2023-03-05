import React, { useState } from "react";

const Calculator = () => {
  const [count, setCount] = useState(0);
  // let count = 0;
  const handleplusClick = () => {
    setCount(count + 1);
    // count = count + 1;
    console.log(count);
  };

  const handleminusClick = () => {
    // setCount(count - 1);
    count = count - 1;
    console.log(count);
  };

  // let count = 0;

  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={handleplusClick}>+</button>

      <button onClick={handleminusClick}>-</button>
    </div>
  );
};

export default Calculator;
