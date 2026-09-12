# Drawer

Drawer is a panel component displayed as an overlay at the edges of the screen.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/drawer.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Drawer, DrawerBackdrop, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerPortal, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
```

```tsx
<Drawer>
    <DrawerTrigger />
    <DrawerBackdrop />
    <DrawerPortal>
        <DrawerHeader>
            <DrawerTitle />
            <DrawerClose />
        </DrawerHeader>
        <DrawerContent />
        <DrawerFooter />
    </DrawerPortal>
</Drawer>
```

## Examples

### Basic

A slide-in panel from the edge of the screen for contextual content.

### Position

The position of the drawer can be customized with the `position` property. The available values are `left`, `right`, `top` and `bottom`.

### Full Screen

The full screen mode is enabled when position property is set as `full`.

### Responsive

The responsive mode can be enabled by adding className or style to the `Drawer.Portal` component.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/drawer.md#api) for `DrawerRoot`, `DrawerTrigger`, `DrawerBackdrop`, `DrawerPortal`, `DrawerHeader`, `DrawerTitle`, `DrawerClose`, `DrawerContent`, `DrawerFooter` component documentation.

### Hooks

See [Headless API](../../headless/components/drawer.md#api) for `useDrawer` hook documentation.

### Accessibility

See [Drawer Primitive](../../primitive/components/drawer.md#accessibility) for WAI-ARIA compliance details and keyboard support.
