# Badge

An unstyled badge component for displaying status indicators.

Build fully custom status indicators with complete control over layout and styling.

## Features

- Single `Badge` component with `OverlayBadge` for positioned overlays
- Dot indicator via empty children, renders as a small status dot when no content is provided

## Usage

```tsx
import { Badge } from 'primereact/badge';
import { OverlayBadge } from 'primereact/overlaybadge';
```

```tsx
<Badge></Badge>

<OverlayBadge>
    <IconComponent />
    <Badge></Badge>
</OverlayBadge>
```

## Behavior

### Polymorphic Rendering

Use `as` on `Badge` or `OverlayBadge` to change the rendered HTML element.

```tsx
<Badge as="div">4</Badge>
<OverlayBadge as="span">...</OverlayBadge>
```

Default elements: `Badge`=`span`, `OverlayBadge`=`div`.

### Render Function Children

`Badge` accepts a render function as children, providing access to the component instance.

```tsx
<Badge>{(instance) => <span>Count</span>}</Badge>
```

## Pass Through

## API

### Badge

> **`Badge` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/badge or the installed `@primereact/types`.

| Attribute    | Value                              |
| ------------ | ---------------------------------- |
| `data-scope` | `"badge"`                          |
| `data-part`  | `"root"`                           |
| `data-empty` | Present when badge has no children |

| Label | Type | Description |
|:------|:------|:------|
| root | BadgePassThroughType> | Used to pass attributes to the root's DOM element. |

### OverlayBadge

> **`OverlayBadge` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/badge or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | OverlayBadgePassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Badge does not include any roles and attributes by default. Any attribute is passed to the root element so `aria-label` or `aria-live` can be added if badges are dynamic. In case badges need to be tabbable, `tabIndex` can be added to implement custom key handlers.

### Keyboard Support

Component does not include any interactive elements.
