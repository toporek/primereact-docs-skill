# Rating

Rating component is a star based selection input.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/rating.json
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

### Without Half

Set `allowHalf` to `false` to disable half-star selection.

### Controlled

Use `value` and `onValueChange` for programmatic control.

### Number of Stars

Rating supports any number of stars.

### Vertical

Set `orientation` to `"vertical"` for a vertical layout.

### Template

Custom content can be placed inside `RatingOn` and `RatingOff` instead of the default star icons.

### Emoji

Use emojis with `data-checked` attribute to highlight only the selected option while keeping others in grayscale.

### ReadOnly

Use `readOnly` to display a rating without allowing changes.

### Disabled

Use `disabled` to prevent interaction.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/rating.md#api) for `RatingRoot`, `RatingOption`, `RatingOn`, and `RatingOff` component documentation.

### Hooks

See [Headless API](../../headless/components/rating.md#api) for `useRating` and `useRatingOption` hook documentation.

### Accessibility

See [Rating Primitive](../../primitive/components/rating.md#accessibility) for WAI-ARIA compliance details and keyboard support.
