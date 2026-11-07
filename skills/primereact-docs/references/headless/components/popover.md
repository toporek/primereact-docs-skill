# usePopover

Hook that manages popover open state, outside click dismissal, escape key handling, and focus management.

## Usage

```tsx
import { usePopover } from '@primereact/headless/popover';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import { createPortal } from 'react-dom';
```

```tsx
const { triggerProps, popupProps, positionerProps, arrowProps, closeProps, state } = usePopover();
const portal = usePortal();

usePositioner({
    anchor: state.anchorElement,
    content: state.positionerElement,
    arrow: state.arrowElement,
    side: 'bottom',
    flip: true,
    shift: true
});
```

`usePopover` manages open/close state, outside click dismissal, escape key handling, and optional focus trapping. Use [usePositioner](positioner.md) for anchor-relative positioning and [usePortal](portal.md) with `createPortal` for body portaling. See [Primitive](../../primitive/components/popover.md) for a component-based API.

## Features

- **Open/close lifecycle**, controlled or uncontrolled state with outside-click dismissal and escape-key handling
- **Focus management**, optional focus trap plus `autoFocus` control over initial focus when the popup mounts
- **Anchor refs**, exposes `state.anchorElement`, `state.positionerElement`, and `state.arrowElement` for wiring into `usePositioner`
- **Arrow support**, `arrowProps` pairs with the positioner's CSS custom properties for per-side arrow placement
- **Portal-friendly**, `state.open` drives conditional rendering of portaled content without managing mount state yourself
- **Imperative controls**, `setOpen(open, event)` for programmatic toggling tied to a source event

## Working with callbacks

### Controlled open state

Pass `open` and `onOpenChange` to drive visibility from external state.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const popover = usePopover({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.open)
});

<>
    <button {...triggerProps}></button>;
    {
        portal.state.mounted &&
            state.open &&
            createPortal(
                <div {...positionerProps}>
                    <div {...popupProps}>
                        <div {...arrowProps} />
                        <button {...closeProps}></button>
                    </div>
                </div>,
                document.body
```

### Composing with usePositioner

`usePopover` manages state and element refs but not positioning. Feed the element refs from `state` into `usePositioner` to place the popup relative to the trigger.

```tsx
const { triggerProps, popupProps, positionerProps, state } = usePopover();

usePositioner({
    anchor: state.anchorElement,
    content: state.positionerElement,
    side: 'bottom',
    flip: true,
    shift: true
});
```

### Rendering into a portal

Gate the portal content on both `portal.state.mounted` and `state.open` so the popup renders only on the client and only when visible.

```tsx
const portal = usePortal();

{
    portal.state.mounted &&
        state.open &&
        createPortal(
            <div {...positionerProps}>
                <div {...popupProps}>...</div>
            </div>,
            document.body
        );
}
```

### Arrow positioning

Spread `arrowProps` on an arrow element and pass `state.arrowElement` to the positioner. The positioner writes `--placer-arrow-x` and `--placer-arrow-y` for you to consume in CSS.

```tsx
<div {...popupProps}>
    <div {...arrowProps} />
</div>
```

```css
[data-scope='popover'][data-part='arrow'] {
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-left: 1px solid var(--p-content-border-color);
    border-top: 1px solid var(--p-content-border-color);
}
[data-part='arrow'][data-side='bottom'] {
    top: -0.25rem;
    left: var(--px-placer-arrow-x);
    transform: translateX(-50%) rotate(45deg);
}
[data-part='arrow'][data-side='top'] {
    bottom: -0.25rem;
    left: var(--px-placer-arrow-x);
    transform: translateX(-50%) rotate(225deg);
}
```

### Modal-like focus trap

Enable `trapped` for popovers that should behave like a mini-dialog, keeping keyboard focus inside until dismissed.

```tsx
const popover = usePopover({ trapped: true });
```

## Styling with data attributes

The hook exposes state through `data-*` attributes on each part. Use them as CSS selectors, no className juggling.

| Scope     | Part      | States                     |
| --------- | --------- | -------------------------- |
| `popover` | `trigger` | `data-positioner-open`     |
| `popover` | `popup`   | `data-open`, `data-closed` |
| `popover` | `arrow`   | `data-side`                |

```css
[data-scope='popover'][data-part='trigger'][data-positioner-open] {
    background-color: light-dark(var(--p-surface-100), var(--p-surface-700));
}
[data-scope='popover'][data-part='popup'][data-open] {
    opacity: 1;
}
```

## API

### usePopover

> **`usePopover` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/popover or the installed `@primereact/types`.

## Accessibility

Escape dismisses the popover, focus moves into the content when opened, and Tab cycles focusable children. See [Primitive](../../primitive/components/popover.md#accessibility) for full WAI-ARIA compliance details.
