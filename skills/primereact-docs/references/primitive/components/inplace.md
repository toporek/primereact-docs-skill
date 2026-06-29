# Inplace

An unstyled, accessible inline editing component with compound composition.

Build fully custom inline display-to-edit experiences with complete control over layout and styling.

```tsx
'use client';
import { Pencil } from '@primeicons/react/pencil';
import { Times } from '@primeicons/react/times';
import { Inplace } from 'primereact/inplace';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Inplace.Root>
                <Inplace.Display className={styles.display}>
                    <Pencil className={styles.icon} />
                    <span>Click to edit</span>
                </Inplace.Display>
                <Inplace.Content className={styles.content}>
                    <input type="text" defaultValue="PrimeReact" className={styles.input} autoFocus />
                    <Inplace.Close as="button" className={styles.close}>
                        <Times className={styles.icon} />
                    </Inplace.Close>
                </Inplace.Content>
            </Inplace.Root>
        </div>
    );
}

```

## Features

- Compound component API with four sub-components: `Root`, `Display`, `Content`, `Close`

## Usage

```tsx
import { Inplace } from 'primereact/inplace';
```

```tsx
<Inplace.Root>
    <Inplace.Display></Inplace.Display>
    <Inplace.Content>
        <input />
        <Inplace.Close></Inplace.Close>
    </Inplace.Content>
</Inplace.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Inplace.Close as="button">Done</Inplace.Close>
```

Default elements: `Root`=`div`, `Display`=`div`, `Content`=`div`, `Close`=`div`.

### Render Function Children

`Content` accepts a render function as children, providing access to the component instance.

```tsx
<Inplace.Content>{(instance) => <span>Active: {String(instance.inplace?.state.active)}</span>}</Inplace.Content>
```

## Pass Through

## API

### InplaceRoot

> **API/props table for `InplaceRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"inplace"`           |
| `data-part`     | `"root"`              |
| `data-active`   | Present when active   |
| `data-inactive` | Present when inactive |
| `data-disabled` | Present when disabled |

| Label | Type | Description |
|:------|:------|:------|
| root | InplaceRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| content | InplaceRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| display | InplaceRootPassThroughType> | Used to pass attributes to the display's DOM element. |
| close | InplaceRootPassThroughType> | Used to pass attributes to the close's DOM element. |

### InplaceDisplay

> **API/props table for `InplaceDisplay` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"inplace"`           |
| `data-part`     | `"display"`           |
| `data-active`   | Present when active   |
| `data-inactive` | Present when inactive |
| `data-disabled` | Present when disabled |

| Label | Type | Description |
|:------|:------|:------|
| root | InplaceDisplayPassThroughType> | Used to pass attributes to the root's DOM element. |

### InplaceContent

> **API/props table for `InplaceContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | InplaceContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### InplaceClose

> **API/props table for `InplaceClose` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"inplace"`           |
| `data-part`     | `"close"`             |
| `data-active`   | Present when active   |
| `data-inactive` | Present when inactive |
| `data-disabled` | Present when disabled |

| Label | Type | Description |
|:------|:------|:------|
| root | InplaceClosePassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Inplace uses `aria-live="polite"` by default so screen readers announce content changes. The display element has `tabIndex={0}` for keyboard focus.

### Keyboard Support

| Key     | Function                                    |
| ------- | ------------------------------------------- |
| `enter` | Activates the display, showing the content. |
| `space` | Activates the display, showing the content. |
