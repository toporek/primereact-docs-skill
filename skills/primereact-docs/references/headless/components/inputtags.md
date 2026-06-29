# useInputTags

Hook that manages tag input state and keyboard navigation between chips.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { useAutoComplete, type UseAutoCompleteCompleteEvent, type UseAutoCompleteValueChangeEvent } from '@primereact/headless/autocomplete';
import { useInputTags, type UseInputTagsValueChangeEvent } from '@primereact/headless/inputtags';
import { useListboxOption } from '@primereact/headless/listbox';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import type { UseListboxInstance } from '@primereact/types/headless/listbox';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { createPortal } from 'react-dom';

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

function OptionItem({ option, index, listbox }: { option: unknown; index: number; listbox: UseListboxInstance }) {
    const { optionProps } = useListboxOption({ option, index, context: listbox });

    return (
        <li
            {...optionProps}
            className="flex items-center px-3 py-2 rounded-md cursor-pointer select-none text-sm outline-none transition-[background-color] duration-200 text-surface-700 dark:text-surface-0 hover:bg-surface-50 dark:hover:bg-surface-800 data-[focused]:bg-surface-100 dark:data-[focused]:bg-surface-800 data-[selected]:bg-surface-100 dark:data-[selected]:bg-surface-800 data-[selected]:text-primary"
        >
            {listbox.getOptionLabel(option) as string}
        </li>
    );
}

export default function BasicDemo() {
    const [tags, setTags] = React.useState<string[]>([]);
    const [query, setQuery] = React.useState('');
    const [rootEl, setRootEl] = React.useState<HTMLElement | null>(null);

    const filteredCountries = React.useMemo(() => {
        const q = query.toLowerCase();

        return countries.filter((country) => (!q || country.toLowerCase().includes(q)) && !tags.includes(country));
    }, [query, tags]);

    const inputtags = useInputTags({
        value: tags,
        onValueChange: (e: UseInputTagsValueChangeEvent) => setTags(e.value as string[])
    });

    const ac = useAutoComplete({
        options: filteredCountries,
        onComplete: (e: UseAutoCompleteCompleteEvent) => setQuery(e.query),
        onValueChange: (e: UseAutoCompleteValueChangeEvent) => {
            if (typeof e.value === 'string') inputtags.addItem(e.value);
        }
    });

    const portal = usePortal();

    usePositioner({
        anchor: rootEl,
        content: ac.state.positionerElement,
        side: 'bottom',
        sideOffset: 4,
        flip: true,
        shift: true
    });

    const rootProps = mergeProps(inputtags.rootProps, { ref: setRootEl });

    const inputProps = mergeProps(ac.inputProps, inputtags.controlProps, {
        placeholder: tags.length === 0 ? 'Add countries...' : '',
        className:
            'flex-1 min-w-20 px-1 py-0.5 text-sm bg-transparent outline-none border-none text-surface-700 dark:text-surface-0 placeholder:text-surface-400'
    });

    return (
        <div className="flex justify-center">
            <div
                {...rootProps}
                className="flex flex-wrap items-center gap-1.5 w-full md:w-80 px-2 py-1.5 border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-0 dark:bg-surface-900 cursor-text transition-colors focus-within:border-primary-500"
            >
                {inputtags.state.value.map((tag: string, index: number) => (
                    <span
                        key={`${tag}_${index}`}
                        {...inputtags.getItemProps(index)}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-sm bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-0 rounded-md select-none data-selected:bg-surface-200 dark:data-selected:bg-surface-700"
                    >
                        {tag}
                        <button
                            type="button"
                            onClick={() => inputtags.removeItem(index)}
                            className="flex items-center justify-center w-4 h-4 bg-transparent border-none cursor-pointer text-surface-400 hover:text-surface-700 dark:hover:text-surface-200 transition-colors rounded-sm"
                        >
                            <Times className="w-3 h-3" />
                        </button>
                    </span>
                ))}
                <input {...inputProps} />
            </div>

            {portal.state.mounted &&
                ac.state.opened &&
                createPortal(
                    <div {...ac.positionerProps}>
                        <div
                            {...ac.popupProps}
                            className="border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-0 dark:bg-surface-900 shadow-md overflow-hidden"
                            style={{ width: 'var(--px-positioner-anchor-width, max-content)' }}
                        >
                            {filteredCountries.length > 0 && (
                                <ul {...ac.listProps} className="list-none m-0 p-1 outline-none max-h-56 overflow-auto">
                                    {ac.listbox?.getOptions().map((option: unknown, index: number) => (
                                        <OptionItem key={index} option={option} index={index} listbox={ac.listbox!} />
                                    ))}
                                </ul>
                            )}
                            {filteredCountries.length === 0 && <div className="px-3 py-2 text-sm">No results found</div>}
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    );
}

```

## Usage

```tsx
import { useInputTags } from '@primereact/headless/inputtags';
```

```tsx
const { rootProps, controlProps, getItemProps, removeItem, state } = useInputTags({
    value: tags,
    onValueChange: (e) => setTags(e.value)
});

<div {...rootProps}>
    {state.value.map((tag, index) => (
        <span key={index} {...getItemProps(index)}>
            {tag}
            <button onClick={() => removeItem(index)}>×</button>
        </span>
    ))}
    <input {...controlProps} />
</div>;
```

`useInputTags` is a pure tag-state hook, it manages the tag array, the text-entry value, focus, keyboard navigation between chips, delimiter splitting, and paste handling. It deliberately has no popover/listbox composition built in. For typeahead-driven entry, compose the hook's `controlProps` with an `<AutoComplete.Root>` tree in the [Primitive](../../primitive/components/inputtags.md) API.

## Returned values

| Field                    | Description                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `state.value`            | Current tag list.                                                                                                                                                                                                        |
| `state.inputValue`       | Current text-entry value.                                                                                                                                                                                                |
| `state.focused`          | Whether the text-entry control is focused.                                                                                                                                                                               |
| `state.focusedItemIndex` | Index of the keyboard-focused tag, or `-1` when none.                                                                                                                                                                    |
| `inputRef`               | Ref attached to the text-entry control.                                                                                                                                                                                  |
| `rootProps`              | Spread on the container element (sets `role="listbox"` and `aria-orientation`). Attach your own callback ref via `mergeProps` when you need the root DOM node, e.g. to anchor a popup positioner against the full field. |
| `controlProps`           | Spread on the text-entry `<input>`. Wires `value`/`onChange`, focus/blur tracking, keyboard handlers, and paste-to-tags.                                                                                                 |
| `hiddenInputProps`       | Optional hidden `<input type="hidden">` props for form submission with the joined tag values.                                                                                                                            |
| `getItemProps`           | `(index) => props`, spread on each rendered chip for ARIA roles (`role="option"`, `aria-selected`, `aria-setsize`, `aria-posinset`) and the `data-selected` focus marker.                                                |
| `addItem`                | `(tag: string \| string[]) => string[]`, adds one or more tags (subject to `max`, `allowDuplicate`, trimming).                                                                                                           |
| `removeItem`             | `(index) => void`, removes the tag at the given index.                                                                                                                                                                   |
| `removeLast`             | Removes the last tag.                                                                                                                                                                                                    |
| `removeAll`              | Clears every tag.                                                                                                                                                                                                        |

## Working with callbacks

### Controlled tags

Pass `value` and `onValueChange` to own the tag list, needed when tags are persisted, validated, or shared across components.

```tsx
const [tags, setTags] = React.useState<string[]>(['React']);

useInputTags({
    value: tags,
    onValueChange: (e) => setTags(e.value)
});
```

### Controlled input query

`inputValue`/`onInputValueChange` control only the typed text, independent of the committed tag list. Useful for custom filtering, clearing the input programmatically, or syncing the query with external state.

```tsx
const [query, setQuery] = React.useState('');

useInputTags({
    inputValue: query,
    onInputValueChange: (e) => setQuery(e.query)
});
```

### Custom add triggers

Combine `delimiter`, `addOnBlur`, `addOnTab`, and `addOnPaste` when users expect to paste comma-separated lists or commit on Tab.

```tsx
useInputTags({
    delimiter: ',',
    addOnBlur: true,
    addOnTab: true,
    addOnPaste: true
});
```

### Per-tag add/remove events

Use `onAdd` and `onRemove` when side effects should run for each individual change (analytics, toast, server sync).

```tsx
useInputTags({
    onAdd: (e) => console.log('Added:', e.value),
    onRemove: (e) => console.log('Removed:', e.value)
});
```

### Tracking the root element

`useInputTags` doesn't expose a root-element ref by design. When you need the container DOM node (e.g. as `anchor` for a popup positioner so the suggestions match the full field width), attach a callback ref via `mergeProps` and back it with `useState` so consumers re-render once it mounts.

```tsx
import { mergeProps } from '@primeuix/utils';

const [rootEl, setRootEl] = React.useState<HTMLElement | null>(null);

const inputtags = useInputTags({ value: tags, onValueChange: (e) => setTags(e.value) });
const rootProps = mergeProps(inputtags.rootProps, { ref: setRootEl });

usePositioner({ anchor: rootEl, content: positionerEl /* … */ });

<div {...rootProps}>…</div>;
```

## Styling with data attributes

The hook exposes state through `data-*` attributes on each part. Use them as CSS selectors, no className juggling.

| Scope       | Part      | States                              |
| ----------- | --------- | ----------------------------------- |
| `inputtags` | `root`    | `:focus-within`                     |
| `inputtags` | `control` | (none, standard input states apply) |

Each chip rendered with `{...getItemProps(index)}` receives:

| Attribute       | Meaning                                                                            |
| --------------- | ---------------------------------------------------------------------------------- |
| `role`          | `"option"`                                                                         |
| `aria-selected` | `true` when the chip has keyboard focus, else `false`                              |
| `data-selected` | Empty string when focused (matchable via `[data-selected]`), `undefined` otherwise |

```css
[data-scope='inputtags'][data-part='root']:focus-within {
    border-color: var(--p-primary-color);
    box-shadow: 0 0 0 1px var(--p-primary-color);
}

[data-scope='inputtags'][data-part='root'] [role='option'][data-selected] {
    background: var(--p-surface-200);
}
```

## API

### useInputTags

> **API/props table for `useInputTags` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Enter adds a tag, Backspace on empty input removes the last tag, and Arrow keys navigate existing tags for deletion. See [Primitive](../../primitive/components/inputtags.md#accessibility) for full WAI-ARIA compliance details.
