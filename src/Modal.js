import React, { useRef } from 'react'
import './Modal.css'

function Modal(props) {
  const myRef = useRef()

  const clickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      props.clickOutside()
    }
  }

  return (
    <div className='modal' onClick={clickOutside}>
      <div className='modal__content' ref={myRef}>
        <h1> Login </h1>
        <form className="modal__form">
            <label>
                Email
              <input type="email" name="email" placeholder='hi'/>
            </label>
            <label>
                Password
                <input type="password"/> 
            </label>
            <input className="submit__button" type='submit' value="Submit" /> 
        </form>
      </div>
    </div>
  )
}

export default Modal
