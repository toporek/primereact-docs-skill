# Drawer

Drawer is a panel component displayed as an overlay at the edges of the screen.

## Usage

```tsx
import { Drawer } from '@primereact/ui/drawer';
```

```tsx
<Drawer.Root>
    <Drawer.Trigger />
    <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Popup>
            <Drawer.Header>
                <Drawer.Title />
                <Drawer.Close />
            </Drawer.Header>
            <Drawer.Content />
            <Drawer.Footer />
        </Drawer.Popup>
    </Drawer.Portal>
</Drawer.Root>
```

## Examples

### Basic

A slide-in panel from the edge of the screen for contextual content.

### Position

The position of the drawer can be customized with the `position` property. The available values are `left`, `right`, `top` and `bottom`.

### Full Screen

The full screen mode is enabled when position property is set as `full`.

### Responsive

The responsive mode can be enabled by adding className or style to the `Drawer.Popup` component.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/drawer.md#api) for `DrawerRoot`, `DrawerTrigger`, `DrawerPortal`, `DrawerBackdrop`, `DrawerPopup`, `DrawerHeader`, `DrawerTitle`, `DrawerClose`, `DrawerContent`, `DrawerFooter` component documentation.

### Hooks

See [Headless API](../../headless/components/drawer.md#api) for `useDrawer` hook documentation.

### Accessibility

See [Drawer Primitive](../../primitive/components/drawer.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-drawer-backdrop | Class name of the backdrop element |
| p-drawer | Class name of the root element |
| p-drawer-trigger-button | Class name of the trigger button element |
| p-drawer-header | Class name of the header element |
| p-drawer-title | Class name of the title element |
| p-drawer-close-button | Class name of the close button element |
| p-drawer-content | Class name of the content element |
| p-drawer-footer | Class name of the footer element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| drawer.background | --p-drawer-background | Background of root |
| drawer.border.color | --p-drawer-border-color | Border color of root |
| drawer.color | --p-drawer-color | Color of root |
| drawer.shadow | --p-drawer-shadow | Shadow of root |
| drawer.header.padding | --p-drawer-header-padding | Padding of header |
| drawer.title.font.size | --p-drawer-title-font-size | Font size of title |
| drawer.title.font.weight | --p-drawer-title-font-weight | Font weight of title |
| drawer.content.padding | --p-drawer-content-padding | Padding of content |
| drawer.footer.padding | --p-drawer-footer-padding | Padding of footer |
