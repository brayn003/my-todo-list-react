import React, {Component} from 'react';
import './App.css';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  state = {
    list: ['item 1', 'item 2']
  }


  onElementAdd = (newElem) => {
    console.log('hello', newElem)
    const {list} = this.state;
    this.setState({
      list: [...list, newElem]
    });
  }

  deleteItem = (index) => {
    console.log(index)
  }


  render() {
    const {list} = this.state;
    return (
      <div>
        <h1>To Do List</h1>
        <TodoInput onChange={this.onElementAdd} />
        <TodoList onDelete={this.deleteItem} list={list} />
      </div>
    );
  }



}

export default App;
