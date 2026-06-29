# Drawer

An unstyled slide-in panel component with built-in focus trap, scroll lock, and dismissable backdrop.

Build fully custom slide-in panels with complete control over layout and styling.

```tsx
'use client';
import { Bars } from '@primeicons/react/bars';
import { Times } from '@primeicons/react/times';
import { Drawer } from 'primereact/drawer';
import styles from './basic-demo.module.css';

const navItems = [
    { icon: 'pi pi-objects-column', label: 'Dashboard' },
    { icon: 'pi pi-inbox', label: 'Inbox' },
    { icon: 'pi pi-calendar', label: 'Calendar' },
    { icon: 'pi pi-chart-bar', label: 'Analytics' }
];

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Drawer.Root>
                <Drawer.Trigger className={styles.trigger}>
                    <Bars />
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Backdrop className={styles.backdrop} />
                    <Drawer.Popup className={styles.popup}>
                        <Drawer.Header className={styles.header}>
                            <Drawer.Title className={styles.title}>Navigation</Drawer.Title>
                            <Drawer.Close className={styles.close}>
                                <Times />
                            </Drawer.Close>
                        </Drawer.Header>
                        <Drawer.Content className={styles.content}>
                            <nav>
                                <ul className={styles.navList}>
                                    {navItems.map((item) => (
                                        <li key={item.label}>
                                            <a className={styles.navItem}>
                                                <i className={item.icon} />
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </Drawer.Content>
                    </Drawer.Popup>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `Trigger`, `Portal`, `Backdrop`, `Popup`, `Header`, `Title`, `Close`, `Content`, `Footer`
- Five position modes: `left`, `right`, `top`, `bottom`, `full`
- Integrated focus trap with automatic focus management on open and close
- Dismissable [Backdrop](https://primereact.dev/docs/primitive/components/backdrop) with click-outside detection
- Scroll lock support via `blockScroll`

## Usage

```tsx
import { Drawer } from 'primereact/drawer';
```

```tsx
<Drawer.Root>
    <Drawer.Trigger></Drawer.Trigger>
    <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Popup>
            <Drawer.Header>
                <Drawer.Title></Drawer.Title>
                <Drawer.Close></Drawer.Close>
            </Drawer.Header>
            <Drawer.Content></Drawer.Content>
            <Drawer.Footer></Drawer.Footer>
        </Drawer.Popup>
    </Drawer.Portal>
</Drawer.Root>
```

## Behavior

### Motion Animation

```tsx
<Drawer.Popup motionProps={{ name: 'p-drawer', appear: true }}>...</Drawer.Popup>
```

See [Motion](motion.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Drawer.Trigger as="div">...</Drawer.Trigger>
```

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Drawer.Content>{(instance) => <div>{instance.drawer?.state.open ? 'Open' : 'Closed'}</div>}</Drawer.Content>
```

## Pass Through

## API

### DrawerRoot

> **API/props table for `DrawerRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                                                      |
| --------------- | ---------------------------------------------------------- |
| `data-open`     | Present when the drawer is open                            |
| `data-closed`   | Present when the drawer is closed                          |
| `data-position` | `"left"` \| `"right"` \| `"top"` \| `"bottom"` \| `"full"` |

| Label | Type | Description |
|:------|:------|:------|
| root | DrawerRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| backdrop | DrawerRootPassThroughType> | Used to pass attributes to the backdrop's DOM element. |
| trigger | DrawerRootPassThroughType> | Used to pass attributes to the trigger's DOM element. |
| header | DrawerRootPassThroughType> | Used to pass attributes to the header's DOM element. |
| title | DrawerRootPassThroughType> | Used to pass attributes to the title's DOM element. |
| close | DrawerRootPassThroughType> | Used to pass attributes to the close's DOM element. |
| content | DrawerRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| footer | DrawerRootPassThroughType> | Used to pass attributes to the footer's DOM element. |

### DrawerTrigger

> **API/props table for `DrawerTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DrawerTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### DrawerPortal

> **API/props table for `DrawerPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DrawerPortalPassThroughType> | Used to pass attributes to the root's DOM element. |

### DrawerBackdrop

> **API/props table for `DrawerBackdrop` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

Uses the [Backdrop](https://primereact.dev/docs/primitive/components/backdrop) component internally for animated overlay rendering.

| Label | Type | Description |
|:------|:------|:------|
| root | DrawerBackdropPassThroughType> | Used to pass attributes to the root's DOM element. |

### DrawerPopup

> **API/props table for `DrawerPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                                                      |
| --------------- | ---------------------------------------------------------- |
| `data-open`     | Present when the drawer is open                            |
| `data-position` | `"left"` \| `"right"` \| `"top"` \| `"bottom"` \| `"full"` |

Uses [VisuallyHidden](visuallyhidden.md) elements internally for focus trap boundaries.

| Label | Type | Description |
|:------|:------|:------|
| root | DrawerPopupPassThroughType> | Used to pass attributes to the root's DOM element. |

### DrawerHeader

> **API/props table for `DrawerHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DrawerHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### DrawerTitle

> **API/props table for `DrawerTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DrawerTitlePassThroughType> | Used to pass attributes to the root's DOM element. |

### DrawerClose

> **API/props table for `DrawerClose` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DrawerClosePassThroughType> | Used to pass attributes to the root's DOM element. |

### DrawerContent

> **API/props table for `DrawerContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DrawerContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### DrawerFooter

> **API/props table for `DrawerFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DrawerFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Drawer component uses `complementary` role by default, since any attribute is passed to the root element aria role can be changed depending on the use case and additional attributes like `aria-labelledby` can be added. In addition `aria-modal` is added since focus is kept within the drawer when opened.

Trigger element also has `aria-expanded` and `aria-controls` to indicate the drawer state.

### Overlay Keyboard Support

| Key           | Function                                                             |
| ------------- | -------------------------------------------------------------------- |
| `tab`         | Moves focus to the next the focusable element within the drawer.     |
| `shift + tab` | Moves focus to the previous the focusable element within the drawer. |
| `escape`      | Closes the drawer.                                                   |

### Close Button Keyboard Support

| Key     | Function           |
| ------- | ------------------ |
| `enter` | Closes the drawer. |
| `space` | Closes the drawer. |
