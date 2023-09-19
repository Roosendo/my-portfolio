import { FrameDescription } from './FrameDescription'
import Vscode from '../assets/imgs/vscode.webp'
import Git from '../assets/imgs/git.webp'
import GitHub from '../assets/imgs/github.webp'
import Pnpm from '../assets/imgs/pnpm.webp'
import Trello from '../assets/imgs/trello.webp'
import Postman from '../assets/imgs/postman.webp'

export const PivotFD = () => {
  return (
    <>
      <FrameDescription
        title='Education'
        body='Associate Degree in Software Development Engineering

        While the academic curriculum at ITCA Fepade San Miguel provided me with a solid foundation, I was driven to expand my knowledge further. I delved into self-directed learning, initially by cloning GitHub repositories to understand how experienced developers worked. Though challenging, this hands-on experience was invaluable.

        Subsequently, I explored numerous programming channels on YouTube, with one in particular catching my eye - Midudev. I embarked on a journey of learning through Midudev&apos;s free courses, covering everything from the fundamentals of JavaScript to building RESTful APIs with frameworks like Express.

        My education is a blend of formal technical studies and self-guided online courses, which has enriched my understanding of software development.'
        hasImgs={false}
      />
      <FrameDescription
        title='Skills'
        body='I excel in JavaScript and PHP development, with expertise in React and Node.js frameworks. I manage databases like MariaDB and MongoDB and am proficient in Git and GitHub for version control.

        I work efficiently with tools like Visual Studio Code and PNPM and maintain code quality using ESLint with StandardJS. Deployment is a breeze with Vercel.

        I&apos;m skilled in project management using Trello and follow Scrum methodologies for teamwork. My HTML5 and CSS3 skills ensure responsive design.

        Fluent in English and Spanish, I offer effective communication and collaboration. I value continuous learning and teamwork.'
        hasImgs={false}
      />
      <FrameDescription
        title='Softwares'
        body='I use the following softwares: Vscode, Git, GitHub, Vscode extensions, Pnpm, Trello and Postman.'
        hasImgs
        imgs={[
          Vscode, Git, GitHub, Pnpm, Trello, Postman
        ]}
      />
      <FrameDescription
        title='My projects'
        body='To be continued... (i just need to finish this website)'
        hasImgs={false}
      />
    </>
  )
}
