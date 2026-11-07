# Chip

Chip represents entities using icons, labels and images.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/chip.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Chip, ChipLabel, ChipStart, ChipEnd, ChipRemove } from '@/components/ui/chip';
```

```tsx
<Chip>
    <ChipStart />
    <ChipLabel>Label</ChipLabel>
    <ChipEnd>
        <ChipRemove />
    </ChipEnd>
</Chip>
```

## Examples

### Basic

Displays compact information with an optional remove action.

### Start & End Elements

### With Avatar

### Template

Chip also allows displaying custom content inside itself.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/chip.md#api) for `ChipRoot`, `ChipStart`, `ChipLabel`, `ChipEnd`, and `ChipRemove` component documentation.

### Hooks

See [Headless API](../../headless/components/chip.md#api) for `useChip` hook documentation.

### Accessibility

See [Chip Primitive](../../primitive/components/chip.md#accessibility) for WAI-ARIA compliance details and keyboard support.
