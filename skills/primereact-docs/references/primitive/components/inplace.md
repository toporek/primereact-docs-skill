# Inplace

An unstyled, accessible inline editing component with compound composition.

Build fully custom inline display-to-edit experiences with complete control over layout and styling.

## Features

- Compound component API with four sub-components: `Root`, `Display`, `Content`, `Close`

## Usage

```tsx
import { Inplace } from 'primereact/inplace';
```

```tsx
<Inplace.Root>
    <Inplace.Display></Inplace.Display>
    <Inplace.Content>
        <input />
        <Inplace.Close></Inplace.Close>
    </Inplace.Content>
</Inplace.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Inplace.Close as="button">Done</Inplace.Close>
```

Default elements: `Root`=`div`, `Display`=`div`, `Content`=`div`, `Close`=`div`.

### Render Function Children

`Content` accepts a render function as children, providing access to the component instance.

```tsx
<Inplace.Content>{(instance) => <span>Open: {String(instance.inplace?.state.open)}</span>}</Inplace.Content>
```

## Pass Through

## API

### InplaceRoot

> **`InplaceRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/inplace or the installed `@primereact/types`.

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"inplace"`           |
| `data-part`     | `"root"`              |
| `data-open`     | Present when open     |
| `data-closed`   | Present when closed   |
| `data-disabled` | Present when disabled |

| Label | Type | Description |
|:------|:------|:------|
| root | InplaceRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| content | InplaceRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| display | InplaceRootPassThroughType> | Used to pass attributes to the display's DOM element. |
| close | InplaceRootPassThroughType> | Used to pass attributes to the close's DOM element. |

### InplaceDisplay

> **`InplaceDisplay` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/inplace or the installed `@primereact/types`.

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"inplace"`           |
| `data-part`     | `"display"`           |
| `data-open`     | Present when open     |
| `data-closed`   | Present when closed   |
| `data-disabled` | Present when disabled |

| Label | Type | Description |
|:------|:------|:------|
| root | InplaceDisplayPassThroughType> | Used to pass attributes to the root's DOM element. |

### InplaceContent

> **`InplaceContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/inplace or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | InplaceContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### InplaceClose

> **`InplaceClose` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/inplace or the installed `@primereact/types`.

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"inplace"`           |
| `data-part`     | `"close"`             |
| `data-open`     | Present when open     |
| `data-closed`   | Present when closed   |
| `data-disabled` | Present when disabled |

| Label | Type | Description |
|:------|:------|:------|
| root | InplaceClosePassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Inplace uses `aria-live="polite"` by default so screen readers announce content changes. The display element has `tabIndex={0}` for keyboard focus.

### Keyboard Support

| Key     | Function                                    |
| ------- | ------------------------------------------- |
| `enter` | Activates the display, showing the content. |
| `space` | Activates the display, showing the content. |
