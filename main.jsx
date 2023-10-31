import { createRoot } from 'react-dom/client'
import { PersonalInfo } from './src/components/PersonalInfo'
import { PivotFD } from './src/components/PivotFD'
import Footer from './src/components/Footer'
import { useState, useEffect } from 'react'

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='container'>
      <div className={`main ${scrollY < 125 ? 'visible' : 'hidden'}`}>
        <PersonalInfo />
      </div>
      <div className={`content ${scrollY > 125 ? 'visible' : 'hidden'}`}>
        <PivotFD />
      </div>
      <Footer />
    </div>
  )
}

const root = createRoot(document.getElementById('app'))
root.render(<Portfolio />)
