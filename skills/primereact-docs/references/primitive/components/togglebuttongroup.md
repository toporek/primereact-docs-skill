# ToggleButtonGroup

An unstyled container that groups multiple toggle buttons with single or multiple selection.

Coordinate multiple ToggleButton controls under a shared value with single or multiple selection and complete control over layout and styling.

## Features

- Manages a shared value across multiple `ToggleButton.Root` items
- `multiple` for multi-selection, `allowEmpty` to permit an empty selection
- Works with the compound `ToggleButton` API (`Root`, `Indicator`)

## Usage

```tsx
import { ToggleButton } from 'primereact/togglebutton';
import { ToggleButtonGroup } from 'primereact/togglebuttongroup';
```

```tsx
<ToggleButtonGroup allowEmpty={false} multiple={false}>
    <ToggleButton.Root value="left">
        <ToggleButton.Indicator>
            <i className="pi pi-align-left" />
        </ToggleButton.Indicator>
    </ToggleButton.Root>
    <ToggleButton.Root value="center">
        <ToggleButton.Indicator>
            <i className="pi pi-align-center" />
        </ToggleButton.Indicator>
    </ToggleButton.Root>
</ToggleButtonGroup>
```

## API

### ToggleButtonGroup

> **`ToggleButtonGroup` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/togglebuttongroup or the installed `@primereact/types`.

| Attribute          | Value                                  |
| ------------------ | -------------------------------------- |
| `data-scope`       | `"togglebuttongroup"`                  |
| `data-part`        | `"root"`                               |
| `data-disabled`    | Present when disabled                  |
| `data-invalid`     | Present when invalid                   |
| `data-multiple`    | Present when multiple selection active |
| `data-allow-empty` | Present when empty selection allowed   |

## Accessibility

### Screen Reader

`ToggleButtonGroup` uses `role="group"` and should have an `aria-label` describing the group's purpose. Each `ToggleButton.Root` uses `aria-pressed` to indicate its toggle state.

### Keyboard Support

| Key     | Function                        |
| ------- | ------------------------------- |
| `tab`   | Moves focus to the next button. |
| `space` | Toggles the focused button.     |
