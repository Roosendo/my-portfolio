import { useState } from 'react'
import Modal from 'react-modal'
import '../assets/stylesheets/Modal.css'

const ModalContainer = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='modal'
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: 'rgba(100, 100, 100, 0.75)' }
        }}
      >
        {children}
        <button onClick={closeModal}>Close</button>
      </Modal>
      <button onClick={openModal}>View Projects</button>
    </>
  )
}

export default ModalContainer
