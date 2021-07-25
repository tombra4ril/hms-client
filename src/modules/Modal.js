import React, {useEffect} from 'react'
import "../App.scss"

const Modal = ({message, display, closeModal, status, setModalDisplay}) => {
  // effect for removing modal after a period of time
  useEffect(() => {
    if(display === "show"){
      setTimeout(()=> {
        let hide = "hide"
        setModalDisplay(hide)
      }, 5000)
    }
  }, [display, setModalDisplay])
  const handleClick = (event) => {
    event.preventDefault()
    closeModal()
  }
  return (
    <div id="modal" className={display}>
      <div className={`modal-content ${status}`}>
        <p className="modal-text">{message}</p>
      </div>
      <p onClick={handleClick} className="modal-close">&times;</p>
    </div>
  )
}

export default Modal
