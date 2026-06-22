# useInputTags

Hook that manages tag input state, keyboard navigation, and optional typeahead suggestions.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { useInputTags, useInputTagsCompleteEvent, type useInputTagsValueChangeEvent } from '@primereact/headless/inputtags';
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
    const [tags, setTags] = React.useState<string[]>([]);
    const [query, setQuery] = React.useState('');

    const filteredCountries = React.useMemo(() => {
        const q = query.toLowerCase();

        return countries.filter((country) => (!q || country.toLowerCase().includes(q)) && !tags.includes(country));
    }, [query, tags]);

    const { rootProps, inputProps, positionerProps, popupProps, listProps, getItemProps, getRemoveProps, state, listbox } = useInputTags({
        options: filteredCountries,
        value: tags,
        onValueChange: (e: useInputTagsValueChangeEvent) => setTags(e.value as string[]),
        onComplete: (e: useInputTagsCompleteEvent) => setQuery(e.query)
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
            <div
                {...rootProps}
                className="flex flex-wrap items-center gap-1.5 w-full md:w-80 px-2 py-1.5 border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-0 dark:bg-surface-900 cursor-text transition-colors"
            >
                {state.value.map((tag: string, index: number) => (
                    <span
                        key={`${tag}_${index}`}
                        {...getItemProps(index)}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-sm bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-0 rounded-md select-none"
                    >
                        {tag}
                        <button
                            {...getRemoveProps(index)}
                            className="flex items-center justify-center w-4 h-4 bg-transparent border-none cursor-pointer text-surface-400 hover:text-surface-700 dark:hover:text-surface-200 transition-colors rounded-sm"
                        >
                            <Times className="w-3 h-3" />
                        </button>
                    </span>
                ))}
                <input
                    {...inputProps}
                    placeholder={state.value.length === 0 ? 'Add countries...' : ''}
                    className="flex-1 min-w-20 px-1 py-0.5 text-sm bg-transparent outline-none border-none text-surface-700 dark:text-surface-0 placeholder:text-surface-400"
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

```tsx showLineNumbers {1,3-4,7-10,13}
import { useInputTags } from '@primereact/headless/inputtags';

const inputtags = useInputTags({ value: tags, onValueChange: (e) => setTags(e.value) });
const { rootProps, inputProps, getItemProps, getRemoveProps, state } = inputtags;

return (
    <div {...rootProps}>
        {state.value.map((tag, index) => (
            <span key={index} {...getItemProps(index)}>
                <button {...getRemoveProps(index)}></button>
            </span>
        ))}
        <input {...inputProps} />
    </div>
);
```

`useInputTags` composes `useListbox` and `usePopover` internally, managing chip creation, removal, keyboard navigation between chips, and optional typeahead integration. Each chip is rendered manually using `getItemProps` and `getRemoveProps` — see [Primitive](../../primitive/inputtags/features.md) for a component-based API that uses `Chip` sub-components by default.

### With Positioner

When `options` are provided for typeahead support, use `positionerProps`, `popupProps`, `listProps`, and `arrowProps` to render the suggestion dropdown.

```tsx showLineNumbers {1,3-4,6-9,12-16}
import { useInputTags } from '@primereact/headless/inputtags';

const inputtags = useInputTags({ value: tags, options: filteredItems, optionLabel: 'label', onValueChange: (e) => setTags(e.value), onComplete: search });
const { rootProps, inputProps, getItemProps, getRemoveProps, positionerProps, popupProps, listProps, arrowProps, state, listbox } = inputtags;

<div {...rootProps}>
    {state.value.map((tag, index) => (
        <span key={index} {...getItemProps(index)}>
            <button {...getRemoveProps(index)}></button>
        </span>
    ))}
    <input {...inputProps} />
    <div {...positionerProps}>
        <div {...arrowProps} />
        <div {...popupProps}>
            <ul {...listProps}>...</ul>
        </div>
    </div>
</div>;
```

## Features

- `rootProps`, `inputProps`, `hiddenInputProps` return spread-ready prop objects for container and input elements
- `getItemProps(index)` and `getRemoveProps(index)` return per-item prop objects with keyboard handlers and ARIA attributes
- `onItemRemoveClick(index)` and `onRemoveAllItems()` for imperative tag removal
- Optional typeahead via `options`, `onComplete`, and built-in `positionerProps`, `popupProps`, `listProps`, `arrowProps` for dropdown rendering
- Composes `useListbox` internally — the returned `listbox` instance provides option iteration, selection state, and `useListboxOption` support
- `show()` and `hide()` for imperative overlay control
- `setRendered()` controls whether the overlay has been rendered at least once, useful for lazy rendering strategies
- `state.value` array for iterating over current tags

## Behavior

### Default Value

Set `defaultValue` for uncontrolled tag management.

```tsx
const inputtags = useInputTags({ defaultValue: ['React', 'Vue'] });
```

### Default Input Value

Set `defaultInputValue` to provide an initial input text in uncontrolled mode.

```tsx
const inputtags = useInputTags({ defaultInputValue: 'Vu' });
```

### Controlled

Pass `value` and `onValueChange` for controlled tag state.

```tsx
const [tags, setTags] = React.useState<string[]>(['React']);

const inputtags = useInputTags({
    value: tags,
    onValueChange: (e) => setTags(e.value)
});
```

### Controlled Input Value

Use `inputValue` and `onInputValueChange` to control the text input independently from the tag list. This is useful for custom filtering, clearing the input programmatically, or syncing the query with external state.

```tsx
const [query, setQuery] = React.useState('');

const inputtags = useInputTags({
    inputValue: query,
    onInputValueChange: (e) => setQuery(e.query)
});
```

### Delimiter

Set `delimiter` to allow creating tags with a specific character in addition to the Enter key. Supports strings and regular expressions.

```tsx
const inputtags = useInputTags({ delimiter: ',' });
```

### Max Tags

Set `max` to limit the number of tags that can be added.

```tsx
const inputtags = useInputTags({ max: 5 });
```

### Allow Duplicates

Set `allowDuplicate` to permit adding the same tag more than once. Disabled by default.

```tsx
const inputtags = useInputTags({ allowDuplicate: true });
```

### Add Triggers

Use `addOnBlur` to add the current input as a tag when the input loses focus, `addOnTab` to add on Tab key press, and `addOnPaste` to split pasted text by the delimiter and add each part as a tag.

```tsx
const inputtags = useInputTags({ addOnBlur: true, addOnTab: true, addOnPaste: true, delimiter: ',' });
```

### Add and Remove Events

Use `onAdd` and `onRemove` callbacks to respond to individual tag changes.

```tsx
const inputtags = useInputTags({
    onAdd: (e) => console.log('Added:', e.value),
    onRemove: (e) => console.log('Removed:', e.value)
});
```

### Typeahead

Pass `options`, `optionLabel`, and `onComplete` to enable suggestion dropdown support. The hook returns `positionerProps`, `popupProps`, and `listProps` to render the dropdown overlay, along with the `listbox` instance for option iteration.

```tsx
const { rootProps, inputProps, positionerProps, popupProps, listProps, state, listbox } = useInputTags({
    options: filteredItems,
    optionLabel: 'label'
});
```

### Option Fields

Use `optionLabel`, `optionValue`, `optionDisabled`, and `optionKey` to map fields when typeahead options are objects.

```tsx
const inputtags = useInputTags({
    options: items,
    optionLabel: 'name',
    optionValue: 'code',
    optionDisabled: 'inactive',
    optionKey: 'code'
});
```

### Grouped Options

Set `optionGroupLabel` and `optionGroupChildren` to support grouped option structures in typeahead mode.

```tsx
const inputtags = useInputTags({
    options: groupedItems,
    optionGroupLabel: 'label',
    optionGroupChildren: 'items'
});
```

### Search Delay

Set `delay` to debounce the `onComplete` callback in milliseconds.

```tsx
const inputtags = useInputTags({ delay: 300 });
```

### Minimum Length

Set `minLength` to require a minimum number of characters before triggering the search.

```tsx
const inputtags = useInputTags({ minLength: 2 });
```

### Disabled

Set `disabled` to prevent all interaction.

```tsx
const inputtags = useInputTags({ disabled: true });
```

### Popup Control

Use `open` and `onOpenChange` for controlled popup state, or `defaultOpen` for uncontrolled initial state.

```tsx
const [open, setOpen] = React.useState(false);

const inputtags = useInputTags({
    open,
    onOpenChange: (e) => setOpen(e.value)
});
```

### Popup Behavior

Set `closeOnEscape` to dismiss the overlay with the Escape key, `autoFocus` to move focus into the overlay when it opens, and `trapped` to keep focus within the overlay.

```tsx
const inputtags = useInputTags({ closeOnEscape: true, autoFocus: true, trapped: true });
```

### Form Integration

Use `name` to set the input's name attribute for form submission. A hidden input is also rendered with the joined tag values.

```tsx
const inputtags = useInputTags({ name: 'technologies' });
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="inputtags"` and a `data-part` that identifies the element. State-driven attributes appear or disappear automatically.

| Part    | State Attributes |
| ------- | ---------------- |
| `item`  | `aria-selected`  |
| `popup` | `data-open`      |

Options rendered via `useListboxOption` use `data-scope="listbox"` with the following state attributes.

| Part              | State Attributes                                                    |
| ----------------- | ------------------------------------------------------------------- |
| `option`          | `data-selected`, `data-unselected`, `data-focused`, `data-disabled` |
| `optionindicator` | `data-selected`, `data-unselected`                                  |

```css
/* Root focus-within ring */
[data-scope='inputtags'][data-part='root']:focus-within {
    border-color: var(--p-primary-color);
    box-shadow: 0 0 0 1px var(--p-primary-color);
}

/* Tag item */
[data-scope='inputtags'][data-part='item'] {
    background: var(--p-surface-100);
    border-radius: 4px;
    padding: 2px 8px;
}
[data-scope='inputtags'][data-part='item'][aria-selected='true'] {
    background: var(--p-primary-color);
    color: var(--p-primary-contrast-color);
}

/* Popup entrance */
[data-scope='inputtags'][data-part='popup'][data-open] {
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

### useInputTags

> **API/props table for `useInputTags` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [InputTags Primitive](../../primitive/inputtags/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
