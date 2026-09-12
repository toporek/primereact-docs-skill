# Listbox

Listbox is used to select one or more values from a list of items.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/listbox.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Listbox, ListboxList, ListboxOption } from '@/components/ui/listbox';
```

```tsx
<Listbox options={items} optionLabel="name">
    <ListboxList>
        {items.map((item, index) => (
            <ListboxOption key={index} index={index}>
                {item.name}
            </ListboxOption>
        ))}
    </ListboxList>
</Listbox>
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
