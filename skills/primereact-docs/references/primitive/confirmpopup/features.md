# ConfirmPopup

An unstyled confirm popup component with alertdialog role, focus management, and outside click dismissal.

Build fully custom confirmation popups with complete control over layout and styling.

```tsx
'use client';
import { ExclemationCircle } from '@primeicons/react/exclemation-circle';
import { ConfirmPopup } from 'primereact/confirmpopup';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <ConfirmPopup.Root>
                <ConfirmPopup.Trigger className={styles.trigger}>Confirm</ConfirmPopup.Trigger>
                <ConfirmPopup.Portal>
                    <ConfirmPopup.Positioner sideOffset={12}>
                        <ConfirmPopup.Popup className={styles.popup}>
                            <ConfirmPopup.Arrow className={styles.arrow} />
                            <ConfirmPopup.Content className={styles.content}>
                                <ExclemationCircle className={styles.icon} />
                                <ConfirmPopup.Message className={styles.message}>Are you sure you want to proceed?</ConfirmPopup.Message>
                            </ConfirmPopup.Content>
                            <ConfirmPopup.Footer className={styles.footer}>
                                <ConfirmPopup.Close className={styles.cancelButton}>Cancel</ConfirmPopup.Close>
                                <ConfirmPopup.Close className={styles.saveButton}>Save</ConfirmPopup.Close>
                            </ConfirmPopup.Footer>
                        </ConfirmPopup.Popup>
                    </ConfirmPopup.Positioner>
                </ConfirmPopup.Portal>
            </ConfirmPopup.Root>
        </div>
    );
}
```

## Features

- Compound component API with sub-components: `Root`, `Trigger`, `Portal`, `Positioner`, `Popup`, `Arrow`, `Content`, `Icon`, `Message`, `Footer`, `Close`
- Built-in `alertdialog` role on the popup element for confirmation semantics
- Multiple `Close` buttons for distinct actions (e.g., Cancel and Save)
- Arrow element support for visual connection to the trigger

## Usage

```tsx
import { ConfirmPopup } from 'primereact/confirmpopup';
```

```tsx
<ConfirmPopup.Root>
    <ConfirmPopup.Trigger></ConfirmPopup.Trigger>
    <ConfirmPopup.Portal>
        <ConfirmPopup.Positioner sideOffset={12}>
            <ConfirmPopup.Popup>
                <ConfirmPopup.Arrow />
                <ConfirmPopup.Content>
                    <ConfirmPopup.Icon />
                    <ConfirmPopup.Message></ConfirmPopup.Message>
                </ConfirmPopup.Content>
                <ConfirmPopup.Footer>
                    <ConfirmPopup.Close></ConfirmPopup.Close>
                    <ConfirmPopup.Close></ConfirmPopup.Close>
                </ConfirmPopup.Footer>
            </ConfirmPopup.Popup>
        </ConfirmPopup.Positioner>
    </ConfirmPopup.Portal>
</ConfirmPopup.Root>
```

## Behavior

### Motion Animation

```tsx
<ConfirmPopup.Popup motionProps={{ name: 'p-confirmpopup' }}>...</ConfirmPopup.Popup>
```

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<ConfirmPopup.Close as="a">Cancel</ConfirmPopup.Close>
```

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<ConfirmPopup.Trigger>{(instance) => <span>{instance.confirmpopup?.state.open ? 'Close' : 'Open'}</span>}</ConfirmPopup.Trigger>
```

## Pass Through

**Pass Through example:**

```tsx
import { Button } from '@primereact/ui/button';
import { ConfirmPopup } from '@primereact/ui/confirmpopup';

export default function ConfirmPopupPTDemo() {
    return (
        <div className="flex flex-wrap flex-col justify-center">
            <ConfirmPopup.Root />
            <Button className="hidden" />
            <button
                data-scope="confirmpopup"
                data-part="trigger"
                className="mb-8 inline-flex items-center justify-center bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 border border-surface rounded-md px-2.5 py-1.5 gap-2"
                data-slot="root"
                data-id="pc__r_1j_"
                data-positioner-open=""
                data-open=""
            >
                Trigger
            </button>
            <div className="p-confirmpopup-popup translate-[unset]! inset-[unset]! relative!">
                <div className="p-confirmpopup-content" data-scope="confirmpopup" data-slot="root" data-part="content" data-id="pc__r_62_">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="p-icon p-icon-exclemation-circle w-5! h-5! text-primary"
                    >
                        <path
                            d="M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM10 12C10.4142 12 10.75 12.3358 10.75 12.75V13.25C10.75 13.6642 10.4142 14 10 14C9.58579 14 9.25 13.6642 9.25 13.25V12.75C9.25 12.3358 9.58579 12 10 12ZM10 6C10.4142 6 10.75 6.33579 10.75 6.75V10.25C10.75 10.6642 10.4142 11 10 11C9.58579 11 9.25 10.6642 9.25 10.25V6.75C9.25 6.33579 9.58579 6 10 6Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <span
                        className="p-confirmpopup-message text-sm text-surface-700 dark:text-surface-200"
                        data-scope="confirmpopup"
                        data-slot="root"
                        data-part="message"
                        data-id="pc__r_64_"
                    >
                        Are you sure you want to proceed?
                    </span>
                </div>
                <div className="p-confirmpopup-footer justify-end" data-scope="confirmpopup" data-slot="root" data-part="footer" data-id="pc__r_66_">
                    <button
                        data-scope="confirmpopup"
                        data-part="close"
                        id="pr_id__r_6b_"
                        className="p-button p-component p-button-secondary p-button-outlined p-button-sm p-confirmpopup-close-button"
                        type="button"
                        data-slot="root"
                        data-id="pc__r_68_"
                        data-extend="button"
                    >
                        Cancel
                    </button>
                    <button
                        data-scope="confirmpopup"
                        data-part="close"
                        id="pr_id__r_6j_"
                        className="p-button p-component p-button-sm p-confirmpopup-close-button"
                        type="button"
                        data-slot="root"
                        data-id="pc__r_6g_"
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

### ConfirmPopupRoot

> **API/props table for `ConfirmPopupRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmPopupRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmPopupTrigger

> **API/props table for `ConfirmPopupTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute              | Value                              |
| ---------------------- | ---------------------------------- |
| `data-positioner-open` | Present when confirm popup is open |
| `data-open`            | Present when confirm popup is open |

> **API/props table for `ConfirmPopupTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmPopupPortal

> **API/props table for `ConfirmPopupPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmPopupPortal` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmPopupPositioner

> **API/props table for `ConfirmPopupPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                      |
| ------------ | ---------------------------------------------------------- |
| `data-open`  | Present when confirm popup is open                         |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"` — placement |
| `data-align` | `"start"` \| `"center"` \| `"end"` — alignment             |

**CSS Custom Properties**

The positioner element exposes CSS custom properties for layout and transform control.

| CSS Variable                | Description                              |
| --------------------------- | ---------------------------------------- |
| `--available-height`        | Available vertical space in pixels       |
| `--available-width`         | Available horizontal space in pixels     |
| `--transform-origin`        | Computed transform origin for animations |
| `--positioner-anchor-width` | Width of the anchor/trigger element      |

> **API/props table for `ConfirmPopupPositioner` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmPopupPopup

> **API/props table for `ConfirmPopupPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                                |
| ------------- | ------------------------------------ |
| `data-open`   | Present when confirm popup is open   |
| `data-closed` | Present when confirm popup is closed |

> **API/props table for `ConfirmPopupPopup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmPopupArrow

> **API/props table for `ConfirmPopupArrow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                      |
| ------------ | ---------------------------------------------------------- |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"` — placement |
| `data-align` | `"start"` \| `"center"` \| `"end"` — alignment             |

The arrow element exposes CSS custom properties for dynamic positioning:

| CSS Variable          | Description                    |
| --------------------- | ------------------------------ |
| `--placer-arrow-x`    | Horizontal offset of arrow     |
| `--placer-arrow-y`    | Vertical offset of arrow       |
| `--placer-arrow-left` | Left position of arrow element |
| `--placer-arrow-top`  | Top position of arrow element  |

> **API/props table for `ConfirmPopupArrow` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmPopupContent

> **API/props table for `ConfirmPopupContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmPopupContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmPopupIcon

> **API/props table for `ConfirmPopupIcon` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmPopupIcon` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmPopupMessage

> **API/props table for `ConfirmPopupMessage` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmPopupMessage` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmPopupFooter

> **API/props table for `ConfirmPopupFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmPopupFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ConfirmPopupClose

> **API/props table for `ConfirmPopupClose` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ConfirmPopupClose` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

ConfirmPopup component uses `alertdialog` role. Attributes like `aria-label` or `aria-labelledby` can be passed to describe the popup contents. In addition `aria-modal` is added since focus is kept within the popup.

### Overlay Keyboard Support

| Key           | Function                                                                |
| ------------- | ----------------------------------------------------------------------- |
| `tab`         | Moves focus to the next focusable element within the confirm popup.     |
| `shift + tab` | Moves focus to the previous focusable element within the confirm popup. |
| `escape`      | Closes the popup and moves focus to the trigger.                        |

### Close Button Keyboard Support

| Key     | Function                                                              |
| ------- | --------------------------------------------------------------------- |
| `enter` | Triggers the action, closes the popup and moves focus to the trigger. |
| `space` | Triggers the action, closes the popup and moves focus to the trigger. |
