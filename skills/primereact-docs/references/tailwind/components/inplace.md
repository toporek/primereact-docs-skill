# Inplace

Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/inplace.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Inplace, InplaceClose, InplaceContent, InplaceDisplay } from '@/components/ui/inplace';
```

```tsx
<Inplace>
    <InplaceDisplay>Click to Edit</InplaceDisplay>
    <InplaceContent>
        <InputText />
    </InplaceContent>
</Inplace>
```

## Examples

### Basic

Switches between a display and an edit mode on click.

### Disabled

Use the `disabled` prop to disable the inplace content.

### Controlled

Use the `open` and `onOpenChange` props to control the inplace content.

### Image

Any content such as an image can be placed inside the `InplaceContent` component.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/inplace.md#api) for sub-component documentation.

### Hooks

See [Headless API](../../headless/components/inplace.md#api) for hook documentation.

### Accessibility

See [Inplace Primitive](../../primitive/components/inplace.md#accessibility) for WAI-ARIA compliance details and keyboard support.
