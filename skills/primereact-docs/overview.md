# PrimeReact v11 — Mental Models & Gotchas

Read this before answering any PrimeReact v11 question. v11 is a rewrite; these
are the load-bearing concepts that differ from v10.

## Four ways to use v11

A given component can be consumed in up to four modes — pick the one the project uses:

1. **Styled** (`references/styled/**`) — batteries-included components with the
   `@primeuix/themes` design-token theming. The default and most common; closest
   to the v10 mental model. Each component has `features.md` (+ often `theming.md`).
2. **Primitive** (`references/primitive/**`) — unstyled, accessible **compound**
   components (e.g. `Accordion.Root` / `Accordion.Panel` / `Accordion.Trigger`)
   with full control over markup via the polymorphic `as` prop.
3. **Headless** (`references/headless/**`, `references/general/hooks/**`) —
   behavior-only `use*` hooks; you render everything.
4. **Tailwind** (`references/tailwind/**`, `references/general/tailwind.md`) —
   the styled components wired for Tailwind via `tailwindcss-primeui`.

## Theming = design tokens, not CSS files

There is no `primereact/resources/themes/*.css` in v11. Theming is a token engine:
configure a **preset** (Aura/Material/Lara/Nora) on `PrimeReactProvider`, override
with `definePreset`, control dark mode with `darkModeSelector`. Tokens are layered
primitive → semantic → component. See `migration.md` for the import shape.

## Compound components & polymorphism

v11 favors compound APIs (sub-components like `X.Root`, `X.Item`) over the v10
monolithic single-component-with-many-props style. Most sub-components accept an
`as` prop to change the rendered element or supply a custom component, and many
`Content`-style parts accept a render-function child exposing instance state.

## PassThrough (pt)

`pt` lets you inject props/classes into internal elements; `unstyled` drops
built-in styles. See `references/general/passthrough.md`.

## Gotchas

- **v11 is in active development and incomplete.** Several v10 components are not
  yet ported (DataTable, Chart, Editor, AutoComplete, TreeTable, PickList…). If a
  component isn't under `references/`, treat it as not-yet-in-v11 — see `migration.md`.
- **Don't mix v10 names into v11 code** (Calendar/Dropdown/Sidebar/etc.) — the
  guardrail in `migration.md` lists the renames.
- **API/props tables are not mirrored yet (v2).** Where a doc shows a
  "API/props table … not yet mirrored" note, fall back to the installed
  `@primereact/types` or the upstream docs for exhaustive prop lists; the prose,
  usage snippets, and demos in each `features.md` still cover the common cases.
