# useContextMenu

Hooks that manage context menu state, right-click positioning, keyboard navigation, and submenu coordination.

## Usage

```tsx
import { useContextMenu } from '@primereact/headless/contextmenu';
import { useContextMenuSubmenu } from '@primereact/headless/contextmenu/submenu';
```

```tsx
const contextmenu = useContextMenu();
const sub = useContextMenuSubmenu();
const subTriggerProps = contextmenu.getSubTriggerProps({ value: 'view', sub: sub.menusub });
```

`useContextMenu` wraps `useMenu` with right-click activation and cursor-based positioning. See [Primitive](../../primitive/components/contextmenu.md) for a component-based API.

## Features

- **Right-click activation**, `triggerProps` intercepts `contextmenu` events and anchors the popup at the cursor
- **Global mode**, attach the listener to the whole document so right-clicking anywhere opens the menu
- **Two-hook architecture**, `useContextMenu` for root state, `useContextMenuSubmenu` for per-submenu behavior
- **Typed items**, `getItemProps({ type })` produces menuitem, checkbox, or radio behavior with matching ARIA
- **Popover integration**, `appendTo`, `baseZIndex`, and `autoZIndex` forward to the internal `usePopover` for portal/stacking control
- **Type-ahead search**, typing characters moves focus to the matching item label

## Working with callbacks

### Controlled visibility

Use `open` and `onOpenChange` to drive the popup state externally, useful for showing the menu from a keyboard shortcut or synchronizing with other overlays.

```tsx
const [open, setOpen] = React.useState(false);

const contextmenu = useContextMenu({
    open,
    onOpenChange: (e) => setOpen(e.value)
});

<div {...contextmenu.rootProps}>
    <div {...contextmenu.triggerProps}></div>
    {contextmenu.state.open && (
        <div {...contextmenu.positionerProps}>
            <div {...contextmenu.popupProps}>
                <div {...contextmenu.arrowProps} />
                <ul {...contextmenu.getListProps()}>
                    <li {...contextmenu.getItemProps({ value: 'item1' })}></li>
                    <li {...sub.subProps}>
                        <div {...subTriggerProps}></div>
                        <ul {...contextmenu.getListProps({ value: 'view', sub: sub.menusub })}></ul>
                    </li>
                </ul>
            </div>
        </div>
```

### Document-wide activation

Set `global` so any right-click on the page (outside of other context-menu triggers) opens the menu at the cursor.

```tsx
const contextmenu = useContextMenu({ global: true });
```

### Submenus with `useContextMenuSubmenu`

Instantiate a `useContextMenuSubmenu` per submenu and pass its `menusub` to the root getters to wire hover-to-open and keyboard handoff.

```tsx
const sub = useContextMenuSubmenu();
const subTriggerProps = contextmenu.getSubTriggerProps({ value: 'files', sub: sub.menusub });
const subListProps = contextmenu.getListProps({ value: 'files', sub: sub.menusub });
```

### Checkbox and radio items

Pass `type` and `checked` to `getItemProps`, and use `getIndicatorProps` with `match` to render the check/dot conditionally.

```tsx
contextmenu.getItemProps({ value: 'notifications', type: 'checkbox', checked: notificationsOn });
contextmenu.getItemProps({ value: 'light', type: 'radio', checked: theme === 'light' });

const indicatorProps = contextmenu.getIndicatorProps({ type: 'checkbox', checked: true, match: 'checked' });
```

### Portal and stacking control

Forward popover configuration through `appendTo`, `baseZIndex`, and `autoZIndex` when embedding inside modals or tight scroll containers.

```tsx
const contextmenu = useContextMenu({
    appendTo: 'body',
    baseZIndex: 0,
    autoZIndex: true
});
```

## Styling with data attributes

All prop getters attach `data-scope="contextmenu"` and a `data-part` attribute for CSS targeting. Additional data attributes reflect runtime state:

- **`triggerProps`**, `data-part="trigger"`
- **`getItemProps`**, `data-part="item"`, plus `data-value`, `data-focused`, `data-disabled`, `data-checked`
- **`getSubTriggerProps`**, `data-part="subtrigger"`, plus `data-value`, `data-focused`, `data-disabled`, `data-open`
- **`getIndicatorProps`**, `data-part="indicator"`, plus `data-open`/`data-closed` or `data-checked`/`data-unchecked`

```css
[data-scope='contextmenu'][data-part='item'][data-focused] {
    background-color: var(--surface-hover);
}

[data-scope='contextmenu'][data-part='subtrigger'][data-open] {
    background-color: var(--surface-hover);
}

[data-scope='contextmenu'][data-part='item'][data-disabled] {
    opacity: 0.6;
    pointer-events: none;
}
```

## API

### useContextMenu

> **`useContextMenu` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/contextmenu or the installed `@primereact/types`.

### useContextMenuSubmenu

> **`useContextMenuSubmenu` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/contextmenu or the installed `@primereact/types`.

## Accessibility

Right-click or long-press opens the menu, Arrow keys navigate, Enter activates, and Escape dismisses. See [Primitive](../../primitive/components/contextmenu.md#accessibility) for full WAI-ARIA compliance details.
