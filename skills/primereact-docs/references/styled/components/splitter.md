# Splitter

Splitter is utilized to separate and resize panels.

## Usage

```tsx
import { Splitter } from '@primereact/ui/splitter';
```

```tsx
<Splitter.Root>
    <Splitter.Panel />
    <Splitter.Gutter>
        <Splitter.Handle />
    </Splitter.Gutter>
    <Splitter.Panel />
</Splitter.Root>
```

## Examples

### Basic

Divides a layout into resizable panels with a draggable divider.

### Vertical

Splitters can be combined to create advanced layouts.

### Size

Initial dimension of a panel is percentage based and defined using the `size` property. In addition, `minSize` is provided to set a minimum value during a resize.

### Min Max Size

Splitter panels can be resized within the limits defined by `minSize` and `maxSize` properties.

### Collapsible

Splitter panels can be collapsed to a smaller size defined by the `collapsedSize` property if smaller than or equal to the `minSize` property.

### Nested

Splitters can be combined to create advanced layouts.

### Resize Events

Splitters can trigger events during the resize process, allowing you to handle custom logic when a panel is being resized.

### Stateful

Panel sizes can be persisted using the `onResizeEnd` callback. This example saves sizes to `localStorage` so they are restored on page reload.

### Disabled

Splitter panels can be disabled to prevent resizing. This can be done for all panels by setting the `disabled` property on the root, or for specific gutters by setting the `disabled` property on the gutter.

### Custom

Splitters can be customized with different styles.

### Advanced

## Related

### Sub-Components

See [Primitive API](../../primitive/components/splitter.md#api) for `SplitterRoot`, `SplitterPanel`, `SplitterGutter`, `SplitterHandle` component documentation.

### Hooks

See [Headless API](../../headless/components/splitter.md#api) for `useSplitter` hook documentation.

### Accessibility

See [Splitter Primitive](../../primitive/components/splitter.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-splitter | Class name of the root element |
| p-splitterpanel | Class name of the panel element |
| p-splitter-gutter | Class name of the gutter element |
| p-splitter-gutter-handle | Class name of the handle element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| splitter.background | --p-splitter-background | Background of root |
| splitter.border.color | --p-splitter-border-color | Border color of root |
| splitter.color | --p-splitter-color | Color of root |
| splitter.transition.duration | --p-splitter-transition-duration | Transition duration of root |
| splitter.gutter.background | --p-splitter-gutter-background | Background of gutter |
| splitter.handle.size | --p-splitter-handle-size | Size of handle |
| splitter.handle.background | --p-splitter-handle-background | Background of handle |
| splitter.handle.border.radius | --p-splitter-handle-border-radius | Border radius of handle |
| splitter.handle.focus.ring.width | --p-splitter-handle-focus-ring-width | Focus ring width of handle |
| splitter.handle.focus.ring.style | --p-splitter-handle-focus-ring-style | Focus ring style of handle |
| splitter.handle.focus.ring.color | --p-splitter-handle-focus-ring-color | Focus ring color of handle |
| splitter.handle.focus.ring.offset | --p-splitter-handle-focus-ring-offset | Focus ring offset of handle |
| splitter.handle.focus.ring.shadow | --p-splitter-handle-focus-ring-shadow | Focus ring shadow of handle |
