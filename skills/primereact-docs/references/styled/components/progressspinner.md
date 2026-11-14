# ProgressSpinner

ProgressSpinner is a process status indicator that supports both determinate and indeterminate modes.

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

### Determinate

Set a numeric `value` prop to display a determinate progress indicator with a track and range.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/progressspinner.md#api) for `ProgressSpinner` component documentation.

### Hooks

See [Headless API](../../headless/components/progressspinner.md#api) for `useProgressSpinner` hook documentation.

### Accessibility

See [ProgressSpinner Primitive](../../primitive/components/progressspinner.md#accessibility) for WAI-ARIA compliance details and keyboard support.
