# useTag

Hook that provides data attributes for building custom categorization labels.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { useTag } from '@primereact/headless/tag';

const tags = [
    { label: 'Active', icon: Check, bg: 'bg-green-100 text-green-700' },
    { label: 'Info', icon: InfoCircle, bg: 'bg-blue-100 text-blue-700' },
    { label: 'Warning', icon: ExclamationTriangle, bg: 'bg-amber-100 text-amber-700' }
];

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-2">
            {tags.map((tag) => {
                const { rootProps } = useTag();
                const Icon = tag.icon;

                return (
                    <span
                        key={tag.label}
                        {...rootProps}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${tag.bg}`}
                    >
                        <Icon className="w-3 h-3" />
                        {tag.label}
                    </span>
                );
            })}
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,5}
import { useTag } from '@primereact/headless/tag';

const { rootProps } = useTag();

return <span {...rootProps} className="tag"></span>;
```

`useTag` returns spread-ready `rootProps` with data attributes — see [Primitive](../../primitive/tag/features.md) for a component-based API.

## Features

- Returns spread-ready `rootProps` with `data-scope` and `data-part` attributes
- Zero-state hook — no internal state or side effects
- Full control over color, shape, icons, and interaction via your own CSS and markup

## Behavior

### Icons

Place icon components alongside text inside the tag element.

```tsx
const { rootProps } = useTag();

<span {...rootProps} className="tag">
    <CheckIcon />
    Active
</span>;
```

### Pill Shape

Apply border-radius styles to create pill-shaped tags.

```tsx
<span {...rootProps} style={{ borderRadius: '9999px' }}>
    Pill
</span>
```

### Interactive Tags

Render the tag as a `<button>` for clickable behavior.

```tsx
<button {...rootProps} onClick={handleClick}>
    Clickable
</button>
```

### Custom Styling with Data Attributes

The root prop object includes `data-scope="tag"` and `data-part="root"` for targeted styling.

```css
[data-scope='tag'][data-part='root'] {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 0.375rem;
}
```

## API

### useTag

> **API/props table for `useTag` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Tag Primitive](../../primitive/tag/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
