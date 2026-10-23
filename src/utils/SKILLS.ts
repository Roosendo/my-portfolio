import Angular from "@icons_s/Angular.astro";
import AstroIcon from "@icons_s/AstroIcon.astro";
import DotNet from "@icons_s/DotNet.astro";
import Express from "@icons_s/Express.astro";
import Go from "@icons/skills/Go.astro";
import JavaScript from "@icons_s/JavaScript.astro";
import Jest from "@icons/skills/Jest.astro";
import MySql from "@icons/skills/MySql.astro";
import NestJS from "@icons_s/NestJS.astro";
import Node from "@icons_s/Node.astro";
import PHP from "@icons_s/PHP.astro";
import React from "@icons_s/React.astro";
import SQLite from "@icons/skills/SQLite.astro";
import Tailwind from "@icons_s/Tailwind.astro";
import TypeScript from "@icons_s/TypeScript.astro";

interface Skill {
  name: string;
  icon: typeof TypeScript;
  featured?: boolean;
}

export const SKILLS: Skill[] = [
  { name: ".NET", icon: DotNet, featured: true },
  { name: "Angular", icon: Angular, featured: true },
  { name: "Astro", icon: AstroIcon },
  { name: "Express", icon: Express, featured: true },
  { name: "Go", icon: Go },
  { name: "JavaScript", icon: JavaScript },
  { name: "Jest", icon: Jest },
  { name: "MySql", icon: MySql },
  { name: "NestJS", icon: NestJS },
  { name: "Node", icon: Node },
  { name: "PHP", icon: PHP },
  { name: "React", icon: React },
  { name: "SQLite", icon: SQLite },
  { name: "Tailwind", icon: Tailwind },
  { name: "TypeScript", icon: TypeScript, featured: true },
];
