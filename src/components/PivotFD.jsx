import { useState, useEffect } from 'react'
import { FrameDescription } from './FrameDescription'
import Vscode from '../assets/imgs/vscode.webp'
import Git from '../assets/imgs/git.webp'
import GitHub from '../assets/imgs/github.webp'
import Pnpm from '../assets/imgs/pnpm.webp'
import Trello from '../assets/imgs/trello.webp'
import Postman from '../assets/imgs/postman.webp'

export const PivotFD = () => {
  const [centerElement, setCenterElement] = useState(0)

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const elements = document.getElementsByClassName('frame-description')

    const distances = Array.from(elements).map((element) => {
      const bounding = element.getBoundingClientRect()
      return Math.abs(bounding.top - windowHeight / 2 + bounding.height / 2)
    })

    const closestElement = distances.indexOf(Math.min(...distances))
    setCenterElement(closestElement)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <FrameDescription
        title='Education'
        body='I earned an Associate Degree in Software Development Engineering from ITCA Fepade San Miguel, which provided me with a strong foundation. However, my passion for learning drove me to expand my knowledge independently. I began by studying GitHub repositories to understand how experienced developers worked, and I also explored various programming YouTube channels. One channel that stood out was Midudev, whose free courses helped me learn everything from JavaScript fundamentals to building RESTful APIs with frameworks like Express. My education combines formal technical studies with self-guided online courses, enhancing my understanding of software development.'
        hasImgs={false}
        hasModal={false}
        isCenter={centerElement === 0}
      />
      <FrameDescription
        title='Skills'
        body='I excel in JavaScript and PHP development, specializing in React and Node.js frameworks. I&apos;m proficient with databases like MariaDB and MongoDB and skilled in Git and GitHub for version control.

        I work efficiently with tools such as Visual Studio Code and PNPM and uphold code quality using ESLint with StandardJS. Deployment is seamless with Vercel.

        My project management abilities are demonstrated through the use of Trello, and I follow Scrum methodologies for effective teamwork. I ensure responsive design with my HTML5 and CSS3 skills.

        Fluent in both English and Spanish, I prioritize effective communication and collaboration. I&apos;m committed to continuous learning and thrive in a team-oriented environment.'
        hasImgs={false}
        hasModal={false}
        isCenter={centerElement === 1}
      />
      <FrameDescription
        title='Softwares'
        body='I use the following softwares: Vscode, Git, GitHub, Vscode extensions, Pnpm, Trello and Postman.'
        hasImgs
        imgs={[
          Vscode, Git, GitHub, Pnpm, Trello, Postman
        ]}
        hasModal={false}
        isCenter={centerElement === 2}
      />
      <FrameDescription
        title='My projects'
        body='These are some of my most prominent projects. Feel free to explore them, whether through their screenshots, websites, or GitHub repositories. Enjoy your journey!'
        hasImgs={false}
        hasModal
        isCenter={centerElement === 3}
      />
    </>
  )
}
