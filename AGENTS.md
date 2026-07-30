# my-portfolio — AGENTS.md

## Quick start

```bash
pnpm install        # install dependencies
pnpm dev            # astro dev server
pnpm build          # static build → dist/
pnpm preview        # preview built site
pnpm lint           # prettier --write + eslint --fix
```

## Architecture

- **Astro 5** static site (output: `static`), deployed via **Vercel** (`@astrojs/vercel` adapter).
- **SolidJS** for interactive islands (`Carousel.tsx` is the only `.tsx` component). JSX preserved, import source `solid-js`.
- **Tailwind CSS v4** via `@tailwindcss/vite`. Uses `@import "tailwindcss"` (not legacy `@tailwind` directives) and `@custom-variant dark`.
- **pnpm** only (lockfile: `pnpm-lock.yaml`). Never use npm.
- **Design theme**: Hum (playful genre) — warm cream paper, pear-green accent, sky-cyan secondary. Defined via `@theme` in `src/styles/global.css`.
- **Fonts**: Satoshi (display) + Geist (body) via Fontsource variables. Onest no longer used.
- **Sharp** required as a dependency for `astro:assets` image optimization.
- No tests configured.

## i18n

- Two locales: `en` (default, no prefix) and `es` (prefix `/es/`).
- JSON files at `src/components/i18n/{en,es}.json`, loaded via `getI18N({ currentLocale })`.
- `Astro.currentLocale` available in `.astro` frontmatter.

## Path aliases (tsconfig paths)

| Alias | Maps to |
|---|---|
| `@c/` | `src/components/` |
| `@l/` | `src/layouts/` |
| `@p/` | `src/pages/` |
| `@u/` | `src/utils/` |
| `@icons/` | `src/assets/icons/` |
| `@icons_f/` | `src/assets/icons/flags/` |
| `@icons_s/` | `src/assets/icons/skills/` |
| `@imgs/` | `src/assets/imgs/` |

## Page structure

`src/pages/index.astro` → `@c/pages/App.astro` → `Layout.astro` wrapping sections in order: PersonalInfo, LatestProjects, Skills, WorkExperience, About, Contact.

## Code style

- **Prettier**: single quotes, no semicolons, no trailing commas, printWidth 100, LF endings, `prettier-plugin-astro` + `prettier-plugin-tailwindcss`.
- **ESLint**: `ts-standard` + `plugin:astro/recommended`.
- **TypeScript**: `astro/tsconfigs/strictest` with `strictNullChecks`, `noImplicitAny`.

## Contact form

Sends POST to `https://money-minder-api.up.railway.app/api/emails/send-email` (external NestJS API). The `resend` package is declared as a dependency but not used directly in this repo. Form logic in `src/components/Contact.astro` with script in `src/utils/CopyFunctionality.ts`.

## Notable

- `.astro/` directory is generated (gitignored). Run `pnpm astro sync` to regenerate types.
- No `.env.example` — create `.env` / `.env.production` if needed (both gitignored).
- Scroll-driven CSS animations defined in `Layout.astro` (`reveal` class with IntersectionObserver).
- Theme toggle via `astro-theme-toggle`.
- SVG icons are `.astro` components (not React/Solid components).
- CV PDFs are in `/public/`: `Rosendo-Garcia-Resume.pdf` (en), `Rosendo-Garcia-Resume-ES.pdf` (es).
