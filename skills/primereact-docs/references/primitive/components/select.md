# Select

An unstyled select dropdown component with keyboard navigation, filtering, and single or multiple selection.

Build fully custom select dropdowns with complete control over layout and styling.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select } from 'primereact/select';
import styles from './basic-demo.module.css';

const countries = [
    { name: 'Argentina', code: 'AR' },
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Canada', code: 'CA' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Italy', code: 'IT' },
    { name: 'Japan', code: 'JP' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Norway', code: 'NO' },
    { name: 'Poland', code: 'PL' },
    { name: 'South Korea', code: 'KR' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Turkey', code: 'TR' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' }
];

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Select.Root options={countries} optionLabel="name" className={styles.root}>
                <Select.Trigger className={styles.trigger}>
                    <Select.Value placeholder="Select a Country" className={styles.value} />
                    <Select.Indicator className={styles.indicator}>
                        <ChevronDown className={styles.chevron} />
                    </Select.Indicator>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Positioner sideOffset={4}>
                        <Select.Popup className={styles.popup}>
                            <Select.List className={styles.list} style={{ maxHeight: '14rem' }}>
                                {countries.map((country, index) => (
                                    <Select.Option key={country.code} index={index} uKey={country.code} className={styles.option}>
                                        <Select.OptionIndicator className={styles.optionIndicator}>
                                            <Check className={styles.checkIcon} />
                                        </Select.OptionIndicator>
                                        {country.name}
                                    </Select.Option>
                                ))}
                            </Select.List>
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `Trigger`, `Value`, `Indicator`, `Clear`, `Portal`, `Positioner`, `Popup`, `List`, `Option`, `OptionIndicator`, `Filter`, `Arrow`, `Header`, `Footer`, `Empty`
- Single and multiple selection with keyboard focus cycling
- Built-in filter input integration for searchable dropdowns
- Option grouping with group header rendering

## Usage

```tsx
import { Select } from 'primereact/select';
```

```tsx
<Select.Root>
    <Select.Trigger>
        <Select.Value />
        <Select.Clear />
        <Select.Indicator />
    </Select.Trigger>
    <Select.Portal>
        <Select.Positioner>
            <Select.Popup>
                <Select.Arrow />
                <Select.Header>
                    <Select.Filter />
                </Select.Header>
                <Select.List>
                    <Select.Option>
                        <Select.OptionIndicator />
                    </Select.Option>
                </Select.List>
                <Select.Empty />
                <Select.Footer />
            </Select.Popup>
        </Select.Positioner>
    </Select.Portal>
</Select.Root>
```

## Behavior

### Motion Animation

```tsx
<Select.Popup motionProps={{ name: 'p-select' }}>...</Select.Popup>
```

See [Motion](motion.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Select.Root as="section">
    <Select.Trigger as="div">...</Select.Trigger>
</Select.Root>
```

### Render Function Children

`Select.List` accepts a render function as children, providing access to the component instance for custom option rendering.

```tsx
<Select.List>
    {(instance) =>
        instance.options?.map((option, index) => (
            <Select.Option key={index} index={index}>
                {instance.listbox?.getOptionLabel(option)}
            </Select.Option>
        ))
    }
</Select.List>
```

## Pass Through

## API

### SelectRoot

> **API/props table for `SelectRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value      |
| ------------ | ---------- |
| `data-scope` | `"select"` |
| `data-part`  | `"root"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | SelectRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| trigger | SelectRootPassThroughType> | Used to pass attributes to the trigger's DOM element. |
| value | SelectRootPassThroughType> | Used to pass attributes to the value's DOM element. |
| clearIcon | SelectRootPassThroughType> | Used to pass attributes to the clear icon's DOM element. |
| icon | SelectRootPassThroughType> | Used to pass attributes to the icon's DOM element. |
| positioner | SelectRootPassThroughType> | Used to pass attributes to the positioner's DOM element. |
| panel | SelectRootPassThroughType> | Used to pass attributes to the panel's DOM element. |
| filter | SelectRootPassThroughType> | Used to pass attributes to the filter's DOM element. |
| list | SelectRootPassThroughType> | Used to pass attributes to the list's DOM element. |
| options | SelectRootPassThroughType> | Used to pass attributes to the options' DOM element. |
| option | SelectRootPassThroughType> | Used to pass attributes to the option's DOM element. |
| selection | SelectRootPassThroughType> | Used to pass attributes to the selection's DOM element. |
| header | SelectRootPassThroughType> | Used to pass attributes to the header's DOM element. |
| footer | SelectRootPassThroughType> | Used to pass attributes to the footer's DOM element. |
| empty | SelectRootPassThroughType> | Used to pass attributes to the empty's DOM element. |

### SelectTrigger

> **API/props table for `SelectTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute              | Value                      |
| ---------------------- | -------------------------- |
| `data-scope`           | `"select"`                 |
| `data-part`            | `"trigger"`                |
| `data-positioner-open` | Present when popup is open |

| Label | Type | Description |
|:------|:------|:------|
| root | SelectTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### SelectValue

> **API/props table for `SelectValue` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | SelectValuePassThroughType> | Used to pass attributes to the root's DOM element. |

### SelectIndicator

> **API/props table for `SelectIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                        |
| ------------- | ---------------------------- |
| `data-scope`  | `"select"`                   |
| `data-part`   | `"indicator"`                |
| `data-open`   | Present when popup is open   |
| `data-closed` | Present when popup is closed |

| Label | Type | Description |
|:------|:------|:------|
| root | SelectIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### SelectClear

> **API/props table for `SelectClear` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value      |
| ------------ | ---------- |
| `data-scope` | `"select"` |
| `data-part`  | `"clear"`  |

| Label | Type | Description |
|:------|:------|:------|
| root | SelectClearPassThroughType> | Used to pass attributes to the root's DOM element. |

### SelectPortal

> **API/props table for `SelectPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | SelectPortalPassThroughType> | Used to pass attributes to the root's DOM element. |

### SelectPositioner

> **API/props table for `SelectPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                     |
| ------------ | --------------------------------------------------------- |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"`, placement |
| `data-align` | `"start"` \| `"center"` \| `"end"`, alignment             |

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
| root | SelectPositionerPassThroughType> | Used to pass attributes to the root's DOM element. |

### SelectPopup

> **API/props table for `SelectPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                      |
| ------------ | -------------------------- |
| `data-scope` | `"select"`                 |
| `data-part`  | `"popup"`                  |
| `data-open`  | Present when popup is open |

| Label | Type | Description |
|:------|:------|:------|
| root | SelectPopupPassThroughType> | Used to pass attributes to the root's DOM element. |

### SelectFilter

> **API/props table for `SelectFilter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value      |
| ------------ | ---------- |
| `data-scope` | `"select"` |
| `data-part`  | `"filter"` |

| Label | Type | Description |
|:------|:------|:------|
| root | SelectFilterPassThroughType> | Used to pass attributes to the root's DOM element. |
| input | SelectFilterPassThroughType> | Used to pass attributes to the input's DOM element. |

### SelectList

> **API/props table for `SelectList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value      |
| ------------ | ---------- |
| `data-scope` | `"select"` |
| `data-part`  | `"list"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | SelectListPassThroughType> | Used to pass attributes to the root's DOM element. |

### SelectOption

> **API/props table for `SelectOption` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                   |
| ----------------- | ----------------------- |
| `data-selected`   | Present when selected   |
| `data-unselected` | Present when unselected |
| `data-focused`    | Present when focused    |
| `data-disabled`   | Present when disabled   |

| Label | Type | Description |
|:------|:------|:------|
| root | SelectOptionPassThroughType> | Used to pass attributes to the root's DOM element. |

### SelectOptionIndicator

> **API/props table for `SelectOptionIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                   |
| ----------------- | ----------------------- |
| `data-selected`   | Present when selected   |
| `data-unselected` | Present when unselected |

| Label | Type | Description |
|:------|:------|:------|
| root | SelectOptionIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### SelectHeader

> **API/props table for `SelectHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | SelectHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### SelectFooter

> **API/props table for `SelectFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | SelectFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

### SelectEmpty

> **API/props table for `SelectEmpty` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | SelectEmptyPassThroughType> | Used to pass attributes to the root's DOM element. |

### SelectArrow

> **API/props table for `SelectArrow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                     |
| ------------ | --------------------------------------------------------- |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"`, placement |
| `data-align` | `"start"` \| `"center"` \| `"end"`, alignment             |

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
| root | SelectArrowPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

`Select.Root` uses a combobox pattern. The trigger has `role="combobox"` with `aria-expanded` reflecting the popup visibility and `aria-controls` linking to the listbox. The `aria-activedescendant` attribute instructs screen readers which option to read during keyboard navigation. Options have `role="option"` with `aria-selected` to indicate the current selection. The clear button has an `aria-label` for screen reader accessibility. Decorative elements like the indicator are hidden from screen readers with `aria-hidden`. Provide an accessible name with `aria-label`, `aria-labelledby`, or an associated label element.

### Keyboard Support

| Key          | Function                                                            |
| ------------ | ------------------------------------------------------------------- |
| `tab`        | Moves focus to the select trigger.                                  |
| `enter`      | Opens the popup when focused, selects the focused option when open. |
| `space`      | Opens the popup when focused, selects the focused option when open. |
| `escape`     | Closes the popup.                                                   |
| `arrow down` | Opens the popup or moves focus to the next option.                  |
| `arrow up`   | Opens the popup or moves focus to the previous option.              |
| `home`       | Moves focus to the first option.                                    |
| `end`        | Moves focus to the last option.                                     |
