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

```tsx
import { usePortal } from '@primereact/headless/portal';
import { createPortal } from 'react-dom';
```

```tsx
const portal = usePortal();

{
    portal.state.mounted && createPortal(<div></div>, document.body);
}
```

`usePortal` provides SSR-safe mount detection so portaled content renders only on the client. See [Primitive](../../primitive/components/portal.md) for a component-based API.

## Features

- **SSR-safe mount flag**, `state.mounted` stays `false` during server rendering and flips to `true` after client mount
- **Lifecycle callbacks**, `onMounted` and `onUnmounted` fire on the corresponding mount boundaries
- **Portal target agnostic**, pair the flag with any DOM node you want to render into

## Working with callbacks

### Guard `createPortal`

Use `state.mounted` to skip portal rendering on the server, which avoids hydration mismatches.

```tsx
const portal = usePortal();

{
    portal.state.mounted && createPortal(<div>Portaled content</div>, document.body);
}
```

### React to mount/unmount

Pass `onMounted` and `onUnmounted` when you need to run a side effect tied to the portal's lifecycle, locking scroll, syncing analytics, or closing neighbouring UI.

```tsx
const portal = usePortal({
    onMounted: () => lockScroll(),
    onUnmounted: () => unlockScroll()
});
```

### Portal into a custom container

Combine `state.mounted` with a ref to a custom container for portaling into a specific element rather than `document.body`.

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

> **`usePortal` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/portal or the installed `@primereact/types`.

## Accessibility

No direct keyboard behavior, focus management follows the portaled content. See [Primitive](../../primitive/components/portal.md#accessibility) for full WAI-ARIA compliance details.
