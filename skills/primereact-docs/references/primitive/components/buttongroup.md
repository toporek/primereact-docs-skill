# ButtonGroup

An unstyled container that groups related buttons into a single connected unit.

Group related buttons into a connected unit with shared corners and seams, with complete control over layout and styling.

## Features

- Groups multiple `Button` components into a single connected unit
- Works with the standard `Button` API

## Usage

```tsx
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
```

```tsx
<ButtonGroup>
    <Button>Save</Button>
    <Button>Update</Button>
    <Button>Delete</Button>
</ButtonGroup>
```

## API

### ButtonGroup

> **`ButtonGroup` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/buttongroup or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ButtonGroupPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

`ButtonGroup` does not require any roles and attributes. Each `Button` keeps its native semantics; provide an accessible name for icon-only buttons with `aria-label`.

### Keyboard Support

Each button inside the group is focusable and activated with `enter` or `space`.
