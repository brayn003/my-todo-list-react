import React from 'react';
import './App.css';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {
  return (
    <div>
      <h1>To Do List</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
