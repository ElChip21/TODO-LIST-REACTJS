import React from 'react'

function Button(props) { // props est un objet prédéfinis en react
  return (
    <button className = 'btn' style={{backgroundColor: props.color}}>
       {props.text}
    </button>
  )
}

export default Button;