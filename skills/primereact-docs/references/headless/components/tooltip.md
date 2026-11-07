# useTooltip

Hook that manages tooltip open state, hover/focus triggers, delay timing, and group transitions.

## Usage

```tsx
import { usePositioner } from '@primereact/headless/positioner';
import { useTooltip } from '@primereact/headless/tooltip';
import { useTooltipManager } from '@primereact/headless/tooltipmanager';
import { createPortal } from 'react-dom';
```

```tsx
const manager = useTooltipManager();
const { triggerProps, popupProps, arrowProps, positionerProps, setAnchorRef, setPositionerRef, setArrowRef, state, presence } = useTooltip({ tooltipManager: manager });

usePositioner({
    anchor: state.anchorElement,
    content: state.positionerElement,
    arrow: state.arrowElement,
    side: 'top',
    sideOffset: 8,
    flip: true
});
```

`useTooltip` manages hover/focus open behavior with configurable delays. Use `useTooltipManager` to coordinate instant transitions between adjacent tooltips in a group. See [Primitive](../../primitive/components/tooltip.md) for a component-based API.

## Features

- **Hover/focus open**, opens on pointer enter or keyboard focus, closes on leave/blur with configurable `openDelay` and `closeDelay`
- **Presence tracking**, `presence.present` and `presence.ref` keep the popup mounted through exit animations
- **Interactive hover**, allows the pointer to enter the popup without dismissing, configurable via the `interactive` prop
- **Group coordination**, `useTooltipManager` skips the open delay when moving between adjacent tooltips for an "instant" transition
- **Transition awareness**, `state.instantType` reports the current mode (`'delay'`, `'focus'`, `'dismiss'`, or `undefined`) for styling
- **Ref callbacks**, `setAnchorRef`, `setPositionerRef`, and `setArrowRef` register elements for positioning without manual ref merging

## Working with callbacks

### Controlled open state

Pass `open` and `onOpenChange` to drive visibility from external state, useful when pairing with custom triggers or analytics.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const tooltip = useTooltip({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.open)
});

<>
    <button {...triggerProps} ref={setAnchorRef}></button>;
    {
        presence.present &&
            createPortal(
                <div {...positionerProps} ref={setPositionerRef}>
                    <div {...popupProps} ref={presence.ref}>
                        <div {...arrowProps} ref={setArrowRef} />
                    </div>
                </div>,
                document.body
```

### Tuning open and close delays

Adjust `openDelay` and `closeDelay` to match the UI feel. Shorter delays feel snappier; longer delays avoid accidental opens.

```tsx
const tooltip = useTooltip({ openDelay: 300, closeDelay: 200 });
```

### Group transitions with a manager

Share a `useTooltipManager` instance so moving the pointer between siblings skips the open delay.

```tsx
const manager = useTooltipManager({ timeout: 400 });
const tooltip1 = useTooltip({ tooltipManager: manager });
const tooltip2 = useTooltip({ tooltipManager: manager });
```

### Non-interactive tooltip

Set `interactive` to `false` when the popup should dismiss immediately on pointer leave, even if the user moves over the tooltip content.

```tsx
const tooltip = useTooltip({ interactive: false });
```

### Composing with usePositioner

Register the element refs with the positioner so the tooltip flips and offsets against the trigger.

```tsx
const { state, setAnchorRef, setPositionerRef, setArrowRef } = useTooltip();

usePositioner({
    anchor: state.anchorElement,
    content: state.positionerElement,
    arrow: state.arrowElement,
    side: 'top',
    sideOffset: 8,
    flip: true
});
```

## Styling with data attributes

The hook exposes state through `data-*` attributes on each part. Use them as CSS selectors, no className juggling.

| Scope     | Part      | States                                     |
| --------- | --------- | ------------------------------------------ |
| `tooltip` | `trigger` | `data-popup-open`                          |
| `tooltip` | `popup`   | `data-open`, `data-closed`, `data-instant` |

```css
[data-scope='tooltip'][data-part='popup'][data-open] {
    opacity: 1;
    scale: 1;
}
[data-scope='tooltip'][data-part='popup'][data-instant] {
    transition-duration: 0s;
}
[data-scope='tooltip'][data-part='trigger'][data-popup-open] {
    background-color: light-dark(var(--p-surface-100), var(--p-surface-700));
}
```

## API

### useTooltip

> **`useTooltip` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/tooltip or the installed `@primereact/types`.

### useTooltipManager

> **`useTooltipManager` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/tooltip or the installed `@primereact/types`.

## Accessibility

Focus or hover shows the tooltip, Escape hides it, and content is announced via aria-describedby. See [Primitive](../../primitive/components/tooltip.md#accessibility) for full WAI-ARIA compliance details.
