import Jest from '@icons/skills/Jest.astro'
import MySql from '@icons/skills/MySql.astro'
import SQLite from '@icons/skills/SQLite.astro'
import Angular from '@icons_s/Angular.astro'
import AstroIcon from '@icons_s/AstroIcon.astro'
import CSharp from '@icons_s/CSharp.astro'
import CSS from '@icons_s/CSS.astro'
import DotNet from '@icons_s/DotNet.astro'
import Express from '@icons_s/Express.astro'
import Git from '@icons_s/Git.astro'
import HTML from '@icons_s/HTML.astro'
import JavaScript from '@icons_s/JavaScript.astro'
import NestJS from '@icons_s/NestJS.astro'
import Node from '@icons_s/Node.astro'
import PHP from '@icons_s/PHP.astro'
import React from '@icons_s/React.astro'
import Tailwind from '@icons_s/Tailwind.astro'
import TypeScript from '@icons_s/TypeScript.astro'

interface Skill {
  name: string
  icon: typeof TypeScript
  featured?: boolean
}

export const SKILLS: Skill[] = [
  { name: 'TypeScript', icon: TypeScript, featured: true },
  { name: 'Express', icon: Express, featured: true },
  { name: 'HTML', icon: HTML },
  { name: 'CSS', icon: CSS },
  { name: 'JavaScript', icon: JavaScript },
  { name: 'Git', icon: Git },
  { name: 'MySql', icon: MySql },
  { name: 'PHP', icon: PHP },
  { name: 'Angular', icon: Angular, featured: true },
  { name: '.NET', icon: DotNet, featured: true },
  { name: 'Node', icon: Node },
  { name: 'NestJS', icon: NestJS },
  { name: 'Tailwind', icon: Tailwind },
  { name: 'React', icon: React },
  { name: 'Astro', icon: AstroIcon },
  { name: 'C#', icon: CSharp },
  { name: 'SQLite', icon: SQLite },
  { name: 'Jest', icon: Jest }
]
