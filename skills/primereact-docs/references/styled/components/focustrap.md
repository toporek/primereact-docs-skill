# FocusTrap

Focus Trap keeps focus within a certain DOM element while tabbing.

## Usage

```tsx
import { FocusTrap } from '@primereact/ui/focustrap';
```

```tsx
<FocusTrap></FocusTrap>
```

## Examples

### Basic

Keeps keyboard focus within a defined region for accessibility.

### Trapped

The `trapped` prop controls whether focus is confined within the container. Set to `false` to release focus and allow normal tab navigation.

### Initial Focus

Use `initialFocusRef` to direct focus to a specific element when the trap activates. Alternatively, add `data-autofocus` to a focusable element to mark the initial focus target.

### On Escape

The `onEscape` callback fires when the Escape key is pressed inside the trap, useful for deactivating the trap or closing overlays.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/focustrap.md#api) for `FocusTrap` component documentation.

### Hooks

See [Headless API](../../headless/components/focustrap.md#api) for `useFocusTrap` hook documentation.

### Accessibility

See [FocusTrap Primitive](../../primitive/components/focustrap.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

> **`FocusTrap` API table (`style`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/focustrap or the installed `@primereact/types`.

### Design Tokens

List of design tokens.

> **`FocusTrap` API table (`token`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/focustrap or the installed `@primereact/types`.
