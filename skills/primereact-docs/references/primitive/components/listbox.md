# Listbox

An unstyled listbox component with keyboard navigation, type-ahead search, and single or multiple selection.

Build fully custom option lists with complete control over layout and styling.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Listbox, ListboxListInstance } from 'primereact/listbox';
import styles from './basic-demo.module.css';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Listbox.Root options={cities} optionLabel="name" className={styles.root}>
                <Listbox.List className={styles.list}>
                    {(instance: ListboxListInstance) =>
                        instance.options?.map((option: unknown, index: number) => (
                            <Listbox.Option key={index} index={index} className={styles.option}>
                                <Listbox.OptionIndicator className={styles.optionIndicator}>
                                    <Check className={styles.checkIcon} />
                                </Listbox.OptionIndicator>
                                {instance.listbox?.getOptionLabel(option)}
                            </Listbox.Option>
                        ))
                    }
                </Listbox.List>
            </Listbox.Root>
        </div>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `List`, `Option`, `OptionIndicator`, `Header`, `Filter`, `Empty`, `Footer`
- Single and multiple selection with keyboard focus cycling and type-ahead search
- Option grouping with group header rendering
- Built-in filter input integration with customizable filtering logic

## Usage

```tsx
import { Listbox } from 'primereact/listbox';
```

```tsx
<Listbox.Root>
    <Listbox.Header>
        <Listbox.Filter />
    </Listbox.Header>
    <Listbox.List>
        <Listbox.Option>
            <Listbox.OptionIndicator />
        </Listbox.Option>
    </Listbox.List>
    <Listbox.Empty />
    <Listbox.Footer />
</Listbox.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Listbox.Root as="section">
    <Listbox.List as="div">...</Listbox.List>
</Listbox.Root>
```

### Render Function Children

`Listbox.List` accepts a render function as children, providing access to the component instance for custom option rendering.

```tsx
<Listbox.List>
    {(instance) =>
        instance.options?.map((option, index) => (
            <Listbox.Option key={index} index={index}>
                {instance.listbox?.getOptionLabel(option)}
            </Listbox.Option>
        ))
    }
</Listbox.List>
```

## Pass Through

## API

### ListboxRoot

> **`ListboxRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/listbox or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ListboxRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| hiddenElement | ListboxRootPassThroughType> | Used to pass attributes to the hidden sentinel element's DOM element. |
| header | ListboxRootPassThroughType> | Used to pass attributes to the header's DOM element. |
| footer | ListboxRootPassThroughType> | Used to pass attributes to the footer's DOM element. |
| list | ListboxRootPassThroughType> | Used to pass attributes to the list's DOM element. |
| empty | ListboxRootPassThroughType> | Used to pass attributes to the empty message's DOM element. |
| optionGroup | ListboxRootPassThroughType> | Used to pass attributes to the option group's DOM element. |
| option | ListboxRootPassThroughType> | Used to pass attributes to the option's DOM element. |
| optionIndicator | ListboxRootPassThroughType> | Used to pass attributes to the option indicator's DOM element. |
| filter | ListboxRootPassThroughType> | Used to pass attributes to the filter's DOM element. |

### ListboxList

> **`ListboxList` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/listbox or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ListboxListPassThroughType> | Used to pass attributes to the root's DOM element. |

### ListboxOption

> **`ListboxOption` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/listbox or the installed `@primereact/types`.

| Attribute         | Value                   |
| ----------------- | ----------------------- |
| `data-selected`   | Present when selected   |
| `data-unselected` | Present when unselected |
| `data-focused`    | Present when focused    |
| `data-disabled`   | Present when disabled   |

| Label | Type | Description |
|:------|:------|:------|
| root | ListboxOptionPassThroughType> | Used to pass attributes to the root's DOM element. |

### ListboxOptionIndicator

> **`ListboxOptionIndicator` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/listbox or the installed `@primereact/types`.

| Attribute         | Value                   |
| ----------------- | ----------------------- |
| `data-selected`   | Present when selected   |
| `data-unselected` | Present when unselected |

| Label | Type | Description |
|:------|:------|:------|
| root | ListboxOptionIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### ListboxHeader

> **`ListboxHeader` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/listbox or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ListboxHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### ListboxFilter

> **`ListboxFilter` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/listbox or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ListboxFilterPassThroughType> | Used to pass attributes to the root's DOM element. |

### ListboxEmpty

> **`ListboxEmpty` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/listbox or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ListboxEmptyPassThroughType> | Used to pass attributes to the root's DOM element. |

### ListboxFooter

> **`ListboxFooter` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/listbox or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ListboxFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

A value to describe the component can be provided with `aria-labelledby` or `aria-label` props. The list element has a `listbox` role with `aria-multiselectable` set to true when multiple selection is enabled. Each list item has an `option` role with `aria-selected` and `aria-disabled` attributes.

When `metaKeySelection` is enabled, pointer-based multi-selection requires a platform meta key (`Ctrl` on Windows/Linux and `Cmd` on macOS). Keyboard interaction remains available through standard listbox shortcuts.

### Keyboard Support

| Key                       | Function                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------ |
| `tab`                     | Moves focus to the first selected option, if there is none then first option receives the focus. |
| `up arrow`                | Moves focus to the previous option.                                                              |
| `down arrow`              | Moves focus to the next option.                                                                  |
| `enter`                   | Toggles the selected state of the focused option.                                                |
| `space`                   | Toggles the selected state of the focused option.                                                |
| `home`                    | Moves focus to the first option.                                                                 |
| `end`                     | Moves focus to the last option.                                                                  |
| `shift + down arrow`      | Moves focus to the next option and toggles the selection state.                                  |
| `shift + up arrow`        | Moves focus to the previous option and toggles the selection state.                              |
| `shift + space`           | Selects the items between the most recently selected option and the focused option.              |
| `control + shift + home`  | Selects the focused option and all the options up to the first one.                              |
| `control + shift + end`   | Selects the focused option and all the options down to the last one.                             |
| `control + a`             | Selects all options.                                                                             |
| `page up`                 | Jumps visual focus to the first option.                                                          |
| `page down`               | Jumps visual focus to the last option.                                                           |
| `any printable character` | Moves focus to the option whose label starts with the characters being typed.                    |

### Filter Input Keyboard Support

| Key           | Function                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| `down arrow`  | Moves focus to the next option, if there is none then visual focus does not change.                                |
| `up arrow`    | Moves focus to the previous option, if there is none then visual focus does not change.                            |
| `left arrow`  | Removes the visual focus from the current option and moves input cursor to one character left.                     |
| `right arrow` | Removes the visual focus from the current option and moves input cursor to one character right.                    |
| `home`        | Moves input cursor at the beginning, if not then moves focus to the first option.                                  |
| `end`         | Moves input cursor at the end, if not then moves focus to the last option.                                         |
| `tab`         | Moves focus to the next focusable element in the component. If there is none, moves focus to next element in page. |
