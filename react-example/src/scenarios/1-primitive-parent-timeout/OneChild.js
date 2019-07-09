import React, { useState } from 'react';

const OneChild = ({ resetForm }) => {
  const [value, setValue] = useState('');

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  // If not for `value !== ''`, we get in an infinite loop.
  resetForm && value !== '' && setValue('');

  return (
    <form>
      <input type="text" value={value} onChange={handleInputChange} />
    </form>
  );
};

export { OneChild };
