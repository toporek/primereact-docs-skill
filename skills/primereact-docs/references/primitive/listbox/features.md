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

**Pass Through example:**

```tsx
import { Listbox } from '@primereact/ui/listbox';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function ListboxPTDemo() {
    return (
        <div className="flex justify-center">
            <Listbox.Root options={cities} optionLabel="name" className="w-full md:w-56">
                <Listbox.List />
            </Listbox.Root>
        </div>
    );
}
```

## API

### ListboxRoot

> **API/props table for `ListboxRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ListboxRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ListboxList

> **API/props table for `ListboxList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ListboxList` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ListboxOption

> **API/props table for `ListboxOption` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                   |
| ----------------- | ----------------------- |
| `data-selected`   | Present when selected   |
| `data-unselected` | Present when unselected |
| `data-focused`    | Present when focused    |
| `data-disabled`   | Present when disabled   |

> **API/props table for `ListboxOption` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ListboxOptionIndicator

> **API/props table for `ListboxOptionIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                   |
| ----------------- | ----------------------- |
| `data-selected`   | Present when selected   |
| `data-unselected` | Present when unselected |

> **API/props table for `ListboxOptionIndicator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ListboxHeader

> **API/props table for `ListboxHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ListboxHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ListboxFilter

> **API/props table for `ListboxFilter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ListboxFilter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ListboxEmpty

> **API/props table for `ListboxEmpty` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ListboxEmpty` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ListboxFooter

> **API/props table for `ListboxFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ListboxFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
