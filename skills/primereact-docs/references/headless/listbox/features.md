# useListbox

Hook that manages listbox selection state, keyboard navigation, and option search.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { useListbox, useListboxOption } from '@primereact/headless/listbox';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

const visuallyHiddenStyle = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
} as const;

export default function BasicDemo() {
    const listbox = useListbox({ options: cities, optionLabel: 'name' });
    const { rootProps, listProps, firstHiddenProps, lastHiddenProps, getOptions, getOptionLabel } = listbox;

    return (
        <div className="flex justify-center">
            <div {...rootProps} className="w-full max-w-56 border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
                <span {...firstHiddenProps} tabIndex={0} style={visuallyHiddenStyle} />
                <ul {...listProps} className="list-none m-0 p-1 outline-none">
                    {getOptions().map((option, index) => {
                        const { optionProps, optionIndicatorProps } = useListboxOption({ option, index, context: listbox });

                        return (
                            <li
                                key={index}
                                {...optionProps}
                                className="flex items-center gap-2 px-3 py-2 my-0.5 rounded-md cursor-pointer select-none text-sm transition-colors text-surface-700 dark:text-surface-0 hover:bg-surface-50 dark:hover:bg-surface-800 outline-none aria-selected:bg-surface-100 aria-selected:dark:bg-surface-800 aria-selected:text-primary data-[focused]:bg-surface-100 data-[focused]:dark:bg-surface-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-60"
                            >
                                <span {...optionIndicatorProps} className="flex items-center justify-center w-4 h-4 data-[unselected]:invisible">
                                    <Check className="w-3.5 h-3.5" />
                                </span>
                                <span>{getOptionLabel(option)}</span>
                            </li>
                        );
                    })}
                </ul>
                <span {...lastHiddenProps} tabIndex={0} style={visuallyHiddenStyle} />
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,6-10}
import { useListbox, useListboxOption } from '@primereact/headless/listbox';

const listbox = useListbox({ options: cities, optionLabel: 'name' });

return (
    <div {...listbox.rootProps}>
        <ul {...listbox.listProps}>
            {listbox.getOptions().map((option, index) => {
                const { optionProps, state } = useListboxOption({ option, index, context: listbox });
                return <li {...optionProps}>{listbox.getOptionLabel(option)}</li>;
            })}
        </ul>
    </div>
);
```

`useListbox` manages value state, keyboard focus cycling, type-ahead search, and ARIA attributes for option lists — see [Primitive](../../primitive/listbox/features.md) for a component-based API.

## Features

- `rootProps`, `listProps`, and `filterProps` return spread-ready props including `ref` for each container element
- `useListboxOption` child hook returns `optionProps` with ARIA attributes, `data-selected`/`data-focused`/`data-disabled` states, and mouse/touch handlers
- `getOptionLabel(option)`, `getOptionValue(option)`, `isSelected(option)`, `isOptionDisabled(option)` for reading option metadata
- Type-ahead search: typing characters moves focus to the matching option
- `onOptionSelect(event, option, index)` and `onClearClick(event)` for imperative selection control

## Behavior

### Default Value

Set `defaultValue` for uncontrolled selection.

```tsx
const listbox = useListbox({ options: cities, optionLabel: 'name', defaultValue: 'NY' });
```

### Controlled

Pass `value` and `onValueChange` for controlled usage.

```tsx
const [selected, setSelected] = React.useState(null);

const listbox = useListbox({
    options: cities,
    optionLabel: 'name',
    value: selected,
    onValueChange: (e) => setSelected(e.value)
});
```

### Multiple Selection

Set `multiple` to allow selecting more than one item. The value becomes an array.

```tsx
const listbox = useListbox({ options: cities, optionLabel: 'name', multiple: true });
```

### Meta Key Selection

Enable `metaKeySelection` with `multiple` to require Ctrl/Cmd for additive selection.

```tsx
const listbox = useListbox({ options: cities, optionLabel: 'name', multiple: true, metaKeySelection: true });
```

### Focus Behavior

Use `autoOptionFocus` to automatically focus the first option, `selectOnFocus` to select while navigating, and `focusOnHover` to move focus with mouse hover.

```tsx
const listbox = useListbox({ options: cities, optionLabel: 'name', autoOptionFocus: true, selectOnFocus: true });
```

### Option Groups

Set `optionGroupLabel` and `optionGroupChildren` to organize options into groups. Use `useListboxOption` with `group` to detect group headers.

```tsx
const listbox = useListbox({
    options: groupedCities,
    optionLabel: 'label',
    optionGroupLabel: 'label',
    optionGroupChildren: 'items'
});

// Inside map:
const { optionProps, groupProps, state } = useListboxOption({ option, index, context: listbox });
if (state.group) return <div {...groupProps}>{listbox.getOptionGroupLabel(option)}</div>;
```

### Disabled

Set `disabled` to prevent all interaction.

```tsx
const listbox = useListbox({ options: cities, optionLabel: 'name', disabled: true });
```

### Custom Styling with Data Attributes

```css
[data-scope='listbox'][data-part='option'][data-selected] {
    background-color: #eff6ff;
    color: #1d4ed8;
}
[data-scope='listbox'][data-part='option'][data-focused] {
    outline: 1px solid #3b82f6;
}
[data-scope='listbox'][data-part='option'][data-disabled] {
    opacity: 0.6;
    pointer-events: none;
}
```

## API

### useListbox

> **API/props table for `useListbox` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### useListboxOption

> **API/props table for `useListboxOption` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Listbox Primitive](../../primitive/listbox/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
