import React, { useState, useRef } from 'react';

export default function AccordionItem(props) {
  const [isActive, setIsActive] = useState(false);

  const accordionTitle = {
    display:'flex',
    padding: 10,
    justifyContent: 'space-between',
    color:'white',
    width: '100%',
    backgroundColor:'rgb(100 116 139)',
    border: 'none',
  }

  const accordionContent = {
    padding: 20,
    paddingBottom: 40,
    fontSize: 12,
    backgroundColor:'rgb(241 245 249)',
    textAlign:'left'
  }

  const titleRef = useRef(null);

  function MouseOver() {
    titleRef.current.style.backgroundColor = 'rgb(71 85 105)';
  }
  function MouseOut(){
    titleRef.current.style.backgroundColor="rgb(100 116 139)";
  }

  return (
    <div style={
      props.idx === props.lastIdx-1
      ? {borderBottomLeftRadius:10, borderBottomRightRadius:10, overflow:'hidden'}
      : props.idx === 0
      ? {borderTopLeftRadius:10, borderTopRightRadius:10, overflow:'hidden'}
      : null }>
    <div role='heading' aria-level={1}>

      <h4 style={{padding: 0, margin: 0}}>
      <button
      id={`accordion${props.idx+1}id`}
      data-testid="toggle"
      ref={titleRef}
      style={accordionTitle}
      aria-controls={`accordionContent_${props.idx+1}`}
      aria-expanded={isActive}
      aria-disabled={props.type === 'disabled' ? true : false}
      onMouseOver={MouseOver} onMouseOut={MouseOut}
      onClick={() => props.type ? null : setIsActive(!isActive)} >
      <span style={{fontWeight:'700'}}>{props.title}</span>
      <span style={{cursor:'pointer', fontWeight:'bold'}}>{isActive ? '-' : props.type ? '' : '+'}</span>
      </button>
      </h4>

    </div>
    {(isActive || props.type) && <div id={`accordionContent_${props.idx+1}`} role="region" aria-labelledby={`accordion${props.idx+1}id`} style={accordionContent}>{props.content}</div>}
  </div>
  )
}
