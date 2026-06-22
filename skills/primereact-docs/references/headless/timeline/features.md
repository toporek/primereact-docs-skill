# useTimeline

Hook that provides data attributes for alignment and orientation of timeline layouts.

```tsx
'use client';
import { useTimeline } from '@primereact/headless/timeline';

const events = [
    { status: 'Ordered', date: '15/10/2026 10:30' },
    { status: 'Processing', date: '15/10/2026 14:00' },
    { status: 'Shipped', date: '15/10/2026 16:15' },
    { status: 'Delivered', date: '16/10/2026 10:00' }
];

export default function BasicDemo() {
    const { rootProps, eventProps, separatorProps, markerProps, connectorProps, contentProps, oppositeProps } = useTimeline();

    return (
        <div className="max-w-lg mx-auto">
            <div {...rootProps} className="flex flex-col">
                {events.map((event, index) => (
                    <div key={index} {...eventProps} className="flex gap-4 relative min-h-16">
                        <div {...oppositeProps} className="flex-1 text-right text-xs text-surface-500 dark:text-surface-400 pt-0.5">
                            {event.date}
                        </div>
                        <div {...separatorProps} className="flex flex-col items-center">
                            <div
                                {...markerProps}
                                className="inline-flex items-center justify-center relative self-baseline size-4 shrink-0 rounded-full border-2 border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 before:rounded-full before:size-1.5 before:bg-primary after:absolute after:size-full after:rounded-full after:shadow-[0px_0.5px_0px_0px_rgba(0,0,0,0.06),0px_1px_1px_0px_rgba(0,0,0,0.12)]"
                            />
                            {index !== events.length - 1 && <div {...connectorProps} className="w-0.5 grow bg-surface-200 dark:bg-surface-700" />}
                        </div>
                        <div {...contentProps} className="flex-1 text-sm font-medium text-surface-700 dark:text-surface-0 pb-6">
                            {event.status}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,5}
import { useTimeline } from '@primereact/headless/timeline';

const { rootProps } = useTimeline();

return <div {...rootProps}></div>;
```

`useTimeline` provides data attributes for alignment and orientation — see [Primitive](../../primitive/timeline/features.md) for a component-based API.

## Features

- Returns spread-ready `rootProps` with `data-align` and `data-orientation` attributes
- Supports five alignment modes: `left`, `right`, `alternate`, `top`, `bottom`
- Supports vertical and horizontal orientation

## Behavior

### Alignment

Set `align` to control content placement relative to the timeline line.

```tsx
const { rootProps } = useTimeline({ align: 'alternate' });

rootProps['data-align']; // 'alternate'
```

Available values: `'left'` (default), `'right'`, `'alternate'`, `'top'`, `'bottom'`.

### Orientation

Set `orientation` to switch between vertical and horizontal layouts.

```tsx
const { rootProps } = useTimeline({ orientation: 'horizontal' });

rootProps['data-orientation']; // 'horizontal'
```

### Custom Styling with Data Attributes

Use the data attributes to build CSS-driven layout variations.

```css
[data-scope='timeline'][data-orientation='horizontal'] {
    flex-direction: row;
}

[data-scope='timeline'][data-align='alternate'] .event:nth-child(even) {
    flex-direction: row-reverse;
}
```

## API

### useTimeline

> **API/props table for `useTimeline` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Timeline Primitive](../../primitive/timeline/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
