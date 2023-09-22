import { useState } from 'react'
import Modal from 'react-modal'
import '../assets/styles/ProjectsModal.css'

export default function ProjectsModal (props) {
  const { title, body, hasImgs, imgs } = props
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const renderImgs = () => {
    return imgs.map((img, index) => (
      <img key={index} src={img} alt={`Screenshot ${index + 1}`} />
    ))
  }

  return (
    <>
      <button onClick={openModal} className='main-button'>View Project</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='modal' ariaHideApp={false}>
        <h2>{title}</h2>
        <p>{body}</p>
        {hasImgs && renderImgs()}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  )
}
