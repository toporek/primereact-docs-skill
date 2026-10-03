# Toolbar

Toolbar is a grouping component for buttons and other content.

## Usage

```tsx
import { Toolbar } from '@primereact/ui/toolbar';
```

```tsx
<Toolbar.Root>
    <Toolbar.Start />
    <Toolbar.Center />
    <Toolbar.End />
</Toolbar.Root>
```

## Examples

### Basic

Combines action buttons and controls in a horizontal bar.

### Custom

A customized toolbar with navigation bar functionality.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/toolbar.md#api) for `ToolbarRoot`, `ToolbarStart`, `ToolbarCenter`, `ToolbarEnd` component documentation.

### Hooks

See [Headless API](../../headless/components/toolbar.md#api) for `useToolbar` hook documentation.

### Accessibility

See [Toolbar Primitive](../../primitive/components/toolbar.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-toolbar | Class name of the root element |
| p-toolbar-start | Class name of the start element |
| p-toolbar-center | Class name of the center element |
| p-toolbar-end | Class name of the end element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| toolbar.background | --p-toolbar-background | Background of root |
| toolbar.border.color | --p-toolbar-border-color | Border color of root |
| toolbar.border.radius | --p-toolbar-border-radius | Border radius of root |
| toolbar.color | --p-toolbar-color | Color of root |
| toolbar.gap | --p-toolbar-gap | Gap of root |
| toolbar.padding | --p-toolbar-padding | Padding of root |
