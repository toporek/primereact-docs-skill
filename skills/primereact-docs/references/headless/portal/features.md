# usePortal

Hook that tracks client-side mount state for SSR-safe portal rendering.

```tsx
'use client';
import { usePortal } from '@primereact/headless/portal';
import * as React from 'react';
import { createPortal } from 'react-dom';

export default function BasicDemo() {
    const portal = usePortal();
    const [container, setContainer] = React.useState<HTMLElement | null>(null);

    return (
        <div className="flex flex-col gap-4">
            <div className="border border-surface-200 rounded-lg p-4 text-sm text-surface-600">
                <p className="font-semibold text-surface-900 mb-2">Portal Target</p>
                <div ref={setContainer} className="border border-dashed border-surface-300 rounded p-3 min-h-10" />
            </div>
            {portal.state.mounted &&
                container &&
                createPortal(
                    <p className="text-sm text-primary-600 m-0">This content is rendered inside the target container via a portal.</p>,
                    container
                )}
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1-2,4,7}
import { usePortal } from '@primereact/headless/portal';
import { createPortal } from 'react-dom';

const portal = usePortal();

{
    portal.state.mounted && createPortal(<div></div>, document.body);
}
```

`usePortal` provides SSR-safe mount detection so portaled content is only rendered on the client — see [Primitive](../../primitive/portal/features.md) for a component-based API.

## Features

- `state.mounted` boolean for SSR-safe conditional rendering with React's `createPortal`
- `onMounted` and `onUnmounted` lifecycle callbacks

## Behavior

### Mount Detection

Use `state.mounted` to guard `createPortal` calls. The hook returns `false` during SSR and becomes `true` after the component mounts on the client.

```tsx
const portal = usePortal();

{
    portal.state.mounted && createPortal(<div>Portaled content</div>, document.body);
}
```

### Lifecycle Callbacks

Pass `onMounted` and `onUnmounted` to run side effects when the portal mounts or unmounts.

```tsx
const portal = usePortal({
    onMounted: () => console.log('mounted'),
    onUnmounted: () => console.log('unmounted')
});
```

### Custom Target

Combine `state.mounted` with any DOM reference to portal content into a specific container.

```tsx
const portal = usePortal();
const [container, setContainer] = React.useState<HTMLElement | null>(null);

<div ref={setContainer} />;
{
    portal.state.mounted && container && createPortal(<div>Content</div>, container);
}
```

## API

### usePortal

> **API/props table for `usePortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Portal Primitive](../../primitive/portal/features.md#accessibility) for details.
