import Php2 from '@imgs/crud2.webp'

import MMApiExample from '@imgs/money-minder/api-example.webp'
import MMDashboard from '@imgs/money-minder/dashboard.webp'
import MMGraphics from '@imgs/money-minder/graphics.webp'

import PKXCodeExample from '@imgs/pokedex/code-example.webp'
import PKXFilterExample from '@imgs/pokedex/filter-example.webp'
import PKXweb from '@imgs/pokedex/pokedex-web.webp'

import NPExampleErros from '@imgs/node-package/example-errors.webp'
import NPExampleFiles from '@imgs/node-package/files-example.webp'

import { getI18N } from '@c/i18n'

export const getProjects = (currentLocale: string) => {
  const i18n = getI18N({ currentLocale })

  return i18n.PROJECTS.PROJECTS.map((project, index) => {
    const projectLinks = [
      {
        link: 'https://money-minder-xi.vercel.app/',
        github: 'https://github.com/Roosendo/money-minder',
        languages: ['TypeScript', 'SQLite', 'Tailwind', 'Astro']
      },
      {
        link: 'https://money-minder-api.netlify.app/api/',
        github: 'https://github.com/Roosendo/money-minder-api/',
        languages: ['TypeScript', 'SQLite', 'Express']
      },
      {
        link: 'https://rosendo-pokedex.netlify.app/',
        github: 'https://github.com/Roosendo/pokemon-api',
        languages: ['HTML', 'CSS', 'TypeScript']
      },
      {
        link: '',
        github: 'https://github.com/Roosendo/astro-ts-prettier-eslint',
        languages: ['TypeScript']
      },
      {
        link: '',
        github: 'https://github.com/Roosendo/crud-php',
        languages: ['PHP', 'MySql', 'HTML', 'CSS']
      }
    ]

    const imgs = [
      [MMDashboard.src, MMApiExample.src, MMGraphics.src],
      [],
      [PKXweb.src, PKXFilterExample.src, PKXCodeExample.src],
      [NPExampleFiles.src, NPExampleErros.src],
      [Php2.src]
    ]

    return {
      title: project.TITLE,
      body: project.DESCRIPTION,
      imgs: imgs[index],
      projectLink: projectLinks[index]?.link,
      githubUrl: projectLinks[index]?.github,
      languages: projectLinks[index]?.languages
    }
  })
}
