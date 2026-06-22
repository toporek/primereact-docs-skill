# Collapsible

An unstyled collapsible component for building expand/collapse interfaces with full control over layout and styling.

Build fully custom expand/collapse interfaces with complete control over layout and styling.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Collapsible } from 'primereact/collapsible';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Collapsible.Root className={styles.root}>
                <Collapsible.Trigger className={styles.trigger}>
                    What is PrimeReact?
                    <ChevronDown className={styles.icon} />
                </Collapsible.Trigger>
                <Collapsible.Content className={styles.content}>
                    PrimeReact is a rich set of open source UI components for React. It provides a wide range of components like buttons, dialogs,
                    tables, and more to help you build modern web applications.
                </Collapsible.Content>
            </Collapsible.Root>
        </div>
    );
}
```

## Features

- Compound component API with sub-components: `Root`, `Trigger`, `Content`
- Controlled and uncontrolled open state management
- Imperative `toggle`, `open`, and `close` methods
- Callback props: `onOpen`, `onClose`, `onOpenChange`

## Usage

```tsx
import { Collapsible } from 'primereact/collapsible';
```

```tsx
<Collapsible.Root>
    <Collapsible.Trigger></Collapsible.Trigger>
    <Collapsible.Content></Collapsible.Content>
</Collapsible.Root>
```

## Behavior

### Motion Animation

Pass `motionProps` to `Root` to animate the content element.

```tsx
<Collapsible.Root motionProps={{ transition: { duration: 200 } }}>
    <Collapsible.Trigger></Collapsible.Trigger>
    <Collapsible.Content></Collapsible.Content>
</Collapsible.Root>
```

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Collapsible.Root as="section"></Collapsible.Root>
<Collapsible.Trigger as="div"></Collapsible.Trigger>
```

Default elements: `Root`=`div`, `Trigger`=`button`, `Content`=`div`.

### Render Function Children

`Root` accepts a render function as children, providing access to the component instance.

```tsx
<Collapsible.Root>{(instance) => <span>{instance.state.open ? 'Open' : 'Closed'}</span>}</Collapsible.Root>
```

## API

### CollapsibleRoot

> **API/props table for `CollapsibleRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"collapsible"`       |
| `data-part`     | `"root"`              |
| `data-open`     | Present when open     |
| `data-closed`   | Present when closed   |
| `data-disabled` | Present when disabled |

### CollapsibleTrigger

> **API/props table for `CollapsibleTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute             | Value                       |
| --------------------- | --------------------------- |
| `data-scope`          | `"collapsible"`             |
| `data-part`           | `"trigger"`                 |
| `data-content-open`   | Present when content open   |
| `data-content-closed` | Present when content closed |

### CollapsibleContent

> **API/props table for `CollapsibleContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value               |
| ------------- | ------------------- |
| `data-scope`  | `"collapsible"`     |
| `data-part`   | `"content"`         |
| `data-open`   | Present when open   |
| `data-closed` | Present when closed |

## Accessibility

### Screen Reader

The trigger has `aria-expanded` reflecting the open state and `aria-controls` referencing the content element's `id`. The content has `role="region"` and `aria-hidden` when collapsed.

### Keyboard Support

| Key     | Function                                        |
| ------- | ----------------------------------------------- |
| `tab`   | Moves focus to the trigger element.             |
| `enter` | Toggles the collapsible content open or closed. |
| `space` | Toggles the collapsible content open or closed. |
