# useSidebar

Headless hooks for managing sidebar state, collapse behavior, layout coordination, and collapsible menu items.

```tsx
'use client';
import { Bell, ChartBar, ChevronDown, Folder, Home, Inbox, Search, Users } from '@primeicons/react';
import { useSidebar, useSidebarLayout, useSidebarMenuItem } from '@primereact/headless/sidebar';
import * as React from 'react';
import styles from './basic-demo.module.css';

const navItems = [
    { icon: Home, label: 'Home', isActive: true },
    { icon: Inbox, label: 'Inbox' },
    { icon: Search, label: 'Search' },
    { icon: Bell, label: 'Notifications' }
];

const projectItems = [
    { icon: ChartBar, label: 'Analytics', subItems: [{ label: 'Overview', isActive: true }, { label: 'Reports' }] },
    { icon: Users, label: 'Team' },
    { icon: Folder, label: 'Documents', subItems: [{ label: 'Shared' }, { label: 'Private' }] }
];

function CollapsibleMenuItem({
    icon: Icon,
    label,
    subItems,
    isOpen
}: {
    icon: React.FC<any>;
    label: string;
    subItems: { label: string; isActive?: boolean }[];
    isOpen: boolean;
}) {
    const { state: itemState, triggerProps, contentProps } = useSidebarMenuItem({ collapsible: true, defaultOpen: isOpen });

    return (
        <li className={styles.menuItem}>
            <button {...triggerProps} className={styles.menuButton}>
                <Icon />
                <span>{label}</span>
                <ChevronDown className={`${styles.chevron} ${itemState.open ? styles.chevronOpen : ''}`} />
            </button>
            {itemState.open && (
                <ul {...contentProps} className={styles.subMenu}>
                    {subItems.map((sub) => (
                        <li key={sub.label}>
                            <button className={styles.subMenuButton} data-active={sub.isActive || undefined}>
                                <span>{sub.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}

function SidebarContent({ layout }: { layout: any }) {
    const { rootProps, state, toggle } = useSidebar({ id: 'main', layout, defaultOpen: true, collapsible: 'icon' });

    return (
        <>
            <aside {...rootProps} className={styles.sidebar} data-state={state.displayState}>
                <div className={styles.header}>
                    <div className={styles.logo}>A</div>
                    {state.open && <span className={styles.logoText}>Acme Inc</span>}
                </div>
                <nav className={styles.content}>
                    <div className={styles.group}>
                        {state.open && <div className={styles.groupLabel}>Navigation</div>}
                        <ul className={styles.menu}>
                            {navItems.map((item) => (
                                <li key={item.label} className={styles.menuItem}>
                                    <button className={styles.menuButton} data-active={item.isActive || undefined}>
                                        <item.icon />
                                        {state.open && <span>{item.label}</span>}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.group}>
                        {state.open && <div className={styles.groupLabel}>Projects</div>}
                        <ul className={styles.menu}>
                            {projectItems.map((item) =>
                                item.subItems && state.open ? (
                                    <CollapsibleMenuItem
                                        key={item.label}
                                        icon={item.icon}
                                        label={item.label}
                                        subItems={item.subItems}
                                        isOpen={item.subItems.some((s) => s.isActive)}
                                    />
                                ) : (
                                    <li key={item.label} className={styles.menuItem}>
                                        <button className={styles.menuButton}>
                                            <item.icon />
                                            {state.open && <span>{item.label}</span>}
                                        </button>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </nav>
                <div className={styles.footer}>
                    <button className={styles.menuButton}>
                        <div className={styles.avatar}>JD</div>
                        {state.open && <span>John Doe</span>}
                    </button>
                </div>
            </aside>
            <main className={styles.main}>
                <button onClick={() => toggle()} className={styles.trigger}>
                    {state.open ? 'Collapse' : 'Expand'}
                </button>
                <h2>Dashboard</h2>
                <p>Select an item from the sidebar to get started.</p>
            </main>
        </>
    );
}

export default function BasicDemo() {
    const layout = useSidebarLayout({});

    return (
        <div className={styles.wrapper}>
            <div className={styles.layout}>
                <SidebarContent layout={layout} />
            </div>
        </div>
    );
}
```

## Usage

```tsx
import { useSidebar, useSidebarLayout, useSidebarMenuItem } from '@primereact/headless/sidebar';
```

## useSidebar

Manages a single sidebar's open/collapse state.

```tsx
const { rootProps, state, toggle, expand, collapse } = useSidebar({
    defaultOpen: true,
    collapsible: 'icon'
});

return <aside {...rootProps}>...</aside>;
```

### Props

| Prop              | Type                                 | Default     | Description                               |
| ----------------- | ------------------------------------ | ----------- | ----------------------------------------- |
| `id`              | `string`                             | —           | Unique identifier for layout registration |
| `layout`          | `useSidebarLayoutExposes`            | —           | Layout context for multi-sidebar support  |
| `side`            | `'left' \| 'right'`                  | `'left'`    | Sidebar position                          |
| `variant`         | `'sidebar' \| 'floating' \| 'inset'` | `'sidebar'` | Visual variant                            |
| `collapsible`     | `'icon' \| 'offcanvas' \| 'none'`    | `'icon'`    | Collapse behavior                         |
| `overlay`         | `boolean`                            | `false`     | Overlay content instead of pushing        |
| `open`            | `boolean`                            | —           | Controlled open state                     |
| `defaultOpen`     | `boolean`                            | `true`      | Initial open state                        |
| `onOpenChange`    | `function`                           | —           | Called when open state changes            |
| `openOnHover`     | `boolean`                            | `false`     | Open on pointer enter                     |
| `hoverOpenDelay`  | `number`                             | `50`        | Delay before opening on hover (ms)        |
| `hoverCloseDelay` | `number`                             | `100`       | Delay before closing on hover leave (ms)  |
| `width`           | `string`                             | `'16rem'`   | Expanded width                            |
| `iconWidth`       | `string`                             | `'3rem'`    | Icon-collapsed width                      |

### Data Attributes

The `rootProps` include data attributes for CSS styling:

| Attribute               | Values                                           |
| ----------------------- | ------------------------------------------------ |
| `data-state`            | `expanded` \| `collapsed`                        |
| `data-variant`          | `sidebar` \| `floating` \| `inset`               |
| `data-collapsible`      | `offcanvas` \| `icon` \| (empty when expanded)   |
| `data-collapsible-mode` | `offcanvas` \| `icon` \| `none` (always present) |
| `data-side`             | `left` \| `right`                                |
| `data-overlay`          | present when overlay is true                     |

## useSidebarLayout

Coordinates multiple sidebars, manages backdrop state, and provides toggle/collapse methods.

```tsx
const layout = useSidebarLayout({});

// Pass layout to each sidebar
const sidebar = useSidebar({ id: 'nav', layout, collapsible: 'icon' });
```

### Returns

| Property              | Type                  | Description                                          |
| --------------------- | --------------------- | ---------------------------------------------------- |
| `register`            | `(id, entry) => void` | Register a sidebar                                   |
| `unregister`          | `(id) => void`        | Unregister a sidebar                                 |
| `toggle`              | `(target?) => void`   | Toggle a sidebar by id, or the only sidebar          |
| `collapse`            | `(target?) => void`   | Collapse a sidebar by id, or all open sidebars       |
| `getEntry`            | `(id) => entry`       | Get a sidebar entry by id                            |
| `getEntries`          | `() => Map`           | Get all sidebar entries                              |
| `notifyChange`        | `() => void`          | Notify layout of state change                        |
| `backdropProps`       | `object`              | Props for the backdrop element (onClick, data-state) |
| `backdropMotionProps` | `object`              | Motion props for backdrop (visible, motionProps)     |

## useSidebarMenuItem

Manages collapsible menu item state for expandable submenus.

```tsx
const { state, triggerProps, contentProps } = useSidebarMenuItem({
    collapsible: true,
    defaultOpen: false
});

return (
    <li>
        <button {...triggerProps}>Menu Item</button>
        {state.open && <ul {...contentProps}>...</ul>}
    </li>
);
```

### Props

| Prop           | Type       | Default | Description                    |
| -------------- | ---------- | ------- | ------------------------------ |
| `collapsible`  | `boolean`  | `false` | Enable collapse/expand         |
| `open`         | `boolean`  | —       | Controlled open state          |
| `defaultOpen`  | `boolean`  | `false` | Initial open state             |
| `onOpenChange` | `function` | —       | Called when open state changes |
