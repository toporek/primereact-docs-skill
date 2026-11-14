# useInputTags

Hook that manages tag input state and keyboard navigation between chips.

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

> **`useInputTags` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/inputtags or the installed `@primereact/types`.

## Accessibility

Enter adds a tag, Backspace on empty input removes the last tag, and Arrow keys navigate existing tags for deletion. See [Primitive](../../primitive/components/inputtags.md#accessibility) for full WAI-ARIA compliance details.
