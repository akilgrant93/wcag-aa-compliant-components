import React from 'react'

export default function DialogFormItem(props) {

  const dialogForm = {
    margin: '10px 0',
    fontSize: 11,
    // fontWeight:'bold',
    boxSizing: 'border-box',
    maxWidth: '70%',
  }

  const labelText = {
    boxSizing: 'border-box',
    paddingRight: '0.5em',
    fontSize: '12px',
    width: '30%',
    textAlign: 'right',
    display: 'inline-block',
    fontWeight: 'bold'
  }

  const inputStyle = {
    width:
    props.className === 'city_input'
    ? '17em'
    : props.className === 'wide_input'
    ? '22em'
    : props.className === 'state_input'
    ? '15em'
    :  '9em'
  }

  const labelInfo = {
    boxSizing: 'border-box',
    paddingRight: '0.5em',
    fontSize: '12px',
    width: '30%',
    textAlign: 'right',
    display: 'inline-block'
  }


  return (
    <div>
      {props.ariaDesc
      ? <div style={dialogForm}>
        <label htmlFor="special_instructions">
          <span className="label_text" style={labelText}>Special instructions:</span>
        </label>

        <input style={{boxSizing: 'border-box', maxWidth: '70%', width: '27em'}} id="special_instructions" type="text" aria-describedby={props.ariaDesc} className={props.className} />

        <div style={labelInfo} id={props.ariaDesc}>For example, gate code or other information to help the driver find you</div>
      </div>
      : <div className="dialog_form_item" style={dialogForm}>
      <label>
        <span className="label_text" style={labelText}>{props.text}:</span>
        <input style={inputStyle} type="text" className={props.className} autoFocus={props.focus ? true : false}/>
      </label>
    </div>

    }
    </div>
  )
}
