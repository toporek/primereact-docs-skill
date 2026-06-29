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

```tsx
import { useButton } from '@primereact/headless/button';
```

```tsx
const { rootProps } = useButton();

return <button {...rootProps}></button>;
```

`useButton` returns spread-ready `rootProps` with data attributes for styling, see [Primitive](../../primitive/components/button.md) for a component-based API.

## Features

- **Spread-ready root props**, a single `rootProps` object with `data-scope` and `data-part` attributes ready to spread on any element
- **Stateless**, no internal state; native `<button>` semantics drive all behavior
- **Element agnostic**, works on `<button>`, `<a>`, or any custom component that accepts spread props

## Styling with data attributes

The prop object includes `data-scope="button"` and `data-part="root"`, which work as selectors for all button styling.

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

> **`useButton` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/button or the installed `@primereact/types`.

## Accessibility

Space and Enter activate the button while focused, matching native button semantics. See [Primitive](../../primitive/components/button.md#accessibility) for full WAI-ARIA compliance details.
