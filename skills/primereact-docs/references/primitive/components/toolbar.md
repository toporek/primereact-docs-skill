# Toolbar

An unstyled toolbar component with compound composition for grouping actions.

Build fully custom toolbar layouts with complete control over content regions and styling.

```tsx
'use client';
import { Plus } from '@primeicons/react/plus';
import { Search } from '@primeicons/react/search';
import { Upload } from '@primeicons/react/upload';
import { Toolbar } from 'primereact/toolbar';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <Toolbar.Root className={styles.root}>
            <Toolbar.Start className={styles.start}>
                <button className={styles.iconButton}>
                    <Plus />
                </button>
                <button className={styles.iconButton}>
                    <Upload />
                </button>
            </Toolbar.Start>
            <Toolbar.Center>
                <input type="text" placeholder="Search" className={styles.search} />
            </Toolbar.Center>
            <Toolbar.End className={styles.end}>
                <button className={styles.iconButton}>
                    <Search />
                </button>
            </Toolbar.End>
        </Toolbar.Root>
    );
}

```

## Features

- Compound component API with four sub-components: `Root`, `Start`, `Center`, `End`
- Three-region layout for start, center, and end content alignment
- Context sharing from `Root` to all descendant sub-components

## Usage

```tsx
import { Toolbar } from 'primereact/toolbar';
```

```tsx
<Toolbar.Root>
    <Toolbar.Start />
    <Toolbar.Center />
    <Toolbar.End />
</Toolbar.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Toolbar.Root as="nav">
    <Toolbar.Start as="ul">...</Toolbar.Start>
</Toolbar.Root>
```

Default elements: `Root`=`div`, `Start`=`div`, `Center`=`div`, `End`=`div`.

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Toolbar.Start>{(instance) => <span>Toolbar ID: {instance.toolbar?.id}</span>}</Toolbar.Start>
```

## Pass Through

## API

### ToolbarRoot

> **`ToolbarRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toolbar or the installed `@primereact/types`.

| Attribute    | Value     |
| ------------ | --------- |
| `data-scope` | `toolbar` |
| `data-part`  | `root`    |

| Label | Type | Description |
|:------|:------|:------|
| root | ToolbarRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| start | ToolbarRootPassThroughType> | Used to pass attributes to the start's DOM element. |
| center | ToolbarRootPassThroughType> | Used to pass attributes to the center's DOM element. |
| end | ToolbarRootPassThroughType> | Used to pass attributes to the end's DOM element. |

### ToolbarStart

> **`ToolbarStart` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toolbar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ToolbarStartPassThroughType> | Used to pass attributes to the root's DOM element. |

### ToolbarCenter

> **`ToolbarCenter` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toolbar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ToolbarCenterPassThroughType> | Used to pass attributes to the root's DOM element. |

### ToolbarEnd

> **`ToolbarEnd` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toolbar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ToolbarEndPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Toolbar uses `role="toolbar"` on the root element. `aria-orientation` is not included as it defaults to `"horizontal"`. Provide an accessible label via `aria-label` or `aria-labelledby` on `Root`.

### Keyboard Support

Component does not include built-in keyboard interaction. Keyboard behavior depends on interactive elements placed inside the toolbar (buttons, inputs, etc.). Follow the [WAI-ARIA Toolbar Pattern](https://www.w3.org/WAI/ARIA/apd/patterns/toolbar/) for managing focus with arrow keys if needed.
