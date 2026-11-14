# useSelect

Hook that manages select dropdown state, keyboard navigation, and popup positioning.

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
