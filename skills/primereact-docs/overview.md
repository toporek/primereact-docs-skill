# PrimeReact v11 — Mental Models & Gotchas

Read this before answering any PrimeReact v11 question. v11 is a rewrite; these
are the load-bearing concepts that differ from v10.

## Four ways to use v11

A given component can be consumed in up to four modes — pick the one the project uses:

1. **Styled** (`references/styled/components/<comp>.md`) — batteries-included
   components with the `@primeuix/themes` design-token theming. The default and
   most common; closest to the v10 mental model.
2. **Primitive** (`references/primitive/components/<comp>.md`) — unstyled,
   accessible **compound** components (e.g. `Accordion.Root` / `Accordion.Panel`
   / `Accordion.Trigger`) with full control over markup via the polymorphic `as` prop.
3. **Headless** (`references/headless/components/<comp>.md`) plus the standalone
   `@primereact/hooks` collection (`references/hooks/**`) — behavior-only `use*`
   hooks; you render everything.
4. **Tailwind** (`references/tailwind/**`, `references/styled/guides/theming/tailwind.md`)
   — the styled components wired for Tailwind via `tailwindcss-primeui`.

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
built-in styles. See `references/styled/guides/misc/passthrough.md`.

## Gotchas

- **v11 is released (GA), but a few v10 components are still not ported** — Chart,
  Editor, TreeSelect, CascadeSelect, Multi/TriStateCheckbox, and the
  MegaMenu/SlideMenu/TabMenu/PanelMenu/TieredMenu family. (DataTable, AutoComplete,
  Select, TreeTable, PickList and OrderList **are** in v11.) If a component has no
  page under `references/`, treat it as not-in-v11 — see `migration.md`.
- **Don't mix v10 names into v11 code** (Calendar/Dropdown/Sidebar/etc.) — the
  guardrail in `migration.md` lists the renames.
- **Props/API tables aren't fully mirrored.** The upstream `.md` ships prop tables
  as a component the site renders client-side, so a page may show an
  "API/props table … not yet mirrored" note. Fall back to the installed
  `@primereact/types` or `primereact.dev` for exhaustive prop lists; the prose,
  usage snippets, and demos on each component page still cover the common cases.
