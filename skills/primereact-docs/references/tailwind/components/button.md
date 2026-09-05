# Button

Button is an extension to standard input element with icons and theming.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/button.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Button } from '@/components/ui';
```

```tsx
<Button>Button</Button>
```

## Examples

### Basic

### Icons

### Loading

### As Link

Use `as="a"` to render a button as HTML anchor tag or use `as={Link}` to use Next.js Link.

### Severity

The `severity` property defines the variant of a button.

### Raised

Raised buttons display a shadow to indicate elevation.

### Rounded

Rounded buttons have a circular border radius.

### Text

Text buttons are displayed as textual elements.

### Raised Text

Text buttons can be displayed elevated with the `raised` option.

### Outlined

Outlined buttons display a border without a transparent background.

### Icon Only

Buttons can have icons without labels. Use `iconOnly` to display only an icon.

### Badge

`Badge` component can be used to display a badge inside a button. `OverlayBadge` is used to display a badge on a button.

### Sizes

Button provides `small` and `large` sizes as alternatives to the base.

### Disabled

When `disabled` is present, the element cannot be used.
