# Label

An unstyled, accessible label element for form controls.

Build accessible text labels for form controls with complete control over layout and styling.

## Features

- Renders a native `label` element
- Associate with a control via `htmlFor`, or wrap the control to associate it implicitly
- Reflects the disabled state of an associated control automatically

## Usage

```tsx
import { Label } from 'primereact/label';
import { InputText } from 'primereact/inputtext';
```

```tsx
<Label htmlFor="username">Username</Label>
<InputText id="username" />
```

## API

### Label

> **`Label` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/label or the installed `@primereact/types`.

| Attribute    | Value     |
| ------------ | --------- |
| `data-scope` | `"label"` |
| `data-part`  | `"root"`  |

## Accessibility

### Screen Reader

`Label` renders a native `label` element. Use `htmlFor` to associate it with a form control id, or wrap the form control inside the label.

### Keyboard Support

Component does not include any interactive elements.
