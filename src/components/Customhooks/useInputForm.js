import React, { useState } from "react";

const useInputForm = (input = "") => {
  const [value, setValue] = useState(input);

  const setInputval = (inputval) => {
    setValue(inputval);
  };

  const resetInputval = () => {
    setValue("");
  };

  return [value, setInputval, resetInputval];
};

export default useInputForm;
