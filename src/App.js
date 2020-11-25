import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUsersFromServer } from './api/getUsers';
import { loadUsers } from './redux/userReducer';
import { getUsers } from './redux/rootReducer';
import { Users } from './components/Users/Users';
import { Pagination } from './components/Pagination/Pagination';

function App() {
  const dispatch = useDispatch();

  const users = useSelector(getUsers);
  console.log((users));

  useEffect(() => {
    getUsersFromServer()
      .then((res) => dispatch(loadUsers(res)));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/users/:currentPage?"
        >
          <Users />
        </Route>
        <Redirect
          to="/users/1"
        />
      </Switch>
      {/* <Route
        path="/:currentPage?"
      >
        <Users />
      </Route> */}

      <Pagination />
    </div>
  );
}

export default App;
