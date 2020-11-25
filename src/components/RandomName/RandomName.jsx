import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../../redux/rootReducer';

export const RandomName = () => {
  const [randomIndex, setRandomIndex] = useState(1);
  const users = useSelector(getUsers);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomIndex(Math.floor(Math.random() * users.length));
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, [users]);

  return (
    <div>
      {users.length > 0 && (
      <p>{`${users[randomIndex].name} ${users[randomIndex].surname}`}</p>
      )}
    </div>
  );
};
