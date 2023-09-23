import PropTypes from 'prop-types'
import ProjectsModal from './ProjectsModal'
import '../assets/styles/FrameDescription.css'
import Yo from '../assets/imgs/yo.webp'

export const FrameDescription = (props) => {
  const { title, body, hasImgs, imgs, hasModal } = props

  const renderImgs = () => {
    return (
      <div className='frame-description__imgs'>
        {imgs.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              alt={title}
              className='frame-description__img'
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className='frame-description'>
      <div>
        <h2 className='frame-description__title'>{title}</h2>
        <p className='frame-description__body'>{body}</p>
        {hasImgs && renderImgs()}
        {hasModal &&
          <ProjectsModal
            title='Fetching pokemos, api'
            body='This project is a web app that fetches pokemons from an api and displays them in a grid.'
            hasImgs
            imgs={[Yo, Yo]}
            hasPrjt
            projectLink='https://fetching-pokemons.vercel.app/'
            githubUrl='https://github.com/alejandrolgarcia/fetching-pokemons'
          />}
      </div>
    </div>
  )
}

FrameDescription.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  hasImgs: PropTypes.bool.isRequired,
  imgs: PropTypes.arrayOf(PropTypes.string),
  hasModal: PropTypes.bool.isRequired
}
