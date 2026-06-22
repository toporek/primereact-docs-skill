# useAutoComplete

Hook that manages autocomplete state, search callbacks, and popup positioning for combobox inputs.

```tsx
'use client';
import { useAutoComplete, type useAutoCompleteCompleteEvent } from '@primereact/headless/autocomplete';
import { useListboxOption } from '@primereact/headless/listbox';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import type { useListboxInstance } from '@primereact/types/headless/listbox';
import * as React from 'react';
import { createPortal } from 'react-dom';

function OptionItem({ option, index, listbox }: { option: unknown; index: number; listbox: useListboxInstance }) {
    const { optionProps } = useListboxOption({ option, index, context: listbox });

    return (
        <li
            {...optionProps}
            className="flex items-center px-3 py-2 rounded-md cursor-pointer select-none text-sm outline-none transition-[background-color] duration-200 text-surface-700 dark:text-surface-0 hover:bg-surface-50 dark:hover:bg-surface-800 data-[focused]:bg-surface-100 dark:data-[focused]:bg-surface-800 data-[selected]:bg-surface-100 dark:data-[selected]:bg-surface-800 data-[selected]:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-60"
        >
            {listbox.getOptionLabel(option)}
        </li>
    );
}

export default function BasicDemo() {
    const [filteredCountries, setFilteredCountries] = React.useState<string[]>([]);

    const search = (event: useAutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        setFilteredCountries(query ? countries.filter((country) => country.toLowerCase().includes(query)) : [...countries]);
    };

    const { rootProps, inputProps, listProps, positionerProps, popupProps, state, listbox } = useAutoComplete({
        options: filteredCountries,
        onComplete: search
    });

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
                <input
                    {...inputProps}
                    placeholder="Search a country..."
                    className="w-full px-3 py-2 text-sm bg-transparent border border-surface-200 dark:border-surface-700 rounded-lg outline-none text-surface-700 dark:text-surface-0 placeholder:text-surface-400 transition-[border-color] duration-200 focus:border-primary"
                />
                {portal.state.mounted &&
                    state.opened &&
                    createPortal(
                        <div {...positionerProps}>
                            <div
                                {...popupProps}
                                className="border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-0 dark:bg-surface-900 shadow-md overflow-hidden"
                            >
                                <ul {...listProps} className="list-none m-0 p-1 outline-none max-h-56 overflow-auto">
                                    {listbox?.getOptions().map((option: unknown, index: number) => (
                                        <OptionItem key={index} option={option} index={index} listbox={listbox} />
                                    ))}
                                </ul>
                                {filteredCountries.length === 0 && <div className="px-3 py-2 text-sm text-surface-400">No countries found</div>}
                            </div>
                        </div>,
                        document.body
                    )}
            </div>
        </div>
    );
}

const countries = [
    'Argentina',
    'Australia',
    'Brazil',
    'Canada',
    'China',
    'Egypt',
    'France',
    'Germany',
    'India',
    'Italy',
    'Japan',
    'Mexico',
    'Netherlands',
    'Norway',
    'Poland',
    'South Korea',
    'Spain',
    'Sweden',
    'Switzerland',
    'Turkey',
    'United Kingdom',
    'United States'
];
```

## Usage

```tsx showLineNumbers {1,3-4,7-12,14}
import { useAutoComplete } from '@primereact/headless/autocomplete';

const autocomplete = useAutoComplete({ options: filteredItems, onComplete: search });
const { rootProps, inputProps, triggerProps, listProps, positionerProps, popupProps, arrowProps, state, listbox } = autocomplete;

return (
    <div {...rootProps}>
        <input {...inputProps} />
        <button {...triggerProps}></button>
        <div {...positionerProps}>
            <div {...popupProps}>
                <ul {...listProps}>...</ul>
            </div>
            <div {...arrowProps} />
        </div>
    </div>
);
```

`useAutoComplete` composes `useListbox` and `usePopover` internally, managing search callbacks, input value synchronization, and popup lifecycle — see [Primitive](../../primitive/autocomplete/features.md) for a component-based API.

## Features

- `rootProps`, `inputProps`, `triggerProps`, `listProps`, `positionerProps`, `popupProps`, `arrowProps`, `indicatorProps`, and `clearProps` return spread-ready prop objects
- Composes `useListbox` internally — the returned `listbox` instance provides option iteration, selection state, and `useListboxOption` support
- `onComplete` callback fires with the current query for custom filtering logic
- `show()`, `hide()`, `toggle()`, and `focus()` for imperative popup and input control
- `getSelectedOptionLabel()` and `hasValue()` for reading the current selection
- `setRendered()` controls whether the overlay has been rendered at least once, useful for lazy rendering strategies

## Behavior

### Default Value

Set `defaultValue` for uncontrolled selection.

```tsx
const autocomplete = useAutoComplete({ options: items, onComplete: search, defaultValue: 'React' });
```

### Default Input Value

Set `defaultInputValue` to provide an initial input text in uncontrolled mode. This is independent of `defaultValue` — it controls only the text shown in the input field.

```tsx
const autocomplete = useAutoComplete({ options: items, onComplete: search, defaultInputValue: 'Rea' });
```

### Controlled

Pass `value` and `onValueChange` for controlled selection state.

```tsx
const [selected, setSelected] = React.useState(null);

const autocomplete = useAutoComplete({
    options: items,
    onComplete: search,
    value: selected,
    onValueChange: (e) => setSelected(e.value)
});
```

### Controlled Input Value

Use `inputValue` and `onInputValueChange` to control the text input independently from the selection. This is useful for custom filtering, clearing the input programmatically, or syncing the query with external state.

```tsx
const [query, setQuery] = React.useState('');

const autocomplete = useAutoComplete({
    options: items,
    onComplete: search,
    inputValue: query,
    onInputValueChange: (e) => setQuery(e.query)
});
```

### Option Fields

Use `optionLabel`, `optionValue`, `optionDisabled`, and `optionKey` to map fields when options are objects.

```tsx
const autocomplete = useAutoComplete({
    optionLabel: 'name',
    optionValue: 'code',
    optionDisabled: 'inactive',
    optionKey: 'code'
});
```

### Grouped Options

Set `optionGroupLabel` and `optionGroupChildren` to support grouped option structures.

```tsx
const autocomplete = useAutoComplete({
    optionGroupLabel: 'label',
    optionGroupChildren: 'items'
});
```

### Search Delay

Set `delay` to debounce the `onComplete` callback in milliseconds.

```tsx
const autocomplete = useAutoComplete({ delay: 300 });
```

### Minimum Length

Set `minLength` to require a minimum number of characters before triggering the search.

```tsx
const autocomplete = useAutoComplete({ minLength: 2 });
```

### Force Selection

Enable `forceSelection` to clear the input on blur if the typed value does not match any option.

```tsx
const autocomplete = useAutoComplete({ forceSelection: true });
```

### Disabled

Set `disabled` to prevent all interaction.

```tsx
const autocomplete = useAutoComplete({ disabled: true });
```

### Focus Behavior

Use `autoOptionFocus` to automatically focus the first option when the popup opens, `selectOnFocus` to select while navigating, and `focusOnHover` to move focus with mouse hover.

```tsx
const autocomplete = useAutoComplete({ autoOptionFocus: true, selectOnFocus: true });
```

### Popup Control

Use `open` and `onOpenChange` for controlled popup state, or `defaultOpen` for uncontrolled initial state.

```tsx
const [open, setOpen] = React.useState(false);

const autocomplete = useAutoComplete({
    open,
    onOpenChange: (e) => setOpen(e.value)
});
```

### Popup Behavior

Set `closeOnEscape` to dismiss the overlay with the Escape key, `autoFocus` to move focus into the overlay when it opens, and `trapped` to keep focus within the overlay.

```tsx
const autocomplete = useAutoComplete({ closeOnEscape: true, autoFocus: true, trapped: true });
```

### Meta Key Selection

Enable `metaKeySelection` to require holding the meta key (Cmd/Ctrl) to select or deselect an option.

```tsx
const autocomplete = useAutoComplete({ metaKeySelection: true });
```

### Locale

Set `locale` to control the locale used for string comparison during force selection matching.

```tsx
const autocomplete = useAutoComplete({ locale: 'tr-TR', forceSelection: true });
```

### Form Integration

Use `name` to set the input's name attribute for form submission, and `tabIndex` to control the tab order.

```tsx
const autocomplete = useAutoComplete({ name: 'city', tabIndex: 0 });
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="autocomplete"` and a `data-part` that identifies the element. State-driven attributes appear or disappear automatically.

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
/* Input focus ring */
[data-scope='autocomplete'][data-part='input']:focus {
    outline: 2px solid var(--p-primary-color);
    outline-offset: -2px;
}

/* Open/close indicator rotation */
[data-scope='autocomplete'][data-part='indicator'][data-open] {
    transform: rotate(180deg);
}

/* Popup entrance */
[data-scope='autocomplete'][data-part='popup'][data-open] {
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

### useAutoComplete

> **API/props table for `useAutoComplete` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [AutoComplete Primitive](../../primitive/autocomplete/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
