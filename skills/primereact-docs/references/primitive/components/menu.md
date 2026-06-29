# Menu

An unstyled, accessible menu component with compound composition for inline and popup navigation.

Build fully custom navigation menus with complete control over layout and styling.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Cog } from '@primeicons/react/cog';
import { CreditCard } from '@primeicons/react/credit-card';
import { Dot } from '@primeicons/react/dot';
import { User } from '@primeicons/react/user';
import { Menu } from 'primereact/menu';
import type { MenuCheckboxItemCheckedChangeEvent, MenuRadioItemGroupValueChangeEvent } from 'primereact/menu';
import * as React from 'react';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    const [notifications, setNotifications] = React.useState(true);
    const [sound, setSound] = React.useState(false);
    const [theme, setTheme] = React.useState('light');

    return (
        <div className={styles.container}>
            <Menu.Root>
                <Menu.Trigger className={styles.trigger}>Account</Menu.Trigger>
                <Menu.Portal>
                    <Menu.Positioner sideOffset={4}>
                        <Menu.Popup className={styles.popup}>
                            <Menu.List className={styles.list}>
                                <Menu.Group>
                                    <Menu.Label className={styles.label}>My Account</Menu.Label>
                                    <Menu.Item className={styles.item}>
                                        <User className={styles.icon} />
                                        Profile
                                    </Menu.Item>
                                    <Menu.Item className={styles.item}>
                                        <CreditCard className={styles.icon} />
                                        Billing
                                    </Menu.Item>
                                    <Menu.Item className={styles.item}>
                                        <Cog className={styles.icon} />
                                        Settings
                                    </Menu.Item>
                                </Menu.Group>

                                <Menu.Separator className={styles.separator} />

                                <Menu.Group>
                                    <Menu.Label className={styles.label}>Notifications</Menu.Label>
                                    <Menu.CheckboxItem
                                        className={styles.item}
                                        checked={notifications}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setNotifications(e.checked)}
                                    >
                                        <Menu.CheckboxItemIndicator className={styles.indicator}>
                                            <Check />
                                        </Menu.CheckboxItemIndicator>
                                        Enable notifications
                                    </Menu.CheckboxItem>
                                    <Menu.CheckboxItem
                                        className={styles.item}
                                        checked={sound}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setSound(e.checked)}
                                    >
                                        <Menu.CheckboxItemIndicator className={styles.indicator}>
                                            <Check />
                                        </Menu.CheckboxItemIndicator>
                                        Play sound
                                    </Menu.CheckboxItem>
                                </Menu.Group>

                                <Menu.Separator className={styles.separator} />

                                <Menu.Group>
                                    <Menu.Label className={styles.label}>Appearance</Menu.Label>
                                    <Menu.RadioItemGroup
                                        value={theme}
                                        onValueChange={(e: MenuRadioItemGroupValueChangeEvent) => setTheme(e.value as string)}
                                    >
                                        <Menu.RadioItem className={styles.item} value="light">
                                            <Menu.RadioItemIndicator className={styles.indicator}>
                                                <Dot />
                                            </Menu.RadioItemIndicator>
                                            Light
                                        </Menu.RadioItem>
                                        <Menu.RadioItem className={styles.item} value="dark">
                                            <Menu.RadioItemIndicator className={styles.indicator}>
                                                <Dot />
                                            </Menu.RadioItemIndicator>
                                            Dark
                                        </Menu.RadioItem>
                                        <Menu.RadioItem className={styles.item} value="system">
                                            <Menu.RadioItemIndicator className={styles.indicator}>
                                                <Dot />
                                            </Menu.RadioItemIndicator>
                                            System
                                        </Menu.RadioItem>
                                    </Menu.RadioItemGroup>
                                </Menu.Group>
                            </Menu.List>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
            </Menu.Root>
        </div>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `List`, `Item`, `CheckboxItem`, `RadioItemGroup`, `RadioItem`, `Sub`, `SubTrigger`, `Indicator`, `Label`, `Separator`, `Trigger`, `Portal`, `Positioner`, `Popup`, `Arrow`. Submenus reuse `Portal`/`Positioner`/`Popup` inside `Menu.Submenu`; the same components automatically detect the sub context.
- Inline and portal-based popup rendering modes
- Nested submenus with open/close coordination
- Checkbox and radio item types with indicator matching
- Built-in character search to jump to items by typing
- Composite mode for complex nested menus with hover-to-open behavior

## Usage

```tsx
import { Menu } from 'primereact/menu';
```

```tsx
<Menu.Root>
    <Menu.Trigger />
    <Menu.Portal>
        <Menu.Positioner>
            <Menu.Popup>
                <Menu.List>
                    <Menu.Item />
                    <Menu.Submenu>
                        <Menu.SubmenuTrigger>
                            <Menu.Indicator />
                        </Menu.SubmenuTrigger>
                        <Menu.Portal>
                            <Menu.Positioner>
                                <Menu.Popup>
                                    <Menu.List>
                                        <Menu.Item />
                                        <Menu.Item />
                                    </Menu.List>
                                </Menu.Popup>
                            </Menu.Positioner>
                        </Menu.Portal>
                    </Menu.Submenu>
                </Menu.List>
            </Menu.Popup>
        </Menu.Positioner>
    </Menu.Portal>
</Menu.Root>
```

## Behavior

### Checkbox Items

Use `Menu.CheckboxItem` to create a toggleable item managed by `useCheckbox`. Use `Menu.Indicator` with `match="checked"` to display a checkmark when the item is active.

```tsx
<Menu.CheckboxItem defaultChecked={true}>
    <Menu.Indicator match="checked">
        <Check />
    </Menu.Indicator>
    Enable Notifications
</Menu.CheckboxItem>
```

### Radio Items

Wrap `Menu.RadioItem` elements inside a `Menu.RadioItemGroup`. The group is managed by `useRadioButtonGroup` and each item by `useRadioButton`. Use `Menu.Indicator` with `match="checked"` to display a dot or icon for the selected option.

```tsx
<Menu.RadioItemGroup defaultValue="light">
    <Menu.RadioItem value="light">
        <Menu.Indicator match="checked">
            <Dot />
        </Menu.Indicator>
        Light Mode
    </Menu.RadioItem>
    <Menu.RadioItem value="dark">
        <Menu.Indicator match="checked">
            <Dot />
        </Menu.Indicator>
        Dark Mode
    </Menu.RadioItem>
</Menu.RadioItemGroup>
```

### Motion Animation

```tsx
<Menu.Popup motionProps={{ name: 'p-popover' }}></Menu.Popup>
```

See [Motion](motion.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Menu.Item as="a" href="/dashboard">
    Dashboard
</Menu.Item>
```

Default elements: `Root`=`div`, `List`=`ul`, `Item`=`li`, `CheckboxItem`=`li`, `RadioItem`=`li`, `Sub`=`li`, `SubTrigger`=`div`, `Trigger`=`button`, `Label`=`li`, `Separator`=`li`, `Indicator`=`span`, `Popup`=`div`, `Positioner`=`div`, `Arrow`=`div`, `RadioItemGroup`=`div`, `Portal`=portal.

### Render Function Children

`Item` and `SubTrigger` accept a render function as children, providing access to the component instance.

```tsx
<Menu.Item>{(instance) => <span>{instance.focused ? 'Focused' : 'Idle'}</span>}</Menu.Item>
```

## Pass Through

## API

### MenuRoot

> **API/props table for `MenuRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value    |
| ------------ | -------- |
| `data-scope` | `"menu"` |
| `data-part`  | `"root"` |

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

### MenuTrigger

> **API/props table for `MenuTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                     |
| ------------ | ------------------------- |
| `data-scope` | `"menu"`                  |
| `data-part`  | `"trigger"`               |
| `data-open`  | Present when menu is open |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### MenuList

> **API/props table for `MenuList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value    |
| ------------ | -------- |
| `data-scope` | `"menu"` |
| `data-part`  | `"list"` |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuListPassThroughType> | Used to pass attributes to the root's DOM element. |
| content | MenuListPassThroughType> | Used to pass attributes to the content's DOM element. |

### MenuItem

> **API/props table for `MenuItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                         |
| --------------- | ----------------------------- |
| `data-scope`    | `"menu"`                      |
| `data-part`     | `"item"`                      |
| `data-value`    | The item value                |
| `data-focused`  | Present when item is focused  |
| `data-disabled` | Present when item is disabled |
| `data-checked`  | Present when item is checked  |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### MenuSubmenu

> **API/props table for `MenuSubmenu` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                        |
| ------------ | ---------------------------- |
| `data-scope` | `"menu"`                     |
| `data-part`  | `"sub"`                      |
| `data-open`  | Present when submenu is open |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuSubmenuPassThroughType> | Used to pass attributes to the root's DOM element. |

### MenuSubmenuTrigger

> **API/props table for `MenuSubmenuTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                               |
| --------------- | ----------------------------------- |
| `data-scope`    | `"menu"`                            |
| `data-part`     | `"subtrigger"`                      |
| `data-value`    | The subtrigger value                |
| `data-focused`  | Present when subtrigger is focused  |
| `data-disabled` | Present when subtrigger is disabled |
| `data-open`     | Present when submenu is open        |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuSubmenuTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### MenuIndicator

> **API/props table for `MenuIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                          |
| ---------------- | ------------------------------ |
| `data-scope`     | `"menu"`                       |
| `data-part`      | `"indicator"`                  |
| `data-open`      | Present when submenu is open   |
| `data-closed`    | Present when submenu is closed |
| `data-checked`   | Present when item is checked   |
| `data-unchecked` | Present when item is unchecked |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### MenuLabel

> **API/props table for `MenuLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value     |
| ------------ | --------- |
| `data-scope` | `"menu"`  |
| `data-part`  | `"label"` |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuLabelPassThroughType> | Used to pass attributes to the root's DOM element. |

### MenuSeparator

> **API/props table for `MenuSeparator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"menu"`      |
| `data-part`  | `"separator"` |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuSeparatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### MenuCheckboxItem

> **API/props table for `MenuCheckboxItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value    |
| ------------ | -------- |
| `data-scope` | `"menu"` |
| `data-part`  | `"item"` |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuCheckboxItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### MenuRadioItemGroup

> **API/props table for `MenuRadioItemGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"menu"`       |
| `data-part`  | `"radiogroup"` |

> **API/props table for `MenuRadioItemGroup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuRadioItem

> **API/props table for `MenuRadioItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value    |
| ------------ | -------- |
| `data-scope` | `"menu"` |
| `data-part`  | `"item"` |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuRadioItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### MenuPopup

> **API/props table for `MenuPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value     |
| ------------ | --------- |
| `data-scope` | `"menu"`  |
| `data-part`  | `"popup"` |

| Label | Type | Description |
|:------|:------|:------|
| root | MenuPopupPassThroughType> | Used to pass attributes to the root's DOM element. |

### MenuPositioner

> **API/props table for `MenuPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"menu"`       |
| `data-part`  | `"positioner"` |

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

### MenuArrow

> **API/props table for `MenuArrow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value     |
| ------------ | --------- |
| `data-scope` | `"menu"`  |
| `data-part`  | `"arrow"` |

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

### MenuPortal

> **API/props table for `MenuPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | MenuPortalPassThroughType> | Used to pass attributes to the root's DOM element. |

### MenuCheckboxItem

| Label | Type | Description |
|:------|:------|:------|
| root | MenuCheckboxItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### MenuRadioItem

| Label | Type | Description |
|:------|:------|:------|
| root | MenuRadioItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### MenuIcon

> **API/props table for `MenuIcon` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuCheckboxIcon

> **API/props table for `MenuCheckboxIcon` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuRadioIcon

> **API/props table for `MenuRadioIcon` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Menu component uses the `menu` role and the value to describe the menu can either be provided with `aria-labelledby` or `aria-label` props. Each list item has a `menuitem` role with `aria-label` referring to the label of the item and `aria-disabled` defined if the item is disabled. Checkbox items use `menuitemcheckbox` and radio items use `menuitemradio` roles with `aria-checked` to indicate selection state.

In popup mode, the component implicitly manages the `aria-expanded`, `aria-haspopup` and `aria-controls` attributes of the target element to define the relation between the target and the popup.

### Keyboard Support

| Key              | Function                                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `tab`            | Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence.     |
| `shift + tab`    | Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence. |
| `enter`          | Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target.                                                                 |
| `space`          | Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target.                                                                 |
| `escape`         | If menu is in overlay mode, popup gets closes and focus moves to target.                                                                                                 |
| `down arrow`     | Moves focus to the next menuitem.                                                                                                                                        |
| `up arrow`       | Moves focus to the previous menuitem.                                                                                                                                    |
| `right arrow`    | Opens submenu if focused item has one. Moves focus to the first item of the submenu.                                                                                     |
| `left arrow`     | Closes current submenu and moves focus to parent submenu trigger.                                                                                                        |
| `alt + up arrow` | If menu is in overlay mode, popup gets closes and focus moves to the target.                                                                                             |
| `home`           | Moves focus to the first menuitem.                                                                                                                                       |
| `end`            | Moves focus to the last menuitem.                                                                                                                                        |
