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

```tsx
import { useListbox, useListboxOption } from '@primereact/headless/listbox';
```

```tsx
const listbox = useListbox({ options: cities, optionLabel: 'name' });

<div {...listbox.rootProps}>
    <ul {...listbox.listProps}>
        {listbox.getOptions().map((option, index) => {
            const { optionProps, state } = useListboxOption({ option, index, context: listbox });
            return <li {...optionProps}>{listbox.getOptionLabel(option)}</li>;
        })}
    </ul>
</div>;
```

`useListbox` manages value state, keyboard focus cycling, type-ahead search, and ARIA attributes for option lists. See [Primitive](../../primitive/components/listbox.md) for a component-based API.

## Features

- **Selection state**, single or multiple selection with controlled or uncontrolled modes
- **Keyboard navigation**, arrow cycling, Home/End jumps, and built-in type-ahead that moves focus to matching options
- **Option helpers**, `getOptionLabel`, `getOptionValue`, `isSelected`, and `isOptionDisabled` for reading metadata off arbitrary option shapes
- **Grouping**, `optionGroupLabel` / `optionGroupChildren` with group header detection via `useListboxOption`
- **Per-option hook**, `useListboxOption` returns ARIA-attributed props and state flags (`selected`, `focused`, `disabled`, `group`) for each row
- **Imperative hooks**, `onOptionSelect(event, option, index)` and `onClearClick(event)` for programmatic selection

## Working with callbacks

### Controlled selection

Pass `value` and `onValueChange` to drive the selection from outside state.

```tsx
const [selected, setSelected] = React.useState(null);

const listbox = useListbox({
    options: cities,
    optionLabel: 'name',
    value: selected,
    onValueChange: (e) => setSelected(e.value)
});
```

### Multiple with meta-key additive selection

Combine `multiple` with `metaKeySelection` to require Ctrl/Cmd for additive toggles, matching native multi-select semantics.

```tsx
const listbox = useListbox({
    options: cities,
    optionLabel: 'name',
    multiple: true,
    metaKeySelection: true
});
```

### Grouped options

Render group headers and options in a single pass using the per-option state from `useListboxOption`.

```tsx
const listbox = useListbox({
    options: groupedCities,
    optionLabel: 'label',
    optionGroupLabel: 'label',
    optionGroupChildren: 'items'
});

listbox.getOptions().map((option, index) => {
    const { optionProps, groupProps, state } = useListboxOption({ option, index, context: listbox });

    if (state.group) return <div {...groupProps}>{listbox.getOptionGroupLabel(option)}</div>;
    return <li {...optionProps}>{listbox.getOptionLabel(option)}</li>;
});
```

### Focus behavior tuning

Use `autoOptionFocus`, `selectOnFocus`, and `focusOnHover` to shape how keyboard navigation and hover interact with selection.

```tsx
const listbox = useListbox({
    options: cities,
    optionLabel: 'name',
    autoOptionFocus: true,
    selectOnFocus: true,
    focusOnHover: true
});
```

## Styling with data attributes

The hook exposes state through `data-*` attributes on each part. Use them as CSS selectors, no className juggling.

| Scope     | Part     | States                                                              |
| --------- | -------- | ------------------------------------------------------------------- |
| `listbox` | `option` | `data-selected`, `data-unselected`, `data-focused`, `data-disabled` |

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

Arrow keys navigate options, Space selects with multi-select support, Home/End jump to ends, and Ctrl+A selects all in multiple mode. See [Primitive](../../primitive/components/listbox.md#accessibility) for full WAI-ARIA compliance details.
