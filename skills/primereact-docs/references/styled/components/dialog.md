# Dialog

Dialog is a container to display content in an overlay window.

## Usage

```tsx
import { Dialog } from '@primereact/ui/dialog';
```

```tsx
<Dialog.Root>
    <Dialog.Trigger />
    <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
            <Dialog.Popup>
                <Dialog.Header>
                    <Dialog.Title />
                    <Dialog.HeaderActions>
                        <Dialog.Maximizable />
                        <Dialog.Close />
                    </Dialog.HeaderActions>
                </Dialog.Header>
                <Dialog.Content />
                <Dialog.Footer />
            </Dialog.Popup>
        </Dialog.Positioner>
    </Dialog.Portal>
</Dialog.Root>
```

## Examples

### Basic

A modal with a header, scrollable content, and footer actions.

### Draggable

A dialog can be repositioned by dragging its header when the `draggable` prop is enabled.

### Position

The position of the dialog can be customized with the `position` property. The available values are `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `right`, and `center`.

### Maximizable

A dialog can be maximized by clicking the _Dialog.Maximizable_ button.

### Full Screen

The `fullScreen` prop opens the dialog in maximized mode. Without a _Dialog.Maximizable_ button, the dialog remains full screen until closed.

### Modal

A modal dialog with a backdrop that blocks interaction with the page. When `modal` and `dismissable` are both enabled, clicking outside the dialog closes it.

### Without Modal

A dialog without a modal layer. The page remains interactive behind the dialog.

### Confirmation

A common pattern for confirmation dialogs with warning messages and action buttons.

### Inside Scroll

When `scrollBehavior` is set to `inside`, the dialog content area scrolls while the header and footer remain fixed.

### Outside Scroll

When `scrollBehavior` is set to `outside`, the entire dialog scrolls within the positioner, allowing the full dialog to move as a single unit.

### Responsive

Dialog width adapts to different screen sizes using responsive CSS classes on the _Dialog.Popup_.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/dialog.md#api) for `DialogRoot`, `DialogTrigger`, `DialogPortal`, `DialogBackdrop`, `DialogPositioner`, `DialogPopup`, `DialogHeader`, `DialogTitle`, `DialogHeaderActions`, `DialogMaximizable`, `DialogClose`, `DialogContent`, `DialogFooter` component documentation.

### Hooks

See [Headless API](../../headless/components/dialog.md#api) for `useDialog` hook documentation.

### Accessibility

See [Dialog Primitive](../../primitive/components/dialog.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-dialog-backdrop | Class name of the backdrop element |
| p-dialog | Class name of the root element |
| p-dialog-trigger-button | Class name of the trigger button element |
| p-dialog-header | Class name of the header element |
| p-dialog-title | Class name of the title element |
| p-dialog-header-actions | Class name of the header actions element |
| p-dialog-maximize-button | Class name of the maximize button element |
| p-dialog-close-button | Class name of the close button element |
| p-dialog-content | Class name of the content element |
| p-dialog-footer | Class name of the footer element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| dialog.background | --p-dialog-background | Background of root |
| dialog.border.color | --p-dialog-border-color | Border color of root |
| dialog.color | --p-dialog-color | Color of root |
| dialog.border.radius | --p-dialog-border-radius | Border radius of root |
| dialog.shadow | --p-dialog-shadow | Shadow of root |
| dialog.header.padding | --p-dialog-header-padding | Padding of header |
| dialog.header.gap | --p-dialog-header-gap | Gap of header |
| dialog.title.font.size | --p-dialog-title-font-size | Font size of title |
| dialog.title.font.weight | --p-dialog-title-font-weight | Font weight of title |
| dialog.content.padding | --p-dialog-content-padding | Padding of content |
| dialog.footer.padding | --p-dialog-footer-padding | Padding of footer |
| dialog.footer.gap | --p-dialog-footer-gap | Gap of footer |
