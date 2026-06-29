# IftaLabel

An unstyled wrapper that creates an infield top-aligned label for its form element.

Build an infield top-aligned label positioned inside the input boundary with complete control over layout and styling.

## Features

- Wraps a form element and its `Label` to create an infield top-aligned label
- Label stays visible inside the input boundary, above the value
- Works with any compatible input component

## Usage

```tsx
import { IftaLabel } from 'primereact/iftalabel';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
```

```tsx
<IftaLabel>
    <InputText id="username" />
    <Label htmlFor="username">Username</Label>
</IftaLabel>
```

## API

### IftaLabel

> **`IftaLabel` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/iftalabel or the installed `@primereact/types`.

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"iftalabel"` |
| `data-part`  | `"root"`      |

## Accessibility

### Screen Reader

IftaLabel does not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
