# ConfirmDialog

An unstyled confirmation dialog component with icon, message, and action button composition.

Build fully custom confirmation dialogs with complete control over layout and styling.

```tsx
'use client';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { Times } from '@primeicons/react/times';
import { ConfirmDialog } from 'primereact/confirmdialog';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <ConfirmDialog.Root>
                <ConfirmDialog.Trigger className={styles.trigger}>Save</ConfirmDialog.Trigger>
                <ConfirmDialog.Portal>
                    <ConfirmDialog.Backdrop className={styles.backdrop} />
                    <ConfirmDialog.Positioner>
                        <ConfirmDialog.Popup className={styles.popup}>
                            <ConfirmDialog.Header className={styles.header}>
                                <ConfirmDialog.Title className={styles.title}>Confirm</ConfirmDialog.Title>
                                <ConfirmDialog.Close className={styles.close}>
                                    <Times />
                                </ConfirmDialog.Close>
                            </ConfirmDialog.Header>
                            <ConfirmDialog.Content className={styles.content}>
                                <ExclamationTriangle className={styles.icon} />
                                <ConfirmDialog.Message className={styles.message}>Are you sure you want to proceed?</ConfirmDialog.Message>
                            </ConfirmDialog.Content>
                            <ConfirmDialog.Footer className={styles.footer}>
                                <ConfirmDialog.Close className={styles.cancelButton}>Cancel</ConfirmDialog.Close>
                                <ConfirmDialog.Close className={styles.confirmButton}>Confirm</ConfirmDialog.Close>
                            </ConfirmDialog.Footer>
                        </ConfirmDialog.Popup>
                    </ConfirmDialog.Positioner>
                </ConfirmDialog.Portal>
            </ConfirmDialog.Root>
        </div>
    );
}
```

## Features

- Compound component API with sub-components: `Root`, `Trigger`, `Portal`, `Backdrop`, `Positioner`, `Popup`, `Header`, `Title`, `HeaderActions`, `Close`, `Content`, `Icon`, `Message`, `Footer`
- Nine position modes: `center`, `top`, `bottom`, `left`, `right`, `topleft`, `topright`, `bottomleft`, `bottomright`
- Integrated focus trap with automatic focus management on open and close
- Dismissable [Backdrop](https://v11.primereact.org/docs/primitive/backdrop) with click-outside detection
- Dedicated `Icon` and `Message` sub-components for structured confirmation content

## Usage

```tsx
import { ConfirmDialog } from 'primereact/confirmdialog';
```

```tsx
<ConfirmDialog.Root>
    <ConfirmDialog.Trigger></ConfirmDialog.Trigger>
    <ConfirmDialog.Portal>
        <ConfirmDialog.Backdrop />
        <ConfirmDialog.Positioner>
            <ConfirmDialog.Popup>
                <ConfirmDialog.Header>
                    <ConfirmDialog.Title></ConfirmDialog.Title>
                    <ConfirmDialog.Close></ConfirmDialog.Close>
                </ConfirmDialog.Header>
                <ConfirmDialog.Content>
                    <ConfirmDialog.Icon />
                    <ConfirmDialog.Message></ConfirmDialog.Message>
                </ConfirmDialog.Content>
                <ConfirmDialog.Footer>
                    <ConfirmDialog.Close></ConfirmDialog.Close>
                    <ConfirmDialog.Close></ConfirmDialog.Close>
                </ConfirmDialog.Footer>
            </ConfirmDialog.Popup>
        </ConfirmDialog.Positioner>
    </ConfirmDialog.Portal>
</ConfirmDialog.Root>
```

## Behavior

### Motion Animation

```tsx
<ConfirmDialog.Popup motionProps={{ name: 'p-confirmdialog', appear: true }}>...</ConfirmDialog.Popup>
```

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<ConfirmDialog.Trigger as="div">...</ConfirmDialog.Trigger>
<ConfirmDialog.Icon as="i">...</ConfirmDialog.Icon>
```

Default elements: `Root`=`div`, `Trigger`=`button`, `Positioner`=`div`, `Popup`=`div`, `Header`=`div`, `Title`=`div`, `Close`=`button`, `Content`=`div`, `Icon`=`span`, `Message`=`span`, `Footer`=`div`.

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<ConfirmDialog.Content>{(instance) => <div>{instance.confirmdialog?.state.open ? 'Open' : 'Closed'}</div>}</ConfirmDialog.Content>
```

## Pass Through

**Pass Through example:**

```tsx
import { Button } from '@primereact/ui/button';
import { ConfirmDialog } from '@primereact/ui/confirmdialog';

export default function ConfirmDialogPTDemo() {
    return (
        <div className="flex flex-wrap flex-col gap-2 justify-center">
            <ConfirmDialog.Root />
            <Button className="hidden" />
            <button
                data-scope="confirmdialog"
                data-part="trigger"
                id="pr_id__R_6vagcqatpet9erknelb_"
                className="p-button p-component p-button-outlined p-confirmdialog-trigger-button"
                type="button"
                aria-expanded="false"
                aria-controls="pr_id__R_1agcqatpet9erknelbH4_"
                data-closed=""
                data-slot="root"
                data-id="pc__r_vagcqatpet9erknelbh1_"
                data-extend="button"
            >
                Trigger
            </button>
            <div className="p-confirmdialog translate-[unset]! inset-[unset]! relative!">
                <div
                    data-scope="confirmdialog"
                    data-part="header"
                    id="pr_id__R_1agcqatpet9erknelbH4__header"
                    className="p-confirmdialog-header"
                    data-slot="root"
                    data-id="pc__r_5t_"
                >
                    <div className="p-confirmdialog-title" data-scope="confirmdialog" data-slot="root" data-part="title" data-id="pc__r_5v_">
                        Edit Profile
                    </div>
                    <button
                        data-scope="confirmdialog"
                        data-part="close"
                        id="pr_id__r_64_"
                        className="p-button p-component p-button-icon-only p-button-secondary p-button-rounded p-button-text p-confirmdialog-close-button"
                        type="button"
                        data-slot="root"
                        data-id="pc__r_61_"
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
                <div data-scope="confirmdialog" data-part="content" className="p-confirmdialog-content" data-slot="root" data-id="pc__r_69_">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="p-icon p-icon-exclamation-triangle w-8! h-8!"
                    >
                        <path
                            d="M10 2.25C10.2691 2.25005 10.5179 2.39429 10.6514 2.62793L18.6514 16.6279C18.7839 16.8599 18.7825 17.1448 18.6485 17.376C18.5143 17.6072 18.2673 17.75 18 17.75H2C1.73266 17.75 1.48576 17.6072 1.35156 17.376C1.21753 17.1448 1.21609 16.86 1.34863 16.6279L9.34864 2.62793C9.48218 2.39428 9.73089 2.25 10 2.25ZM3.29297 16.25H16.7071L10 4.51172L3.29297 16.25ZM10 13.25C10.4142 13.2501 10.75 13.5858 10.75 14V14.5C10.75 14.9142 10.4142 15.2499 10 15.25C9.5858 15.25 9.25001 14.9142 9.25001 14.5V14C9.25001 13.5858 9.5858 13.25 10 13.25ZM10 7.25C10.4142 7.25007 10.75 7.58583 10.75 8V11.5C10.75 11.9142 10.4142 12.2499 10 12.25C9.5858 12.25 9.25001 11.9142 9.25001 11.5V8C9.25001 7.58579 9.5858 7.25 10 7.25Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <span className="p-confirmdialog-message" data-scope="confirmdialog" data-slot="root" data-part="message" data-id="pc__r_6b_">
                        Are you sure you want to proceed?
                    </span>
                </div>
                <div className="p-confirmdialog-footer" data-scope="confirmdialog" data-slot="root" data-part="footer" data-id="pc__r_6d_">
                    <button
                        data-scope="confirmdialog"
                        data-part="close"
                        id="pr_id__r_6i_"
                        className="p-button p-component p-button-outlined p-confirmdialog-close-button"
                        type="button"
                        data-slot="root"
                        data-id="pc__r_6f_"
                        data-extend="button"
                    >
                        Cancel
                    </button>
                    <button
                        data-scope="confirmdialog"
                        data-part="close"
                        id="pr_id__r_6q_"
                        className="p-button p-component p-confirmdialog-close-button"
                        type="button"
                        data-slot="root"
                        data-id="pc__r_6n_"
                        data-extend="button"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
```

## API

### ConfirmDialogRoot

> **API/props table for `ConfirmDialogRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                             |
| ------------- | --------------------------------- |
| `data-open`   | Present when the dialog is open   |
| `data-closed` | Present when the dialog is closed |

> **API/props table for `ConfirmDialogRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmDialogTrigger

> **API/props table for `ConfirmDialogTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                             |
| ------------- | --------------------------------- |
| `data-open`   | Present when the dialog is open   |
| `data-closed` | Present when the dialog is closed |

> **API/props table for `ConfirmDialogTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmDialogPortal

> **API/props table for `ConfirmDialogPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmDialogPortal` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmDialogBackdrop

> **API/props table for `ConfirmDialogBackdrop` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

Uses the [Backdrop](https://v11.primereact.org/docs/primitive/backdrop) component internally for animated overlay rendering.

> **API/props table for `ConfirmDialogBackdrop` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmDialogPositioner

> **API/props table for `ConfirmDialogPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute              | Value                                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `data-position`        | `"center"` \| `"top"` \| `"bottom"` \| `"left"` \| `"right"` \| `"topleft"` \| `"topright"` \| `"bottomleft"` \| `"bottomright"` |
| `data-scroll-behavior` | `"inside"` \| `"outside"`                                                                                                        |
| `data-open`            | Present when the dialog is open                                                                                                  |
| `data-closed`          | Present when the dialog is closed                                                                                                |

> **API/props table for `ConfirmDialogPositioner` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmDialogPopup

> **API/props table for `ConfirmDialogPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute   | Value                           |
| ----------- | ------------------------------- |
| `data-open` | Present when the dialog is open |

Uses [VisuallyHidden](../visuallyhidden/features.md) elements internally for focus trap boundaries.

> **API/props table for `ConfirmDialogPopup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmDialogHeader

> **API/props table for `ConfirmDialogHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmDialogHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmDialogTitle

> **API/props table for `ConfirmDialogTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmDialogTitle` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmDialogHeaderActions

> **API/props table for `ConfirmDialogHeaderActions` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmDialogHeaderActions` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmDialogClose

> **API/props table for `ConfirmDialogClose` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmDialogClose` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmDialogContent

> **API/props table for `ConfirmDialogContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmDialogContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmDialogIcon

> **API/props table for `ConfirmDialogIcon` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmDialogIcon` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmDialogMessage

> **API/props table for `ConfirmDialogMessage` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmDialogMessage` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmDialogFooter

> **API/props table for `ConfirmDialogFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmDialogFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

ConfirmDialog component uses `dialog` role along with `aria-labelledby` referring to the header element however any attribute is passed to the root element so `aria-labelledby` can be used to override this default behavior. In addition `aria-modal` is added since focus is kept within the popup.

Trigger element also has `aria-expanded` and `aria-controls` to indicate the dialog state.

### Overlay Keyboard Support

| Key           | Function                                                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tab`         | Moves focus to the next the focusable element within the confirmdialog if `modal` is true. Otherwise, the focusable element in the page tab sequence.     |
| `shift + tab` | Moves focus to the previous the focusable element within the confirmdialog if `modal` is true. Otherwise, the focusable element in the page tab sequence. |
| `escape`      | Closes the confirmdialog if `closeOnEscape` is true.                                                                                                      |

### Close Button Keyboard Support

| Key     | Function                  |
| ------- | ------------------------- |
| `enter` | Closes the confirmdialog. |
| `space` | Closes the confirmdialog. |
