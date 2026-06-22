# primereact-docs-skill

A Claude Code plugin that mirrors the **PrimeReact v11** documentation into local,
grep-friendly Markdown so Claude Code answers PrimeReact questions (components,
theming/design tokens, PassThrough, hooks) from the real v11 docs instead of
guessing — Claude's training mostly reflects v10, and v11 is a ground-up rewrite.

Because v11 is still in active development and its docs site is often unavailable,
this gives you an **offline, grep-able, version-pinned** snapshot plus a daily
auto-sync and a v10→v11 version guardrail.

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
  and `references/` (one Markdown file per upstream doc, across the `general`,
  `styled`, `primitive`, `headless`, and `tailwind` variants).
- `scripts/sync.mjs` — shallow-clones the `v11` branch of
  [primefaces/primereact](https://github.com/primefaces/primereact), transforms
  each `apps/showcase/docs/**/*.mdx` to Markdown (inlining the referenced demo
  `.tsx` examples, rewriting internal links), and regenerates `references/` +
  `INDEX.md`. The doc-body source is pluggable (`scripts/lib/source.mjs`) so it
  can switch to v11's official `.md`/`llms-full.txt` endpoints once they ship.

## Updating

```bash
npm run sync        # re-pull upstream and regenerate (commit the result)
npm run sync:check  # non-zero exit if committed output drifts from upstream
npm test            # unit tests for the transform/collect/index/source modules
```

`SOURCE.md` records the upstream commit the current mirror was generated from. A
**daily** GitHub Action opens/updates a single rolling PR when upstream changes.

> **Note (maintainers/forks):** the sync workflow opens PRs via
> `peter-evans/create-pull-request`, which requires **Settings → Actions →
> General → "Allow GitHub Actions to create and approve pull requests"**.

## Known limitations

- **API/props tables are not mirrored yet (v2).** v11 renders them from an 86 MB
  TypeDoc JSON; v1 mirrors prose, usage, and runnable demos, and shows a TODO note
  where a table would be. Use `@primereact/types` or upstream for exhaustive props.
- **v11 is incomplete.** Components not yet ported (DataTable, Chart, Editor,
  AutoComplete, …) have no `references/` entry; see `migration.md`.

## License & attribution

Documentation under `skills/primereact-docs/references/` is © PrimeFaces and the
PrimeReact contributors, mirrored from
[primefaces/primereact](https://github.com/primefaces/primereact) under the
[MIT License](LICENSE) with mechanical modifications (MDX → Markdown; demo files
inlined; internal links rewritten; API-table components replaced with TODO notes).
The sync tooling in this repo is also MIT.

This is an unofficial community project, **not affiliated with or endorsed by
PrimeFaces/PrimeTek**. "PrimeReact" and "PrimeFaces" are names of their respective owners.
