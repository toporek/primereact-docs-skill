# Portal

An unstyled utility component that renders content into a DOM node outside the component hierarchy.

Build fully custom overlay containers with SSR-safe portal rendering.

For hook-based usage without components, see the [usePortal](../../headless/components/portal.md) hook.

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

> **`Portal` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/portal or the installed `@primereact/types`.

## Accessibility

Portal is a structural utility that renders content into a different DOM location. It does not introduce any ARIA roles or keyboard interactions. Accessibility concerns are handled by the content rendered inside the portal (e.g., `Popover.Popup`, `Drawer.Portal`).
