import React from 'react'

function Todo(props) {
  return (
    <div className='todo'>
        <h2>{props.propsTodo.text}</h2>
        <p>{props.propsTodo.date}</p>
    </div>
  )
}

export default Todo;