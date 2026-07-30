# Design

## Overview

Single-page static portfolio for Rosendo Garcia, built with Astro 5. The site combines server-rendered `.astro` components with a single interactive SolidJS island (`Carousel.tsx`). Styling uses Tailwind CSS v4 with a `@custom-variant dark` strategy. Two locales (en/es) are served as separate static pages with no client-side routing.

## Component tree

```
src/pages/{index,es/index}.astro
  └─ @c/pages/App.astro
       └─ @l/Layout.astro  (html shell, font, theme script, CSS animations)
            ├─ @c/Header.astro          — nav links, theme toggle, language selector
            ├─ @c/PersonalInfo.astro    — greeting, photo, social links, email copy
            ├─ @c/LatestProjects.astro  — iterates @u/PROJECTS.ts → PivotCard
            │    └─ @c/PivotCard.astro  — title, desc, language pills, Carousel, action links
            │         └─ Carousel.tsx   — SolidJS island: image slideshow with auto-slide + IntersectionObserver pausing
            ├─ @c/Skills.astro          — two animated scrolling rows, split from @u/SKILLS.ts
            ├─ @c/WorkExperience.astro  — vertical timeline (CSS border-left)
            ├─ @c/About.astro           — three-column grid (who/education/experience)
            └─ @c/Contact.astro         — form → fetch POST to external API
```

## i18n design

- No router / no build-time split per locale. The same `App.astro` component is imported from both `pages/index.astro` and `pages/es/index.astro`. Astro's built-in i18n handles the URL prefix and sets `Astro.currentLocale`.
- Translations are static JSON objects loaded by `getI18N({ currentLocale })`. English is the fallback.
- `PersonalInfo.astro` does runtime string replacement on paragraph text: keys in `PHRASES` are replaced with `<span>` wrappers for per-phrase color highlighting. Uses `astro/compiler-runtime` `unescapeHTML`.

## Styling

- Tailwind CSS v4 via `@tailwindcss/vite` Vite plugin. No PostCSS config, no `tailwind.config.*` — all config is CSS-first using `@import "tailwindcss"` in `global.css`.
- Dark mode: `@custom-variant dark (&:where(.dark, .dark *))`. Toggled via `astro-theme-toggle` `<ThemeScript>` + `<Toggle>` component, which sets `.dark` on `<html>`.
- Font: Onest Variable via `@fontsource-variable/onest` package, loaded in `Layout.astro`. No Google Fonts requests.
- Prettier sorts Tailwind classes with `prettier-plugin-tailwindcss`.
- Animations from `@midudev/tailwind-animations` and `tailwindcss-animated` packages (used via Tailwind utility classes like `animate-fade-in-down`).

## Key interaction patterns

| Pattern | Implementation |
|---|---|
| **Scroll-driven reveal** | CSS `view()` animation timeline on `.animate-scroll` class. Defined in `Layout.astro` keyframes. |
| **Header blur on scroll** | CSS `scroll()` animation timeline on `#header-nav`. Light/dark variants. |
| **Skills marquee** | Pure CSS animation (`scrollLeft`/`scrollRight`) with `animation-delay` staggered per item. Paused on hover and when out of viewport (IntersectionObserver). |
| **Active nav highlight** | IntersectionObserver in `Header.astro` watches sections and toggles yellow highlight class. |
| **Carousel auto-slide** | SolidJS `createEffect` with `setInterval`. Pauses when out of viewport via IntersectionObserver. |
| **Contact form submit** | `fetch` POST to external NestJS API. Loading/disabled button swap. Alert toasts via `showAndHideAlert`. |

## Asset patterns

- **Icons**: Inline SVG as Astro components (`*.astro`). Located in `src/assets/icons/` with subdirectories `flags/` and `skills/`. Imported and passed `class` for sizing. No icon library at runtime.
- **Images**: WebP format in `src/assets/imgs/`. Handled by Astro's `<Image />` component (optimized at build) or plain `<img>` for carousel slides.

## Data

- `@u/PROJECTS.ts` — static array with imported image sources, per-project links and language tags. Uses `getI18N` to resolve translated titles/descriptions, then merges with hardcoded links and images by index. This means adding a project requires touching both `en.json`/`es.json` AND this file AND image files.
- `@u/SKILLS.ts` — static array of `{ name, icon, featured? }` objects. 16 skills. `featured` skills get a blue glow border via `.skill-item--featured` CSS.
- Contact form sends JSON payload `{ name, email, message }` to `https://money-minder-api.up.railway.app/api/emails/send-email`. No auth. Error/success feedback is client-side only.

## Build & deploy

- `astro build` produces a purely static `dist/` folder. No SSR, no server routes.
- Deployed to Vercel via `@astrojs/vercel` adapter (static mode).
- `.astro/` directory with generated TypeScript types is recreated by `pnpm astro sync` — not committed.
- No CI workflows present in the repo. No tests.
