# ConfirmPopup

ConfirmPopup uses a Dialog UI

```tsx
import { ExclemationCircle } from '@primeicons/react/exclemation-circle';
import { Button } from '@primereact/ui/button';
import { ConfirmPopup } from '@primereact/ui/confirmpopup';

export default function Preview() {
    return (
        <div className="flex justify-center">
            <ConfirmPopup.Root>
                <ConfirmPopup.Trigger className="inline-flex items-center justify-center bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 border border-surface rounded-md px-2.5 py-1.5 gap-2">
                    Confirm
                </ConfirmPopup.Trigger>
                <ConfirmPopup.Portal>
                    <ConfirmPopup.Positioner sideOffset={12}>
                        <ConfirmPopup.Popup>
                            <ConfirmPopup.Arrow />
                            <ConfirmPopup.Content>
                                <ExclemationCircle className="w-5! h-5! text-primary" />
                                <ConfirmPopup.Message className="text-sm text-surface-700 dark:text-surface-200">
                                    Are you sure you want to proceed?
                                </ConfirmPopup.Message>
                            </ConfirmPopup.Content>
                            <ConfirmPopup.Footer className="justify-end">
                                <ConfirmPopup.Close as={Button} size="small" severity="secondary" variant="outlined">
                                    Cancel
                                </ConfirmPopup.Close>
                                <ConfirmPopup.Close as={Button} size="small">
                                    Save
                                </ConfirmPopup.Close>
                            </ConfirmPopup.Footer>
                        </ConfirmPopup.Popup>
                    </ConfirmPopup.Positioner>
                </ConfirmPopup.Portal>
            </ConfirmPopup.Root>
        </div>
    );
}
```

## Usage

```tsx
import { ConfirmPopup } from '@primereact/ui/confirmpopup';
```

```tsx
<ConfirmPopup>
    <ConfirmPopup.Trigger />
    <ConfirmPopup.Portal>
        <ConfirmPopup.Content>
            <ConfirmPopup.Icon />
            <ConfirmPopup.Message />
        </ConfirmPopup.Content>
        <ConfirmPopup.Footer>
            <ConfirmPopup.Close />
        </ConfirmPopup.Footer>
    </ConfirmPopup.Portal>
</ConfirmPopup>
```

## Examples

### Basic

A confirmation popup anchored to a target element.

```tsx
import { ExclemationCircle } from '@primeicons/react/exclemation-circle';
import { Button } from '@primereact/ui/button';
import { ConfirmPopup } from '@primereact/ui/confirmpopup';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <ConfirmPopup.Root>
                <ConfirmPopup.Trigger className="inline-flex items-center justify-center bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 border border-surface rounded-md px-2.5 py-1.5 gap-2">
                    Confirm
                </ConfirmPopup.Trigger>
                <ConfirmPopup.Portal>
                    <ConfirmPopup.Positioner sideOffset={12}>
                        <ConfirmPopup.Popup>
                            <ConfirmPopup.Arrow />
                            <ConfirmPopup.Content>
                                <ExclemationCircle className="w-5! h-5! text-primary" />
                                <ConfirmPopup.Message className="text-sm text-surface-700 dark:text-surface-200">
                                    Are you sure you want to proceed?
                                </ConfirmPopup.Message>
                            </ConfirmPopup.Content>
                            <ConfirmPopup.Footer className="justify-end">
                                <ConfirmPopup.Close as={Button} size="small" severity="secondary" variant="outlined">
                                    Cancel
                                </ConfirmPopup.Close>
                                <ConfirmPopup.Close as={Button} size="small">
                                    Save
                                </ConfirmPopup.Close>
                            </ConfirmPopup.Footer>
                        </ConfirmPopup.Popup>
                    </ConfirmPopup.Positioner>
                </ConfirmPopup.Portal>
            </ConfirmPopup.Root>
        </div>
    );
}
```

### Template

ConfirmPopup can be customized with templates. The `ConfirmPopup.Content` can be used to define the content of the popup, while `ConfirmPopup.Footer` can be used to define the footer actions.

```tsx
import { Check } from '@primeicons/react/check';
import { ExclemationCircle } from '@primeicons/react/exclemation-circle';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { ConfirmPopup } from '@primereact/ui/confirmpopup';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <ConfirmPopup.Root>
                <ConfirmPopup.Trigger className="inline-flex items-center justify-center bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 border border-surface rounded-md px-2.5 py-1.5 gap-2">
                    Save
                </ConfirmPopup.Trigger>
                <ConfirmPopup.Portal>
                    <ConfirmPopup.Positioner sideOffset={12}>
                        <ConfirmPopup.Popup>
                            <ConfirmPopup.Arrow />
                            <ConfirmPopup.Content>
                                <div className="flex flex-col items-center w-full gap-4 p-4 mb-4 pb-0">
                                    <ExclemationCircle className="w-16! h-16! text-primary-500" />
                                    <p className="text-sm">Please confirm to proceed moving forward.</p>
                                </div>
                            </ConfirmPopup.Content>
                            <ConfirmPopup.Footer className="justify-end">
                                <ConfirmPopup.Close as={Button} size="small" variant="outlined">
                                    <Times />
                                    Cancel
                                </ConfirmPopup.Close>
                                <ConfirmPopup.Close as={Button} size="small">
                                    <Check />
                                    Confirm
                                </ConfirmPopup.Close>
                            </ConfirmPopup.Footer>
                        </ConfirmPopup.Popup>
                    </ConfirmPopup.Positioner>
                </ConfirmPopup.Portal>
            </ConfirmPopup.Root>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/confirmpopup/features.md#api) for `ConfirmPopupRoot`, `ConfirmPopupTrigger`, `ConfirmPopupPortal`, `ConfirmPopupPositioner`, `ConfirmPopupPopup`, `ConfirmPopupArrow`, `ConfirmPopupContent`, `ConfirmPopupIcon`, `ConfirmPopupMessage`, `ConfirmPopupFooter`, `ConfirmPopupClose` component documentation.

### Hooks

See [Headless API](../../headless/confirmpopup/features.md#api) for `useConfirmPopup` hook documentation.

## Accessibility

See [ConfirmPopup Primitive](../../primitive/confirmpopup/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
