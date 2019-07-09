import React, { useState } from 'react';

const SixChild = ({ resetForm }) => {
  const [value, setValue] = useState('');

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  resetForm && value !== '' && setValue('');

  return (
    <form>
      <input type="text" value={value} onChange={handleInputChange} />
    </form>
  );
};

export { SixChild };
