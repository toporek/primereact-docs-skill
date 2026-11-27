# CheckboxGroup

Checkbox is an extension to standard checkbox element with theming.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/checkboxgroup.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxGroup } from '@/components/ui/checkboxgroup';
```

```tsx
<CheckboxGroup>
    <Checkbox value="option1" />
    <Checkbox value="option2" />
</CheckboxGroup>
```

## Examples

### Basic

### Controlled

Drive the selection with `value` and `onValueChange` to keep it in your own state.

### Dynamic

Checkboxes can be generated using a list of values.

### Card

Checkboxes can be displayed in a card format.

### Indeterminate

Use the `indeterminate` property to display an indeterminate state.
