# ContextMenu

An unstyled, accessible context menu component with compound composition for right-click actions.

Build fully custom right-click menus with complete control over layout and styling.

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
import { ContextMenu } from 'primereact/contextmenu';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.container}>
            <ContextMenu.Root>
                <ContextMenu.Trigger className={styles.trigger}>Right Click Here</ContextMenu.Trigger>
                <ContextMenu.Portal>
                    <ContextMenu.Positioner>
                        <ContextMenu.Popup className={styles.popup}>
                            <ContextMenu.List className={styles.list}>
                                <ContextMenu.Item className={styles.item}>
                                    <Copy className={styles.icon} />
                                    Copy
                                </ContextMenu.Item>
                                <ContextMenu.Item className={styles.item}>
                                    <Clipboard className={styles.icon} />
                                    Paste
                                </ContextMenu.Item>

                                <ContextMenu.Separator className={styles.separator} />

                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger className={styles.subtrigger}>
                                        <Folder className={styles.icon} />
                                        View
                                        <ContextMenu.Indicator className={styles.indicator}>
                                            <ChevronRight />
                                        </ContextMenu.Indicator>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.SubPortal>
                                        <ContextMenu.SubPositioner>
                                            <ContextMenu.SubPopup className={styles.popup}>
                                                <ContextMenu.List className={styles.list}>
                                                    <ContextMenu.Item className={styles.item}>
                                                        <Search className={styles.icon} />
                                                        Zoom In
                                                    </ContextMenu.Item>
                                                    <ContextMenu.Item className={styles.item}>
                                                        <Search className={styles.icon} />
                                                        Zoom Out
                                                    </ContextMenu.Item>
                                                    <ContextMenu.Item className={styles.item}>
                                                        <Refresh className={styles.icon} />
                                                        Reload
                                                    </ContextMenu.Item>
                                                </ContextMenu.List>
                                            </ContextMenu.SubPopup>
                                        </ContextMenu.SubPositioner>
                                    </ContextMenu.SubPortal>
                                </ContextMenu.Sub>

                                <ContextMenu.Separator className={styles.separator} />

                                <ContextMenu.Item className={styles.item}>
                                    <PenToSquare className={styles.icon} />
                                    Rename
                                </ContextMenu.Item>
                                <ContextMenu.Item className={styles.item}>
                                    <ExternalLink className={styles.icon} />
                                    Open Link
                                </ContextMenu.Item>

                                <ContextMenu.Separator className={styles.separator} />

                                <ContextMenu.Item className={styles.itemDanger}>
                                    <Trash className={styles.icon} />
                                    Delete
                                </ContextMenu.Item>
                            </ContextMenu.List>
                        </ContextMenu.Popup>
                    </ContextMenu.Positioner>
                </ContextMenu.Portal>
            </ContextMenu.Root>
        </div>
    );
}
```

## Features

- Compound component API with sub-components: `Root`, `Trigger`, `Portal`, `Positioner`, `Popup`, `Arrow`, `List`, `Item`, `Sub`, `SubTrigger`, `SubPortal`, `SubPositioner`, `SubPopup`, `Indicator`, `Label`, `Separator`, `RadioGroup`
- Right-click activation with automatic cursor-based popup positioning
- Global mode to attach context menu to the entire document
- Nested submenus with open/close coordination
- Checkbox and radio item types with indicator matching
- Built-in character search to jump to items by typing

## Usage

```tsx
import { ContextMenu } from 'primereact/contextmenu';
```

```tsx
<ContextMenu.Root>
    <ContextMenu.Trigger></ContextMenu.Trigger>
    <ContextMenu.Portal>
        <ContextMenu.Positioner>
            <ContextMenu.Popup>
                <ContextMenu.Arrow />
                <ContextMenu.List>
                    <ContextMenu.Label></ContextMenu.Label>
                    <ContextMenu.Item></ContextMenu.Item>
                    <ContextMenu.Separator />
                    <ContextMenu.Sub>
                        <ContextMenu.SubTrigger>
                            <ContextMenu.Indicator />
                        </ContextMenu.SubTrigger>
                        <ContextMenu.SubPortal>
                            <ContextMenu.SubPositioner>
                                <ContextMenu.SubPopup>
                                    <ContextMenu.List>
                                        <ContextMenu.Item></ContextMenu.Item>
                                    </ContextMenu.List>
                                </ContextMenu.SubPopup>
                            </ContextMenu.SubPositioner>
                        </ContextMenu.SubPortal>
                    </ContextMenu.Sub>
                </ContextMenu.List>
            </ContextMenu.Popup>
        </ContextMenu.Positioner>
    </ContextMenu.Portal>
</ContextMenu.Root>
```

## Behavior

### Checkbox Items

Set `type="checkbox"` on `ContextMenu.Item` to create a toggleable item. Use `ContextMenu.Indicator` with `match="checked"` to display a checkmark when the item is active.

```tsx
<ContextMenu.Item type="checkbox" defaultChecked={true}>
    <ContextMenu.Indicator match="checked">
        <Check />
    </ContextMenu.Indicator>
    Enable Notifications
</ContextMenu.Item>
```

### Radio Items

Wrap `ContextMenu.Item` elements with `type="radio"` inside a `ContextMenu.RadioGroup`. Use `ContextMenu.Indicator` with `match="checked"` to display a dot or icon for the selected option.

```tsx
<ContextMenu.RadioGroup defaultValue="light">
    <ContextMenu.Item type="radio" value="light">
        <ContextMenu.Indicator match="checked">
            <Dot />
        </ContextMenu.Indicator>
        Light Mode
    </ContextMenu.Item>
    <ContextMenu.Item type="radio" value="dark">
        <ContextMenu.Indicator match="checked">
            <Dot />
        </ContextMenu.Indicator>
        Dark Mode
    </ContextMenu.Item>
</ContextMenu.RadioGroup>
```

### Motion Animation

```tsx
<ContextMenu.Popup motionProps={{ name: 'p-anchored-overlay' }}></ContextMenu.Popup>
```

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<ContextMenu.Item as="a" href="/dashboard">
    Dashboard
</ContextMenu.Item>
```

Default elements: `Root`=`div`, `Trigger`=`div`, `List`=`ul`, `Item`=`li`, `Sub`=`li`, `SubTrigger`=`div`, `SubPositioner`=`div`, `SubPopup`=`div`, `Label`=`li`, `Separator`=`li`, `Indicator`=`span`, `Popup`=`div`, `Positioner`=`div`, `Arrow`=`div`, `RadioGroup`=`div`, `Portal`=portal, `SubPortal`=portal.

### Render Function Children

`Item` and `SubTrigger` accept a render function as children, providing access to the component instance.

```tsx
<ContextMenu.Item>{(instance) => <span>{instance.focused ? 'Focused' : 'Idle'}</span>}</ContextMenu.Item>
```

## Pass Through

**Pass Through example:**

```tsx
import { ChartLine } from '@primeicons/react/chart-line';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Folder } from '@primeicons/react/folder';
import { Home } from '@primeicons/react/home';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Users } from '@primeicons/react/users';
import { ContextMenu } from '@primereact/ui/contextmenu';

export default function ContextMenuPTDemo() {
    return (
        <div className="flex flex-col flex-wrap justify-center">
            <ContextMenu.Root>
                <ContextMenu.List className="w-48">
                    <ContextMenu.Item>
                        <Home />
                        Dashboard
                    </ContextMenu.Item>

                    <ContextMenu.Separator />

                    <ContextMenu.Label>Workspace</ContextMenu.Label>

                    <ContextMenu.Item>
                        <ChartLine />
                        Analytics
                    </ContextMenu.Item>

                    <ContextMenu.Sub>
                        <ContextMenu.SubTrigger>
                            <Folder />
                            Projects
                            <ContextMenu.Indicator>
                                <ChevronRight />
                            </ContextMenu.Indicator>
                        </ContextMenu.SubTrigger>
                    </ContextMenu.Sub>

                    <ContextMenu.Sub>
                        <ContextMenu.SubTrigger>
                            <Users />
                            Team
                            <ContextMenu.Indicator>
                                <ChevronRight />
                            </ContextMenu.Indicator>
                        </ContextMenu.SubTrigger>
                    </ContextMenu.Sub>

                    <ContextMenu.Separator />

                    <ContextMenu.Item>
                        <QuestionCircle />
                        Help & Support
                    </ContextMenu.Item>
                </ContextMenu.List>
            </ContextMenu.Root>
        </div>
    );
}
```

## API

### ContextMenuRoot

> **API/props table for `ContextMenuRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"root"`        |

> **API/props table for `ContextMenuRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuTrigger

> **API/props table for `ContextMenuTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"trigger"`     |

> **API/props table for `ContextMenuTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuList

> **API/props table for `ContextMenuList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"list"`        |

> **API/props table for `ContextMenuList` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuItem

> **API/props table for `ContextMenuItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                         |
| --------------- | ----------------------------- |
| `data-scope`    | `"contextmenu"`               |
| `data-part`     | `"item"`                      |
| `data-value`    | The item value                |
| `data-focused`  | Present when item is focused  |
| `data-disabled` | Present when item is disabled |
| `data-checked`  | Present when item is checked  |

> **API/props table for `ContextMenuItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuSub

> **API/props table for `ContextMenuSub` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                        |
| ------------ | ---------------------------- |
| `data-scope` | `"contextmenu"`              |
| `data-part`  | `"sub"`                      |
| `data-open`  | Present when submenu is open |

> **API/props table for `ContextMenuSub` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuSubTrigger

> **API/props table for `ContextMenuSubTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                               |
| --------------- | ----------------------------------- |
| `data-scope`    | `"contextmenu"`                     |
| `data-part`     | `"subtrigger"`                      |
| `data-value`    | The subtrigger value                |
| `data-focused`  | Present when subtrigger is focused  |
| `data-disabled` | Present when subtrigger is disabled |
| `data-open`     | Present when submenu is open        |

> **API/props table for `ContextMenuSubTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuSubPositioner

> **API/props table for `ContextMenuSubPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value             |
| ------------ | ----------------- |
| `data-scope` | `"contextmenu"`   |
| `data-part`  | `"subpositioner"` |

**CSS Custom Properties**

The positioner element exposes CSS custom properties for layout and transform control.

| CSS Variable                | Description                              |
| --------------------------- | ---------------------------------------- |
| `--available-height`        | Available vertical space in pixels       |
| `--available-width`         | Available horizontal space in pixels     |
| `--transform-origin`        | Computed transform origin for animations |
| `--positioner-anchor-width` | Width of the anchor/trigger element      |

> **API/props table for `ContextMenuSubPositioner` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuSubPortal

> **API/props table for `ContextMenuSubPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ContextMenuSubPortal` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuSubPopup

> **API/props table for `ContextMenuSubPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"subpopup"`    |

> **API/props table for `ContextMenuSubPopup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuIndicator

> **API/props table for `ContextMenuIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                          |
| ---------------- | ------------------------------ |
| `data-scope`     | `"contextmenu"`                |
| `data-part`      | `"indicator"`                  |
| `data-open`      | Present when submenu is open   |
| `data-closed`    | Present when submenu is closed |
| `data-checked`   | Present when item is checked   |
| `data-unchecked` | Present when item is unchecked |

> **API/props table for `ContextMenuIndicator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuLabel

> **API/props table for `ContextMenuLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"label"`       |

> **API/props table for `ContextMenuLabel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuSeparator

> **API/props table for `ContextMenuSeparator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"separator"`   |

> **API/props table for `ContextMenuSeparator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuRadioGroup

> **API/props table for `ContextMenuRadioGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"radiogroup"`  |

> **API/props table for `ContextMenuRadioGroup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuPopup

> **API/props table for `ContextMenuPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"popup"`       |

> **API/props table for `ContextMenuPopup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuPositioner

> **API/props table for `ContextMenuPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"positioner"`  |

**CSS Custom Properties**

The positioner element exposes CSS custom properties for layout and transform control.

| CSS Variable                | Description                              |
| --------------------------- | ---------------------------------------- |
| `--available-height`        | Available vertical space in pixels       |
| `--available-width`         | Available horizontal space in pixels     |
| `--transform-origin`        | Computed transform origin for animations |
| `--positioner-anchor-width` | Width of the anchor/trigger element      |

> **API/props table for `ContextMenuPositioner` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuArrow

> **API/props table for `ContextMenuArrow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"arrow"`       |

**CSS Custom Properties**

The arrow element exposes CSS custom properties for dynamic positioning:

| CSS Variable          | Description                    |
| --------------------- | ------------------------------ |
| `--placer-arrow-x`    | Horizontal offset of arrow     |
| `--placer-arrow-y`    | Vertical offset of arrow       |
| `--placer-arrow-left` | Left position of arrow element |
| `--placer-arrow-top`  | Top position of arrow element  |

> **API/props table for `ContextMenuArrow` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuPortal

> **API/props table for `ContextMenuPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ContextMenuPortal` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuCheckboxItem

> **API/props table for `ContextMenuCheckboxItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuRadioItem

> **API/props table for `ContextMenuRadioItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuIcon

> **API/props table for `ContextMenuIcon` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuCheckboxIcon

> **API/props table for `ContextMenuCheckboxIcon` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ContextMenuRadioIcon

> **API/props table for `ContextMenuRadioIcon` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

ContextMenu component uses the `menu` role and the value to describe the menu can either be provided with `aria-labelledby` or `aria-label` props. Each list item has a `menuitem` role with `aria-label` referring to the label of the item and `aria-disabled` defined if the item is disabled. Checkbox items use `menuitemcheckbox` and radio items use `menuitemradio` roles with `aria-checked` to indicate selection state.

The component implicitly manages the `aria-expanded`, `aria-haspopup` and `aria-controls` attributes of the trigger element to define the relation between the trigger and the popup.

### Keyboard Support

| Key              | Function                                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `tab`            | Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence.     |
| `shift + tab`    | Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence. |
| `enter`          | Activates the focused menuitem. Popup closes and focus moves to target.                                                                                                  |
| `space`          | Activates the focused menuitem. Popup closes and focus moves to target.                                                                                                  |
| `escape`         | Closes the popup and focus moves to target.                                                                                                                              |
| `down arrow`     | Moves focus to the next menuitem.                                                                                                                                        |
| `up arrow`       | Moves focus to the previous menuitem.                                                                                                                                    |
| `right arrow`    | Opens submenu if focused item has one. Moves focus to the first item of the submenu.                                                                                     |
| `left arrow`     | Closes current submenu and moves focus to parent submenu trigger.                                                                                                        |
| `alt + up arrow` | Closes the popup and focus moves to the target.                                                                                                                          |
| `home`           | Moves focus to the first menuitem.                                                                                                                                       |
| `end`            | Moves focus to the last menuitem.                                                                                                                                        |
