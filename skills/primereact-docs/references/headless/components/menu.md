# useMenu

Hook that manages menu state, keyboard navigation, focus tracking, and submenu coordination.

## Usage

```tsx
import { useMenu } from '@primereact/headless/menu';
import { useMenuSubmenu } from '@primereact/headless/menu/submenu';
```

```tsx
const menu = useMenu();
const sub = useMenuSubmenu({ defaultOpen: true });
const subTriggerProps = menu.getSubTriggerProps({ value: 'projects', sub });
```

`useMenu` manages focus tracking, keyboard navigation, and submenu orchestration for menu structures. See [Primitive](../../primitive/components/menu.md) for a component-based API.

## Features

- **Inline or popup rendering**, spread `getListProps()` directly for an inline menu, or drive visibility with `triggerProps` and `state.open`
- **Composite submenus**, `composite` mode enables hover-to-open nested menus with arrow-key navigation across levels
- **Typed items**, `getItemProps({ type })` produces menuitem, checkbox, or radio behavior with proper ARIA semantics
- **Dynamic prop getters**, `getItemProps`, `getSubTriggerProps`, `getListProps`, and `getIndicatorProps` emit props and data attributes per element
- **Type-ahead search**, typing characters moves focus to the matching item label
- **Popover integration**, built on `usePopover` so positioning, portal, and dismissal are configured through the same options

## Working with callbacks

### Controlled popup visibility

Use `open` and `onOpenChange` to drive visibility externally, useful for coordinating with other overlays or toolbar state.

```tsx
const [open, setOpen] = React.useState(false);

const menu = useMenu({
    open,
    onOpenChange: (e) => setOpen(e.value)
});

<div {...menu.rootProps}>
    <ul {...menu.getListProps()}>
        <li {...menu.getItemProps({ value: 'item1' })}></li>
        <li {...sub.subProps}>
            <div {...subTriggerProps}></div>
            <ul {...menu.getListProps({ value: 'projects', sub })}></ul>
        </li>
    </ul>
</div>;
```

### Submenus with `useMenuSubmenu`

Create a separate `useMenuSubmenu` instance per submenu and wire it through `getSubTriggerProps` / `getListProps`.

```tsx
const menu = useMenu({ composite: true });
const sub = useMenuSubmenu();
const subTriggerProps = menu.getSubTriggerProps({ value: 'files', sub });
const subListProps = menu.getListProps({ value: 'files', sub });
```

### Checkbox and radio items

Pass `type` and `checked` to `getItemProps` and wrap radio items in an element carrying `radioGroupProps`.

```tsx
menu.getItemProps({ value: 'notifications', type: 'checkbox', checked: notificationsOn });
menu.getItemProps({ value: 'light', type: 'radio', checked: theme === 'light' });
```

### Indicator visibility with `match`

`getIndicatorProps` returns a `matchVisible` flag so you can render submenu arrows, checkmarks, or radio dots conditionally.

```tsx
const indicatorProps = menu.getIndicatorProps({ type: 'checkbox', checked: true, match: 'checked' });

{
    indicatorProps.matchVisible && <CheckIcon {...indicatorProps} />;
}
```

## Styling with data attributes

All prop getters attach `data-scope="menu"` and a `data-part` attribute for CSS targeting. Additional data attributes reflect runtime state:

- **`getItemProps`**, `data-part="item"`, plus `data-value`, `data-focused`, `data-disabled`, `data-checked`
- **`getSubTriggerProps`**, `data-part="subtrigger"`, plus `data-value`, `data-focused`, `data-disabled`, `data-open`
- **`getIndicatorProps`**, `data-part="indicator"`, plus `data-open`/`data-closed` or `data-checked`/`data-unchecked`
- **`getListProps`**, `data-part="list"`

```css
[data-scope='menu'][data-part='item'][data-focused] {
    background-color: var(--surface-hover);
}

[data-scope='menu'][data-part='item'][data-checked] {
    font-weight: 600;
}

[data-scope='menu'][data-part='subtrigger'][data-open] {
    background-color: var(--surface-hover);
}

[data-scope='menu'][data-part='indicator'][data-checked] {
    color: var(--primary);
}

[data-scope='menu'][data-part='item'][data-disabled] {
    opacity: 0.6;
    pointer-events: none;
}
```

## API

### useMenu

> **`useMenu` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/menu or the installed `@primereact/types`.

### useMenuSubmenu

> **`useMenuSubmenu` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/menu or the installed `@primereact/types`.

## Accessibility

Arrow keys navigate items, Enter or Space activates the focused item, Escape closes, and type-ahead matches item labels. See [Primitive](../../primitive/components/menu.md#accessibility) for full WAI-ARIA compliance details.
