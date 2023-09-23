import { useState } from 'react'
import Modal from 'react-modal'
import '../assets/styles/ProjectsModal.css'

export default function ProjectsModal (props) {
  const { title, body, hasImgs, imgs, hasPrjt, projectLink, githubUrl } = props
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const linkPrjt = () => {
    return <a href={projectLink} target='blank'>See project</a>
  }

  return (
    <>
      <button onClick={openModal} className='main-button'>View Projects</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='modal' ariaHideApp={false}>
        <section>
          <h2>{title}</h2>
          <p>{body}</p>
          <div className='modalImgs'>
            {hasImgs && imgs.map((img, index) => {
              return <img src={img} alt={`Screenshot ${index + 1}`} key={index} />
            })}
          </div>
          <div className='modalAnchor'>
            {hasPrjt && linkPrjt()}
            <a href={githubUrl} target='blank'>See GitHub</a>
          </div>
        </section>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  )
}
