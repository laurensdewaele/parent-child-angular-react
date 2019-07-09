import React, { useState } from "react";

import { FiveChild } from "./FiveChild";

const FiveParent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleResetFormClick = () => {
    setInputValue("");
  };

  const handleInputValueChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <FiveChild
        inputValue={inputValue}
        setInputValue={handleInputValueChange}
      />
      <button onClick={handleResetFormClick}>reset form</button>
    </>
  );
};

export { FiveParent };
