# useContextMenu

Hooks that manage context menu state, right-click positioning, keyboard navigation, and submenu coordination.

```tsx
'use client';
import * as React from 'react';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Clipboard } from '@primeicons/react/clipboard';
import { Copy } from '@primeicons/react/copy';
import { ExternalLink } from '@primeicons/react/external-link';
import { Folder } from '@primeicons/react/folder';
import { PenToSquare } from '@primeicons/react/pen-to-square';
import { Refresh } from '@primeicons/react/refresh';
import { Search } from '@primeicons/react/search';
import { Trash } from '@primeicons/react/trash';
import { useContextMenu } from '@primereact/headless/contextmenu';
import { useContextMenuSubmenu } from '@primereact/headless/contextmenu/submenu';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import { createPortal } from 'react-dom';

export default function BasicDemo() {
    const contextmenu = useContextMenu();
    const { rootProps, triggerProps, popupProps, positionerProps, getListProps, getItemProps } = contextmenu;
    const viewSub = useContextMenuSubmenu();
    const viewSubTriggerProps = contextmenu.getSubTriggerProps({ value: 'view', sub: viewSub.menusub });
    const portal = usePortal();

    usePositioner({
        anchor: contextmenu.state.anchorElement,
        content: contextmenu.state.positionerElement,
        arrow: contextmenu.state.arrowElement,
        sideOffset: 8,
        flip: true,
        shift: true,
        side: 'bottom',
        align: 'start'
    });

    usePositioner({
        anchor: viewSub.menusub?.state.anchorElement,
        content: viewSub.menusub?.state.positionerElement,
        sideOffset: 0,
        flip: true,
        shift: true,
        side: 'right',
        align: 'start'
    });

    const itemClass =
        'flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-800 data-[focused]:bg-surface-100 dark:data-[focused]:bg-surface-700 text-xs select-none';
    const separatorClass = 'border-t border-surface-200 dark:border-surface-700 my-0.5';
    const listClass = 'list-none m-0 p-1 flex flex-col gap-0.5 outline-none w-44';
    const popupClass = 'border border-surface-200 dark:border-surface-700 rounded-lg bg-surface-0 dark:bg-surface-900 shadow-lg';

    return (
        <div className="flex justify-center">
            <div {...rootProps}>
                <div
                    {...triggerProps}
                    className="flex justify-center items-center border-2 border-dashed border-surface-200 dark:border-surface-700 w-120 h-64 cursor-default select-none text-surface-500"
                >
                    Right Click Here
                </div>
                {portal.state.mounted &&
                    contextmenu.state.open &&
                    createPortal(
                        <div {...positionerProps}>
                            <div {...popupProps} className={popupClass}>
                                <ul {...(getListProps() as React.HTMLAttributes<HTMLUListElement>)} className={listClass}>
                                    <li {...getItemProps({ value: 'copy' })} className={itemClass}>
                                        <Copy className="w-4! h-4! text-surface-500" />
                                        Copy
                                    </li>
                                    <li {...getItemProps({ value: 'paste' })} className={itemClass}>
                                        <Clipboard className="w-4! h-4! text-surface-500" />
                                        Paste
                                    </li>

                                    <li className={separatorClass} {...contextmenu.menu.separatorProps} />

                                    <li {...viewSub.subProps}>
                                        <div {...viewSubTriggerProps} className={itemClass}>
                                            <Folder className="w-4! h-4! text-surface-500" />
                                            View
                                            <span className="ml-auto">
                                                <ChevronRight className="w-3.5 h-3.5 text-surface-400" />
                                            </span>
                                        </div>
                                        {viewSub.state.open && (
                                            <div {...viewSub.menusub?.popover?.positionerProps}>
                                                <div className={popupClass}>
                                                    <ul
                                                        {...(contextmenu.getListProps({
                                                            value: 'view',
                                                            sub: viewSub.menusub
                                                        }) as React.HTMLAttributes<HTMLUListElement>)}
                                                        className={listClass}
                                                    >
                                                        <li {...getItemProps({ value: 'zoom-in' })} className={itemClass}>
                                                            <Search className="w-4! h-4! text-surface-500" />
                                                            Zoom In
                                                        </li>
                                                        <li {...getItemProps({ value: 'zoom-out' })} className={itemClass}>
                                                            <Search className="w-4! h-4! text-surface-500" />
                                                            Zoom Out
                                                        </li>
                                                        <li {...getItemProps({ value: 'reload' })} className={itemClass}>
                                                            <Refresh className="w-4! h-4! text-surface-500" />
                                                            Reload
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </li>

                                    <li className={separatorClass} {...contextmenu.menu.separatorProps} />

                                    <li {...getItemProps({ value: 'rename' })} className={itemClass}>
                                        <PenToSquare className="w-4! h-4! text-surface-500" />
                                        Rename
                                    </li>
                                    <li {...getItemProps({ value: 'open-link' })} className={itemClass}>
                                        <ExternalLink className="w-4! h-4! text-surface-500" />
                                        Open Link
                                    </li>

                                    <li className={separatorClass} {...contextmenu.menu.separatorProps} />

                                    <li
                                        {...getItemProps({ value: 'delete' })}
                                        className="flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 data-[focused]:bg-red-100 dark:data-[focused]:bg-red-900 text-xs select-none"
                                    >
                                        <Trash className="w-4! h-4!" />
                                        Delete
                                    </li>
                                </ul>
                            </div>
                        </div>,
                        document.body
                    )}
            </div>
        </div>
    );
}

```

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
