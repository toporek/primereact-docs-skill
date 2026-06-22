# useRating

Hooks that manage rating state, hover interactions, and value resolution for star-based selection input.

```tsx
'use client';
import { Star, StarFill } from '@primeicons/react';
import { useRating, useRatingOption } from '@primereact/headless/rating';

function RatingOption({ index, context }: { index: number; context: ReturnType<typeof useRating> }) {
    const option = useRatingOption({ index, context });

    return (
        <div
            ref={option.optionRef as React.RefObject<HTMLDivElement>}
            {...context.optionProps}
            {...option.optionProps}
            className="relative cursor-pointer has-[:focus-visible]:outline-1 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary has-[:focus-visible]:rounded-sm"
        >
            {option.halfInputProps && <input {...option.halfInputProps} />}
            <input {...option.fullInputProps} />
            <div
                {...context.onProps}
                {...option.onIconProps}
                className="flex absolute inset-0 overflow-hidden z-1"
                style={{ clipPath: option.state.half ? 'inset(0 50% 0 0)' : option.state.highlighted ? 'none' : 'inset(0 100% 0 0)' }}
            >
                <StarFill className="size-5! text-primary" />
            </div>
            <div {...context.offProps} {...option.offIconProps} className="flex">
                <Star className="size-5! text-surface-300 dark:text-surface-600" />
            </div>
        </div>
    );
}

export default function BasicDemo() {
    const rating = useRating({ defaultValue: 3 });

    return (
        <div className="flex justify-center">
            <div {...rating.rootProps} className="inline-flex relative">
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <RatingOption key={i} index={i} context={rating} />
                    ))}
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1-2,4-5,8-14}
import { useRating } from '@primereact/headless/rating';
import { useRatingOption } from '@primereact/headless/rating';

const rating = useRating({ defaultValue: 3 });
const option = useRatingOption({ index: 0, context: rating });

return (
    <div {...rating.rootProps}>
        <div ref={option.optionRef} {...rating.optionProps} {...option.optionProps}>
            <input {...option.fullInputProps} className="sr-only" />
            <div {...rating.onProps} {...option.onIconProps}>
                filled icon
            </div>
            <div {...rating.offProps} {...option.offIconProps}>
                empty icon
            </div>
        </div>
    </div>
);
```

`useRating` manages root-level state (value, hovering) while `useRatingOption` manages per-option state (highlighted, half, checked) and interactions — see [Primitive](../../primitive/rating/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects (`rootProps`, `optionProps`, `onProps`, `offProps`)
- `useRatingOption` returns per-option props (`optionProps`, `onIconProps`, `offIconProps`, `halfInputProps`, `fullInputProps`)
- Controlled and uncontrolled value state
- Half-star support via `allowHalf`
- Horizontal and vertical orientation
- Hover preview with `state.hovering` and `state.hoveringValue`

## Behavior

### Default Value

Use `defaultValue` to set the initial value.

```tsx
const rating = useRating({ defaultValue: 3.5 });
```

### Controlled

Use `value` and `onValueChange` for full programmatic control.

```tsx
const [value, setValue] = React.useState(3);
const rating = useRating({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

The `onValueChange` callback receives `{ originalEvent, value }` where `value` is the new numeric rating.

### Half Stars

Set `allowHalf` to enable half-star selection. When enabled, `useRatingOption` returns `halfInputProps` for the half-value radio input.

```tsx
const rating = useRating({ allowHalf: true });
const option = useRatingOption({ index: 0, context: rating });

// option.halfInputProps is non-null when allowHalf is true
// option.state.half is true when this option is half-filled
```

### Disabled

Set `disabled` to prevent interaction. All prop objects include `data-disabled`.

```tsx
const rating = useRating({ disabled: true });
```

### Read Only

Set `readOnly` to prevent value changes while keeping the component focusable.

```tsx
const rating = useRating({ readOnly: true });
```

### Vertical Orientation

Set `orientation` to `"vertical"` for vertical layout. Half-star detection uses the vertical axis. All prop objects include `data-orientation`.

```tsx
const rating = useRating({ orientation: 'vertical' });
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="rating"` and a `data-part` attribute. State-dependent attributes are added automatically.

```css
[data-scope='rating'][data-part='root'] {
    display: inline-flex;
}

[data-scope='rating'][data-part='root'][data-orientation='vertical'] {
    flex-direction: column;
}

[data-scope='rating'][data-part='option'][data-highlighted] {
    /* option is fully or partially filled */
}

[data-scope='rating'][data-part='option'][data-half] {
    /* option is half-filled */
}

[data-scope='rating'][data-part='option'][data-checked] {
    /* option is the active one */
}

[data-scope='rating'][data-part='root'][data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}
```

## API

### useRating

> **API/props table for `useRating` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### useRatingOption

> **API/props table for `useRatingOption` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Rating Primitive](../../primitive/rating/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
