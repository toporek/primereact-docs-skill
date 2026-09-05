# Tooltip

Tooltip is a component that displays a tooltip when the user hovers over an element.

## Usage

```tsx
import { Tooltip } from '@primereact/ui/tooltip';
```

```tsx
<Tooltip.Manager>
    <Tooltip.Root>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Portal>
            <Tooltip.Positioner>
                <Tooltip.Popup>
                    Tooltip content
                    <Tooltip.Arrow />
                </Tooltip.Popup>
            </Tooltip.Positioner>
        </Tooltip.Portal>
    </Tooltip.Root>
</Tooltip.Manager>
```

## Examples

### Basic

Shows additional context for an element on hover.

### Standalone

`Tooltip.Manager` only coordinates a group of tooltips, so moving between adjacent ones skips the open delay. A single tooltip doesn't need it, wrap just the `Tooltip.Root` and its `openDelay` is honored on its own.

### Arrow

Use `Tooltip.Arrow` to display an arrow on the tooltip.

### Placement

Use `side` and `align` to control the placement of the tooltip.

### Offset

Use `sideOffset` and `alignOffset` to control the offset of the tooltip.

### Delay

Use `openDelay` and `closeDelay` to control tooltip timing. For `Tooltip.Manager`, use `timeout` to control delay when moving between adjacent tooltips.

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

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-tooltip | Class name of the root element |
| p-tooltip-arrow | Class name of the arrow element |
| p-tooltip-popup | Class name of the popup element |
| p-tooltip-positioner | Class name of the positioner element |
| p-tooltip-manager | Class name of the manager element |
| p-tooltip-portal | Class name of the portal element |
| p-tooltip-trigger | Class name of the trigger element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| tooltip.max.width | --p-tooltip-max-width | Max width of root |
| tooltip.gutter | --p-tooltip-gutter | Gutter of root |
| tooltip.shadow | --p-tooltip-shadow | Shadow of root |
| tooltip.padding | --p-tooltip-padding | Padding of root |
| tooltip.border.radius | --p-tooltip-border-radius | Border radius of root |
| tooltip.background | --p-tooltip-background | Background of root |
| tooltip.color | --p-tooltip-color | Color of root |
| tooltip.font.weight | --p-tooltip-font-weight | Font weight of root |
| tooltip.font.size | --p-tooltip-font-size | Font size of root |
