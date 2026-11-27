# useToolbar

Headless hook for building toolbar containers with custom markup.

## Usage

```tsx
import { useToolbar } from '@primereact/headless/toolbar';
```

```tsx
const { rootProps } = useToolbar();

<div {...rootProps} role="toolbar">
    ...
</div>;
```

`useToolbar` returns spread-ready `rootProps` with data attributes, see [Primitive](../../primitive/components/toolbar.md) for a component-based API.

## Features

- Spread-ready `rootProps` for the root container element
- Stateless hook, no internal state or side effects
- Full freedom over content layout (start, center, end regions)

## Behavior

### Layout Regions

Compose start, center, and end sections using native HTML elements. There are no structural constraints, arrange content in any order using flex or grid layout.

```tsx
const { rootProps } = useToolbar();

<div {...rootProps} role="toolbar">
    <div>Left actions</div>
    <div>Center content</div>
    <div>Right actions</div>
</div>;
```

### Custom Styling with Data Attributes

```css
[data-scope='toolbar'][data-part='root'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
}
```

## API

### useToolbar

> **`useToolbar` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/toolbar or the installed `@primereact/types`.

## Accessibility

Arrow keys navigate items, Home/End jump to first/last, and standard focus management applies. See [Primitive](../../primitive/components/toolbar.md#accessibility) for full WAI-ARIA compliance details.
