import { createRoot } from 'react-dom/client'
import { PersonalInfo } from './components/PersonalInfo'
import { FrameDescription } from './components/FrameDescription'
import Yo from './assets/imgs/yo.webp'

const root = createRoot(document.getElementById('app'))
root.render(
  <div className='container'>
    <div className='main'>
      <PersonalInfo />
    </div>
    <div className='content'>
      <FrameDescription
        title='Education'
        body='I studied at the University of Havana, Cuba. I graduated in 2019 as a Bachelor of Computer Science.'
        hasImgs={false}
      />
      <FrameDescription
        title='React App'
        body='React App'
        hasImgs={false}
      />
      <FrameDescription
        title='Softwares'
        body='I use the following softwares: Vscode'
        hasImgs={false}
      />
      <FrameDescription
        title='Softwares'
        body='I use the following softwares: Vscode'
        hasImgs
        imgs={[
          Yo, Yo
        ]}
      />
    </div>
  </div>
)
