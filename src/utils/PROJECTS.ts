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

  return [
    {
      title: i18n.PROJECTS.PROJECT_1.TITLE,
      body: i18n.PROJECTS.PROJECT_1.DESCRIPTION,
      imgs: [MMDashboard.src, MMApiExample.src, MMGraphics.src],
      projectLink: 'https://money-minder-xi.vercel.app/',
      githubUrl: 'https://github.com/Roosendo/money-minder',
      languages: ['TypeScript', 'SQLite', 'Tailwind', 'Astro']
    },
    {
      title: i18n.PROJECTS.PROJECT_2.TITLE,
      body: i18n.PROJECTS.PROJECT_2.DESCRIPTION,
      imgs: [PKXweb.src, PKXFilterExample.src, PKXCodeExample.src],
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
    },
    {
      title: i18n.PROJECTS.PROJECT_4.TITLE,
      body: i18n.PROJECTS.PROJECT_4.DESCRIPTION,
      imgs: [NPExampleFiles.src, NPExampleErros.src],
      projectLink: '',
      githubUrl: 'https://github.com/Roosendo/astro-ts-prettier-eslint',
      languages: ['TypeScript']
    }
  ]
}
