# Dialog

An unstyled modal dialog component with built-in focus trap, scroll lock, drag support, and dismissable backdrop.

Build fully custom modal dialogs with complete control over layout and styling.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Dialog } from 'primereact/dialog';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Dialog.Root>
                <Dialog.Trigger className={styles.trigger}>Edit Profile</Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Backdrop className={styles.backdrop} />
                    <Dialog.Positioner className={styles.positioner}>
                        <Dialog.Popup className={styles.popup}>
                            <Dialog.Header className={styles.header}>
                                <Dialog.Title className={styles.title}>Edit Profile</Dialog.Title>
                                <Dialog.HeaderActions>
                                    <Dialog.Close className={styles.close}>
                                        <Times />
                                    </Dialog.Close>
                                </Dialog.HeaderActions>
                            </Dialog.Header>
                            <Dialog.Content className={styles.content}>
                                <div className={styles.form}>
                                    <div className={styles.field}>
                                        <label htmlFor="name" className={styles.label}>
                                            Name
                                        </label>
                                        <input id="name" defaultValue="Amanda Miller" className={styles.input} />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="username" className={styles.label}>
                                            Username
                                        </label>
                                        <input id="username" defaultValue="@amandamiller" className={styles.input} />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="email" className={styles.label}>
                                            Email
                                        </label>
                                        <input id="email" defaultValue="amanda@example.com" className={styles.input} />
                                    </div>
                                    <div className={styles.actions}>
                                        <Dialog.Close className={styles.cancelButton}>Cancel</Dialog.Close>
                                        <Dialog.Close className={styles.saveButton}>Save Changes</Dialog.Close>
                                    </div>
                                </div>
                            </Dialog.Content>
                        </Dialog.Popup>
                    </Dialog.Positioner>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `Trigger`, `Portal`, `Backdrop`, `Positioner`, `Popup`, `Header`, `Title`, `HeaderActions`, `Maximizable`, `Close`, `Content`, `Footer`
- Nine position modes: `center`, `top`, `bottom`, `left`, `right`, `topleft`, `topright`, `bottomleft`, `bottomright`
- Integrated focus trap with automatic focus management on open and close
- Dismissable [Backdrop](https://primereact.dev/docs/primitive/components/backdrop) with click-outside detection
- Built-in drag support with viewport boundary enforcement
- Maximizable mode with fullscreen toggle
- Scroll lock support via `blockScroll`

## Usage

```tsx
import { Dialog } from 'primereact/dialog';
```

```tsx
<Dialog.Root>
    <Dialog.Trigger></Dialog.Trigger>
    <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
            <Dialog.Popup>
                <Dialog.Header>
                    <Dialog.Title></Dialog.Title>
                    <Dialog.HeaderActions>
                        <Dialog.Maximizable></Dialog.Maximizable>
                        <Dialog.Close></Dialog.Close>
                    </Dialog.HeaderActions>
                </Dialog.Header>
                <Dialog.Content></Dialog.Content>
                <Dialog.Footer></Dialog.Footer>
            </Dialog.Popup>
        </Dialog.Positioner>
    </Dialog.Portal>
</Dialog.Root>
```

## Behavior

### Motion Animation

```tsx
<Dialog.Popup motionProps={{ name: 'p-dialog', appear: true }}>...</Dialog.Popup>
```

See [Motion](motion.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Dialog.Trigger as="div">...</Dialog.Trigger>
<Dialog.Close as="a">...</Dialog.Close>
```

Default elements: `Root`=`div`, `Trigger`=`button`, `Positioner`=`div`, `Popup`=`div`, `Header`=`div`, `Title`=`div`, `HeaderActions`=`div`, `Maximizable`=`button`, `Close`=`button`, `Content`=`div`, `Footer`=`div`.

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Dialog.Content>{(instance) => <div>{instance.dialog?.state.open ? 'Open' : 'Closed'}</div>}</Dialog.Content>
```

## Pass Through

## API

### DialogRoot

> **API/props table for `DialogRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                                |
| ---------------- | ------------------------------------ |
| `data-open`      | Present when the dialog is open      |
| `data-closed`    | Present when the dialog is closed    |
| `data-maximized` | Present when the dialog is maximized |

| Label | Type | Description |
|:------|:------|:------|
| root | DialogRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| positioner | DialogRootPassThroughType> | Used to pass attributes to the positioner's DOM element. |
| backdrop | DialogRootPassThroughType> | Used to pass attributes to the backdrop's DOM element. |
| trigger | DialogRootPassThroughType> | Used to pass attributes to the trigger's DOM element. |
| header | DialogRootPassThroughType> | Used to pass attributes to the header's DOM element. |
| title | DialogRootPassThroughType> | Used to pass attributes to the title's DOM element. |
| headerActions | DialogRootPassThroughType> | Used to pass attributes to the headerActions's DOM element. |
| maximizable | DialogRootPassThroughType> | Used to pass attributes to the maximizable's DOM element. |
| close | DialogRootPassThroughType> | Used to pass attributes to the close's DOM element. |
| content | DialogRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| footer | DialogRootPassThroughType> | Used to pass attributes to the footer's DOM element. |

### DialogTrigger

> **API/props table for `DialogTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                             |
| ------------- | --------------------------------- |
| `data-open`   | Present when the dialog is open   |
| `data-closed` | Present when the dialog is closed |

| Label | Type | Description |
|:------|:------|:------|
| root | DialogTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### DialogPortal

> **API/props table for `DialogPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DialogPortalPassThroughType> | Used to pass attributes to the root's DOM element. |

### DialogBackdrop

> **API/props table for `DialogBackdrop` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

Uses the [Backdrop](https://primereact.dev/docs/primitive/components/backdrop) component internally for animated overlay rendering.

| Label | Type | Description |
|:------|:------|:------|
| root | DialogBackdropPassThroughType> | Used to pass attributes to the root's DOM element. |

### DialogPositioner

> **API/props table for `DialogPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute              | Value                                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `data-position`        | `"center"` \| `"top"` \| `"bottom"` \| `"left"` \| `"right"` \| `"topleft"` \| `"topright"` \| `"bottomleft"` \| `"bottomright"` |
| `data-scroll-behavior` | `"inside"` \| `"outside"`                                                                                                        |
| `data-open`            | Present when the dialog is open                                                                                                  |
| `data-closed`          | Present when the dialog is closed                                                                                                |
| `data-maximized`       | Present when the dialog is maximized                                                                                             |

| Label | Type | Description |
|:------|:------|:------|
| root | DialogPositionerPassThroughType> | Used to pass attributes to the root's DOM element. |

### DialogPopup

> **API/props table for `DialogPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                                |
| ---------------- | ------------------------------------ |
| `data-open`      | Present when the dialog is open      |
| `data-maximized` | Present when the dialog is maximized |

Uses [VisuallyHidden](visuallyhidden.md) elements internally for focus trap boundaries.

| Label | Type | Description |
|:------|:------|:------|
| root | DialogPopupPassThroughType> | Used to pass attributes to the root's DOM element. |

### DialogHeader

> **API/props table for `DialogHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DialogHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### DialogTitle

> **API/props table for `DialogTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DialogTitlePassThroughType> | Used to pass attributes to the root's DOM element. |

### DialogHeaderActions

> **API/props table for `DialogHeaderActions` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DialogHeaderActionsPassThroughType> | Used to pass attributes to the root's DOM element. |

### DialogMaximizable

> **API/props table for `DialogMaximizable` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                                    |
| ---------------- | ---------------------------------------- |
| `data-maximized` | Present when the dialog is maximized     |
| `data-minimized` | Present when the dialog is not maximized |

| Label | Type | Description |
|:------|:------|:------|
| root | DialogMaximizablePassThroughType> | Used to pass attributes to the root's DOM element. |

### DialogClose

> **API/props table for `DialogClose` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DialogClosePassThroughType> | Used to pass attributes to the root's DOM element. |

### DialogContent

> **API/props table for `DialogContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                                |
| ---------------- | ------------------------------------ |
| `data-maximized` | Present when the dialog is maximized |

| Label | Type | Description |
|:------|:------|:------|
| root | DialogContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### DialogFooter

> **API/props table for `DialogFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DialogFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Dialog component uses `dialog` role along with `aria-labelledby` referring to the header element however any attribute is passed to the root element so `aria-labelledby` can be used to override this default behavior. In addition `aria-modal` is added since focus is kept within the popup.

Trigger element also has `aria-expanded` and `aria-controls` to indicate the dialog state.

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
