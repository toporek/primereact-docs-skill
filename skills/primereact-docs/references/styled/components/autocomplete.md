# AutoComplete

AutoComplete is an input component that provides real-time suggestions when being typed.

## Usage

```tsx
import { AutoComplete } from '@primereact/ui/autocomplete';
```

```tsx
<AutoComplete.Root>
    <AutoComplete.Input />
    <AutoComplete.Clear />
    <AutoComplete.Trigger>
        <AutoComplete.Value />
        <AutoComplete.Indicator />
    </AutoComplete.Trigger>
    <AutoComplete.Portal>
        <AutoComplete.Positioner>
            <AutoComplete.Popup>
                <AutoComplete.Header />
                <AutoComplete.List>
                    <AutoComplete.Option>
                        <AutoComplete.OptionIndicator />
                    </AutoComplete.Option>
                </AutoComplete.List>
                <AutoComplete.Empty />
                <AutoComplete.Footer />
            </AutoComplete.Popup>
        </AutoComplete.Positioner>
    </AutoComplete.Portal>
</AutoComplete.Root>
```

## Examples

### Basic

An input that filters and suggests options as the user types.

### Trigger

Use `AutoComplete.Trigger` inside the root to display a trigger toggle button that opens the suggestion list.

### Chips

Use `AutoComplete.Input` with `AutoComplete.Value` inside `AutoComplete.Trigger` to compose a chip-based tag input. Selected items are displayed as removable chips inside the value area while the input remains editable for searching.

### Custom Option

Customize option content using a render function inside `AutoComplete.Option` that receives the option instance including the `selected` state.

### Group

#### Simple

Options can be grouped using the `optionGroupLabel` and `optionGroupChildren` properties.

#### Custom

Customize group headers with custom rendering by accessing the list instance inside `AutoComplete.List`.

### Command Menu

Combine `AutoComplete` with `Dialog` to build a searchable command palette. Grouped options are rendered through the list instance with custom group headers, and selecting an option closes the dialog.

### Force Selection

Use the `forceSelection` property to validate manual input against the suggestions list. If no match is found, the input value is cleared to ensure the value is always from the suggestion list.

### Float Label

Integrate with `FloatLabel` for animated label behavior with three variants: over, in, and on.

### Ifta Label

Use `IftaLabel` for an infield top-aligned label pattern.

### Arrow

Use `AutoComplete.Arrow` inside the popup to display an arrow pointing to the trigger element. Set `sideOffset` on `AutoComplete.Positioner` for spacing.

### Clear

Use `AutoComplete.Clear` inside the root to display a clear button that resets the input value.

### Fluid

Use the `fluid` property to make the autocomplete take up the full width of its container.

### Loading

Compose a loading indicator alongside the autocomplete input using `InputGroup` to display an async loading state.

### Sizes

Use the `size` property to change the size of an autocomplete.

### Filled

Specify the `variant="filled"` property to display the component with a higher visual emphasis than the default outlined style.

### Disabled

Use the `disabled` property to disable an autocomplete.

### Invalid

Specify the `invalid` property to display the component with a red border for validation errors.

### Focus Behavior

Customize keyboard and mouse focus behavior with `autoOptionFocus`, `selectOnFocus`, and `focusOnHover` props.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/autocomplete.md#api) for `AutoCompleteRoot`, `AutoCompleteInput`, `AutoCompleteTrigger`, `AutoCompleteList`, `AutoCompleteOption`, and other component documentation.

### Hooks

See [Headless API](../../headless/components/autocomplete.md#api) for `useAutoComplete` hook documentation.

### Accessibility

See [AutoComplete Primitive](../../primitive/components/autocomplete.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-autocomplete | Class name of the root element. |
| p-autocomplete-input | Class name of the input element. |
| p-autocomplete-clear-icon | Class name of the clear element. |
| p-autocomplete-arrow | Class name of the arrow element. |
| p-autocomplete-indicator | Class name of the indicator element. |
| p-autocomplete-dropdown | Class name of the trigger element. |
| p-autocomplete-list-container | Class name of the popup element. |
| p-autocomplete-list | Class name of the list element. |
| p-autocomplete-option | Class name of the option element. |
| p-autocomplete-option-indicator | Class name of the option indicator element. |
| p-autocomplete-label | Class name of the label element (non-editable mode). |
| p-autocomplete-empty-message | Class name of the empty message element. |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| autocomplete.background | --p-autocomplete-background | Background of root |
| autocomplete.disabled.background | --p-autocomplete-disabled-background | Disabled background of root |
| autocomplete.filled.background | --p-autocomplete-filled-background | Filled background of root |
| autocomplete.filled.hover.background | --p-autocomplete-filled-hover-background | Filled hover background of root |
| autocomplete.filled.focus.background | --p-autocomplete-filled-focus-background | Filled focus background of root |
| autocomplete.border.color | --p-autocomplete-border-color | Border color of root |
| autocomplete.hover.border.color | --p-autocomplete-hover-border-color | Hover border color of root |
| autocomplete.focus.border.color | --p-autocomplete-focus-border-color | Focus border color of root |
| autocomplete.invalid.border.color | --p-autocomplete-invalid-border-color | Invalid border color of root |
| autocomplete.color | --p-autocomplete-color | Color of root |
| autocomplete.disabled.color | --p-autocomplete-disabled-color | Disabled color of root |
| autocomplete.placeholder.color | --p-autocomplete-placeholder-color | Placeholder color of root |
| autocomplete.invalid.placeholder.color | --p-autocomplete-invalid-placeholder-color | Invalid placeholder color of root |
| autocomplete.shadow | --p-autocomplete-shadow | Shadow of root |
| autocomplete.padding.x | --p-autocomplete-padding-x | Padding x of root |
| autocomplete.padding.y | --p-autocomplete-padding-y | Padding y of root |
| autocomplete.border.radius | --p-autocomplete-border-radius | Border radius of root |
| autocomplete.focus.ring.width | --p-autocomplete-focus-ring-width | Focus ring width of root |
| autocomplete.focus.ring.style | --p-autocomplete-focus-ring-style | Focus ring style of root |
| autocomplete.focus.ring.color | --p-autocomplete-focus-ring-color | Focus ring color of root |
| autocomplete.focus.ring.offset | --p-autocomplete-focus-ring-offset | Focus ring offset of root |
| autocomplete.focus.ring.shadow | --p-autocomplete-focus-ring-shadow | Focus ring shadow of root |
| autocomplete.transition.duration | --p-autocomplete-transition-duration | Transition duration of root |
| autocomplete.overlay.background | --p-autocomplete-overlay-background | Background of overlay |
| autocomplete.overlay.border.color | --p-autocomplete-overlay-border-color | Border color of overlay |
| autocomplete.overlay.border.radius | --p-autocomplete-overlay-border-radius | Border radius of overlay |
| autocomplete.overlay.color | --p-autocomplete-overlay-color | Color of overlay |
| autocomplete.overlay.shadow | --p-autocomplete-overlay-shadow | Shadow of overlay |
| autocomplete.list.padding | --p-autocomplete-list-padding | Padding of list |
| autocomplete.list.gap | --p-autocomplete-list-gap | Gap of list |
| autocomplete.option.focus.background | --p-autocomplete-option-focus-background | Focus background of option |
| autocomplete.option.selected.background | --p-autocomplete-option-selected-background | Selected background of option |
| autocomplete.option.selected.focus.background | --p-autocomplete-option-selected-focus-background | Selected focus background of option |
| autocomplete.option.color | --p-autocomplete-option-color | Color of option |
| autocomplete.option.focus.color | --p-autocomplete-option-focus-color | Focus color of option |
| autocomplete.option.selected.color | --p-autocomplete-option-selected-color | Selected color of option |
| autocomplete.option.selected.focus.color | --p-autocomplete-option-selected-focus-color | Selected focus color of option |
| autocomplete.option.padding | --p-autocomplete-option-padding | Padding of option |
| autocomplete.option.border.radius | --p-autocomplete-option-border-radius | Border radius of option |
| autocomplete.option.font.weight | --p-autocomplete-option-font-weight | Font weight of option |
| autocomplete.option.font.size | --p-autocomplete-option-font-size | Font size of option |
| autocomplete.option.group.background | --p-autocomplete-option-group-background | Background of option group |
| autocomplete.option.group.color | --p-autocomplete-option-group-color | Color of option group |
| autocomplete.option.group.font.weight | --p-autocomplete-option-group-font-weight | Font weight of option group |
| autocomplete.option.group.font.size | --p-autocomplete-option-group-font-size | Font size of option group |
| autocomplete.option.group.padding | --p-autocomplete-option-group-padding | Padding of option group |
| autocomplete.dropdown.width | --p-autocomplete-dropdown-width | Width of dropdown |
| autocomplete.dropdown.sm.width | --p-autocomplete-dropdown-sm-width | Sm width of dropdown |
| autocomplete.dropdown.lg.width | --p-autocomplete-dropdown-lg-width | Lg width of dropdown |
| autocomplete.dropdown.border.color | --p-autocomplete-dropdown-border-color | Border color of dropdown |
| autocomplete.dropdown.hover.border.color | --p-autocomplete-dropdown-hover-border-color | Hover border color of dropdown |
| autocomplete.dropdown.active.border.color | --p-autocomplete-dropdown-active-border-color | Active border color of dropdown |
| autocomplete.dropdown.border.radius | --p-autocomplete-dropdown-border-radius | Border radius of dropdown |
| autocomplete.dropdown.focus.ring.width | --p-autocomplete-dropdown-focus-ring-width | Focus ring width of dropdown |
| autocomplete.dropdown.focus.ring.style | --p-autocomplete-dropdown-focus-ring-style | Focus ring style of dropdown |
| autocomplete.dropdown.focus.ring.color | --p-autocomplete-dropdown-focus-ring-color | Focus ring color of dropdown |
| autocomplete.dropdown.focus.ring.offset | --p-autocomplete-dropdown-focus-ring-offset | Focus ring offset of dropdown |
| autocomplete.dropdown.focus.ring.shadow | --p-autocomplete-dropdown-focus-ring-shadow | Focus ring shadow of dropdown |
| autocomplete.dropdown.background | --p-autocomplete-dropdown-background | Background of dropdown |
| autocomplete.dropdown.hover.background | --p-autocomplete-dropdown-hover-background | Hover background of dropdown |
| autocomplete.dropdown.active.background | --p-autocomplete-dropdown-active-background | Active background of dropdown |
| autocomplete.dropdown.color | --p-autocomplete-dropdown-color | Color of dropdown |
| autocomplete.dropdown.hover.color | --p-autocomplete-dropdown-hover-color | Hover color of dropdown |
| autocomplete.dropdown.active.color | --p-autocomplete-dropdown-active-color | Active color of dropdown |
| autocomplete.chip.border.radius | --p-autocomplete-chip-border-radius | Border radius of chip |
| autocomplete.chip.focus.background | --p-autocomplete-chip-focus-background | Focus background of chip |
| autocomplete.chip.focus.color | --p-autocomplete-chip-focus-color | Focus color of chip |
| autocomplete.empty.message.padding | --p-autocomplete-empty-message-padding | Padding of empty message |
