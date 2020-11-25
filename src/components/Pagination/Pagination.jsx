import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setCurrentPage } from '../../redux/currentPageReducer';
import { getUsers, getUsersPerPage } from '../../redux/rootReducer';
import './Pagination.scss';

export const Pagination = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const usersPerPage = useSelector(getUsersPerPage);
  const pages = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); ++i) {
    pages.push(i);
  }

  const handlePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <nav>
      <ul className="nav__list">
        {pages.map((page) => (
          <li className="nav__item">
            <NavLink
              to={`/users/${page}`}
              onClick={() => handlePage(page)}
            >
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
