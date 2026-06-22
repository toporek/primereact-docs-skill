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
- Dismissable [Backdrop](https://v11.primereact.org/docs/primitive/backdrop) with click-outside detection
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

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

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

**Pass Through example:**

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import { Dialog } from '@primereact/ui/dialog';

export default function DialogPTDemo() {
    return (
        <div className="flex flex-wrap flex-col justify-center">
            <Dialog.Root />
            <Button className="hidden" />

            <button
                data-scope="dialog"
                data-part="trigger"
                id="pr_id__r_47_"
                className="p-button p-component p-button-outlined p-dialog-trigger-button mb-8"
                type="button"
                aria-expanded="false"
                aria-controls="pr_id__r_3v_"
                data-closed=""
                data-slot="root"
                data-id="pc__r_44_"
                data-extend="button"
            >
                Trigger
            </button>
            <div className="p-dialog w-[300px] translate-[unset]! inset-[unset]! relative!">
                <div
                    data-scope="dialog"
                    data-part="header"
                    id="pr_id__R_l0cqatpet9erknelbH2__header"
                    className="p-dialog-header"
                    data-slot="root"
                    data-id="pc__r_7h_"
                >
                    <div className="p-dialog-title" data-scope="dialog" data-slot="root" data-part="title" data-id="pc__r_7j_">
                        Dialog Title
                    </div>
                    <div className="p-dialog-header-actions" data-scope="dialog" data-slot="root" data-part="headeractions" data-id="pc__r_7l_">
                        <button
                            data-scope="dialog"
                            data-part="close"
                            id="pr_id__r_7q_"
                            className="p-button p-component p-button-icon-only p-button-secondary p-button-rounded p-button-text p-dialog-close-button"
                            type="button"
                            data-slot="root"
                            data-id="pc__r_7n_"
                            data-extend="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                aria-hidden="true"
                                className="p-icon p-icon-times"
                            >
                                <path
                                    d="M14.4199 4.51962C14.7128 4.22696 15.1876 4.22685 15.4805 4.51962C15.7731 4.81246 15.7731 5.28732 15.4805 5.58016L11.0606 10L15.4805 14.4199C15.773 14.7129 15.7732 15.1877 15.4805 15.4805C15.1877 15.7732 14.7128 15.773 14.4199 15.4805L10 11.0606L5.58014 15.4805C5.2873 15.7731 4.81245 15.7731 4.5196 15.4805C4.22682 15.1876 4.22692 14.7128 4.5196 14.4199L8.93949 10L4.5196 5.58016C4.22676 5.28727 4.22673 4.8125 4.5196 4.51962C4.81248 4.22677 5.28726 4.22678 5.58014 4.51962L10 8.93951L14.4199 4.51962Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div data-scope="dialog" data-part="content" className="p-dialog-content" data-slot="root" data-id="pc__r_7v_">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div>
                                <p className="mt-0 mb-1">
                                    Component-driven development is an approach that focuses on building loosely coupled, independent components that
                                    can be composed together to build complex user interfaces. This methodology promotes reusability, testability, and
                                    maintainability.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                data-scope="dialog"
                                data-part="close"
                                id="pr_id__r_9i_"
                                className="p-button p-component p-button-secondary p-dialog-close-button"
                                type="button"
                                data-slot="root"
                                data-id="pc__r_9f_"
                                data-extend="button"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

## API

### DialogRoot

> **API/props table for `DialogRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                                |
| ---------------- | ------------------------------------ |
| `data-open`      | Present when the dialog is open      |
| `data-closed`    | Present when the dialog is closed    |
| `data-maximized` | Present when the dialog is maximized |

> **API/props table for `DialogRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DialogTrigger

> **API/props table for `DialogTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                             |
| ------------- | --------------------------------- |
| `data-open`   | Present when the dialog is open   |
| `data-closed` | Present when the dialog is closed |

> **API/props table for `DialogTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DialogPortal

> **API/props table for `DialogPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DialogPortal` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DialogBackdrop

> **API/props table for `DialogBackdrop` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

Uses the [Backdrop](https://v11.primereact.org/docs/primitive/backdrop) component internally for animated overlay rendering.

> **API/props table for `DialogBackdrop` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DialogPositioner

> **API/props table for `DialogPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute              | Value                                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `data-position`        | `"center"` \| `"top"` \| `"bottom"` \| `"left"` \| `"right"` \| `"topleft"` \| `"topright"` \| `"bottomleft"` \| `"bottomright"` |
| `data-scroll-behavior` | `"inside"` \| `"outside"`                                                                                                        |
| `data-open`            | Present when the dialog is open                                                                                                  |
| `data-closed`          | Present when the dialog is closed                                                                                                |
| `data-maximized`       | Present when the dialog is maximized                                                                                             |

> **API/props table for `DialogPositioner` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DialogPopup

> **API/props table for `DialogPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                                |
| ---------------- | ------------------------------------ |
| `data-open`      | Present when the dialog is open      |
| `data-maximized` | Present when the dialog is maximized |

Uses [VisuallyHidden](../visuallyhidden/features.md) elements internally for focus trap boundaries.

> **API/props table for `DialogPopup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DialogHeader

> **API/props table for `DialogHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DialogHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DialogTitle

> **API/props table for `DialogTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DialogTitle` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DialogHeaderActions

> **API/props table for `DialogHeaderActions` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DialogHeaderActions` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DialogMaximizable

> **API/props table for `DialogMaximizable` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                                    |
| ---------------- | ---------------------------------------- |
| `data-maximized` | Present when the dialog is maximized     |
| `data-minimized` | Present when the dialog is not maximized |

> **API/props table for `DialogMaximizable` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DialogClose

> **API/props table for `DialogClose` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DialogClose` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DialogContent

> **API/props table for `DialogContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                                |
| ---------------- | ------------------------------------ |
| `data-maximized` | Present when the dialog is maximized |

> **API/props table for `DialogContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DialogFooter

> **API/props table for `DialogFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DialogFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
