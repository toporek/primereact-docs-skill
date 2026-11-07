# useDrawer

Hook that manages slide-in panel overlays with focus trap, scroll lock, and dismissable backdrop.

## Usage

```tsx
import { useMotion } from '@primereact/core/motion';
import { useDrawer } from '@primereact/headless/drawer';
import { usePortal } from '@primereact/headless/portal';
import * as React from 'react';
import { createPortal } from 'react-dom';
```

```tsx
const { rootProps, triggerProps, backdropProps, popupProps, closeProps, headerProps, state } = useDrawer();
const portal = usePortal();

<div {...rootProps}>
    <button {...triggerProps}></button>
    {portal.state.mounted &&
        createPortal(
            <>
                <div {...backdropProps} />
                <div {...popupProps}>
                    <div {...headerProps}>
                        <button {...closeProps}></button>
                    </div>
                    ...
                </div>
            </>,
            document.body
```

`useDrawer` manages open/close state, focus trapping, scroll locking, and dismissable backdrop behavior. See [Primitive](../../primitive/components/drawer.md) for a component-based API.

## Features

- **Open/close lifecycle**, controlled or uncontrolled visibility with dismissable backdrop and escape handling
- **Focus management**, focus trap inside the panel while open, with automatic return-focus to the trigger on close
- **Positioning**, slides in from left, right, top, or bottom, exposed as a `data-position` attribute on the root
- **Scroll and layering**, body scroll lock plus `baseZIndex`/`autoZIndex` to stack with other overlays
- **Portal-ready**, designed to pair with `usePortal` and `createPortal` for SSR-safe body portaling
- **Imperative controls**, `close()` method and `state.open` flag for programmatic control and conditional rendering

## Working with callbacks

### Controlled open state

Pass `open` and `onOpenChange` to drive visibility from external state.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const drawer = useDrawer({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.value)
});
```

### Animated transitions

Combine with `useMotion` so the drawer and backdrop stay mounted through their exit transition before unmounting.

```tsx
const drawer = useDrawer();
const motion = useMotion({ open: drawer.state.open });

{
    motion.present && (
        <div {...drawer.popupProps} ref={motion.ref}>
            ...
        </div>
    );
}
```

### Non-dismissable drawer

Force an explicit close action by disabling backdrop dismissal, useful during unsaved work.

```tsx
const drawer = useDrawer({ dismissable: false });
```

### Stacking with other overlays

Use `autoZIndex` with a `baseZIndex` when the drawer must layer above dialogs or dropdowns.

```tsx
const drawer = useDrawer({ baseZIndex: 1100, autoZIndex: true });
```

## Styling with data attributes

The hook exposes state through `data-*` attributes on each part. Use them as CSS selectors, no className juggling.

| Scope    | Part    | States                                      |
| -------- | ------- | ------------------------------------------- |
| `drawer` | `root`  | `data-open`, `data-closed`, `data-position` |
| `drawer` | `popup` | `data-open`, `data-closed`                  |

```css
[data-scope='drawer'][data-part='root'][data-open] {
    opacity: 1;
}
[data-scope='drawer'][data-part='root'][data-closed] {
    opacity: 0;
}
[data-scope='drawer'][data-part='root'][data-position='right'] {
    right: 0;
    left: auto;
}
```

## API

### useDrawer

> **`useDrawer` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/drawer or the installed `@primereact/types`.

## Accessibility

Escape closes the drawer, focus is trapped inside while open, and focus returns to the trigger on dismiss. See [Primitive](../../primitive/components/drawer.md#accessibility) for full WAI-ARIA compliance details.
