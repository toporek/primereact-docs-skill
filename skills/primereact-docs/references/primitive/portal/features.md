# Portal

An unstyled utility component that renders content into a DOM node outside the component hierarchy.

Build fully custom overlay containers with SSR-safe portal rendering.

```tsx
'use client';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    const targetRef = React.useRef<HTMLDivElement>(null);
    const [ready, setReady] = React.useState(false);

    React.useEffect(() => {
        setReady(true);
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.target}>
                <p className={styles.targetLabel}>Portal Target</p>
                <div ref={targetRef} className={styles.targetContainer} />
            </div>
            {ready && targetRef.current && (
                <Portal appendTo={targetRef.current}>
                    <p className={styles.portalContent}>This content is rendered inside the target container via a portal.</p>
                </Portal>
            )}
        </div>
    );
}
```

For hook-based usage without components, see the [usePortal](../../headless/portal/features.md) hook.

## Features

- SSR-safe rendering that waits for client-side mount before creating portals
- Flexible `appendTo` targeting: `'body'`, `'self'`, HTMLElement, CSS selector, or a function
- Accepts children, `element` prop, or `elementRef` as content source

## Usage

```tsx
import { Portal } from 'primereact/portal';
```

```tsx
<Portal>
    <div></div>
</Portal>
```

## Behavior

### Polymorphic Rendering

Portal does not render a wrapper element. Content is portaled directly into the target container.

### Render Function Children

Portal accepts a render function as children, providing access to the component instance.

```tsx
<Portal>{(instance) => <div>{instance.state.mounted ? 'Mounted' : 'Pending'}</div>}</Portal>
```

## API

### Portal

> **API/props table for `Portal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Portal is a structural utility that renders content into a different DOM location. It does not introduce any ARIA roles or keyboard interactions. Accessibility concerns are handled by the content rendered inside the portal (e.g., `Popover.Popup`, `Drawer.Portal`).
