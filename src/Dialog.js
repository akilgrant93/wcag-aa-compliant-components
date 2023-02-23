import React, {useState, useEffect, useCallback} from 'react'
import DialogFormItem from './DialogFormItem'
import './index.css';

export default function Dialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [isVerifiedOpen, setIsVerifiedOpen] = useState(false)
  const [isDummyOpen, setIsDummyOpen] = useState(false)

  const handleClose = () => {
    setIsAddOpen(!isAddOpen)
    setIsOpen(!isOpen)
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

  const dummy = {
    position: 'absolute',
    margin: '0 auto',
    top: '50%',
    left: 0,
    right: 0,
    width: '80%',
    borderRadius: 10,
    backgroundColor:'rgb(220 220 224)',
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

  // const sendYes = () => handleClose(true);
  // const sendNo = () => handleClose(false);

  // useEscapeKey(isOpen);



  useEffect(() => {
    const onKeyPress = (event) => {
      if(event.keyCode === 27 && isOpen) {
        setIsOpen(!isOpen)
        console.log('???')
        //...
      }
    }

    document.addEventListener("keydown", onKeyPress, false);

    return () => {
      document.removeEventListener("keydown", onKeyPress, false);
    };
  }, [isOpen]);

  return (
    <div style={{width: '90%', margin: '0 auto', marginTop: 50, marginBottom: 50, paddingTop: 50}} className={isOpen ? 'bg' : null}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>Add Delivery Address</button>
      {isOpen ? <div id="dialog_layer" style={dialog} className="dialogs">

        {!isAddOpen && !isVerifiedOpen ? <div role="dialog" id="dialog1" aria-labelledby="dialog1_label"
        aria-modal="true" className="hidden">
          <h2 id="dialog1_label" style={{textAlign: 'center'}}>Add Delivery Address</h2>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', paddingLeft: 20}}>
              {dialogData.map((item, idx) => {return (
                  <DialogFormItem key={idx} text={item.text} ariaDesc={item.ariaDesc} instructions={item.instructions} type='text' className={item.class} focus={idx === 0 ? true : false}/>
                )})}
            </div>

    <div style={{display:'flex', justifyContent:'flex-end'}}>

      <button onClick={() => setIsVerifiedOpen(!isVerifiedOpen)}>{'Verify Address'}</button>

      <button onClick={() => setIsAddOpen(!isAddOpen)} style={{marginLeft: 5}}>{'Add'}</button>

      <button onClick={() => setIsOpen(!isOpen)}  style={{marginLeft: 5}}>{'Cancel'}</button>

    </div>

        </div> : null}

        {isVerifiedOpen ? <div id="dialog2" role="dialog" aria-labelledby="dialog2_label" aria-describedby="dialog2_desc" aria-modal="true" className="hidden">
    <h2 id="dialog2_label" className="dialog_label">Verification Result</h2>
    <div id="dialog2_desc" className="dialog_desc">
      <p tabIndex="-1" id="dialog2_para1">
        This is just a demonstration.
        If it were a real application, it would provide a message telling whether the entered address is valid.
      </p>
      <p>
        For demonstration purposes, this dialog has a lot of text.
        It demonstrates a scenario where:
      </p>
      <ul>
        <li>The first interactive element, the help link, is at the bottom of the dialog.</li>
        <li>If focus is placed on the first interactive element when the dialog opens, the validation message may not be visible.</li>
        <li>If the validation message is visible and the focus is on the help link, then the focus may not be visible.</li>
        <li>
          When the dialog opens, it is important that both:
          <ul>
            <li>The beginning of the text is visible so users do not have to scroll back to start reading.</li>
            <li>The keyboard focus always remains visible.</li>
          </ul>
        </li>
      </ul>
      <p>There are several ways to resolve this issue:</p>
      <ul>
        <li>Place an interactive element at the top of the dialog, e.g., a button or link.</li>
        <li>Make a static element focusable, e.g., the dialog title or the first block of text.</li>
      </ul>
      <p>Please <em>DO NOT </em> make the element with role dialog focusable!</p>
      <ul>
        <li>The larger a focusable element is, the more difficult it is to visually identify the location of focus, especially for users with a narrow field of view.</li>
        <li>The dialog has a visual border, so creating a clear visual indicator of focus when the entire dialog has focus is not very feasible.</li>
        <li>
          Screen readers read the label and content of focusable elements.
          The dialog contains its label and a lot of content! If a dialog like this one has focus, the actual focus is difficult to comprehend.
        </li>
      </ul>
      <p>
        In this dialog, the first paragraph has <code>tabIndex=<q>-1</q></code>.
        The first paragraph is also contained inside the element that provides the dialog description, i.e., the element that is referenced by <code>aria-describedby</code>.
        With some screen readers, this may have one negative but relatively insignificant side effect when the dialog opens -- the first paragraph may be announced twice.
        Nonetheless, making the first paragraph focusable and setting the initial focus on it is the most broadly accessible option.
      </p>
    </div>
    <div style={{display:'flex', justifyContent:'flex-end'}}>
      <a href="#" onClick={() => {
        setIsDummyOpen(!isDummyOpen)
      }}>link to help</a>
      <button style={{marginLeft:5}} type="button" onClick={() => {
        setIsDummyOpen(!isDummyOpen)
      }}>accepting an alternative form</button>
      <button style={{marginLeft:5}} type="button" onClick={() => {
        setIsVerifiedOpen(!isVerifiedOpen)
      }}>Close</button>
    </div>
        </div> : null}

        {isAddOpen ? <div id="dialog3" role="dialog" aria-labelledby="dialog3_label" aria-describedby="dialog3_desc" aria-modal="true" className="hidden">
          <h2 id="dialog3_label" style={{textAlign:'center'}}>Address Added</h2>
          <p id="dialog3_desc" style={{margin: '0 auto', paddingTop: 20, paddingBottom: 20, fontSize:14, width: '85%'}}>
              The address you provided has been added to your list of delivery addresses.
              It is ready for immediate use.
              If you wish to remove it, you can do so from <a href="#" onClick={() => console.log('clicked!')}>your profile.</a>
          </p>
          <div style={{display:'flex', justifyContent:'flex-end'}}>
            <button type="button" id="dialog3_close_btn" onClick={() => handleClose()}>OK</button>
          </div>
        </div> : null}

      </div> : null}

        {isDummyOpen ? <div id="dialog4" role="dialog" style={dummy}aria-labelledby="dialog4_label" aria-describedby="dialog4_desc" className="hidden" aria-modal="true">
          <h2 id="dialog4_label" className="dialog_label">End of the Road!</h2>
          <p id="dialog4_desc" className="dialog_desc">You activated a fake link or button that goes nowhere! The link or button is present for demonstration purposes only.</p>
            <div className="dialog_form_actions">
              <button type="button" style={{marginBottom: 20}}id="dialog4_close_btn" onClick={() => {
        setIsDummyOpen(!isDummyOpen)
      }}>Close</button>
            </div>
        </div> : null }
    </div>
  )
}
