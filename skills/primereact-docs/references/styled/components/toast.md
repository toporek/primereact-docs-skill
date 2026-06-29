# Toast

Toast is a component that displays a message to the user.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { toast, Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from '@primereact/ui/toaster';

function BasicToast() {
    return (
        <Toaster.Root group="basic">
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast}>
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
                                        <Toast.Action as={Button} size="small" className="mt-3" />
                                    </Toast.Message>
                                    <Toast.Close>
                                        <Times />
                                    </Toast.Close>
                                </Toast.Content>
                            </Toast.Root>
                        ))
                    }
                </Toaster.Region>
            </Toaster.Portal>
        </Toaster.Root>
    );
}

function Preview() {
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
            >
                Create toast
            </Button>
            <BasicToast />
        </div>
    );
}

export default Preview;

```

## Usage

```tsx
import { Toast } from '@primereact/ui/toast';
import { Toaster, toast } from '@primereact/ui/toaster';
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

Trigger toasts from anywhere with `toast(...)` or one of the severity shortcuts (`toast.success`, `toast.info`, `toast.warn`, `toast.error`, `toast.secondary`, `toast.contrast`).

## Examples

### Severity

Six built-in severities: `info`, `success`, `warn`, `error`, `secondary`, `contrast`. Pass `severity` directly or use the shortcut method.

```tsx
toast({ severity: 'success', title: 'Saved' });
toast.success({ title: 'Saved' });
```

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/ui/toaster';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from '@primereact/ui/toaster';

function SeverityToast() {
    return (
        <Toaster.Root group="severity">
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast}>
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
                                    <Toast.Icon match="secondary">
                                        <InfoCircle />
                                    </Toast.Icon>
                                    <Toast.Icon match="contrast">
                                        <InfoCircle />
                                    </Toast.Icon>
                                    <Toast.Message>
                                        <Toast.Title />
                                        <Toast.Description />
                                    </Toast.Message>
                                    <Toast.Close>
                                        <Times />
                                    </Toast.Close>
                                </Toast.Content>
                            </Toast.Root>
                        ))
                    }
                </Toaster.Region>
            </Toaster.Portal>
        </Toaster.Root>
    );
}

function SeverityDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
                onClick={() =>
                    toast.info({
                        title: 'Heads up',
                        description: 'There’s something you might want to check.',
                        group: 'severity'
                    })
                }
                variant="outlined"
                severity="info"
            >
                Info
            </Button>

            <Button
                onClick={() =>
                    toast.success({
                        title: 'Saved successfully',
                        description: 'Your changes have been saved.',
                        group: 'severity'
                    })
                }
                variant="outlined"
                severity="success"
            >
                Success
            </Button>

            <Button
                onClick={() =>
                    toast.warn({
                        title: 'Check this',
                        description: 'Some fields may need your attention.',
                        group: 'severity'
                    })
                }
                variant="outlined"
                severity="warn"
            >
                Warn
            </Button>

            <Button
                onClick={() =>
                    toast.error({
                        title: 'Something went wrong',
                        description: 'We couldn’t complete the action. Please try again.',
                        group: 'severity'
                    })
                }
                variant="outlined"
                severity="danger"
            >
                Error
            </Button>

            <Button
                onClick={() =>
                    toast.secondary({
                        title: 'For your information',
                        description: 'This is a secondary toast message.',
                        group: 'severity'
                    })
                }
                variant="outlined"
                severity="secondary"
            >
                Secondary
            </Button>

            <Button
                onClick={() =>
                    toast.contrast({
                        title: 'High contrast',
                        description: 'This is a contrast toast message.',
                        group: 'severity'
                    })
                }
                variant="outlined"
                severity="contrast"
            >
                Contrast
            </Button>

            <SeverityToast />
        </div>
    );
}

export default SeverityDemo;

```

### Promise

`toast.promise` ties a toast to a promise, show a loading state, then transition to success or error based on the outcome.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Spinner } from '@primeicons/react/spinner';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/ui/toaster';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from '@primereact/ui/toaster';

function PromiseToast() {
    return (
        <Toaster.Root group="promise">
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast}>
                                <Toast.Content>
                                    <Toast.Icon />
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
                                    </Toast.Message>
                                    <Toast.Close>
                                        <Times />
                                    </Toast.Close>
                                </Toast.Content>
                            </Toast.Root>
                        ))
                    }
                </Toaster.Region>
            </Toaster.Portal>
        </Toaster.Root>
    );
}

function PromiseDemo() {
    function handleToastPromise() {
        function fakeApiCall(): Promise<string> {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const random = Math.random();

                    if (random < 0.5) {
                        resolve('Success!');
                    } else {
                        reject(new Error('Something went wrong'));
                    }
                }, 2000);
            });
        }

        toast.promise(fakeApiCall(), {
            loading: {
                title: 'Please wait...',
                description: 'Your request is being processed. This may take a moment.',
                icon: <Spinner className="animate-spin" />,
                group: 'promise'
            },
            success: (result) => ({
                title: 'Success!',
                description: `${result}. Everything went smoothly. Thank you for your patience.`,
                group: 'promise'
            }),
            error: (error: unknown) => ({
                title: 'Oops, something went wrong',
                description: `Error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or contact support if the problem persists.`,
                group: 'promise'
            })
        });
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={handleToastPromise} variant="outlined">
                Run promise
            </Button>
            <PromiseToast />
        </div>
    );
}

export default PromiseDemo;

```

### Update

`toast.update(id, options)` merges new options into an existing toast, useful for turning a loading toast into a result.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/ui/toaster';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from '@primereact/ui/toaster';

function UpdateToast() {
    return (
        <Toaster.Root group="update">
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast}>
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
                                    </Toast.Message>
                                    <Toast.Close>
                                        <Times />
                                    </Toast.Close>
                                </Toast.Content>
                            </Toast.Root>
                        ))
                    }
                </Toaster.Region>
            </Toaster.Portal>
        </Toaster.Root>
    );
}

function UpdateDemo() {
    const handleUpdateToast = () => {
        const id = toast({
            loading: true,
            title: 'Loading…',
            description: 'Please wait while we process your request.',
            group: 'update'
        });

        setTimeout(() => {
            toast.update(id, {
                severity: 'success',
                loading: false,
                title: 'Completed',
                description: 'Your request has been processed successfully.'
            });
        }, 2000);
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={handleUpdateToast} variant="outlined">
                Update toast
            </Button>
            <UpdateToast />
        </div>
    );
}

export default UpdateDemo;

```

### Sticky

Pass `duration: Infinity` to keep a toast open until it is dismissed manually. To make every toast sticky by default, set the `timeout` prop on `Toaster` to `Infinity` instead of per toast.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/ui/toaster';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from '@primereact/ui/toaster';

function StickyToast() {
    return (
        <Toaster.Root group="sticky">
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast}>
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
                                    </Toast.Message>
                                    <Toast.Close>
                                        <Times />
                                    </Toast.Close>
                                </Toast.Content>
                            </Toast.Root>
                        ))
                    }
                </Toaster.Region>
            </Toaster.Portal>
        </Toaster.Root>
    );
}

function StickyDemo() {
    const handleCreate = () => {
        toast({
            severity: 'info',
            title: 'Sticky toast',
            description: 'This toast stays until you dismiss it manually.',
            group: 'sticky',
            duration: Infinity
        });
    };

    const handleDismiss = () => {
        toast.dismiss();
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={handleCreate} variant="outlined">
                Create toast
            </Button>
            <Button onClick={handleDismiss} variant="outlined" severity="secondary">
                Dismiss toast
            </Button>
            <StickyToast />
        </div>
    );
}

export default StickyDemo;

```

### Custom

Pass `render` to replace the default body with custom JSX. The root wrapper (positioning, animation, swipe) is preserved.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/ui/toaster';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from '@primereact/ui/toaster';

function CustomToast() {
    return (
        <Toaster.Root group="custom">
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast} className={toast.data?.className as string | undefined}>
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
                                    </Toast.Message>
                                    <Toast.Close>
                                        <Times />
                                    </Toast.Close>
                                </Toast.Content>
                            </Toast.Root>
                        ))
                    }
                </Toaster.Region>
            </Toaster.Portal>
        </Toaster.Root>
    );
}

function CustomDemo() {
    function handleCustomToast() {
        const id = toast({
            group: 'custom',
            data: { className: 'bg-surface-0! dark:bg-surface-900! border-surface!' },
            render: (
                <div className="space-y-2 p-3">
                    <div>
                        <h1 className="text-sm font-medium text-surface-900 dark:text-surface-0 leading-6">
                            Purchase complete!{' '}
                            <a href="/orders/123" className="underline! hover:opacity-75">
                                View receipt
                            </a>
                        </h1>
                        <p className="text-surface-500 mt-1 text-sm">
                            Your order is being processed. Track all orders or{' '}
                            <a href="/support/returns" className="underline! hover:opacity-75">
                                learn about returns
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center mt-3 gap-2">
                        <button
                            onClick={() => toast.dismiss(id)}
                            className="font-medium px-2 py-1.5 text-xs rounded-md border border-surface-200 dark:border-surface-700 hover:bg-surface-50 active:bg-surface-100 dark:hover:bg-surface-800 dark:active:bg-surface-700 text-surface-500 dark:text-surface-400"
                        >
                            Dismiss
                        </button>
                        <button
                            onClick={() => toast.dismiss(id)}
                            className="font-medium px-2 py-1.5 text-xs rounded-md border border-indigo-500/25 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/75 dark:hover:bg-indigo-950 text-indigo-500 dark:text-indigo-400"
                        >
                            Track all orders
                        </button>
                    </div>
                </div>
            )
        });
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={handleCustomToast} variant="outlined">
                Custom toast
            </Button>
            <CustomToast />
        </div>
    );
}

export default CustomDemo;

```

### Position

Use the `position` prop on `<Toaster.Root>` to control where toasts appear.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/ui/toaster';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from '@primereact/ui/toaster';

function PositionToast({
    position = 'bottom-right'
}: {
    position: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center' | 'center';
}) {
    return (
        <Toaster.Root position={position} group={position}>
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast}>
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
                                        <Toast.Action as={Button} size="small" className="mt-3" />
                                    </Toast.Message>
                                    <Toast.Close>
                                        <Times />
                                    </Toast.Close>
                                </Toast.Content>
                            </Toast.Root>
                        ))
                    }
                </Toaster.Region>
            </Toaster.Portal>
        </Toaster.Root>
    );
}

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
            <Button onClick={() => createToast('center')} variant="outlined">
                Center
            </Button>

            <PositionToast position="top-left" />
            <PositionToast position="top-right" />
            <PositionToast position="top-center" />
            <PositionToast position="bottom-left" />
            <PositionToast position="bottom-right" />
            <PositionToast position="bottom-center" />
            <PositionToast position="center" />
        </div>
    );
}

export default PositionDemo;

```

### Expanded Mode

`mode="expanded"` always renders the stack expanded; the default stacks toasts collapsed and expands on hover.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { toast, Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from '@primereact/ui/toaster';

function ExpandedModeToast() {
    return (
        <Toaster.Root mode="expanded" limit={7} group="expanded-mode">
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast}>
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
                                        <Toast.Action as={Button} size="small" className="mt-3" />
                                    </Toast.Message>
                                    <Toast.Close>
                                        <Times />
                                    </Toast.Close>
                                </Toast.Content>
                            </Toast.Root>
                        ))
                    }
                </Toaster.Region>
            </Toaster.Portal>
        </Toaster.Root>
    );
}

function ExpandedModeDemo() {
    const createToast = () => {
        toast({
            title: 'Successfully completed',
            description: 'The task was completed successfully. You can now view the details.',
            group: 'expanded-mode'
        });
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={createToast} variant="outlined">
                Create toast
            </Button>
            <ExpandedModeToast />
        </div>
    );
}

export default ExpandedModeDemo;

```

### Action

Add an interactive button to the toast with the `action` field.

```tsx
'use client';
import { Camera } from '@primeicons/react/camera';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/ui/toaster';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from '@primereact/ui/toaster';

function ActionToast() {
    return (
        <Toaster.Root group="action">
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast}>
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
                                        <Toast.Action as={Button} size="small" className="mt-3" />
                                    </Toast.Message>
                                </Toast.Content>
                            </Toast.Root>
                        ))
                    }
                </Toaster.Region>
            </Toaster.Portal>
        </Toaster.Root>
    );
}

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
            <ActionToast />
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
| `action`      | `ButtonProps`                                                           | Props forwarded to `<Toast.Action>` (e.g. `children`, `onClick`).               |
| `render`      | `ReactElement`                                                          | Replaces the default body with custom JSX.                                      |
| `duration`    | `number`                                                                | Auto-dismiss delay in ms. Pass `Infinity` to keep open.                         |
| `loading`     | `boolean`                                                               | Marks the toast as loading and disables auto-dismiss.                           |
| `dismissible` | `boolean`                                                               | If `false`, hides the close button and disables swipe-to-dismiss.               |
| `group`       | `string`                                                                | Scopes the toast to a specific `<Toaster.Root group="..." />`.                  |
| `data`        | `Record<string, unknown>`                                               | Arbitrary metadata, available on the toast object and in callbacks.             |
| `onDismiss`   | `(toast) => void`                                                       | Called when dismissed by user (close button, swipe, or `dismiss(id)`).          |
| `onTimeout`   | `(toast) => void`                                                       | Called when `duration` elapses.                                                 |

## Related

### Sub-Components

See [Toast Primitive API](../../primitive/components/toast.md#api) for the full sub-component API reference.

### Hooks

See [Toast Headless API](../../headless/components/toast.md#api) for the hook API reference.

### Accessibility

See [Toast Primitive](../../primitive/components/toast.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-toast p-component | Class name of the root element |
| p-toast-icon | Class name of the icon element |
| p-toast-title | Class name of the title element |
| p-toast-description | Class name of the description element |
| p-toast-action | Class name of the action element |
| p-toast-close | Class name of the close element |
| p-toast-progress | Class name of the progress element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| toast.width | --p-toast-width | Width of root |
| toast.border.radius | --p-toast-border-radius | Border radius of root |
| toast.border.width | --p-toast-border-width | Border width of root |
| toast.transition.duration | --p-toast-transition-duration | Transition duration of root |
| toast.blur | --p-toast-blur | Used to pass tokens of the blur section |
| toast.focus.ring.width | --p-toast-focus-ring-width | Focus ring width of root |
| toast.focus.ring.style | --p-toast-focus-ring-style | Focus ring style of root |
| toast.focus.ring.color | --p-toast-focus-ring-color | Focus ring color of root |
| toast.focus.ring.offset | --p-toast-focus-ring-offset | Focus ring offset of root |
| toast.focus.ring.shadow | --p-toast-focus-ring-shadow | Focus ring shadow of root |
| toast.icon.size | --p-toast-icon-size | Size of icon |
| toast.icon.margin | --p-toast-icon-margin | Margin of icon |
| toast.content.padding | --p-toast-content-padding | Padding of content |
| toast.content.gap | --p-toast-content-gap | Gap of content |
| toast.text.gap | --p-toast-text-gap | Gap of text |
| toast.summary.font.weight | --p-toast-summary-font-weight | Font weight of summary |
| toast.summary.font.size | --p-toast-summary-font-size | Font size of summary |
| toast.detail.font.weight | --p-toast-detail-font-weight | Font weight of detail |
| toast.detail.font.size | --p-toast-detail-font-size | Font size of detail |
| toast.close.button.width | --p-toast-close-button-width | Width of close button |
| toast.close.button.height | --p-toast-close-button-height | Height of close button |
| toast.close.button.border.radius | --p-toast-close-button-border-radius | Border radius of close button |
| toast.close.button.focus.ring.width | --p-toast-close-button-focus-ring-width | Focus ring width of close button |
| toast.close.button.focus.ring.style | --p-toast-close-button-focus-ring-style | Focus ring style of close button |
| toast.close.button.focus.ring.offset | --p-toast-close-button-focus-ring-offset | Focus ring offset of close button |
| toast.close.icon.size | --p-toast-close-icon-size | Size of close icon |
| toast.normal.background | --p-toast-normal-background | Background of normal |
| toast.normal.border.color | --p-toast-normal-border-color | Border color of normal |
| toast.normal.color | --p-toast-normal-color | Color of normal |
| toast.normal.detail.color | --p-toast-normal-detail-color | Detail color of normal |
| toast.normal.shadow | --p-toast-normal-shadow | Shadow of normal |
| toast.normal.close.button.hover.background | --p-toast-normal-close-button-hover-background | Close button hover background of normal |
| toast.normal.close.button.focus.ring.color | --p-toast-normal-close-button-focus-ring-color | Close button focus ring color of normal |
| toast.normal.close.button.focus.ring.shadow | --p-toast-normal-close-button-focus-ring-shadow | Close button focus ring shadow of normal |
| toast.info.background | --p-toast-info-background | Background of info |
| toast.info.border.color | --p-toast-info-border-color | Border color of info |
| toast.info.color | --p-toast-info-color | Color of info |
| toast.info.detail.color | --p-toast-info-detail-color | Detail color of info |
| toast.info.shadow | --p-toast-info-shadow | Shadow of info |
| toast.info.close.button.hover.background | --p-toast-info-close-button-hover-background | Close button hover background of info |
| toast.info.close.button.focus.ring.color | --p-toast-info-close-button-focus-ring-color | Close button focus ring color of info |
| toast.info.close.button.focus.ring.shadow | --p-toast-info-close-button-focus-ring-shadow | Close button focus ring shadow of info |
| toast.success.background | --p-toast-success-background | Background of success |
| toast.success.border.color | --p-toast-success-border-color | Border color of success |
| toast.success.color | --p-toast-success-color | Color of success |
| toast.success.detail.color | --p-toast-success-detail-color | Detail color of success |
| toast.success.shadow | --p-toast-success-shadow | Shadow of success |
| toast.success.close.button.hover.background | --p-toast-success-close-button-hover-background | Close button hover background of success |
| toast.success.close.button.focus.ring.color | --p-toast-success-close-button-focus-ring-color | Close button focus ring color of success |
| toast.success.close.button.focus.ring.shadow | --p-toast-success-close-button-focus-ring-shadow | Close button focus ring shadow of success |
| toast.warn.background | --p-toast-warn-background | Background of warn |
| toast.warn.border.color | --p-toast-warn-border-color | Border color of warn |
| toast.warn.color | --p-toast-warn-color | Color of warn |
| toast.warn.detail.color | --p-toast-warn-detail-color | Detail color of warn |
| toast.warn.shadow | --p-toast-warn-shadow | Shadow of warn |
| toast.warn.close.button.hover.background | --p-toast-warn-close-button-hover-background | Close button hover background of warn |
| toast.warn.close.button.focus.ring.color | --p-toast-warn-close-button-focus-ring-color | Close button focus ring color of warn |
| toast.warn.close.button.focus.ring.shadow | --p-toast-warn-close-button-focus-ring-shadow | Close button focus ring shadow of warn |
| toast.error.background | --p-toast-error-background | Background of error |
| toast.error.border.color | --p-toast-error-border-color | Border color of error |
| toast.error.color | --p-toast-error-color | Color of error |
| toast.error.detail.color | --p-toast-error-detail-color | Detail color of error |
| toast.error.shadow | --p-toast-error-shadow | Shadow of error |
| toast.error.close.button.hover.background | --p-toast-error-close-button-hover-background | Close button hover background of error |
| toast.error.close.button.focus.ring.color | --p-toast-error-close-button-focus-ring-color | Close button focus ring color of error |
| toast.error.close.button.focus.ring.shadow | --p-toast-error-close-button-focus-ring-shadow | Close button focus ring shadow of error |
| toast.secondary.background | --p-toast-secondary-background | Background of secondary |
| toast.secondary.border.color | --p-toast-secondary-border-color | Border color of secondary |
| toast.secondary.color | --p-toast-secondary-color | Color of secondary |
| toast.secondary.detail.color | --p-toast-secondary-detail-color | Detail color of secondary |
| toast.secondary.shadow | --p-toast-secondary-shadow | Shadow of secondary |
| toast.secondary.close.button.hover.background | --p-toast-secondary-close-button-hover-background | Close button hover background of secondary |
| toast.secondary.close.button.focus.ring.color | --p-toast-secondary-close-button-focus-ring-color | Close button focus ring color of secondary |
| toast.secondary.close.button.focus.ring.shadow | --p-toast-secondary-close-button-focus-ring-shadow | Close button focus ring shadow of secondary |
| toast.contrast.background | --p-toast-contrast-background | Background of contrast |
| toast.contrast.border.color | --p-toast-contrast-border-color | Border color of contrast |
| toast.contrast.color | --p-toast-contrast-color | Color of contrast |
| toast.contrast.detail.color | --p-toast-contrast-detail-color | Detail color of contrast |
| toast.contrast.shadow | --p-toast-contrast-shadow | Shadow of contrast |
| toast.contrast.close.button.hover.background | --p-toast-contrast-close-button-hover-background | Close button hover background of contrast |
| toast.contrast.close.button.focus.ring.color | --p-toast-contrast-close-button-focus-ring-color | Close button focus ring color of contrast |
| toast.contrast.close.button.focus.ring.shadow | --p-toast-contrast-close-button-focus-ring-shadow | Close button focus ring shadow of contrast |
