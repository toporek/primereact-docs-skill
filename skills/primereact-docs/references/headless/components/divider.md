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

```tsx
import { useDivider } from '@primereact/headless/divider';
```

```tsx
const { rootProps } = useDivider({ orientation: 'horizontal' });

return <div {...rootProps} role="separator" />;
```

`useDivider` returns spread-ready `rootProps` with orientation and alignment data attributes so you can style horizontal and vertical separators with pure CSS. See [Primitive](../../primitive/components/divider.md) for a component-based API.

## Features

- **Orientation awareness**, `orientation` drives both `aria-orientation` and `data-orientation` on the root
- **Alignment data**, `align` writes a `data-align` attribute you can target from CSS for content placement
- **Stateless**, no internal state or effects; markup and styling are entirely yours
- **Markup-agnostic**, works with any block element that accepts standard props

## Working with callbacks

### Vertical separator

Switch `orientation` to `"vertical"` when separating inline content such as toolbar items.

```tsx
const { rootProps } = useDivider({ orientation: 'vertical' });

<div {...rootProps} role="separator" />;
```

### Divider with label

Provide `align` to position label content inside the divider, then render the text as a child.

```tsx
const { rootProps } = useDivider({ align: 'center' });

<div {...rootProps} role="separator">
    <span>OR</span>
</div>;
```

## Styling with data attributes

Use `data-orientation` and `data-align` to branch styles without conditional class logic.

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

Announced as a separator via the ARIA role, otherwise non-interactive. See [Primitive](../../primitive/components/divider.md#accessibility) for full WAI-ARIA compliance details.
