import React from 'react';
import './Users.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsers, getUsersPerPage } from '../../redux/rootReducer';

import { User } from '../User/User';

export const Users = () => {
  const users = useSelector(getUsers);
  const usersPerPage = useSelector(getUsersPerPage);
  const { currentPage } = useParams();
  const currentUsers = users
    .slice(usersPerPage * currentPage - usersPerPage, usersPerPage * currentPage);

  return (
    <ul className="users">
      {currentUsers.map((user) => (
        <User
          key={user.id}
          user={user}
        />
      ))}
    </ul>
  );
};
