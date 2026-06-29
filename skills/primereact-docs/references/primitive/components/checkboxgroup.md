# CheckboxGroup

An unstyled container that groups multiple checkboxes and manages their shared value array.

Coordinate multiple Checkbox controls under a single shared value with complete control over layout and styling.

## Features

- Manages a shared value array across multiple `Checkbox.Root` items
- Works with the compound `Checkbox` API (`Root`, `Box`, `Indicator`)
- Supports indeterminate state for select-all / partial selection patterns
- Composable into nested groups for hierarchical selections

## Usage

```tsx
import { Checkbox } from 'primereact/checkbox';
import { CheckboxGroup } from 'primereact/checkboxgroup';
```

```tsx
<CheckboxGroup>
    <Checkbox.Root value="a">
        <Checkbox.Box>
            <Checkbox.Indicator />
        </Checkbox.Box>
    </Checkbox.Root>
    <Checkbox.Root value="b">
        <Checkbox.Box>
            <Checkbox.Indicator />
        </Checkbox.Box>
    </Checkbox.Root>
</CheckboxGroup>
```

## API

### CheckboxGroup

> **API/props table for `CheckboxGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value             |
| ------------ | ----------------- |
| `data-scope` | `"checkboxgroup"` |
| `data-part`  | `"root"`          |

## Accessibility

### Screen Reader

Each option in `CheckboxGroup` is announced individually as a checkbox by assistive technologies. Associate labels with `inputId` + `<label htmlFor>` or provide `aria-label` / `aria-labelledby` on each `Checkbox.Root`.

### Keyboard Support

| Key     | Function                            |
| ------- | ----------------------------------- |
| `tab`   | Moves focus to the next checkbox.   |
| `space` | Toggles checked or unchecked state. |
