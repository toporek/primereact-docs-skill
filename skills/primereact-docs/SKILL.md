---
name: primereact-docs
description: Use when writing, configuring, or debugging PrimeReact v11 UI code — components and their props, theming and design tokens (@primeuix/themes), unstyled/PassThrough styling, Tailwind mode, forms, overlays, menus, data components, or headless hooks. Also use for PrimeReact version questions (v10 vs v11 APIs, migration, renamed/removed components). Provides the real v11 docs locally so answers come from the docs, not guesses (Claude mostly knows v10).
---

# PrimeReact v11 Docs

Local, version-pinned mirror of the **PrimeReact v11** documentation (from the
`v11` branch of `primefaces/primereact`), plus a v10→v11 version guardrail.
Ground every PrimeReact answer in these files instead of recalling APIs from
memory — v11 is a ground-up rewrite and Claude's training mostly reflects v10.

## Always start here

1. **Read `overview.md`** — the v11 mental models (four usage modes, design-token
   theming, compound components, headless hooks, PassThrough) and gotchas.
2. **Check the installed version** — `primereact` in the project's `package.json`.
   - `11.x` (or `11.0.0-*`) → use the mirrored v11 docs in `references/`.
   - `10.x` or lower → the API differs substantially; see `migration.md` and rely
     on your v10 knowledge for names/imports the v11 docs would get wrong.

## Version guardrail — STOP before writing a renamed/removed API

If the project is on **v11** and you are about to write any of these v10 names,
you are using training-memory APIs that were renamed/removed — open `migration.md`:

- `Calendar` → `DatePicker`, `Dropdown` → `Select`, `InputSwitch` → `Switch`,
  `OverlayPanel` → `Popover`, `Sidebar` → `Drawer`, `InputTextarea` → `Textarea`,
  `Chips` → `InputTags`, `TabView`/`TabPanel` → `Tabs`, `Steps` → `Stepper`.
- `import 'primereact/resources/themes/*.css'` (gone — theming is now
  `@primeuix/themes` design tokens via `PrimeReactProvider`).

Some heavy v10 components are **not yet ported to v11** (DataTable, Chart, Editor,
Select-as-data-grid, AutoComplete, TreeTable, PickList, OrderList…). For those,
say so and use v10 guidance — do not invent a v11 API.

## Task → which docs to read

Default to the **styled** variant (batteries-included) unless the project uses
unstyled/primitive, headless hooks, or Tailwind.

| Task | Read |
|---|---|
| **Getting started / install** | `references/general/gettingstarted/*`, `references/styled/installation/*` |
| **Theming / design tokens / presets / dark mode** | `references/styled/theming/*`, a component's `references/styled/<comp>/theming.md` |
| **Unstyled / PassThrough** | `references/general/passthrough.md`, `references/styled/theming/unstyled.md` |
| **Tailwind mode** | `references/general/tailwind.md`, `references/tailwind/**` |
| **A specific styled component** | `references/styled/<component>/features.md` (+ `theming.md`) |
| **Unstyled compound primitives** | `references/primitive/<component>/features.md` |
| **Headless hooks** | `references/headless/<component>/features.md`, `references/general/hooks/*` |
| **Icons** | `references/general/icons/*` |
| **Accessibility / RTL** | `references/general/guides/*` |
| **v10 → v11 migration / version mismatch** | `migration.md` |

## Anything else

Open `INDEX.md` for the full topic list, or grep for a symbol:
`grep -rni "definePreset" skills/primereact-docs/references/`.

## Provenance

`SOURCE.md` records the upstream commit + sync date. Because v11 is in active
development, the mirror can lag the branch by up to a day; for bleeding-edge
questions, confirm against the upstream repo.
