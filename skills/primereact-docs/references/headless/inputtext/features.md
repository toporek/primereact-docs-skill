# useInputText

Hook that provides data attributes and prop spreading for text input elements.

```tsx
'use client';
import { useInputText } from '@primereact/headless/inputtext';

export default function BasicDemo() {
    const { rootProps } = useInputText();

    return (
        <div className="flex justify-center">
            <input
                {...rootProps}
                placeholder="Enter text"
                className="px-2.5 py-1.5 text-sm rounded-md border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-surface-700 dark:text-surface-100 placeholder:text-surface-400 dark:placeholder:text-surface-500 outline-hidden hover:border-surface-400 dark:hover:border-surface-500 focus-visible:border-primary transition-colors duration-200"
            />
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,5}
import { useInputText } from '@primereact/headless/inputtext';

const { rootProps } = useInputText();

return <input {...rootProps} placeholder="Enter text" />;
```

`useInputText` returns spread-ready `rootProps` with `type="text"` and data attributes for styling — see [Primitive](../../primitive/inputtext/features.md) for a component-based API.

## Features

- Returns spread-ready `rootProps` for the root input element with `type="text"` default
- Stateless hook — no internal state management, all behavior delegated to native `<input>`
- Compatible with any HTML element or custom component via prop spreading

## Behavior

### Custom Styling with Data Attributes

The prop object includes `data-scope="inputtext"` and `data-part="root"` for styling.

```css
[data-scope='inputtext'][data-part='root'] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
}

[data-scope='inputtext'][data-part='root']:focus {
    border-color: var(--p-primary-color);
    outline: none;
}

[data-scope='inputtext'][data-part='root']:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

## API

### useInputText

> **API/props table for `useInputText` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [InputText Primitive](../../primitive/inputtext/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
