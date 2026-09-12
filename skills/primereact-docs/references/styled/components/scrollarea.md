# ScrollArea

ScrollArea is a cross browser, lightweight and themable alternative to native browser scrollbar.

## Usage

```tsx
import { ScrollArea } from '@primereact/ui/scrollarea';
```

```tsx
<ScrollArea.Root>
    <ScrollArea.Viewport>
        <ScrollArea.Content />
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar>
        <ScrollArea.Handle />
    </ScrollArea.Scrollbar>
</ScrollArea.Root>
```

## Examples

### Basic

A custom scrollable container with styled scrollbars.

### Horizontal

ScrollArea supports horizontal scrolling for content that extends beyond the horizontal viewport.

### Both Scrollbars

### Scroll Fade

### Variant

Change the visibility behavior of scrollbars with the `variant` property.

### Custom

## Related

### Sub-Components

See [Primitive API](../../primitive/components/scrollarea.md#api) for `ScrollAreaRoot`, `ScrollAreaViewport`, `ScrollAreaContent`, `ScrollAreaScrollbar`, and `ScrollAreaHandle` component documentation.

### Hooks

See [Headless API](../../headless/components/scrollarea.md#api) for `useScrollArea` hook documentation.

### Accessibility

See [ScrollArea Primitive](../../primitive/components/scrollarea.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-scrollarea | Class name of the root element |
| p-scrollarea-viewport | Class name of the viewport element |
| p-scrollarea-scrollbar | Class name of the scrollbar element |
| p-scrollarea-handle | Class name of the handle element |
| p-scrollarea-corner | Class name of the corner element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| scrollpanel.transition.duration | --p-scrollpanel-transition-duration | Transition duration of root |
| scrollpanel.bar.size | --p-scrollpanel-bar-size | Size of bar |
| scrollpanel.bar.border.radius | --p-scrollpanel-bar-border-radius | Border radius of bar |
| scrollpanel.bar.focus.ring.width | --p-scrollpanel-bar-focus-ring-width | Focus ring width of bar |
| scrollpanel.bar.focus.ring.style | --p-scrollpanel-bar-focus-ring-style | Focus ring style of bar |
| scrollpanel.bar.focus.ring.color | --p-scrollpanel-bar-focus-ring-color | Focus ring color of bar |
| scrollpanel.bar.focus.ring.offset | --p-scrollpanel-bar-focus-ring-offset | Focus ring offset of bar |
| scrollpanel.bar.focus.ring.shadow | --p-scrollpanel-bar-focus-ring-shadow | Focus ring shadow of bar |
| scrollpanel.bar.background | --p-scrollpanel-bar-background | Background of bar |
