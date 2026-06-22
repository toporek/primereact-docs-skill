# Rating

Rating component is a star based selection input.

```tsx
'use client';
import { Rating } from '@/components/ui/rating';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Rating defaultValue={3.5} />
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/rating
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Rating, RatingOff, RatingOn, RatingOption } from '@/components/ui/rating';
```

```tsx
<Rating defaultValue={3} />
```

The `Rating` component renders default star icons automatically. For custom content, compose with sub-components:

```tsx
<Rating defaultValue={3}>
    <RatingOption index={0}>
        <RatingOn>filled icon</RatingOn>
        <RatingOff>empty icon</RatingOff>
    </RatingOption>
</Rating>
```

## Examples

### Basic

Choose a rating value by clicking on the stars.

```tsx
'use client';
import { Rating } from '@/components/ui/rating';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Rating defaultValue={3.5} />
        </div>
    );
}
```

### Without Half

Set `allowHalf` to `false` to disable half-star selection.

```tsx
'use client';
import { Rating } from '@/components/ui/rating';

export default function AllowHalfDemo() {
    return (
        <div className="flex justify-center">
            <Rating defaultValue={3} allowHalf={false} />
        </div>
    );
}
```

### Controlled

Use `value` and `onValueChange` for programmatic control.

```tsx
'use client';
import { Rating } from '@/components/ui/rating';
import type { RatingRootValueChangeEvent } from 'primereact/rating';
import * as React from 'react';

export default function ControlledDemo() {
    const [value, setValue] = React.useState<number | undefined>(4);

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <Rating value={value} onValueChange={(e: RatingRootValueChangeEvent) => setValue(e.value)} />
            <div className="flex items-center gap-2">
                <button
                    onClick={() => setValue(2.5)}
                    className="px-3 py-1.5 text-sm rounded-md border border-surface-300 dark:border-surface-700 text-surface-700 dark:text-surface-0 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                >
                    2.5 Star
                </button>
                <button
                    onClick={() => setValue(3)}
                    className="px-3 py-1.5 text-sm rounded-md border border-surface-300 dark:border-surface-700 text-surface-700 dark:text-surface-0 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                >
                    3 Star
                </button>
                <button
                    onClick={() => setValue(3.5)}
                    className="px-3 py-1.5 text-sm rounded-md border border-surface-300 dark:border-surface-700 text-surface-700 dark:text-surface-0 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                >
                    3.5 Star
                </button>
            </div>
        </div>
    );
}
```

### Number of Stars

Rating supports any number of stars.

```tsx
'use client';
import { Rating } from '@/components/ui/rating';

export default function StarsDemo() {
    return (
        <div className="flex justify-center">
            <Rating defaultValue={5} stars={10} />
        </div>
    );
}
```

### Vertical

Set `orientation` to `"vertical"` for a vertical layout.

```tsx
'use client';
import { Rating } from '@/components/ui/rating';

export default function VerticalDemo() {
    return (
        <div className="flex justify-center">
            <Rating defaultValue={3} orientation="vertical" />
        </div>
    );
}
```

### Template

Custom content can be placed inside `RatingOn` and `RatingOff` instead of the default star icons.

```tsx
'use client';
import { Rating, RatingOff, RatingOn, RatingOption } from '@/components/ui/rating';

export default function TemplateDemo() {
    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <Rating defaultValue={3}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <RatingOption key={i} index={i}>
                        <RatingOn>
                            <span className="text-surface-950 dark:text-surface-0 font-medium text-4xl select-none">A</span>
                        </RatingOn>
                        <RatingOff>
                            <span className="text-surface-300 dark:text-surface-700 font-medium text-4xl select-none">A</span>
                        </RatingOff>
                    </RatingOption>
                ))}
            </Rating>
            <Rating defaultValue={3} allowHalf={false}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <RatingOption key={i} index={i}>
                        <RatingOn>
                            <span className="size-7">
                                <img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" className="size-7" />
                            </span>
                        </RatingOn>
                        <RatingOff>
                            <span className="size-7">
                                <img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" className="size-7" />
                            </span>
                        </RatingOff>
                    </RatingOption>
                ))}
            </Rating>
        </div>
    );
}
```

### Emoji

Use emojis with `data-checked` attribute to highlight only the selected option while keeping others in grayscale.

```tsx
import { Rating, RatingOff, RatingOn, RatingOption } from '@/components/ui/rating';

const emojis = ['😡', '😕', '😐', '🙂', '😍'];

export default function EmojiDemo() {
    return (
        <div className="flex justify-center">
            <Rating defaultValue={3} allowHalf={false}>
                {emojis.map((emoji, i) => (
                    <RatingOption
                        key={i}
                        index={i}
                        className="grayscale data-checked:grayscale-0 hover:grayscale-0 transition-all text-4xl select-none"
                    >
                        <RatingOn>
                            <span>{emoji}</span>
                        </RatingOn>
                        <RatingOff>
                            <span>{emoji}</span>
                        </RatingOff>
                    </RatingOption>
                ))}
            </Rating>
        </div>
    );
}
```

### ReadOnly

Use `readOnly` to display a rating without allowing changes.

```tsx
'use client';
import { Rating } from '@/components/ui/rating';

export default function ReadOnlyDemo() {
    return (
        <div className="flex justify-center">
            <Rating value={3} readOnly />
        </div>
    );
}
```

### Disabled

Use `disabled` to prevent interaction.

```tsx
'use client';
import { Rating } from '@/components/ui/rating';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Rating value={3} disabled />
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/rating/features.md#api) for `RatingRoot`, `RatingOption`, `RatingOn`, and `RatingOff` component documentation.

### Hooks

See [Headless API](../../headless/rating/features.md#api) for `useRating` and `useRatingOption` hook documentation.

## Accessibility

See [Rating Primitive](../../primitive/rating/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
