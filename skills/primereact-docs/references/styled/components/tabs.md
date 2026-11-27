# Tabs

Tabs is a component that displays a list of tabs and allows the user to select one.

## Usage

```tsx
import { Tabs } from '@primereact/ui/tabs';
```

```tsx
<Tabs.Root>
    <Tabs.List>
        <Tabs.Prev></Tabs.Prev>
        <Tabs.Content>
            <Tabs.Tab></Tabs.Tab>
            <Tabs.Indicator />
        </Tabs.Content>
        <Tabs.Next></Tabs.Next>
    </Tabs.List>
    <Tabs.Panels>
        <Tabs.Panel></Tabs.Panel>
    </Tabs.Panels>
</Tabs.Root>
```

## Examples

### Basic

Organizes content into selectable, horizontally laid out sections.

### Dynamic

Create tabs from an array to keep labels and panel content in sync.

### Controlled

Control the active tab with `value` and `onValueChange`.

### Scrollable

Enable `scrollable` to navigate long tab lists with previous and next buttons.

### Select on Focus

Set `selectOnFocus` to activate tabs on focus.

### Disabled

Set `disabled` on `Tabs.Tab` to prevent selection.

### Custom Indicator

Use `Tabs.Indicator` to customize active tab highlight styles.

### Template

Use custom markup inside `Tabs.Tab` and `Tabs.Panel` to build richer tab content.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/tabs.md#api) for `TabsRoot`, `TabsList`, `TabsTab`, `TabsIndicator`, `TabsPanels`, and `TabsPanel` component documentation.

### Hooks

See [Headless API](../../headless/components/tabs.md#api) for `useTabs` hook documentation.

### Accessibility

See [Tabs Primitive](../../primitive/components/tabs.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

> **`Tabs` API table (`style`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/tabs or the installed `@primereact/types`.

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| tabs.transition.duration | --p-tabs-transition-duration | Transition duration of root |
| tabs.tablist.border.width | --p-tabs-tablist-border-width | Border width of tablist |
| tabs.tablist.background | --p-tabs-tablist-background | Background of tablist |
| tabs.tablist.border.color | --p-tabs-tablist-border-color | Border color of tablist |
| tabs.tab.background | --p-tabs-tab-background | Background of tab |
| tabs.tab.hover.background | --p-tabs-tab-hover-background | Hover background of tab |
| tabs.tab.active.background | --p-tabs-tab-active-background | Active background of tab |
| tabs.tab.border.width | --p-tabs-tab-border-width | Border width of tab |
| tabs.tab.border.color | --p-tabs-tab-border-color | Border color of tab |
| tabs.tab.hover.border.color | --p-tabs-tab-hover-border-color | Hover border color of tab |
| tabs.tab.active.border.color | --p-tabs-tab-active-border-color | Active border color of tab |
| tabs.tab.color | --p-tabs-tab-color | Color of tab |
| tabs.tab.hover.color | --p-tabs-tab-hover-color | Hover color of tab |
| tabs.tab.active.color | --p-tabs-tab-active-color | Active color of tab |
| tabs.tab.padding | --p-tabs-tab-padding | Padding of tab |
| tabs.tab.font.weight | --p-tabs-tab-font-weight | Font weight of tab |
| tabs.tab.font.size | --p-tabs-tab-font-size | Font size of tab |
| tabs.tab.margin | --p-tabs-tab-margin | Margin of tab |
| tabs.tab.gap | --p-tabs-tab-gap | Gap of tab |
| tabs.tab.focus.ring.width | --p-tabs-tab-focus-ring-width | Focus ring width of tab |
| tabs.tab.focus.ring.style | --p-tabs-tab-focus-ring-style | Focus ring style of tab |
| tabs.tab.focus.ring.color | --p-tabs-tab-focus-ring-color | Focus ring color of tab |
| tabs.tab.focus.ring.offset | --p-tabs-tab-focus-ring-offset | Focus ring offset of tab |
| tabs.tab.focus.ring.shadow | --p-tabs-tab-focus-ring-shadow | Focus ring shadow of tab |
| tabs.tabpanel.background | --p-tabs-tabpanel-background | Background of tabpanel |
| tabs.tabpanel.color | --p-tabs-tabpanel-color | Color of tabpanel |
| tabs.tabpanel.padding | --p-tabs-tabpanel-padding | Padding of tabpanel |
| tabs.tabpanel.focus.ring.width | --p-tabs-tabpanel-focus-ring-width | Focus ring width of tabpanel |
| tabs.tabpanel.focus.ring.style | --p-tabs-tabpanel-focus-ring-style | Focus ring style of tabpanel |
| tabs.tabpanel.focus.ring.color | --p-tabs-tabpanel-focus-ring-color | Focus ring color of tabpanel |
| tabs.tabpanel.focus.ring.offset | --p-tabs-tabpanel-focus-ring-offset | Focus ring offset of tabpanel |
| tabs.tabpanel.focus.ring.shadow | --p-tabs-tabpanel-focus-ring-shadow | Focus ring shadow of tabpanel |
| tabs.nav.button.background | --p-tabs-nav-button-background | Background of nav button |
| tabs.nav.button.color | --p-tabs-nav-button-color | Color of nav button |
| tabs.nav.button.hover.color | --p-tabs-nav-button-hover-color | Hover color of nav button |
| tabs.nav.button.width | --p-tabs-nav-button-width | Width of nav button |
| tabs.nav.button.focus.ring.width | --p-tabs-nav-button-focus-ring-width | Focus ring width of nav button |
| tabs.nav.button.focus.ring.style | --p-tabs-nav-button-focus-ring-style | Focus ring style of nav button |
| tabs.nav.button.focus.ring.color | --p-tabs-nav-button-focus-ring-color | Focus ring color of nav button |
| tabs.nav.button.focus.ring.offset | --p-tabs-nav-button-focus-ring-offset | Focus ring offset of nav button |
| tabs.nav.button.focus.ring.shadow | --p-tabs-nav-button-focus-ring-shadow | Focus ring shadow of nav button |
| tabs.nav.button.shadow | --p-tabs-nav-button-shadow | Shadow of nav button |
| tabs.active.bar.height | --p-tabs-active-bar-height | Height of active bar |
| tabs.active.bar.bottom | --p-tabs-active-bar-bottom | Bottom of active bar |
| tabs.active.bar.background | --p-tabs-active-bar-background | Background of active bar |
