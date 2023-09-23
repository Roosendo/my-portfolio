import { useState } from 'react'
import Modal from 'react-modal'
import { PivotModal } from './PivotModal'
import Php1 from '../assets/imgs/crud1.webp'
import Php2 from '../assets/imgs/crud2.webp'
import Api1 from '../assets/imgs/api1.webp'
import Api2 from '../assets/imgs/api2.webp'
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
          title='Pokémon Explorer: Async API Consumption and Dynamic Filtering'
          body='Dive into the world of Pokémon with my interactive JavaScript project! Using async/await, this application fetches Pokémon data from the API, allowing you to control the number of Pokémon retrieved to avoid overloading the API. While fetching data, a sleek progress bar keeps you informed. Once the retrieval is complete, you can filter Pokémon by type, name, or both, providing a versatile way to explore your favorite Pokémon. Experience the magic of Pokémon with this user-friendly, pure JavaScript project.'
          hasImgs
          imgs={[Api1, Api2]}
          hasPrjt
          projectLink='https://pokemon-api-iota.vercel.app/'
          githubUrl='https://github.com/Roosendo/pokemon-api'
        />
        <PivotModal
          title='PHP CRUD with Administrative Roles and Secure Sessions'
          body='Explore my comprehensive PHP-based CRUD project with an integrated database, designed for efficient personnel management. This dynamic system not only features robust administrative roles but also incorporates secure sessions to ensure that only registered users can access the application. Additionally, it offers the flexibility to print user profiles, with role-dependent permissions, granting administrators control over which profiles they can print. Elevate your personnel management capabilities with this powerful, user-friendly solution.'
          hasImgs
          imgs={[Php1, Php2]}
          hasPrjt={false}
          githubUrl='https://github.com/Roosendo/crud-php'
        />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  )
}
