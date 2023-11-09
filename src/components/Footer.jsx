import '../assets/styles/Footer.css'

export default function Footer () {
  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} Rosendo Garcia. All rights reserved.</p>
      <div>
        <a href='https://twitter.com/rooos_endo' target='_blank' rel='noopener noreferrer'>Twitter</a>
        <a href='https://www.linkedin.com/in/rosendo-garcia-a498b9279/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        <a href='https://github.com/Roosendo' target='_blank' rel='noopener noreferrer'>GitHub</a>
      </div>
    </footer>
  )
}
