# Toast

An unstyled, accessible toast notification system with compound composition.

Build fully custom toast notifications with complete control over layout, animation, and styling.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Times } from '@primeicons/react/times';
import { Toast } from 'primereact/toast';
import { toast, Toaster, ToasterRegionInstance, ToastType } from 'primereact/toaster';
import styles from './basic-demo.module.css';

function BasicToast() {
    return (
        <Toaster.Root group="primitive-basic" icons={{ success: <Check />, danger: <Times />, warn: <ExclamationTriangle />, info: <InfoCircle /> }}>
            <Toaster.Portal>
                <Toaster.Region className={styles.region}>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((t: ToastType) => (
                            <Toast.Root key={t.id} toast={t} className={styles.toast}>
                                <div className={styles.content}>
                                    <Toast.Icon className={styles.icon} />
                                    <div>
                                        <Toast.Title className={styles.title} />
                                        <Toast.Description className={styles.description} />
                                    </div>
                                </div>
                                <Toast.Close className={styles.close}>
                                    <Times />
                                </Toast.Close>
                            </Toast.Root>
                        ))
                    }
                </Toaster.Region>
            </Toaster.Portal>
        </Toaster.Root>
    );
}

export default function BasicDemo() {
    return (
        <div className={styles.demo}>
            <button
                className={styles.button}
                onClick={() =>
                    toast.success({
                        title: 'Saved successfully',
                        description: 'Your changes have been saved.',
                        group: 'primitive-basic'
                    })
                }
            >
                Create toast
            </button>
            <BasicToast />
        </div>
    );
}
```

## Features

- Compound component API with two component groups: `Toaster` (Root, Portal, Region) and `Toast` (Root, Icon, Title, Description, Action, Close)
- Global `toast` function with variant methods (`success`, `danger`, `warn`, `info`, `loading`, `custom`, `promise`)
- Built-in swipe-to-dismiss with directional detection
- Stacked toast layout with expand-on-hover
- Auto-timeout with pause on hover, interaction, and document visibility

## Usage

```tsx
import { Toast } from 'primereact/toast';
import { Toaster, toast } from 'primereact/toaster';
```

```tsx
<Toaster.Root>
    <Toaster.Portal>
        <Toaster.Region>
            {({ toaster }) =>
                toaster?.toasts?.map((t) => (
                    <Toast.Root key={t.id} toast={t}>
                        <Toast.Icon />
                        <Toast.Title />
                        <Toast.Description />
                        <Toast.Action />
                        <Toast.Close />
                    </Toast.Root>
                ))
            }
        </Toaster.Region>
    </Toaster.Portal>
</Toaster.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element or use a custom React component.

```tsx
<Toast.Close as="div">...</Toast.Close>
<Toast.Action as={MyButton}>...</Toast.Action>
```

Default elements: `Toaster.Root`=`div`, `Toaster.Region`=`div`, `Toast.Root`=`div`, `Toast.Icon`=`span`, `Toast.Title`=`div`, `Toast.Description`=`div`, `Toast.Action`=`button`, `Toast.Close`=`button`.

### Render Function Children

`Toaster.Region` accepts a render function as children, providing access to the toaster instance for iterating over toasts.

```tsx
<Toaster.Region>
    {({ toaster }) =>
        toaster?.toasts?.map((t) => (
            <Toast.Root key={t.id} toast={t}>
                ...
            </Toast.Root>
        ))
    }
</Toaster.Region>
```

## Pass Through

**Pass Through example:**

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';

export default function ToastPTDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Toast.Root className="hidden" toast={{ id: 'demo' }} />
            <Button className="hidden" />
            <div
                data-scope="toast"
                data-part="root"
                tabIndex={0}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                aria-hidden="false"
                data-id="pc__r_5o_"
                data-index="0"
                data-visible=""
                data-dismissible=""
                data-front=""
                id="pr_id__r_5n_"
                className="w-1/6 bg-surface-0 dark:bg-surface-900 p-4 rounded-md w-[400px]"
                data-slot="root"
                data-mounted=""
            >
                <div className="grid grid-cols-[auto_1fr] items-start">
                    <div>
                        <div
                            className="p-toast-title flex justify-between items-center"
                            data-scope="toast"
                            data-part="title"
                            data-slot="root"
                            data-id="pc__r_5u_"
                        >
                            <p>Successfully completed</p>
                            <button
                                data-scope="toast"
                                data-part="close"
                                id="pr_id__r_63_"
                                className="p-button p-component p-button-icon-only p-button-secondary p-button-text p-button-sm p-toast-close"
                                data-slot="root"
                                data-id="pc__r_64_"
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
                        <div className="p-toast-description mt-1" data-scope="toast" data-part="description" data-slot="root" data-id="pc__r_60_">
                            The task was completed successfully. You can now view the details.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

## API

### ToasterRoot

> **API/props table for `ToasterRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                  |
| --------------- | ---------------------- |
| `data-position` | Current position value |

### ToasterRegion

> **API/props table for `ToasterRegion` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                           |
| --------------- | ------------------------------- |
| `data-position` | Current position value          |
| `data-expanded` | Present when region is expanded |

**CSS Custom Properties**

The `Toaster.Region` element sets CSS custom properties on its `style` for toast layout spacing.

| CSS Variable           | Description                             |
| ---------------------- | --------------------------------------- |
| `--gap`                | Vertical gap between toasts in pixels   |
| `--front-toast-height` | Height of the frontmost toast in pixels |

### ToasterPortal

> **API/props table for `ToasterPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ToastRoot

> **API/props table for `ToastRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute              | Value                                           |
| ---------------------- | ----------------------------------------------- |
| `data-variant`         | Toast variant (`success`, `danger`, etc.)       |
| `data-index`           | Toast index in the stack                        |
| `data-id`              | Toast identifier                                |
| `data-mounted`         | Present after initial render                    |
| `data-removed`         | Present during exit animation                   |
| `data-visible`         | Present when within the visible limit           |
| `data-front`           | Present on the frontmost toast                  |
| `data-expanded`        | Present when toaster is expanded                |
| `data-swiping`         | Present during active swipe                     |
| `data-swiped`          | Present after swipe delta exceeds zero          |
| `data-swipe-out`       | Present after swipe threshold exceeded          |
| `data-swipe-direction` | Swipe direction (`left`, `right`, `up`, `down`) |
| `data-dismissible`     | Present when toast is dismissible               |
| `data-rich-colors`     | Present when rich colors are enabled            |

**CSS Custom Properties**

The `Toast.Root` element sets CSS custom properties on its `style` for swipe gestures and stacked positioning.

| CSS Variable       | Description                                  |
| ------------------ | -------------------------------------------- |
| `--initial-height` | Initial height of the toast before animation |
| `--toast-index`    | Index of the toast in the stack              |
| `--toast-z-index`  | Z-index stacking order for the toast         |
| `--toast-offset`   | Vertical offset position in pixels           |
| `--swipe-amount-x` | Horizontal swipe distance in pixels          |
| `--swipe-amount-y` | Vertical swipe distance in pixels            |

> **API/props table for `ToastRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ToastTitle

> **API/props table for `ToastTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute      | Value                                     |
| -------------- | ----------------------------------------- |
| `data-variant` | Toast variant (`success`, `danger`, etc.) |

> **API/props table for `ToastTitle` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ToastDescription

> **API/props table for `ToastDescription` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute      | Value                                     |
| -------------- | ----------------------------------------- |
| `data-variant` | Toast variant (`success`, `danger`, etc.) |

> **API/props table for `ToastDescription` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ToastIcon

> **API/props table for `ToastIcon` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute      | Value                                     |
| -------------- | ----------------------------------------- |
| `data-variant` | Toast variant (`success`, `danger`, etc.) |

> **API/props table for `ToastIcon` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ToastAction

> **API/props table for `ToastAction` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute      | Value                                     |
| -------------- | ----------------------------------------- |
| `data-variant` | Toast variant (`success`, `danger`, etc.) |

> **API/props table for `ToastAction` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ToastClose

> **API/props table for `ToastClose` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute      | Value                                     |
| -------------- | ----------------------------------------- |
| `data-variant` | Toast variant (`success`, `danger`, etc.) |

> **API/props table for `ToastClose` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ToastRegion

> **API/props table for `ToastRegion` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ToastItem

> **API/props table for `ToastItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Toast uses `role="alert"` which implicitly sets `aria-live` to `assertive` and `aria-atomic` to `true`, ensuring screen readers announce toast content immediately. The toaster region uses `role="region"` with `tabIndex="0"` to allow keyboard navigation to the toast area.

Non-visible toasts are marked with `aria-hidden="true"` and `inert` to prevent screen reader interaction.

### Keyboard Support

| Key     | Function                                            |
| ------- | --------------------------------------------------- |
| `tab`   | Moves focus into or out of the toast region.        |
| `enter` | Activates the focused toast action or close button. |
| `space` | Activates the focused toast action or close button. |
