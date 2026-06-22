# PrimeReact v11 Docs Skill — Design Spec

**Date:** 2026-06-22
**Status:** Draft — awaiting review
**Repo:** `~/Projects/primereact-docs-skill` (standalone, installable as a Claude Code plugin)

## Goal

Give Claude Code fast, accurate lookups against the **PrimeReact v11** documentation so
it answers from the real v11 docs instead of guessing — Claude mostly knows v10, and v11
is a ground-up rewrite (renamed components, new `@primeuix` design-token theming, compound
components, headless hooks).

The user works with **v11 while it is still in active development**. The upstream docs are
frequently hard to access (the dedicated `v11.primereact.org` preview is often down) and
hard to keep up with (the `v11` branch and APIs move quickly). This skill solves both:

- **Resilience:** a local, offline, grep-able Markdown mirror answers even when the v11
  docs site is down or lagging — no network round-trip mid-task.
- **Freshness:** a one-command sync plus a **daily** GitHub Action keeps the mirror current
  with the moving `v11` branch, with `SOURCE.md` as the staleness signal.

Primary optimization target: **fast, accurate v11 lookups.**
Secondary hard requirement: **easy to keep updated** — refreshing must be a single command.
Tertiary core value: a **version guardrail** that stops Claude using removed/renamed v10
APIs on a v11 project (and vice-versa).

## Non-Goals

- No hand-maintained "distilled cheat-sheets" that rot on every upstream change. Curation
  is limited to small, stable, hand-authored files: `SKILL.md`, `migration.md`, `overview.md`.
- No runtime server / MCP. Query-time path is local file grep/read only.
- No semantic/embedding search. The corpus is small enough that grep + a generated index
  is fast and accurate.
- **v10 docs are not mirrored.** Claude already knows v10 reasonably; the value-add is v11.
  The v10↔v11 deltas live in `migration.md`.
- **Exhaustive API/props tables are out of scope for v1** (see Decisions → Props tables).

## Source of Truth (Phase 1 findings)

Investigated, verified 2026-06-22:

- **No usable rendered source today.** `primereact.org` still serves **v10**
  (`appVersion 10.9.7`); `llms.txt` / `llms-full.txt` / per-page `.md` endpoints all 404.
  The dedicated **`v11.primereact.org` preview is currently down** (404 on every path) and
  bot-hostile. So Zero's "fetch build-rendered `.md`" approach is unavailable right now.
- **v11 *plans* `/llms.txt`, `/llms-full.txt`, and per-page `.md` endpoints** — documented
  in `apps/showcase/docs/general/llms.mdx`. They 404 only because the v11 site is not live.
  **v11 stable targets ~2026-06-29**, but that may slip and v11 is still incomplete.
- **The reliable source today is the GitHub `v11` branch** of `primefaces/primereact`
  (MIT). Docs are clean **MDX** (not the messy JSX doc-components the brief feared):
  - `apps/showcase/docs/{general,headless,primitive,styled,tailwind}/**/*.mdx`
    (`features.mdx`, `theming.mdx`, plus general guides) — frontmatter (`title`,
    `description`, `component`) + Markdown prose + fenced ```tsx blocks + inline
    keyboard/accessibility/data-attribute tables.
  - Runnable examples live separately under `apps/showcase/demo/<variant>/<component>/<demo>.tsx`,
    referenced from MDX via `<DocDemoViewer name="<component>:<demo>" mode="…"/>`; the
    variant is the doc's URL segment (`/docs/<variant>/…`). Mapping confirmed from
    `apps/showcase/shared/components/docs/doc-demo-viewer.tsx`.
  - API/props tables are rendered by `<DocTable name category/>` from a single **86 MB**
    TypeDoc JSON (`apps/showcase/assets/apidoc/index.json`) via bespoke selection logic
    (`shared/utils/getComponentOptions`). High effort, brittle on a moving alpha.
- **Licensing:** MIT (confirmed via GitHub API). Redistribution requires retaining the
  MIT license/attribution to PrimeFaces; we add a non-affiliation disclaimer.

We pin a specific upstream commit SHA per sync and record it (see `SOURCE.md`).

## Approach: Vendored-and-Regenerated Plugin (mirrors `zero-docs-skill`)

A standalone git repo, installable as a Claude Code plugin. Generated reference files are
**committed** so the skill works offline the instant it is installed. A `sync` command
re-pulls upstream and regenerates them.

### Repository Layout

```
primereact-docs-skill/
├── .claude-plugin/
│   ├── plugin.json              # manifest — NO version field (every commit is an update)
│   └── marketplace.json         # required for `/plugin marketplace add`
├── skills/primereact-docs/
│   ├── SKILL.md                 # hand-authored router + auto-trigger + guardrail summary
│   ├── migration.md             # hand-authored v10→v11 version guardrail  ← CORE VALUE
│   ├── overview.md              # hand-authored v11 mental-models/gotchas (read-first)
│   ├── INDEX.md                 # AUTO-GENERATED topic index
│   └── references/              # AUTO-GENERATED from the v11 branch
│       ├── general/…            # getting-started, guides, hooks, icons, passthrough, tailwind, llms
│       ├── styled/<component>/{features.md,theming.md}
│       ├── primitive/<component>/features.md
│       ├── headless/<component>/features.md
│       └── tailwind/<component>/{features.md,theming.md}
├── scripts/
│   ├── sync.mjs                 # orchestrator + `--check` drift mode
│   └── lib/
│       ├── source.mjs           # PLUGGABLE source adapter (github | rendered)
│       ├── collect.mjs          # walk vendored docs, parse frontmatter, build entry list
│       ├── transform.mjs        # MDX → clean Markdown (frontmatter, custom components, links)
│       ├── demos.mjs            # resolve <DocDemoViewer> name → demo file content
│       ├── index-gen.mjs        # build INDEX.md grouped by variant
│       └── *.test.mjs           # node --test unit tests, hermetic fixtures
├── SOURCE.md                    # upstream repo + branch + commit SHA + date + source mode
├── package.json                 # scripts: sync / sync:check / test  (no runtime deps)
├── .github/workflows/
│   ├── ci.yml                   # node --test on push/PR
│   └── sync.yml                 # DAILY cron + workflow_dispatch → test, sync, open PR
├── .gitignore                   # ignores .vendor/
├── LICENSE                      # MIT (sync tooling)
└── README.md
```

### Components & Responsibilities

1. **`scripts/lib/source.mjs` — the pluggable source adapter.**
   Exposes a small interface so the doc-body source can be swapped without rewriting the
   pipeline:
   ```
   interface DocSource {
     sha(): string                                    // upstream commit pinned this run
     listDocs(): Array<{ srcPath, variant }>          // every doc to mirror (raw enumeration)
     readDoc(srcPath): string                         // raw MDX (or rendered .md)
     readDemo(variant, component, demo): string|null  // demo source, or null if absent
   }
   ```
   The source only *enumerates* (`srcPath` + `variant`); `collect.mjs` owns computing the
   normalized `outPath` and reading frontmatter (single responsibility for path logic).
   - **`githubBranchSource` (v1, default):** shallow-clones `primefaces/primereact` at
     branch `v11` (`git clone --depth 1 --branch v11`) into gitignored `.vendor/`. Reads
     `apps/showcase/docs/**` for docs and `apps/showcase/demo/**` for demos. `sha()` returns
     the resolved commit. Re-runnable: removes/refreshes `.vendor/` each run.
   - **`renderedMdSource` (v2, stubbed with a clear TODO):** will fetch `/llms-full.txt`
     for the page list and per-page `<url>.md` bodies once v11's official endpoints go live.
     Not implemented in v1; the adapter boundary and a `PRIMEREACT_DOCS_SOURCE=github|rendered`
     switch exist so the future flip is a config change, not a rewrite.

2. **`scripts/lib/collect.mjs` — enumerate + normalize.**
   Walks the source's doc list, parses frontmatter (`title`/`description`/`component`), and
   computes the output path. **Path normalization:** drop the `components/` infix used by
   `styled`/`tailwind` so every component lands at `references/<variant>/<component>/<page>.md`;
   `general` docs keep their sub-structure under `references/general/…`; `.mdx` → `.md`.

3. **`scripts/lib/transform.mjs` — MDX → clean Markdown.** Line/regex-based, **no parser
   dependency** (the set of custom components is small and enumerable — Approach A below).
   Per file, in order:
   - `parseFrontmatter` → strip the frontmatter block; the body gets a single H1 from
     `title`, and `description` is emitted as the lead paragraph.
   - Strip `import` / `export` statement lines (MDX scaffolding).
   - **Protect fenced code:** never transform inside ``` / ~~~ fences (links, JSX, etc.).
   - **Custom-component handlers** (the fidelity work). Known components from
     `apps/showcase/shared/components/docs/`:
     - `<DocDemoViewer name="c:d" mode="…"/>` → unless `mode="hidden"`, resolve the demo via
       `demos.mjs` and inline as a labelled ```tsx block; drop cleanly if the demo is missing.
     - `<DocTable name="X" category="api|pt|token|style"/>` → **DEFERRED (v2):** replace with
       a visible note: `> **API/props table for `X` (`<category>`) is generated from upstream
       TypeScript types and is not yet mirrored — see the installed package types or the
       upstream docs. (TODO: mirror in v2.)** No raw JSX leaks.
     - `<DocPrimitiveIntro description="…"/>` → emit the `description` text as a paragraph.
     - `<DocPTViewer name="x-pt" …/>` → inline the referenced pt demo file as a ```tsx block,
       or a short note if absent.
     - `<Button as="a" href="…">text</Button>` → `[text](href)`.
     - `<DocPrimitiveLinks>`, `<DocSourceViewer>`, `<DocLinkCard>`, `<DocNotification>`
       (callout → blockquote when it carries prose), ads/npm wrappers, etc. → handled or
       dropped cleanly.
   - **Generic guard / fallback:** any remaining unknown `<Doc…>`/JSX tag is stripped, and a
     final assertion fails the build if **any `<` JSX artifact survives** (acceptance criterion:
     no raw JSX/JSON leaks into the Markdown).
   - `finalizeDoc`: collapse 3+ blank lines, ensure leading H1, trailing single newline.
   - `rewriteDocLinks`: rewrite `/docs/<type>/…` and absolute `https://(v11.)primereact.org/docs/…`
     links to local relative paths into `references/`, mapping directory slugs and dropping
     query strings; lines inside fences untouched.

4. **`scripts/lib/demos.mjs` — demo resolution.** Parses a `<DocDemoViewer>` `name`
   (`component:demo`), combines it with the doc's `variant`, and returns the file content of
   `apps/showcase/demo/<variant>/<component>/<demo>.tsx` (via the source adapter). Applies the
   same minor rewrite the showcase does (`@/components/ui/utils` → `@/lib/utils`). Returns
   `null` when the demo file is absent.

5. **`scripts/lib/index-gen.mjs` — INDEX.md.** Groups entries by variant
   (General, Styled, Primitive, Headless, Tailwind), each `- [Title](references/<path>) — <description>`,
   sorted within group. Lists **every** generated doc.

6. **`scripts/sync.mjs` — orchestrator.** Selects the source, clones/reads, transforms every
   doc (inlining demos, rewriting links), writes `references/**`, regenerates `INDEX.md`,
   stamps `SOURCE.md` (repo + branch + SHA + ISO date + source mode). `--check` regenerates
   in memory and diffs against committed output, exiting non-zero on drift (idempotence).

7. **`SKILL.md` — hand-authored router (auto-trigger).** YAML `description` tuned so Claude
   lazy-loads the skill **only** on PrimeReact UI work (components, props, theming /
   PassThrough, DataTable, forms, overlays) and v10/v11 version questions. Body:
   - **Always start here:** read `overview.md`; **check the installed `primereact` version in
     `package.json` first** — v10 vs v11 is a rewrite boundary.
   - **Version guardrail summary** + STOP-list → `migration.md`.
   - **Task → which docs** routing table (forms / overlays / data / theming / PassThrough /
     hooks / getting-started / installation), **styled-first**, noting the four variants.
   - Note that **DataTable, Chart, Editor, Select, AutoComplete are not yet ported to v11** →
     v10 remains their reference; flag the gap.
   - Grep fallback + `INDEX.md` pointer + provenance (`SOURCE.md`).

8. **`migration.md` — the version guardrail (core value).** Hand-authored:
   - Instruction to **check `primereact` version in `package.json` first**.
   - **STOP-list** table: v10 API → status → v11 replacement → changed-in.
   - **Rename map:** Calendar→DatePicker, Dropdown→Select, InputSwitch→Switch (ToggleSwitch),
     OverlayPanel→Popover, Sidebar→Drawer, InputTextarea→Textarea, Chips→InputTags,
     TabView/TabPanel→Tabs, Steps→Stepper, Galleria→Gallery, ScrollPanel→ScrollArea,
     ScrollTop→useScrollTop, KeyFilter→useKeyFilter, InputMask→useMask, etc.
   - **Theming overhaul:** `import 'primereact/resources/themes/*.css'` **gone** →
     `@primeuix/themes` design tokens (primitive→semantic→component) + presets
     Aura/Material/Lara/Nora via `PrimeReactProvider`, `definePreset`, `darkModeSelector`;
     first-class unstyled + Tailwind (`tailwindcss-primeui`) modes.
   - **Not yet in v11:** DataTable, Chart, Editor, Select, AutoComplete, TreeTable,
     TreeSelect, PickList, OrderList, etc. → stay on v10 / wait.
   - **Peer-deps:** React 19; monorepo `@primereact/{core,headless,hooks,styles,types,ui}`;
     `@primeuix/themes` now required; `@primereact/types` (TS) currently not auto-installed.
   - Works **both directions:** v10-pinned → keep v10 names/CSS themes; v11 → new names/tokens.

9. **`overview.md` — hand-authored read-first briefing.** v11 mental models & gotchas: the
   four usage modes (styled / unstyled-primitive / headless-hooks / tailwind), design-token
   theming, compound components, PassThrough, and the "v11 is mid-rewrite / some components
   missing" caveat. Distinct from the synced `general/` reference docs.

10. **Plugin packaging.** `plugin.json` (name `primereact-docs`, **no `version`**, author,
    homepage, repository, `license: MIT`, keywords) + `marketplace.json`
    (`owner` + `plugins:[{name, source:"./", description}]`). `LICENSE` = MIT for the tooling.
    `README.md` with install (`/plugin marketplace add toporek/primereact-docs-skill` then
    `/plugin install primereact-docs@primereact-docs`), update commands, MIT attribution to
    PrimeFaces/PrimeReact, and a non-affiliation disclaimer.

11. **GitHub Actions.**
    - `ci.yml`: `node --test` on push to `main` + PRs. `actions/checkout@v6`,
      `actions/setup-node@v6`, Node 24.
    - `sync.yml`: **daily** cron (`0 6 * * *`) + `workflow_dispatch`. Steps: run tests →
      `npm run sync` → `peter-evans/create-pull-request@v8` opening/updating one rolling PR
      (`branch: auto/sync-primereact-docs`, `delete-branch: true`) when output drifted.
      **Default: PR-for-review** (guards against a transform regression silently shipping).
      Auto-merge-on-green is a documented opt-in, not the default.

### Data Flow

```
primefaces/primereact @ v11   (MDX docs + demo .tsx, via source adapter)
        │  git clone --depth 1 --branch v11   (githubBranchSource → .vendor/, gitignored)
        ▼
  apps/showcase/docs/**/*.mdx  +  apps/showcase/demo/**/*.tsx
        │  collect (frontmatter, out-path) → transform (MDX→MD, inline demos, rewrite links)
        ▼
  skills/primereact-docs/references/**/*.md   ─┐
  skills/primereact-docs/INDEX.md             ─┤ committed
  SOURCE.md (repo + branch + SHA + date)      ─┘
        │  at query time
        ▼
  SKILL.md auto-triggers → read overview.md + check primereact version → migration.md
        → INDEX.md → grep/read references/ → grounded v11 answer
```

## Decisions (made during brainstorming)

- **Doc source:** GitHub `v11` branch now, behind a **pluggable adapter** so we can flip to
  the official `/llms-full.txt` + `.md` endpoints the moment they ship.
- **Variant scope:** mirror **all four variants + general** (general, styled, primitive,
  headless, tailwind). Comprehensive; grep handles the volume; `SKILL.md` routes styled-first.
- **API/props tables:** **deferred to v2.** v1 mirrors prose + inline usage + resolved demo
  code + the inline keyboard/accessibility/data-attribute tables. `<DocTable>` becomes a
  visible **TODO note** in the output (no silent omission, no raw JSX).
- **Auto-sync cadence:** **daily** (`0 6 * * *`), one rolling PR, plus on-demand
  `workflow_dispatch`. Default PR-for-review; auto-merge is an opt-in.
- **Transform approach:** **A — line/regex with targeted handlers** for the enumerable set of
  custom components. No remark/unified dependency ("minimal deps").

## Error Handling & Edge Cases

- **Network/clone failure:** `sync.mjs` exits non-zero with a clear message; committed
  references remain untouched (skill still works on the last good snapshot).
- **Upstream restructures docs:** sync mirrors whatever exists; stale files from a previous
  layout are removed by clearing `references/` before regenerating.
- **Missing demo file** referenced by `<DocDemoViewer>`: drop the reference cleanly (do not
  emit a broken link or raw tag).
- **Unknown custom component:** generic strip + a final no-raw-JSX assertion fails the build
  rather than leaking artifacts.
- **`--check` drift in CI:** surfaces as a failed job / opened PR, never silently ignored.
- **v11 incompleteness:** `SKILL.md`/`migration.md` explicitly flag components not yet ported
  so Claude doesn't invent v11 APIs for them.

## Testing Strategy

- **Unit (hermetic fixtures, `node --test`):**
  - `transform`: frontmatter→H1; import/export stripping; fence protection; `<DocDemoViewer>`
    inlining (mock resolver); `<DocTable>`→deferral note; `<DocPrimitiveIntro>`→text;
    `<Button as="a">`→link; generic JSX strip + **assert no `<Doc`/`<` JSX artifact remains**;
    link rewriting for `/docs/<type>/…` paths.
  - `collect`: path normalization (drop `components/` infix, `.mdx`→`.md`), frontmatter pickup.
  - `index-gen`: variant grouping, labels, ordering, entry format, lists every doc.
  - `demos`: `name` parsing + variant/component/demo → path resolution; null on missing.
- **Acceptance (real run, outside unit tests to stay network-free in CI):** `npm run sync`
  produces non-empty `references/**` with **no raw JSX/JSON artifacts**, working internal
  links, and an `INDEX.md` listing every doc; `npm run sync:check` is idempotent.
- **Skill behavior (RED/GREEN via subagent retrieval):**
  - "project pins `primereact@10`; user adds a DataTable" → routes to v10 DataTable guidance
    and flags it's not in v11.
  - "project pins `primereact@11`; user adds a dropdown" → routes to **Select** (not Dropdown)
    + v11 import/theming, flagging the rename.
- **`claude plugin validate .`** passes.

## Acceptance Criteria

- `npm test` passes.
- `npm run sync` → non-empty `references/**`, no raw JSX/JSON artifacts, working internal
  links, `INDEX.md` lists every doc.
- `npm run sync:check` is idempotent.
- `SKILL.md` auto-trigger + version guardrail verified by the RED/GREEN subagent scenarios.
- `claude plugin validate .` passes.

## Open Questions / Future Work (non-blocking)

- **v2 — API/props tables:** either parse `assets/apidoc/index.json` (reimplement
  `getApiDocs`/`getPTOptions`/`getStyleOptions`/`getTokenOptions`) or — preferably — adopt the
  official rendered `.md`/`llms-full.txt` once v11 ships, which renders these tables for us.
- **v2 — `renderedMdSource`:** implement the stubbed adapter when v11's official endpoints go
  live; re-check `v11.primereact.org` / `primereact.org` and the npm `latest`/`alpha` tags
  around the ~2026-06-29 target.
- **INDEX ordering:** optionally use `apps/showcase/shared/data/doc-index.json` for canonical
  nav ordering instead of alphabetical-within-group.
