# IconField

An unstyled compound component that wraps an input together with an icon.

Build inputs with embedded leading or trailing icons with complete control over layout and styling.

## Features

- Compound component API with two sub-components: `Root`, `Inset`
- `Inset` positions an icon inside the input boundary
- Icons inside `Inset` can be interactive with event handlers like `onClick`
- Compatible with the size setting of the input field

## Usage

```tsx
import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';
```

```tsx
<IconField.Root>
    <InputText />
    <IconField.Inset>
        <SearchIcon />
    </IconField.Inset>
</IconField.Root>
```

## API

### IconFieldRoot

> **API/props table for `IconFieldRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"iconfield"` |
| `data-part`  | `"root"`      |

### IconFieldInset

> **API/props table for `IconFieldInset` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

IconField.Root and IconField.Inset do not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
