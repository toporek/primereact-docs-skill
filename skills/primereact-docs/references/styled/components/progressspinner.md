# ProgressSpinner

ProgressSpinner is a process status indicator that supports both determinate and indeterminate modes.

```tsx
'use client';
import { ProgressSpinner } from '@primereact/ui/progressspinner';
import * as React from 'react';

export default function Preview() {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);

                    return 100;
                }

                return Math.min(100, prev + 1);
            });
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-2xs mx-auto aspect-square rounded-4xl bg-linear-to-br from-emerald-950 via-emerald-800 to-emerald-700 p-6 flex flex-col text-emerald-50 shadow-xl">
            <div className="text-emerald-200/80 text-sm">Game completed</div>
            <div className="flex items-baseline mt-1 leading-none">
                <span className="text-7xl font-bold tabular-nums tracking-tight">{value}</span>
                <span className="text-3xl font-bold ml-0.5">%</span>
            </div>
            <div className="mt-auto flex items-end justify-between gap-3">
                <div className="text-base leading-snug">
                    <div className="text-emerald-100/90">
                        The legend of <span className="font-bold text-emerald-50">Zelda</span>
                    </div>
                    <div className="text-emerald-200/70">Tears of the Kingdom</div>
                </div>
                <ProgressSpinner.Root
                    value={value}
                    strokeWidth={10}
                    aria-label="Loading"
                    className="size-11! shrink-0! [&_.p-progressspinner-circle-range]:stroke-emerald-300! [&_.p-progressspinner-circle-track]:stroke-emerald-100/15!"
                >
                    <ProgressSpinner.Track />
                    <ProgressSpinner.Range />
                </ProgressSpinner.Root>
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { ProgressSpinner } from '@primereact/ui/progressspinner';
```

```tsx
<ProgressSpinner.Root>
    <ProgressSpinner.Track />
    <ProgressSpinner.Range />
</ProgressSpinner.Root>
```

## Examples

### Indeterminate

An animated spinner indicating an indeterminate loading state. This is the default mode when no value is provided.

```tsx
import { ProgressSpinner } from '@primereact/ui/progressspinner';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <ProgressSpinner.Root aria-label="Loading">
                <ProgressSpinner.Track />
                <ProgressSpinner.Range />
            </ProgressSpinner.Root>
        </div>
    );
}

```

### Determinate

Set a numeric `value` prop to display a determinate progress indicator with a track and range.

```tsx
'use client';
import { ProgressSpinner } from '@primereact/ui/progressspinner';
import { useState } from 'react';

export default function DeterminateDemo() {
    const [value] = useState(75);

    return (
        <div className="flex justify-center">
            <ProgressSpinner.Root value={value} aria-label="Progress">
                <ProgressSpinner.Track />
                <ProgressSpinner.Range />
                <ProgressSpinner.Value />
            </ProgressSpinner.Root>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/progressspinner.md#api) for `ProgressSpinner` component documentation.

### Hooks

See [Headless API](../../headless/components/progressspinner.md#api) for `useProgressSpinner` hook documentation.

### Accessibility

See [ProgressSpinner Primitive](../../primitive/components/progressspinner.md#accessibility) for WAI-ARIA compliance details and keyboard support.
