# useAutoComplete

Hook that manages autocomplete state, search callbacks, and popup positioning for combobox inputs.

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
