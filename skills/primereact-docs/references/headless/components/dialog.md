# useDialog

Hook that manages dialog open/close state, focus trapping, dragging, scroll lock, and z-index layering.

## Usage

```tsx
import { useMotion } from '@primereact/core/motion';
import { useDialog } from '@primereact/headless/dialog';
import { usePortal } from '@primereact/headless/portal';
import * as React from 'react';
import { createPortal } from 'react-dom';
```

```tsx
const { rootProps, triggerProps, backdropProps, positionerProps, popupProps, closeProps, headerProps, contentProps, maximizableProps, state } = useDialog();
const portal = usePortal();

<div {...rootProps}>
    <button {...triggerProps}></button>
    {portal.state.mounted &&
        createPortal(
            <>
                <div {...backdropProps} />
                <div {...positionerProps}>
                    <div {...popupProps}>
                        <div {...headerProps}>
                            <button {...maximizableProps}></button>
                            <button {...closeProps}></button>
                        </div>
                        <div {...contentProps}></div>
                    </div>
                </div>
            </>,
            document.body
```

`useDialog` manages open/close state, focus trapping, dragging, scroll locking, and z-index layering. See [Primitive](../../primitive/components/dialog.md) for a component-based API.

## Features

- **Open/close lifecycle**, controlled or uncontrolled visibility with backdrop dismissal, escape handling, and return-focus on close
- **Focus management**, automatic focus trap that moves focus into the dialog on open and restores it to the trigger on close
- **Positioning and layout**, nine preset positions, `inside`/`outside` scroll behavior, and full-screen/maximizable rendering
- **Dragging**, opt-in drag support wired through the header element for repositioning the popup
- **Scroll and layering**, body scroll lock plus `baseZIndex`/`autoZIndex` coordination with other overlays
- **Imperative controls**, `close()` and `toggleMaximized()` for programmatic control alongside `state.open` and `state.maximized`

## Working with callbacks

### Controlled open state

Pass `open` and `onOpenChange` to drive visibility from external state.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const dialog = useDialog({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.value)
});
```

### Draggable header

Enable drag support and spread `headerProps` on the element that should initiate the drag.

```tsx
const dialog = useDialog({ draggable: true });

<div {...dialog.popupProps}>
    <div {...dialog.headerProps}>Drag me</div>
</div>;
```

### Outside vs inside scrolling

Switch `scrollBehavior` to `outside` when the entire dialog should scroll as one unit instead of only the content region.

```tsx
const dialog = useDialog({ scrollBehavior: 'outside' });
```

### Maximizable toggle

`toggleMaximized()` switches between normal and full-screen. Pair it with `state.maximized` to swap icons on the maximize button.

```tsx
const dialog = useDialog({ fullScreen: false });

<button {...dialog.maximizableProps} onClick={dialog.toggleMaximized}>
    {dialog.state.maximized ? <MinimizeIcon /> : <MaximizeIcon />}
</button>;
```

### Overlay layering

Combine `baseZIndex` with `autoZIndex` when stacking dialogs on top of other overlays so each new dialog renders above the previous one.

```tsx
const dialog = useDialog({ baseZIndex: 1000, autoZIndex: true });
```

## Styling with data attributes

The hook exposes state through `data-*` attributes on each part. Use them as CSS selectors, no className juggling.

| Scope    | Part          | States                                       |
| -------- | ------------- | -------------------------------------------- |
| `dialog` | `root`        | `data-open`, `data-closed`                   |
| `dialog` | `popup`       | `data-open`, `data-closed`, `data-maximized` |
| `dialog` | `positioner`  | `data-position`, `data-scroll-behavior`      |
| `dialog` | `maximizable` | `data-maximized`, `data-minimized`           |

```css
[data-scope='dialog'][data-part='positioner'] {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

[data-scope='dialog'][data-part='positioner'][data-position='top'] {
    align-items: flex-start;
}

[data-scope='dialog'][data-part='positioner'][data-scroll-behavior='outside'] {
    overflow: auto;
    align-items: flex-start;
}

[data-scope='dialog'][data-part='popup'][data-maximized] {
    width: 100vw;
    height: 100vh;
}

[data-scope='dialog'][data-part='maximizable'][data-maximized] .maximize-icon {
    display: none;
}
[data-scope='dialog'][data-part='maximizable'][data-minimized] .minimize-icon {
    display: none;
}
```

## API

### useDialog

> **`useDialog` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/dialog or the installed `@primereact/types`.

## Accessibility

Escape closes the dialog when closeOnEscape is enabled, Tab cycles focus inside the dialog via focus trap, and focus returns to the trigger on close. See [Primitive](../../primitive/components/dialog.md#accessibility) for full WAI-ARIA compliance details.
