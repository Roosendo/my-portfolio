import Php2 from '../assets/imgs/crud2.webp'
import Api1 from '../assets/imgs/api1.webp'
import FS2 from '../assets/imgs/fullstack2.webp'

export const PROJECTS = [
  {
    title: 'FullStack Resource Management Solution',
    body: 'Collaborative project with Express and MySQL. Intuitive UI with vanilla JavaScript for efficient resource allocation, tracking, and reporting. Utilizes technologies like Express, CORS, and MySQL2 for streamlined management.',
    imgs: [FS2.src],
    projectLink: '',
    githubUrl: 'https://github.com/PaolaPaz1/proyecto-final-main',
    languages: ['JavaScript', 'MySQL', 'HTML', 'CSS', 'Express']
  },
  {
    title: 'Pokémon Explorer: Async API Consumption and Dynamic Filtering',
    body: 'Fetches data from API using async/await, with customizable retrieval and a sleek progress bar. Filter Pokémon by type or name for a user-friendly exploration experience.',
    imgs: [Api1.src],
    projectLink: 'https://pokemon-api-iota.vercel.app/',
    githubUrl: 'https://github.com/Roosendo/pokemon-api',
    languages: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'PHP CRUD with Administrative Roles and Secure Sessions',
    body: 'Integrated database, robust administrative roles, and secure sessions. Allows administrators to print user profiles with role-dependent permissions, enhancing personnel management.',
    imgs: [Php2.src],
    projectLink: '',
    githubUrl: 'https://github.com/Roosendo/crud-php',
    languages: ['PHP', 'MySQL', 'HTML', 'CSS']
  }
]
