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

> **`IconFieldRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/iconfield or the installed `@primereact/types`.

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"iconfield"` |
| `data-part`  | `"root"`      |

### IconFieldInset

> **`IconFieldInset` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/iconfield or the installed `@primereact/types`.

## Accessibility

### Screen Reader

IconField.Root and IconField.Inset do not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
