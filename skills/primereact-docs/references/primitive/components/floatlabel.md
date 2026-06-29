# FloatLabel

An unstyled wrapper that visually integrates a label with its form element.

Build a floating label that transitions above the input with complete control over layout and styling.

## Features

- Wraps a form element and its `Label` to create a floating-label interaction
- `variant` property positions the label: `over` (default), `in`, or `on`
- Works with any compatible input component

## Usage

```tsx
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
```

```tsx
<FloatLabel>
    <InputText id="username" />
    <Label htmlFor="username">Username</Label>
</FloatLabel>
```

## API

### FloatLabel

> **API/props table for `FloatLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"floatlabel"` |
| `data-part`  | `"root"`       |

## Accessibility

### Screen Reader

FloatLabel does not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
