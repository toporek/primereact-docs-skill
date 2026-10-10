# Select

Select is used to choose an item from a collection of options.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/select.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Select, SelectList, SelectOption, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';
```

```tsx
<Select options={items} optionLabel="label" optionValue="value">
    <SelectTrigger>
        <SelectValue placeholder="Select an item" />
    </SelectTrigger>
    <SelectPortal>
        <SelectPositioner>
            <SelectPopup>
                <SelectList>
                    {items.map((item, index) => (
                        <SelectOption key={index} index={index}>
                            {item.label}
                        </SelectOption>
                    ))}
                </SelectList>
            </SelectPopup>
        </SelectPositioner>
    </SelectPortal>
</Select>
```

## Examples

### Basic

Choose a single value from a dropdown list of options.

### Multiple

Use the `multiple` prop to allow selecting more than one item. Place `Select.OptionIndicator` inside each option with a check icon to indicate the selection state.

### Chips

Display selected items as removable chips by composing `Chip` components inside `Select.Value`.

### Clear

Use `Select.Clear` inside the trigger to display a clear button that resets the selection.

### Filter

Add a search field inside the popup using `Select.Header` with `Select.Filter` to filter options. The `Select.Empty` component provides a message when no results match.

### Group

#### Simple

Options can be grouped using the `optionGroupLabel` and `optionGroupChildren` properties.

#### Custom

Customize group headers with custom rendering by accessing the list instance inside `Select.List`.

### Arrow

Use `Select.Arrow` inside the popup to display a visual arrow pointing to the trigger element.

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

## Related

### Sub-Components

See [Primitive API](../../primitive/components/select.md#api) for `SelectRoot`, `SelectTrigger`, `SelectList`, `SelectOption`, and other component documentation.

### Hooks

See [Headless API](../../headless/components/select.md#api) for `useSelect` hook documentation.

### Accessibility

See [Select Primitive](../../primitive/components/select.md#accessibility) for WAI-ARIA compliance details and keyboard support.
