# ProgressBar

ProgressBar is a process status indicator.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/progressbar.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { ProgressBar } from '@/components/ui/progressbar';
```

```tsx
<ProgressBar value={50} />
```

## Examples

### Basic

Reflects the completion percentage of an ongoing process.

### Dynamic

Value is reactive so updating it dynamically changes the bar as well.

### Formatter

Custom formatter function to format the display value.

### Template

Place `ProgressBar.Value` where the progress value should be displayed inside the `ProgressBar` and customize `formatter` prop to display in different format.

### Indeterminate

For progresses with no value to track, set the `mode` property to `indeterminate`.

### As Steps

Steps are used to display a progress with multiple steps.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/progressbar.md#api) for `ProgressBarRoot`, `ProgressBarTrack`, `ProgressBarIndicator`, `ProgressBarLabel`, `ProgressBarValue` component documentation.

### Hooks

See [Headless API](../../headless/components/progressbar.md#api) for `useProgressBar` hook documentation.

### Accessibility

See [ProgressBar Primitive](../../primitive/components/progressbar.md#accessibility) for WAI-ARIA compliance details and keyboard support.
