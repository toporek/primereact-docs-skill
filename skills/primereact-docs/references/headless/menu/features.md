# useMenu

Hook that manages menu state, keyboard navigation, focus tracking, and submenu coordination.

```tsx
'use client';
import { Briefcase } from '@primeicons/react/briefcase';
import { ChartLine } from '@primeicons/react/chart-line';
import { CheckCircle } from '@primeicons/react/check-circle';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Clock } from '@primeicons/react/clock';
import { Folder } from '@primeicons/react/folder';
import { Home } from '@primeicons/react/home';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Star } from '@primeicons/react/star';
import { useMenu } from '@primereact/headless/menu';
import { useMenuSub } from '@primereact/headless/menu/sub';

export default function BasicDemo() {
    const menu = useMenu();
    const { rootProps, getListProps, getItemProps, labelProps, separatorProps } = menu;
    const projectsSub = useMenuSub({ defaultOpen: true });
    const projectsSubTriggerProps = menu.getSubTriggerProps({ value: 'projects', sub: projectsSub });

    return (
        <div className="flex justify-center">
            <div
                {...rootProps}
                className="w-64 border border-surface-200 rounded-lg bg-surface-0 dark:bg-surface-900 dark:border-surface-700 overflow-hidden"
            >
                <ul {...getListProps()} className="list-none m-0 p-1 flex flex-col gap-0.5 outline-none">
                    <li
                        {...getItemProps({ value: 'dashboard' })}
                        className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-800 data-[focused]:bg-surface-100 dark:data-[focused]:bg-surface-700 text-sm select-none"
                    >
                        <Home className="w-4! h-4! text-surface-500" />
                        Dashboard
                    </li>

                    <li {...separatorProps} className="border-t border-surface-200 dark:border-surface-700 my-1" />

                    <li {...labelProps} className="px-3 py-1.5 text-xs font-semibold text-surface-500 uppercase tracking-wide">
                        Workspace
                    </li>

                    <li
                        {...getItemProps({ value: 'analytics' })}
                        className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-800 data-[focused]:bg-surface-100 dark:data-[focused]:bg-surface-700 text-sm select-none"
                    >
                        <ChartLine className="w-4! h-4! text-surface-500" />
                        Analytics
                    </li>

                    <li {...projectsSub.subProps}>
                        <div
                            {...projectsSubTriggerProps}
                            className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-800 data-[focused]:bg-surface-100 dark:data-[focused]:bg-surface-700 text-sm select-none"
                        >
                            <Folder className="w-4! h-4! text-surface-500" />
                            Projects
                            <span
                                className="ml-auto transition-transform duration-200"
                                style={{ transform: projectsSub.state.open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                <ChevronDown className="w-3.5 h-3.5 text-surface-400" />
                            </span>
                        </div>
                        <ul {...menu.getListProps({ value: 'projects', sub: projectsSub })} className="list-none m-0 p-0 pl-4">
                            <li
                                {...getItemProps({ value: 'active-projects' })}
                                className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-800 data-[focused]:bg-surface-100 dark:data-[focused]:bg-surface-700 text-sm select-none"
                            >
                                <Briefcase className="w-4! h-4! text-surface-500" />
                                Active Projects
                            </li>
                            <li
                                {...getItemProps({ value: 'recent' })}
                                className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-800 data-[focused]:bg-surface-100 dark:data-[focused]:bg-surface-700 text-sm select-none"
                            >
                                <Clock className="w-4! h-4! text-surface-500" />
                                Recent
                            </li>
                            <li
                                {...getItemProps({ value: 'favorites' })}
                                className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-800 data-[focused]:bg-surface-100 dark:data-[focused]:bg-surface-700 text-sm select-none"
                            >
                                <Star className="w-4! h-4! text-surface-500" />
                                Favorites
                            </li>
                            <li
                                {...getItemProps({ value: 'completed' })}
                                className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-800 data-[focused]:bg-surface-100 dark:data-[focused]:bg-surface-700 text-sm select-none"
                            >
                                <CheckCircle className="w-4! h-4! text-surface-500" />
                                Completed
                            </li>
                        </ul>
                    </li>

                    <li {...separatorProps} className="border-t border-surface-200 dark:border-surface-700 my-1" />

                    <li
                        {...getItemProps({ value: 'help' })}
                        className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-800 data-[focused]:bg-surface-100 dark:data-[focused]:bg-surface-700 text-sm select-none"
                    >
                        <QuestionCircle className="w-4! h-4! text-surface-500" />
                        Help & Support
                    </li>
                </ul>
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1-2,4-6,9-14}
import { useMenu } from '@primereact/headless/menu';
import { useMenuSub } from '@primereact/headless/menu/sub';

const menu = useMenu();
const sub = useMenuSub({ defaultOpen: true });
const subTriggerProps = menu.getSubTriggerProps({ value: 'projects', sub });

return (
    <div {...menu.rootProps}>
        <ul {...menu.getListProps()}>
            <li {...menu.getItemProps({ value: 'item1' })}></li>
            <li {...sub.subProps}>
                <div {...subTriggerProps}></div>
                <ul {...menu.getListProps({ value: 'projects', sub })}></ul>
            </li>
        </ul>
    </div>
);
```

`useMenu` manages focus tracking, keyboard navigation, and submenu orchestration for menu structures — see [Primitive](../../primitive/menu/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects: `rootProps`, `triggerProps`, `labelProps`, `separatorProps`, `radioGroupProps`
- Dynamic prop getters: `getItemProps`, `getSubTriggerProps`, `getListProps`, `getIndicatorProps`
- Built-in character search to jump to items by typing
- Composite mode for nested menus with hover-to-open submenu behavior
- Portal-based popup rendering with configurable positioning via `usePopover`
- Checkbox and radio item types with `getItemProps({ type: 'checkbox' | 'radio' })`

## Behavior

### Inline Menu

By default, `useMenu` renders an inline menu. Spread `rootProps` on the container and `getListProps()` on the list element.

```tsx
const menu = useMenu();
```

### Portal (Popup) Menu

When the popover is used, spread `triggerProps` on a button to toggle visibility. Use `state.open` to conditionally render the popup.

```tsx
const menu = useMenu();

<button {...menu.triggerProps}>Open</button>;
{
    menu.state.open && <ul {...menu.getListProps()}>...</ul>;
}
```

### Composite Mode

Set `composite` to enable nested submenu behavior with hover-to-open and arrow key navigation across submenu levels.

```tsx
const menu = useMenu({ composite: true });
```

### Submenus

Use `useMenuSub` for each submenu. Pass the sub instance to `getSubTriggerProps` and `getListProps` to wire up open/close behavior.

```tsx
const sub = useMenuSub();
const subTriggerProps = menu.getSubTriggerProps({ value: 'files', sub });
const subListProps = menu.getListProps({ value: 'files', sub });
```

### Checkbox and Radio Items

Pass `type` and `checked` to `getItemProps` for checkbox or radio behavior. Wrap radio items in an element with `radioGroupProps`.

```tsx
menu.getItemProps({ value: 'notifications', type: 'checkbox', checked: true });
menu.getItemProps({ value: 'light', type: 'radio', checked: selectedTheme === 'light' });
```

### Indicator Props

`getIndicatorProps` returns visibility state and data attributes for submenu arrows, checkmarks, or radio dots. Use `match` to control when the indicator is visible.

```tsx
const indicatorProps = menu.getIndicatorProps({ type: 'checkbox', checked: true, match: 'checked' });
// indicatorProps.matchVisible === true
```

### Controlled Visibility

Use `open` and `onOpenChange` for programmatic control over the popup state.

```tsx
const [open, setOpen] = React.useState(false);
const menu = useMenu({ open, onOpenChange: (e) => setOpen(e.value) });
```

### Custom Styling with Data Attributes

All prop getters attach `data-scope="menu"` and a `data-part` attribute for CSS targeting. Additional data attributes reflect runtime state:

**`getItemProps`** — `data-part="item"`, plus `data-value`, `data-focused` (keyboard/mouse focus), `data-disabled`, and `data-checked` (for checkbox/radio items).

**`getSubTriggerProps`** — `data-part="subtrigger"`, plus `data-value`, `data-focused`, `data-disabled`, and `data-open` (when its submenu is expanded).

**`getIndicatorProps`** — `data-part="indicator"`, plus `data-open`/`data-closed` (submenu indicators) or `data-checked`/`data-unchecked` (checkbox/radio indicators).

**`getListProps`** — `data-part="list"`.

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

### useMenuSub

> **API/props table for `useMenuSub` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Menu Primitive](../../primitive/menu/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
