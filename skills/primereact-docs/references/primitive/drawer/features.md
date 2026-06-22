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
- Dismissable [Backdrop](https://v11.primereact.org/docs/primitive/backdrop) with click-outside detection
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

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

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

**Pass Through example:**

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import { Drawer } from '@primereact/ui/drawer';

export default function DrawerPTDemo() {
    return (
        <div className="flex flex-wrap flex-col justify-center">
            <Drawer.Root />
            <Button className="hidden" />
            <button
                data-scope="drawer"
                data-part="trigger"
                id="pr_id__r_1s_"
                className="p-button p-component p-button-outlined p-drawer-trigger-button"
                type="button"
                aria-expanded="false"
                aria-controls="pr_id__r_1k_"
                data-slot="root"
                data-id="pc__r_1p_"
                data-extend="button"
            >
                Trigger
            </button>
            <div className="p-drawer translate-[unset]! inset-[unset]! relative! w-[300px]">
                <div id="pr_id__r_41__header" data-scope="drawer" data-part="header" className="p-drawer-header" data-slot="root" data-id="pc__r_60_">
                    <div className="p-drawer-title" data-scope="drawer" data-slot="root" data-part="title" data-id="pc__r_62_">
                        Drawer Title
                    </div>
                    <button
                        data-scope="drawer"
                        data-part="close"
                        id="pr_id__r_67_"
                        className="p-button p-component p-button-icon-only p-button-rounded p-button-text p-drawer-close-button"
                        type="button"
                        data-slot="root"
                        data-id="pc__r_64_"
                        data-extend="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            aria-hidden="true"
                            className="p-icon p-icon-times"
                        >
                            <path
                                d="M14.4199 4.51962C14.7128 4.22696 15.1876 4.22685 15.4805 4.51962C15.7731 4.81246 15.7731 5.28732 15.4805 5.58016L11.0606 10L15.4805 14.4199C15.773 14.7129 15.7732 15.1877 15.4805 15.4805C15.1877 15.7732 14.7128 15.773 14.4199 15.4805L10 11.0606L5.58014 15.4805C5.2873 15.7731 4.81245 15.7731 4.5196 15.4805C4.22682 15.1876 4.22692 14.7128 4.5196 14.4199L8.93949 10L4.5196 5.58016C4.22676 5.28727 4.22673 4.8125 4.5196 4.51962C4.81248 4.22677 5.28726 4.22678 5.58014 4.51962L10 8.93951L14.4199 4.51962Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="p-drawer-content" data-scope="drawer" data-slot="root" data-part="content" data-id="pc__r_6c_">
                    <p className="mt-0 mb-1 text-sm">
                        Component-driven development is an approach that focuses on building loosely coupled, independent components that can be
                        composed together to build complex user interfaces. This methodology promotes reusability, testability, and maintainability.
                    </p>
                </div>
                <div className="p-drawer-footer text-sm" data-scope="drawer" data-slot="root" data-part="footer" data-id="pc__r_91_">
                    Drawer Footer
                </div>
            </div>
        </div>
    );
}
```

## API

### DrawerRoot

> **API/props table for `DrawerRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                                                      |
| --------------- | ---------------------------------------------------------- |
| `data-open`     | Present when the drawer is open                            |
| `data-closed`   | Present when the drawer is closed                          |
| `data-position` | `"left"` \| `"right"` \| `"top"` \| `"bottom"` \| `"full"` |

> **API/props table for `DrawerRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DrawerTrigger

> **API/props table for `DrawerTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DrawerTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DrawerPortal

> **API/props table for `DrawerPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DrawerPortal` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DrawerBackdrop

> **API/props table for `DrawerBackdrop` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

Uses the [Backdrop](https://v11.primereact.org/docs/primitive/backdrop) component internally for animated overlay rendering.

> **API/props table for `DrawerBackdrop` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DrawerPopup

> **API/props table for `DrawerPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                                                      |
| --------------- | ---------------------------------------------------------- |
| `data-open`     | Present when the drawer is open                            |
| `data-position` | `"left"` \| `"right"` \| `"top"` \| `"bottom"` \| `"full"` |

Uses [VisuallyHidden](../visuallyhidden/features.md) elements internally for focus trap boundaries.

> **API/props table for `DrawerPopup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DrawerHeader

> **API/props table for `DrawerHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DrawerHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DrawerTitle

> **API/props table for `DrawerTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DrawerTitle` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DrawerClose

> **API/props table for `DrawerClose` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DrawerClose` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DrawerContent

> **API/props table for `DrawerContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DrawerContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DrawerFooter

> **API/props table for `DrawerFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DrawerFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
