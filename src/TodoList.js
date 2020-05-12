import React from 'react';

function TodoList(props) {
  const {list} = props;
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => {
            props.onDelete(index);
          }} >Del</button>  
        </li>
      ))}
    </ul>
  )

}

export default TodoList;