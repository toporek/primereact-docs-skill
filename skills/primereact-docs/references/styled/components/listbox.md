# Listbox

Listbox is used to select one or more values from a list of items.

## Usage

```tsx
import { Listbox } from '@primereact/ui/listbox';
```

```tsx
<Listbox.Root>
    <Listbox.Header>
        <Listbox.Filter />
    </Listbox.Header>
    <Listbox.List>
        <Listbox.Option>
            <Listbox.OptionIndicator />
        </Listbox.Option>
    </Listbox.List>
    <Listbox.Empty />
    <Listbox.Footer />
</Listbox.Root>
```

## Examples

### Basic

Select one or multiple options from a scrollable list.

### Controlled

Use the `value` and `onValueChange` properties to control the selected value. The `optionLabel` and `optionValue` properties define the label and value fields of each option respectively.

### Focus Behavior

Use `autoOptionFocus` to control initial focused option behavior, `selectOnFocus` to select options while navigating with focus, and `focusOnHover` to move focus with mouse hover when the component is focused.

### Option

Use the `Listbox.Option` component to define options manually. Each option requires a `uKey` or `index` prop for identification and the `optionKey` property on the root specifies the corresponding field from the data.

### Selection

#### Checkmark

Use the `Listbox.OptionIndicator` component to display a checkmark indicator next to the selected option. The `match` prop controls visibility based on selection state with values `always`, `selected`, or `unselected`.

#### Multiple

Use the `multiple` property to allow selecting more than one item. In this mode, the value should be an array.

#### Meta Key Selection

Use `metaKeySelection` in multiple mode to require <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> for additive selection.

#### Checkbox

Combine the `multiple` property with the `Checkbox` component inside `Listbox.OptionIndicator` to render checkboxes for each option. A `Listbox.Header` can be used to add a select all control.

### Group

#### Simple

Use the `optionGroupLabel` and `optionGroupChildren` properties to organize options into groups.

#### Custom

Use the `Listbox.Option` component with the `group` prop to customize group headers with custom content like icons or flags.

### Filter

Place a `Listbox.Filter` component inside `Listbox.Header` to add a search input. Use the `as` prop to render any input component and control the filtering logic with `onChange`. A `Listbox.Empty` component displays a message when no options match.

### Invalid

Use the `invalid` property to indicate a validation error.

### Disabled

Use the `disabled` property to prevent interaction.

### Disabled Options

Use `optionDisabled` to disable specific items by field name while keeping the listbox itself interactive.

### API

### Sub-Components

See [Primitive API](../../primitive/components/listbox.md#api) for `ListboxRoot`, `ListboxList`, `ListboxOption`, `ListboxOptionIndicator`, `ListboxHeader`, `ListboxFilter`, `ListboxEmpty`, `ListboxFooter` component documentation.

### Hooks

See [Headless API](../../headless/components/listbox.md#api) for `useListbox` and `useListboxOption` hook documentation.

## Accessibility

See [Listbox Primitive](../../primitive/components/listbox.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-listbox | Class name of the root element. |
| p-listbox-header | Class name of the header element. |
| p-listbox-footer | Class name of the footer element. |
| p-listbox-filter | Class name of the filter element. |
| p-listbox-list | Class name of the list element. |
| p-listbox-option-group | Class name of the option group element. |
| p-listbox-option | Class name of the option element. |
| p-listbox-selection | Class name of the selection element. |
| p-listbox-option-check-icon | Class name of the option check icon element. |
| p-listbox-option-blank-icon | Class name of the option blank icon element. |
| p-listbox-empty-message | Class name of the empty message element. |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| listbox.background | --p-listbox-background | Background of root |
| listbox.disabled.background | --p-listbox-disabled-background | Disabled background of root |
| listbox.border.color | --p-listbox-border-color | Border color of root |
| listbox.invalid.border.color | --p-listbox-invalid-border-color | Invalid border color of root |
| listbox.color | --p-listbox-color | Color of root |
| listbox.disabled.color | --p-listbox-disabled-color | Disabled color of root |
| listbox.shadow | --p-listbox-shadow | Shadow of root |
| listbox.border.radius | --p-listbox-border-radius | Border radius of root |
| listbox.transition.duration | --p-listbox-transition-duration | Transition duration of root |
| listbox.list.padding | --p-listbox-list-padding | Padding of list |
| listbox.list.gap | --p-listbox-list-gap | Gap of list |
| listbox.list.header.padding | --p-listbox-list-header-padding | Header padding of list |
| listbox.option.focus.background | --p-listbox-option-focus-background | Focus background of option |
| listbox.option.selected.background | --p-listbox-option-selected-background | Selected background of option |
| listbox.option.selected.focus.background | --p-listbox-option-selected-focus-background | Selected focus background of option |
| listbox.option.color | --p-listbox-option-color | Color of option |
| listbox.option.focus.color | --p-listbox-option-focus-color | Focus color of option |
| listbox.option.selected.color | --p-listbox-option-selected-color | Selected color of option |
| listbox.option.selected.focus.color | --p-listbox-option-selected-focus-color | Selected focus color of option |
| listbox.option.selected.font.weight | --p-listbox-option-selected-font-weight | Font weight of a selected option |
| listbox.option.padding | --p-listbox-option-padding | Padding of option |
| listbox.option.border.radius | --p-listbox-option-border-radius | Border radius of option |
| listbox.option.striped.background | --p-listbox-option-striped-background | Striped background of option |
| listbox.option.font.weight | --p-listbox-option-font-weight | Font weight of option |
| listbox.option.font.size | --p-listbox-option-font-size | Font size of option |
| listbox.option.group.background | --p-listbox-option-group-background | Background of option group |
| listbox.option.group.color | --p-listbox-option-group-color | Color of option group |
| listbox.option.group.font.weight | --p-listbox-option-group-font-weight | Font weight of option group |
| listbox.option.group.font.size | --p-listbox-option-group-font-size | Font size of option group |
| listbox.option.group.padding | --p-listbox-option-group-padding | Padding of option group |
| listbox.checkmark.color | --p-listbox-checkmark-color | Color of checkmark |
| listbox.checkmark.gutter.start | --p-listbox-checkmark-gutter-start | Gutter start of checkmark |
| listbox.checkmark.gutter.end | --p-listbox-checkmark-gutter-end | Gutter end of checkmark |
| listbox.empty.message.padding | --p-listbox-empty-message-padding | Padding of empty message |
