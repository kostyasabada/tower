import React, { useEffect } from 'react';
import './App.css';
import { getUsers } from './api/getUsers';

function App() {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
