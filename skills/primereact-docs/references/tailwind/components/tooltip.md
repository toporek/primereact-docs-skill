# Tooltip

Tooltip is a component that displays a tooltip when the user hovers over an element.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/tooltip.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';
```

```tsx
<TooltipManager>
    <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipPortal>
            <TooltipPositioner>
                <TooltipPopup>
                    <TooltipArrow />
                    Tooltip content
                </TooltipPopup>
            </TooltipPositioner>
        </TooltipPortal>
    </Tooltip>
</TooltipManager>
```

## Examples

### Basic

Shows additional context for an element on hover.

### Arrow

Use `TooltipArrow` to display an arrow on the tooltip.

### Placement

Use `side` and `align` to control the placement of the tooltip.

### Offset

Use `sideOffset` and `alignOffset` to control the offset of the tooltip.

### Delay

Use `openDelay` and `closeDelay` to control tooltip timing. For `TooltipManager`, use `timeout` to control delay when moving between adjacent tooltips.

### Controlled

Use `open` and `onOpenChange` to control the tooltip programmatically.

### With ToggleButton

Tooltip can be combined with ToggleButton components to show contextual labels for grouped actions.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/tooltip.md#api) for `TooltipManager`, `TooltipRoot`, `TooltipTrigger`, `TooltipPortal`, `TooltipPositioner`, `TooltipPopup`, `TooltipArrow` component documentation.

### Hooks

See [Headless API](../../headless/components/tooltip.md#api) for `useTooltip`, `useTooltipManager` hook documentation.

### Accessibility

See [Tooltip Primitive](../../primitive/components/tooltip.md#accessibility) for WAI-ARIA compliance details and keyboard support.
