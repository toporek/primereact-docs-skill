# useSelect

Hook that manages select dropdown state, keyboard navigation, and popup positioning.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { useListboxOption } from '@primereact/headless/listbox';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import { useSelect } from '@primereact/headless/select';
import type { UseListboxInstance } from '@primereact/types/headless/listbox';
import { createPortal } from 'react-dom';

function OptionItem({ option, index, listbox }: { option: unknown; index: number; listbox: UseListboxInstance }) {
    const { optionProps } = useListboxOption({ option, index, context: listbox });

    return (
        <li
            {...optionProps}
            className="group flex items-center gap-2 px-2.5 py-1.5 my-1 rounded-md cursor-pointer select-none text-sm outline-none 
                transition-[background-color] duration-200 text-surface-700 dark:text-surface-0 
                hover:bg-surface-50 dark:hover:bg-surface-800 
                data-[focused]:bg-surface-100 dark:data-[focused]:bg-surface-800 
                data-[selected]:bg-surface-100 dark:data-[selected]:bg-surface-800 data-[selected]:text-primary 
                data-[disabled]:pointer-events-none data-[disabled]:opacity-60"
        >
            <span className="flex items-center justify-center w-4 h-4 invisible group-data-[selected]:visible">
                <Check className="w-3.5 h-3.5" />
            </span>
            <span>{listbox.getOptionLabel(option)}</span>
        </li>
    );
}

export default function BasicDemo() {
    const select = useSelect({ options: countries, optionLabel: 'name' });
    const { rootProps, triggerProps, indicatorProps, listProps, positionerProps, popupProps, state, listbox, getSelectedOptionLabel } = select;
    const portal = usePortal();

    usePositioner({
        anchor: state.anchorElement,
        content: state.positionerElement,
        side: 'bottom',
        sideOffset: 4,
        flip: true,
        shift: true
    });

    return (
        <div className="flex justify-center">
            <div {...rootProps} className="relative w-full md:w-56">
                <button
                    {...triggerProps}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm border border-surface-200 dark:border-surface-700 rounded-lg bg-transparent cursor-pointer select-none text-surface-700 dark:text-surface-0 transition-[border-color] duration-200 hover:border-surface-300 dark:hover:border-surface-600 focus-visible:outline-1 focus-visible:outline-primary focus-visible:-outline-offset-1"
                >
                    <span className={getSelectedOptionLabel() ? '' : 'text-surface-400'}>
                        {(getSelectedOptionLabel() as string) ?? 'Select a Country'}
                    </span>
                    <span {...indicatorProps} className="flex items-center transition-transform duration-200 data-open:rotate-180">
                        <ChevronDown className="w-4 h-4" />
                    </span>
                </button>
                {portal.state.mounted &&
                    state.opened &&
                    createPortal(
                        <div {...positionerProps}>
                            <div
                                {...popupProps}
                                className="border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-0 dark:bg-surface-900 shadow-md overflow-hidden"
                            >
                                <ul {...listProps} className="list-none m-0 p-1 outline-none max-h-56 overflow-auto">
                                    {listbox.getOptions().map((option: unknown, index: number) => (
                                        <OptionItem key={index} option={option} index={index} listbox={listbox} />
                                    ))}
                                </ul>
                            </div>
                        </div>,
                        document.body
                    )}
            </div>
        </div>
    );
}

const countries = [
    { name: 'Argentina', code: 'AR' },
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Canada', code: 'CA' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Italy', code: 'IT' },
    { name: 'Japan', code: 'JP' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Norway', code: 'NO' },
    { name: 'Poland', code: 'PL' },
    { name: 'South Korea', code: 'KR' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Turkey', code: 'TR' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' }
];

```

## Usage

```tsx
import { useSelect } from '@primereact/headless/select';
```

```tsx
const select = useSelect({ options: cities, optionLabel: 'name' });
const { rootProps, triggerProps, listProps, positionerProps, popupProps, arrowProps, state, listbox } = select;
```

`useSelect` composes `useListbox` and `usePopover` internally. See [Primitive](../../primitive/components/select.md) for a component-based API.

## Features

- **Popup lifecycle**, open/close state, positioning, focus trap, and Escape/outside-click dismissal
- **Listbox integration**, option iteration, selection, and keyboard navigation via the returned `listbox` instance
- **Controlled or uncontrolled**, value, popup visibility, and filter text can each be managed externally or internally
- **Filtering**, dedicated `filterProps` for a search input inside the popup with locale-aware comparison
- **Selection modes**, single, multiple, and meta-key-based additive selection
- **Imperative controls**, `show()`, `hide()`, `toggle()`, `focus()`, `getSelectedOptionLabel()`, and `hasValue()`

## Working with callbacks

### Controlled selection

Pass `value` and `onValueChange` to drive the selection from outside state.

```tsx
const [selected, setSelected] = React.useState(null);

const select = useSelect({
    value: selected,
    onValueChange: (e) => setSelected(e.value)
});

<div {...rootProps}>
    <button {...triggerProps}></button>
    <div {...positionerProps}>
        <div {...popupProps}>
            <ul {...listProps}></ul>
        </div>
        <div {...arrowProps} />
    </div>
</div>;
```

### Controlled popup visibility

Use `open` with `onOpenChange` to react to open/close transitions, useful for analytics, coordinating with other overlays, or animating custom wrappers.

```tsx
const [open, setOpen] = React.useState(false);

const select = useSelect({
    options: cities,
    optionLabel: 'name',
    open,
    onOpenChange: (e) => setOpen(e.value)
});
```

### Filtering inside the popup

Render a search input wired through `filterProps` and drive the query with `filterValue` / `onFilterValueChange`.

```tsx
const [filterValue, setFilterValue] = React.useState('');

const select = useSelect({
    options: cities,
    optionLabel: 'name',
    filterValue,
    onFilterValueChange: (e) => setFilterValue(e.query)
});

<input {...select.filterProps} placeholder="Search..." />;
```

### Object options with grouping

Map object fields with `optionLabel`, `optionValue`, `optionDisabled`, and `optionKey`; add `optionGroupLabel` / `optionGroupChildren` for grouped structures.

```tsx
const select = useSelect({
    options: groupedCities,
    optionLabel: 'label',
    optionValue: 'code',
    optionDisabled: 'inactive',
    optionKey: 'code',
    optionGroupLabel: 'label',
    optionGroupChildren: 'items'
});
```

### Multiple selection with meta key

Combine `multiple` and `metaKeySelection` to require Cmd/Ctrl for additive selection, matching native multi-select semantics.

```tsx
const select = useSelect({ multiple: true, metaKeySelection: true });
```

## Styling with data attributes

The hook exposes state through `data-*` attributes on each part. Use them as CSS selectors, no className juggling.

| Scope     | Part              | States                                                              |
| --------- | ----------------- | ------------------------------------------------------------------- |
| `select`  | `trigger`         | `data-positioner-open`                                              |
| `select`  | `popup`           | `data-open`                                                         |
| `select`  | `indicator`       | `data-open`, `data-closed`                                          |
| `listbox` | `option`          | `data-selected`, `data-unselected`, `data-focused`, `data-disabled` |
| `listbox` | `optionindicator` | `data-selected`, `data-unselected`                                  |

```css
[data-scope='select'][data-part='trigger']:focus-visible {
    outline: 2px solid var(--p-primary-color);
    outline-offset: -2px;
}

[data-scope='select'][data-part='indicator'][data-open] {
    transform: rotate(180deg);
}

[data-scope='select'][data-part='popup'][data-open] {
    border: 1px solid var(--p-content-border-color);
    border-radius: 6px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
}

[data-scope='listbox'][data-part='option'][data-focused] {
    background: var(--p-surface-100);
}

[data-scope='listbox'][data-part='option'][data-selected] {
    background: var(--p-primary-color);
    color: var(--p-primary-contrast-color);
}
```

## API

### useSelect

> **`useSelect` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/select or the installed `@primereact/types`.

## Accessibility

Arrow keys move focus through options, Enter or Space selects, Home/End jump to first/last, and type-ahead search matches by label. See [Primitive](../../primitive/components/select.md#accessibility) for full WAI-ARIA compliance details.
