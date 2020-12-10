import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ user }) => {
  const { name, surname, desc } = user;
  return (
    <div className="user">
      <p>{`${name} ${surname}`}</p>
      <p>{desc}</p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};
