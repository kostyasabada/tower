import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUsersFromServer } from './api/getUsers';
import { loadUsers } from './redux/userReducer';
import { Users } from './components/Users/Users';
import { Pagination } from './components/Pagination/Pagination';
import { RandomName } from './components/RandomName/RandomName';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsersFromServer()
      .then((res) => dispatch(loadUsers(res)));
  }, []);

  return (
    <div className="App">
      <section className="section">
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
        <div className="randomname">
          <RandomName />
        </div>
      </section>

      <Pagination />
    </div>
  );
}

export default App;
