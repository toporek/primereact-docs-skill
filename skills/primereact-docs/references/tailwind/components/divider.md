# Divider

Divider is used to separate contents.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/divider.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Divider } from '@/components/ui/divider';
```

```tsx
<Divider />
```

## Examples

### Basic

### Type

Style of the border is configured with the `type` property that can either be `solid`, `dotted` or `dashed`.

### Vertical

Vertical divider is enabled by setting the `orientation` property as `vertical`.

### Alignment

Children are rendered within the boundaries of the divider where location of the content is configured with the `align` property on `Divider`. In horizontal orientation, alignment options are `left`, `center` and `right` whereas vertical mode supports `top`, `center` and `bottom`.

## Accessibility

### Screen Reader

Divider uses a `separator` role with `aria-orientation` set to either "horizontal" or "vertical".

### Keyboard Support

Component does not include any interactive elements.
