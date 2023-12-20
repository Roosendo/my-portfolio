import React, { useState } from 'react'
import Modal from './Modal.jsx'

const ModalContainer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  function openModal () {
    setIsOpen(true)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
      <button onClick={openModal}>View Projects</button>
    </>
  )
}

export default ModalContainer
