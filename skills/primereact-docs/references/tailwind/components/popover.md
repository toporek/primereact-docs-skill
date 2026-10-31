# Popover

Popover is an overlay container that displays content relative to a trigger.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/popover.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Popover, PopoverArrow, PopoverClose, PopoverContent, PopoverDescription, PopoverFooter, PopoverHeader, PopoverPopup, PopoverPortal, PopoverPositioner, PopoverTitle, PopoverTrigger } from '@/components/ui/popover';
```

```tsx
<Popover>
    <PopoverTrigger>Trigger</PopoverTrigger>
    <PopoverPortal>
        <PopoverPositioner>
            <PopoverPopup>
                <PopoverArrow />
                <PopoverHeader>
                    <PopoverTitle>Title</PopoverTitle>
                    <PopoverClose />
                </PopoverHeader>
                <PopoverContent>
                    <PopoverDescription>Description</PopoverDescription>
                </PopoverContent>
                <PopoverFooter />
            </PopoverPopup>
        </PopoverPositioner>
    </PopoverPortal>
</Popover>
```

## Examples

### Basic

Contextual content anchored to a trigger element.

### Controlled

Control popover state from outside with the `open` and `onOpenChange` props.

### Alignment

Use `side` and `align` to control placement. Use `sideOffset` and `alignOffset` to fine-tune spacing.

### Accessibility

Use labelled and described content with `aria-labelledby` and `aria-describedby`, and enable `closeOnEscape` for keyboard users.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/popover.md#api) for `PopoverRoot`, `PopoverTrigger`, `PopoverPortal`, `PopoverPositioner`, `PopoverPopup`, `PopoverArrow`, `PopoverHeader`, `PopoverTitle`, `PopoverClose`, `PopoverContent`, `PopoverDescription`, `PopoverFooter` component documentation.

### Hooks

See [Headless API](../../headless/components/popover.md#api) for `usePopover` hook documentation.

### Accessibility

See [Popover Primitive](../../primitive/components/popover.md#accessibility) for WAI-ARIA compliance details and keyboard support.
