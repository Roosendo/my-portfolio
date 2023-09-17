import '../assets/styles/InfoItem.css'

export const InfoItem = (props) => {
  const { icon, text, url, mailto } = props
  const alt = `Icono de ${text}`
  const link = mailto ? `mailto:${url}` : url

  return (
    <div className='personal-info'>
      <div className='icon'>
        <img src={icon} alt={alt} />
      </div>
      <div className='text'>
        <a href={link} target='blank'>{text}</a>
      </div>
    </div>
  )
}
