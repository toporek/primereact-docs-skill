# useRadioButton

Hooks that manage radio button and radio button group state, checked logic, and ARIA attributes.

## Usage

```tsx
import { useRadioButton } from '@primereact/headless/radiobutton';
import { useRadioButtonGroup } from '@primereact/headless/radiobuttongroup';
```

```tsx
const group = useRadioButtonGroup({ defaultValue: 'a' });
const { rootProps, inputProps, boxProps, indicatorProps, state } = useRadioButton({
    value: 'a',
    checked: group.state.value === 'a',
    onCheckedChange: (e) => group.updateChange({ ...e, value: 'a' })
});

<div {...rootProps}>
    <input {...inputProps} className="sr-only" />
    <div {...boxProps}>{state.checked && <span {...indicatorProps} />}</div>
</div>;
```

`useRadioButton` manages checked state for a single option while `useRadioButtonGroup` manages the shared value across a group. See [Primitive](../../primitive/components/radiobutton.md) for a component-based API.

## Features

- **Composable parts**, spreads props onto `root`, `input`, `box`, and `indicator` elements for full visual control
- **Group coordination**, `useRadioButtonGroup` holds the selected value and exposes `updateChange` for child radios
- **Controlled or uncontrolled**, drive via `checked`/`onCheckedChange` or let the hook manage state from `defaultChecked`
- **Accessible primitives**, hidden native input keeps focus management and keyboard semantics intact
- **State flags**, `disabled` and `readOnly` emit the appropriate ARIA and `data-*` attributes

## Working with callbacks

### Controlled radio

Pass `checked` and `onCheckedChange` to own the state externally, typical when validation lives outside the component.

```tsx
const [checked, setChecked] = React.useState(true);

useRadioButton({
    checked,
    onCheckedChange: (e) => setChecked(e.checked)
});
```

The callback receives `{ originalEvent, checked }` where `checked` is the new boolean.

### Group with shared value

`useRadioButtonGroup` owns the selected value; each radio derives `checked` and forwards events through `updateChange`.

```tsx
const group = useRadioButtonGroup({ defaultValue: 'a' });

const radioA = useRadioButton({
    value: 'a',
    checked: group.state.value === 'a',
    onCheckedChange: (e) => group.updateChange({ ...e, value: 'a' })
});
```

### Controlled group

Lift the group value when you need to react to changes, persist it, or reset from parent state.

```tsx
const [value, setValue] = React.useState<unknown>('a');

const group = useRadioButtonGroup({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Read-only selection

Use `readOnly` to keep the radio focusable (screen readers still announce it) but prevent state changes, useful for review screens.

```tsx
useRadioButton({ readOnly: true });
```

## Styling with data attributes

Every prop object includes `data-scope="radiobutton"` and a `data-part` attribute. State-dependent attributes are added automatically.

| Scope         | Part        | States                          |
| ------------- | ----------- | ------------------------------- |
| `radiobutton` | `root`      | `data-checked`, `data-disabled` |
| `radiobutton` | `box`       | `data-checked`                  |
| `radiobutton` | `indicator` | `data-checked`                  |

```css
[data-scope='radiobutton'][data-part='box'] {
    width: 1.125rem;
    height: 1.125rem;
    border: 1px solid #ccc;
    border-radius: 9999px;
}

[data-scope='radiobutton'][data-part='box'][data-checked] {
    background: var(--p-primary-color);
    border-color: var(--p-primary-color);
}

[data-scope='radiobutton'][data-part='indicator'][data-checked] {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 9999px;
    background: white;
}

[data-scope='radiobutton'][data-part='root'][data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}
```

## API

### useRadioButton

> **`useRadioButton` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/radiobutton or the installed `@primereact/types`.

### useRadioButtonGroup

> **`useRadioButtonGroup` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/radiobutton or the installed `@primereact/types`.

## Accessibility

Arrow keys move between radios in the same group, and the focused radio is automatically selected. See [Primitive](../../primitive/components/radiobutton.md#accessibility) for full WAI-ARIA compliance details.
