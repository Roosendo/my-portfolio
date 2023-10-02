import { useState } from 'react'
import Modal from 'react-modal'
import { PivotModal } from './PivotModal'
import Php1 from '../assets/imgs/crud1.webp'
import Php2 from '../assets/imgs/crud2.webp'
import Api1 from '../assets/imgs/api1.webp'
import Api2 from '../assets/imgs/api2.webp'
import FS1 from '../assets/imgs/fullstack1.webp'
import FS2 from '../assets/imgs/fullstack2.webp'
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='modal'
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: 'rgba(100, 100, 100, 0.75)' }
        }}
      >
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
        <PivotModal
          title='FullStack Resource Management Solution'
          body='Discover our Fullstack Resource Management System, powered by Express for the API and MySQL for seamless database connectivity. This project offers an intuitive user interface, built with vanilla JavaScript, ensuring efficient resource allocation, tracking, and reporting. With local storage for user sessions and technologies like Express, Knex, CORS, and MySQL2, it streamlines resource management, enhancing productivity and user experience. Explore the future of resource management today. Made it collaboratively with classmates.'
          hasImgs
          imgs={[FS1, FS2]}
          hasPrjt={false}
          githubUrl='https://github.com/Roosendo/proyecto-final'
        />
        <hr />
        <p className='incoming'>And more incoming ...</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  )
}
