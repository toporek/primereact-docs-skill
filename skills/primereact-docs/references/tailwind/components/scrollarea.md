# ScrollArea

ScrollArea is a cross browser, lightweight and themable alternative to native browser scrollbar.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/scrollarea.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { ScrollArea, ScrollAreaContent, ScrollAreaScrollbar, ScrollAreaHandle, ScrollAreaViewport } from '@/components/ui/scrollarea';
```

```tsx
<ScrollArea>
    <ScrollAreaViewport>
        <ScrollAreaContent />
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaHandle />
    </ScrollAreaScrollbar>
</ScrollArea>
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
