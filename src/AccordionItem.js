import React, { useState, useRef } from 'react';

export default function AccordionItem(props) {
  const [isActive, setIsActive] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
    <div role='heading' onFocus={() => setExpanded(prevExpanded => !prevExpanded)} aria-level={1}>
    <button
      ref={titleRef}
      style={accordionTitle}
      aria-expanded={expanded}
      onMouseOver={MouseOver} onMouseOut={MouseOut}
      onClick={() => setIsActive(!isActive)}>
      <div style={{fontWeight:'700'}}>{props.title}</div>
      <div style={{cursor:'pointer', fontWeight:'bold'}}>{isActive ? '-' : '+'}</div>
    </button>
    </div>
    {isActive && <div style={accordionContent}>{props.content}</div>}
  </div>
  )
}
