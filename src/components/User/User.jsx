import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ user }) => {
  const { name, surname, desc } = user;
  return (
    <div className="user">
      <div className="user__title">
        <p>{name}</p>
        <p>{surname}</p>
      </div>
      <p>{desc}</p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};
