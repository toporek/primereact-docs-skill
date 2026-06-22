# ProgressSpinner

ProgressSpinner is a process status indicator that supports both determinate and indeterminate modes.

```tsx
import { ProgressSpinner } from '@primereact/ui/progressspinner';

export default function Preview() {
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

## API

### Sub-Components

See [Primitive API](../../primitive/progressspinner/features.md#api) for `ProgressSpinner` component documentation.

### Hooks

See [Headless API](../../headless/progressspinner/features.md#api) for `useProgressSpinner` hook documentation.

## Accessibility

See [ProgressSpinner Primitive](../../primitive/progressspinner/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
