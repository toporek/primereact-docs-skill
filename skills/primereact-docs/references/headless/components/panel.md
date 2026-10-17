# usePanel

Hook that manages collapsible panel state and ARIA attributes.

## Usage

```tsx
import { usePanel } from '@primereact/headless/panel';
```

```tsx
const { rootProps, triggerProps, contentProps, indicatorProps, state } = usePanel({ defaultOpen: true });

<div {...rootProps}>
    <button {...triggerProps}>
        <span {...indicatorProps} />
    </button>
    {state.open && <div {...contentProps}></div>}
</div>;
```

`usePanel` wraps `useCollapsible` and returns spread-ready prop objects for each DOM element, see [Primitive](../../primitive/components/panel.md) for a component-based API.

## Features

- **Single-hook collapsible surface**, built on `useCollapsible`, returns one bundle of props (`rootProps`, `triggerProps`, `contentProps`, `indicatorProps`) for the whole panel
- **Controlled or uncontrolled open state**, pass `open`/`onOpenChange` to drive externally or rely on `defaultOpen`
- **Imperative controls**, `toggle()`, `open()`, and `close()` let you flip state from anywhere outside the trigger
- **Full render control**, `state.open` decides whether content is mounted, hidden with CSS, or animated in

## Working with callbacks

### Controlled open state

Drive the panel's open state from parent state with `open` and `onOpenChange`.

```tsx
const [open, setOpen] = React.useState(true);

const panel = usePanel({
    open,
    onOpenChange: (e) => setOpen(e.value ?? false)
});
```

`onOpenChange` receives `{ originalEvent, value }` where `value` is the new boolean state.

### Imperative open/close from outside the trigger

The hook exposes `toggle`, `open`, and `close` for buttons that don't live inside the panel, such as a "collapse all" toolbar action.

```tsx
const panel = usePanel({ defaultOpen: false });

<button onClick={(e) => panel.open(e)}>Expand</button>
<button onClick={(e) => panel.close(e)}>Collapse</button>
<button onClick={(e) => panel.toggle(e)}>Toggle</button>
```

### Animating enter/leave

Because the hook hands you `state.open`, you can gate rendering on it and wrap content in a motion primitive.

```tsx
const { contentProps, state } = usePanel({ defaultOpen: true });

<AnimatePresence>
    {state.open && (
        <motion.div {...contentProps} initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
            Panel content
        </motion.div>
    )}
</AnimatePresence>;
```

Alternatively, keep the content mounted and toggle visibility with CSS:

```tsx
<div {...contentProps} style={{ display: state.open ? 'block' : 'none' }}>
    Panel content, always in DOM
</div>
```

## Styling with data attributes

Every prop object includes `data-scope="panel"` and a `data-part` attribute. State is reflected via `data-open`/`data-closed`/`data-disabled` on parts, and `data-content-open`/`data-content-closed` on the trigger.

```css
[data-scope='panel'][data-part='trigger'] {
    font-weight: 600;
}

[data-scope='panel'][data-part='content'][data-open] {
    animation: slideDown 200ms ease-out;
}

[data-scope='panel'][data-part='content'][data-closed] {
    animation: slideUp 200ms ease-out;
}

[data-scope='panel'][data-part='trigger'][data-content-open] {
    color: blue;
}
```

## API

### usePanel

> **`usePanel` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/panel or the installed `@primereact/types`.

## Accessibility

Enter or Space on the header toggles the panel when toggleable. See [Primitive](../../primitive/components/panel.md#accessibility) for full WAI-ARIA compliance details.
