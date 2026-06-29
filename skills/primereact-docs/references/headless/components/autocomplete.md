# useAutoComplete

Hook that manages autocomplete state, search callbacks, and popup positioning for combobox inputs.

```tsx
'use client';
import { useAutoComplete, type UseAutoCompleteCompleteEvent } from '@primereact/headless/autocomplete';
import { useListboxOption } from '@primereact/headless/listbox';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import type { UseListboxInstance } from '@primereact/types/headless/listbox';
import * as React from 'react';
import { createPortal } from 'react-dom';

function OptionItem({ option, index, listbox }: { option: unknown; index: number; listbox: UseListboxInstance }) {
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

    const search = (event: UseAutoCompleteCompleteEvent) => {
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

```tsx
import { useAutoComplete } from '@primereact/headless/autocomplete';
```

```tsx
const autocomplete = useAutoComplete({ options: filteredItems, onComplete: search });
const { rootProps, inputProps, triggerProps, listProps, positionerProps, popupProps, arrowProps } = autocomplete;

<div {...rootProps}>
    <input {...inputProps} />
    <button {...triggerProps}></button>
    <div {...positionerProps}>
        <div {...popupProps}>
            <ul {...listProps}>...</ul>
        </div>
        <div {...arrowProps} />
    </div>
</div>;
```

`useAutoComplete` composes `useListbox` and `usePopover` internally. See [Primitive](../../primitive/components/autocomplete.md) for a component-based API.

## Features

- **Search callback**, fires `onComplete` with the current query; you own the filtering logic
- **Popup lifecycle**, open/close state, positioning, keyboard dismissal, and outside-click handling
- **Listbox integration**, option iteration, selection, and keyboard navigation via the returned `listbox` instance
- **Controlled or uncontrolled**, both value and input text can be managed externally or internally
- **Imperative controls**, `show()`, `hide()`, `toggle()`, `focus()`, and `setRendered()`

## Working with callbacks

### onComplete, filter your own data

The hook doesn't filter options for you. Use `onComplete` to run the search against your data source.

```tsx
const [filtered, setFiltered] = useState(items);

useAutoComplete({
    options: filtered,
    onComplete: ({ query }) => {
        setFiltered(items.filter((item) => item.toLowerCase().includes(query.toLowerCase())));
    }
});
```

### Async search with debounce

Set `delay` to throttle `onComplete` for network requests.

```tsx
useAutoComplete({
    options: results,
    delay: 300,
    onComplete: async ({ query }) => {
        const res = await fetch(`/api/search?q=${query}`);
        setResults(await res.json());
    }
});
```

### Controlled selection

Pass `value` and `onValueChange` to drive the selected option from outside state.

```tsx
const [selected, setSelected] = useState(null);

useAutoComplete({
    value: selected,
    onValueChange: ({ value }) => setSelected(value)
});
```

### Controlled input text

`inputValue` and `onInputValueChange` control only the text in the input, independent of `value`.

```tsx
const [query, setQuery] = useState('');

useAutoComplete({
    inputValue: query,
    onInputValueChange: ({ query }) => setQuery(query)
});
```

### Object options

When options are objects, map the fields used for labels, values, and disabled state.

```tsx
useAutoComplete({
    options: cities,
    optionLabel: 'name',
    optionValue: 'code',
    optionDisabled: 'inactive'
});
```

## Styling with data attributes

The hook exposes state through `data-*` attributes on each part. Use them as CSS selectors, no className juggling.

| Scope          | Part              | States                                                              |
| -------------- | ----------------- | ------------------------------------------------------------------- |
| `autocomplete` | `trigger`         | `data-positioner-open`                                              |
| `autocomplete` | `popup`           | `data-open`                                                         |
| `autocomplete` | `indicator`       | `data-open`, `data-closed`                                          |
| `listbox`      | `option`          | `data-selected`, `data-unselected`, `data-focused`, `data-disabled` |
| `listbox`      | `optionindicator` | `data-selected`, `data-unselected`                                  |

```css
[data-scope='autocomplete'][data-part='indicator'][data-open] {
    transform: rotate(180deg);
}

[data-scope='autocomplete'][data-part='popup'][data-open] {
    border: 1px solid var(--p-content-border-color);
    border-radius: 6px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
}

[data-scope='listbox'][data-part='option'][data-focused] {
    background: var(--p-surface-100);
}
```

## API

### useAutoComplete

> **`useAutoComplete` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/autocomplete or the installed `@primereact/types`.

## Accessibility

Arrow keys navigate suggestions, Enter selects the focused option, Escape dismisses the popup, and typing filters via your onComplete handler. See [Primitive](../../primitive/components/autocomplete.md#accessibility) for full WAI-ARIA compliance details.
