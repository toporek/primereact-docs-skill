# SpeedDial

SpeedDial is a floating action button with a popup menu displaying a set of actions.

## Usage

```tsx
import { SpeedDial } from '@primereact/ui/speeddial';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
```

```tsx
<SpeedDial.Root>
    <SpeedDial.Trigger>
        <Plus />
    </SpeedDial.Trigger>
    <SpeedDial.List>
        <SpeedDial.Item>
            <SpeedDial.Action>
                <Pencil />
            </SpeedDial.Action>
        </SpeedDial.Item>
    </SpeedDial.List>
</SpeedDial.Root>
```

## Examples

### Basic

SpeedDial displays related actions from a single trigger button.

### Linear

When `type` is set to `linear` (default), items are displayed in a line based on the `direction` prop. The direction can be `up`, `down`, `left`, or `right`.

### Circle

Items can be displayed around the button when `type` is set to `circle`. Additional `radius` property defines the radius of the circle.

### Semi Circle

When `type` is defined as `semi-circle`, items are displayed in a half-circle around the button.

### Quarter Circle

Setting `type` as `quarter-circle` displays the items at one of four corners of a button based on the `direction`.

### Transition Delay

The `transitionDelay` property specifies the delay in milliseconds between each action item's appearance animation.

### Template

SpeedDial supports full customization of the button and action items using render props or custom components.

### Tooltip

SpeedDial can be combined with Tooltip component to display labels for action items.

### Mask

SpeedDial can be combined with Motion component to display a mask overlay when opened.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/speeddial.md#api) for `SpeedDialRoot`, `SpeedDialTrigger`, `SpeedDialList`, `SpeedDialItem`, `SpeedDialAction` component documentation.

### Hooks

See [Headless API](../../headless/components/speeddial.md#api) for `useSpeedDial` hook documentation.

### Accessibility

See [SpeedDial Primitive](../../primitive/components/speeddial.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-speeddial | Class name of the root element |
| p-speeddial-button | Class name of the button element |
| p-speeddial-list | Class name of the list element |
| p-speeddial-item | Class name of the item element |
| p-speeddial-action | Class name of the action element |
| p-speeddial-mask | Class name of the mask element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| speeddial.gap | --p-speeddial-gap | Gap of root |
| speeddial.transition.duration | --p-speeddial-transition-duration | Transition duration of root |
