import React, { useState } from 'react';

import { ThreeChild } from './ThreeChild';

const ThreeParent = () => {
  const [childKey, setChildKey] = useState(0);

  const handleResetFormClick = () => {
    setChildKey(childKey + 1);
  };

  return (
    <>
      <ThreeChild key={childKey} />
      <button onClick={handleResetFormClick}>reset form</button>
    </>
  );
};

export { ThreeParent };
