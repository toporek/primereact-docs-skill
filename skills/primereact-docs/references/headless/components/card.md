# useCard

Headless hook for building flexible card containers with custom markup.

```tsx
'use client';
import { useCard } from '@primereact/headless/card';

export default function BasicDemo() {
    const { rootProps } = useCard();

    return (
        <div className="flex justify-center">
            <div {...rootProps} className="max-w-sm border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
                <div className="p-4 space-y-3">
                    <div>
                        <div className="font-semibold text-lg text-surface-900 dark:text-surface-0">Pro Subscription</div>
                        <div className="text-sm text-surface-500 dark:text-surface-400">Everything you need to scale your workflow</div>
                    </div>
                    <p className="text-sm text-surface-700 dark:text-surface-200">
                        Get unlimited access to all features, priority support, and advanced analytics to help your team grow faster.
                    </p>
                    <div className="flex flex-col gap-3 pt-2">
                        <span className="text-lg font-medium text-surface-900 dark:text-surface-0">$29 / month</span>
                        <button className="w-full px-4 py-2 bg-primary text-primary-contrast text-sm rounded cursor-pointer hover:bg-primary/90 focus-visible:outline focus-visible:outline-primary focus-visible:outline-offset-2 transition">
                            Upgrade
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

```

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
