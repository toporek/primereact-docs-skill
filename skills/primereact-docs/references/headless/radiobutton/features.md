# useRadioButton

Hooks that manage radio button and radio button group state, checked logic, and ARIA attributes.

```tsx
'use client';
import { useRadioButton, type useRadioButtonChangeEvent } from '@primereact/headless/radiobutton';
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
                        onCheckedChange: (e: useRadioButtonChangeEvent) => updateChange({ ...e, value: item.value })
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

```tsx showLineNumbers {1-2,4-8,12-14}
import { useRadioButton } from '@primereact/headless/radiobutton';
import { useRadioButtonGroup } from '@primereact/headless/radiobuttongroup';

const group = useRadioButtonGroup({ defaultValue: 'a' });
const { rootProps, inputProps, boxProps, indicatorProps, state } = useRadioButton({
    value: 'a',
    checked: group.state.value === 'a',
    onCheckedChange: (e) => group.updateChange({ ...e, value: 'a' })
});

return (
    <div {...rootProps}>
        <input {...inputProps} className="sr-only" />
        <div {...boxProps}>{state.checked && <span {...indicatorProps} />}</div>
    </div>
);
```

`useRadioButton` manages checked state for a single option while `useRadioButtonGroup` manages the shared value — see [Primitive](../../primitive/radiobutton/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects (`rootProps`, `inputProps`, `boxProps`, `indicatorProps`)
- Controlled and uncontrolled checked state
- `useRadioButtonGroup` for managing a shared value across multiple radio buttons
- Exposes `onChange` and `updateChange` for custom toggle logic

## Behavior

### Default Checked

Use `defaultChecked` to set the initial checked state of a standalone radio button.

```tsx
const radio = useRadioButton({ defaultChecked: true });
```

### Controlled

Use `checked` and `onCheckedChange` for full programmatic control.

```tsx
const [checked, setChecked] = React.useState(true);
const radio = useRadioButton({
    checked,
    onCheckedChange: (e) => setChecked(e.checked)
});
```

The `onCheckedChange` callback receives `{ originalEvent, checked }` where `checked` is the new boolean state.

### Disabled

Set `disabled` to prevent interaction. `inputProps` sets `disabled` on the native input and `rootProps` adds `data-disabled`.

```tsx
const radio = useRadioButton({ disabled: true });
```

### Read Only

Set `readOnly` to prevent state changes while keeping the radio button focusable.

```tsx
const radio = useRadioButton({ readOnly: true });
```

### Radio Button Group

Use `useRadioButtonGroup` to manage a shared value. Pass the group's `updateChange` method to individual radio buttons.

```tsx
const group = useRadioButtonGroup({ defaultValue: 'a' });

const radioA = useRadioButton({
    value: 'a',
    checked: group.state.value === 'a',
    onCheckedChange: (e) => group.updateChange({ ...e, value: 'a' })
});
```

### Controlled Group

Use `value` and `onValueChange` on the group for full programmatic control.

```tsx
const [value, setValue] = React.useState<unknown>('a');
const group = useRadioButtonGroup({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="radiobutton"` and a `data-part` attribute. State-dependent attributes are added automatically.

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

See [RadioButton Primitive](../../primitive/radiobutton/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
