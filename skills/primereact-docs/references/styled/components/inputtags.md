# InputTags

InputTags groups a collection of contents in items.

## Usage

```tsx
import { InputTags } from '@primereact/ui/inputtags';
import { InputText } from '@primereact/ui/inputtext';
import { Chip } from '@primereact/ui/chip';
```

`InputTags.Items` takes a render-prop child invoked per tag with `{ item, index, remove, itemProps }`. Spread `itemProps` onto the rendered chip for ARIA roles and the `data-selected` focus marker. `InputTags.Control` exposes the text-entry props plus tag-mutation helpers, spread `controlProps` onto any input element.

```tsx
<InputTags.Root value={tags} onValueChange={(e) => setTags(e.value)}>
    <InputTags.Items>
        {({ item, remove, itemProps }) => (
            <Chip.Root {...itemProps}>
                <Chip.Label>{item}</Chip.Label>
                <Chip.Remove onClick={remove}>×</Chip.Remove>
            </Chip.Root>
        )}
    </InputTags.Items>
    <InputTags.Control>{({ controlProps }) => <InputText {...controlProps} />}</InputTags.Control>
</InputTags.Root>
```

For typeahead support, render an `<AutoComplete.Root>` tree inside `<InputTags.Control>` and call `add` from the autocomplete's `onValueChange`. `add` accepts either a single string or an array of strings. Track the InputTags root element via a callback ref + state and pass it to `<AutoComplete.Positioner anchor={...}>` so the popup matches the full field width instead of just the input.

```tsx
const [rootEl, setRootEl] = React.useState<HTMLElement | null>(null);

<InputTags.Root ref={setRootEl} value={skills} onValueChange={(e) => setSkills(e.value)}>
    <InputTags.Items>
        {({ item, remove, itemProps }) => (
            <Chip.Root {...itemProps}>
                <Chip.Label>{item}</Chip.Label>
                <Chip.Remove onClick={remove}>×</Chip.Remove>
            </Chip.Root>
        )}
    </InputTags.Items>
    <InputTags.Control>
        {({ controlProps, add }) => (
            <AutoComplete.Root
                options={items}
                optionLabel="label"
                onComplete={onSearch}
                onValueChange={(e) => {
                    if (e.option) add(e.option.label);
                }}
            >
                <AutoComplete.Input {...controlProps} />
                <AutoComplete.Portal>
                    <AutoComplete.Positioner anchor={rootEl}>
                        <AutoComplete.Popup>
                            <AutoComplete.List />
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        )}
    </InputTags.Control>
</InputTags.Root>;
```

## Examples

### Basic

Allows entering multiple values as removable tags.

### Delimiter

A new tag is added when `enter` key is pressed, `delimiter` property allows defining an additional key. Currently only valid value is `,` to create a new item when comma key is pressed.

### Allow Duplicate

When `allowDuplicate` is enabled, the same value can be added multiple times as separate tags.

### Max

The `max` property limits the number of tags that can be added. Once the limit is reached, no more tags can be entered.

### Item

`InputTags.Items` takes a render-prop child invoked per tag with `{ item, index, remove, itemProps }`. Compose any chip-like JSX inside, `Chip.*`, `Tag`, a plain `<span>`, etc.

### Typeahead

InputTags composes with `AutoComplete` for typeahead-driven tag entry. Render `<AutoComplete.Root>` inside `<InputTags.Control>`, spread `controlProps` onto `<AutoComplete.Input>`, and call `add(label)` from AC's `onValueChange` when an option is selected. AC's `onComplete` drives filtering; grouped suggestions work via `optionGroupLabel` / `optionGroupChildren` on AC.

### Events

The `onAdd` and `onRemove` callbacks are triggered when tags are added or removed, providing the tag value and index for custom handling like logging, analytics or validation.

### Float Label

A floating label is displayed when the input is focused or filled.

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit [IftaLabel](https://primereact.dev/docs/components/iftalabel) documentation for more information.

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

### Disabled

When `disabled` is present, the element cannot be edited and focused.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/inputtags.md#api) for `InputTagsRoot`, `InputTagsItems`, and `InputTagsControl` documentation.

### Hooks

See [Headless API](../../headless/components/inputtags.md#api) for `useInputTags` hook documentation.

### Accessibility

See [InputTags Primitive](../../primitive/components/inputtags.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-inputtags | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| inputchips.background | --p-inputchips-background | Background of root |
| inputchips.disabled.background | --p-inputchips-disabled-background | Disabled background of root |
| inputchips.filled.background | --p-inputchips-filled-background | Filled background of root |
| inputchips.filled.focus.background | --p-inputchips-filled-focus-background | Filled focus background of root |
| inputchips.border.color | --p-inputchips-border-color | Border color of root |
| inputchips.hover.border.color | --p-inputchips-hover-border-color | Hover border color of root |
| inputchips.focus.border.color | --p-inputchips-focus-border-color | Focus border color of root |
| inputchips.invalid.border.color | --p-inputchips-invalid-border-color | Invalid border color of root |
| inputchips.color | --p-inputchips-color | Color of root |
| inputchips.disabled.color | --p-inputchips-disabled-color | Disabled color of root |
| inputchips.placeholder.color | --p-inputchips-placeholder-color | Placeholder color of root |
| inputchips.shadow | --p-inputchips-shadow | Shadow of root |
| inputchips.padding.x | --p-inputchips-padding-x | Padding x of root |
| inputchips.padding.y | --p-inputchips-padding-y | Padding y of root |
| inputchips.border.radius | --p-inputchips-border-radius | Border radius of root |
| inputchips.focus.ring.width | --p-inputchips-focus-ring-width | Focus ring width of root |
| inputchips.focus.ring.style | --p-inputchips-focus-ring-style | Focus ring style of root |
| inputchips.focus.ring.color | --p-inputchips-focus-ring-color | Focus ring color of root |
| inputchips.focus.ring.offset | --p-inputchips-focus-ring-offset | Focus ring offset of root |
| inputchips.focus.ring.shadow | --p-inputchips-focus-ring-shadow | Focus ring shadow of root |
| inputchips.transition.duration | --p-inputchips-transition-duration | Transition duration of root |
| inputchips.chip.border.radius | --p-inputchips-chip-border-radius | Border radius of chip |
| inputchips.chip.focus.background | --p-inputchips-chip-focus-background | Focus background of chip |
| inputchips.chip.color | --p-inputchips-chip-color | Color of chip |
