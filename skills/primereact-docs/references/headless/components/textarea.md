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

```tsx
import { useTextarea } from '@primereact/headless/textarea';
```

```tsx
const { rootProps } = useTextarea({ autoResize: true });

return <textarea {...rootProps} rows={5} placeholder="Enter text" />;
```

`useTextarea` returns spread-ready `rootProps` with optional auto-resize logic and data attributes for styling. See [Primitive](../../primitive/components/textarea.md) for a component-based API.

## Features

- **Spread-ready root props**, single `rootProps` object for the textarea element
- **Auto-resize**, height follows content when `autoResize` is enabled
- **Native-first sizing**, uses CSS `field-sizing: content` when the browser supports it, falling back to `scrollHeight` measurement
- **Stateless value**, leaves value management to React or the native element

## Working with callbacks

### Controlled value

Drive the textarea from outside state by placing `value`/`onChange` directly on the element.

```tsx
const [text, setText] = React.useState('');
const { rootProps } = useTextarea({ autoResize: true });

return <textarea {...rootProps} value={text} onChange={(e) => setText(e.target.value)} />;
```

### Auto-resize with min/max rows

Combine `autoResize` with a minimum `rows` and CSS `max-height` to cap growth on long input.

```tsx
const { rootProps } = useTextarea({ autoResize: true });

return <textarea {...rootProps} rows={3} style={{ maxHeight: '12rem' }} />;
```

### Disable auto-resize

Leave `autoResize` unset (or `false`) when the surrounding layout owns the height, the hook falls back to a plain textarea.

```tsx
const { rootProps } = useTextarea();

return <textarea {...rootProps} rows={8} />;
```

## Styling with data attributes

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

> **`useTextarea` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/textarea or the installed `@primereact/types`.

## Accessibility

Standard multiline text input behavior with Enter inserting newlines. See [Primitive](../../primitive/components/textarea.md#accessibility) for full WAI-ARIA compliance details.
