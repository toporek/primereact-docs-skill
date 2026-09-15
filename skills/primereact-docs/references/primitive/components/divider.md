# Divider

An unstyled separator component for horizontal and vertical content division.

Build fully custom content separators with complete control over layout and styling.

## Features

- Horizontal and vertical orientations
- Three border types: `solid`, `dashed`, `dotted`
- Content alignment within the divider line (`left`, `center`, `right` for horizontal; `top`, `center`, `bottom` for vertical)

## Usage

```tsx
import { Divider } from 'primereact/divider';
```

```tsx
<Divider />
```

## Behavior

### Polymorphic Rendering

Use `as` to change the rendered HTML element.

```tsx
<Divider as="hr" />
```

Default element: `div`.

### Render Function Children

`Divider` accepts a render function as children, providing access to the component instance.

```tsx
<Divider>{(instance) => <span>{instance.divider?.props.orientation}</span>}</Divider>
```

## Pass Through

## API

### DividerRoot

> **`DividerRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/divider or the installed `@primereact/types`.

> **`DividerRoot` API table (`pt`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/divider or the installed `@primereact/types`.

## Accessibility

### Screen Reader

Divider uses `role="separator"` with `aria-orientation` set to either `"horizontal"` or `"vertical"`.

### Keyboard Support

Component does not include any interactive elements.
