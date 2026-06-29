# useRadioButton

Hooks that manage radio button and radio button group state, checked logic, and ARIA attributes.

```tsx
'use client';
import { useRadioButton, type UseRadioButtonChangeEvent } from '@primereact/headless/radiobutton';
import { useRadioButtonGroup } from '@primereact/headless/radiobuttongroup';

const items = [
    { value: 'standard', label: 'Standard' },
    { value: 'express', label: 'Express' },
    { value: 'overnight', label: 'Overnight' }
];

export default function BasicDemo() {
    const { rootProps: groupRootProps, state: groupState, updateChange } = useRadioButtonGroup({ defaultValue: 'standard' });

    return (
        <div className="flex justify-center">
            <div {...groupRootProps} className="flex flex-col gap-3">
                {items.map((item) => {
                    const { rootProps, inputProps, boxProps, indicatorProps } = useRadioButton({
                        name: 'delivery',
                        value: item.value,
                        checked: groupState.value === item.value,
                        onCheckedChange: (e: UseRadioButtonChangeEvent) => updateChange({ ...e, value: item.value })
                    });

                    return (
                        <div key={item.value} className="flex items-center gap-2">
                            <div
                                {...rootProps}
                                className="relative inline-flex items-center has-[input:focus-visible]:outline-1 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-primary has-[input:focus-visible]:outline rounded-full"
                            >
                                <input
                                    {...inputProps}
                                    value={inputProps.value as string}
                                    id={`rb-${item.value}`}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none m-0 p-0 border border-transparent rounded-full"
                                />
                                <div
                                    {...boxProps}
                                    className="flex items-center justify-center w-[1.125rem] h-[1.125rem] rounded-full border transition-colors duration-200 data-checked:bg-primary data-checked:border-primary data-unchecked:border-surface-300 data-unchecked:hover:border-surface-400"
                                >
                                    <span
                                        {...indicatorProps}
                                        className="w-2.5 h-2.5 rounded-full bg-primary-contrast transition-transform duration-200 data-unchecked:hidden"
                                    />
                                </div>
                            </div>
                            <label htmlFor={`rb-${item.value}`} className="cursor-pointer select-none text-sm">
                                {item.label}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

```

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

> **API/props table for `useRadioButton` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### useRadioButtonGroup

> **API/props table for `useRadioButtonGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Arrow keys move between radios in the same group, and the focused radio is automatically selected. See [Primitive](../../primitive/components/radiobutton.md#accessibility) for full WAI-ARIA compliance details.
