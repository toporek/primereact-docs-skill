# Textarea

Textarea is a multi-line text input element.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/textarea.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Textarea } from '@/components/ui/textarea';
```

```tsx
<Textarea />
```

## Examples

### Basic

### Auto Resize

Textarea can automatically adjust its height based on the content by setting the `autoResize` property.

### Sizes

Textarea provides `small` and `large` sizes as alternatives to the base by setting the `size` property.

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

### Disabled

When `disabled` is present, the element cannot be edited and focused.

## Accessibility

### Screen Reader

`Textarea` renders a native `textarea` element. Provide an accessible name with a visible label, `aria-label`, or `aria-labelledby`.

### Keyboard Support

`Textarea` uses native textarea keyboard behavior.
