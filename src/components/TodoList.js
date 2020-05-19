import React from 'react';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItemAction } from '../store/todolist';

function TodoList(props) {
  const {list, deleteItem} = props;
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => { deleteItem(index) }} >Del</button>  
        </li>
      ))}
    </ul>
  )

}

const mapStateToProps = (state) => {
  return {
    list: state.todolist
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteItem: deleteItemAction
  }, dispatch);
}


// connect -> function -> component
// connect(mapStateToProps, mapDispatchToProps)(TheComponent)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);