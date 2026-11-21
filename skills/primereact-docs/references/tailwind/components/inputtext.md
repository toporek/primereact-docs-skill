# InputText

InputText is an extension to standard input element with icons and theming.

## Installation

   Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/inputtext.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { InputText } from '@/components/ui/inputtext';
```

```tsx
<InputText placeholder="Enter text" />
```

## Examples

### Sizes

InputText provides `small` and `large` sizes as alternatives to the base by setting the `size` property.

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

### Disabled

When `disabled` is present, the element cannot be edited and focused.
