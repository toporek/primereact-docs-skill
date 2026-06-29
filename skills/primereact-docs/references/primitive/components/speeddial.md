# SpeedDial

An unstyled, accessible speed dial component with compound composition.

Build fully custom floating action menus with complete control over layout and styling.

```tsx
'use client';
import { Pencil } from '@primeicons/react/pencil';
import { Plus } from '@primeicons/react/plus';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { SpeedDial } from 'primereact/speeddial';
import styles from './basic-demo.module.css';

const items = [
    { icon: Pencil, label: 'Edit' },
    { icon: Refresh, label: 'Refresh' },
    { icon: Trash, label: 'Delete' },
    { icon: Upload, label: 'Upload' }
];

export default function BasicDemo() {
    return (
        <div className={styles.container}>
            <SpeedDial.Root direction="up" className={styles.root}>
                <SpeedDial.Trigger className={styles.trigger}>
                    <Plus />
                </SpeedDial.Trigger>
                <SpeedDial.List className={styles.list}>
                    {items.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <SpeedDial.Item key={item.label} index={index} className={styles.item}>
                                <SpeedDial.Action className={styles.action} aria-label={item.label}>
                                    <Icon />
                                </SpeedDial.Action>
                            </SpeedDial.Item>
                        );
                    })}
                </SpeedDial.List>
            </SpeedDial.Root>
        </div>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `Trigger`, `List`, `Item`, `Action`
- Four layout types: linear, circle, semi-circle, quarter-circle
- Eight direction options for linear and radial positioning
- Configurable staggered transition delay per item
- Auto-close on outside click

## Usage

```tsx
import { SpeedDial } from 'primereact/speeddial';
```

```tsx
<SpeedDial.Root>
    <SpeedDial.Trigger></SpeedDial.Trigger>
    <SpeedDial.List>
        <SpeedDial.Item index={0}>
            <SpeedDial.Action></SpeedDial.Action>
        </SpeedDial.Item>
    </SpeedDial.List>
</SpeedDial.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<SpeedDial.Root as="nav">
    <SpeedDial.Trigger as="div">...</SpeedDial.Trigger>
    <SpeedDial.List as="div">
        <SpeedDial.Item as="div" index={0}>
            <SpeedDial.Action as="a" href="/edit">
                ...
            </SpeedDial.Action>
        </SpeedDial.Item>
    </SpeedDial.List>
</SpeedDial.Root>
```

Default elements: `Root`=`div`, `Trigger`=`button`, `List`=`ul`, `Item`=`li`, `Action`=`button`.

### Render Function Children

`Item` accepts a render function as children, providing access to the component instance.

```tsx
<SpeedDial.Item index={0}>{(instance) => <button>{instance.speeddial?.state.visible ? 'Open' : 'Closed'}</button>}</SpeedDial.Item>
```

## Pass Through

## API

### SpeedDialRoot

> **API/props table for `SpeedDialRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"speeddial"` |
| `data-part`  | `"root"`      |

| Label | Type | Description |
|:------|:------|:------|
| root | SpeedDialRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| trigger | SpeedDialRootPassThroughType> | Used to pass attributes to the trigger's DOM element. |
| list | SpeedDialRootPassThroughType> | Used to pass attributes to the list's DOM element. |
| item | SpeedDialRootPassThroughType> | Used to pass attributes to the item's DOM element. |
| action | SpeedDialRootPassThroughType> | Used to pass attributes to the action's DOM element. |

### SpeedDialTrigger

> **API/props table for `SpeedDialTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                       |
| ------------- | --------------------------- |
| `data-scope`  | `"speeddial"`               |
| `data-part`   | `"trigger"`                 |
| `data-open`   | Present when menu is open   |
| `data-closed` | Present when menu is closed |

| Label | Type | Description |
|:------|:------|:------|
| root | SpeedDialTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### SpeedDialList

> **API/props table for `SpeedDialList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"speeddial"` |
| `data-part`  | `"list"`      |

| Label | Type | Description |
|:------|:------|:------|
| root | SpeedDialListPassThroughType> | Used to pass attributes to the root's DOM element. |

### SpeedDialItem

> **API/props table for `SpeedDialItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                        |
| ------------- | ---------------------------- |
| `data-scope`  | `"speeddial"`                |
| `data-part`   | `"item"`                     |
| `data-active` | Present when item is focused |

| Label | Type | Description |
|:------|:------|:------|
| root | SpeedDialItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### SpeedDialAction

> **API/props table for `SpeedDialAction` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"speeddial"` |
| `data-part`  | `"action"`    |

| Label | Type | Description |
|:------|:------|:------|
| root | SpeedDialActionPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

The trigger button includes `aria-haspopup`, `aria-expanded`, and `aria-controls` to define the relationship between the button and the popup menu. The popup list uses `role="menu"` and each action has `role="menuitem"`. Use `aria-label` on each `Action` to provide an accessible name.

### Menu Button Keyboard Support

| Key           | Function                                          |
| ------------- | ------------------------------------------------- |
| `enter`       | Toggles the visibility of the menu.               |
| `space`       | Toggles the visibility of the menu.               |
| `down arrow`  | Opens the menu and moves focus to the first item. |
| `up arrow`    | Opens the menu and moves focus to the last item.  |
| `right arrow` | Opens the menu and moves focus to the last item.  |
| `left arrow`  | Opens the menu and moves focus to the first item. |
| `escape`      | Closes the menu.                                  |

### Menu Keyboard Support

| Key          | Function                                                                   |
| ------------ | -------------------------------------------------------------------------- |
| `enter`      | Activates the menuitem, closes the menu and sets focus on the menu button. |
| `space`      | Activates the menuitem, closes the menu and sets focus on the menu button. |
| `escape`     | Closes the menu and sets focus on the menu button.                         |
| `arrow keys` | Navigates between the menu items.                                          |
| `home`       | Moves focus to the first item.                                             |
| `end`        | Moves focus to the last item.                                              |
