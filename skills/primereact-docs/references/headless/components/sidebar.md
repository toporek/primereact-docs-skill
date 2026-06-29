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

```tsx
const layout = useSidebarLayout({});
const sidebar = useSidebar({ id: 'nav', layout, collapsible: 'icon' });

return <aside {...sidebar.rootProps}>...</aside>;
```

The sidebar family splits concerns across three hooks: `useSidebar` drives a single sidebar's open/collapse state, `useSidebarLayout` coordinates multiple sidebars and the shared backdrop, and `useSidebarMenuItem` manages expandable submenus inside the sidebar. See [Primitive](../../primitive/components/sidebar.md) for a component-based API.

## Features

- **Open/collapse lifecycle**, controlled or uncontrolled open state with icon, offcanvas, or non-collapsible modes
- **Layout coordination**, `useSidebarLayout` registers multiple sidebars, exposes a shared backdrop, and drives cross-sidebar toggles
- **Hover-to-open**, optional pointer-enter expansion with configurable open/close delays
- **Positional variants**, `left`/`right` placement plus `sidebar`, `floating`, and `inset` visual variants
- **Collapsible menu items**, `useSidebarMenuItem` exposes expandable submenu state with spread-ready trigger and content props
- **Data-driven styling**, `data-state`, `data-variant`, `data-collapsible`, `data-side`, and `data-overlay` attributes make CSS targeting declarative

## Working with callbacks

### Composing layout with sidebars

Create a layout once and pass it to each sidebar that should coordinate backdrop, toggles, and registration.

```tsx
const layout = useSidebarLayout({});

const left = useSidebar({ id: 'nav', layout, side: 'left' });
const right = useSidebar({ id: 'details', layout, side: 'right' });

<li>
    <button {...triggerProps}>Menu Item</button>
    {state.open && <ul {...contentProps}>...</ul>}
</li>;
```

### Controlled open state

Drive the sidebar from external state by pairing `open` with `onOpenChange`.

```tsx
const [open, setOpen] = React.useState(true);

const sidebar = useSidebar({
    open,
    onOpenChange: (e) => setOpen(e.value)
});
```

### Opening on hover

Enable `openOnHover` for icon-collapsed sidebars that should reveal on pointer enter. Tune the timing with `hoverOpenDelay` and `hoverCloseDelay` to reduce flicker.

```tsx
const sidebar = useSidebar({
    collapsible: 'icon',
    openOnHover: true,
    hoverOpenDelay: 100,
    hoverCloseDelay: 200
});
```

### Triggering sidebars from elsewhere

Use the layout's imperative helpers to toggle or collapse sidebars from buttons outside the aside, for example a header toggle.

```tsx
<button onClick={() => layout.toggle('nav')}>Toggle nav</button>
<button onClick={() => layout.collapse()}>Collapse all</button>
```

### Collapsible menu items

`useSidebarMenuItem` returns `triggerProps` and `contentProps` for expandable groups. Render the content conditionally from `state.open`.

```tsx
const { state, triggerProps, contentProps } = useSidebarMenuItem({
    collapsible: true,
    defaultOpen: false
});
```

## Styling with data attributes

`rootProps` from `useSidebar` expose state through `data-*` attributes so CSS can react without className juggling.

| Attribute               | Values                                           |
| ----------------------- | ------------------------------------------------ |
| `data-state`            | `expanded` \| `collapsed`                        |
| `data-variant`          | `sidebar` \| `floating` \| `inset`               |
| `data-collapsible`      | `offcanvas` \| `icon` \| (empty when expanded)   |
| `data-collapsible-mode` | `offcanvas` \| `icon` \| `none` (always present) |
| `data-side`             | `left` \| `right`                                |
| `data-overlay`          | present when overlay is true                     |

```css
[data-scope='sidebar'][data-state='collapsed'][data-collapsible='icon'] {
    width: 3rem;
}

[data-scope='sidebar'][data-side='right'] {
    border-left: 1px solid var(--p-content-border-color);
}
```

## API

### useSidebar

> **`useSidebar` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/sidebar or the installed `@primereact/types`.

### useSidebarLayout

> **`useSidebarLayout` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/sidebar or the installed `@primereact/types`.

### useSidebarMenuItem

> **`useSidebarMenuItem` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/sidebar or the installed `@primereact/types`.

## Accessibility

Arrow keys navigate items, Enter activates links, and Right/Left expand or collapse nested groups. See [Primitive](../../primitive/components/sidebar.md#accessibility) for full WAI-ARIA compliance details.
