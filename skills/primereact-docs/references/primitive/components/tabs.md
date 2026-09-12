# Tabs

An unstyled tab component with keyboard navigation and scrollable overflow support.

Build fully custom tabbed interfaces with complete control over layout and styling.

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

## API

### TabsRoot

> **`TabsRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tabs or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | TabsRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| list | TabsRootPassThroughType> | Used to pass attributes to the list's DOM element. |
| content | TabsRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| tab | TabsRootPassThroughType> | Used to pass attributes to the tab's DOM element. |
| indicator | TabsRootPassThroughType> | Used to pass attributes to the indicator's DOM element. |
| panels | TabsRootPassThroughType> | Used to pass attributes to the panels' DOM element. |
| panel | TabsRootPassThroughType> | Used to pass attributes to the panel's DOM element. |
| prev | TabsRootPassThroughType> | Used to pass attributes to the prev button's DOM element. |
| next | TabsRootPassThroughType> | Used to pass attributes to the next button's DOM element. |

### TabsList

> **`TabsList` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tabs or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | TabsListPassThroughType> | Used to pass attributes to the root's DOM element. |

### TabsContent

> **`TabsContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tabs or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | TabsContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### TabsTab

> **`TabsTab` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tabs or the installed `@primereact/types`.

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-active`   | Present when active   |
| `data-disabled` | Present when disabled |

| Label | Type | Description |
|:------|:------|:------|
| root | TabsTabPassThroughType> | Used to pass attributes to the root's DOM element. |

### TabsIndicator

> **`TabsIndicator` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tabs or the installed `@primereact/types`.

**CSS Custom Properties**

The indicator element exposes CSS custom properties for animated positioning relative to the active tab.

| CSS Variable          | Description                        |
| --------------------- | ---------------------------------- |
| `--active-bar-width`  | Width of the active tab in pixels  |
| `--active-bar-height` | Height of the active tab in pixels |
| `--active-bar-left`   | Left offset of the active tab      |
| `--active-bar-top`    | Top offset of the active tab       |

| Label | Type | Description |
|:------|:------|:------|
| root | TabsIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### TabsPanels

> **`TabsPanels` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tabs or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | TabsPanelsPassThroughType> | Used to pass attributes to the root's DOM element. |

### TabsPanel

> **`TabsPanel` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tabs or the installed `@primereact/types`.

| Attribute     | Value               |
| ------------- | ------------------- |
| `data-active` | Present when active |

| Label | Type | Description |
|:------|:------|:------|
| root | TabsPanelPassThroughType> | Used to pass attributes to the root's DOM element. |

### TabsPrev

> **`TabsPrev` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tabs or the installed `@primereact/types`.

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-disabled` | Present when disabled |

| Label | Type | Description |
|:------|:------|:------|
| root | TabsPrevPassThroughType> | Used to pass attributes to the root's DOM element. |

### TabsNext

> **`TabsNext` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tabs or the installed `@primereact/types`.

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-disabled` | Present when disabled |

| Label | Type | Description |
|:------|:------|:------|
| root | TabsNextPassThroughType> | Used to pass attributes to the root's DOM element. |

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
