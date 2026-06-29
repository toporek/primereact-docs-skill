# PrimeReact Migration & Version Guardrail (v10 → v11)

PrimeReact v11 is a **ground-up rewrite** and is now **released (GA)**. The
mirrored docs in `references/` describe **v11**. Before writing code, check the
installed version and use this file to bridge what your training memory (mostly
v10) and the v11 docs each say.

## Step 0 — check the installed version FIRST

Read `primereact` in the project's `package.json`:

- **`11.x` / `11.0.0-*`** → use v11: new component names, `@primeuix/themes`
  theming, compound components, headless hooks. Trust `references/`.
- **`10.x` or lower** → use v10: the old names below, CSS-file themes. The v11
  docs will mislead you on names/imports; rely on v10 knowledge.
- **Not installed yet** → ask which major version, or default to v11 (latest) and
  say so.

## Renamed components — STOP if you are about to write the v10 name (on v11)

v11 styled/primitive components import from **`@primereact/ui/<component>`** (not
the old `primereact/<component>` paths). Confirm the exact import in each
component's `references/<variant>/components/<comp>.md`.

| v10 (training memory) | v11 | v11 import |
|---|---|---|
| `Calendar` | `DatePicker` | `@primereact/ui/datepicker` |
| `Dropdown` | `Select` | `@primereact/ui/select` |
| `InputSwitch` | `Switch` (ToggleSwitch) | `@primereact/ui/switch` |
| `OverlayPanel` | `Popover` | `@primereact/ui/popover` |
| `Sidebar` | `Drawer` | `@primereact/ui/drawer` |
| `InputTextarea` | `Textarea` | `@primereact/ui/textarea` |
| `Chips` | `InputTags` | `@primereact/ui/inputtags` |
| `TabView` / `TabPanel` | `Tabs` (compound: `Tabs`, `Tabs.List`, `Tabs.Tab`, `Tabs.Panel`) | `@primereact/ui/tabs` |
| `Steps` | `Stepper` | `@primereact/ui/stepper` |
| `Galleria` | `Gallery` | `@primereact/ui/gallery` |
| `ScrollPanel` | `ScrollArea` | `@primereact/ui/scrollarea` |
| `ScrollTop` | `useScrollTop` hook | `@primereact/hooks` |
| `KeyFilter` | `useKeyFilter` hook | `@primereact/hooks` |
| `InputMask` | `useMask` hook | `@primereact/hooks` |

## Theming — the biggest breaking change

**v10:** static CSS themes —
`import 'primereact/resources/themes/lara-light-cyan/theme.css';` plus
`PrimeReactContext` flags (`ripple`, `inputStyle`). **All of this is gone in v11.**

**v11:** a design-token engine from `@primeuix/themes`:

```tsx
// npm install primereact @primeuix/themes
import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';

<PrimeReactProvider theme={{ preset: Aura }}>{children}</PrimeReactProvider>
```

- Built-in presets: **Aura, Material, Lara, Nora**.
- Tokens in three tiers: primitive → semantic → component; customize with
  `definePreset(...)`; dark mode via `darkModeSelector`.
- **Unstyled mode** (no built-in classes) and **Tailwind** (`tailwindcss-primeui`)
  are first-class. See `references/styled/guides/theming/*` (incl. `unstyled.md`,
  `tailwind.md`) and `references/tailwind/**`.

## Not yet ported to v11 (as of the mirrored snapshot)

Now in v11 (don't treat these as missing anymore): **DataTable, AutoComplete,
Select, TreeTable, PickList, OrderList** — see `references/styled/components/`.

Still **not ported** as of this snapshot: `Chart`, `Editor`, `TreeSelect`,
`CascadeSelect`, `MultiStateCheckbox`, `TriStateCheckbox`, and the
`MegaMenu` / `SlideMenu` / `TabMenu` / `PanelMenu` / `TieredMenu` family.

For a component with **no page under `references/`**: say it's not yet in v11, and
either use the v10 component (if the project still has v10 installed) or wait for
the port — **do not invent a v11 API.** Always check `INDEX.md` / `references/` to
confirm presence (the mirror is refreshed daily, so the list shifts over time).

## Peer dependencies & packages (v11)

- **React 19** is the target.
- Monorepo packages: `@primereact/core`, `@primereact/headless`,
  `@primereact/hooks`, `@primereact/styles`, `@primereact/types`, `@primereact/ui`.
- `@primeuix/themes` is effectively **required** for theming.
- `@primereact/types` may need explicit install for TypeScript.
- Icons via `@primereact/icons` / `@primeicons/react`.

## Direction summary

- Project on **v10** → keep v10 names + CSS-file themes; ignore v11-only APIs.
- Project on **v11** → new names + `@primeuix/themes` tokens; never reach for the
  removed v10 names or `primereact/resources/themes/*.css`.
