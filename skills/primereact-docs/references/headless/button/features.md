# useButton

Hook that provides data attributes and prop spreading for button elements.

```tsx
'use client';
import { useButton } from '@primereact/headless/button';

export default function BasicDemo() {
    const { rootProps } = useButton();

    return (
        <div className="flex justify-center">
            <button
                {...rootProps}
                className="px-2.5 py-1.5 bg-primary text-primary-contrast text-sm rounded cursor-pointer hover:bg-primary/90 focus-visible:outline focus-visible:outline-primary focus-visible:outline-offset-2 transition"
            >
                Submit
            </button>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,5}
import { useButton } from '@primereact/headless/button';

const { rootProps } = useButton();

return <button {...rootProps}></button>;
```

`useButton` returns spread-ready `rootProps` with data attributes for styling — see [Primitive](../../primitive/button/features.md) for a component-based API.

## Features

- Returns spread-ready `rootProps` for the root button element
- Stateless hook — no internal state management, all behavior delegated to native `<button>`
- Compatible with any HTML element or custom component via prop spreading

## Behavior

### Custom Styling with Data Attributes

The prop object includes `data-scope="button"` and `data-part="root"` for styling.

```css
[data-scope='button'][data-part='root'] {
    font-weight: 600;
    padding: 0.5rem 1rem;
}

[data-scope='button'][data-part='root']:hover {
    opacity: 0.9;
}

[data-scope='button'][data-part='root']:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

## API

### useButton

> **API/props table for `useButton` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Button Primitive](../../primitive/button/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
