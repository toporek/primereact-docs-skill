# useMenu

Hook that manages menu state, keyboard navigation, focus tracking, and submenu coordination.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Cog } from '@primeicons/react/cog';
import { CreditCard } from '@primeicons/react/credit-card';
import { Dot } from '@primeicons/react/dot';
import { User } from '@primeicons/react/user';
import { useMenu } from '@primereact/headless/menu';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import * as React from 'react';
import { createPortal } from 'react-dom';

export default function BasicDemo() {
    const menu = useMenu();
    const { triggerProps, popupProps, positionerProps, getListProps, getItemProps, labelProps, separatorProps, state, popover } = menu;
    const portal = usePortal();

    const [notifications, setNotifications] = React.useState(true);
    const [sound, setSound] = React.useState(false);
    const [theme, setTheme] = React.useState('light');

    usePositioner({
        anchor: popover.state.anchorElement,
        content: popover.state.positionerElement,
        side: 'bottom',
        align: 'start',
        sideOffset: 4,
        flip: true,
        shift: true
    });

    const itemClass = `relative flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800 data-focused:bg-surface-100 dark:data-focused:bg-surface-700 select-none data-checked:ps-8 data-unchecked:ps-8`;
    const indicatorClass = 'absolute start-2.5 inline-flex items-center justify-center size-3.5 text-surface-500 dark:text-surface-400';

    return (
        <div className="flex justify-center">
            <button
                {...triggerProps}
                className="inline-flex items-center px-3.5 py-2 rounded-md text-sm font-medium text-surface-700 dark:text-surface-200 border border-surface-200 dark:border-surface-700 hover:bg-surface-100 dark:hover:bg-surface-800 data-open:bg-surface-100 dark:data-open:bg-surface-800 outline-none"
            >
                Account
            </button>
            {portal.state.mounted &&
                state.open &&
                popover.state.rendered &&
                createPortal(
                    <div {...positionerProps}>
                        <div
                            {...popupProps}
                            className="w-56 bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg shadow-md overflow-hidden"
                        >
                            <div {...getListProps()} className="m-0 p-1 flex flex-col gap-0.5 outline-none">
                                <div
                                    {...labelProps}
                                    className="px-3 py-1.5 text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wide"
                                >
                                    My Account
                                </div>
                                <div {...getItemProps({ value: 'profile' })} className={itemClass}>
                                    <User className="w-4! h-4! text-surface-500" />
                                    Profile
                                </div>
                                <div {...getItemProps({ value: 'billing' })} className={itemClass}>
                                    <CreditCard className="w-4! h-4! text-surface-500" />
                                    Billing
                                </div>
                                <div {...getItemProps({ value: 'settings' })} className={itemClass}>
                                    <Cog className="w-4! h-4! text-surface-500" />
                                    Settings
                                </div>

                                <div {...separatorProps} className="border-t border-surface-200 dark:border-surface-700 my-1" />

                                <div
                                    {...labelProps}
                                    className="px-3 py-1.5 text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wide"
                                >
                                    Notifications
                                </div>
                                <div
                                    {...getItemProps({
                                        value: 'notifications',
                                        type: 'checkbox',
                                        checked: notifications,
                                        closeOnSelect: false,
                                        onSelect: () => setNotifications((v) => !v)
                                    })}
                                    className={itemClass}
                                >
                                    {notifications && (
                                        <span className={indicatorClass}>
                                            <Check />
                                        </span>
                                    )}
                                    Enable notifications
                                </div>
                                <div
                                    {...getItemProps({
                                        value: 'sound',
                                        type: 'checkbox',
                                        checked: sound,
                                        closeOnSelect: false,
                                        onSelect: () => setSound((v) => !v)
                                    })}
                                    className={itemClass}
                                >
                                    {sound && (
                                        <span className={indicatorClass}>
                                            <Check />
                                        </span>
                                    )}
                                    Play sound
                                </div>

                                <div {...separatorProps} className="border-t border-surface-200 dark:border-surface-700 my-1" />

                                <div
                                    {...labelProps}
                                    className="px-3 py-1.5 text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wide"
                                >
                                    Appearance
                                </div>
                                {(['light', 'dark', 'system'] as const).map((value) => (
                                    <div
                                        key={value}
                                        {...getItemProps({
                                            value,
                                            type: 'radio',
                                            checked: theme === value,
                                            closeOnSelect: false,
                                            onSelect: () => setTheme(value)
                                        })}
                                        className={itemClass}
                                    >
                                        {theme === value && (
                                            <span className={indicatorClass}>
                                                <Dot />
                                            </span>
                                        )}
                                        {value.charAt(0).toUpperCase() + value.slice(1)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    );
}

```

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

> **API/props table for `useMenu` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### useMenuSubmenu

> **API/props table for `useMenuSubmenu` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Arrow keys navigate items, Enter or Space activates the focused item, Escape closes, and type-ahead matches item labels. See [Primitive](../../primitive/components/menu.md#accessibility) for full WAI-ARIA compliance details.
