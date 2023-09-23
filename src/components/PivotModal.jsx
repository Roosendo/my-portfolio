export default function PivotModal (props) {
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
