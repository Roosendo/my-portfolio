import PropTypes from 'prop-types'
import ProjectsModal from './ProjectsModal'
import '../assets/styles/FrameDescription.css'

export const FrameDescription = (props) => {
  const { title, body, hasImgs, imgs, hasModal, isCenter } = props

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
    <div className={`frame-description${isCenter ? ' center' : ''}`}>
      <div>
        <h2 className='frame-description__title'>{title}</h2>
        <p className='frame-description__body'>{body}</p>
        {hasImgs && renderImgs()}
        {hasModal && <ProjectsModal />}
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
