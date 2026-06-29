# InputTags

An unstyled tag input component with keyboard navigation, delimiter support, and optional typeahead suggestions.

Build fully custom tag input fields with complete control over layout and styling.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { AutoComplete, type AutoCompleteCompleteEvent, type AutoCompleteValueChangeEvent } from 'primereact/autocomplete';
import { InputTags, type InputTagsRootValueChangeEvent } from 'primereact/inputtags';
import * as React from 'react';
import styles from './basic-demo.module.css';

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

export default function BasicDemo() {
    const [tags, setTags] = React.useState<string[]>([]);
    const [query, setQuery] = React.useState('');
    const [rootEl, setRootEl] = React.useState<HTMLElement | null>(null);

    const filteredCountries = React.useMemo(() => {
        const q = query.toLowerCase();

        return countries.filter((country) => (!q || country.toLowerCase().includes(q)) && !tags.includes(country));
    }, [query, tags]);

    return (
        <div className={styles.wrapper}>
            <InputTags.Root
                ref={setRootEl}
                value={tags}
                onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}
                className={styles.root}
            >
                <InputTags.Items>
                    {({ item, remove, itemProps }) => (
                        <span {...itemProps} className={styles.tag}>
                            {item}
                            <button type="button" onClick={remove} className={styles.remove}>
                                <Times className={styles.removeIcon} />
                            </button>
                        </span>
                    )}
                </InputTags.Items>
                <InputTags.Control>
                    {({ controlProps, add }) => (
                        <AutoComplete.Root
                            options={filteredCountries}
                            onComplete={(e: AutoCompleteCompleteEvent) => setQuery(e.query)}
                            onValueChange={(e: AutoCompleteValueChangeEvent) => {
                                if (typeof e.value === 'string') add(e.value);
                            }}
                            className={styles.acRoot}
                        >
                            <AutoComplete.Input
                                {...controlProps}
                                placeholder={tags.length === 0 ? 'Add countries...' : ''}
                                className={styles.input}
                            />
                            <AutoComplete.Portal>
                                <AutoComplete.Positioner anchor={rootEl as HTMLElement} sideOffset={4}>
                                    <AutoComplete.Popup className={styles.popup}>
                                        <AutoComplete.List className={styles.list} style={{ maxHeight: '14rem' }}>
                                            {filteredCountries.map((country, index) => (
                                                <AutoComplete.Option key={country} index={index} uKey={country} className={styles.option}>
                                                    {country}
                                                </AutoComplete.Option>
                                            ))}
                                        </AutoComplete.List>
                                        <AutoComplete.Empty className={styles.empty}>No results found</AutoComplete.Empty>
                                    </AutoComplete.Popup>
                                </AutoComplete.Positioner>
                            </AutoComplete.Portal>
                        </AutoComplete.Root>
                    )}
                </InputTags.Control>
            </InputTags.Root>
        </div>
    );
}

```

## Features

- Tag creation on Enter key press with optional delimiter character
- Maximum tag limit with `max` prop
- Duplicate prevention with `allowDuplicate`
- Optional typeahead suggestions by composing `AutoComplete.Root` inside `InputTags.Control`
- Add and remove event callbacks for fine-grained control
- Paste support with `addOnPaste` and automatic delimiter splitting

## Usage

```tsx
import { InputTags } from 'primereact/inputtags';
```

```tsx
<InputTags.Root value={tags} onValueChange={(e) => setTags(e.value)}>
    <InputTags.Items>
        {({ item, remove }) => (
            <span>
                {item}
                <button onClick={remove}>×</button>
            </span>
        )}
    </InputTags.Items>
    <InputTags.Control>{({ controlProps }) => <input {...controlProps} />}</InputTags.Control>
</InputTags.Root>
```

`InputTags.Items` is a pure render-prop iterator: it invokes `children` once per tag with `{ item, index, remove, itemProps }`. Spread `itemProps` onto the rendered chip element to wire ARIA roles and the `data-selected` focus marker. `InputTags.Control` calls `children` exactly once with `{ controlProps, add, remove, removeLast, removeAll, value, inputValue, focused }`. `add` accepts either a single string or an array of strings.

### With Typeahead

For suggestion-driven tag entry, mount an `<AutoComplete.Root>` tree inside `<InputTags.Control>`. Spread `controlProps` onto `<AutoComplete.Input>` so the text-entry gets InputTags' Backspace-to-remove, delimiter-split, `addOnBlur` / `addOnPaste`, and focus handlers. On `AutoComplete.onValueChange` (option selection), call `add` from the render-prop arg to commit the tag. Attach a callback ref + state to `<InputTags.Root>` and pass that element to `<AutoComplete.Positioner anchor={...}>` so the suggestion popup sizes against the full chip-input field rather than just the typing area.

```tsx
import { AutoComplete } from 'primereact/autocomplete';
import { InputTags } from 'primereact/inputtags';

const [rootEl, setRootEl] = React.useState<HTMLElement | null>(null);

<InputTags.Root ref={setRootEl} value={tags} onValueChange={(e) => setTags(e.value)}>
    <InputTags.Items>
        {({ item, remove, itemProps }) => (
            <span {...itemProps}>
                {item}
                <button onClick={remove}>×</button>
            </span>
        )}
    </InputTags.Items>
    <InputTags.Control>
        {({ controlProps, add }) => (
            <AutoComplete.Root
                options={filteredItems}
                onComplete={onSearch}
                onValueChange={(e) => {
                    if (typeof e.value === 'string') add(e.value);
                }}
            >
                <AutoComplete.Input {...controlProps} />
                <AutoComplete.Portal>
                    <AutoComplete.Positioner anchor={rootEl}>
                        <AutoComplete.Popup>
                            <AutoComplete.List />
                            <AutoComplete.Empty>No results found</AutoComplete.Empty>
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        )}
    </InputTags.Control>
</InputTags.Root>;
```

## Behavior

### Polymorphic Root

Use `as` on `InputTags.Root` to change the rendered HTML element.

```tsx
<InputTags.Root as="section">...</InputTags.Root>
```

### Render Prop Architecture

The component intentionally has no Item / Label / Remove / Input sub-parts. Consumers compose the per-tag JSX (e.g. `Chip.*`, `Tag`, custom) inside `InputTags.Items`, and the text-entry element (a plain `<input>`, `<AutoComplete.Input>`, or anything else) inside `InputTags.Control`.

## Pass Through

## API

### InputTagsRoot

> **API/props table for `InputTagsRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"inputtags"` |
| `data-part`  | `"root"`      |

| Label | Type | Description |
|:------|:------|:------|
| root | InputTagsRootPassThroughType> | Used to pass attributes to the root's DOM element. |

### InputTagsItems

`InputTagsItems` accepts a render-prop child invoked once per tag with `{ item, index, remove, itemProps }`. Spread `itemProps` onto the rendered chip element for ARIA + keyboard navigation between tags.

### InputTagsControl

`InputTagsControl` accepts a render-prop child invoked once with `{ controlProps, add, remove, removeLast, removeAll, value, inputValue, focused }`. Spread `controlProps` onto a text-entry element (plain `<input>`, `<AutoComplete.Input>`, etc.). Call `add(tag)` or `add([tag1, tag2])` to commit one or more tags programmatically. When you need the root DOM node (for popup anchors, scroll-into-view, etc.), attach a callback ref via `ref={setRootEl}` on `<InputTags.Root>` and use the tracked state.

## Accessibility

### Screen Reader

The root container uses `role="listbox"` with `aria-orientation="horizontal"`. Each tag (via `itemProps`) has `role="option"` with `aria-selected`, `aria-setsize`, and `aria-posinset`. The text-entry element's ARIA depends on what the consumer renders: a plain `<input>` is just a text field; an `<AutoComplete.Input>` adds combobox + `aria-haspopup` / `aria-expanded` / `aria-controls` semantics automatically.

### Keyboard Support

| Key           | Function                                             |
| ------------- | ---------------------------------------------------- |
| `tab`         | Moves focus to the input element.                    |
| `enter`       | Adds a new tag with the current input value.         |
| `backspace`   | Removes the last tag when input is empty.            |
| `left arrow`  | Moves focus to the previous tag when input is empty. |
| `right arrow` | Moves focus to the next tag when focused on a tag.   |

### Tag Keyboard Support

| Key         | Function                 |
| ----------- | ------------------------ |
| `backspace` | Removes the focused tag. |
| `delete`    | Removes the focused tag. |
