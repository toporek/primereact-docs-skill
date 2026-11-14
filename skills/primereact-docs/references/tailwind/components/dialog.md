# Dialog

Dialog is a container to display content in an overlay window.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/dialog.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Dialog, DialogBackdrop, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogHeaderActions, DialogMaximizable, DialogPopup, DialogPortal, DialogPositioner, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
```

```tsx
<Dialog>
    <DialogTrigger />
    <DialogPortal>
        <DialogBackdrop />
        <DialogPositioner>
            <DialogPopup>
                <DialogHeader>
                    <DialogTitle />
                    <DialogHeaderActions>
                        <DialogMaximizable />
                        <DialogClose />
                    </DialogHeaderActions>
                </DialogHeader>
                <DialogContent />
                <DialogFooter />
            </DialogPopup>
        </DialogPositioner>
    </DialogPortal>
</Dialog>
```

## Examples

### Basic

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

Dialog width adapts to different screen sizes using responsive CSS classes on the _DialogPopup_.

## Accessibility

### Screen Reader

Dialog component uses `dialog` role along with `aria-labelledby` referring to the header element however any attribute is passed to the root element so `aria-labelledby` can be used to override this default behavior. In addition `aria-modal` is added since focus is kept within the popup.

Trigger element also has aria-expanded and aria-controls to be handled explicitly.

### Overlay Keyboard Support

| Key           | Function                                                                                                                                           |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tab`         | Moves focus to the next the focusable element within the dialog if `modal` is true. Otherwise, the focusable element in the page tab sequence.     |
| `shift + tab` | Moves focus to the previous the focusable element within the dialog if `modal` is true. Otherwise, the focusable element in the page tab sequence. |
| `escape`      | Closes the dialog if `closeOnEscape` is true.                                                                                                      |

### Close Button Keyboard Support

| Key     | Function           |
| ------- | ------------------ |
| `enter` | Closes the dialog. |
| `space` | Closes the dialog. |
