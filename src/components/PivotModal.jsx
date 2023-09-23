import PropTypes from 'prop-types'

export const PivotModal = (props) => {
  const { title, body, hasImgs, imgs, hasPrjt, projectLink, githubUrl } = props

  const linkPrjt = () => {
    return <a href={projectLink} target='blank'>See project</a>
  }

  return (
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
  )
}

PivotModal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  hasImgs: PropTypes.bool.isRequired,
  imgs: PropTypes.arrayOf(PropTypes.string),
  hasPrjt: PropTypes.bool.isRequired,
  projectLink: PropTypes.string,
  githubUrl: PropTypes.string.isRequired
}
