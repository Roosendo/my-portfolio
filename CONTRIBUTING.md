# Contributing

Notes on how I work in this repo: setup, commit messages, and workflow.

## Setup

```bash
pnpm install
```

`pnpm install` also runs `lefthook install` (via the `prepare` script), which sets up the git hooks:

- **pre-commit:** lints and formats staged files
- **commit-msg:** validates the commit message with commitlint

## Commit messages

This project follows [Conventional Commits](https://www.conventionalcommits.org).

```
type(scope): description

[optional body]

[optional footer]
```

Only `type` and `description` are required. Most commits are a single line.

### Types

| Type       | Use when                          | Example                                             |
| ---------- | --------------------------------- | --------------------------------------------------- |
| `feat`     | Visitors get something new        | `feat: add certificates page`                       |
| `fix`      | Something broken now works        | `fix: correct active link on es certificates route` |
| `docs`     | Only documentation changed        | `docs: add readme with setup steps`                 |
| `style`    | Formatting only, no logic change  | `style: format files with oxfmt`                    |
| `refactor` | Code restructured, same behavior  | `refactor: extract useI18N helper`                  |
| `perf`     | Performance improvement           | `perf: lazy load project images`                    |
| `test`     | Add or change tests               | `test: cover getProjects locale fallback`           |
| `build`    | Build system or dependencies      | `build: upgrade astro`                              |
| `ci`       | CI workflow files                 | `ci: add github actions workflow`                   |
| `chore`    | Everything else (tooling, config) | `chore: set up git hooks and commitlint`            |
| `revert`   | Undo a previous commit            | `revert: remove certificates teaser`                |

### Picking the type

1. Does it change what a visitor sees or can do? → `feat` or `fix`
2. Does it only touch docs? → `docs`
3. Is it cleanup with no behavior change? → `refactor` (or `style` if only formatting)
4. Is it config, tooling, or dependencies? → `chore` (or `build` / `ci` if clearly one of those)

If none fits cleanly, the commit is probably doing too much. Split it.

### Writing the description

- Imperative mood, as if finishing "this commit will...": `add`, `fix`, `remove`, not `added` or `fixes`
- Lowercase, no period at the end
- Describe the _what_, briefly (about 50 characters)
- Avoid vague messages like `fix: update stuff`

### Scope (optional)

One word for the area touched: `feat(i18n): ...`, `fix(navbar): ...`. Use it only when it adds clarity, and keep scopes consistent.

### Breaking changes

Add `!` after the type: `feat!: drop spanish routes`.

### Body

Only when the _why_ isn't obvious. Leave a blank line after the title, then explain in plain sentences.

### Good and bad

| Bad                                               | Good                                          |
| ------------------------------------------------- | --------------------------------------------- |
| `updated stuff`                                   | `chore: update dependencies`                  |
| `Fixed bug.`                                      | `fix: prevent navbar flicker on route change` |
| `feat: add page and fix navbar and update readme` | three separate commits                        |

## Workflow

1. Create a branch from `main`: `git switch -c feat/short-name`
2. Make small, focused commits (one logical change each)
3. Push the branch and open a pull request
   - CI runs lint, format check, and build
   - Vercel creates a preview deployment
4. Review your own diff, then squash-merge. GitHub appends the PR number to the title, e.g. `feat: add certificates page (#4)`.

Before pushing, you can run the checks manually:

```bash
pnpm lint
pnpm fmt:check
pnpm build
```
