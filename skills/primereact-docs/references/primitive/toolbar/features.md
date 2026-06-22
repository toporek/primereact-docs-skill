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

**Pass Through example:**

```tsx
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Toolbar } from '@primereact/ui/toolbar';
import { Plus } from '@primeicons/react/plus';
import { Upload } from '@primeicons/react/upload';

export default function ToolbarPTDemo() {
    return (
        <div>
            <Toolbar.Root>
                <Toolbar.Start>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <Plus></Plus>
                    </Button>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <i className="pi pi-print" />
                    </Button>
                    <Button severity="secondary" variant="text">
                        <Upload></Upload>
                    </Button>
                </Toolbar.Start>
                <Toolbar.Center>
                    <InputText placeholder="Search" />
                </Toolbar.Center>
                <Toolbar.End>
                    <Button severity="secondary" variant="outlined" size="small">
                        Cancel
                    </Button>
                    <Button size="small" className="ml-2">
                        Save
                    </Button>
                </Toolbar.End>
            </Toolbar.Root>
        </div>
    );
}
```

## API

### ToolbarRoot

> **API/props table for `ToolbarRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value     |
| ------------ | --------- |
| `data-scope` | `toolbar` |
| `data-part`  | `root`    |

> **API/props table for `ToolbarRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ToolbarStart

> **API/props table for `ToolbarStart` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ToolbarStart` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ToolbarCenter

> **API/props table for `ToolbarCenter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ToolbarCenter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ToolbarEnd

> **API/props table for `ToolbarEnd` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ToolbarEnd` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Toolbar uses `role="toolbar"` on the root element. `aria-orientation` is not included as it defaults to `"horizontal"`. Provide an accessible label via `aria-label` or `aria-labelledby` on `Root`.

### Keyboard Support

Component does not include built-in keyboard interaction. Keyboard behavior depends on interactive elements placed inside the toolbar (buttons, inputs, etc.). Follow the [WAI-ARIA Toolbar Pattern](https://www.w3.org/WAI/ARIA/apd/patterns/toolbar/) for managing focus with arrow keys if needed.
