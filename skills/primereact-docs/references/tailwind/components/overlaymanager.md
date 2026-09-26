# OverlayManager

OverlayManager opens overlay components imperatively from anywhere in your app.

## Usage

```tsx
import { createOverlayManager } from '@primereact/core/overlay-manager';
```

Declare a manager at module scope, pass a render function that spreads the injected props onto an overlay root, and mount `<manager.Viewport />` once in your layout.

```tsx
const dialog = createOverlayManager<{ title: string; description?: string }>(({ title, description, ...rest }) => (
    <Dialog {...rest}>
        <DialogPortal>
            <DialogBackdrop />
            <DialogPopup>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <DialogContent>{description}</DialogContent>
            </DialogPopup>
        </DialogPortal>
    </Dialog>
));
```

The render function receives the caller props merged with three injected lifecycle props, `open`, `onOpenChange`, and `onExitComplete`. Spreading them onto `Dialog` lets the manager fully control open state, entry into the tree, and removal after the exit animation.

```tsx
// Layout
<dialog.Viewport />;

// Anywhere
dialog.open({ title: 'Hello', description: 'World' });
```

## API

```ts
interface OverlayManagerInstance<P> {
    open: (props: P, id?: string) => string;
    close: (id?: string) => void;
    update: (id: string, props: Partial<P>) => void;
    Viewport: React.ComponentType;
}
```

- `open(props, id?)`, mounts a new entry with the given props. Returns the generated (or supplied) id.
- `close(id?)`, starts the close transition. Called with no id, every open entry is closed.
- `update(id, props)`, shallow-merges new props into an already-open entry. The mounted overlay re-renders in place.
- `Viewport`, the component that renders every open entry. Mount once per manager.

## Examples

### Basic

Open a dialog imperatively with `open()` and close it via the close button or escape key.

### Update

Call `update(id, partialProps)` after `open` to change the mounted dialog's content without closing it.

### Stacked

Multiple entries mount side by side. `close()` with no id begins closing every open entry, each one finishes its own exit animation independently.

### Confirm

Pass user-defined callbacks (like `onConfirm`) as part of your payload, they remain available inside the render function.

### Drawer

The same API works for any overlay component that accepts `open` / `onOpenChange` / `onOpenChangeComplete`, here a managed `Drawer` with configurable position.

### Popover

Popovers need an anchor element. Pass a ref to it through the payload and read it inside the render function. Popover's `onOpenChange` uses `{ open }` instead of `{ value }`, so the render function bridges the two.

### Tooltip

Tooltip accepts an `anchor` prop for imperative use, just like Popover. Opening a tooltip from a click doesn't feel native, prefer Popover or Toast for click-driven flows, but the plumbing works identically when you need it.
