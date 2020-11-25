import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsers, getUsersPerPage } from '../../redux/rootReducer';
import { User } from '../User/User';

export const Users = () => {
  const users = useSelector(getUsers);
  const usersPerPage = useSelector(getUsersPerPage);
  // const currentPage = useSelector(getCurrentPage);
  // const currentPage = useRouteMatch();
  // const location = useLocation();
  const { currentPage } = useParams();
  console.log(usersPerPage, currentPage, currentPage);
  const currentUsers = users
    .slice(usersPerPage * currentPage - usersPerPage, usersPerPage * currentPage)
  console.log((currentUsers));

  return (
    <ul>
      {currentUsers.map((user) => (
        <User
          key={users.id}
          user={user}
        />
      ))}
    </ul>
  );
};
