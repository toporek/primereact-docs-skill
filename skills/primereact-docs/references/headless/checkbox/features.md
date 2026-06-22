# useCheckbox

Hooks that manage checkbox and checkbox group state, indeterminate logic, and ARIA attributes.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { useCheckbox } from '@primereact/headless/checkbox';

export default function BasicDemo() {
    const { rootProps, inputProps, boxProps, indicatorProps } = useCheckbox({ defaultChecked: true });

    return (
        <div className="flex justify-center">
            <div className="flex items-center gap-2">
                <div
                    {...rootProps}
                    className="relative inline-flex items-center has-[input:focus-visible]:outline-1 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-primary has-[input:focus-visible]:outline rounded"
                >
                    <input
                        {...inputProps}
                        value={inputProps.value as string}
                        id="basic-cb"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none m-0 p-0 border border-transparent rounded"
                    />
                    <div
                        {...boxProps}
                        className="flex items-center justify-center w-5 h-5 rounded-sm border-2 data-checked:bg-primary data-checked:border-primary data-unchecked:border-gray-300 data-unchecked:hover:border-primary"
                    >
                        <span {...indicatorProps} className="data-unchecked:hidden">
                            <Check className="w-3 h-3 text-primary-contrast" />
                        </span>
                    </div>
                </div>
                <label htmlFor="basic-cb" className="cursor-pointer select-none text-sm">
                    Remember me
                </label>
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3-4,8-10}
import { useCheckbox } from '@primereact/headless/checkbox';

const { rootProps, inputProps, boxProps, indicatorProps, state } = useCheckbox({
    defaultChecked: true
});

return (
    <div {...rootProps}>
        <input {...inputProps} className="sr-only" />
        <div {...boxProps}>{state.checked && <span {...indicatorProps}></span>}</div>
    </div>
);
```

`useCheckbox` manages checked/indeterminate state while `useCheckboxGroup` manages a shared value array — see [Primitive](../../primitive/checkbox/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects (`rootProps`, `inputProps`, `boxProps`, `indicatorProps`)
- Controlled and uncontrolled checked state
- Indeterminate state for partial selection patterns
- Custom `trueValue`/`falseValue` for non-boolean checked values
- `useCheckboxGroup` for managing shared value array across multiple checkboxes
- Exposes `onChange` and `updateChange` for custom toggle logic

## Behavior

### Default Checked

Use `defaultChecked` to set the initial checked state.

```tsx
const checkbox = useCheckbox({ defaultChecked: true });
```

### Controlled

Use `checked` and `onCheckedChange` for full programmatic control.

```tsx
const [checked, setChecked] = React.useState(true);
const checkbox = useCheckbox({
    checked,
    onCheckedChange: (e) => setChecked(e.checked)
});
```

The `onCheckedChange` callback receives `{ originalEvent, checked }` where `checked` is the new boolean state.

### Indeterminate

Set `indeterminate` to display a mixed state. When indeterminate, `state.checked` resolves to `false`.

```tsx
const checkbox = useCheckbox({ indeterminate: true });
```

### Disabled

Set `disabled` to prevent interaction. `inputProps` sets `disabled` on the native input and `rootProps` adds `data-disabled`.

```tsx
const checkbox = useCheckbox({ disabled: true });
```

### Read Only

Set `readOnly` to prevent state changes while keeping the checkbox focusable.

```tsx
const checkbox = useCheckbox({ readOnly: true });
```

### Custom True/False Values

Use `trueValue` and `falseValue` to map checked state to custom values.

```tsx
const checkbox = useCheckbox({ trueValue: 'yes', falseValue: 'no' });
```

### Checkbox Group

Use `useCheckboxGroup` to manage a shared value array. Pass the group's `updateChange` method to individual checkboxes.

```tsx
const group = useCheckboxGroup({ defaultValue: ['a', 'b'] });

const checkboxA = useCheckbox({
    value: 'a',
    checked: group.state.value?.includes('a'),
    onCheckedChange: (e) => group.updateChange({ ...e, value: 'a' })
});
```

### Controlled Group

Use `value` and `onValueChange` on the group for full programmatic control.

```tsx
const [value, setValue] = React.useState<unknown[]>(['a']);
const group = useCheckboxGroup({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="checkbox"` and a `data-part` attribute. State-dependent attributes are added automatically.

```css
[data-scope='checkbox'][data-part='box'] {
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid #ccc;
    border-radius: 0.25rem;
}

[data-scope='checkbox'][data-part='box'][data-checked] {
    background: var(--p-primary-color);
    border-color: var(--p-primary-color);
}

[data-scope='checkbox'][data-part='box'][data-indeterminate] {
    background: var(--p-primary-color);
    border-color: var(--p-primary-color);
}

[data-scope='checkbox'][data-part='root'][data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}
```

## API

### useCheckbox

> **API/props table for `useCheckbox` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### useCheckboxGroup

> **API/props table for `useCheckboxGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Checkbox Primitive](../../primitive/checkbox/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
