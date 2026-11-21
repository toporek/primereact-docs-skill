# Toolbar

Toolbar is a grouping component for buttons and other content.

## Installation

   Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/toolbar.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Toolbar, ToolbarCenter, ToolbarEnd, ToolbarStart } from '@/components/ui/toolbar';
```

```tsx
<Toolbar>
    <ToolbarStart />
    <ToolbarCenter />
    <ToolbarEnd />
</Toolbar>
```

## Examples

### Basic

Combines action buttons and controls in a horizontal bar.

### Custom

A customized toolbar with navigation bar functionality.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/toolbar.md#api) for `ToolbarRoot`, `ToolbarStart`, `ToolbarCenter`, `ToolbarEnd` component documentation.

### Hooks

See [Headless API](../../headless/components/toolbar.md#api) for `useToolbar` hook documentation.

### Accessibility

See [Toolbar Primitive](../../primitive/components/toolbar.md#accessibility) for WAI-ARIA compliance details and keyboard support.
