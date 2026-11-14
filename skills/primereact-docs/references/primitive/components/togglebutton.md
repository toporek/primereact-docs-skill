# ToggleButton

An unstyled toggle button component with group selection support for single and multiple modes.

Build fully custom toggle buttons and button groups with complete control over layout and styling.

## Features

- Compound component API with sub-components: `Root`, `Indicator`
- Standalone toggle with boolean pressed state
- Group selection with `ToggleButtonGroup` for single and multiple modes
- Configurable `allowEmpty` to require at least one selection in a group

## Usage

```tsx
import { ToggleButton } from 'primereact/togglebutton';
import { ToggleButtonGroup } from 'primereact/togglebuttongroup';
```

```tsx
<ToggleButton.Root>
    <ToggleButton.Indicator></ToggleButton.Indicator>
</ToggleButton.Root>

<ToggleButtonGroup>
    <ToggleButton.Root value="a">
        <ToggleButton.Indicator></ToggleButton.Indicator>
    </ToggleButton.Root>
    <ToggleButton.Root value="b">
        <ToggleButton.Indicator></ToggleButton.Indicator>
    </ToggleButton.Root>
</ToggleButtonGroup>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered element.

```tsx
<ToggleButton.Root as="div"></ToggleButton.Root>
<ToggleButton.Indicator as="span"></ToggleButton.Indicator>
```

Default elements: `Root`=`button`, `Indicator`=`span`, `ToggleButtonGroup`=`div`.

### Render Function Children

`Indicator` accepts a render function as children, providing access to the component instance. The instance exposes `togglebutton` (parent instance with `state.pressed`).

```tsx
<ToggleButton.Indicator>{({ togglebutton }: ToggleButtonIndicatorInstance) => (togglebutton?.state.pressed ? 'On' : 'Off')}</ToggleButton.Indicator>
```

## Pass Through

## API

### ToggleButtonRoot

> **`ToggleButtonRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/togglebutton or the installed `@primereact/types`.

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-pressed`  | Present when pressed  |
| `data-disabled` | Present when disabled |
| `data-invalid`  | Present when invalid  |

| Label | Type | Description |
|:------|:------|:------|
| root | ToggleButtonRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| indicator | ToggleButtonRootPassThroughType> | Used to pass attributes to the indicator's DOM element. |

### ToggleButtonIndicator

> **`ToggleButtonIndicator` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/togglebutton or the installed `@primereact/types`.

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-pressed`  | Present when pressed  |
| `data-disabled` | Present when disabled |
| `data-invalid`  | Present when invalid  |

| Label | Type | Description |
|:------|:------|:------|
| root | ToggleButtonIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

ToggleButton uses `aria-pressed` to indicate its toggle state and `aria-disabled` when disabled. Provide `aria-label` or visible text content to give each button an accessible name. ToggleButtonGroup uses `role="group"` and should have `aria-label` to describe the group purpose.

```tsx
<ToggleButton.Root aria-label="Favorite">
    <ToggleButton.Indicator></ToggleButton.Indicator>
</ToggleButton.Root>

<ToggleButtonGroup aria-label="Text alignment">
    <ToggleButton.Root value="left" aria-label="Align left">
        <ToggleButton.Indicator></ToggleButton.Indicator>
    </ToggleButton.Root>
</ToggleButtonGroup>
```

### Keyboard Support

| Key              | Function                         |
| ---------------- | -------------------------------- |
| <kbd>Space</kbd> | Toggles the pressed state.       |
| <kbd>Enter</kbd> | Toggles the pressed state.       |
| <kbd>Tab</kbd>   | Moves focus to the next element. |
