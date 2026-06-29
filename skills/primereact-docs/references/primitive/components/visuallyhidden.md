# VisuallyHidden

A utility component that hides content visually while keeping it accessible to screen readers.

Build accessible interfaces by providing screen reader text for icon-only actions and decorative elements.

```tsx
'use client';
import { VisuallyHidden } from 'primereact/visuallyhidden';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <button className={styles.button}>
                <i className="pi pi-heart" />
                <VisuallyHidden>Add to favorites</VisuallyHidden>
            </button>

            <button className={styles.button}>
                <i className="pi pi-trash" />
                <VisuallyHidden>Delete item</VisuallyHidden>
            </button>

            <button className={styles.button}>
                <i className="pi pi-cog" />
                <VisuallyHidden>Open settings</VisuallyHidden>
            </button>
        </div>
    );
}

```

## Features

- Hides content from visual display using WAI-ARIA recommended CSS techniques
- `focusable` prop enables the element to receive keyboard focus for focus trap boundaries
- Used internally by [Drawer](drawer.md), Dialog, and FocusTrap for focus management

## Usage

```tsx
import { VisuallyHidden } from 'primereact/visuallyhidden';
```

```tsx
<button>
    <i className="pi pi-trash" />
    <VisuallyHidden></VisuallyHidden>
</button>
```

## Behavior

### Polymorphic Rendering

Use `as` to change the rendered HTML element. Defaults to `span`.

```tsx
<VisuallyHidden as="label" htmlFor="search-input">
    Search
</VisuallyHidden>
```

### Render Function Children

```tsx
<VisuallyHidden>{(instance) => <span>Hidden text</span>}</VisuallyHidden>
```

## API

### VisuallyHidden

> **`VisuallyHidden` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/visuallyhidden or the installed `@primereact/types`.

## Accessibility

### Screen Reader

VisuallyHidden content is announced by screen readers as regular text within the document flow. The component applies CSS styles that remove the element from visual rendering while preserving its presence in the accessibility tree.

### Keyboard Support

When `focusable` is `true`, the element receives a `tabIndex` of `0` and can be reached via `tab` navigation. This is used internally by focus trap implementations to create invisible tab-stop boundaries.
