import React, { useState } from "react";

const useToggle = (inputvalue = true) => {
  const [value, setValue] = useState(inputvalue);

  const setToggle = () => {
    setValue(!value);
  };

  return [value, setToggle];
};

export default useToggle;
