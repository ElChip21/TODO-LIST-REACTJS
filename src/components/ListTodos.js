import React from 'react';
import Todo from './Todo.js';

function ListTodos(props) {
    return (
      <div>
        {
          props.propListTodos.map(
            todo => <Todo propsTodo={todo}/>
          )
        }
      </div>
    )
  }
  
  export default ListTodos;