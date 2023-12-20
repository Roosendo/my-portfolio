import React, { useEffect, useRef } from 'react'
import '../assets/stylesheets/Modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
  }, [isOpen])

  return (
    <dialog ref={dialogRef} className='modal'>
      {children}
      <button onClick={onClose} className='main-button'>Cerrar</button>
    </dialog>
  )
}

export default Modal
