# Toast

Toast is a component that displays a message to the user.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { toast, Toaster } from '@/components/ui/toast';

function Preview() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
                onClick={() => {
                    toast({
                        title: 'Successfully completed',
                        description: 'The task was completed successfully. You can now view the details.',
                        group: 'tw-basic'
                    });
                }}
            >
                Create toast
            </Button>
            <Toaster group="tw-basic" />
        </div>
    );
}

export default Preview;

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/toast.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { toast, Toaster } from '@/components/ui/toast';
```

```tsx
<Toaster />
```

Trigger toasts from anywhere with `toast(...)` or one of the severity shortcuts (`toast.success`, `toast.info`, `toast.warn`, `toast.error`, `toast.secondary`, `toast.contrast`).

## Examples

### Basic

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { toast, Toaster } from '@/components/ui/toast';

function BasicDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
                onClick={() => {
                    toast({
                        title: 'Successfully completed',
                        description: 'The task was completed successfully. You can now view the details.',
                        group: 'basic'
                    });
                }}
                variant="outlined"
            >
                Create toast
            </Button>
            <Toaster group="basic" />
        </div>
    );
}

export default BasicDemo;

```

### Position

Use the `position` prop on `<Toaster>` to control where toasts appear.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { toast, Toaster } from '@/components/ui/toast';

function PositionDemo() {
    const createToast = (group: string) => {
        toast({
            title: 'Successfully completed',
            description: 'The task was completed successfully. You can now view the details.',
            group
        });
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={() => createToast('top-left')} variant="outlined">
                Top Left
            </Button>
            <Button onClick={() => createToast('top-center')} variant="outlined">
                Top Center
            </Button>
            <Button onClick={() => createToast('top-right')} variant="outlined">
                Top Right
            </Button>
            <Button onClick={() => createToast('bottom-left')} variant="outlined">
                Bottom Left
            </Button>
            <Button onClick={() => createToast('bottom-center')} variant="outlined">
                Bottom Center
            </Button>
            <Button onClick={() => createToast('bottom-right')} variant="outlined">
                Bottom Right
            </Button>

            <Toaster group="top-left" position="top-left" />
            <Toaster group="top-right" position="top-right" />
            <Toaster group="top-center" position="top-center" />
            <Toaster group="bottom-left" position="bottom-left" />
            <Toaster group="bottom-right" position="bottom-right" />
            <Toaster group="bottom-center" position="bottom-center" />
        </div>
    );
}

export default PositionDemo;

```

### Action

Add an interactive button to the toast with the `action` field.

```tsx
'use client';
import { Camera } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import { toast, Toaster } from '@/components/ui/toast';

function ActionDemo() {
    const handleCreateToast = () => {
        const id = toast({
            title: 'Allow camera access',
            description: 'We need access to your camera to scan QR codes.',
            icon: <Camera />,
            group: 'action',
            action: {
                children: 'Enable camera',
                onClick: () => {
                    toast.dismiss(id);
                    toast({
                        severity: 'success',
                        title: 'Camera access granted',
                        description: 'You can now scan QR codes.',
                        group: 'action'
                    });
                }
            }
        });
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={handleCreateToast} variant="outlined">
                Create toast with action
            </Button>
            <Toaster group="action" />
        </div>
    );
}

export default ActionDemo;

```

## toast function

`toast(options)` queues a toast and returns its id.

```tsx
const id = toast({ severity: 'success', title: 'Saved' });
```

### Severity shortcuts

Each severity has a shortcut that sets `severity` automatically:

```tsx
toast.success({ title: 'Saved' });
toast.info({ title: 'Heads up' });
toast.warn({ title: 'Check this' });
toast.error({ title: 'Failed' });
toast.secondary({ title: '...' });
toast.contrast({ title: '...' });
```

### Methods

```tsx
toast.dismiss(id); // dismiss specific toast
toast.dismiss(); // dismiss all
toast.update(id, options); // merge options into existing toast
toast.promise(p, { loading, success, error });
```

## Toast options

Any of these fields can be passed to `toast(...)` or its shortcuts.

| Field         | Type                                                                    | Description                                                                     |
| ------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `severity`    | `'info' \| 'success' \| 'warn' \| 'error' \| 'secondary' \| 'contrast'` | Visual severity. Defaults to `info`.                                            |
| `title`       | `ReactNode`                                                             | Main heading.                                                                   |
| `description` | `ReactNode`                                                             | Secondary text.                                                                 |
| `icon`        | `ReactNode`                                                             | Custom icon, overrides the matched `<Toast.Icon match="..." />` for this toast. |
| `action`      | `ButtonProps`                                                           | Props forwarded to `<ToastAction>` (e.g. `children`, `onClick`).                |
| `render`      | `ReactElement`                                                          | Replaces the default body with custom JSX.                                      |
| `duration`    | `number`                                                                | Auto-dismiss delay in ms. Pass `Infinity` to keep open.                         |
| `loading`     | `boolean`                                                               | Marks the toast as loading and disables auto-dismiss.                           |
| `dismissible` | `boolean`                                                               | If `false`, hides the close button and disables swipe-to-dismiss.               |
| `group`       | `string`                                                                | Scopes the toast to a specific `<Toaster group="..." />`.                       |
| `data`        | `Record<string, unknown>`                                               | Arbitrary metadata, available on the toast object and in callbacks.             |
| `onDismiss`   | `(toast) => void`                                                       | Called when dismissed by user (close button, swipe, or `dismiss(id)`).          |
| `onTimeout`   | `(toast) => void`                                                       | Called when `duration` elapses.                                                 |

## Accessibility

### Screen Reader

Toast component use alert role that implicitly defines `aria-live` as "assertive" and `aria-atomic` as "true".
