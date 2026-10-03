# Select

Select is used to choose an item from a collection of options.

## Usage

```tsx
import { Select } from '@primereact/ui/select';
```

```tsx
<Select.Root>
    <Select.Trigger>
        <Select.Value />
        <Select.Clear />
        <Select.Indicator />
    </Select.Trigger>
    <Select.Portal>
        <Select.Positioner>
            <Select.Popup>
                <Select.Arrow />
                <Select.Header>
                    <Select.Filter />
                </Select.Header>
                <Select.List>
                    <Select.Option>
                        <Select.OptionIndicator />
                    </Select.Option>
                </Select.List>
                <Select.Empty />
                <Select.Footer />
            </Select.Popup>
        </Select.Positioner>
    </Select.Portal>
</Select.Root>
```

## Examples

### Basic

Choose a single value from a dropdown list of options.

### Multiple

Use the `multiple` prop to allow selecting more than one item. Place `Select.OptionIndicator` inside each option with a check icon to indicate the selection state.

### Checkmark

Use `Select.OptionIndicator` inside `Select.Option` to display a visual checkmark next to selected options. Apply `data-unselected:invisible` to hide the indicator when the option is not selected.

### Checkbox Selection

Integrate `Checkbox` components inside options for a checkbox-based multiple selection experience with select all support.

### Chips

Display selected items as removable chips by composing `Chip` components inside `Select.Value`.

### Clear

Use `Select.Clear` inside the trigger to display a clear button that resets the selection.

### Filter

Add a search field inside the popup using `Select.Header` with `Select.Filter` to filter options. The `Select.Empty` component provides a message when no results match.

### Custom Option

Customize option content using a render function inside `Select.Option` that receives the option instance including the `selected` state.

### Group

#### Simple

Options can be grouped using the `optionGroupLabel` and `optionGroupChildren` properties.

#### Custom

Customize group headers with custom rendering by accessing the list instance inside `Select.List`.

#### Checkbox and Filter

Combine grouped options, checkbox selection, and a filter to create a rich multi-select experience with a compact trigger that displays the selection count.

### Arrow

Use `Select.Arrow` inside the popup to display a visual arrow pointing to the trigger element.

### Float Label

Integrate with `FloatLabel` for animated label behavior with three variants: over, in, and on.

### Ifta Label

Use `IftaLabel` for an infield top-aligned label pattern.

### Fluid

Use the `fluid` property to make the select take up the full width of its container.

### Sizes

Use the `size` property to change the size of a select.

### Filled

Specify the `variant="filled"` property to display the component with a higher visual emphasis than the default outlined style.

### Disabled

Use the `disabled` property to disable a select.

### Invalid

Specify the `invalid` property to display the component with a red border for validation errors.

### Focus Behavior

Customize keyboard and mouse focus behavior with `autoOptionFocus`, `selectOnFocus`, and `focusOnHover` props.

### Cascade

Wrap nested `Menu.Submenu` branches inside `Select.Popup` to drill through multi-level options. Each leaf renders as a `Select.Option` so the active value gets the standard selected highlight.

### Tree

Embed `Tree` inside `Select.Popup` to expose hierarchical options. Selecting a node commits its value to `Select.Value` and the path expands to the current selection on open.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/select.md#api) for `SelectRoot`, `SelectTrigger`, `SelectList`, `SelectOption`, and other component documentation.

### Hooks

See [Headless API](../../headless/components/select.md#api) for `useSelect` hook documentation.

### Accessibility

See [Select Primitive](../../primitive/components/select.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-select | Class name of the root element. |
| p-select-trigger | Class name of the trigger element. |
| p-select-label | Class name of the label element. |
| p-select-dropdown | Class name of the icon element. |
| p-select-clear-icon | Class name of the clear icon element. |
| p-select-positioner | Class name of the positioner element. |
| p-select-panel | Class name of the panel element. |
| p-select-filter | Class name of the filter element. |
| p-select-list | Class name of the list element. |
| p-select-options | Class name of the options element. |
| p-select-option | Class name of the option element. |
| p-select-selection | Class name of the selection element. |
| p-select-empty-message | Class name of the empty message element. |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| select.background | --p-select-background | Background of root |
| select.disabled.background | --p-select-disabled-background | Disabled background of root |
| select.filled.background | --p-select-filled-background | Filled background of root |
| select.filled.hover.background | --p-select-filled-hover-background | Filled hover background of root |
| select.filled.focus.background | --p-select-filled-focus-background | Filled focus background of root |
| select.border.color | --p-select-border-color | Border color of root |
| select.hover.border.color | --p-select-hover-border-color | Hover border color of root |
| select.focus.border.color | --p-select-focus-border-color | Focus border color of root |
| select.invalid.border.color | --p-select-invalid-border-color | Invalid border color of root |
| select.color | --p-select-color | Color of root |
| select.disabled.color | --p-select-disabled-color | Disabled color of root |
| select.placeholder.color | --p-select-placeholder-color | Placeholder color of root |
| select.invalid.placeholder.color | --p-select-invalid-placeholder-color | Invalid placeholder color of root |
| select.shadow | --p-select-shadow | Shadow of root |
| select.padding.x | --p-select-padding-x | Padding x of root |
| select.padding.y | --p-select-padding-y | Padding y of root |
| select.border.radius | --p-select-border-radius | Border radius of root |
| select.focus.ring.width | --p-select-focus-ring-width | Focus ring width of root |
| select.focus.ring.style | --p-select-focus-ring-style | Focus ring style of root |
| select.focus.ring.color | --p-select-focus-ring-color | Focus ring color of root |
| select.focus.ring.offset | --p-select-focus-ring-offset | Focus ring offset of root |
| select.focus.ring.shadow | --p-select-focus-ring-shadow | Focus ring shadow of root |
| select.transition.duration | --p-select-transition-duration | Transition duration of root |
| select.sm.font.size | --p-select-sm-font-size | Sm font size of root |
| select.sm.padding.x | --p-select-sm-padding-x | Sm padding x of root |
| select.sm.padding.y | --p-select-sm-padding-y | Sm padding y of root |
| select.lg.font.size | --p-select-lg-font-size | Lg font size of root |
| select.lg.padding.x | --p-select-lg-padding-x | Lg padding x of root |
| select.lg.padding.y | --p-select-lg-padding-y | Lg padding y of root |
| select.font.weight | --p-select-font-weight | Font weight of root |
| select.font.size | --p-select-font-size | Font size of root |
| select.dropdown.width | --p-select-dropdown-width | Width of dropdown |
| select.dropdown.color | --p-select-dropdown-color | Color of dropdown |
| select.overlay.background | --p-select-overlay-background | Background of overlay |
| select.overlay.border.color | --p-select-overlay-border-color | Border color of overlay |
| select.overlay.border.radius | --p-select-overlay-border-radius | Border radius of overlay |
| select.overlay.color | --p-select-overlay-color | Color of overlay |
| select.overlay.shadow | --p-select-overlay-shadow | Shadow of overlay |
| select.list.padding | --p-select-list-padding | Padding of list |
| select.list.gap | --p-select-list-gap | Gap of list |
| select.list.header.padding | --p-select-list-header-padding | Header padding of list |
| select.option.focus.background | --p-select-option-focus-background | Focus background of option |
| select.option.selected.background | --p-select-option-selected-background | Selected background of option |
| select.option.selected.focus.background | --p-select-option-selected-focus-background | Selected focus background of option |
| select.option.color | --p-select-option-color | Color of option |
| select.option.focus.color | --p-select-option-focus-color | Focus color of option |
| select.option.selected.color | --p-select-option-selected-color | Selected color of option |
| select.option.selected.focus.color | --p-select-option-selected-focus-color | Selected focus color of option |
| select.option.selected.font.weight | --p-select-option-selected-font-weight | Font weight of a selected option |
| select.option.padding | --p-select-option-padding | Padding of option |
| select.option.border.radius | --p-select-option-border-radius | Border radius of option |
| select.option.font.weight | --p-select-option-font-weight | Font weight of option |
| select.option.font.size | --p-select-option-font-size | Font size of option |
| select.option.group.background | --p-select-option-group-background | Background of option group |
| select.option.group.color | --p-select-option-group-color | Color of option group |
| select.option.group.font.weight | --p-select-option-group-font-weight | Font weight of option group |
| select.option.group.font.size | --p-select-option-group-font-size | Font size of option group |
| select.option.group.padding | --p-select-option-group-padding | Padding of option group |
| select.clear.icon.color | --p-select-clear-icon-color | Color of clear icon |
| select.checkmark.color | --p-select-checkmark-color | Color of checkmark |
| select.checkmark.gutter.start | --p-select-checkmark-gutter-start | Gutter start of checkmark |
| select.checkmark.gutter.end | --p-select-checkmark-gutter-end | Gutter end of checkmark |
| select.empty.message.padding | --p-select-empty-message-padding | Padding of empty message |
