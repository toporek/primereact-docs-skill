# useCard

Headless hook for building flexible card containers with custom markup.

## Usage

```tsx
import { useCard } from '@primereact/headless/card';
```

```tsx
const { rootProps } = useCard();

<div {...rootProps}>
    <div></div>
    <p></p>
</div>;
```

`useCard` returns spread-ready `rootProps` with no state or props, see [Primitive](../../primitive/components/card.md) for a component-based API.

## Features

- Spread-ready `rootProps` for the root container element
- Stateless hook, no internal state or side effects
- Full freedom over internal HTML structure (headers, footers, images, forms)

## Behavior

### Container Structure

Build the card layout using native HTML elements. There are no required children or structural constraints, compose headers, titles, content, and footers in any order.

```tsx
const { rootProps } = useCard();

<div {...rootProps}>
    <img src="/header.jpg" alt="Header" />
    <div>
        <h2>Title</h2>
        <p>Subtitle</p>
    </div>
    <div>Main content</div>
    <div>Footer</div>
</div>;
```

### Custom Styling with Data Attributes

```css
[data-scope='card'][data-part='root'] {
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
}
```

## API

### useCard

> **`useCard` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/card or the installed `@primereact/types`.

## Accessibility

Inherits keyboard behavior from interactive children, the card itself is non-focusable by default. See [Primitive](../../primitive/components/card.md#accessibility) for full WAI-ARIA compliance details.
