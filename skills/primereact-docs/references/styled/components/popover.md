# Popover

Popover is an overlay container that displays content relative to a trigger.

## Usage

```tsx
import { Popover } from '@primereact/ui/popover';
```

```tsx
<Popover.Root>
    <Popover.Trigger />
    <Popover.Portal>
        <Popover.Positioner>
            <Popover.Popup>
                <Popover.Arrow />
                <Popover.Header>
                    <Popover.Title />
                    <Popover.Close />
                </Popover.Header>
                <Popover.Content>
                    <Popover.Description />
                </Popover.Content>
                <Popover.Footer />
            </Popover.Popup>
        </Popover.Positioner>
    </Popover.Portal>
</Popover.Root>
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

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-popover | Class name of the root element |
| p-popover-content | Class name of the content element |
| p-popover-positioner | Class name of the positioner element |
| p-popover-arrow | Class name of the arrow element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| popover.background | --p-popover-background | Background of root |
| popover.border.color | --p-popover-border-color | Border color of root |
| popover.color | --p-popover-color | Color of root |
| popover.border.radius | --p-popover-border-radius | Border radius of root |
| popover.shadow | --p-popover-shadow | Shadow of root |
| popover.gutter | --p-popover-gutter | Gutter of root |
| popover.arrow.offset | --p-popover-arrow-offset | Arrow offset of root |
| popover.content.padding | --p-popover-content-padding | Padding of content |
