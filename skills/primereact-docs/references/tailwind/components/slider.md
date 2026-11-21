# Slider

Slider is a component to provide input with a drag handle.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/slider.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Slider } from '@/components/ui/slider';
```

```tsx
<Slider defaultValue={50} />
```

## Examples

### Basic

### Step

Size of each movement is defined with the `step` property.

### Range

Slider provides two handles to define two values. In range mode, value should be an array instead of a single value.

### Handles Distance

### Vertical

Default layout of slider is `horizontal`, use `orientation` property for the alternative `vertical` mode.

### Disabled

When `disabled` is present, the element cannot be edited and focused.

### Controlled

### Value Change

### Filter

Image filter implementation using multiple sliders.

## Accessibility

### Screen Reader

Slider element component uses `slider` role on the handle in addition to the `aria-orientation`, `aria-valuemin`, `aria-valuemax` and `aria-valuenow` attributes. Value to describe the component can be defined using `aria-labelledby` and `aria-label` props.

### Keyboard Support

| Key                          | Function                          |
| ---------------------------- | --------------------------------- |
| `tab`                        | Moves focus to the slider.        |
| `left arrow` / `up arrow`    | Decrements the value.             |
| `right arrow` / `down arrow` | Increments the value.             |
| `home`                       | Set the minimum value.            |
| `end`                        | Set the maximum value.            |
| `page up`                    | Increments the value by 10 steps. |
| `page down`                  | Decrements the value by 10 steps. |
