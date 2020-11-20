import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { userReducer } from './userReducer';

export const getUsers = (state) => state.users;
export const getLoader = (state) => state.loader;

export const rootReducer = combineReducers({
  users: userReducer,
  loader: loadingReducer,
});
