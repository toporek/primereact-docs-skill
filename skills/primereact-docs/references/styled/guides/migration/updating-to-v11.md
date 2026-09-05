# Updating to v11

A component by component guide to moving an application from PrimeReact v10 to v11.

## Overview

PrimeReact v11 is a rewrite. Components are now function components built on hooks, styling moved to a design token system, and features that used to be props are now composed from parts.

The scale is smaller than that makes it sound. Of the 101 components in v10, **54 keep the same name in v11**. Most of the work is mechanical: new import paths, a compound API in place of long prop lists, and a different way of loading themes.

The sections below start with what affects every component, then work through the components themselves.

## Why migrate

Most v10 projects hit the same wall eventually. A design comes back with a badge next to a menu item, a footer button in a dropdown panel, one column header styled differently to the rest. None of it is hard, but none of it is a prop either, so it turns into a template function that hands markup back to the component, or a CSS selector aimed at a `p-*` class and a note to check it after the next upgrade.

v11 exports the parts instead. The menu item, the dropdown footer, the header cell are elements in the tree, so they take a class, a ref, an event handler, whatever the situation needs. Icons are children rather than class name strings, which means any icon library works without a template per instance.

Theming changed for the same reason. v10 themes were compiled SASS: a colour change meant a rebuild, and anything the variables missed meant writing CSS against class names that were never really part of the API. v11 uses design tokens, so values change at runtime and can be scoped to the whole app, one subtree or a single component.

The other difference is that styling is separable now. The unstyled components, the themed ones and the headless hooks are separate packages, so a project takes the layer it wants rather than the markup and the CSS together.

## Installation

v11 ships as several packages instead of one.

```bash
npm install @primereact/ui @primeuix/themes
```

Nothing needs to be uninstalled. The `primereact` package is now the unstyled primitive layer, and `@primereact/ui` depends on it. Removing it would break the install.

Three packages sit on top of each other, and an application picks the level it wants to work at.

| Package                | What it provides                                      | Renders DOM | Styled |
| ---------------------- | ----------------------------------------------------- | ----------- | ------ |
| `@primereact/headless` | State, events and accessibility as hooks              | No          | No     |
| `primereact`           | Primitive components built on those hooks             | Yes         | No     |
| `@primereact/ui`       | The same primitives with `@primereact/styles` applied | Yes         | Yes    |

Applications coming from v10 want `@primereact/ui`. It is the closest match to what v10 shipped: components that look finished without extra work. Reach for `primereact` when building a custom design system, and `@primereact/headless` when the markup is hand-written.

Both import paths resolve to the same component underneath:

```tsx
import { Button } from '@primereact/ui/button'; // themed
import { Button } from 'primereact/button'; // unstyled
```

A few more packages come along as dependencies. They rarely need to be installed directly, but they show up in imports and in type errors, so it helps to know what each one is.

| Package              | Role                                                                               |
| -------------------- | ---------------------------------------------------------------------------------- |
| `@primereact/core`   | The provider, configuration, theming runtime and locale registry                   |
| `@primereact/hooks`  | Standalone hooks such as `useMask`, `useKeyFilter`, `useFilter` and `useScrollTop` |
| `@primereact/styles` | The class name definitions `@primereact/ui` applies                                |
| `@primereact/types`  | Type definitions for props, instances and pass-through options                     |
| `@primeuix/themes`   | Token presets: Aura, Material, Lara, Nora                                          |

Two of these are worth importing directly. `@primereact/core` holds `PrimeReactProvider` and the locale API, and `@primereact/hooks` holds the behaviour that used to live inside components like InputMask and KeyFilter.

Setup for Next.js, Vite, Astro, React Router and TanStack is covered in the [installation guide](../installation.md).

## Theming

The v10 stylesheet imports no longer exist:

```js
// v10. None of these resolve in v11.
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
```

The `primereact/resources` folder is gone, and with it the 56 prebuilt theme files and the `changeTheme()` helper. PrimeFlex is no longer part of the setup.

Themes come from `@primeuix/themes` as design token presets, applied through the provider:

```tsx
import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';

<PrimeReactProvider theme={{ preset: Aura }}>
    <App />
</PrimeReactProvider>;
```

Aura, Material, Lara and Nora ship as built-in presets.

### Why the model changed

Theming in v10 meant compiling SASS. A custom theme started as a copy of `theme.scss`, overrode a list of variables, and produced a CSS file that had to be rebuilt and shipped whenever anything changed. Adjusting one component usually meant hunting for the right selector, and anything the variables did not cover fell back to writing CSS against `p-*` classes and hoping those class names survived the next release.

The token model removes the build step. A preset is a plain object, evaluated at runtime into CSS variables, so there is no SASS toolchain and no compiled artifact to keep in sync.

Tokens are organised in three tiers, and knowing which tier to reach for is most of the learning curve:

| Tier          | What it holds                                  | Example                                            |
| ------------- | ---------------------------------------------- | -------------------------------------------------- |
| **Primitive** | A raw palette with no meaning attached         | `blue.500`, `zinc.100`                             |
| **Semantic**  | Roles that map to primitives                   | `primary.color`, `surface.200`, `focus.ring.width` |
| **Component** | Per-component values that map to semantic ones | `button.root.borderRadius`, `card.subtitle.color`  |

Changing one semantic token moves everything built on it. Setting `primary.color` recolours buttons, checkboxes, focus rings, links and progress bars in one line, where the SASS approach meant tracking down every place the old primary was used.

### What this makes possible

#### Dark mode in the same value

A token can carry both schemes at once with `light-dark()`, and `darkModeSelector` decides which one applies:

```ts
background: 'light-dark({surface.300}, {surface.700})';
```

v10 needed a separate compiled theme file per scheme.

#### Theme switching at runtime

Presets are objects, so changing theme is a state change. No stylesheet to swap, no flash while a new CSS file loads.

#### Overriding a single instance

Every component takes a `dt` prop for tokens scoped to that instance alone:

```tsx
<ToggleSwitch.Root
    defaultChecked
    dt={{
        root: {
            checkedBackground: 'light-dark({amber.500}, {amber.400})',
            checkedHoverBackground: 'light-dark({amber.600}, {amber.300})'
        },
        handle: {
            checkedBackground: 'light-dark({amber.50}, {amber.900})'
        }
    }}
>
    …
</ToggleSwitch.Root>
```

The keys are the component's own token sections. ToggleSwitch defines `root` and `handle`, and those are exactly the names a preset uses for the same component:

```ts
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

// The same shape, applied globally instead of to one instance.
definePreset(Aura, {
    components: {
        toggleswitch: {
            root: { checkedBackground: 'light-dark({amber.500}, {amber.400})' }
        }
    }
});
```

So `dt` is the preset syntax scoped to a single element. In v10 this meant a wrapper class plus a CSS override, with the dark mode rules written out a second time.

#### Updating tokens from code

`updatePreset`, `updatePrimaryPalette` and `updateSurfacePalette` change tokens after mount. A theme customizer or a per-tenant brand colour needs exactly that. `$dt` reads a token value when a calculation needs it.

#### Working from design tools

Tokens follow the [Design Tokens Format Module](https://www.designtokens.org/tr/drafts/format/) specification, so the same names exist in code and in design.

- The [Figma UI Kit](../../add-ons/uikit/overview.md) uses these names, so a change made by a designer maps to the token a developer edits instead of being translated by hand.
- The [Theme Designer](../../add-ons/designer/guide.md) edits tokens through a UI and exports a preset. With SASS this was not possible, since a theme only existed once compiled.

### Moving existing customizations

| v10                                      | Where it goes in v11                                                                                                                                     |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A SASS theme built from `theme.scss`     | Variable overrides become token overrides in a preset. A rewrite, but usually a much shorter file, since a preset only lists what differs from the base. |
| CSS overrides against `p-*` classes      | Still work. The class names survived. Keep them as the fallback, since a token reaches every component that uses it while a selector reaches one.        |
| `changeTheme(current, next, linkId, cb)` | Gone. There is no `<link>` tag to swap. Pass a different preset to the provider.                                                                         |
| Scale set with a font size on `:root`    | A token, so it no longer depends on the cascade.                                                                                                         |
| PrimeFlex classes                        | Not part of the setup. Any utility library works, since components do not depend on one.                                                                 |

The [styled mode guide](../theming/styled.md) covers `definePreset`, the full token reference, dark mode setup and the update utilities.

### Unstyled mode

v10 had one way to get unstyled components: the `unstyled` flag, set globally or per component. Both still work, and v11 adds two more entry points.

| Approach                           | When it fits                                                                  |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| `<PrimeReactProvider unstyled>`    | The whole application is styled by something else                             |
| `unstyled` on a component          | Most of the app is themed, one screen is not                                  |
| Import from `primereact`           | Building a design system on the primitives, with no theme layer in the bundle |
| Import from `@primereact/headless` | Hand-written markup as well as hand-written styling                           |

The last two are the difference from v10. There, unstyled mode meant the styled component with its class generation switched off, so the theming layer still shipped. In v11 the layers are separate packages, so importing from `primereact` means the styles never enter the bundle at all.

```tsx
// Themed, then opted out for one instance.
import { Select } from '@primereact/ui/select';
<Select.Root unstyled />;

// Unstyled by construction. No theme layer involved.
import { Select } from 'primereact/select';

// No markup either. The hook returns state and prop getters.
import { useSelect } from '@primereact/headless/select';
```

All three render the same behaviour and the same accessibility attributes. They differ only in how much of the visual layer comes along.

### Pass Through

`pt`, `ptOptions` and `unstyled` all survived, and they work the same way.

What changed is what the slot keys point at. In v10 a `pt` key was the only handle on an internal element: `panel`, `wrapper`, `itemLabel`. In v11 that element is an exported part, so `pt` is one of two ways in, and usually the longer one.

```jsx
// v10. pt was the only way in.
<Dropdown pt={{ panel: { className: 'shadow-xl' } }} />
```

```jsx
// v11. The part takes props directly.
<Select.Popup className="shadow-xl" />
```

`pt` still earns its place for global configuration, where it applies to every instance of a component type through the provider. So a v10 `pt` preset needs its keys remapped to the new part names, while per-component uses are usually clearer as props on the part.

`ptOptions` with `mergeSections` and `mergeProps` carries over unchanged.

## Configuration

The global `PrimeReact` object from `primereact/api` is gone. It was already deprecated in v10. All configuration goes through `PrimeReactProvider`.

```jsx
// v10. Static assignment, or the provider's value object.
import PrimeReact from 'primereact/api';
PrimeReact.inputStyle = 'filled';
```

```jsx
// v11
<PrimeReactProvider inputVariant="filled">
    <App />
</PrimeReactProvider>
```

### What carried over

| v10 option               | v11                                                              |
| ------------------------ | ---------------------------------------------------------------- |
| `locale`                 | Same                                                             |
| `pt`, `ptOptions`        | Same                                                             |
| `unstyled`               | Same                                                             |
| `filterMatchModeOptions` | Same                                                             |
| `zIndex`                 | Same, minus the `toast` key. Toasts are positioned by `Toaster`. |
| `nonce`                  | `csp.nonce`                                                      |
| `inputStyle`             | `inputVariant`, with the same `'outlined'` and `'filled'` values |

### What was dropped

| v10 option                        | Status                                                               |
| --------------------------------- | -------------------------------------------------------------------- |
| `appendTo`                        | Portals are explicit. `<Select.Portal>` and friends take the target. |
| `cssTransition`                   | Animation is CSS and the `Motion` primitive                          |
| `autoZIndex`                      | Handled by the overlay stack                                         |
| `hideOverlaysOnDocumentScrolling` | Overlays reposition on scroll instead of hiding                      |
| `nullSortOrder`                   | Moved onto DataTable as a component prop                             |
| `styleContainer`                  | Replaced by `stylesheet` for SSR collection                          |
| `changeTheme()`                   | Themes are presets passed to the provider                            |
| `ripple`                          | Not supported in v11                                                 |

### What is new

| v11 option   | Purpose                                            |
| ------------ | -------------------------------------------------- |
| `theme`      | The design token preset and its options            |
| `license`    | Commercial license key                             |
| `stylesheet` | SSR style collection, used by the Next.js setup    |
| `locales`    | Register languages and select one in a single step |
| `defaults`   | Default props per component type, application-wide |
| `csp`        | `{ nonce }` for Content Security Policy            |

`defaults` is new and useful during a migration. Instead of wrapping a component to change what it does by default, set it once on the provider:

```jsx
<PrimeReactProvider defaults={{ Button: { props: { size: 'small', severity: 'secondary' } } }}>
```

Event handlers work here as well, and they run alongside the one at the call site instead of replacing it, which suits cross-cutting concerns like analytics. The key is the component's registered name, and for compound components four spellings are accepted: `Checkbox.Root`, `CheckboxRoot`, a nested `{ Checkbox: { Root } }`, or lowercase.

## Locale

The locale helpers from `primereact/api` were replaced.

```js
// v10
import { locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions } from 'primereact/api';
```

```js
// v11
import { $t, $l, defineLocale, updateLocale, useLocale, Locale, LocaleService, en } from '@primereact/core/locale';
```

| v10                                    | v11                                                      |
| -------------------------------------- | -------------------------------------------------------- |
| `locale('de')`                         | `Locale.use('de')`, or the `locale` prop on the provider |
| `addLocale('es', {…})`                 | `defineLocale('es', {…})`                                |
| `updateLocaleOption(key, value, lang)` | `updateLocale(lang, { key: value })`                     |
| `updateLocaleOptions({…}, lang)`       | `updateLocale(lang, {…})`                                |
| `localeOption(key)`                    | `$t(key)`, or `t(key)` from `useLocale()`                |
| `localeOptions(lang)`                  | `$l().get(lang)`, or `messages` from `useLocale()`       |

Two things changed beyond the names. Locale state is now shared with other Prime libraries running in the same application, where before it was private to PrimeReact. And a registered language has to be complete: any key left out resolves to `undefined` instead of falling back to English, so hand-written translations should spread the exported `en` object first.

Component-level `locale` props are gone. DatePicker took one in v10. In v11 month names, day names, `firstDayOfWeek` and `dateFormat` all come from the active language.

The [internationalization guide](../misc/internationalization.md) covers the full API, including ready-made translations from the PrimeLocale repository.

## Icons

v10 took icons as class name strings, which meant an icon font had to be loaded first:

```js
import 'primeicons/primeicons.css';
```

```jsx
<Button icon="pi pi-check" label="Save" />
<Menu model={[{ label: 'New', icon: 'pi pi-plus' }]} />
```

v11 components do not ship icons and do not import any icon package. Every icon in a v11 interface is supplied by the application:

```jsx
<Button>
    <Check /> Save
</Button>
```

Where `Check` comes from is entirely up to the project. Lucide, Heroicons, Font Awesome, a hand-drawn SVG, an emoji or an `<img>` all work the same way, because the component only positions whatever it is handed.

That is also why `primeicons/primeicons.css` and the `pi pi-*` class strings leave the setup, along with the `PrimeIcons` constant that used to provide autocomplete over icon names.

### PrimeIcons as an option

The PrimeIcons set is still available, now as React components instead of a font:

```bash
npm install @primeicons/react
```

```jsx
import { Check } from '@primeicons/react/check';
```

This is the package the showcase demos use, so examples throughout the documentation import from it. Nothing depends on it. Swapping in another icon library means changing the import, not the component.

It also behaves better than the font did: only the icons actually imported end up in the bundle, and an icon is a normal React element, so it takes `className`, `style`, event handlers and a `ref` like anything else.

## The Three Structural Changes

Almost every difference in the component sections below traces back to one of these.

### Class components became function components

v10 components were ES6 classes, so a `ref` gave back an instance with public methods:

```jsx
// v10
const toast = useRef(null);
toast.current.show({ severity: 'info', summary: 'Info' });

const dt = useRef(null);
dt.current.exportCSV();
```

v11 has no imperative instance API. What used to be a method call is now either state or a headless hook. Each component section below names the specific replacement. This is usually the most invasive part of a migration, because it changes how surrounding code is organized, not just how a component is written.

### Configuration by props became composition

A v10 component absorbed every feature as a prop. `DataTable` accepted around 149 of them, `Calendar` around 100, `Dropdown` around 70.

v11 splits that surface into parts:

```jsx
// v10
<Dropdown value={city} options={cities} optionLabel="name" placeholder="Select a City" onChange={(e) => setCity(e.value)} />
```

```jsx
// v11
<Select.Root value={city} options={cities} optionLabel="name" onValueChange={(e) => setCity(e.value)}>
    <Select.Trigger>
        <Select.Value placeholder="Select a City" />
        <Select.Indicator>
            <ChevronDown />
        </Select.Indicator>
    </Select.Trigger>
    <Select.Portal>
        <Select.Positioner>
            <Select.Popup>
                <Select.List />
            </Select.Popup>
        </Select.Positioner>
    </Select.Portal>
</Select.Root>
```

The version underneath is longer because elements that were previously reachable only through `panelClassName`, `dropdownIcon` or `itemTemplate` are now written out, and each accepts props, refs and children. Data and behaviour props stayed on `Root`; the rest moved into parts, listed per component further down.

#### What the prop model could not do

The cost of the old approach shows up in requests that sound simple and had no clean answer:

- **A sticky action row at the bottom of a dropdown panel.** `panelFooterTemplate` returned markup, but it could not be given a `ref` to measure, or a scroll handler, or a `data-*` hook for tests. In v11 it is `<Select.Popup>` with a `<Select.Footer>` next to `<Select.List>`, and both are elements like any other.
- **A tooltip on one specific menu item.** The `model` array had no place for it. `item.template` meant rebuilding the whole item, losing the built-in keyboard handling. In v11 the item is JSX, so it can be wrapped in a `Tooltip` directly.
- **Rendering the popup somewhere other than the body.** `appendTo` took a target, but the subtree still moved invisibly. Anything that depended on where it landed, stacking context, focus order, click-outside checks, had to be reverse-engineered. `<Select.Portal>` puts that decision in the markup.
- **Styling the third column of a table header differently.** A `headerClassName` string applied to all of them. `<DataTable.THeadCell>` is a `<th>`, so ordinary CSS applies.
- **Replacing an icon with a spinner while loading.** `dropdownIcon` accepted a class name, and `loadingIcon` accepted another, but only if the component's own `loading` prop was driving it. `<Select.Indicator>` takes children, so the choice belongs to whatever state the application already has.

None of these needed a new prop in v11.

### Content comes from children

The third change follows from the second. Anything a v10 component accepted as a string or a template function is now written as children.

```jsx
// v10
<Button icon="pi pi-check" label="Save" />
<Card title="Report" footer={<Button label="Export" />}>Body</Card>
<Dropdown itemTemplate={(o) => <b>{o.name}</b>} />
```

```jsx
// v11
<Button><Check /> Save</Button>
<Card.Root>
    <Card.Title>Report</Card.Title>
    <Card.Content>Body</Card.Content>
    <Card.Footer><Button>Export</Button></Card.Footer>
</Card.Root>
<Select.Option><b>{option.name}</b></Select.Option>
```

Labels, icons, headers, footers and item templates were all separate mechanisms in v10, each with its own prop and its own rules about what it accepted. In v11 they are the same mechanism: children of the part that owns that position.

## Keeping the v10 Component Shape

Compound components are more verbose at the call site. When an application has hundreds of `<Dropdown />` usages, rewriting each one into six nested parts is rarely worth it.

A thin wrapper restores the old shape while keeping the new internals. Create a file for the component, assemble the parts once, and forward the props:

```tsx title="components/select.tsx"
'use client';
import { ChevronDown } from '@primeicons/react';
import { Select as PRSelect, type SelectRootProps } from '@primereact/ui/select';

export function Select({ placeholder, ...props }: SelectRootProps & { placeholder?: string }) {
    return (
        <PRSelect.Root {...props}>
            <PRSelect.Trigger>
                <PRSelect.Value placeholder={placeholder} />
                <PRSelect.Indicator>
                    <ChevronDown />
                </PRSelect.Indicator>
            </PRSelect.Trigger>
            <PRSelect.Portal>
                <PRSelect.Positioner>
                    <PRSelect.Popup>
                        <PRSelect.List />
                    </PRSelect.Popup>
                </PRSelect.Positioner>
            </PRSelect.Portal>
        </PRSelect.Root>
    );
}
```

Call sites then look much like they did in v10:

```jsx
<Select value={city} options={cities} optionLabel="name" placeholder="Select a City" onValueChange={(e) => setCity(e.value)} />
```

The Tailwind variant of PrimeReact is built exactly this way. `packages/tailwind/src/select.tsx` wraps the primitive parts, bakes in the chevron and check icons, and re-exports them as named components. It is a good file to read before writing one.

The wrapper stays escapable. Any part not baked into it can still be passed as children, and the underlying parts remain importable for the screens that need full control. Migration can then proceed screen by screen instead of in one pass.

## Controlled State

The naming convention is consistent across every component in v11:

| Concept | v10                           | v11                                              |
| ------- | ----------------------------- | ------------------------------------------------ |
| Value   | `value` + `onChange`          | `value` + `defaultValue` + `onValueChange`       |
| Checked | `checked` + `onChange`        | `checked` + `defaultChecked` + `onCheckedChange` |
| Open    | `visible` + `onHide`          | `open` + `defaultOpen` + `onOpenChange`          |
| Active  | `activeIndex` + `onTabChange` | `value` + `defaultValue` + `onValueChange`       |

Every controlled prop now has a `default*` counterpart, so uncontrolled usage no longer needs a `useState` that exists only to satisfy the component. The mode is also locked at mount: a component that starts uncontrolled stays uncontrolled even if a value arrives later.

The event payload is familiar. Handlers still receive an event object, not a bare value:

```jsx
// v10
onChange={(e) => setCity(e.value)}

// v11
onValueChange={(e) => setCity(e.value)}
```

What changed is the prop name and the type name, `DropdownChangeEvent` became `SelectValueChangeEvent`. The `e.value` / `e.originalEvent` shape carried over.

## TypeScript

v10 exported a flat set of types per component: `DropdownProps`, `DropdownChangeEvent`, `DropdownPassThroughOptions`, plus the component class. v11 types follow the parts and ship from the same module as the component, so one import covers both:

```tsx
import { Select, type SelectRootProps, type SelectValueChangeEvent } from '@primereact/ui/select';
```

Names follow the same shape everywhere:

| Kind     | Pattern                          | Example                  |
| -------- | -------------------------------- | ------------------------ |
| Props    | `<Component><Part>Props`         | `SelectRootProps`        |
| Event    | `<Component><Part><Action>Event` | `SelectValueChangeEvent` |
| Instance | `<Component><Part>Instance`      | `SelectRootInstance`     |

Instance types come up more often than they did in v10. A render-prop child receives one, so the function inside `<Select.List>` or `<DataTable.TBody>` is typed against the part's instance.

A couple of v10 habits no longer apply. Component classes are gone, so `React.RefObject<Dropdown>` becomes an element ref or an instance type. The shared `FormEvent<T>` base is gone too, and each event type stands on its own.

## Templates

Every `*Template` prop in v10 has a compound part in v11:

```jsx
// v10
<Dropdown itemTemplate={(option) => <div>{option.name}</div>} valueTemplate={selectedTemplate} panelFooterTemplate={footer} />
```

```jsx
// v11
<Select.List>
    {categories.map((cat, index) => (
        <Select.Option key={cat.value} index={index} uKey={cat.value}>
            <span>{cat.label}</span>
            <Tag severity="secondary" rounded>
                {cat.count}
            </Tag>
        </Select.Option>
    ))}
</Select.List>
<Select.Footer>…</Select.Footer>
```

The part receives the same data the template did, but as a real element: it accepts `className`, `ref`, event handlers and its own children. Leaving `<Select.List />` empty renders the options from `Root` with no markup to write, and a function child is available when the list needs the component's own state, such as filtered results.

Pass Through survived alongside templates and is covered under [Theming](#pass-through). The v10 Dropdown exposed keys like `panel`, `wrapper` and `itemLabel`, while the v11 Select exposes its parts, `root`, `trigger`, `value`, `popup`, `list`, `option`. The [Pass Through guide](../misc/passthrough.md) documents the current shape.

## Components

The sections below are in alphabetical order, under the v10 name so an existing codebase can be worked through as it reads. Each one lists what carried over unchanged, what was renamed, what became a part, and what has no counterpart.

Components not listed here kept their name and their props, and only need the new import path.

### Accordion

[Component documentation](../../components/accordion.md)

Accordion changed the same way Tabs did: panels are addressed by `value` instead of index.

```jsx
// v11
<Accordion.Root defaultValue="first">
    <Accordion.Panel value="first">
        <Accordion.Header>
            <Accordion.Trigger>Header I</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>…</Accordion.Content>
    </Accordion.Panel>
</Accordion.Root>
```

`multiple` and `tabIndex` carry over. `activeIndex` → `value`, `onTabChange` → `onValueChange`, and `AccordionTab` → `<Accordion.Panel>`. The `expandIcon` / `collapseIcon` pair became `<Accordion.Indicator>`, or an icon inside the trigger styled by open state.

`onTabOpen` and `onTabClose` collapsed into `onValueChange`. New: root-level `disabled` and `openOnFocus`.

### AutoComplete

[Component documentation](../../components/autocomplete.md)

Parts: Root, Input, Value, Trigger, Indicator, Arrow, Clear, Portal, Positioner, Popup, List, Option, OptionIndicator, Header, Footer, Empty.

Carried over: value, disabled, invalid, name, multiple, autoFocus, minLength, delay, forceSelection, optionGroupLabel, optionGroupChildren.

These renames touch every AutoComplete usage:

| v10               | v11                  |
| ----------------- | -------------------- |
| `suggestions`     | `options`            |
| `completeMethod`  | `onComplete`         |
| `field`           | `optionLabel`        |
| `onChange` (text) | `onInputValueChange` |
| `onChange` (pick) | `onValueChange`      |

The last two are the ones to watch. v10 routed both the typed text and the selection through a single `onChange`; v11 separates them.

| v10                                       | v11                                                      |
| ----------------------------------------- | -------------------------------------------------------- |
| `dropdown`, `dropdownIcon`                | `<AutoComplete.Trigger>` with `<AutoComplete.Indicator>` |
| `itemTemplate`                            | `<AutoComplete.Option>`                                  |
| `selectedItemTemplate`, `removeTokenIcon` | `<AutoComplete.Value>`                                   |
| `emptyMessage`                            | `<AutoComplete.Empty>`                                   |
| `panelFooterTemplate`                     | `<AutoComplete.Footer>`                                  |
| Input-level props                         | `<AutoComplete.Input as={InputText}>`                    |

Dropped: selectionLimit, virtualScrollerOptions, dropdownAutoFocus, transitionOptions.

The ref methods `focus()`, `getInput()`, `getOverlay()` are gone. Element access goes through refs on the individual parts.

### Avatar

[Component documentation](../../components/avatar.md)

Parts: Root, Image, Fallback.

`image` and `imageAlt` became `<Avatar.Image>`, and `label` and `icon` became `<Avatar.Fallback>`. Which is also what `imageFallback` and `onImageError` turn into, since the fallback now renders when the image fails without needing a callback.

`shape` and `size` moved to the styled layer. `template` is gone because children cover it.

### Breadcrumb

[Component documentation](../../components/breadcrumb.md)

```jsx
// v10
<BreadCrumb model={items} home={{ icon: 'pi pi-home', url: '/' }} />
```

```jsx
// v11
<Breadcrumb.Root>
    <Breadcrumb.List>
        <Breadcrumb.Item>
            <Breadcrumb.Link href="/">
                <Home />
            </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
            <Breadcrumb.Current>Current Page</Breadcrumb.Current>
        </Breadcrumb.Item>
    </Breadcrumb.List>
</Breadcrumb.Root>
```

Parts: Root, List, Item, Link, Current, Separator, Ellipsis.

The `model` array is gone. Items are written as markup, which is the pattern across the whole menu family in v11. A breadcrumb link can be a Next.js `<Link>`, a router link, or anything else, instead of a `url` string the component turns into an anchor.

`home` has no separate concept; the first item is the home item. `separatorIcon` became `<Breadcrumb.Separator>`, and an `Ellipsis` part was added for truncating long trails.

### Button

[Component documentation](../../components/button.md)

Button is still a single element, not a compound component, so only props changed.

```jsx
// v10
<Button label="Save" icon="pi pi-check" severity="secondary" outlined />
```

```jsx
// v11
<Button severity="secondary" variant="outlined">
    <Check /> Save
</Button>
```

`label` is gone. The text is children now, which is also what makes icon placement work without a dedicated prop. To put an icon after the text, write it after the text; `iconPos` has no v11 counterpart because ordering is expressed directly.

The three appearance booleans collapsed into one prop. `text`, `outlined` and `link` in v10 were separate flags that could contradict each other; v11 has `variant="text" | "outlined" | "link"`, and leaving it off gives the filled button.

Carried over unchanged: `severity`, `size`, `disabled`, `rounded`, `raised`, `plain`.

New in v11: `iconOnly`, which handles the square icon-button shape, and `fluid` for full width.

Two v10 props moved out of Button entirely. `badge` and `badgeClassName` became the `OverlayBadge` component wrapped around the button, and `tooltip` / `tooltipOptions` became the `Tooltip` component wrapped around the trigger:

```jsx
<OverlayBadge>
    <Button iconOnly variant="text" severity="secondary" rounded aria-label="Notifications">
        <Bell />
    </Button>
    <Badge severity="danger" shape="circle" size="small">
        3
    </Badge>
</OverlayBadge>
```

More markup for the simple case, but the badge is no longer restricted to buttons, and it takes the full Badge API (severity, shape, size) instead of the single string `badge` accepted.

### Calendar → DatePicker

[Component documentation](../../components/datepicker.md)

Calendar carried around 100 props. DatePicker splits them across roughly 40 parts, so the mapping is long, but the pattern is the same as Select: data and behaviour stayed, appearance moved.

**Unchanged.** Date and time behaviour is untouched.

dateFormat, selectionMode, numberOfMonths, view, minDate, maxDate, showTime, timeOnly, hourFormat, stepHour, stepMinute, stepSecond, showSeconds, showWeek, selectOtherMonths, showOnFocus, autoFocus, disabled, name

**Renamed.**

| v10                 | v11             |
| ------------------- | --------------- |
| `onChange`          | `onValueChange` |
| `onSelect`          | `onDateSelect`  |
| `visible`           | `open`          |
| `onShow` / `onHide` | `onOpenChange`  |
| `readOnlyInput`     | `manualInput`   |

**Moved into parts.**

| v10                     | v11                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| `showIcon`, `icon`      | `<DatePicker.Trigger>`                                                                    |
| `dateTemplate`          | Children of `<DatePicker.TableBodyCell>`                                                  |
| `headerTemplate`        | `<DatePicker.Header>`                                                                     |
| `footerTemplate`        | `<DatePicker.Footer>`                                                                     |
| `showButtonBar`         | `<DatePicker.Buttonbar>` with `<DatePicker.Today>` and `<DatePicker.ClearTrigger>`        |
| `monthNavigator`        | `<DatePicker.SelectMonth>`                                                                |
| `yearNavigator`         | `<DatePicker.SelectYear>`                                                                 |
| `prevIcon` / `nextIcon` | Children of `<DatePicker.Prev>` / `<DatePicker.Next>`                                     |
| `inline`                | Drop the `Portal`, `Positioner` and `Popup` wrappers, render `<DatePicker.Body>` directly |

**Dropped.**

disabledDates, disabledDays, enabledDates, yearRange, mask, maskSlotChar, keepInvalid, showOtherMonths, hideOnRangeSelection, showMillisec, viewDate

**New.** `updateModelType`, `timeSeparator`, `onYearChange`, `closeOnEscape`, `trapped`, `fluid`, plus month and year grids through `<DatePicker.TableBody view="month">`.

`locale` is no longer a component prop. Month names, day names, `firstDayOfWeek` and `dateFormat` come from the global locale registry. See the [internationalization guide](../misc/internationalization.md).

### Card

[Component documentation](../../components/card.md)

```jsx
// v10
<Card title="Title" subTitle="Subtitle" header={<img src="…" />} footer={<Button label="Save" />}>
    Content
</Card>
```

```jsx
// v11
<Card.Root>
    <Card.Header>
        <img src="…" />
    </Card.Header>
    <Card.Body>
        <Card.Caption>
            <Card.Title>Title</Card.Title>
            <Card.Subtitle>Subtitle</Card.Subtitle>
        </Card.Caption>
        <Card.Content>Content</Card.Content>
        <Card.Footer>
            <Button>Save</Button>
        </Card.Footer>
    </Card.Body>
</Card.Root>
```

Parts: Root, Header, Body, Caption, Title, Subtitle, Content, Footer.

Every v10 prop was a slot in disguise, so all five: `title`, `subTitle`, `header`, `footer` and children, became parts. Card has no behavioural props left.

### Carousel

[Component documentation](../../components/carousel.md)

Parts: Root, Content, Item, Prev, Next, Indicators, Indicator.

v11's Carousel is built on CSS scroll snapping, which changes several props: `circular` → `loop`, `numVisible` → `slidesPerPage`, and `responsiveOptions` is gone because breakpoints are ordinary responsive CSS now. New props follow the scroll-snap model: `align`, `snapType`, `spacing`, `autoSize`.

`value` with `itemTemplate` became explicit `<Carousel.Item>` children. `showNavigators` and `showIndicators` became the presence of `<Carousel.Prev>` / `<Carousel.Next>` and `<Carousel.Indicators>`.

Autoplay was dropped: `autoplayInterval` and the `startAutoplay()` / `stopAutoplay()` methods have no counterpart, so an auto-advancing carousel is a timer calling `onPageChange`.

### Checkbox

[Component documentation](../../components/checkbox.md)

```jsx
// v10
<Checkbox checked={checked} onChange={(e) => setChecked(e.checked)} />
```

```jsx
// v11
<Checkbox.Root checked={checked} onCheckedChange={(e) => setChecked(e.checked)}>
    <Checkbox.Box>
        <Checkbox.Indicator match="checked">
            <Check />
        </Checkbox.Indicator>
    </Checkbox.Box>
</Checkbox.Root>
```

Parts: Root, Box, Indicator.

Carried over: checked, value, name, disabled, readOnly, required, tabIndex, invalid, inputId, trueValue, falseValue.

`onChange` became `onCheckedChange`.

The `icon` prop became `<Checkbox.Indicator match="checked">`. The `match` prop shows up across the library: an indicator renders only in the state it names. A checkbox can carry separate marks for `checked`, `unchecked` and `indeterminate` without a single conditional.

New: `defaultChecked`, `indeterminate`, `size`, `variant`. Grouping is handled by the `CheckboxGroup` component instead of wiring `name` and state by hand.

### Chip

[Component documentation](../../components/chip.md)

Parts: Root, Start, Label, End, Remove.

```jsx
// v11
<Chip.Root>
    <Chip.Label>Apple</Chip.Label>
    <Chip.Remove>
        <Times />
    </Chip.Remove>
</Chip.Root>
```

`label` → `<Chip.Label>`, `icon` and `image` → `<Chip.Start>`, `removable` and `removeIcon` → `<Chip.Remove>`. The `Start` and `End` parts accept anything, so an avatar, a badge or a spinner can sit in a chip without a template prop.

### Chips → InputTags

[Component documentation](../../components/inputtags.md)

```jsx
// v10
<Chips value={value} onChange={(e) => setValue(e.value)} />
```

Parts: Root, Items, Control.

Unchanged: value, disabled, invalid, variant, max, allowDuplicate, addOnBlur, name, onAdd, onRemove.

`separator` became `delimiter`.

The chip markup is now a render-prop on `<InputTags.Items>`, which receives each item plus its remove handler, and the text input is supplied through `<InputTags.Control>`. That is why `removable` and `removeIcon` disappeared: both are decided by whatever the render-prop returns, usually `Chip.Root` / `Chip.Label` / `Chip.Remove`.

New: `inputValue` / `defaultInputValue` / `onInputValueChange` for controlling the text buffer, plus `addOnPaste` and `addOnTab`.

### ColorPicker → InputColor

[Component documentation](../../components/inputcolor.md)

The rename understates the change: v10 shipped one saturation box with a hue strip, v11 exposes the pieces.

Parts: Root, Area, AreaBackground, AreaHandle, Slider, SliderTrack, SliderHandle, Swatch, SwatchBackground, TransparencyGrid, Input, EyeDropper.

| v10            | v11                                                    |
| -------------- | ------------------------------------------------------ |
| `value`        | Same                                                   |
| `format`       | Same, but the default changed from `'hex'` to `'hsba'` |
| `onChange`     | `onValueChange`                                        |
| `defaultColor` | `defaultValue`, taking `parseColor('#276def')`         |

Two defaults changed in ways that are easy to miss: `format` defaults to `'hsba'` instead of `'hex'`, and the component renders inline. The v10 popup form is built by wrapping `<InputColor.Root>` in a `Popover`, which is where `appendTo`, `panelClassName` and `onShow`/`onHide` went.

New: alpha and hue sliders through `<InputColor.Slider channel="alpha">`, a channel-bound text input through `<InputColor.Input channel="hex">` (also `rgb`, `hsl`, `oklch` channels), `<InputColor.EyeDropper>`, `<InputColor.TransparencyGrid>`, and `onValueChangeEnd` for committing only when a drag finishes.

### ConfirmDialog

[Confirmation example](../../components/dialog.md#confirmation)

There is no `ConfirmDialog` component and no `confirmDialog()` service. Two replacements, depending on which part of v10's behaviour matters.

For a confirm attached to a trigger, compose a Dialog, `<Dialog.Content>` for the message, two `<Dialog.Close as={Button}>` for accept and reject. The `confirmation-demo` under Dialog shows it.

For the imperative case, a confirm raised from arbitrary code, `createOverlayManager` from `@primereact/core/overlay-manager` produces an `open(key, payload)` function and a `<Viewport />` to render into. It is a factory rather than a prebuilt confirm, so the payload type and the dialog markup are defined once in application code.

`accept`, `reject`, `acceptLabel`, `rejectLabel` and their icon and class variants are gone; those are props on the two buttons now.

### DataTable

[Component documentation](../../components/datatable.md)

DataTable is the biggest change in the library. v10 exposed roughly 149 props on the table plus a `<Column>` component with its own set. v11 spreads the same functionality across more than 40 parts.

```jsx
// v10
<DataTable value={products} paginator rows={10}>
    <Column field="code" header="Code" sortable />
    <Column field="name" header="Name" body={(row) => <b>{row.name}</b>} />
</DataTable>
```

```jsx
// v11
<DataTable.Root data={products}>
    <DataTable.TableContainer>
        <DataTable.Table>
            <DataTable.THead>
                <DataTable.THeadRow>
                    <DataTable.THeadCell>
                        <DataTable.THeadTitle>Code</DataTable.THeadTitle>
                    </DataTable.THeadCell>
                    <DataTable.THeadCell>
                        <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                    </DataTable.THeadCell>
                </DataTable.THeadRow>
            </DataTable.THead>
            <DataTable.TBody>
                {({ item }) => (
                    <DataTable.Row key={item.id}>
                        <DataTable.Cell>{item.code}</DataTable.Cell>
                        <DataTable.Cell>
                            <b>{item.name}</b>
                        </DataTable.Cell>
                    </DataTable.Row>
                )}
            </DataTable.TBody>
        </DataTable.Table>
    </DataTable.TableContainer>
</DataTable.Root>
```

#### Why `<Column>` had to go

v10's Column was not a component. The entire source file was this:

```js
export const Column = () => {};
```

It rendered nothing. DataTable walked `props.children` with `React.Children.toArray`, read `column.props` off each element, and built the table itself. `<Column>` was a configuration object wearing JSX syntax.

That distinction explains a set of limitations that were hard to work around:

- **Columns could not be extracted into their own file.** A `<PriceColumn />` that returned a `<Column>` broke the table, because DataTable was looking for `__TYPE: 'Column'` on its direct children, not for whatever a custom component rendered. Column definitions had to be written inline, in one place, every time.
- **Columns could not be composed or reused.** No wrapper, no `map` over a shared column config that returned custom components, no conditional column built from a helper. The only reuse available was copying props between call sites.
- **Column markup was limited to what `body` returned.** The `<td>` itself belonged to DataTable. Adding a `colSpan`, a `ref`, a `data-*` attribute or an event handler to the cell was not possible, only to what went inside it.
- **Headers were strings or a `header` template.** Anything beyond text meant a template function, and that function could not reach the `<th>` element around it.

In v11, `<DataTable.Cell>` is a `<td>` and `<DataTable.THeadCell>` is a `<th>`. A column is markup, so it can live in another file, be produced by a loop, wrapped by a component, or rendered conditionally:

```jsx
// A reusable column component. Not possible in v10.
function PriceCell({ value }) {
    return <DataTable.Cell className="text-right tabular-nums">{value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</DataTable.Cell>;
}
```

#### Column props became parts

| v10 `<Column>` prop     | v11                                                   |
| ----------------------- | ----------------------------------------------------- |
| `field`, `header`       | `<DataTable.THeadCell>` with `<DataTable.THeadTitle>` |
| `body`                  | Children of `<DataTable.Cell>`                        |
| `footer`                | `<DataTable.TFootCell>`                               |
| `sortable`              | `<DataTable.Sort>` with `<DataTable.SortIndicator>`   |
| `filter` and its family | `<DataTable.Filter>`                                  |
| `selectionMode`         | `<DataTable.Selection>`                               |
| `expander`              | `<DataTable.RowToggle>`                               |
| `rowEditor`             | `<DataTable.RowEditor>`                               |
| `editor`                | `<DataTable.CellEditor>`                              |
| `rowReorder`            | `<DataTable.RowReorder>`                              |
| `reorderable`           | `<DataTable.ColumnReorder>`                           |
| `resizeable`            | `<DataTable.ColumnResizer>`                           |
| `colSpan`, `rowSpan`    | Native attributes on the cell                         |

#### Table props

| v10            | v11                |
| -------------- | ------------------ |
| `value`        | `data`             |
| `selection`    | `selectionKeys`    |
| `first`        | `page`             |
| `expandedRows` | `expandedKeys`     |
| `editingRows`  | `editingKeys`      |
| `groupRowsBy`  | `groupField`       |
| `onPage`       | `onPageChange`     |
| `onSort`       | `onSortChange`     |
| `onRowToggle`  | `onExpandedChange` |

Most behaviour props kept their names: dataKey, loading, lazy, totalRecords, scrollable, scrollHeight, sortField, sortOrder, removableSort, selectionMode, metaKeySelection, rows, paginator, reorderableColumns, resizableColumns, editMode, filters, globalFilter, rowHover, size, stripedRows, showGridlines.

The imperative methods need attention. `dt.current.exportCSV()` became the `<DataTable.Export>` part, backed by the `useDataTableExport` hook. The rest: `reset()`, `filter()`, `closeEditingCell()`, `saveState()`, `restoreState()`, have no direct replacement; they are handled through controlled state props or the feature hooks under `@primereact/headless/datatable/features`. State persistence via `stateKey` / `stateStorage` was dropped entirely, so saving and restoring table state is now application code.

Also dropped: `responsiveLayout` and `breakpoint`, `virtualScrollerOptions` (virtualization is the `useVirtualizer` hook now), cell selection, `selectAll`, `currentPageReportTemplate`, and every `*Icon` prop.

New: `treeMode`, which is how TreeTable is written in v11, plus `<DataTable.ColumnToggle>` and keyboard navigation through `useDataTableKeyboard`.

### DataView

[Component documentation](../../components/dataview.md)

Parts: Root, Header, Content, Footer, Empty.

DataView became a layout shell. `layout` carries over with `defaultLayout` and `onLayoutChange`, but the data props did not: `value`, `lazy`, `loading`, `sortField`, `sortOrder` and the entire paginator prop set are gone.

Items are rendered as children inside `<DataView.Content>`, and paging is a `Paginator` composed into `<DataView.Footer>`. The `DataViewLayoutOptions` sub-component has no equivalent. A `ToggleButtonGroup` driving `onLayoutChange` covers it.

### Dialog

[Component documentation](../../components/dialog.md)

```jsx
// v10
const [visible, setVisible] = useState(false);

<Button label="Show" onClick={() => setVisible(true)} />
<Dialog header="Edit Profile" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
    …
</Dialog>
```

```jsx
// v11
<Dialog.Root>
    <Dialog.Trigger as={Button}>Edit Profile</Dialog.Trigger>
    <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
            <Dialog.Popup style={{ width: '24rem' }}>
                <Dialog.Header>
                    <Dialog.Title>Edit Profile</Dialog.Title>
                    <Dialog.HeaderActions>
                        <Dialog.Close as={Button} rounded variant="text" iconOnly>
                            <Times />
                        </Dialog.Close>
                    </Dialog.HeaderActions>
                </Dialog.Header>
                <Dialog.Content>…</Dialog.Content>
                <Dialog.Footer>
                    <Dialog.Close as={Button} severity="secondary" variant="outlined">
                        Cancel
                    </Dialog.Close>
                </Dialog.Footer>
            </Dialog.Popup>
        </Dialog.Positioner>
    </Dialog.Portal>
</Dialog.Root>
```

The `useState` disappeared. `<Dialog.Trigger>` opens and `<Dialog.Close>` closes, so the common case needs no state at all. Controlled usage is still available through `open` / `defaultOpen` / `onOpenChange` when something outside the dialog has to drive it.

Both `Trigger` and `Close` take `as={Button}`, so they are real buttons with the full Button API instead of a `closeIcon` prop and a fixed layout.

Carried over: modal, closeOnEscape, blockScroll, draggable, position, baseZIndex, keepInViewport.

| v10                     | v11                                          |
| ----------------------- | -------------------------------------------- |
| `visible`               | `open`                                       |
| `onHide`                | `onOpenChange`                               |
| `dismissableMask`       | `dismissable`                                |
| `maximized`             | `fullScreen`                                 |
| `header`                | `<Dialog.Header>` with `<Dialog.Title>`      |
| `footer`                | `<Dialog.Footer>`                            |
| `closable`, `closeIcon` | `<Dialog.Close>`                             |
| `maximizable`           | `<Dialog.Maximizable>`                       |
| `icons`                 | `<Dialog.HeaderActions>`                     |
| `appendTo`              | `<Dialog.Portal>`                            |
| mask                    | `<Dialog.Backdrop>`                          |
| `*ClassName`, `*Style`  | `className` and `style` on the matching part |

**Dropped.** `resizable` with its resize callbacks, `breakpoints`, `rtl`, `transitionOptions`, `onMaskClick`, `onShow`.

**New.** `scrollBehavior`, `autoZIndex`, `onExitComplete`, and the `Positioner` part.

### Divider

[Component documentation](../../components/divider.md)

`layout` became `orientation`; `align` and `type` carry over unchanged.

### Dropdown → Select

[Component documentation](../../components/select.md)

```jsx
// v10
<Dropdown value={city} onChange={(e) => setCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" />
```

```jsx
// v11
<Select.Root value={city} onValueChange={(e) => setCity(e.value)} options={cities} optionLabel="name">
    <Select.Trigger>
        <Select.Value placeholder="Select a City" />
        <Select.Indicator>
            <ChevronDown />
        </Select.Indicator>
    </Select.Trigger>
    <Select.Portal>
        <Select.Positioner>
            <Select.Popup>
                <Select.List />
            </Select.Popup>
        </Select.Positioner>
    </Select.Portal>
</Select.Root>
```

Parts: Root, Trigger, Value, Indicator, Clear, Arrow, Portal, Positioner, Popup, Header, Filter, List, Option, OptionIndicator, Empty, Footer.

The data props are untouched: options, optionLabel, optionValue, optionDisabled, optionGroupLabel, optionGroupChildren, disabled, invalid, variant, autoFocus, autoOptionFocus, selectOnFocus, focusOnHover.

`onChange` became `onValueChange`, `onShow` and `onHide` became `onOpenChange`, and `dataKey` became `optionKey`.

Everything visual moved to a part:

- `placeholder` → `<Select.Value placeholder>`
- `valueTemplate` → children of `<Select.Value>`
- `itemTemplate` → children of `<Select.Option>`
- `dropdownIcon` → `<Select.Indicator>` with the icon as its child
- `showClear` + `clearIcon` → `<Select.Clear>`
- `emptyMessage` → `<Select.Empty>`
- `panelFooterTemplate` → `<Select.Footer>`
- `panelClassName` / `panelStyle` → `className` / `style` on `<Select.Popup>`
- `appendTo` → `<Select.Portal>`
- `scrollHeight` → a `max-height` on `<Select.List>`

Two changes need more than a rename.

**Filtering is now explicit.** v10 accepted `filter`, `filterBy`, `filterMatchMode` and `filterDelay` and did the work internally. v11 gives `<Select.Header>` with a `<Select.Filter>` input and expects the `options` array to be filtered in application code. More lines, but the filter is no longer a black box: fuzzy matching, remote search or a debounce all become ordinary code instead of a prop that either fits the requirement or doesn't.

**`editable` has no counterpart.** A Select that accepts free text is `AutoComplete` in v11.

Dropped without replacement: `maxLength`, `loading`, `loadingIcon`, `resetFilterOnHide`, `useOptionAsValue`, `showFilterClear`.

New: `multiple` (which is how MultiSelect is written now), `metaKeySelection`, `closeOnEscape`, `trapped`, `size`, `fluid`, and the whole `<Select.Positioner>` placement system.

### Fieldset

[Component documentation](../../components/fieldset.md)

Parts: Root, Legend, Title, Trigger, Indicator, Content.

The same shape as Panel, including the inverted state prop: `legend` became `<Fieldset.Legend>` with `<Fieldset.Title>`, `toggleable` became the presence of `<Fieldset.Trigger>`, and `collapsed` became `open` with `defaultOpen` defaulting to `true`.

### FileUpload

[Component documentation](../../components/fileupload.md)

Parts: Root, Content, Trigger, Upload, Clear, ItemGroup, Item, ItemPreview, ItemInfo, ItemName, ItemSize, ItemRemove.

The upload machinery carries over: name, url, multiple, accept, auto, maxFileSize, withCredentials, customUpload, uploadHandler, onSelect, onBeforeUpload, onUpload, onError, onProgress, onBeforeSend.

The three buttons became parts: `chooseLabel` and `chooseOptions` are `<FileUpload.Trigger>`, with `<FileUpload.Upload>` and `<FileUpload.Clear>` alongside. The file row is `<FileUpload.Item>` with `ItemPreview`, `ItemInfo`, `ItemName`, `ItemSize` and `ItemRemove` inside it, replacing `itemTemplate`.

`mode="basic"` is gone as a flag: a basic uploader is one that renders only `<FileUpload.Trigger>`.

The ref methods `getFiles()`, `setFiles()` and `getUploadedFiles()` are replaced by the render-prop on `Root`, which exposes the same state.

New: `fileLimit` with matching validation messages.

### FloatLabel and IconField

[Component documentation](../../components/floatlabel.md)

`FloatLabel` gained a `variant` prop with `over`, `in` and `on` values, covering what v10 split across separate components.

`IconField` has `Root` and `Inset` parts. `iconPosition` is gone: an `<IconField.Inset>` written before the input renders on the left, after it on the right. The separate `InputIcon` component from v10 is replaced by `Inset`.

### FocusTrap and StyleClass

[Component documentation](../../components/focustrap.md)

`StyleClass` kept its whole API: `nodeRef`, `selector`, and the enter/leave class name props. The deprecated `enterClassName` and `leaveClassName` aliases were removed. New: `hiddenClassName`, `hideOnResize`, `resizeSelector`.

`FocusTrap` gained real props where v10 had only `children`: `trapped`, `autoFocus`, `initialFocusRef`, `onEscape`, `onTabFirst`, `onTabLast`.

### Galleria → Gallery

[Single image example](../../components/gallery.md#single)

Parts: Root, Backdrop, Content, Item, Prev, Next, Header, Footer, Thumbnail, ThumbnailContent, ThumbnailItem, ZoomIn, ZoomOut, ZoomToggle, RotateLeft, RotateRight, FlipX, FlipY, Download, FullScreen.

`value` with `item` and `thumbnail` render-props became explicit children: items are mapped to `<Gallery.Item>` and thumbnails to `<Gallery.ThumbnailItem>`. `activeIndex` carries over with a new `defaultActiveIndex`, `onItemChange` became `onActiveIndexChange`, and `fullScreen` became `fullscreen` with `onFullscreenChange`.

Gallery gained an image viewer: zoom, rotate, flip and download parts that v10 did not have. This is also what replaces the v10 `Image` component. The `single-demo` shows a one-image preview with the full toolbar.

What it lost is the slideshow side: `autoPlay`, `transitionInterval`, `circular`, `numVisible`, `responsiveOptions`, `thumbnailsPosition` and the indicator dots have no counterparts.

### Inplace

[Component documentation](../../components/inplace.md)

Parts: Root, Display, Content, Close.

`InplaceDisplay` and `InplaceContent` became `<Inplace.Display>` and `<Inplace.Content>`. `active` gained `open` / `defaultOpen` / `onOpenChange` alongside it, and `closable` / `closeIcon` became `<Inplace.Close>`.

### InputNumber

[Component documentation](../../components/inputnumber.md)

Parts: Root, Group, Input, Increment, Decrement.

The formatting engine is untouched: format, locale, mode, prefix, suffix, currency, currencyDisplay, useGrouping, minFractionDigits, maxFractionDigits, roundingMode, min, max, step, allowEmpty.

The spinner buttons became parts: `showButtons`, `incrementButtonIcon` and `incrementButtonClassName` are now `<InputNumber.Increment>`, with `<InputNumber.Decrement>` alongside it, and `buttonLayout` became `layout` on `Root`. Input-level props go on `<InputNumber.Input>`.

New: `highlightOnFocus`, `variant`, `fluid`.

### InputOtp

[Component documentation](../../components/inputotp.md)

Parts: Root, Text.

`length` is gone, the number of cells is the number of `<InputOtp.Text index={n}>` children. `inputTemplate` disappears with it, since each cell is already an element that accepts `as` and children.

`value`, `mask`, `disabled` and `integerOnly` carry over; `onChange` became `onValueChange`.

### InputSwitch → ToggleSwitch

[Component documentation](../../components/toggleswitch.md)

```jsx
// v10
<InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
```

```jsx
// v11
<ToggleSwitch.Root checked={checked} onCheckedChange={(e) => setChecked(e.checked)}>
    <ToggleSwitch.Control>
        <ToggleSwitch.Handle />
    </ToggleSwitch.Control>
</ToggleSwitch.Root>
```

Parts: Root, Control, Handle.

Carried over: disabled, invalid, tabIndex, inputId, required, onFocus, onBlur.

`onChange` became `onCheckedChange`, and `defaultChecked` is available for uncontrolled use.

Icons that indicate on/off state go inside `<ToggleSwitch.Handle>`. V10 had no way to do this without pass-through styling.

Dropped: trueValue, falseValue, name, autoFocus.

### InputText

[Component documentation](../../components/inputtext.md)

A single component, not a compound one. `invalid` and `variant` carry over, native input attributes pass straight through.

`keyfilter` and `validateOnly` are gone: key filtering is the `useKeyFilter` hook now, applied to any input. `tooltip` became the `Tooltip` component wrapped around the field.

New: `size`, `fluid`, `as`.

### InputTextarea → Textarea

[Component documentation](../../components/textarea.md)

A rename plus a shorter prop list.

```jsx
<Textarea rows={5} cols={30} autoResize />
```

`autoResize`, `invalid` and `variant` carry over. Native textarea attributes pass straight through, so `onInput`, `onKeyDown`, `onPaste` and friends are no longer listed as props. `keyfilter` moved to the `useKeyFilter` hook.

New: `size`, `fluid`, and `as` for rendering a different element.

### Knob

[Component documentation](../../components/knob.md)

Parts: Root, Range, Value, Text.

Nearly everything carries over: value, size, step, min, max, strokeWidth, rangeColor, valueColor, textColor, readOnly, disabled.

`onChange` became `onValueChange`, and the handler receives an event object rather than the value alone. Uncontrolled use needs `defaultValue`, which v10 did not have.

`valueTemplate` became `<Knob.Text>`, and `showValue` became the presence or absence of that part. The colour props also exist per part, so `<Knob.Range color="…">` and `<Knob.Value color="…">` work alongside the root-level ones.

Dropped: `name`. New: `invalid`, `ariaLabel`, `ariaLabelledby`.

The colour defaults now resolve through design tokens, so a Knob follows the active theme without configuration.

### Listbox

[Component documentation](../../components/listbox.md)

Parts: Root, Header, Filter, List, Option, OptionIndicator, Footer, Empty.

Data props carry over unchanged: options, optionLabel, optionValue, optionDisabled, optionGroupLabel, optionGroupChildren, multiple, metaKeySelection, selectOnFocus, focusOnHover.

`dataKey` became `optionKey` and `onChange` became `onValueChange`.

Filtering follows the same rule as Select: `<Listbox.Filter>` supplies the input, application code filters the array. The `filterBy`, `filterMatchMode` and `filterLocale` props are gone.

One default changed: `autoOptionFocus` is now `true`, where v10 defaulted to `false`.

### Menu and the `model` prop

[Component documentation](../../components/menu.md)

Every v10 menu component took a `model` array of item descriptors:

```jsx
// v10
const items = [{ label: 'New', icon: 'pi pi-plus', command: () => create() }, { separator: true }, { label: 'Export', items: [{ label: 'CSV', command: () => exportCsv() }] }];

<Menu model={items} popup ref={menu} />;
```

No v11 menu component accepts `model`. Menus are markup:

```jsx
// v11
<Menu.Root>
    <Menu.Trigger as={Button}>Options</Menu.Trigger>
    <Menu.Portal>
        <Menu.Positioner>
            <Menu.Popup>
                <Menu.List>
                    <Menu.Item onClick={create}>
                        <Plus /> New
                    </Menu.Item>
                    <Menu.Separator />
                    <Menu.Submenu>
                        <Menu.SubmenuTrigger>
                            Export <Menu.SubmenuIndicator />
                        </Menu.SubmenuTrigger>
                        <Menu.Portal>
                            <Menu.Positioner>
                                <Menu.Popup>
                                    <Menu.List>
                                        <Menu.Item onClick={exportCsv}>CSV</Menu.Item>
                                    </Menu.List>
                                </Menu.Popup>
                            </Menu.Positioner>
                        </Menu.Portal>
                    </Menu.Submenu>
                </Menu.List>
            </Menu.Popup>
        </Menu.Positioner>
    </Menu.Portal>
</Menu.Root>
```

The translation is mechanical:

| v10 model key    | v11                       |
| ---------------- | ------------------------- |
| `item.label`     | Children of `<Menu.Item>` |
| `item.icon`      | An icon element           |
| `item.command`   | `onClick`                 |
| `item.items`     | A nested `<Menu.Submenu>` |
| `item.separator` | `<Menu.Separator>`        |
| `item.template`  | Just write the markup     |

This is more code than a `model` array, no question. What it buys is that a menu item is a React element: it can be a router `<Link>`, hold a badge or a keyboard shortcut hint, be conditionally rendered, or take a `ref`. In v10 anything beyond the fixed item shape required a `template` function, and a router link meant intercepting `command` to call `navigate()`. Losing middle-click and open-in-new-tab in the process.

Menu parts:

Root, Trigger, Portal, Positioner, Popup, List, Group, Label, Item, Separator, Arrow, Submenu, SubmenuTrigger, SubmenuIndicator, CheckboxItem, CheckboxItemIndicator, RadioItem, RadioItemGroup, RadioItemIndicator

`popup` is no longer a flag either. A popup menu includes the `Trigger` / `Portal` / `Positioner` / `Popup` wrappers; an inline menu renders `<Menu.List>` directly under `Root`.

The imperative `menu.current.toggle(e)` is replaced by `<Menu.Trigger>` or by controlling `open` / `onOpenChange`.

New: `openOnHover` with `openDelay` and `closeDelay`, plus `CheckboxItem` and `RadioItem` parts that v10 had no equivalent for.

### Menubar, MegaMenu, TieredMenu and ContextMenu

[NavBar example](../../components/navigationmenu.md#navbar)

`TieredMenu` is `Menu` with `Submenu` nesting. There is no separate component.

`MegaMenu` and `Menubar` are `NavigationMenu` wrapping one `Menu.Root` per top-level entry. The "mega" layout is grid classes on `<Menu.List>` rather than a two-dimensional `model` array. `start` and `end` are gone: arbitrary JSX goes inside `NavigationMenu` as siblings.

One thing v10 handled that v11 does not: the Menubar's built-in mobile hamburger. The navbar demo composes it from `Drawer` plus `Accordion` at the mobile breakpoint.

`ContextMenu` keeps `global` and the same part list as `Menu`. `cm.current.show(event)` is replaced by wrapping the target in `<ContextMenu.Trigger>`, which binds the right-click itself.

Dropped across the family: `scrollHeight`, `breakpoint`, `transitionOptions`, and the `submenuIcon` / `menuIcon` props, which became indicator parts.

### Message and Messages

[Dynamic example](../../components/message.md#dynamic)

`Message` parts: `Root`, `Icon`, `Content`, `Text`, `Close`.

`severity` carries over. `text` became `<Message.Text>`, `icon` became `<Message.Icon>`, and closability is the presence of `<Message.Close>` instead of a `closable` prop. New: `variant`, `size`, and `life` for auto-dismiss.

`Messages`, the plural component with its `show()`, `replace()` and `clear()` ref API, has no counterpart. An array of messages in state, mapped to `Message.Root`, covers the declarative case. For fire-and-forget notifications the intended replacement is `Toast` with the `toast()` function.

### MeterGroup

[Component documentation](../../components/metergroup.md)

Parts: Root, Meters, Meter, Labels, Label, Marker, Text.

`min`, `max` and `orientation` carry over. The `values` array became one `<MeterGroup.Meter value color>` per datum, and the label list became `<MeterGroup.Labels>` with `Label`, `Marker` and `Text` inside.

`labelPosition` and `labelOrientation` are gone: position is where the element is written, and `Labels` has its own `orientation`. The `start`, `end`, `meter` and `labelList` templates left with them, since each is a part now.

One detail the demos all include: `aria-valuenow` goes on `Root` explicitly, where v10 derived it.

### MultiSelect → Select with `multiple`

[Multiple example](../../components/select.md#multiple)

MultiSelect is not a separate component in v11.

```jsx
// v10
<MultiSelect value={selected} onChange={(e) => setSelected(e.value)} options={cities} optionLabel="name" display="chip" maxSelectedLabels={3} />
```

```jsx
// v11
<Select.Root multiple value={selected} onValueChange={(e) => setSelected(e.value)} options={cities} optionLabel="name">
    …
</Select.Root>
```

The parts and prop names are the Select ones above. What differs from a plain Select is how the trigger label is produced: `display`, `maxSelectedLabels` and `selectedItemsLabel` are gone, and the label is computed in application code as children of `<Select.Value>`. The `chip-demo` and `multiple-demo` under Select show both styles.

Checkbox-style option marks are `<Select.OptionIndicator>`, replacing `checkboxIcon` and `itemCheckboxIcon`.

`selectAll` and `showSelectAll` have no built-in counterpart. A select-all control goes in `<Select.Header>` and drives the value directly.

### OrganizationChart

[Component documentation](../../components/organizationchart.md)

Parts: Root, Nodes, Node, Content, Label, Toggle, ToggleIndicator, Selection.

`value` carries over, and `selectionMode` keeps its name while gaining a third value: `'single'`, `'multiple'` and now `'checkbox'`, which is what the `Selection` part renders.

| v10                          | v11                                                          |
| ---------------------------- | ------------------------------------------------------------ |
| `selection`                  | `selectionKeys`, `defaultSelectionKeys`, `onSelectionChange` |
| `expanded` flag on each node | `collapsedKeys`, `defaultCollapsedKeys`, `onCollapsedChange` |
| `nodeTemplate`               | `<OrganizationChart.Node>` with `Content` and `Label` inside |
| `togglerIcon`                | `<OrganizationChart.Toggle>` with `<ToggleIndicator>`        |

The gain is that collapse state left the data. v10 stored `expanded` on each node object, mixing view state into the structure being rendered.

A straight rewrite misses two things. `<OrganizationChart.Nodes>` takes a render function rather than static children, and each `<OrganizationChart.Node>` needs a `uKey` for selection and collapse keys to resolve against.

```jsx
<OrganizationChart.Nodes>{({ node }) => <OrganizationChart.Node uKey={node.key}>…</OrganizationChart.Node>}</OrganizationChart.Nodes>
```

Dropped: `onNodeSelect` and `onNodeUnselect`. Selection changes come through `onSelectionChange` only.

New: `gap`, which takes a number or an `[x, y]` pair and defaults to `[40, 56]`.

### OverlayPanel → Popover

[Component documentation](../../components/popover.md)

OverlayPanel was opened and closed through its ref, so this one changes how the surrounding code is written.

```jsx
// v10
const op = useRef(null);

<Button label="Image" onClick={(e) => op.current.toggle(e)} />
<OverlayPanel ref={op}>
    <img src="…" />
</OverlayPanel>
```

```jsx
// v11
<Popover.Root>
    <Popover.Trigger as={Button}>Image</Popover.Trigger>
    <Popover.Portal>
        <Popover.Positioner>
            <Popover.Popup>
                <Popover.Content>
                    <img src="…" />
                </Popover.Content>
            </Popover.Popup>
        </Popover.Positioner>
    </Popover.Portal>
</Popover.Root>
```

`op.current.toggle(e)`, `.show()`, `.hide()` and `.align()` are all replaced by `<Popover.Trigger>` plus the `open` / `onOpenChange` pair. The ref and the click handler both go away.

Positioning, which `align()` handled implicitly, is now declarative on `<Popover.Positioner>`: `side`, `align`, `sideOffset`, `alignOffset`, `flip`, `shift` and `strategy`. An `anchor` prop covers the case where the popover attaches to something other than its trigger.

Parts: Root, Trigger, Portal, Positioner, Popup, Arrow, Header, Title, Content, Description, Footer, Close.

New relative to v10: `Arrow`, `Header`, `Title`, `Description` and `Footer` parts, `trapped` for focus management, and `onExitComplete`.

### Paginator

[Component documentation](../../components/paginator.md)

The counting changed, so a mechanical rename leaves the pagination off by a page.

v10 tracked a record offset: `first` was the index of the first record on the page, and `rows` the page size. v11 tracks a page number: `page` is 1-based, and `itemsPerPage` is the size. Code that passed `first={20}` for the third page of ten now passes `page={3}`.

Parts: Root, Content, First, Prev, Pages, Page, Ellipsis, Next, Last.

| v10            | v11            |
| -------------- | -------------- |
| `totalRecords` | `total`        |
| `rows`         | `itemsPerPage` |
| `first`        | `page`         |
| `pageLinkSize` | `siblings`     |

The `template` string that selected which controls appeared is gone, controls are the parts that get rendered. `rowsPerPageOptions` with its dropdown, `currentPageReportTemplate` and the jump-to-page input all left with it; each is composed from existing components when needed.

New: `siblings` and `edges` for controlling how many page links show, `showEllipsis`, and `disabled`.

### Panel

[Component documentation](../../components/panel.md)

```jsx
// v10
<Panel header="Header" toggleable collapsed={collapsed} onToggle={(e) => setCollapsed(e.value)}>
    Content
</Panel>
```

```jsx
// v11
<Panel.Root>
    <Panel.Header>
        <Panel.Title>Header</Panel.Title>
        <Panel.Trigger>
            <Panel.Indicator />
        </Panel.Trigger>
    </Panel.Header>
    <Panel.Content>Content</Panel.Content>
    <Panel.Footer>…</Panel.Footer>
</Panel.Root>
```

Parts: Root, Header, Title, Trigger, Indicator, Content, Footer.

`toggleable` is no longer a flag, including a `<Panel.Trigger>` is what makes a panel collapsible, and omitting it makes a static panel.

The state prop inverted, which is easy to miss because both versions compile: v10's `collapsed` became v11's `open`, with `defaultOpen` for uncontrolled use. A panel written as `collapsed={true}` becomes `open={false}`, and `defaultOpen` is `true`, so a panel with no state prop starts expanded. `onExpand` and `onCollapse` became `onOpen` and `onClose`, with `onOpenChange` covering both.

`expandIcon` / `collapseIcon` became `<Panel.Indicator>` or an icon inside the trigger.

`headerTemplate` and `footerTemplate` are gone because `<Panel.Header>` and `<Panel.Footer>` already accept arbitrary children. A `Footer` part was added, which v10 only had as a prop.

### Password → InputPassword

[Component documentation](../../components/inputpassword.md)

InputPassword is a single component, not a compound one, and it renders `as={InputText}` by default.

`toggleMask` became a controlled `mask` boolean with `defaultMask` and `onMaskChange`, so the eye icon is now supplied by the application instead of built in. Usually through `IconField`.

The strength meter is gone as a feature. These have no counterparts:

feedback, promptLabel, weakLabel, mediumLabel, strongLabel, mediumRegex, strongRegex, header, content, footer

A strength panel is built with a `Popover`, and the `strength-demo` and `requirements-demo` pages show two versions of it. The trade is real: the built-in meter was one prop, but its rules were fixed and its markup was not reachable.

### ProgressBar

[Component documentation](../../components/progressbar.md)

Parts: Root, Track, Indicator, Label, Value.

`value`, `mode` and `showValue` carry over on `Root`. `displayValueTemplate` became `<ProgressBar.Value>`, and `color` moved to the theme layer rather than being a prop.

### ProgressSpinner

[Component documentation](../../components/progressspinner.md)

Parts: Root, Track, Range, Value.

`strokeWidth` carries over, now a number instead of a string. `fill` and `animationDuration` moved to CSS and tokens.

v11 added a determinate mode: `value`, `min` and `max`. Which v10 did not have.

### RadioButton

[Component documentation](../../components/radiobutton.md)

Parts: `Root`, `Box`, `Indicator`. The same shape as Checkbox, with `onChange` → `onCheckedChange` and a `RadioButtonGroup` component for grouping.

### Rating

[Component documentation](../../components/rating.md)

Parts: Root, Option, On, Off.

`stars` is gone, the star count is the number of `<Rating.Option index={n}>` children. `onIcon` and `offIcon` became `<Rating.On>` and `<Rating.Off>`, so the "on" state can be any element instead of an icon class.

Two changes to watch: `allowHalf` now defaults to `true`, and the cancel affordance (`cancel`, `cancelIcon`) was dropped.

### ScrollPanel → ScrollArea

[Component documentation](../../components/scrollarea.md)

Parts: Root, Viewport, Content, Scrollbar, Handle, Corner.

v10 had almost no API here: `style`, `className` and `step`. v11 exposes the structure: content goes inside `<ScrollArea.Viewport>` and `<ScrollArea.Content>`, and each scrollbar is a `<ScrollArea.Scrollbar orientation="vertical">` with a `<ScrollArea.Handle>`.

The `refresh()` method is gone; sizing is observed automatically. New: a `variant` for scrollbar visibility, `mask`, and a `Corner` part.

### SelectButton → ToggleButtonGroup

[Component documentation](../../components/togglebuttongroup.md)

```jsx
// v10
<SelectButton value={value} onChange={(e) => setValue(e.value)} options={['Off', 'On']} />
```

```jsx
// v11
<ToggleButtonGroup value={value} onValueChange={(e) => setValue(e.value)}>
    <ToggleButton.Root value="off">Off</ToggleButton.Root>
    <ToggleButton.Root value="on">On</ToggleButton.Root>
</ToggleButtonGroup>
```

`value`, `multiple`, `allowEmpty`, `disabled` and `invalid` carry over. The options array does not. Items are written as children now, so `options`, `optionLabel`, `optionValue`, `optionDisabled` and `itemTemplate` are gone. Per-item `disabled` sits on the individual `ToggleButton.Root`.

v10's `unselectable` is the inverse of `allowEmpty`, which defaults to `true`.

### Sidebar → Drawer

[Component documentation](../../components/drawer.md)

v10's `Sidebar` is v11's `Drawer`. There is also a component named `sidebar` in v11, but it is an application navigation shell, a different thing entirely. Mixing them up is the most likely mistake in this whole guide.

```jsx
// v10
<Sidebar visible={visible} onHide={() => setVisible(false)}>
    …
</Sidebar>
```

Parts: Root, Trigger, Portal, Backdrop, Popup, Header, Title, Close, Content, Footer.

Carried over: position, modal, blockScroll, dismissable, baseZIndex.

| v10        | v11                 |
| ---------- | ------------------- |
| `visible`  | `open`              |
| `onHide`   | `onOpenChange`      |
| `header`   | `<Drawer.Header>`   |
| close icon | `<Drawer.Close>`    |
| mask       | `<Drawer.Backdrop>` |
| `appendTo` | `<Drawer.Portal>`   |

`fullScreen` is gone; sizing is done with a class on `<Drawer.Popup>`. A `Footer` part was added.

### Slider

[Component documentation](../../components/slider.md)

Parts: Root, Track, Range, Handle.

`value`, `min`, `max`, `step`, `orientation` and `disabled` carry over. `onChange` became `onValueChange`, `onSlideEnd` became `onValueChangeEnd`.

The `range` prop is gone. A range slider is two `<Slider.Handle>` children. Which also means three or more handles work without any API change.

New: `minStepsBetweenHandles`, `readOnly`, `invalid`.

### SpeedDial

[Component documentation](../../components/speeddial.md)

Parts: Root, Trigger, List, Item, Action.

`direction`, `type`, `radius`, `transitionDelay` and `hideOnClickOutside` carry over with the same defaults. `visible` and `onVisibleChange` carry over, joined by `defaultVisible`.

`model` became children, with one caveat specific to SpeedDial: `<SpeedDial.Item>` takes an explicit `index`, which the radial positioning math needs.

`showIcon` / `hideIcon` and `buttonTemplate` became `<SpeedDial.Trigger as={Button}>`, and the rotate animation is a CSS class such as `data-open:rotate-45` rather than the `rotateAnimation` prop.

The `mask` props are gone. A mask is a `Motion` sibling rendered from the same visible state.

### Splitter

[Component documentation](../../components/splitter.md)

Parts: Root, Panel, Gutter, Handle.

| v10                        | v11                                                |
| -------------------------- | -------------------------------------------------- |
| `layout`                   | `orientation`                                      |
| `<SplitterPanel size>`     | `sizes` and `defaultSizes` on the root             |
| `gutterSize`               | Gone. Thickness is styling on `<Splitter.Gutter>`. |
| `stateKey`, `stateStorage` | Gone. Persisting sizes is application code now.    |

`minSize` did not move. It stays on the panel, joined by new `maxSize`, `collapsible` and `collapsedSize`.

The change that breaks a straight copy is the gutter. v10 inserted one between panels automatically; v11 expects it in the markup, so a splitter with only panels renders but does not resize:

```jsx
<Splitter.Root>
    <Splitter.Panel minSize={20}>…</Splitter.Panel>
    <Splitter.Gutter>
        <Splitter.Handle />
    </Splitter.Gutter>
    <Splitter.Panel>…</Splitter.Panel>
</Splitter.Root>
```

New: `onResizeStart` and `onResize` alongside `onResizeEnd`, an `onCollapse` callback, `disabled` on both the root and individual gutters, and a `panels` config array on the root as an alternative to declaring sizes per child.

### Steps → Stepper

[Steps only example](../../components/stepper.md#steps-only)

`Steps` is the Stepper without its panels.

```jsx
// v11
<Stepper.Root defaultValue="1">
    <Stepper.List>
        <Stepper.Step value="1">
            <Stepper.Header>
                <Stepper.Number>1</Stepper.Number>
                <Stepper.Title>Personal</Stepper.Title>
            </Stepper.Header>
        </Stepper.Step>
        <Stepper.Separator />
    </Stepper.List>
</Stepper.Root>
```

Parts: Root, List, Step, Header, Number, Title, Separator, Item, Content, Panel, Panels.

`activeIndex` became `value` and takes a string key instead of an index, matching Tabs and Accordion. `onSelect` became `onValueChange`. v10's `readOnly` inverted into `linear`, which defaults to `false`.

Steps-only is not a mode flag. It is what happens when the `Panels` parts are left out.

### TabView → Tabs

[Component documentation](../../components/tabs.md)

```jsx
// v10
<TabView>
    <TabPanel header="Header I">Content I</TabPanel>
    <TabPanel header="Header II">Content II</TabPanel>
</TabView>
```

```jsx
// v11
<Tabs.Root defaultValue="one">
    <Tabs.List>
        <Tabs.Tab value="one">Header I</Tabs.Tab>
        <Tabs.Tab value="two">Header II</Tabs.Tab>
        <Tabs.Indicator />
    </Tabs.List>
    <Tabs.Panels>
        <Tabs.Panel value="one">Content I</Tabs.Panel>
        <Tabs.Panel value="two">Content II</Tabs.Panel>
    </Tabs.Panels>
</Tabs.Root>
```

The important change is identity. v10 addressed tabs by index, v11 by a `value` string, so reordering tabs no longer silently changes which one is selected.

| v10           | v11                             |
| ------------- | ------------------------------- |
| `activeIndex` | `value` with `defaultValue`     |
| `onTabChange` | `onValueChange`                 |
| `<TabPanel>`  | `<Tabs.Tab>` and `<Tabs.Panel>` |

Tab headers are children of `<Tabs.Tab>`, so `header`, `headerTemplate`, `leftIcon` and `rightIcon` are gone, an icon is simply written inside the tab. The ink bar is `<Tabs.Indicator>`, and the scroll buttons are `<Tabs.Prev>` / `<Tabs.Next>`.

Dropped: `renderActiveOnly`, `closable` with `onTabClose`, `scrollable` (Prev/Next parts cover it), `onBeforeTabChange`.

New: `selectOnFocus` and `scrollStrategy`.

### Terminal

[Component documentation](../../components/terminal.md)

Parts: Root, Welcome, CommandList, Command, CommandPromptLabel, CommandValue, CommandResponse, Prompt, PromptLabel, PromptValue.

Terminal has a behavioural break, not just an API change. v10 routed command responses through `TerminalService`, a global event bus: a command was emitted, and any listener anywhere could respond. v11 replaces it with an `onCommand` callback on the component.

The practical difference is that responses are now local and typed instead of arriving through a singleton. Code that subscribed to `TerminalService` from another module needs restructuring, not renaming.

`welcomeMessage` became `<Terminal.Welcome>`, and `prompt` carries over.

### Timeline

[Component documentation](../../components/timeline.md)

Parts: Root, Event, Opposite, Separator, Marker, Connector, Content.

`align` carries over, `layout` became `orientation`. The `value` array with `content`, `opposite` and `marker` templates became explicit `<Timeline.Event>` children.

`Connector` is a new part: the line between markers can be styled or replaced per event, which the template approach could not do.

### Toast

[Component documentation](../../components/toast.md)

Toast changed more than any other component, and mostly for the better.

```jsx
// v10
const toast = useRef(null);

const show = () => toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });

<Toast ref={toast} />
<Button onClick={show} label="Show" />
```

```jsx
// v11
import { toast, Toaster } from '@primereact/ui/toaster';

<Button
    onClick={() =>
        toast({
            title: 'Successfully completed',
            description: 'The task was completed successfully.',
            group: 'basic'
        })
    }
>
    Create toast
</Button>;
```

`toast()` is a module-level function. No ref, no component instance to reach, so a toast can be raised from an event handler, a service module or a route loader without threading a ref through the tree. Alongside it: `toast.success`, `toast.info`, `toast.warn`, `toast.error`, plus `toast.update`, `toast.dismiss` and `toast.promise`.

The message shape changed: `summary` → `title`, `detail` → `description`, and `life` moved to the `Toaster` as a `timeout`.

Rendering is now explicit. A `<Toaster.Root>` with a `<Toaster.Region>` render-prop maps over `toaster.toasts` and renders a `<Toast.Root>` for each. That is more setup than dropping `<Toast ref={toast} />` into a layout, but it is what makes per-severity icons, an action button and custom layouts possible without pass-through overrides:

```jsx
<Toast.Icon match="success">
    <Check />
</Toast.Icon>
<Toast.Icon match="error">
    <Times />
</Toast.Icon>
```

New on the Toaster: `limit`, `gap`, and `mode` for stacked or expanded presentation.

### ToggleButton

[Component documentation](../../components/togglebutton.md)

Parts: Root, Indicator.

The semantics changed along with the names: `checked` became `pressed` and `onChange` became `onPressedChange`, because v11 renders a real `<button>` with `aria-pressed` rather than a checkbox-like control.

`onLabel` / `offLabel` and `onIcon` / `offIcon` collapsed into `<ToggleButton.Indicator>` plus children, with ordering deciding icon position, `iconPos` is gone.

### Toolbar

[Component documentation](../../components/toolbar.md)

```jsx
// v10
<Toolbar start={leftContent} center={centerContent} end={rightContent} />
```

```jsx
// v11
<Toolbar.Root>
    <Toolbar.Start>…</Toolbar.Start>
    <Toolbar.Center>…</Toolbar.Center>
    <Toolbar.End>…</Toolbar.End>
</Toolbar.Root>
```

Parts: `Root`, `Start`, `Center`, `End`. The deprecated v10 `left` and `right` aliases are gone along with the `start`/`center`/`end` props they duplicated.

### Tooltip

[Component documentation](../../components/tooltip.md)

```jsx
// v10
<Button label="Save" tooltip="Save the form" tooltipOptions={{ position: 'top' }} />
```

```jsx
// v11
<Tooltip.Root>
    <Tooltip.Trigger as={Button}>Save</Tooltip.Trigger>
    <Tooltip.Portal>
        <Tooltip.Positioner side="top">
            <Tooltip.Popup>Save the form</Tooltip.Popup>
        </Tooltip.Positioner>
    </Tooltip.Portal>
</Tooltip.Root>
```

Parts: Root, Trigger, Portal, Positioner, Popup, Arrow, Manager.

The `tooltip` prop that appeared on nearly every v10 component is gone everywhere. Tooltips wrap the element instead, so their content can be markup instead of a string.

| v10         | v11                | Note                        |
| ----------- | ------------------ | --------------------------- |
| `position`  | `side` and `align` | On `<Tooltip.Positioner>`   |
| `showDelay` | `openDelay`        | Default is now 600ms, was 0 |
| `hideDelay` | `closeDelay`       | Default is now 100ms, was 0 |
| `autoHide`  | `interactive`      | Defaults to `true`          |

`Tooltip.Manager` is new: an optional provider that shares timing across tooltips, so moving between adjacent triggers skips the open delay.

Dropped: `showEvent`, `hideEvent`, `mouseTrack`, `my` / `at`, `showOnDisabled`, `appendTo`.

### Tree

[Component documentation](../../components/tree.md)

Parts: Root, Header, Content, Nodes, Node, Label, Toggle, ToggleIndicator, Selection, Filter, DropIndicator, Loading, Empty, Footer.

`value`, `selectionMode`, `metaKeySelection`, `loading` and the expand/collapse callbacks carry over. Selection and expansion gained the uncontrolled halves: `defaultExpandedKeys` and `defaultSelectionKeys`.

Drag and drop was rebuilt: the single `dragdropScope` string became `draggable` and `droppable` with `draggableScope` / `droppableScope`, plus `onMove` and a `validateMove` callback that can reject a drop.

Templates became parts: `nodeTemplate` → `<Tree.Node>`, `togglerTemplate` and the expand/collapse icons → `<Tree.Toggle>` with `<Tree.ToggleIndicator>`, `checkboxIcon` → `<Tree.Selection>`, `emptyMessage` → `<Tree.Empty>`.

Filtering moved to the `useTreeFilter` hook, so `filter`, `filterBy`, `filterMode` and their relatives are gone. `propagateSelectionUp` and `propagateSelectionDown` were dropped as well.

### TreeSelect → Select with a Tree

[Tree example](../../components/select.md#tree)

TreeSelect is a composition: a `Select` whose popup holds a `Tree`.

The Select supplies `Trigger`, `Value`, `Portal`, `Positioner` and `Popup`; the Tree supplies the nodes and selection. The display label is computed in application code from the selected key. The demo walks the node path to build it.

`nodeTemplate` and `togglerTemplate` become Tree parts, `panelHeaderTemplate` and `panelFooterTemplate` become `<Select.Header>` and `<Select.Footer>`.

### TreeTable → DataTable with `treeMode`

[TreeTable documentation](../../components/treetable.md)

TreeTable is not a separate component in v11. A tree table is a DataTable with `treeMode` set and nested `children` on the data nodes, using the same parts as any other table.

```jsx
<DataTable.Root data={nodes} treeMode expandedKeys={expandedKeys} onExpandedChange={(e) => setExpandedKeys(e.value)}>
    …
    <DataTable.TBody>
        {({ item }) => (
            <DataTable.Row key={item.key}>
                <DataTable.Cell>
                    <DataTable.RowToggle>
                        <DataTable.RowToggleIndicator match="expanded">
                            <ChevronDown />
                        </DataTable.RowToggleIndicator>
                        <DataTable.RowToggleIndicator match="collapsed">
                            <ChevronRight />
                        </DataTable.RowToggleIndicator>
                    </DataTable.RowToggle>
                    {item.data.name}
                </DataTable.Cell>
            </DataTable.Row>
        )}
    </DataTable.TBody>
</DataTable.Root>
```

In v10 these were two separate implementations. `DataTable.js` was around 2,100 lines and `TreeTable.js` around 1,450, each with its own sorting, filtering, paging, selection, column resizing and reordering. The consequences were visible from the outside:

- Features arrived in one and not the other. A DataTable capability was not automatically a TreeTable capability, and the prop lists drifted apart.
- The two had separate bug surfaces. The same logical bug could exist in both and be fixed in one.
- Switching a flat table to a hierarchical one meant rewriting the component, not adding a prop.

In v11 there is one table. Turning on `treeMode` keeps every part, every feature and every piece of state exactly where it was, so a flat table becomes a tree by adding a prop and a toggle part.

Expansion state is `expandedKeys` with `defaultExpandedKeys`, and the toggle is `<DataTable.RowToggle>` holding `<DataTable.RowToggleIndicator match="expanded">` and its collapsed counterpart. The `<Column>` translation is the one described in the DataTable section above.

Dropped alongside the DataTable list: `propagateSelectionUp`, `propagateSelectionDown` and `frozenWidth`.

### VirtualScroller

`VirtualScroller` is not available in v11 yet. The package directories exist but are empty.

Virtualization is being worked on as the `useVirtualizer` hook, which the consumer applies to a list instead of the component embedding it. Until it ships, lists that relied on `virtualScrollerOptions` in DataTable, Listbox, Select or Tree have no built-in equivalent.

### Display components

These stayed single elements, so the migration is a rename or two at most.

| Component     | Carried over                                                    | Changed                                  |
| ------------- | --------------------------------------------------------------- | ---------------------------------------- |
| `Skeleton`    | `shape`, `size`, `width`, `height`, `borderRadius`, `animation` | Nothing                                  |
| `Badge`       | `severity`, `size`                                              | `value` is children now. Gained `shape`. |
| `Tag`         | `severity`, `rounded`                                           | `value` and `icon` are children now.     |
| `Divider`     | `align`, `type`                                                 | `layout` is `orientation`                |
| `AvatarGroup` | Wraps `Avatar` children as before                               | Nothing                                  |
| `ButtonGroup` | Wraps `Button` children as before                               | Nothing                                  |
| `InputGroup`  | Wraps input children as before                                  | Nothing                                  |

```jsx
// v10
<Tag value="New" severity="success" icon="pi pi-check" />
<Badge value="8" severity="danger" />
```

```jsx
// v11
<Tag severity="success">
    <Check /> New
</Tag>
<Badge severity="danger">8</Badge>
```

The v10 pattern of attaching a badge to another component through a `badge` prop is the new `OverlayBadge` component.

## Hooks

v10 shipped a set of hooks from `primereact/hooks`. v11 moved them to `@primereact/hooks` and reworked the list. Each one has its own page in the [hooks documentation](../../../hooks/gettingstarted/introduction.md).

**Same name, same purpose.**

useEventListener, useIntersectionObserver, useMatchMedia, useMountEffect, useUnmountEffect, useUpdateEffect, usePrevious

**Renamed.**

| v10          | v11               |
| ------------ | ----------------- |
| `useStorage` | `useLocalStorage` |

**No longer provided.** Most of these were general-purpose utilities rather than anything specific to a UI library, and are a few lines to write or available from any hook collection:

useClickOutside, useCounter, useDebounce, useDisplayOrder, useFavicon, useGlobalOnEscapeKey, useInterval, useMouse, useMove, useResizeListener, useTimeout

`useLocale` was replaced by the locale API described above. `useStyle`, `useMergeProps`, `useOverlayListener` and `useOverlayScrollListener` were internal plumbing that the new architecture handles inside the components.

**New in v11.** Several of these carry behaviour that used to be locked inside a component:

| Hook                                                                                            | What it does                                           |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `useMask`                                                                                       | Input masking, replacing the `InputMask` component     |
| `useKeyFilter`                                                                                  | Key filtering, replacing the `KeyFilter` component     |
| `useFilter`, `useTreeFilter`                                                                    | The filtering that components used to do internally    |
| `useScrollTop`                                                                                  | Replacing the `ScrollTop` component                    |
| `useControlledState`                                                                            | The controlled and uncontrolled pattern components use |
| `useSortableList`                                                                               | Drag-to-reorder behaviour                              |
| `useHotKey`                                                                                     | Keyboard shortcuts                                     |
| `useIsMobile`, `useDirection`, `useVisibilityChange`                                            | Environment state                                      |
| `useNumberFormatter`, `useViewTransition`, `usePresence`, `useQueueTask`, `useMounted`, `useId` | Smaller utilities used across components               |

## Component Map

### Same name

These 54 keep their v10 name. The API still changed, most became compound, but imports and mental model carry over:

Accordion, AutoComplete, Avatar, AvatarGroup, Badge, Breadcrumb, Button, ButtonGroup, Card, Carousel, Checkbox, Chip, ContextMenu, DataTable, DataView, Dialog, Divider, Fieldset, FileUpload, FloatLabel, FocusTrap, IconField, Inplace, InputNumber, InputOtp, InputText, Knob, Listbox, Menu, Message, MeterGroup, OrganizationChart, Paginator, Panel, ProgressBar, ProgressSpinner, RadioButton, Rating, Sidebar, Skeleton, Slider, SpeedDial, Splitter, Stepper, StyleClass, Tag, Terminal, Timeline, Toast, ToggleButton, Toolbar, Tooltip, Tree, VirtualScroller

`Sidebar` is the exception worth repeating: the name survived but the meaning did not. v10's `Sidebar` is v11's `Drawer`.

### Renamed

| v10                    | v11                 |
| ---------------------- | ------------------- |
| `Dropdown`             | `Select`            |
| `Calendar`             | `DatePicker`        |
| `OverlayPanel`         | `Popover`           |
| `Sidebar`              | `Drawer`            |
| `InputSwitch`          | `ToggleSwitch`      |
| `TabView` + `TabPanel` | `Tabs`              |
| `InputTextarea`        | `Textarea`          |
| `Password`             | `InputPassword`     |
| `Chips`                | `InputTags`         |
| `ColorPicker`          | `InputColor`        |
| `Galleria`             | `Gallery`           |
| `ScrollPanel`          | `ScrollArea`        |
| `SelectButton`         | `ToggleButtonGroup` |

### Folded into another component

Still available, written differently. Each one has a working example in the linked documentation.

| v10                            | v11                                                      | Example                                                          |
| ------------------------------ | -------------------------------------------------------- | ---------------------------------------------------------------- |
| `MultiSelect`                  | `Select` with `multiple`                                 | [Multiple](../../components/select.md#multiple)              |
| `TreeTable`                    | `DataTable` with `treeMode`                              | [TreeTable](../../components/treetable.md)                   |
| `Column`, `ColumnGroup`, `Row` | DataTable cell and row parts                             | [DataTable](../../components/datatable.md)                   |
| `TabPanel`                     | `Tabs.Panel`                                             | [Tabs](../../components/tabs.md)                             |
| `AccordionTab`                 | `Accordion.Panel`                                        | [Accordion](../../components/accordion.md)                   |
| `StepperPanel`                 | `Stepper.Panel`                                          | [Stepper](../../components/stepper.md)                       |
| `Steps`                        | `Stepper`, steps-only mode                               | [Steps only](../../components/stepper.md#steps-only)         |
| `TieredMenu`                   | `Menu` with nested submenus                              | [Tiered menu](../../components/menu.md#tiered-menu)          |
| `MegaMenu`, `Menubar`          | `NavigationMenu`                                         | [Mega menu](../../components/navigationmenu.md#mega-menu)    |
| `Messages`                     | An array rendered as `Message`                           | [Dynamic](../../components/message.md#dynamic)               |
| `SplitButton`                  | `ButtonGroup` with `Menu`                                | [Split button](../../components/buttongroup.md#split-button) |
| `SelectButton`                 | `ToggleButtonGroup`                                      | [ToggleButtonGroup](../../components/togglebuttongroup.md)   |
| `Image`                        | `Gallery`, single item                                   | [Single](../../components/gallery.md#single)                 |
| `CascadeSelect`                | `Select` with `Menu`                                     | [Cascade](../../components/select.md#cascade)                |
| `TreeSelect`                   | `Select` with tree-shaped options                        | [Tree](../../components/select.md#tree)                      |
| `ConfirmDialog`                | `Dialog`, or the overlay manager for the imperative form | [Confirmation](../../components/dialog.md#confirmation)      |

### Became hooks

Behaviour without markup attached, so it composes with any input:

| v10         | v11            | Example                                        |
| ----------- | -------------- | ---------------------------------------------- |
| `InputMask` | `useMask`      | [InputMask](../../components/inputmask.md) |
| `KeyFilter` | `useKeyFilter` | [KeyFilter](../../components/keyfilter.md) |
| `ScrollTop` | `useScrollTop` | [useScrollTop](../../../hooks/use-scrolltop.md)      |
| `OrderList` | `useOrderList` | [OrderList](../../components/orderlist.md) |
| `PickList`  | `usePickList`  | [PickList](../../components/picklist.md)   |

`useMask` on an `InputText` does what `InputMask` did, and the same hook works on any other input. `OrderList` and `PickList` return their reordering logic and leave the list rendering to `Listbox` and `Button`, so neither is a fixed layout anymore.

Filtering moved the same way. The `filter`, `filterBy`, `filterMatchMode` and `filterLocale` props that appeared on Dropdown, MultiSelect, Listbox, Tree, OrderList and PickList are gone; `useFilter` and `useTreeFilter` provide the matching logic, and the component supplies a `Filter` part for the input. Remote search, fuzzy matching and debouncing become ordinary code rather than a prop that either fits or doesn't.

### Moved to PrimeUI Pro

The heavier components that wrapped third-party libraries are part of the commercial [PrimeUI Pro](https://primeuipro.dev) suite:

| v10      | Pro package              |
| -------- | ------------------------ |
| `Chart`  | `@primeuipro/chart`      |
| `Editor` | `@primeuipro/texteditor` |

Pro also adds components v10 never had. A Scheduler and a Task Board, with a PDF Viewer, Diagram, Grid and Gantt Chart listed as coming.

### Not available yet

`VirtualScroller` has package directories in place but no implementation. Work is underway on the `useVirtualizer` hook, applied by the consumer rather than embedded in each list. Until it lands, `virtualScrollerOptions` in DataTable, Listbox, Select and Tree has no equivalent.

### Removed

These twelve are not part of v11 and are not planned. Most were single-purpose components whose behaviour is now a short composition of existing parts, so porting them would have added a wrapper and nothing else.

| v10                  | Build it with                                                                         |
| -------------------- | ------------------------------------------------------------------------------------- |
| `ConfirmPopup`       | `Popover` with its `Header`, `Title`, `Description`, `Footer` and `Close` parts       |
| `BlockUI`            | `Dialog` in modal mode with `Dialog.Backdrop`, or a `ProgressSpinner` over the region |
| `PanelMenu`          | `Accordion` wrapping `Menu`, the pairing the navbar demo already uses                 |
| `TabMenu`            | `Tabs`, with routing wired in application code                                        |
| `DeferredContent`    | The `useIntersectionObserver` hook with conditional rendering, or `AnimateOnScroll`   |
| `DataScroller`       | `DataView` with `useScrollTop` or an intersection observer driving the next page      |
| `TriStateCheckbox`   | `Checkbox` with `indeterminate`, cycling the value                                    |
| `MultiStateCheckbox` | `Checkbox` with `indeterminate`, or `ToggleButtonGroup` for more than three states    |

The remaining four have no equivalent building block:

| v10         | Note                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `SlideMenu` | `Menu` covers nested navigation, but not the sliding panel stack      |
| `Mention`   | `AutoComplete` covers suggestion lists, but not inline `@` triggering |
| `Dock`      | No counterpart                                                        |
| `Ripple`    | The effect is not part of v11                                         |

### New in v11

Components with no v10 counterpart:

AnimateOnScroll, CheckboxGroup, Collapsible, Compare, Fluid, IftaLabel, InputGroup, Label, NavigationMenu, OverlayBadge, RadioButtonGroup, Toaster, VisuallyHidden

## Summary of the New Model

Migrating costs real time. This is what the new structure gives back.

| Area             | v10                                                            | v11                                                                                |
| ---------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Icons**        | A class name string, so an icon font, no props, fixed position | Any element: an SVG from any library, an `<img>`, a spinner, an emoji              |
| **Templates**    | A function returning markup the component then placed          | The part _is_ the markup, taking `className`, `onClick`, `ref`, `data-*`, children |
| **State slots**  | Several `*Icon` props, hoping the internal conditions matched  | `match` renders a slot only in the state it names                                  |
| **Portals**      | `appendTo` quietly moved a subtree elsewhere in the DOM        | `<Select.Portal>` says so in the markup                                            |
| **Positioning**  | Automatic placement plus an `align()` method                   | `<Popover.Positioner side align flip shift>`, the same part in every overlay       |
| **Polymorphism** | Fixed elements, or a `*Template` prop to replace one           | `as` on every part: `<Dialog.Trigger as={Button}>` is a real Button                |
| **Reach**        | The right `pt` key, or a CSS selector against `p-*` classes    | Every internal element is a named export                                           |

State-matched slots replace the conditional rendering that used to surround icon props:

```jsx
<Toast.Icon match="success">
    <Check />
</Toast.Icon>
<Toast.Icon match="error">
    <Times />
</Toast.Icon>
```

And `as` keeps a part's behaviour while changing what it renders, so a trigger is a real Button with the full Button API instead of a fixed element with a handful of styling props:

```jsx
<Dialog.Trigger as={Button} severity="secondary" variant="outlined">
    Open
</Dialog.Trigger>
```

## Next Steps

- [Installation](../installation.md), framework-specific setup
- [Configuration](../configuration.md), provider options, theme, locale, CSP
- [Styled mode](../theming/styled.md), building a theme preset from design tokens
- [Internationalization](../misc/internationalization.md), the replacement for `primereact/api` locale helpers
- [Pass Through](../misc/passthrough.md), the current slot keys
- [Accessibility](../misc/accessibility.md), what components provide out of the box

Questions about a specific component are best answered by its own documentation page, where every part is listed with its props.
