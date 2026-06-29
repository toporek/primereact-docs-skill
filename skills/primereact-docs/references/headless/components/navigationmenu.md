# useNavigationMenu

Hook that coordinates multiple useMenu instances inside a horizontal navigation bar with sibling traversal and single-open-at-a-time behavior.

```tsx
'use client';
import { useMenu } from '@primereact/headless/menu';
import { useNavigationMenu } from '@primereact/headless/navigationmenu';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import * as React from 'react';
import { createPortal } from 'react-dom';

function HeadlessMenu({
    label,
    items,
    navigationmenu,
    menuId
}: {
    label: string;
    items: string[];
    navigationmenu: ReturnType<typeof useNavigationMenu>;
    menuId: string;
}) {
    const menu = useMenu({ navigationmenu, navigationmenuMenuId: menuId });
    const { triggerProps, popupProps, positionerProps, getListProps, getItemProps, state, popover } = menu;
    const portal = usePortal();

    // Drive position via floating-ui through usePositioner — without it the
    // popup would render at (0,0) since popover only tracks element refs.
    usePositioner({
        anchor: popover.state.anchorElement,
        content: popover.state.positionerElement,
        side: 'bottom',
        align: 'start',
        sideOffset: 4,
        flip: true,
        shift: true
    });

    // Compose the popover anchor ref from triggerProps with NavigationMenu's
    // trigger registration so both popup positioning and sibling navigation
    // work for the same button element.
    const triggerRef = React.useCallback(
        (node: HTMLButtonElement | null) => {
            (triggerProps.ref as (n: HTMLElement | null) => void)?.(node);
            navigationmenu.registerTrigger(menuId, node);
        },
        [triggerProps.ref, navigationmenu, menuId]
    );

    return (
        <>
            <button
                {...triggerProps}
                ref={triggerRef}
                onKeyDown={(event) => navigationmenu.onTriggerKeyDown(menuId, event)}
                onMouseEnter={() => navigationmenu.onTriggerMouseEnter(menuId)}
                className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800 data-open:bg-surface-100 dark:data-open:bg-surface-800 outline-none"
            >
                {label}
            </button>
            {portal.state.mounted &&
                state.open &&
                popover.state.rendered &&
                createPortal(
                    <div {...positionerProps}>
                        <div
                            {...popupProps}
                            className="min-w-44 bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg shadow-md overflow-hidden"
                        >
                            <div {...getListProps()} className="list-none m-0 p-1 flex flex-col gap-0.5 outline-none">
                                {items.map((item) => (
                                    <div
                                        key={item}
                                        {...getItemProps({ value: item.toLowerCase().replace(/\s+/g, '-') })}
                                        className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800 data-focused:bg-surface-100 dark:data-focused:bg-surface-700 select-none"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}

export default function BasicDemo() {
    const navigationmenu = useNavigationMenu();

    return (
        <div className="flex justify-center">
            <div
                {...navigationmenu.rootProps}
                className="inline-flex items-center gap-1 p-1 bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg"
            >
                <HeadlessMenu label="File" items={['New Document', 'Open', 'Save', 'Save As…']} navigationmenu={navigationmenu} menuId="file" />
                <HeadlessMenu label="Edit" items={['Undo', 'Redo', 'Cut', 'Copy', 'Paste']} navigationmenu={navigationmenu} menuId="edit" />
                <HeadlessMenu label="View" items={['Zoom In', 'Zoom Out', 'Reset Zoom']} navigationmenu={navigationmenu} menuId="view" />
                <HeadlessMenu label="Help" items={['Documentation', 'Support', 'About']} navigationmenu={navigationmenu} menuId="help" />
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useMenu } from '@primereact/headless/menu';
import { useNavigationMenu } from '@primereact/headless/navigationmenu';
```

```tsx
const navigationmenu = useNavigationMenu();
const fileMenu = useMenu({ navigationmenu, navigationmenuMenuId: 'file' });
const editMenu = useMenu({ navigationmenu, navigationmenuMenuId: 'edit' });
```

`useNavigationMenu` tracks which child menu is currently open and switches between them on hover or arrow-key traversal. Each `useMenu` registered to the bar surrenders its open-state to the navigation menu via the `navigationmenu` / `navigationmenuMenuId` props.

See [Primitive](../../primitive/components/navigationmenu.md) for a component-based API.

## Features

- **Single-open-at-a-time**, only one child menu may be open; opening another auto-closes the previous
- **Hover-to-switch**, moving the pointer onto a sibling trigger while a menu is open transfers focus and open state
- **Arrow-key traversal**, `focusSibling` lets child menus route arrow keys across triggers
- **Instant transition signal**, `registerInstantSignal` enables animation-less hand-off when switching siblings
- **Horizontal or vertical orientation**, exposed via `aria-orientation` and `data-orientation`

## API

### useNavigationMenu

> **`useNavigationMenu` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/navigationmenu or the installed `@primereact/types`.

### Returned values

| Property            | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| `rootProps`         | Props for the navigation menu container (`role="menubar"`, ARIA + data attributes) |
| `state.openMenuId`  | Id of the currently open child menu, or `null`                                     |
| `state.hasOpenMenu` | Whether any child menu is currently open                                           |
| `isMenuOpen(id)`    | Returns `true` when the menu with the given id is the active one                   |
| `onMenuOpenChange`  | Callback used by child `useMenu` to report open-state changes back to the bar      |
| `focusSibling`      | `(currentMenuId, 'next' \| 'previous')`, moves focus to the adjacent trigger       |
| `setPendingFocus`   | Marks a sibling for focus after the current menu closes                            |
| `registerTrigger`   | Used by child menus to register their trigger DOM ref for keyboard navigation      |

## Accessibility

NavigationMenu exposes `role="menubar"` and reflects orientation via `aria-orientation`. Each child trigger participates in arrow-key navigation.

### Keyboard Support

| Key                          | Function                                                             |
| ---------------------------- | -------------------------------------------------------------------- |
| `left arrow` / `right arrow` | Moves focus to the previous / next trigger (horizontal orientation). |
| `up arrow` / `down arrow`    | Moves focus to the previous / next trigger (vertical orientation).   |
| `enter` / `space`            | Opens the focused menu.                                              |
| `home` / `end`               | Moves focus to the first / last trigger.                             |
| `escape`                     | Closes the open menu and returns focus to its trigger.               |
