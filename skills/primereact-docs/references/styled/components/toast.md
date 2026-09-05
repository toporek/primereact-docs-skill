# Toast

Toast is a component that displays a message to the user.

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

### Promise

`toast.promise` ties a toast to a promise, show a loading state, then transition to success or error based on the outcome.

### Update

`toast.update(id, options)` merges new options into an existing toast, useful for turning a loading toast into a result.

### Sticky

Pass `duration: Infinity` to keep a toast open until it is dismissed manually. To make every toast sticky by default, set the `timeout` prop on `Toaster` to `Infinity` instead of per toast.

### Custom

Pass `render` to replace the default body with custom JSX. The root wrapper (positioning, animation, swipe) is preserved.

### Position

Use the `position` prop on `<Toaster.Root>` to control where toasts appear.

### Expanded Mode

`mode="expanded"` always renders the stack expanded; the default stacks toasts collapsed and expands on hover.

### Action

Add an interactive button to the toast with the `action` field.

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
