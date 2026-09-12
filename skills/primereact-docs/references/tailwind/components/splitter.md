# Splitter

Splitter is utilized to separate and resize panels.

## Installation

   Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/splitter.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Splitter, SplitterPanel, SplitterGutter, SplitterHandle } from '@/components/ui/splitter';
```

```tsx
<Splitter>
    <SplitterPanel />
    <SplitterGutter>
        <SplitterHandle />
    </SplitterGutter>
    <SplitterPanel />
</Splitter>
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
