import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { usersPerPageReducer } from './usersPerPageReducer';

export const getUsers = (state) => state.users;
export const getUsersPerPage = (state) => state.usersPerPage;
export const getCurrentPage = (state) => state.currentPage;

export const rootReducer = combineReducers({
  users: userReducer,
  usersPerPage: usersPerPageReducer,
});
