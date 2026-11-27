# Label

Label provides accessible text labels for form controls. Use `htmlFor` to link the label to a form control by its id.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/label.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Label } from '@/components/ui/label';
```

```tsx
<Label htmlFor="username">Username</Label>
```

## Examples

### Basic

An accessible label element associated with a form control.

### Required

You can display required indicators in the label content while keeping the input semantics with `required` or `aria-required`.

## Accessibility

### Screen Reader

`Label` renders a native `label` element. Use `htmlFor` to associate it with a form control id, or wrap the form control inside the label.

### Keyboard Support

Component does not include any interactive elements.
