# ToggleButton

ToggleButton component is used to create a button that can be toggled on or off.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/togglebutton.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { ToggleButton } from '@/components/ui/togglebutton';
```

```tsx
<ToggleButton>Toggle</ToggleButton>
```

## Examples

### Basic

### Render Props

This is called the render prop pattern. It allows using a function to customize what the component displays based on its internal state.

### Controlled

Use `pressed` and `onPressedChange` properties to control the state of the ToggleButton.

### Size

`ToggleButton` provides small and large sizes as alternatives to the base by using the `size` property.

### Fluid

When `fluid` is enabled, the ToggleButton spans the full width of its parent container.

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

### Disabled

When `disabled` is present, the element cannot be edited and focused.
