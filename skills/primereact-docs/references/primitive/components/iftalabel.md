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

> **API/props table for `IftaLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"iftalabel"` |
| `data-part`  | `"root"`      |

## Accessibility

### Screen Reader

IftaLabel does not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
