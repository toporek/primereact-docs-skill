# Menu

An unstyled, accessible menu component with compound composition for inline and popup navigation.

Build fully custom navigation menus with complete control over layout and styling.

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
import { Menu } from 'primereact/menu';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.container}>
            <Menu.Root className={styles.root}>
                <Menu.List className={styles.list}>
                    <Menu.Item className={styles.item}>
                        <Home className={styles.icon} />
                        Dashboard
                    </Menu.Item>

                    <Menu.Separator className={styles.separator} />

                    <Menu.Label className={styles.label}>Workspace</Menu.Label>

                    <Menu.Item className={styles.item}>
                        <ChartLine className={styles.icon} />
                        Analytics
                    </Menu.Item>

                    <Menu.Sub defaultOpen={true} className={styles.sub}>
                        <Menu.SubTrigger className={styles.subtrigger}>
                            <Folder className={styles.icon} />
                            Projects
                            <Menu.Indicator className={styles.indicator}>
                                <ChevronDown />
                            </Menu.Indicator>
                        </Menu.SubTrigger>
                        <Menu.List className={styles.list}>
                            <Menu.Item className={styles.item}>
                                <Briefcase className={styles.icon} />
                                Active Projects
                            </Menu.Item>
                            <Menu.Item className={styles.item}>
                                <Clock className={styles.icon} />
                                Recent
                            </Menu.Item>
                            <Menu.Item className={styles.item}>
                                <Star className={styles.icon} />
                                Favorites
                            </Menu.Item>
                            <Menu.Item className={styles.item}>
                                <CheckCircle className={styles.icon} />
                                Completed
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Sub>

                    <Menu.Separator className={styles.separator} />

                    <Menu.Item className={styles.item}>
                        <QuestionCircle className={styles.icon} />
                        Help & Support
                    </Menu.Item>
                </Menu.List>
            </Menu.Root>
        </div>
    );
}
```

## Features

- Compound component API with sub-components: `Root`, `List`, `Item`, `Sub`, `SubTrigger`, `SubPortal`, `SubPositioner`, `SubPopup`, `Indicator`, `Label`, `Separator`, `Trigger`, `Portal`, `Positioner`, `Popup`, `Arrow`, `RadioGroup`
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
                    <Menu.Sub>
                        <Menu.SubTrigger>
                            <Menu.Indicator />
                        </Menu.SubTrigger>
                        <Menu.SubPortal>
                            <Menu.SubPositioner>
                                <Menu.SubPopup>
                                    <Menu.List>
                                        <Menu.Item />
                                        <Menu.Item />
                                    </Menu.List>
                                </Menu.SubPopup>
                            </Menu.SubPositioner>
                        </Menu.SubPortal>
                    </Menu.Sub>
                </Menu.List>
            </Menu.Popup>
        </Menu.Positioner>
    </Menu.Portal>
</Menu.Root>
```

## Behavior

### Checkbox Items

Set `type="checkbox"` on `Menu.Item` to create a toggleable item. Use `Menu.Indicator` with `match="checked"` to display a checkmark when the item is active.

```tsx
<Menu.Item type="checkbox" defaultChecked={true}>
    <Menu.Indicator match="checked">
        <Check />
    </Menu.Indicator>
    Enable Notifications
</Menu.Item>
```

### Radio Items

Wrap `Menu.Item` elements with `type="radio"` inside a `Menu.RadioGroup`. Use `Menu.Indicator` with `match="checked"` to display a dot or icon for the selected option.

```tsx
<Menu.RadioGroup defaultValue="light">
    <Menu.Item type="radio" value="light">
        <Menu.Indicator match="checked">
            <Dot />
        </Menu.Indicator>
        Light Mode
    </Menu.Item>
    <Menu.Item type="radio" value="dark">
        <Menu.Indicator match="checked">
            <Dot />
        </Menu.Indicator>
        Dark Mode
    </Menu.Item>
</Menu.RadioGroup>
```

### Motion Animation

```tsx
<Menu.Popup motionProps={{ name: 'p-popover' }}></Menu.Popup>
```

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Menu.Item as="a" href="/dashboard">
    Dashboard
</Menu.Item>
```

Default elements: `Root`=`div`, `List`=`ul`, `Item`=`li`, `Sub`=`li`, `SubTrigger`=`div`, `SubPositioner`=`div`, `SubPopup`=`div`, `Trigger`=`button`, `Label`=`li`, `Separator`=`li`, `Indicator`=`span`, `Popup`=`div`, `Positioner`=`div`, `Arrow`=`div`, `RadioGroup`=`div`, `Portal`=portal, `SubPortal`=portal.

### Render Function Children

`Item` and `SubTrigger` accept a render function as children, providing access to the component instance.

```tsx
<Menu.Item>{(instance) => <span>{instance.focused ? 'Focused' : 'Idle'}</span>}</Menu.Item>
```

## Pass Through

**Pass Through example:**

```tsx
import { Briefcase } from '@primeicons/react/briefcase';
import { ChartLine } from '@primeicons/react/chart-line';
import { CheckCircle } from '@primeicons/react/check-circle';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Clock } from '@primeicons/react/clock';
import { Folder } from '@primeicons/react/folder';
import { Home } from '@primeicons/react/home';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Star } from '@primeicons/react/star';
import { Menu } from '@primereact/ui/menu';

export default function MenuPTDemo() {
    return (
        <div className="flex justify-center">
            <Menu.Root className="w-64">
                <Menu.List>
                    <Menu.Item>
                        <Home />
                        Dashboard
                    </Menu.Item>

                    <Menu.Separator />

                    <Menu.Label>Workspace</Menu.Label>

                    <Menu.Item>
                        <ChartLine />
                        Analytics
                    </Menu.Item>

                    <Menu.Sub defaultOpen={true}>
                        <Menu.SubTrigger>
                            <Folder />
                            Projects
                            <Menu.Indicator>
                                <ChevronDown className="transition-transform duration-200 [[data-open]>&]:rotate-180" />
                            </Menu.Indicator>
                        </Menu.SubTrigger>
                        <Menu.List>
                            <Menu.Item>
                                <Briefcase />
                                Active Projects
                            </Menu.Item>
                            <Menu.Item>
                                <Clock />
                                Recent
                            </Menu.Item>
                            <Menu.Item>
                                <Star />
                                Favorites
                            </Menu.Item>
                            <Menu.Item>
                                <CheckCircle />
                                Completed
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Sub>

                    <Menu.Separator />

                    <Menu.Item>
                        <QuestionCircle />
                        Help & Support
                    </Menu.Item>
                </Menu.List>
            </Menu.Root>
        </div>
    );
}
```

## API

### MenuRoot

> **API/props table for `MenuRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value    |
| ------------ | -------- |
| `data-scope` | `"menu"` |
| `data-part`  | `"root"` |

> **API/props table for `MenuRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuTrigger

> **API/props table for `MenuTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                     |
| ------------ | ------------------------- |
| `data-scope` | `"menu"`                  |
| `data-part`  | `"trigger"`               |
| `data-open`  | Present when menu is open |

> **API/props table for `MenuTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuList

> **API/props table for `MenuList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value    |
| ------------ | -------- |
| `data-scope` | `"menu"` |
| `data-part`  | `"list"` |

> **API/props table for `MenuList` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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

> **API/props table for `MenuItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuSub

> **API/props table for `MenuSub` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                        |
| ------------ | ---------------------------- |
| `data-scope` | `"menu"`                     |
| `data-part`  | `"sub"`                      |
| `data-open`  | Present when submenu is open |

> **API/props table for `MenuSub` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuSubTrigger

> **API/props table for `MenuSubTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                               |
| --------------- | ----------------------------------- |
| `data-scope`    | `"menu"`                            |
| `data-part`     | `"subtrigger"`                      |
| `data-value`    | The subtrigger value                |
| `data-focused`  | Present when subtrigger is focused  |
| `data-disabled` | Present when subtrigger is disabled |
| `data-open`     | Present when submenu is open        |

> **API/props table for `MenuSubTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuSubPositioner

> **API/props table for `MenuSubPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value             |
| ------------ | ----------------- |
| `data-scope` | `"menu"`          |
| `data-part`  | `"subpositioner"` |

**CSS Custom Properties**

The positioner element exposes CSS custom properties for layout and transform control.

| CSS Variable                | Description                              |
| --------------------------- | ---------------------------------------- |
| `--available-height`        | Available vertical space in pixels       |
| `--available-width`         | Available horizontal space in pixels     |
| `--transform-origin`        | Computed transform origin for animations |
| `--positioner-anchor-width` | Width of the anchor/trigger element      |

> **API/props table for `MenuSubPositioner` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuSubPortal

> **API/props table for `MenuSubPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `MenuSubPortal` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuSubPopup

> **API/props table for `MenuSubPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"menu"`     |
| `data-part`  | `"subpopup"` |

> **API/props table for `MenuSubPopup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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

> **API/props table for `MenuIndicator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuLabel

> **API/props table for `MenuLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value     |
| ------------ | --------- |
| `data-scope` | `"menu"`  |
| `data-part`  | `"label"` |

> **API/props table for `MenuLabel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuSeparator

> **API/props table for `MenuSeparator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"menu"`      |
| `data-part`  | `"separator"` |

> **API/props table for `MenuSeparator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuRadioGroup

> **API/props table for `MenuRadioGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"menu"`       |
| `data-part`  | `"radiogroup"` |

> **API/props table for `MenuRadioGroup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuPopup

> **API/props table for `MenuPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value     |
| ------------ | --------- |
| `data-scope` | `"menu"`  |
| `data-part`  | `"popup"` |

> **API/props table for `MenuPopup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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

> **API/props table for `MenuPositioner` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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

> **API/props table for `MenuArrow` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuPortal

> **API/props table for `MenuPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `MenuPortal` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuCheckboxItem

> **API/props table for `MenuCheckboxItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MenuRadioItem

> **API/props table for `MenuRadioItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
