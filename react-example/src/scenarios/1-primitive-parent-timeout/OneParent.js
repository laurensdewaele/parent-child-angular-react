import React, { useState } from 'react';

import { OneChild } from './OneChild';

const OneParent = () => {
  const [resetForm, setResetForm] = useState(false);

  const handleResetFormClick = () => {
    setResetForm(true);
    setTimeout(() => setResetForm(false), 0);
  };

  return (
    <>
      <OneChild resetForm={resetForm} />
      <button onClick={handleResetFormClick}>reset form</button>
    </>
  );
};

export { OneParent };
