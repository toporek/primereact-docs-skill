# Panel

Panel is a container component with optional collapsible content.

## Usage

```tsx
import { Panel } from '@primereact/ui/panel';
```

```tsx
<Panel.Root>
    <Panel.Header>
        <Panel.Title />
        <Panel.Trigger>
            <Panel.Indicator />
        </Panel.Trigger>
    </Panel.Header>
    <Panel.Content />
    <Panel.Footer />
</Panel.Root>
```

## Examples

### Basic

A container with a collapsible header and scrollable content body.

### Toggleable

Use `Panel.Trigger` inside the header to make the panel collapsible. The `defaultOpen` prop sets the initial state, and content visibility is animated by default.

### Controlled

Control panel state from outside with the `open` and `onOpenChange` props.

### Indicator

`Panel.Indicator` supports conditional rendering based on panel state. Use the `match` prop to render content only when the state matches.

```tsx
<Panel.Header>
    <Panel.Title>Header</Panel.Title>
    <Panel.Trigger>
        <Panel.Indicator match="open">
            <Minus />
        </Panel.Indicator>
        <Panel.Indicator match="closed">
            <Plus />
        </Panel.Indicator>
    </Panel.Trigger>
</Panel.Header>
```

Available values: `open`, `closed`. Without the `match` prop, the indicator renders in all states.

### Template

Customize the header with custom layouts such as avatars, action buttons, and additional metadata alongside `Panel.Trigger`.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/panel.md#api) for `PanelRoot`, `PanelHeader`, `PanelTrigger`, `PanelTitle`, `PanelIndicator`, `PanelContent`, and `PanelFooter` component documentation.

### Hooks

See [Headless API](../../headless/components/panel.md#api) for `usePanel` hook documentation.

### Accessibility

See [Panel Primitive](../../primitive/components/panel.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-panel | Class name of the root element |
| p-panel-header | Class name of the header element |
| p-panel-title | Class name of the title element |
| p-panel-trigger | Class name of the trigger element |
| p-panel-indicator | Class name of the indicator element |
| p-panel-content-container | Class name of the content element |
| p-panel-content-wrapper | Class name of the content outer wrapper element |
| p-panel-content | Class name of the content inner wrapper element |
| p-panel-footer | Class name of the footer element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| panel.background | --p-panel-background | Background of root |
| panel.border.color | --p-panel-border-color | Border color of root |
| panel.color | --p-panel-color | Color of root |
| panel.border.radius | --p-panel-border-radius | Border radius of root |
| panel.header.background | --p-panel-header-background | Background of header |
| panel.header.color | --p-panel-header-color | Color of header |
| panel.header.padding | --p-panel-header-padding | Padding of header |
| panel.header.border.color | --p-panel-header-border-color | Border color of header |
| panel.header.border.width | --p-panel-header-border-width | Border width of header |
| panel.header.border.radius | --p-panel-header-border-radius | Border radius of header |
| panel.toggleable.header.padding | --p-panel-toggleable-header-padding | Padding of toggleable header |
| panel.title.font.weight | --p-panel-title-font-weight | Font weight of title |
| panel.title.font.size | --p-panel-title-font-size | Font size of title |
| panel.content.padding | --p-panel-content-padding | Padding of content |
| panel.footer.padding | --p-panel-footer-padding | Padding of footer |
