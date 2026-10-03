# useInplace

Hook that manages inline display-to-edit toggling with keyboard and state support.

## Usage

```tsx
import { useInplace } from '@primereact/headless/inplace';
```

```tsx
const { rootProps, displayProps, closeProps, state } = useInplace();

<div {...rootProps}>
    {!state.open ? (
        <div {...displayProps}></div>
```

`useInplace` manages the display/content toggle and returns prop objects for the container, display, and close elements, see [Primitive](../../primitive/components/inplace.md) for a component-based API.

## Features

- **Open-state lifecycle**, controlled or uncontrolled toggling between display and edit modes
- **Imperative controls**, `open()` and `close()` for programmatic toggling outside the standard click/close flow
- **Keyboard activation**, built-in Enter/Space handler on `displayProps` to enter edit mode
- **Data-driven styling**, `data-open`, `data-closed`, and `data-disabled` attributes expose state without className juggling
- **Disabled mode**, suppresses click and keyboard handlers and marks the root with `data-disabled`

## Working with callbacks

### Controlled open state

Drive the toggle from external state by pairing `open` with `onOpenChange`. The hook never mutates its own state in controlled mode.

```tsx
const [open, setOpen] = React.useState(false);

const inplace = useInplace({
    open,
    onOpenChange: (e) => setOpen(e.open)
});
```

### Closing after a save

Use `close()` imperatively so the edit surface exits after the underlying action completes.

```tsx
const inplace = useInplace();

const onSave = async () => {
    await save();
    inplace.close();
};
```

### Rendering edit content conditionally

Gate the edit surface on `state.open` so inputs mount only while the inplace is open, useful for forms that need a fresh `defaultValue` each time.

```tsx
const { rootProps, displayProps, closeProps, state } = useInplace();

<div {...rootProps}>
    {!state.open ? (
        <div {...displayProps}>Edit name</div>
    ) : (
        <div>
            <input defaultValue={name} />
            <button {...closeProps}>Cancel</button>
        </div>
    )}
</div>;
```

## Styling with data attributes

Every prop object includes `data-scope="inplace"` and a `data-part` attribute. State-dependent attributes (`data-open`, `data-closed`, `data-disabled`) are added automatically.

| Scope     | Part      | States                                      |
| --------- | --------- | ------------------------------------------- |
| `inplace` | `root`    | `data-open`, `data-closed`, `data-disabled` |
| `inplace` | `display` | `data-open`, `data-closed`, `data-disabled` |
| `inplace` | `content` | `data-open`, `data-closed`, `data-disabled` |
| `inplace` | `close`   | `data-open`, `data-closed`, `data-disabled` |

```css
[data-scope='inplace'][data-part='display'] {
    cursor: pointer;
    padding: 0.5rem;
}

[data-scope='inplace'][data-part='display'][data-closed]:hover {
    background-color: #f3f4f6;
}

[data-scope='inplace'][data-part='root'][data-disabled] {
    opacity: 0.5;
    pointer-events: none;
}
```

## API

### useInplace

> **`useInplace` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/inplace or the installed `@primereact/types`.

## Accessibility

Enter or Space activates edit mode, Escape cancels, and focus returns to the display on exit. See [Primitive](../../primitive/components/inplace.md#accessibility) for full WAI-ARIA compliance details.
