import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUsers, getUsersPerPage } from '../../redux/rootReducer';
import './Pagination.scss';

export const Pagination = () => {
  const users = useSelector(getUsers);
  const usersPerPage = useSelector(getUsersPerPage);
  const pages = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); ++i) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="nav__list">
        {pages.map((page) => (
          <li
            className="nav__item"
            key={page}
          >
            <NavLink
              className="nav__link"
              activeClassName="nav__link_is-active"
              to={`/users/${page}`}
            >
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
