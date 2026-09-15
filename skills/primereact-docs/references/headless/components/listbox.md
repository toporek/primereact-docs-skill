# useListbox

Hook that manages listbox selection state, keyboard navigation, and option search.

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

> **`useListbox` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/listbox or the installed `@primereact/types`.

### useListboxOption

> **`useListboxOption` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/listbox or the installed `@primereact/types`.

## Accessibility

Arrow keys navigate options, Space selects with multi-select support, Home/End jump to ends, and Ctrl+A selects all in multiple mode. See [Primitive](../../primitive/components/listbox.md#accessibility) for full WAI-ARIA compliance details.
