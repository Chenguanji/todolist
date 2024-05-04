import React, { useState } from 'react';

const LastEditedTime = () => {
  const [lastEditedTime, setLastEditedTime] = useState(new Date());

  const handleUpdateTime = () => {
    setLastEditedTime(new Date());
  };

  return (
    <div>
      <p>Last edited: {lastEditedTime.toLocaleString()}</p>
      <button onClick={handleUpdateTime} >Update Time</button>
    </div>
  );
};

export default LastEditedTime;
