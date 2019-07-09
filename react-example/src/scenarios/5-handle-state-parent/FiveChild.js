import React from 'react';

const FiveChild = ({ inputValue, setInputValue }) => {
  return (
    <form>
      <input type="text" onChange={setInputValue} value={inputValue} />
    </form>
  );
};

export { FiveChild };
