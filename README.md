# primereact-docs-skill

A Claude Code plugin that mirrors the **PrimeReact v11** documentation into local,
grep-friendly Markdown so Claude Code answers PrimeReact questions (components,
theming/design tokens, PassThrough, hooks) from the real v11 docs instead of
guessing — Claude's training mostly reflects v10, and v11 is a ground-up rewrite.

This gives you an **offline, grep-able** snapshot of the official docs plus a
daily auto-sync and a v10→v11 version guardrail — handy when the docs site is
slow/unavailable and so Claude answers from real v11 APIs instead of its
mostly-v10 memory.

## Install

In Claude Code:

```
/plugin marketplace add toporek/primereact-docs-skill
/plugin install primereact-docs@primereact-docs
```

The skill activates automatically when you work on PrimeReact code. New commits
(including the daily docs sync) reach installed users as plugin updates.

## How it works

- `skills/primereact-docs/` — the installable skill: `SKILL.md` router,
  hand-authored `overview.md` + `migration.md` guardrail, generated `INDEX.md`,
  and `references/` (one Markdown file per upstream doc, across the `styled`,
  `primitive`, `headless`, `tailwind`, and `hooks` variants).
- `scripts/sync.mjs` — fetches the official
  [primereact.dev](https://primereact.dev) `llms.txt` index and each page's
  rendered `.md`, lightly cleans them (rewriting internal links, stripping any
  residual JSX, linking the client-rendered API tables to their live upstream
  pages), and regenerates `references/` + `INDEX.md`. The single source is defined
  in `scripts/lib/source.mjs` (`renderedMdSource` → primereact.dev).

> PrimeReact v11 shipped (GA) and the upstream `v11` git branch was removed, so
> the mirror now tracks the official `primereact.dev` docs endpoints.

## Updating

```bash
npm run sync        # re-fetch the official docs and regenerate (commit the result)
npm run sync:check  # non-zero exit if committed output drifts from upstream
npm test            # unit tests for the transform/rendered/index/source modules
```

`SOURCE.md` records the source + sync date. A **daily** GitHub Action
opens/updates a single rolling PR when the upstream docs change.

> **Note (maintainers/forks):** the sync workflow opens PRs via
> `peter-evans/create-pull-request`, which requires **Settings → Actions →
> General → "Allow GitHub Actions to create and approve pull requests"**.

## Known limitations

- **Props/API tables aren't fully mirrored.** Upstream ships prop tables as a
  component rendered client-side, so a page may show a TODO note where a props
  table would be. Prose, usage, and runnable demos are mirrored; use
  `@primereact/types` or `primereact.dev` for exhaustive props.
- **A few components aren't in v11 yet** (Chart, Editor, TreeSelect,
  CascadeSelect, the MegaMenu/TieredMenu family, …) — they have no `references/`
  entry; see `migration.md`.

## License & attribution

Documentation under `skills/primereact-docs/references/` is © PrimeFaces and the
PrimeReact contributors, mirrored from
[primefaces/primereact](https://github.com/primefaces/primereact) under the
[MIT License](LICENSE) with mechanical modifications (fetched as rendered
Markdown from primereact.dev; internal links rewritten to local paths; residual
API-table components replaced with TODO notes). The sync tooling in this repo is
also MIT.

This is an unofficial community project, **not affiliated with or endorsed by
PrimeFaces/PrimeTek**. "PrimeReact" and "PrimeFaces" are names of their respective owners.
