# useCollapsible

Hook that manages open/close state, toggle behavior, and ARIA attributes for collapsible content.

## Usage

```tsx
import { useCollapsible } from '@primereact/headless/collapsible';
```

```tsx
const { rootProps, triggerProps, contentProps, state } = useCollapsible();

<div {...rootProps}>
    <button {...triggerProps}></button>
    {state.open && <div {...contentProps}></div>}
</div>;
```

`useCollapsible` manages open/close state with toggle, open, and close methods, see [Primitive](../../primitive/components/collapsible.md) for a component-based API.

## Features

- **Open/close state machine**, tracks a single boolean with matching `aria-expanded`, `aria-controls`, and data attributes
- **Controlled or uncontrolled**, use `open`/`onOpenChange` externally or rely on `defaultOpen`
- **Imperative controls**, `toggle()`, `open()`, and `close()` flip state from anywhere outside the trigger
- **Lifecycle callbacks**, `onOpen` and `onClose` fire alongside `onOpenChange` for per-direction side effects
- **Primitive for other hooks**, the building block that `usePanel`, `useFieldset`, and others wrap

## Working with callbacks

### Controlled open state

Drive open state from parent state with `open` and `onOpenChange`.

```tsx
const [isOpen, setIsOpen] = React.useState(true);

const { state } = useCollapsible({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.value)
});
```

### Directional callbacks

When you only care about one direction, use `onOpen` or `onClose` instead of branching inside `onOpenChange`.

```tsx
useCollapsible({
    onOpen: () => analytics.track('panel_expanded'),
    onClose: () => analytics.track('panel_collapsed')
});
```

### Imperative control from outside the trigger

Expose `toggle`, `open`, and `close` on a ref or context so sibling UI can drive the panel.

```tsx
const collapsible = useCollapsible({ defaultOpen: false });

<button onClick={(e) => collapsible.open(e)}>Expand</button>
<button onClick={(e) => collapsible.close(e)}>Collapse</button>
```

### Composing into higher-level hooks

`useCollapsible` is the primitive that higher-level hooks build on, wrap it to create your own collapsible surface with extra behavior.

```tsx
function useDisclosurePanel(options) {
    const collapsible = useCollapsible(options);
    const [loaded, setLoaded] = React.useState(false);

    return {
        ...collapsible,
        loaded,
        onOpen: () => setLoaded(true) // load data the first time it opens
    };
}
```

## Styling with data attributes

The prop objects include `data-scope="collapsible"` and `data-part`. State is reflected via `data-open`/`data-closed` on root and content, and `data-content-open`/`data-content-closed` on the trigger.

```css
[data-scope='collapsible'][data-part='root'][data-open] {
    border-color: var(--p-primary-color);
}

[data-scope='collapsible'][data-part='trigger'][data-content-open] svg {
    transform: rotate(180deg);
}
```

## API

### useCollapsible

> **`useCollapsible` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/collapsible or the installed `@primereact/types`.

## Accessibility

Enter or Space on the trigger toggles the content, and the trigger exposes aria-expanded state. See [Primitive](../../primitive/components/collapsible.md#accessibility) for full WAI-ARIA compliance details.
