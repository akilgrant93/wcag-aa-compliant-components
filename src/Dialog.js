import React, {useState} from 'react'
import DialogFormItem from './DialogFormItem'

export default function Dialog() {
  const [isOpen, setIsOpen] = useState(false)
  const openDialog = () => {

  }

  const closeDialog = () => {

  }

  const replaceDialog = () => {

  }

  const dialog = {
    padding: 20,
    margin: '0 auto',
    paddingBottom: 40,
    fontSize: 12,
    backgroundColor:'rgb(241 245 249)',
    textAlign:'left',
    position: 'absolute',
    top: '25%',
    left: 0,
    right: 0,
    width: '80%',
    borderRadius: 10,
    boxShadow: '0 19px 38px rgb(0 0 0 / 12%), 0 15px 12px rgb(0 0 0 / 22%)'
  }

  const dialogData = [
    {
      text: 'Street',
      class:'wide_input'
    },
    {
      text: 'City',
      class:'city_input'
    },
    {
      text: 'State',
      class:'state_input'
    },
    {
      text: 'Zip',
      class:'zip_input'
    },
    {
      text:'Special Instructions',
      class: 'wide_input',
      ariaDesc: "special_instructions_desc",
      instructions: 'For example, gate code or other information to help the driver find you.'
    }
  ]

  return (
    <div style={{width: '90%', margin: '0 auto', marginTop: 50, paddingTop: 50}}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>Add Delivery Address</button>
      {isOpen ? <div id="dialog_layer" style={dialog} className="dialogs">
        <div role="dialog" id="dialog1" aria-labelledby="dialog1_label"
        aria-modal="true" className="hidden">
          <h2 id="dialog1_label" style={{textAlign: 'center'}}>Add Delivery Address</h2>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', paddingLeft: 20}}>
              {dialogData.map((item, idx) => {return (
                  <DialogFormItem key={idx} text={item.text} ariaDesc={item.ariaDesc} instructions={item.instructions} type='text' className={item.class}/>
                )})}
            </div>

    <div style={{display:'flex', justifyContent:'flex-end'}}>

      <button onClick={() => !isOpen}>{'Verify Address'}</button>

      <button onClick={() => !isOpen} style={{marginLeft: 5}}>{'Add'}</button>

      <button onClick={() => setIsOpen(!isOpen)}  style={{marginLeft: 5}}>{'Cancel'}</button>

    </div>

  </div>
      </div> : null}
    </div>
  )
}
