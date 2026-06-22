# useDivider

Headless hook for building content separators with custom markup.

```tsx
'use client';
import { useDivider } from '@primereact/headless/divider';

export default function BasicDemo() {
    const { rootProps } = useDivider();

    return (
        <div className="max-w-md mx-auto space-y-4">
            <p className="text-sm mb-4!">Fast setup, no credit card required.</p>
            <div {...rootProps} role="separator" className="border-t border-surface-200 dark:border-surface-700" />
            <p className="text-sm">Cancel anytime from your account.</p>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,5}
import { useDivider } from '@primereact/headless/divider';

const { rootProps } = useDivider({ orientation: 'horizontal' });

return <div {...rootProps} role="separator" />;
```

`useDivider` returns spread-ready `rootProps` with orientation and alignment attributes — see [Primitive](../../primitive/divider/features.md) for a component-based API.

## Features

- Spread-ready `rootProps` with orientation and alignment data attributes
- Stateless hook — no internal state or side effects
- Full control over border styling and content layout

## Behavior

### Orientation

Set `orientation` to `"horizontal"` or `"vertical"`. The value is reflected in `aria-orientation` and `data-orientation` via `rootProps`.

```tsx
const { rootProps } = useDivider({ orientation: 'vertical' });

<div {...rootProps} role="separator" />;
```

### Content

Place content alongside the divider element. Layout and alignment are handled in the consuming component.

```tsx
const { rootProps } = useDivider({ align: 'center' });

<div {...rootProps} role="separator">
    <span>OR</span>
</div>;
```

### Custom Styling with Data Attributes

```css
[data-scope='divider'][data-part='root'] {
    border-top: 1px solid #e5e7eb;
}
[data-scope='divider'][data-orientation='vertical'] {
    width: 1px;
    align-self: stretch;
}
[data-scope='divider'][data-align='center'] {
    text-align: center;
}
```

## API

### useDivider

> **API/props table for `useDivider` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Divider Primitive](../../primitive/divider/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
