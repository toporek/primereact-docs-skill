# ToggleButtonGroup

ToggleButtonGroup component is used to create a group of toggle buttons.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/togglebuttongroup.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { ToggleButtonGroup } from '@/components/ui/togglebuttongroup';
```

```tsx
<ToggleButtonGroup>
    <ToggleButton value="option1">Option 1</ToggleButton>
    <ToggleButton value="option2">Option 2</ToggleButton>
</ToggleButtonGroup>
```

## Examples

### Basic

### Controlled

Use `value` and `onValueChange` properties to control the state of the `ToggleButtonGroup`.

### Multiple

`ToggleButtonGroup` allows selecting only one item by default and setting `multiple` option enables choosing more than one item. In multiple case, model property should be an array.

### Sizes

`ToggleButtonGroup` provides small and large sizes as alternatives to the base by using the `size` property.

### Fluid

When `fluid` is enabled, the ToggleButtonGroup spans the full width of its parent container, distributing the buttons evenly.

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

### Disabled

When `disabled` is present, the element cannot be edited and focused entirely. Certain options can also be disabled using their `disabled` properties.
