# Design

## Overview

Single-page static portfolio for Rosendo Garcia, built with Astro 5. Uses the **Hum** design theme (playful genre, warm cream + pear-green accent + sky-cyan secondary). Font: Satoshi (display) + Geist (body) — loaded via Fontsource variables.

## Component tree

```
src/pages/{index,es/index}.astro
  └─ @c/pages/App.astro
       └─ @l/Layout.astro  (html shell, theme script, reveal animations)
            ├─ @c/Header.astro          — N1a wordmark + nav links + theme toggle + lang selector
            ├─ @c/PersonalInfo.astro    — letter-style greeting, photo, social links, CV, email copy
            ├─ @c/LatestProjects.astro  — iterates @u/PROJECTS.ts → PivotCard
            │    └─ @c/PivotCard.astro  — surface-card with title, desc, language chips, Carousel, action links
            │         └─ Carousel.tsx   — SolidJS island: image slideshow, auto-slide, IntersectionObserver pausing
            ├─ @c/Skills.astro          — inline chip grid grouped from @u/SKILLS.ts
            ├─ @c/WorkExperience.astro  — vertical timeline with accent dots
            ├─ @c/About.astro           — stacked sections (who / education / experience)
            └─ @c/Contact.astro         — form → fetch POST to external API
```

## Design tokens

Defined in `src/styles/global.css` via Tailwind v4 `@theme`:

| Token              | Light                              | Dark                  |
| ------------------ | ---------------------------------- | --------------------- |
| `--color-paper`    | `oklch(97% 0.012 85)`              | `oklch(15% 0.012 70)` |
| `--color-accent`   | `oklch(65% 0.18 130)` — pear green | `oklch(72% 0.14 130)` |
| `--color-accent-2` | `oklch(65% 0.15 200)` — sky cyan   | `oklch(70% 0.12 200)` |
| `--color-surface`  | `oklch(99% 0.003 85)`              | `oklch(13% 0.008 70)` |
| `--color-ink`      | `oklch(18% 0.012 70)`              | `oklch(92% 0.006 80)` |

Reusable classes: `.surface-card` (rounded card with hover-lift), `.reveal` (scroll-triggered fade-up animation).

## i18n design

- No router / no build-time split per locale. The same `App.astro` component is imported from both `pages/index.astro` and `pages/es/index.astro`. Astro's built-in i18n handles the URL prefix and sets `Astro.currentLocale`.
- Translations are static JSON objects loaded by `getI18N({ currentLocale })`. English is the fallback.
- `PersonalInfo.astro` does runtime string replacement on paragraph text: keys in `PHRASES` are replaced with `<span>` wrappers for per-phrase color highlighting. Uses `astro/compiler-runtime` `unescapeHTML`.

## Styling

- Tailwind CSS v4 via `@tailwindcss/vite` Vite plugin. No PostCSS config, no `tailwind.config.*` — all config is CSS-first using `@import "tailwindcss"` in `global.css`.
- Dark mode: `@custom-variant dark (&:where(.dark, .dark *))`. Dark tokens override `:root` custom properties when `.dark` is present on `<html>`.
- Fonts: Satoshi (display) + Geist (body). Fontsource variable packages. Previously used Onest.
- Prettier sorts Tailwind classes with `prettier-plugin-tailwindcss`.

## Key interaction patterns

| Pattern                     | Implementation                                                                                                          |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Scroll-triggered reveal** | IntersectionObserver in `Layout.astro` adds `.is-visible` to `.reveal` elements. CSS animation: fade-up 420ms ease-out. |
| **Sticky nav blur**         | `backdrop-filter: blur-sm` + `bg-paper/80` on sticky `<header>`. No JS needed.                                          |
| **Skills chips**            | Flat inline `flex-wrap` grid. Featured skills get `border-accent` + `bg-accent/5`. No marquee animation.                |
| **Card hover lift**         | `.surface-card` CSS class: `translateY(-2px)` + softer shadow on hover.                                                 |
| **Carousel auto-slide**     | SolidJS `createEffect` with `setInterval`. Pauses when out of viewport via IntersectionObserver.                        |
| **Active nav highlight**    | CSS `:hover` transitions via `hover:text-accent`. No IntersectionObserver active tracking.                              |
| **Contact form submit**     | `fetch` POST to external NestJS API. Loading/disabled button swap. Alert toasts via `showAndHideAlert`.                 |

## Asset patterns

- **Icons**: Inline SVG as Astro components (`*.astro`). Located in `src/assets/icons/` with subdirectories `flags/` and `skills/`. Imported and passed `class` for sizing.
- **Images**: WebP format in `src/assets/imgs/`. Handled by Astro's `<Image />` component (optimized at build) or plain `<img>` for carousel slides.

## Data flow

- `@u/PROJECTS.ts` — static array merging `getI18N` translations with hardcoded links and image imports by index. Adding a project requires edits to `en.json`, `es.json`, `PROJECTS.ts`, and image files.
- `@u/SKILLS.ts` — 16 skills as `{ name, icon, featured? }`. Featured skills get accent-colored border treatment.
- Contact form sends `{ name, email, message }` POST to `https://money-minder-api.up.railway.app/api/emails/send-email`. Client-side feedback only.

## Build & deploy

- `astro build` → static `dist/`. No SSR.
- Deployed to Vercel via `@astrojs/vercel` adapter (static mode).
- `.astro/` directory generated by `pnpm astro sync` — gitignored.
- No CI workflows or tests.
