# useToggleButton

Hooks that manage toggle button pressed state and group value selection with single or multiple modes.

## Usage

```tsx
import { useToggleButton } from '@primereact/headless/togglebutton';
import { useToggleButtonGroup } from '@primereact/headless/togglebuttongroup';
```

```tsx
const toggle = useToggleButton();

<button {...toggle.getRootProps()}>
    <span {...toggle.getIndicatorProps()}></span>
</button>;
```

`useToggleButton` manages a boolean pressed state and returns prop getter functions for root and indicator elements. `useToggleButtonGroup` coordinates multiple toggle buttons with single or multiple selection. See [Primitive](../../primitive/components/togglebutton.md) for a component-based API.

## Features

- **Prop getter API**, `getRootProps` and `getIndicatorProps` accept resolved disabled and invalid state at call time
- **Controlled or uncontrolled**, `pressed`/`onPressedChange` for owned state, `defaultPressed` for hook-managed state
- **Group coordination**, `useToggleButtonGroup` manages shared value and exposes `isPressed` / `updateChange` for children
- **Single or multiple**, group switches between radio-like and multi-select behavior via the `multiple` flag
- **Minimum selection**, group `allowEmpty` guarantees at least one button stays pressed when set to `false`

## Working with callbacks

### Controlled pressed state

Pass `pressed` and `onPressedChange` to own the state externally, required when toggles drive other UI or persist across reloads.

```tsx
const [pressed, setPressed] = React.useState(false);

useToggleButton({
    pressed,
    onPressedChange: (e) => setPressed(e.pressed)
});
```

### Dynamic disabled / invalid

`getRootProps(disabled, invalid)` accepts booleans so you can compute state at render time from form context.

```tsx
const rootProps = toggle.getRootProps(isSubmitting, hasError);
```

### Group as a formatting toolbar

Use `useToggleButtonGroup` with `multiple: true` to build a toolbar where each button represents an independent flag.

```tsx
const group = useToggleButtonGroup({ multiple: true });

const bold = useToggleButton({
    pressed: group.isPressed(group.state.value, 'bold'),
    onPressedChange: (e) => group.updateChange({ ...e, value: 'bold' })
});
```

### Require a selection

Set `allowEmpty: false` when the group represents a mandatory choice like view mode or alignment.

```tsx
const group = useToggleButtonGroup({ allowEmpty: false, defaultValue: 'left' });
```

### Read live state for custom UI

Expose `state.pressed` or `state.value` to show counts, icons, or status text derived from the current selection.

```tsx
const group = useToggleButtonGroup({ multiple: true });
// group.state.value: unknown[]

const toggle = useToggleButton();
// toggle.state.pressed: boolean
```

## Styling with data attributes

The prop getters include data attributes for styling.

| Scope               | Part   | States                          |
| ------------------- | ------ | ------------------------------- |
| `togglebutton`      | `root` | `data-pressed`, `data-disabled` |
| `togglebuttongroup` | `root` | `data-multiple`                 |

```css
button[data-pressed] {
    background-color: var(--p-primary-color);
    color: var(--p-primary-contrast-color);
}

button[data-disabled] {
    pointer-events: none;
    opacity: 0.6;
}

[data-scope='togglebuttongroup'][data-multiple] {
    /* styles for multi-select group */
}
```

## API

### useToggleButton

> **`useToggleButton` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/togglebutton or the installed `@primereact/types`.

### useToggleButtonGroup

> **`useToggleButtonGroup` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/togglebutton or the installed `@primereact/types`.

## Accessibility

Space or Enter toggles the pressed state while focused. See [Primitive](../../primitive/components/togglebutton.md#accessibility) for full WAI-ARIA compliance details.
