import { useEffect, useRef } from 'react'
import '../assets/stylesheets/Modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal()
      const h2Element = dialogRef.current.querySelector('h2')
      if (h2Element) h2Element.focus()
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
