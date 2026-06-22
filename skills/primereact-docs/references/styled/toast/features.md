# Toast

Toast is a component that displays a message to the user.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Spinner } from '@primeicons/react/spinner';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { toast, Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from 'primereact/toaster';

function BasicToast() {
    return (
        <Toaster.Root
            group="basic"
            icons={{ success: <Check />, danger: <Times />, warn: <ExclamationTriangle />, info: <InfoCircle />, loading: <Spinner /> }}
        >
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast}>
                                <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                                    <Toast.Icon className="[&>svg]:size-3.5 mt-1 " />
                                    <div>
                                        <Toast.Title />
                                        <Toast.Description className="mt-1" />
                                        <Toast.Action as={Button} size="small" className="mt-3" />
                                    </div>
                                </div>
                                <Toast.Close
                                    as={Button}
                                    iconOnly
                                    severity={'secondary'}
                                    variant="text"
                                    size="small"
                                    className={'absolute top-2 right-2'}
                                >
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
                variant="outlined"
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
                toaster?.toasts?.map((toast) => (
                    <Toast.Root key={toast.id} toast={toast}>
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

## Examples

### Variants

Use `toast` function to create a toast with different variants.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Spinner } from '@primeicons/react/spinner';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/headless/toaster';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from 'primereact/toaster';

function VariantsToast() {
    return (
        <Toaster.Root
            group="variants"
            icons={{ success: <Check />, danger: <Times />, warn: <ExclamationTriangle />, info: <InfoCircle />, loading: <Spinner /> }}
        >
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast}>
                                <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                                    <Toast.Icon className="[&>svg]:size-3.5 mt-1" />
                                    <div>
                                        <Toast.Title />
                                        <Toast.Description className="mt-1" />
                                        <Toast.Action as={Button} size="small" className="mt-3" />
                                    </div>
                                </div>
                                <Toast.Close
                                    as={Button}
                                    iconOnly
                                    severity={'secondary'}
                                    variant="text"
                                    size="small"
                                    className={'absolute top-2 right-2'}
                                >
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

function VariantsDemo() {
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
                group: 'variants'
            },
            success: (result) => ({
                title: 'Success!',
                description: `${result}. Everything went smoothly. Thank you for your patience.`,
                group: 'variants'
            }),
            error: (error: unknown) => ({
                title: 'Oops, something went wrong',
                description: `Error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or contact support if the problem persists.`,
                group: 'variants'
            })
        });
    }

    function handleCustomToast() {
        const id = toast.custom(
            <div className="space-y-2">
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
                <div className="flex items-center mt-2 gap-2">
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
            </div>,
            {
                group: 'variants'
            }
        );
    }

    const handleLoadingToast = () => {
        const id = toast.loading({
            title: 'Loading...',
            description: 'Please wait while we process your request.',
            group: 'variants'
        });

        setTimeout(() => {
            toast.success({
                id,
                title: 'Completed',
                description: 'Your request has been processed successfully.',
                group: 'variants'
            });
        }, 2000);
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
                onClick={() => {
                    toast({
                        title: 'Update available',
                        description: 'A new version is ready to use.',
                        group: 'variants'
                    });
                }}
                variant="outlined"
            >
                Default
            </Button>

            <Button
                onClick={() => {
                    toast.info({
                        title: 'Heads up',
                        description: 'There’s something you might want to check.',
                        group: 'variants'
                    });
                }}
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
                        group: 'variants'
                    })
                }
                variant="outlined"
                severity="success"
            >
                Success
            </Button>

            <Button
                onClick={() =>
                    toast.danger({
                        title: 'Something went wrong',
                        description: 'We couldn’t complete the action. Please try again.',
                        group: 'variants'
                    })
                }
                variant="outlined"
                severity="danger"
            >
                Danger
            </Button>

            <Button
                onClick={() =>
                    toast.warn({
                        title: 'Check this',
                        description: 'Some fields may need your attention.',
                        group: 'variants'
                    })
                }
                variant="outlined"
                severity="warn"
            >
                Warn
            </Button>
            <Button onClick={handleLoadingToast} variant="outlined">
                Loading
            </Button>
            <Button onClick={handleToastPromise} variant="outlined">
                Promise
            </Button>
            <Button onClick={handleCustomToast} variant="outlined">
                Custom
            </Button>
            <VariantsToast />
        </div>
    );
}

export default VariantsDemo;
```

### Position

Use `position` prop to change the position of the toast.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Spinner } from '@primeicons/react/spinner';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/headless/toaster';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from 'primereact/toaster';

function PositionToast({
    position = 'bottom-right'
}: {
    position: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
}) {
    return (
        <Toaster.Root
            position={position}
            group={position}
            icons={{ success: <Check />, danger: <Times />, warn: <ExclamationTriangle />, info: <InfoCircle />, loading: <Spinner /> }}
        >
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast}>
                                <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                                    <Toast.Icon className="[&>svg]:size-3.5 mt-1" />
                                    <div>
                                        <Toast.Title />
                                        <Toast.Description className="mt-1" />
                                        <Toast.Action as={Button} size="small" className="mt-3" />
                                    </div>
                                </div>
                                <Toast.Close
                                    as={Button}
                                    iconOnly
                                    severity={'secondary'}
                                    variant="text"
                                    size="small"
                                    className={'absolute top-2 right-2'}
                                >
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

            <PositionToast position="top-left" />
            <PositionToast position="top-right" />
            <PositionToast position="top-center" />
            <PositionToast position="bottom-left" />
            <PositionToast position="bottom-right" />
            <PositionToast position="bottom-center" />
        </div>
    );
}

export default PositionDemo;
```

### Rich Colors

Use `richColors` prop to enable rich colors for the toast.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Spinner } from '@primeicons/react/spinner';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/headless/toaster';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from 'primereact/toaster';

function RichColorsToast() {
    return (
        <Toaster.Root
            richColors
            group="rich-colors"
            icons={{ success: <Check />, danger: <Times />, warn: <ExclamationTriangle />, info: <InfoCircle />, loading: <Spinner /> }}
        >
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toastItem: ToastType) => (
                            <Toast.Root key={toastItem.id} toast={toastItem}>
                                <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                                    <Toast.Icon className="[&>svg]:size-3.5 mt-1" />
                                    <div>
                                        <Toast.Title />
                                        <Toast.Description className="mt-1" />
                                        <Toast.Action as={Button} size="small" className="mt-3" />
                                    </div>
                                </div>
                                <Toast.Close
                                    as={Button}
                                    iconOnly
                                    severity={toastItem.variant ?? 'secondary'}
                                    variant="text"
                                    size="small"
                                    className={'absolute top-2 right-2'}
                                >
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

function RichColorsDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
                onClick={() => {
                    toast.info({
                        title: 'Heads up',
                        description: 'There’s something you might want to check.',
                        group: 'rich-colors'
                    });
                }}
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
                        group: 'rich-colors'
                    })
                }
                variant="outlined"
                severity="success"
            >
                Success
            </Button>

            <Button
                onClick={() =>
                    toast.danger({
                        title: 'Something went wrong',
                        description: 'We couldn’t complete the action. Please try again.',
                        group: 'rich-colors'
                    })
                }
                variant="outlined"
                severity="danger"
            >
                Danger
            </Button>

            <Button
                onClick={() =>
                    toast.warn({
                        title: 'Check this',
                        description: 'Some fields may need your attention.',
                        group: 'rich-colors'
                    })
                }
                variant="outlined"
                severity="warn"
            >
                Warn
            </Button>
            <RichColorsToast />
        </div>
    );
}

export default RichColorsDemo;
```

### Action

Use the `action` prop to add an interactive button to the toast.

```tsx
'use client';
import { Camera } from '@primeicons/react/camera';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Spinner } from '@primeicons/react/spinner';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/headless/toaster';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';
import { ToasterRegionInstance, ToastType } from 'primereact/toaster';

function ActionToast() {
    return (
        <Toaster.Root
            group="action"
            icons={{ success: <Check />, danger: <Times />, warn: <ExclamationTriangle />, info: <InfoCircle />, loading: <Spinner /> }}
        >
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast}>
                                <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                                    <Toast.Icon className="[&>svg]:size-3.5 mt-1" />
                                    <div>
                                        <Toast.Title />
                                        <Toast.Description className="mt-1" />
                                        <Toast.Action as={Button} size="small" className="mt-3" />
                                    </div>
                                </div>
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
                    toast.success({
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

### remove method

The `remove` method removes a toast by its ID by animating it out. If id is not provided, it will remove all toasts.

```tsx showLineNumbers "id"
toast.remove(id);
```

### delete method

The `delete` method removes a toast by its ID without animating it out. If id is not provided, it will remove all toasts.

```tsx showLineNumbers "id"
toast.delete(id);
```

### update method

The `update` method updates a toast by its ID. It accepts an object with the properties to update.

```tsx showLineNumbers "id"
const id = toast.loading({
    title: 'Please wait.',
    description: 'This will take a moment'
    // ...
});
```

Change the toast options by its ID.

```tsx showLineNumbers "id"
toast.update(id, {
    title: 'Success',
    description: 'The operation was successful',
    variant: 'success'
    // ...
});
```

### promise method

The `promise` method is a wrapper around the `toast` function that creates a toast based on the result of a promise. Each state has its own toast configuration.

```tsx showLineNumbers {2,7,12}
toast.promise(Promise, {
    loading: {
        title: '',
        description: ''
        // ...
    },
    success: {
        title: '',
        description: ''
        // ...
    },
    error: {
        title: '',
        description: ''
        // ...
    }
});
```

### custom method

The `custom` method creates a toast that is based on a custom component. Also, it accepts other props from `toast` function.

```tsx showLineNumbers
toast.custom(<div>Hello</div>, {
    duration: 1000
    // ...
});
```

### action prop

The `action` prop accepts all `Toast.Action` component properties - any props passed will be directly forwarded to the underlying `Toast.Action` component, including `children`, `onClick`, `className`, and other Button-specific properties.

```tsx showLineNumbers {4-9}
toast({
    title: '',
    description: '',
    action: {
        children: '',
        onClick: () => {},
        className: ''
        // ...
    }
});
```

### duration prop

The `duration` prop is the duration of the toast in milliseconds. Passing `Infinity` keeps the toast visible until it is removed manually.

```tsx showLineNumbers {2}
toast({
    duration: 1000
    // ...
});
```

### icon prop

The `icon` prop accepts a React node or a function that returns a React node.

```tsx showLineNumbers {2}
toast({
    icon: <CheckIcon />
    // ...
});
```

### close callbacks

`onDismiss` and `onTimeout` callbacks are called when the toast is dismissed or timed out.

```tsx showLineNumbers
toast({
    onDismiss: () => {},
    onTimeout: () => {}
    // ...
});
```

### group prop

Add group to the toast to group it with other toasts.

```tsx showLineNumbers {2}
toast({
    group: 'group-1'
    // ...
});
```

## API

### Sub-Components

See [Toast Primitive API](../../primitive/toast/features.md#api) for the full sub-component API reference.

### Hooks

See [Toast Headless API](../../headless/toast/features.md#api) for the hook API reference.

## Accessibility

See [Toast Primitive](../../primitive/toast/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
