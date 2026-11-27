# useSkeleton

Hook that provides data attributes for building custom placeholder loading elements.

## Usage

```tsx
import { useSkeleton } from '@primereact/headless/skeleton';
```

```tsx
const { rootProps } = useSkeleton();

return <div {...rootProps} aria-hidden="true" />;
```

`useSkeleton` returns spread-ready `rootProps` with scoped data attributes, shape, size, and animation are fully owned by your CSS. See [Primitive](../../primitive/components/skeleton.md) for a component-based API.

## Features

- **Spread-ready root props**, drop the props onto any element without further wiring
- **Zero-state**, no internal state or effects, so placeholders render identically on server and client
- **Styling hooks**, `data-scope="skeleton"` and `data-part="root"` selectors for targeting placeholder variants
- **Markup-agnostic**, works on `div`, `span`, or any component that forwards standard props

## Working with callbacks

### Shape variations

The hook is agnostic to shape; use utility classes or CSS to render circles, rectangles, or lines.

```tsx
const { rootProps } = useSkeleton();

<div {...rootProps} className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" aria-hidden="true" />
<div {...rootProps} className="w-full h-4 rounded bg-gray-200 animate-pulse" aria-hidden="true" />
```

### Animation

Animation is handled in CSS. Combine a pulsing background with the scope selector for consistent behavior across all skeletons.

```tsx
<div {...rootProps} className="bg-gray-200 animate-pulse" aria-hidden="true" />
```

## Styling with data attributes

The root prop object includes `data-scope="skeleton"` and `data-part="root"` for targeted styling.

```css
[data-scope='skeleton'][data-part='root'] {
    background-color: #e5e7eb;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
```

## API

### useSkeleton

> **`useSkeleton` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/skeleton or the installed `@primereact/types`.

## Accessibility

Non-interactive placeholder announced via aria-busy until content loads. See [Primitive](../../primitive/components/skeleton.md#accessibility) for full WAI-ARIA compliance details.
