# useFieldset

Hook that manages collapsible fieldset state and ARIA attributes.

```tsx
'use client';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { useFieldset } from '@primereact/headless/fieldset';

export default function BasicDemo() {
    const { rootProps, triggerProps, contentProps, indicatorProps } = useFieldset({ defaultOpen: true });

    return (
        <fieldset {...rootProps} className="max-w-lg mx-auto border border-surface-200 dark:border-surface-700 rounded-xl overflow-visible px-4 pb-4">
            <legend className="px-1">
                <button
                    {...triggerProps}
                    className="flex items-center gap-2 px-2 py-1 text-[0.9375rem] font-semibold text-surface-700 dark:text-surface-0 bg-transparent border-none rounded-md cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-800 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
                >
                    <span {...indicatorProps} className="group flex items-center text-surface-500 dark:text-surface-400">
                        <Minus className="w-3 h-3 group-data-closed:hidden!" />
                        <Plus className="w-3 h-3 hidden! group-data-closed:block!" />
                    </span>
                    <span>Legend</span>
                </button>
            </legend>
            <div {...contentProps} className="text-sm leading-relaxed text-surface-500 dark:text-surface-400 data-closed:hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </fieldset>
    );
}

```

## Usage

```tsx
import { useFieldset } from '@primereact/headless/fieldset';
```

```tsx
const { rootProps, triggerProps, contentProps, indicatorProps, state } = useFieldset({ defaultOpen: true });

<fieldset {...rootProps}>
    <legend>
        <button {...triggerProps}>
            <span {...indicatorProps} />
        </button>
    </legend>
    {state.open && <div {...contentProps}></div>}
</fieldset>;
```

`useFieldset` wraps `useCollapsible` and returns spread-ready prop objects for semantic `fieldset`/`legend` grouping, see [Primitive](../../primitive/components/fieldset.md) for a component-based API.

## Features

- **Semantic form grouping**, props are tuned for native `fieldset` and `legend` elements so built-in form semantics stay intact
- **Single-hook collapsible**, built on `useCollapsible`, one call returns `rootProps`, `triggerProps`, `contentProps`, and `indicatorProps`
- **Controlled or uncontrolled open state**, pass `open`/`onOpenChange` or rely on `defaultOpen`
- **Imperative controls**, `toggle()`, `open()`, and `close()` flip state from anywhere outside the legend
- **Full render control**, use `state.open` to mount, hide, or animate content on your terms

## Working with callbacks

### Controlled open state

Drive the fieldset's open state from parent state.

```tsx
const [open, setOpen] = React.useState(true);

const fieldset = useFieldset({
    open,
    onOpenChange: (e) => setOpen(e.value ?? false)
});
```

`onOpenChange` receives `{ originalEvent, value }` where `value` is the new boolean state.

### Collapsing groups of form fields

Pair `useFieldset` with form libraries by gating validation on `state.open`, skip validating hidden groups.

```tsx
const fieldset = useFieldset({ defaultOpen: false });

const onSubmit = (data) => {
    if (fieldset.state.open) {
        validateAdvancedFields(data);
    }
    submit(data);
};
```

### Imperative control from toolbar actions

Use `toggle`, `open`, and `close` to drive the fieldset from "Expand all" / "Collapse all" buttons elsewhere on the page.

```tsx
const fieldset = useFieldset({ defaultOpen: false });

<button onClick={(e) => fieldset.open(e)}>Show advanced options</button>;
```

### Animated reveal

Gate content mounting on `state.open` and wrap with your motion library of choice.

```tsx
const { contentProps, state } = useFieldset({ defaultOpen: true });

<AnimatePresence>
    {state.open && (
        <motion.div {...contentProps} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            Advanced fields
        </motion.div>
    )}
</AnimatePresence>;
```

## Styling with data attributes

Every prop object includes `data-scope="fieldset"` and a `data-part` attribute. State is reflected via `data-open`/`data-closed`/`data-disabled`, and `triggerProps` also gets `data-content-open`/`data-content-closed`.

```css
[data-scope='fieldset'][data-part='trigger'] {
    font-weight: 600;
}

[data-scope='fieldset'][data-part='content'][data-open] {
    animation: slideDown 200ms ease-out;
}

[data-scope='fieldset'][data-part='content'][data-closed] {
    animation: slideUp 200ms ease-out;
}

[data-scope='fieldset'][data-part='trigger'][data-content-open] {
    color: blue;
}
```

## API

### useFieldset

> **API/props table for `useFieldset` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Enter or Space on the legend toggles when toggleable, otherwise standard fieldset semantics apply. See [Primitive](../../primitive/components/fieldset.md#accessibility) for full WAI-ARIA compliance details.
