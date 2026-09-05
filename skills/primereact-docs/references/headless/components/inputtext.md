# useInputText

Hook that provides data attributes and prop spreading for text input elements.

## Usage

```tsx
import { useInputText } from '@primereact/headless/inputtext';
```

```tsx
const { rootProps } = useInputText();

return <input {...rootProps} placeholder="Enter text" />;
```

`useInputText` returns spread-ready `rootProps` with `type="text"` and data attributes for styling. See [Primitive](../../primitive/components/inputtext.md) for a component-based API.

## Features

- **Zero-state spreading**, returns a single `rootProps` object you spread onto any input element
- **Native behavior**, no internal state; value, focus, and validation stay with the DOM element
- **Data-attribute surface**, emits `data-scope` and `data-part` for CSS targeting without class names
- **Type default**, applies `type="text"` while staying overridable via spread order

## Working with callbacks

### Use native handlers for value

Because the hook is stateless, compose with React state directly on the input element.

```tsx
const [text, setText] = React.useState('');
const { rootProps } = useInputText();

return <input {...rootProps} value={text} onChange={(e) => setText(e.target.value)} />;
```

### Spread onto a custom element

`rootProps` works with any element that accepts input-like attributes, useful for masked or styled wrappers.

```tsx
const { rootProps } = useInputText();

return <MaskedInput {...rootProps} mask="999-9999" />;
```

### Forward refs through the spread

Any refs or extra handlers you pass after `rootProps` compose naturally.

```tsx
const ref = React.useRef<HTMLInputElement>(null);
const { rootProps } = useInputText();

return <input {...rootProps} ref={ref} onBlur={validate} />;
```

## Styling with data attributes

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

> **`useInputText` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/inputtext or the installed `@primereact/types`.

## Accessibility

Standard text input keyboard behavior, arrow keys move the cursor, Shift+arrows select text. See [Primitive](../../primitive/components/inputtext.md#accessibility) for full WAI-ARIA compliance details.
