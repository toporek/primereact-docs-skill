# AutoComplete

AutoComplete is an input component that provides real-time suggestions when being typed.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/autocomplete.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { AutoComplete, AutoCompleteInput, AutoCompleteList, AutoCompleteOption, AutoCompletePopup, AutoCompletePortal, AutoCompletePositioner } from '@/components/ui/autocomplete';
```

```tsx
<AutoComplete options={items} optionLabel="label" onComplete={search}>
    <AutoCompleteInput placeholder="Search..." />
    <AutoCompletePortal>
        <AutoCompletePositioner>
            <AutoCompletePopup>
                <AutoCompleteList>
                    {items.map((item, index) => (
                        <AutoCompleteOption key={index} index={index}>
                            {item.label}
                        </AutoCompleteOption>
                    ))}
                </AutoCompleteList>
            </AutoCompletePopup>
        </AutoCompletePositioner>
    </AutoCompletePortal>
</AutoComplete>
```

## Examples

### Basic

An input that filters and suggests options as the user types.

### Trigger

Use `AutoComplete.Trigger` inside the root to display a trigger toggle button that opens the suggestion list.

### Chips

Use `AutoComplete.Input` with `AutoComplete.Value` inside `AutoComplete.Trigger` to compose a chip-based tag input. Selected items are displayed as removable chips inside the value area while the input remains editable for searching.

### Clear

Use `AutoComplete.Clear` inside the root to display a clear button that resets the input value.

### Custom Option

Customize option content using a render function inside `AutoComplete.Option` that receives the option instance including the `selected` state.

### Force Selection

Use the `forceSelection` property to validate manual input against the suggestions list. If no match is found, the input value is cleared to ensure the value is always from the suggestion list.

### Group

#### Simple

Options can be grouped using the `optionGroupLabel` and `optionGroupChildren` properties.

#### Custom

Customize group headers with custom rendering by accessing the list instance inside `AutoComplete.List`.

### Arrow

Use `AutoComplete.Arrow` inside the popup to display an arrow pointing to the trigger element. Set `sideOffset` on `AutoComplete.Positioner` for spacing.

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
