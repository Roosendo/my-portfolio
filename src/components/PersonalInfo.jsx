import '../assets/styles/PersonalInfo.css'
import { InfoItem } from './InfoItem'
import Yo from '../assets/imgs/yo.webp'
import Email from '../assets/icons/email.svg'
import GitHub from '../assets/icons/github.svg'
import Linkedin from '../assets/icons/linkedin.svg'
import Instagram from '../assets/icons/instagram.svg'
import Twitter from '../assets/icons/twitter.svg'

export const PersonalInfo = () => {
  return (
    <div className='piContainer'>
      <section className='piPersonal'>
        <img src={Yo} alt='IT should be a photo about me' className='piImg' />
        <p className='myName'>Rosendo Garcia</p>
      </section>
      <section className='piSocials'>
        <InfoItem icon={Email} text='rosendo.garcia73@outlook.com' url='rosendo.garcia73@outlook.com' mailto />
        <InfoItem icon={GitHub} text='@Roosendo' url='https://github.com/Roosendo' mailto={false} />
        <InfoItem icon={Linkedin} text='Rosendo Garcia' url='https://www.linkedin.com/in/rosendo-garcia-a498b9279/' mailto={false} />
        <InfoItem icon={Instagram} text='rosendonbhd' url='https://www.instagram.com/rosendonbhd/' mailto={false} />
        <InfoItem icon={Twitter} text='@rooos_endo' url='https://twitter.com/rooos_endo' mailto={false} />
      </section>
    </div>
  )
}
