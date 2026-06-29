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

```tsx
import { useCheckbox } from '@primereact/headless/checkbox';
```

```tsx
const { rootProps, inputProps, boxProps, indicatorProps, state } = useCheckbox({
    defaultChecked: true
});

<div {...rootProps}>
    <input {...inputProps} className="sr-only" />
    <div {...boxProps}>{state.checked && <span {...indicatorProps}></span>}</div>
</div>;
```

`useCheckbox` manages checked and indeterminate state for a single checkbox, while `useCheckboxGroup` manages a shared value array across many. See [Primitive](../../primitive/components/checkbox.md) for a component-based API.

## Features

- **Composable parts**, spreads props onto `root`, `input`, `box`, and `indicator` elements so the visual layer is fully yours
- **Tri-state semantics**, supports checked, unchecked, and `indeterminate` mixed state for parent/child selection patterns
- **Custom value mapping**, `trueValue` and `falseValue` let checked state represent non-boolean values
- **Group coordination**, `useCheckboxGroup` maintains a shared value array and exposes `updateChange` for child checkboxes
- **Controlled or uncontrolled**, drive via `checked`/`onCheckedChange` or let the hook own state from `defaultChecked`

## Working with callbacks

### Controlled checkbox

Pass `checked` and `onCheckedChange` to own the state externally, needed for validation, async toggles, or parent-driven UI.

```tsx
const [checked, setChecked] = React.useState(true);

useCheckbox({
    checked,
    onCheckedChange: (e) => setChecked(e.checked)
});
```

The callback receives `{ originalEvent, checked }` where `checked` is the new boolean.

### Indeterminate parent

Render a "select all" checkbox that reflects partial children selection by computing `indeterminate` from child state.

```tsx
const allChecked = items.every((i) => i.selected);
const someChecked = items.some((i) => i.selected);

useCheckbox({
    checked: allChecked,
    indeterminate: someChecked && !allChecked,
    onCheckedChange: (e) => toggleAll(e.checked)
});
```

### Custom values

Use `trueValue`/`falseValue` when the checkbox represents a non-boolean field such as `'yes'`/`'no'`.

```tsx
useCheckbox({ trueValue: 'yes', falseValue: 'no' });
```

### Group with shared value

`useCheckboxGroup` owns the array; each checkbox derives its `checked` and forwards its event through the group's `updateChange`.

```tsx
const group = useCheckboxGroup({ defaultValue: ['a', 'b'] });

const checkboxA = useCheckbox({
    value: 'a',
    checked: group.state.value?.includes('a'),
    onCheckedChange: (e) => group.updateChange({ ...e, value: 'a' })
});
```

### Controlled group

Lift the group value into state to react to changes or persist selection.

```tsx
const [value, setValue] = React.useState<unknown[]>(['a']);

const group = useCheckboxGroup({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

## Styling with data attributes

Every prop object includes `data-scope="checkbox"` and a `data-part` attribute. State-dependent attributes are added automatically.

| Scope      | Part        | States                               |
| ---------- | ----------- | ------------------------------------ |
| `checkbox` | `root`      | `data-checked`, `data-disabled`      |
| `checkbox` | `box`       | `data-checked`, `data-indeterminate` |
| `checkbox` | `indicator` | `data-checked`, `data-indeterminate` |

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

> **`useCheckbox` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/checkbox or the installed `@primereact/types`.

### useCheckboxGroup

> **`useCheckboxGroup` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/checkbox or the installed `@primereact/types`.

## Accessibility

Space toggles the checked state while focused. Use indeterminate for tri-state checkboxes. See [Primitive](../../primitive/components/checkbox.md#accessibility) for full WAI-ARIA compliance details.
