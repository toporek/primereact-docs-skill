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
import type { useListboxInstance } from '@primereact/types/headless/listbox';
import { createPortal } from 'react-dom';

function OptionItem({ option, index, listbox }: { option: unknown; index: number; listbox: useListboxInstance }) {
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

```tsx showLineNumbers {1,3-4,7-11,13}
import { useSelect } from '@primereact/headless/select';

const select = useSelect({ options: cities, optionLabel: 'name' });
const { rootProps, triggerProps, listProps, positionerProps, popupProps, arrowProps, state, listbox } = select;

return (
    <div {...rootProps}>
        <button {...triggerProps}></button>
        <div {...positionerProps}>
            <div {...popupProps}>
                <ul {...listProps}></ul>
            </div>
            <div {...arrowProps} />
        </div>
    </div>
);
```

`useSelect` composes `useListbox` and `usePopover` internally, managing trigger interaction, keyboard navigation, and popup positioning — see [Primitive](../../primitive/select/features.md) for a component-based API.

## Features

- `rootProps`, `triggerProps`, `listProps`, `positionerProps`, `popupProps`, `arrowProps`, `indicatorProps`, `clearProps`, and `filterProps` return spread-ready prop objects
- Composes `useListbox` internally — the returned `listbox` instance provides option iteration, selection state, and `useListboxOption` support
- `show()`, `hide()`, `toggle()`, and `focus()` for imperative popup and trigger control
- `getSelectedOptionLabel()` and `hasValue()` for reading the current selection
- `filterProps` for integrating a search input inside the popup
- `setRendered()` controls whether the overlay has been rendered at least once, useful for lazy rendering strategies

## Behavior

### Default Value

Set `defaultValue` for uncontrolled selection.

```tsx
const select = useSelect({ defaultValue: 'NY' });
```

### Controlled

Pass `value` and `onValueChange` for controlled selection state.

```tsx
const [selected, setSelected] = React.useState(null);

const select = useSelect({
    value: selected,
    onValueChange: (e) => setSelected(e.value)
});
```

### Option Fields

Use `optionLabel`, `optionValue`, `optionDisabled`, and `optionKey` to map fields when options are objects.

```tsx
const select = useSelect({
    options: cities,
    optionLabel: 'name',
    optionValue: 'code',
    optionDisabled: 'inactive',
    optionKey: 'code'
});
```

### Grouped Options

Set `optionGroupLabel` and `optionGroupChildren` to support grouped option structures.

```tsx
const select = useSelect({
    options: groupedCities,
    optionLabel: 'label',
    optionGroupLabel: 'label',
    optionGroupChildren: 'items'
});
```

### Multiple Selection

Set `multiple` to allow selecting more than one item. The value becomes an array.

```tsx
const select = useSelect({ multiple: true });
```

### Focus Behavior

Use `autoOptionFocus` to automatically focus the first option when the popup opens, `selectOnFocus` to select while navigating, and `focusOnHover` to move focus with mouse hover.

```tsx
const select = useSelect({ autoOptionFocus: true, selectOnFocus: true });
```

### Disabled

Set `disabled` to prevent all interaction.

```tsx
const select = useSelect({ disabled: true });
```

### Popup Control

Use `open` and `onOpenChange` for controlled popup state, or `defaultOpen` for uncontrolled initial state.

```tsx
const [open, setOpen] = React.useState(false);

const select = useSelect({
    options: cities,
    optionLabel: 'name',
    open,
    onOpenChange: (e) => setOpen(e.value)
});
```

### Popup Behavior

Set `closeOnEscape` to dismiss the overlay with the Escape key, `autoFocus` to move focus into the overlay when it opens, and `trapped` to keep focus within the overlay.

```tsx
const select = useSelect({ closeOnEscape: true, autoFocus: true, trapped: true });
```

### Filter

Use `filterProps` to render a search input inside the popup. Pass `filterValue` and `onFilterValueChange` for controlled filtering, or `defaultFilterValue` for an initial uncontrolled filter text.

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

### Meta Key Selection

Enable `metaKeySelection` to require holding the meta key (Cmd/Ctrl) to select or deselect an option.

```tsx
const select = useSelect({ metaKeySelection: true });
```

### Locale

Set `locale` to control the locale used for string comparison.

```tsx
const select = useSelect({ locale: 'tr-TR' });
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="select"` and a `data-part` that identifies the element. State-driven attributes appear or disappear automatically.

| Part        | State Attributes           |
| ----------- | -------------------------- |
| `trigger`   | `data-positioner-open`     |
| `popup`     | `data-open`                |
| `indicator` | `data-open`, `data-closed` |

Options rendered via `useListboxOption` use `data-scope="listbox"` with the following state attributes.

| Part              | State Attributes                                                    |
| ----------------- | ------------------------------------------------------------------- |
| `option`          | `data-selected`, `data-unselected`, `data-focused`, `data-disabled` |
| `optionindicator` | `data-selected`, `data-unselected`                                  |

```css
/* Trigger focus ring */
[data-scope='select'][data-part='trigger']:focus-visible {
    outline: 2px solid var(--p-primary-color);
    outline-offset: -2px;
}

/* Open/close indicator rotation */
[data-scope='select'][data-part='indicator'][data-open] {
    transform: rotate(180deg);
}

/* Popup entrance */
[data-scope='select'][data-part='popup'][data-open] {
    border: 1px solid var(--p-content-border-color);
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Option states */
[data-scope='listbox'][data-part='option'][data-focused] {
    background: var(--p-surface-100);
}
[data-scope='listbox'][data-part='option'][data-selected] {
    background: var(--p-primary-color);
    color: var(--p-primary-contrast-color);
}
[data-scope='listbox'][data-part='option'][data-disabled] {
    opacity: 0.5;
    pointer-events: none;
}
```

## API

### useSelect

> **API/props table for `useSelect` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Select Primitive](../../primitive/select/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
