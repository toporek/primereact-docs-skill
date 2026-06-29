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
        <Toaster.Root group="primitive-basic">
            <Toaster.Portal>
                <Toaster.Region className={styles.region}>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((t: ToastType) => (
                            <Toast.Root key={t.id} toast={t} className={styles.toast}>
                                <Toast.Content className={styles.body}>
                                    <Toast.Icon match="success">
                                        <Check />
                                    </Toast.Icon>
                                    <Toast.Icon match="error">
                                        <Times />
                                    </Toast.Icon>
                                    <Toast.Icon match="warn">
                                        <ExclamationTriangle />
                                    </Toast.Icon>
                                    <Toast.Icon match="info">
                                        <InfoCircle />
                                    </Toast.Icon>
                                    <Toast.Message className={styles.content}>
                                        <Toast.Title className={styles.title} />
                                        <Toast.Description className={styles.description} />
                                    </Toast.Message>
                                </Toast.Content>
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
                    toast({
                        severity: 'success',
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

- Compound API: `Toaster` (`Root`, `Portal`, `Region`) and `Toast` (`Root`, `Content`, `Icon`, `Message`, `Title`, `Description`, `Action`, `Close`)
- Severity-aware icon rendering via `<Toast.Icon match="...">`
- Global `toast` function with severity shortcuts (`success`, `info`, `warn`, `error`, `secondary`, `contrast`) plus `update`, `dismiss`, `promise`
- Swipe-to-dismiss with directional detection
- Stacked layout with expand-on-hover
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
                        <Toast.Content>
                            <Toast.Icon match="success">
                                <Check />
                            </Toast.Icon>
                            <Toast.Icon match="error">
                                <Times />
                            </Toast.Icon>
                            <Toast.Icon match="warn">
                                <ExclamationTriangle />
                            </Toast.Icon>
                            <Toast.Icon match="info">
                                <InfoCircle />
                            </Toast.Icon>
                            <Toast.Message>
                                <Toast.Title />
                                <Toast.Description />
                                <Toast.Action />
                            </Toast.Message>
                            <Toast.Close />
                        </Toast.Content>
                    </Toast.Root>
                ))
            }
        </Toaster.Region>
    </Toaster.Portal>
</Toaster.Root>
```

## Behavior

### Icon matching

`<Toast.Icon match="severity">` renders only for toasts of that severity. A `<Toast.Icon />` without a `match` prop is the catch-all, it renders when the toast has no `severity` (e.g. a loading toast in `toast.promise`). A custom `icon` passed to `toast({ icon })` overrides the matched block's children.

```tsx
<Toast.Icon /> {/* catch-all (no severity) */}
<Toast.Icon match="success"><Check /></Toast.Icon>
<Toast.Icon match="error"><Times /></Toast.Icon>
```

### Polymorphic rendering

Use `as` on any sub-component to swap the rendered HTML element or render a custom React component.

```tsx
<Toast.Close as="div">...</Toast.Close>
<Toast.Action as={MyButton}>...</Toast.Action>
```

Defaults: `Toaster.Root`=`div`, `Toaster.Region`=`div`, `Toast.Root`=`li`, `Toast.Content`=`div`, `Toast.Message`=`div`, `Toast.Icon`=`span`, `Toast.Title`=`div`, `Toast.Description`=`div`, `Toast.Action`=`button`, `Toast.Close`=`button`.

### Render function children

`Toaster.Region` accepts a render function as children, exposing the toaster instance for iterating over toasts.

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

## API

### ToasterRoot

> **`ToasterRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toast or the installed `@primereact/types`.

| Attribute       | Value                  |
| --------------- | ---------------------- |
| `data-position` | Current position value |

### ToasterRegion

> **`ToasterRegion` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toast or the installed `@primereact/types`.

| Attribute       | Value                           |
| --------------- | ------------------------------- |
| `data-position` | Current position value          |
| `data-expanded` | Present when region is expanded |

**CSS custom properties**, set on the `Toaster.Region` style for toast layout spacing.

| Variable               | Description                             |
| ---------------------- | --------------------------------------- |
| `--gap`                | Vertical gap between toasts in pixels   |
| `--front-toast-height` | Height of the frontmost toast in pixels |

### ToasterPortal

> **`ToasterPortal` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toast or the installed `@primereact/types`.

### ToastRoot

> **`ToastRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toast or the installed `@primereact/types`.

| Attribute              | Value                                           |
| ---------------------- | ----------------------------------------------- |
| `data-id`              | Toast identifier                                |
| `data-index`           | Toast index in the stack                        |
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

**CSS custom properties**, set on the `Toast.Root` style for swipe gestures and stacked positioning.

| Variable           | Description                                  |
| ------------------ | -------------------------------------------- |
| `--initial-height` | Initial height of the toast before animation |
| `--toast-index`    | Index of the toast in the stack              |
| `--toast-z-index`  | Z-index stacking order for the toast         |
| `--toast-offset`   | Vertical offset position in pixels           |
| `--swipe-amount-x` | Horizontal swipe distance in pixels          |
| `--swipe-amount-y` | Vertical swipe distance in pixels            |

| Label | Type | Description |
|:------|:------|:------|
| root | ToastRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| body | ToastRootPassThroughType> | Used to pass attributes to the body's DOM element. |
| content | ToastRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| icon | ToastRootPassThroughType> | Used to pass attributes to the icon's DOM element. |
| title | ToastRootPassThroughType> | Used to pass attributes to the title's DOM element. |
| description | ToastRootPassThroughType> | Used to pass attributes to the description's DOM element. |
| action | ToastRootPassThroughType> | Used to pass attributes to the action button's DOM element. |
| close | ToastRootPassThroughType> | Used to pass attributes to the close button's DOM element. |

### ToastContent

> **`ToastContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toast or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ToastContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### ToastMessage

> **`ToastMessage` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toast or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ToastMessagePassThroughType> | Used to pass attributes to the root's DOM element. |

### ToastTitle

> **`ToastTitle` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toast or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ToastTitlePassThroughType> | Used to pass attributes to the root's DOM element. |

### ToastDescription

> **`ToastDescription` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toast or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ToastDescriptionPassThroughType> | Used to pass attributes to the root's DOM element. |

### ToastIcon

> **`ToastIcon` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toast or the installed `@primereact/types`.

The `match` prop restricts rendering to a specific severity. Use `'always'` (or omit `match`) for the catch-all.

| Label | Type | Description |
|:------|:------|:------|
| root | ToastIconPassThroughType> | Used to pass attributes to the root's DOM element. |

### ToastAction

> **`ToastAction` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toast or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ToastActionPassThroughType> | Used to pass attributes to the root's DOM element. |

### ToastClose

> **`ToastClose` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toast or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ToastClosePassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen reader

Toast uses `role="alert"`, which implicitly sets `aria-live` to `assertive` and `aria-atomic` to `true`, screen readers announce toast content immediately. The toaster region uses `role="region"` with `tabIndex="0"` so keyboard users can move focus into the toast area. Non-visible toasts are marked with `aria-hidden="true"` and `inert` to prevent screen reader interaction.

### Keyboard support

| Key     | Function                                            |
| ------- | --------------------------------------------------- |
| `tab`   | Moves focus into or out of the toast region.        |
| `enter` | Activates the focused toast action or close button. |
| `space` | Activates the focused toast action or close button. |
