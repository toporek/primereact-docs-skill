# Chip

An unstyled chip component with compound composition for representing entities.

Build fully custom chip elements with complete control over layout and styling.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Chip } from 'primereact/chip';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Chip.Root className={styles.chip}>
                <Chip.Label>Apple</Chip.Label>
            </Chip.Root>
            <Chip.Root className={styles.chip}>
                <Chip.Start>
                    <img src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" alt="Ioni" className={styles.avatar} />
                </Chip.Start>
                <Chip.Label>Ioni Bowcher</Chip.Label>
            </Chip.Root>
            <Chip.Root className={styles.chip}>
                <Chip.Label>Removable</Chip.Label>
                <Chip.Remove className={styles.remove}>
                    <Times className="w-3 h-3" />
                </Chip.Remove>
            </Chip.Root>
        </div>
    );
}

```

## Features

- Compound component API with five sub-components: `Root`, `Start`, `Label`, `End`, `Remove`
- Built-in visibility state, chip hides itself when removed
- `onRemove` callback for reacting to dismissal events
- `Remove` sub-component with keyboard support (Enter, Backspace)

## Usage

```tsx
import { Chip } from 'primereact/chip';
```

```tsx
<Chip.Root>
    <Chip.Start />
    <Chip.Label />
    <Chip.End>
        <Chip.Remove />
    </Chip.End>
</Chip.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Chip.Root as="span">
    <Chip.Label as="span">Tag</Chip.Label>
</Chip.Root>
```

Default elements: `Root`=`div`, `Start`=`div`, `Label`=`div`, `End`=`div`, `Remove`=`span`.

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Chip.Label>{(instance) => <span>{instance.chip?.state.visible ? 'Visible' : 'Hidden'}</span>}</Chip.Label>
```

## Pass Through

## API

### ChipRoot

> **API/props table for `ChipRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value  |
| ------------ | ------ |
| `data-scope` | `chip` |
| `data-part`  | `root` |

| Label | Type | Description |
|:------|:------|:------|
| root | ChipRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| label | ChipRootPassThroughType> | Used to pass attributes to the label's DOM element. |
| remove | ChipRootPassThroughType> | Used to pass attributes to the remove's DOM element. |
| start | ChipRootPassThroughType> | Used to pass attributes to the start's DOM element. |
| end | ChipRootPassThroughType> | Used to pass attributes to the end's DOM element. |

### ChipStart

> **API/props table for `ChipStart` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | ChipStartPassThroughType> | Used to pass attributes to the root's DOM element. |

### ChipLabel

> **API/props table for `ChipLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | ChipLabelPassThroughType> | Used to pass attributes to the root's DOM element. |

### ChipEnd

> **API/props table for `ChipEnd` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | ChipEndPassThroughType> | Used to pass attributes to the root's DOM element. |

### ChipRemove

> **API/props table for `ChipRemove` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | ChipRemovePassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Chip uses its label content as the default accessible name. Provide `aria-label` or `aria-labelledby` on `Chip.Root` to override. Removable chips have a focusable remove element with `tabIndex="0"`.

### Keyboard Support

| Key         | Function             |
| ----------- | -------------------- |
| `enter`     | Hides removable chip |
| `backspace` | Hides removable chip |
