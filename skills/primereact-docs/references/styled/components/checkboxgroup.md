# CheckboxGroup

CheckboxGroup groups multiple checkboxes and manages their shared value.

## Usage

```tsx
import { Checkbox } from '@primereact/ui/checkbox';
import { CheckboxGroup } from '@primereact/ui/checkboxgroup';
```

```tsx
<CheckboxGroup></CheckboxGroup>
```

## Examples

### Basic

A group of checkboxes sharing a common value array.

### Controlled

Drive the selection with `value` and `onValueChange` to keep it in your own state.

### Dynamic

Checkboxes can be generated using a list of values.

### Card

Checkboxes can be displayed in a card format.

### Indeterminate

Use `indeterminate` on a `Checkbox.Root` (typically a parent/select-all option) to display a partial selection state.

### Nested Group

Use nested groups to manage team-level and permission-level selections in access control flows.

### Indicator

Use `Checkbox.Indicator` in each group item to render the checked state.

`Checkbox.Indicator` also accepts a `match` prop to render based on the checkbox state.

```tsx
<Checkbox.Root indeterminate>
    <Checkbox.Box>
        <Checkbox.Indicator match="checked">
            <Check />
        </Checkbox.Indicator>
        <Checkbox.Indicator match="unchecked">
            <Times />
        </Checkbox.Indicator>
        <Checkbox.Indicator match="indeterminate">
            <Minus />
        </Checkbox.Indicator>
    </Checkbox.Box>
</Checkbox.Root>
```

Available `match` values: `checked`, `unchecked`, `indeterminate`. Without the `match` prop, the indicator renders in all states.

## Accessibility

### Screen Reader

Each option in `CheckboxGroup` is announced as a checkbox by assistive technologies. Associate labels with `inputId` + `<label htmlFor>` or provide `aria-label` / `aria-labelledby` on each `Checkbox.Root`.

### Keyboard Support

| Key     | Function                            |
| ------- | ----------------------------------- |
| `tab`   | Moves focus to the next checkbox.   |
| `space` | Toggles checked or unchecked state. |

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-checkbox-group | Class name of the root element |

### Design Tokens

List of design tokens.

> **`CheckboxGroup` API table (`token`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/checkboxgroup or the installed `@primereact/types`.
