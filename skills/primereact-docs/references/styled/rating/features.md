# Rating

Rating component is a star based selection input.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Rating } from '@primereact/ui/rating';

function Preview() {
    return (
        <div className="flex justify-center [&_svg]:size-6!">
            <Rating.Root defaultValue={3.5}>
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default Preview;
```

## Usage

```tsx
import { Rating } from '@primereact/ui/rating';
```

```tsx
<Rating.Root>
    <Rating.Option />
</Rating.Root>
```

## Examples

### Basic

Captures user feedback as a star rating on a numeric scale.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Rating } from '@primereact/ui/rating';

function BasicDemo() {
    return (
        <div className="flex justify-center [&_svg]:size-6!">
            <Rating.Root defaultValue={3.5}>
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default BasicDemo;
```

### Half Stars

Use `allowHalf` property to allow half stars.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Rating } from '@primereact/ui/rating';

function AllowHalfDemo() {
    return (
        <div className="flex justify-center [&_svg]:size-6!">
            <Rating.Root defaultValue={3} allowHalf={false}>
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default AllowHalfDemo;
```

### Controlled

Use `onValueChange` to listen to value changes.

```tsx
'use client';
import { Star, StarFill } from '@primeicons/react';
import { Button } from '@primereact/ui/button';
import { Rating } from '@primereact/ui/rating';
import type { RatingRootValueChangeEvent } from '@primereact/ui/rating';
import React from 'react';

function ControlledDemo() {
    const [value, setValue] = React.useState<number | undefined>(4);

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <Rating.Root value={value} onValueChange={(e: RatingRootValueChangeEvent) => setValue(e.value)} className="[&_svg]:size-6!">
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
            <div className="flex items-center gap-2">
                <Button onClick={() => setValue(2.5)} severity="secondary" variant="outlined" size="small">
                    2.5 Star
                </Button>
                <Button onClick={() => setValue(3)} severity="secondary" variant="outlined" size="small">
                    3 Star
                </Button>
                <Button onClick={() => setValue(3.5)} severity="secondary" variant="outlined" size="small">
                    3.5 Star
                </Button>
            </div>
        </div>
    );
}

export default ControlledDemo;
```

### Number of Stars

Number of stars to display is defined with `stars` property.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Rating } from '@primereact/ui/rating';

function StarsDemo() {
    const stars = 10;

    return (
        <div className="flex justify-center [&_svg]:size-6!">
            <Rating.Root defaultValue={5}>
                {Array(stars)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default StarsDemo;
```

### Vertical

Use `orientation="vertical"` to display the rating vertically.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Rating } from '@primereact/ui/rating';

function VerticalDemo() {
    return (
        <div className="flex justify-center [&_svg]:size-6!">
            <Rating.Root defaultValue={3} orientation="vertical">
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default VerticalDemo;
```

### Template

Custom icons are used to override the default icons with `onIcon` and `offIcon` properties.

```tsx
import { Rating } from '@primereact/ui/rating';

function TemplateDemo() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 ">
            <Rating.Root defaultValue={3}>
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <span className="text-surface-950 dark:text-surface-0 font-medium text-4xl select-none">A</span>
                            </Rating.On>
                            <Rating.Off>
                                <span className="text-surface-300 dark:text-surface-700 font-medium text-4xl select-none">A</span>
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
            <Rating.Root defaultValue={3} allowHalf={false}>
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <span className="size-7">
                                    <img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" className="size-7" />
                                </span>
                            </Rating.On>
                            <Rating.Off>
                                <span className="size-7">
                                    <img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" className="size-7" />
                                </span>
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default TemplateDemo;
```

### Emoji

Use emojis with `data-checked` attribute to highlight only the selected option while keeping others in grayscale.

```tsx
import { Rating } from '@primereact/ui/rating';

const emojis = ['😡', '😕', '😐', '🙂', '😍'];

function EmojiDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root defaultValue={3} allowHalf={false}>
                {emojis.map((emoji, i) => (
                    <Rating.Option
                        key={i}
                        index={i}
                        className="!p-0 grayscale data-checked:grayscale-0 hover:grayscale-0 transition-all text-4xl select-none"
                    >
                        <Rating.On />
                        <Rating.Off>
                            <span>{emoji}</span>
                        </Rating.Off>
                    </Rating.Option>
                ))}
            </Rating.Root>
        </div>
    );
}

export default EmojiDemo;
```

### ReadOnly

When `readOnly` is present, value cannot be edited.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Rating } from '@primereact/ui/rating';

function ReadOnlyDemo() {
    return (
        <div className="flex justify-center [&_svg]:size-6!">
            <Rating.Root value={3} readOnly>
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default ReadOnlyDemo;
```

### Disabled

When `disabled` is present, value cannot be edited.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Rating } from '@primereact/ui/rating';

function DisabledDemo() {
    return (
        <div className="flex justify-center [&_svg]:size-6!">
            <Rating.Root value={3} disabled>
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default DisabledDemo;
```

## Accessibility

### Screen Reader

Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the [locale](https://v11.primereact.org/docs/configuration#locale) API via `star` and `stars` of the `aria` property.

### Keyboard Support

Keyboard interaction is derived from the native browser handling of radio buttons in a group.

| Key                        | Function                                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------- |
| `tab`                      | Moves focus to the star representing the value, if there is none then first star receives the focus. |
| `left arrow` `up arrow`    | Moves focus to the previous star, if there is none then last radio button receives the focus.        |
| `right arrow` `down arrow` | Moves focus to the next star, if there is none then first star receives the focus.                   |
| `space`                    | If the focused star does not represent the value, changes the value to the star value.               |
