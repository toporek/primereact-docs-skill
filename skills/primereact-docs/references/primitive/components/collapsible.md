# Collapsible

An unstyled collapsible component for building expand/collapse interfaces with full control over layout and styling.

Build fully custom expand/collapse interfaces with complete control over layout and styling.

## Features

- Compound component API with sub-components: `Root`, `Trigger`, `Content`
- Controlled and uncontrolled open state management
- Imperative `toggle`, `open`, and `close` methods
- Callback props: `onOpen`, `onClose`, `onOpenChange`

## Usage

```tsx
import { Collapsible } from 'primereact/collapsible';
```

```tsx
<Collapsible.Root>
    <Collapsible.Trigger></Collapsible.Trigger>
    <Collapsible.Content></Collapsible.Content>
</Collapsible.Root>
```

## Behavior

### Motion Animation

Pass `motionProps` to `Root` to animate the content element.

```tsx
<Collapsible.Root motionProps={{ transition: { duration: 200 } }}>
    <Collapsible.Trigger></Collapsible.Trigger>
    <Collapsible.Content></Collapsible.Content>
</Collapsible.Root>
```

See [Motion](motion.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Collapsible.Root as="section"></Collapsible.Root>
<Collapsible.Trigger as="div"></Collapsible.Trigger>
```

Default elements: `Root`=`div`, `Trigger`=`button`, `Content`=`div`.

### Render Function Children

`Root` accepts a render function as children, providing access to the component instance.

```tsx
<Collapsible.Root>{(instance) => <span>{instance.state.open ? 'Open' : 'Closed'}</span>}</Collapsible.Root>
```

## API

### CollapsibleRoot

> **`CollapsibleRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/collapsible or the installed `@primereact/types`.

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"collapsible"`       |
| `data-part`     | `"root"`              |
| `data-open`     | Present when open     |
| `data-closed`   | Present when closed   |
| `data-disabled` | Present when disabled |

### CollapsibleTrigger

> **`CollapsibleTrigger` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/collapsible or the installed `@primereact/types`.

| Attribute             | Value                       |
| --------------------- | --------------------------- |
| `data-scope`          | `"collapsible"`             |
| `data-part`           | `"trigger"`                 |
| `data-content-open`   | Present when content open   |
| `data-content-closed` | Present when content closed |

### CollapsibleContent

> **`CollapsibleContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/collapsible or the installed `@primereact/types`.

| Attribute     | Value               |
| ------------- | ------------------- |
| `data-scope`  | `"collapsible"`     |
| `data-part`   | `"content"`         |
| `data-open`   | Present when open   |
| `data-closed` | Present when closed |

## Accessibility

### Screen Reader

The trigger has `aria-expanded` reflecting the open state and `aria-controls` referencing the content element's `id`. The content has `role="region"` and `aria-hidden` when collapsed.

### Keyboard Support

| Key     | Function                                        |
| ------- | ----------------------------------------------- |
| `tab`   | Moves focus to the trigger element.             |
| `enter` | Toggles the collapsible content open or closed. |
| `space` | Toggles the collapsible content open or closed. |
