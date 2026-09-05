# Compare

Compare is a component to compare two images with a slider.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/compare.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Compare, CompareHandle, CompareIndicator, CompareItem } from '@/components/ui/compare';
```

```tsx
<Compare>
    <CompareItem position="before">
        <img src="/before.jpg" />
    </CompareItem>
    <CompareItem position="after">
        <img src="/after.jpg" />
    </CompareItem>
    <CompareHandle>
        <CompareIndicator />
    </CompareHandle>
</Compare>
```

## Examples

### Basic

Compare two items side by side with a slider.

### Hover

### Vertical

### With Chart

### Template

## Accessibility

### Screen Reader

Compare component uses a hidden range input for keyboard accessibility. Use `ariaLabel` to provide a descriptive label.

### Keyboard Support

| Key           | Function                                          |
| ------------- | ------------------------------------------------- |
| `left arrow`  | Moves the comparison slider to the left.          |
| `right arrow` | Moves the comparison slider to the right.         |
| `home`        | Moves the comparison slider to the minimum value. |
| `end`         | Moves the comparison slider to the maximum value. |
