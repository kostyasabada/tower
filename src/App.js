import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFromServer } from './api/getUsers';
import { loadUsers } from './redux/userReducer';
import { getUsers } from './redux/rootReducer';

function App() {
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const users = useSelector(getUsers);
  console.log((users));

  useEffect(() => {
    getUsersFromServer()
      .then((res) => dispatch(loadUsers(res)));
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
