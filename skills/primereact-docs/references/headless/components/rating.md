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

```tsx
import { useRating, useRatingOption } from '@primereact/headless/rating';
```

```tsx
const rating = useRating({ defaultValue: 3 });
const option = useRatingOption({ index: 0, context: rating });

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
</div>;
```

`useRating` manages root-level state (value, hovering) while `useRatingOption` manages per-option state (highlighted, half, checked) and interactions. See [Primitive](../../primitive/components/rating.md) for a component-based API.

## Features

- **Root + per-option split**, `useRating` owns value and hover; `useRatingOption` owns individual star rendering
- **Half-star support**, `allowHalf` unlocks `halfInputProps` and a per-option `half` state flag
- **Hover preview**, `state.hovering` and `state.hoveringValue` drive preview styling without extra state
- **Orientation aware**, horizontal and vertical layouts share the same props; half detection follows the chosen axis
- **Controlled or uncontrolled value**, drive from external state or let the hook manage it internally
- **Disabled and read-only modes**, interaction blocked via `disabled` or locked to display via `readOnly`

## Working with callbacks

### Controlled value

Use `value` and `onValueChange` for full programmatic control. The callback receives `{ originalEvent, value }`.

```tsx
const [value, setValue] = React.useState(3);

const rating = useRating({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Half-star selection

Enable `allowHalf` and render both the half and full inputs per option, the hook wires up input semantics so clicks in the first/second half resolve to the correct fractional value.

```tsx
const rating = useRating({ allowHalf: true, defaultValue: 3.5 });
const option = useRatingOption({ index: 0, context: rating });
```

### Hover preview styling

Use `state.hovering` and `state.hoveringValue` to preview a rating under the cursor without committing it.

```tsx
const rating = useRating({ defaultValue: 3 });

const displayValue = rating.state.hovering ? rating.state.hoveringValue : rating.state.value;
```

### Vertical orientation

Set `orientation` to `"vertical"`, half-star detection switches to the vertical axis automatically and every prop object receives `data-orientation="vertical"`.

```tsx
const rating = useRating({ orientation: 'vertical' });
```

### Read-only displays

Use `readOnly` when rendering an existing rating (reviews, summaries) so it remains focusable and announced without accepting input.

```tsx
const rating = useRating({ readOnly: true, value: product.averageRating });
```

## Styling with data attributes

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

Arrow keys move between stars, and Enter or Space sets the current rating value. See [Primitive](../../primitive/components/rating.md#accessibility) for full WAI-ARIA compliance details.
