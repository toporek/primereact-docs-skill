# Tabs

An unstyled tab component with keyboard navigation and scrollable overflow support.

Build fully custom tabbed interfaces with complete control over layout and styling.

```tsx
'use client';
import { Tabs } from 'primereact/tabs';
import styles from './basic-demo.module.css';

const items = [
    { value: 'tab1', title: 'Account Info', content: 'Update your personal information such as name, email address, and profile picture.' },
    { value: 'tab2', title: 'Payment', content: 'Manage your subscription plan, view invoices, and update your payment method.' },
    { value: 'tab3', title: 'Preferences', content: 'Customize how the application looks and behaves to match your personal preferences.' }
];

export default function BasicDemo() {
    return (
        <Tabs.Root defaultValue="tab1" className={styles.root}>
            <Tabs.List className={styles.list}>
                <Tabs.Content className={styles.content}>
                    {items.map((item) => (
                        <Tabs.Tab key={item.value} value={item.value} className={styles.tab}>
                            {item.title}
                        </Tabs.Tab>
                    ))}
                    <Tabs.Indicator className={styles.indicator} />
                </Tabs.Content>
            </Tabs.List>
            <Tabs.Panels className={styles.panels}>
                {items.map((item) => (
                    <Tabs.Panel key={item.value} value={item.value}>
                        <h2 className={styles.panelTitle}>{item.title}</h2>
                        <p className={styles.panelText}>{item.content}</p>
                    </Tabs.Panel>
                ))}
            </Tabs.Panels>
        </Tabs.Root>
    );
}
```

## Features

- Compound component API with sub-components: `Root`, `List`, `Content`, `Tab`, `Indicator`, `Panels`, `Panel`, `Prev`, `Next`
- Automatic keyboard focus cycling across tabs with arrow keys, Home, and End
- Active bar indicator with CSS custom properties for animated positioning
- Built-in scroll navigation with `Prev`/`Next` buttons for overflow tab lists
- Configurable scroll strategy: nearest, center, disabled, or custom function

## Usage

```tsx
import { Tabs } from 'primereact/tabs';
```

```tsx
<Tabs.Root defaultValue="tab1">
    <Tabs.List>
        <Tabs.Prev></Tabs.Prev>
        <Tabs.Content>
            <Tabs.Tab value="tab1"></Tabs.Tab>
            <Tabs.Indicator />
        </Tabs.Content>
        <Tabs.Next></Tabs.Next>
    </Tabs.List>
    <Tabs.Panels>
        <Tabs.Panel value="tab1"></Tabs.Panel>
    </Tabs.Panels>
</Tabs.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Tabs.Root as="section">
    <Tabs.List as="nav">...</Tabs.List>
</Tabs.Root>
```

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Tabs.Tab value="tab1">{(instance) => <span className={instance.active ? 'active' : ''}>{instance.props.value}</span>}</Tabs.Tab>
```

## Pass Through

**Pass Through example:**

```tsx
import { Tabs } from '@primereact/ui/tabs';

export default function TabsPTDemo() {
    return (
        <Tabs.Root defaultValue="tab1">
            <Tabs.List>
                <Tabs.Tab value="tab1">Account Info</Tabs.Tab>
                <Tabs.Tab value="tab2">Payment</Tabs.Tab>
                <Tabs.Tab value="tab3">Preferences</Tabs.Tab>
                <Tabs.Indicator />
            </Tabs.List>
            <Tabs.Panels>
                <Tabs.Panel value="tab1">
                    <h2 className="text-lg font-bold">Account Info</h2>
                    <p className="text-surface-500 mt-1">Update your personal information such as name, email address, and profile picture.</p>
                </Tabs.Panel>
                <Tabs.Panel value="tab2">
                    <h2 className="text-lg font-bold">Payment</h2>
                    <p className="text-surface-500 mt-1">Manage your subscription plan, view invoices, and update your payment method.</p>
                </Tabs.Panel>
                <Tabs.Panel value="tab3">
                    <h2 className="text-lg font-bold">Preferences</h2>
                    <p className="text-surface-500 mt-1">Customize how the application looks and behaves to match your personal preferences.</p>
                </Tabs.Panel>
            </Tabs.Panels>
        </Tabs.Root>
    );
}
```

## API

### TabsRoot

> **API/props table for `TabsRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `TabsRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TabsList

> **API/props table for `TabsList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `TabsList` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TabsContent

> **API/props table for `TabsContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `TabsContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TabsTab

> **API/props table for `TabsTab` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-active`   | Present when active   |
| `data-disabled` | Present when disabled |

> **API/props table for `TabsTab` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TabsIndicator

> **API/props table for `TabsIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

**CSS Custom Properties**

The indicator element exposes CSS custom properties for animated positioning relative to the active tab.

| CSS Variable          | Description                        |
| --------------------- | ---------------------------------- |
| `--active-bar-width`  | Width of the active tab in pixels  |
| `--active-bar-height` | Height of the active tab in pixels |
| `--active-bar-left`   | Left offset of the active tab      |
| `--active-bar-top`    | Top offset of the active tab       |

> **API/props table for `TabsIndicator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TabsPanels

> **API/props table for `TabsPanels` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `TabsPanels` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TabsPanel

> **API/props table for `TabsPanel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value               |
| ------------- | ------------------- |
| `data-active` | Present when active |

> **API/props table for `TabsPanel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TabsPrev

> **API/props table for `TabsPrev` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-disabled` | Present when disabled |

> **API/props table for `TabsPrev` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TabsNext

> **API/props table for `TabsNext` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-disabled` | Present when disabled |

> **API/props table for `TabsNext` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Tabs uses `role="tablist"` on the tab container, `role="tab"` on each tab trigger, and `role="tabpanel"` on each panel. Active tabs set `aria-selected="true"`. Panels are linked to their tabs via `aria-controls` and `aria-labelledby`. Disabled tabs set `aria-disabled="true"`.

### Keyboard Support

| Key           | Function                                          |
| ------------- | ------------------------------------------------- |
| `tab`         | Moves focus into the tab list, then to the panel. |
| `right arrow` | Moves focus to the next tab.                      |
| `left arrow`  | Moves focus to the previous tab.                  |
| `home`        | Moves focus to the first tab.                     |
| `end`         | Moves focus to the last tab.                      |
| `enter`       | Activates the focused tab.                        |
| `space`       | Activates the focused tab.                        |
