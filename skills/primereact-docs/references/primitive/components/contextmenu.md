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

                                <ContextMenu.Submenu>
                                    <ContextMenu.SubmenuTrigger className={styles.subtrigger}>
                                        <Folder className={styles.icon} />
                                        View
                                        <ContextMenu.SubmenuIndicator className={styles.indicator}>
                                            <ChevronRight />
                                        </ContextMenu.SubmenuIndicator>
                                    </ContextMenu.SubmenuTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.Positioner>
                                            <ContextMenu.Popup className={styles.popup}>
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
                                            </ContextMenu.Popup>
                                        </ContextMenu.Positioner>
                                    </ContextMenu.Portal>
                                </ContextMenu.Submenu>

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
                    <ContextMenu.Submenu>
                        <ContextMenu.SubmenuTrigger>
                            <ContextMenu.Indicator />
                        </ContextMenu.SubmenuTrigger>
                        <ContextMenu.SubmenuPortal>
                            <ContextMenu.SubmenuPositioner>
                                <ContextMenu.SubmenuPopup>
                                    <ContextMenu.List>
                                        <ContextMenu.Item></ContextMenu.Item>
                                    </ContextMenu.List>
                                </ContextMenu.SubmenuPopup>
                            </ContextMenu.SubmenuPositioner>
                        </ContextMenu.SubmenuPortal>
                    </ContextMenu.Submenu>
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

See [Motion](motion.md) for animation phases, CSS variables, and hide strategies.

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

## API

### ContextMenuRoot

> **`ContextMenuRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"root"`        |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| list | MenuRootPassThroughType> | Used to pass attributes to the list's DOM element. |
| item | MenuRootPassThroughType> | Used to pass attributes to the item's DOM element. |
| label | MenuRootPassThroughType> | Used to pass attributes to the label's DOM element. |
| sub | MenuRootPassThroughType> | Used to pass attributes to the submenu's DOM element. |
| trigger | MenuRootPassThroughType> | Used to pass attributes to the trigger's DOM element. |
| subtrigger | MenuRootPassThroughType> | Used to pass attributes to the subtrigger's DOM element. |
| checkboxItemIndicator | MenuRootPassThroughType> | Used to pass attributes to the checkbox item indicator's DOM element. |
| radioItemIndicator | MenuRootPassThroughType> | Used to pass attributes to the radio item indicator's DOM element. |
| submenuIndicator | MenuRootPassThroughType> | Used to pass attributes to the submenu indicator's DOM element. |
| separator | MenuRootPassThroughType> | Used to pass attributes to the separator's DOM element. |
| popup | MenuRootPassThroughType> | Used to pass attributes to the popup's DOM element. |
| arrow | MenuRootPassThroughType> | Used to pass attributes to the arrow's DOM element. |
| positioner | MenuRootPassThroughType> | Used to pass attributes to the positioner's DOM element. |
| subpositioner | MenuRootPassThroughType> | Used to pass attributes to the subpositioner's DOM element. |
| subpopup | MenuRootPassThroughType> | Used to pass attributes to the subpopup's DOM element. |
| subportal | MenuRootPassThroughType> | Used to pass attributes to the subportal's DOM element. |

### ContextMenuTrigger

> **`ContextMenuTrigger` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"trigger"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | ContextMenuTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### ContextMenuList

> **`ContextMenuList` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"list"`        |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuListPassThroughType> | Used to pass attributes to the root's DOM element. |
| content | MenuListPassThroughType> | Used to pass attributes to the content's DOM element. |

### ContextMenuItem

> **`ContextMenuItem` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

| Attribute       | Value                         |
| --------------- | ----------------------------- |
| `data-scope`    | `"contextmenu"`               |
| `data-part`     | `"item"`                      |
| `data-value`    | The item value                |
| `data-focused`  | Present when item is focused  |
| `data-disabled` | Present when item is disabled |
| `data-checked`  | Present when item is checked  |

| Label | Type | Description |
|:------|:------|:------|
| root | ContextMenuItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### ContextMenuSubmenu

> **`ContextMenuSubmenu` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

| Attribute    | Value                        |
| ------------ | ---------------------------- |
| `data-scope` | `"contextmenu"`              |
| `data-part`  | `"sub"`                      |
| `data-open`  | Present when submenu is open |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuSubmenuPassThroughType> | Used to pass attributes to the root's DOM element. |

### ContextMenuSubmenuTrigger

> **`ContextMenuSubmenuTrigger` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

| Attribute       | Value                               |
| --------------- | ----------------------------------- |
| `data-scope`    | `"contextmenu"`                     |
| `data-part`     | `"subtrigger"`                      |
| `data-value`    | The subtrigger value                |
| `data-focused`  | Present when subtrigger is focused  |
| `data-disabled` | Present when subtrigger is disabled |
| `data-open`     | Present when submenu is open        |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuSubmenuTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### ContextMenuSubmenuPositioner

> **`ContextMenuSubmenuPositioner` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

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

> **`ContextMenuSubmenuPositioner` API table (`pt`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

### ContextMenuSubmenuPortal

> **`ContextMenuSubmenuPortal` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

> **`ContextMenuSubmenuPortal` API table (`pt`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

### ContextMenuSubmenuPopup

> **`ContextMenuSubmenuPopup` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"subpopup"`    |

> **`ContextMenuSubmenuPopup` API table (`pt`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

### ContextMenuIndicator

> **`ContextMenuIndicator` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

| Attribute        | Value                          |
| ---------------- | ------------------------------ |
| `data-scope`     | `"contextmenu"`                |
| `data-part`      | `"indicator"`                  |
| `data-open`      | Present when submenu is open   |
| `data-closed`    | Present when submenu is closed |
| `data-checked`   | Present when item is checked   |
| `data-unchecked` | Present when item is unchecked |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### ContextMenuLabel

> **`ContextMenuLabel` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"label"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuLabelPassThroughType> | Used to pass attributes to the root's DOM element. |

### ContextMenuSeparator

> **`ContextMenuSeparator` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"separator"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuSeparatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### ContextMenuRadioGroup

> **`ContextMenuRadioGroup` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"radiogroup"`  |

> **`ContextMenuRadioGroup` API table (`pt`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

### ContextMenuPopup

> **`ContextMenuPopup` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"contextmenu"` |
| `data-part`  | `"popup"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuPopupPassThroughType> | Used to pass attributes to the root's DOM element. |

### ContextMenuPositioner

> **`ContextMenuPositioner` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

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

| Label | Type | Description |
|:------|:------|:------|
| root | MenuPositionerPassThroughType> | Used to pass attributes to the root's DOM element. |

### ContextMenuArrow

> **`ContextMenuArrow` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

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

| Label | Type | Description |
|:------|:------|:------|
| root | MenuArrowPassThroughType> | Used to pass attributes to the root's DOM element. |

### ContextMenuPortal

> **`ContextMenuPortal` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | MenuPortalPassThroughType> | Used to pass attributes to the root's DOM element. |

### ContextMenuCheckboxItem

| Label | Type | Description |
|:------|:------|:------|
| root | ContextMenuCheckboxItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### ContextMenuRadioItem

| Label | Type | Description |
|:------|:------|:------|
| root | ContextMenuRadioItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### ContextMenuIcon

> **`ContextMenuIcon` API table (`pt`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

### ContextMenuCheckboxIcon

> **`ContextMenuCheckboxIcon` API table (`pt`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

### ContextMenuRadioIcon

> **`ContextMenuRadioIcon` API table (`pt`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/contextmenu or the installed `@primereact/types`.

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
