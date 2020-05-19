import React from 'react';

function TodoList() {
  return (
    <ul>
      {[].map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => {}} >Del</button>  
        </li>
      ))}
    </ul>
  )

}

export default TodoList;