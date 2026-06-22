# useContextMenu

Hooks that manage context menu state, right-click positioning, keyboard navigation, and submenu coordination.

```tsx
'use client';
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
import { useContextMenuSub } from '@primereact/headless/contextmenu/sub';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import { createPortal } from 'react-dom';

export default function BasicDemo() {
    const contextmenu = useContextMenu();
    const { rootProps, triggerProps, popupProps, positionerProps, getListProps, getItemProps } = contextmenu;
    const viewSub = useContextMenuSub();
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
                                <ul {...getListProps()} className={listClass}>
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
                                                    <ul {...contextmenu.getListProps({ value: 'view', sub: viewSub.menusub })} className={listClass}>
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

```tsx showLineNumbers {1-2,4-6,9-19}
import { useContextMenu } from '@primereact/headless/contextmenu';
import { useContextMenuSub } from '@primereact/headless/contextmenu/sub';

const contextmenu = useContextMenu();
const sub = useContextMenuSub();
const subTriggerProps = contextmenu.getSubTriggerProps({ value: 'view', sub: sub.menusub });

return (
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
        )}
    </div>
);
```

`useContextMenu` wraps `useMenu` with right-click activation and cursor-based positioning — see [Primitive](../../primitive/contextmenu/features.md) for a component-based API.

## Features

- Two-hook architecture: `useContextMenu` for root state, `useContextMenuSub` for per-submenu behavior
- Returns spread-ready prop objects: `rootProps`, `triggerProps`, `popupProps`, `positionerProps`, `arrowProps`
- Dynamic prop getters: `getItemProps`, `getSubTriggerProps`, `getListProps`, `getIndicatorProps`
- Right-click activation with automatic cursor-based popup positioning
- Global mode to attach context menu to the entire document
- Checkbox and radio item types via `getItemProps({ type: 'checkbox' | 'radio' })`
- Built-in character search to jump to items by typing

## Behavior

### Right-Click Trigger

Spread `triggerProps` on the target element. Right-clicking fires `onContextMenu`, which positions a virtual anchor at the cursor and opens the popup.

```tsx
const contextmenu = useContextMenu();

<div {...contextmenu.triggerProps}>Right-click me</div>;
```

### Global Mode

Set `global` to attach the context menu listener to the entire document instead of a specific trigger element.

```tsx
const contextmenu = useContextMenu({ global: true });
```

When `global` is enabled, right-clicking anywhere on the page (outside other contextmenu triggers) opens the popup at the cursor position.

### Controlled Visibility

Use `open` and `onOpenChange` for programmatic control over the popup state.

```tsx
const [open, setOpen] = React.useState(false);
const contextmenu = useContextMenu({
    open,
    onOpenChange: (e) => setOpen(e.value)
});
```

### Submenus

Use `useContextMenuSub` for each submenu. Pass the `menusub` instance to `getSubTriggerProps` and `getListProps` to wire up hover-to-open behavior and keyboard navigation across levels.

```tsx
const sub = useContextMenuSub();
const subTriggerProps = contextmenu.getSubTriggerProps({ value: 'files', sub: sub.menusub });
const subListProps = contextmenu.getListProps({ value: 'files', sub: sub.menusub });
```

### Checkbox and Radio Items

Pass `type` and `checked` to `getItemProps` for checkbox or radio behavior. Use `getIndicatorProps` with `match` to control indicator visibility.

```tsx
contextmenu.getItemProps({ value: 'notifications', type: 'checkbox', checked: true });
contextmenu.getItemProps({ value: 'light', type: 'radio', checked: selectedTheme === 'light' });

const indicatorProps = contextmenu.getIndicatorProps({ type: 'checkbox', checked: true, match: 'checked' });
```

### Popup Positioning

The hook uses `usePopover` internally. The popup is positioned relative to a virtual anchor placed at the cursor coordinates. Use `appendTo`, `baseZIndex`, and `autoZIndex` to control portal insertion and stacking.

```tsx
const contextmenu = useContextMenu({ appendTo: 'body', baseZIndex: 0, autoZIndex: true });
```

### Custom Styling with Data Attributes

All prop getters attach `data-scope="contextmenu"` and a `data-part` attribute for CSS targeting. Additional data attributes reflect runtime state:

**`triggerProps`** — `data-part="trigger"`.

**`getItemProps`** — `data-part="item"`, plus `data-value`, `data-focused`, `data-disabled`, and `data-checked` (for checkbox/radio items).

**`getSubTriggerProps`** — `data-part="subtrigger"`, plus `data-value`, `data-focused`, `data-disabled`, and `data-open` (when its submenu is expanded).

**`getIndicatorProps`** — `data-part="indicator"`, plus `data-open`/`data-closed` or `data-checked`/`data-unchecked`.

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

> **API/props table for `useContextMenu` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### useContextMenuSub

> **API/props table for `useContextMenuSub` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [ContextMenu Primitive](../../primitive/contextmenu/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
