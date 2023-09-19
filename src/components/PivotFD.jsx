import { FrameDescription } from './FrameDescription'
import Yo from '../assets/imgs/yo.webp'

export const PivotFD = () => {
  return (
    <>
      <FrameDescription
        title='Education'
        body='I studied at the University of Havana, Cuba. I graduated in 2019 as a Bachelor of Computer Science lorem ipsum jajajjajajajajajaja ya no se que hacer tengo sueño adioooos.'
        hasImgs={false}
      />
      <FrameDescription
        title='React App'
        body='React App'
        hasImgs={false}
      />
      <FrameDescription
        title='Softwares'
        body='I use the following softwares: Vscode, Git, GitHub, GitLab, Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator, Adobe Premiere, Adobe After Effects, Adobe Audition, Sony Vegas, Audacity, OBS Studio, Microsoft Office, Microsoft Teams, Zoom, Discord, Slack, Trello, Notion, Google Drive, Google Docs, Google Sheets, Google Slides, among others.'
        hasImgs={false}
      />
      <FrameDescription
        title='Softwares'
        body='These are some projects I have worked on: interactive uses api'
        hasImgs
        imgs={[
          Yo, Yo
        ]}
      />
    </>
  )
}
