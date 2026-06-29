# AutoComplete

An unstyled autocomplete input component with real-time search, keyboard navigation, and popup positioning.

Build fully custom autocomplete inputs with complete control over layout and styling.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import * as React from 'react';
import styles from './basic-demo.module.css';

const countries = [
    'Argentina',
    'Australia',
    'Brazil',
    'Canada',
    'China',
    'Egypt',
    'France',
    'Germany',
    'India',
    'Italy',
    'Japan',
    'Mexico',
    'Netherlands',
    'Norway',
    'Poland',
    'South Korea',
    'Spain',
    'Sweden',
    'Switzerland',
    'Turkey',
    'United Kingdom',
    'United States'
];

export default function BasicDemo() {
    const [filteredCountries, setFilteredCountries] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        setFilteredCountries(query ? countries.filter((country) => country.toLowerCase().includes(query)) : [...countries]);
    };

    return (
        <div className={styles.wrapper}>
            <AutoComplete.Root options={filteredCountries} onComplete={search} className={styles.root}>
                <AutoComplete.Input placeholder="Search a country..." className={styles.input} />
                <AutoComplete.Portal>
                    <AutoComplete.Positioner sideOffset={4}>
                        <AutoComplete.Popup className={styles.popup}>
                            <AutoComplete.List className={styles.list} style={{ maxHeight: '14rem' }} />
                            <AutoComplete.Empty className={styles.empty}>No countries found</AutoComplete.Empty>
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `Input`, `Trigger`, `Indicator`, `Clear`, `Portal`, `Positioner`, `Popup`, `List`, `Option`, `OptionIndicator`, `Arrow`, `Header`, `Footer`, `Empty`, `Value`
- Real-time search via `onComplete` callback with configurable delay and minimum length
- Force selection mode that clears unmatched input on blur
- Option grouping with `optionGroupLabel` and `optionGroupChildren`
- Built-in clear button and trigger toggle support

## Usage

```tsx
import { AutoComplete } from 'primereact/autocomplete';
```

```tsx
<AutoComplete.Root>
    <AutoComplete.Input />
    <AutoComplete.Trigger>
        <AutoComplete.Indicator />
    </AutoComplete.Trigger>
    <AutoComplete.Clear />
    <AutoComplete.Portal>
        <AutoComplete.Positioner>
            <AutoComplete.Popup>
                <AutoComplete.Header />
                <AutoComplete.List>
                    <AutoComplete.Option>
                        <AutoComplete.OptionIndicator />
                    </AutoComplete.Option>
                </AutoComplete.List>
                <AutoComplete.Empty />
                <AutoComplete.Footer />
            </AutoComplete.Popup>
        </AutoComplete.Positioner>
    </AutoComplete.Portal>
</AutoComplete.Root>
```

## Behavior

### Motion Animation

```tsx
<AutoComplete.Popup motionProps={{ name: 'p-autocomplete' }}>...</AutoComplete.Popup>
```

See [Motion](motion.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<AutoComplete.Input as={CustomInput} />
<AutoComplete.Trigger as="div">...</AutoComplete.Trigger>
```

### Render Function Children

`AutoComplete.List` accepts a render function as children, providing access to the component instance for custom option rendering.

```tsx
<AutoComplete.List>
    {(instance) =>
        instance.options?.map((option, index) => (
            <AutoComplete.Option key={index} index={index}>
                {instance.listbox?.getOptionLabel(option)}
            </AutoComplete.Option>
        ))
    }
</AutoComplete.List>
```

## Pass Through

## API

### AutoCompleteRoot

> **API/props table for `AutoCompleteRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"autocomplete"` |
| `data-part`  | `"root"`         |

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompleteRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| trigger | AutoCompleteRootPassThroughType> | Used to pass attributes to the trigger's DOM element. |
| pcInputText | AutoCompleteRootPassThroughType> | Used to pass attributes to the pcInputText's DOM element. |
| value | AutoCompleteRootPassThroughType> | Used to pass attributes to the value's DOM element (non-editable mode). |
| positioner | AutoCompleteRootPassThroughType> | Used to pass attributes to the positioner's DOM element. |
| popup | AutoCompleteRootPassThroughType> | Used to pass attributes to the popup's DOM element. |
| list | AutoCompleteRootPassThroughType> | Used to pass attributes to the list's DOM element. |
| option | AutoCompleteRootPassThroughType> | Used to pass attributes to the option's DOM element. |
| clearIcon | AutoCompleteRootPassThroughType> | Used to pass attributes to the clearIcon's DOM element. |
| selection | AutoCompleteRootPassThroughType> | Used to pass attributes to the selection's DOM element. |
| header | AutoCompleteRootPassThroughType> | Used to pass attributes to the header's DOM element. |
| footer | AutoCompleteRootPassThroughType> | Used to pass attributes to the footer's DOM element. |
| empty | AutoCompleteRootPassThroughType> | Used to pass attributes to the empty's DOM element. |

### AutoCompleteInput

> **API/props table for `AutoCompleteInput` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"autocomplete"` |
| `data-part`  | `"input"`        |

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompleteInputPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompleteTrigger

> **API/props table for `AutoCompleteTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute              | Value                      |
| ---------------------- | -------------------------- |
| `data-scope`           | `"autocomplete"`           |
| `data-part`            | `"trigger"`                |
| `data-positioner-open` | Present when popup is open |

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompleteTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompleteIndicator

> **API/props table for `AutoCompleteIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                        |
| ------------- | ---------------------------- |
| `data-scope`  | `"autocomplete"`             |
| `data-part`   | `"indicator"`                |
| `data-open`   | Present when popup is open   |
| `data-closed` | Present when popup is closed |

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompleteIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompleteClear

> **API/props table for `AutoCompleteClear` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"autocomplete"` |
| `data-part`  | `"clear"`        |

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompleteClearPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompletePortal

> **API/props table for `AutoCompletePortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompletePortalPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompletePositioner

> **API/props table for `AutoCompletePositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
| root | AutoCompletePositionerPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompletePopup

> **API/props table for `AutoCompletePopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                      |
| ------------ | -------------------------- |
| `data-scope` | `"autocomplete"`           |
| `data-part`  | `"popup"`                  |
| `data-open`  | Present when popup is open |

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompletePopupPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompleteList

> **API/props table for `AutoCompleteList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"autocomplete"` |
| `data-part`  | `"list"`         |

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompleteListPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompleteOption

> **API/props table for `AutoCompleteOption` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                   |
| ----------------- | ----------------------- |
| `data-selected`   | Present when selected   |
| `data-unselected` | Present when unselected |
| `data-focused`    | Present when focused    |
| `data-disabled`   | Present when disabled   |

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompleteOptionPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompleteOptionIndicator

> **API/props table for `AutoCompleteOptionIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                   |
| ----------------- | ----------------------- |
| `data-selected`   | Present when selected   |
| `data-unselected` | Present when unselected |

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompleteOptionIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompleteHeader

> **API/props table for `AutoCompleteHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompleteHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompleteFooter

> **API/props table for `AutoCompleteFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompleteFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompleteEmpty

> **API/props table for `AutoCompleteEmpty` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompleteEmptyPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompleteArrow

> **API/props table for `AutoCompleteArrow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                     |
| ------------ | --------------------------------------------------------- |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"`, placement |
| `data-align` | `"start"` \| `"center"` \| `"end"`, alignment             |

The arrow element exposes CSS custom properties for dynamic positioning:

| CSS Variable          | Description                    |
| --------------------- | ------------------------------ |
| `--placer-arrow-x`    | Horizontal offset of arrow     |
| `--placer-arrow-y`    | Vertical offset of arrow       |
| `--placer-arrow-left` | Left position of arrow element |
| `--placer-arrow-top`  | Top position of arrow element  |

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompleteArrowPassThroughType> | Used to pass attributes to the root's DOM element. |

### AutoCompleteValue

> **API/props table for `AutoCompleteValue` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | AutoCompleteValuePassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

`AutoComplete.Root` uses a combobox pattern. The input has `role="combobox"` with `aria-autocomplete`, `aria-haspopup` and `aria-expanded` attributes. The relation between the input and the popup is created with `aria-controls` and `aria-activedescendant` attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list. Options have `role="option"` with `aria-selected` to indicate the current selection. The clear button has an `aria-label` for screen reader accessibility. Provide an accessible name with `aria-label`, `aria-labelledby`, or an associated label element.

### Keyboard Support

| Key                       | Function                                                                 |
| ------------------------- | ------------------------------------------------------------------------ |
| `tab`                     | Moves focus to the autocomplete element.                                 |
| `any printable character` | Opens the popup and displays matching suggestions.                       |
| `enter`                   | Selects the focused option and closes the popup.                         |
| `escape`                  | Closes the popup.                                                        |
| `arrow down`              | Opens the popup or moves focus to the next option.                       |
| `arrow up`                | Opens the popup or moves focus to the previous option.                   |
| `arrow left`              | Removes the visual focus from the current option and moves input cursor. |
| `arrow right`             | Removes the visual focus from the current option and moves input cursor. |
| `home`                    | Moves focus to the first option.                                         |
| `end`                     | Moves focus to the last option.                                          |
| `pageUp`                  | Jumps visual focus to the first option.                                  |
| `pageDown`                | Jumps visual focus to the last option.                                   |
