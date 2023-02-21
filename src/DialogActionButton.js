import React from 'react'

export default function DialogActionButton(props) {
  return (
    <button onClick={() => props.onClick(!props.isOpen)} style={props.start === true ? null : {marginLeft: 5}}>{props.text}</button>
  )
}
