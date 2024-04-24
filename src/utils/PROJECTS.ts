import Php2 from '@imgs/crud2.webp'
import Api1 from '@imgs/api1.webp'
import FS2 from '@imgs/fullstack2.webp'

import { getI18N } from '@c/i18n'

export const getProjects = (currentLocale: string) => {
  const i18n = getI18N({ currentLocale })

  return [
    {
      title: i18n.PROJECTS.PROJECT_1.TITLE,
      body: i18n.PROJECTS.PROJECT_1.DESCRIPTION,
      imgs: [FS2.src],
      projectLink: 'https://money-minder-xi.vercel.app/',
      githubUrl: 'https://github.com/Roosendo/money-minder',
      languages: ['TypeScript', 'MySql', 'Tailwind', 'Astro']
    },
    {
      title: i18n.PROJECTS.PROJECT_2.TITLE,
      body: i18n.PROJECTS.PROJECT_2.DESCRIPTION,
      imgs: [Api1.src],
      projectLink: 'https://pokemon-api-iota.vercel.app/',
      githubUrl: 'https://github.com/Roosendo/pokemon-api',
      languages: ['HTML', 'CSS', 'TypeScript']
    },
    {
      title: i18n.PROJECTS.PROJECT_3.TITLE,
      body: i18n.PROJECTS.PROJECT_3.DESCRIPTION,
      imgs: [Php2.src],
      projectLink: '',
      githubUrl: 'https://github.com/Roosendo/crud-php',
      languages: ['PHP', 'MySql', 'HTML', 'CSS']
    }
  ]
}
