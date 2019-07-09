import React, { useState } from 'react';

import { TwoChild } from './TwoChild';

const TwoParent = () => {
  const [resetForm, setResetForm] = useState({ reset: false });

  const handleResetFormClick = () => {
    setResetForm({ reset: true });
  };

  return (
    <>
      <TwoChild resetForm={resetForm} />
      <button onClick={handleResetFormClick}>reset form</button>
    </>
  );
};

export { TwoParent };
