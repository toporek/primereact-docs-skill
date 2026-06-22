# useTextarea

Hook that provides auto-resize logic and data attributes for textarea elements.

```tsx
'use client';
import { useTextarea } from '@primereact/headless/textarea';

export default function BasicDemo() {
    const { rootProps } = useTextarea();

    return (
        <div className="flex justify-center">
            <textarea
                {...rootProps}
                rows={5}
                cols={30}
                placeholder="Enter text"
                className="px-2.5 py-1.5 text-sm rounded-md border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-surface-700 dark:text-surface-100 placeholder:text-surface-400 dark:placeholder:text-surface-500 outline-hidden hover:border-surface-400 dark:hover:border-surface-500 focus-visible:border-primary transition-colors duration-200"
            />
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,5}
import { useTextarea } from '@primereact/headless/textarea';

const { rootProps } = useTextarea({ autoResize: true });

return <textarea {...rootProps} rows={5} placeholder="Enter text" />;
```

`useTextarea` returns spread-ready `rootProps` with auto-resize logic and data attributes for styling — see [Primitive](../../primitive/textarea/features.md) for a component-based API.

## Features

- Returns spread-ready `rootProps` for the root textarea element
- Built-in auto-resize that adjusts height as content grows
- Uses native CSS `field-sizing: content` when supported, with JavaScript `scrollHeight` fallback

## Behavior

### Auto Resize

Set `autoResize` to enable automatic height adjustment. The hook detects CSS `field-sizing` support and uses it when available, falling back to JavaScript-based resize via `scrollHeight`.

```tsx
const { rootProps } = useTextarea({ autoResize: true });

<textarea {...rootProps} rows={5} />;
```

### Custom Styling with Data Attributes

The prop object includes `data-scope="textarea"` and `data-part="root"` for styling.

```css
[data-scope='textarea'][data-part='root'] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
}

[data-scope='textarea'][data-part='root']:focus {
    border-color: var(--p-primary-color);
    outline: none;
}

[data-scope='textarea'][data-part='root']:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

## API

### useTextarea

> **API/props table for `useTextarea` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Textarea Primitive](../../primitive/textarea/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
