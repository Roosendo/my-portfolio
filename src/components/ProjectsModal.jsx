import { useState } from 'react'
import Modal from 'react-modal'
import PivotModal from './PivotModal'
import Yo from '../assets/imgs/yo.webp'
import '../assets/styles/ProjectsModal.css'

export default function ProjectsModal () {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <button onClick={openModal} className='main-button'>View Projects</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='modal' ariaHideApp={false}>
        <PivotModal
          title='Fetching pokemos, api'
          body='This project is a web app that fetches pokemons from an api and displays them in a grid.'
          hasImgs
          imgs={[Yo, Yo]}
          hasPrjt
          projectLink='https://fetching-pokemons.vercel.app/'
          githubUrl='https://github.com/alejandrolgarcia/fetching-pokemons'
        />
        <PivotModal
          title='Pokedex, api'
          body='This project is a web app that fetches pokemons from an api and displays them in a grid.'
          hasImgs
          imgs={[Yo, Yo]}
          hasPrjt
          projectLink='https://pokedex-alejandrolgarcia.vercel.app/'
          githubUrl='https://github.com'
        />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  )
}
