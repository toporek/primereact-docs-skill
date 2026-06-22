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

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

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

**Pass Through example:**

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

interface Command {
    label: string;
    shortcut: string;
}

const commands: Command[] = [
    { label: 'New File', shortcut: '⌘N' },
    { label: 'Open File', shortcut: '⌘O' },
    { label: 'Save', shortcut: '⌘S' },
    { label: 'Save As', shortcut: '⇧⌘S' },
    { label: 'Find', shortcut: '⌘F' },
    { label: 'Replace', shortcut: '⌘H' },
    { label: 'Go to Line', shortcut: '⌘G' },
    { label: 'Toggle Sidebar', shortcut: '⌘B' },
    { label: 'Split Editor', shortcut: '⌘\\' },
    { label: 'Close Tab', shortcut: '⌘W' }
];

export default function AutoCompletePTDemo() {
    const [filteredCommands, setFilteredCommands] = React.useState<Command[]>([...commands]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        setFilteredCommands(query ? commands.filter((cmd) => cmd.label.toLowerCase().includes(query)) : [...commands]);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={filteredCommands} optionLabel="label" onComplete={search} open={true} className="w-full md:w-56">
                <AutoComplete.Input as={InputText} placeholder="Type a command..." className="w-full" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }}>
                                {filteredCommands.map((cmd, index) => (
                                    <AutoComplete.Option key={cmd.label} index={index} uKey={cmd.label}>
                                        <div className="flex items-center justify-between w-full">
                                            <span>{cmd.label}</span>
                                            <kbd className="inline-flex items-center justify-center min-w-8 px-1.5 py-0.5 text-xs font-medium rounded bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300 border border-surface-200 dark:border-surface-600">
                                                {cmd.shortcut}
                                            </kbd>
                                        </div>
                                    </AutoComplete.Option>
                                ))}
                                <AutoComplete.Empty className="text-sm">No commands found</AutoComplete.Empty>
                            </AutoComplete.List>
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
```

## API

### AutoCompleteRoot

> **API/props table for `AutoCompleteRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"autocomplete"` |
| `data-part`  | `"root"`         |

> **API/props table for `AutoCompleteRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompleteInput

> **API/props table for `AutoCompleteInput` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"autocomplete"` |
| `data-part`  | `"input"`        |

> **API/props table for `AutoCompleteInput` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompleteTrigger

> **API/props table for `AutoCompleteTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute              | Value                      |
| ---------------------- | -------------------------- |
| `data-scope`           | `"autocomplete"`           |
| `data-part`            | `"trigger"`                |
| `data-positioner-open` | Present when popup is open |

> **API/props table for `AutoCompleteTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompleteIndicator

> **API/props table for `AutoCompleteIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                        |
| ------------- | ---------------------------- |
| `data-scope`  | `"autocomplete"`             |
| `data-part`   | `"indicator"`                |
| `data-open`   | Present when popup is open   |
| `data-closed` | Present when popup is closed |

> **API/props table for `AutoCompleteIndicator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompleteClear

> **API/props table for `AutoCompleteClear` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"autocomplete"` |
| `data-part`  | `"clear"`        |

> **API/props table for `AutoCompleteClear` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompletePortal

> **API/props table for `AutoCompletePortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `AutoCompletePortal` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompletePositioner

> **API/props table for `AutoCompletePositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                      |
| ------------ | ---------------------------------------------------------- |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"` — placement |
| `data-align` | `"start"` \| `"center"` \| `"end"` — alignment             |

**CSS Custom Properties**

The positioner element exposes CSS custom properties for layout and transform control.

| CSS Variable                | Description                              |
| --------------------------- | ---------------------------------------- |
| `--available-height`        | Available vertical space in pixels       |
| `--available-width`         | Available horizontal space in pixels     |
| `--transform-origin`        | Computed transform origin for animations |
| `--positioner-anchor-width` | Width of the anchor/trigger element      |

> **API/props table for `AutoCompletePositioner` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompletePopup

> **API/props table for `AutoCompletePopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                      |
| ------------ | -------------------------- |
| `data-scope` | `"autocomplete"`           |
| `data-part`  | `"popup"`                  |
| `data-open`  | Present when popup is open |

> **API/props table for `AutoCompletePopup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompleteList

> **API/props table for `AutoCompleteList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"autocomplete"` |
| `data-part`  | `"list"`         |

> **API/props table for `AutoCompleteList` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompleteOption

> **API/props table for `AutoCompleteOption` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                   |
| ----------------- | ----------------------- |
| `data-selected`   | Present when selected   |
| `data-unselected` | Present when unselected |
| `data-focused`    | Present when focused    |
| `data-disabled`   | Present when disabled   |

> **API/props table for `AutoCompleteOption` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompleteOptionIndicator

> **API/props table for `AutoCompleteOptionIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                   |
| ----------------- | ----------------------- |
| `data-selected`   | Present when selected   |
| `data-unselected` | Present when unselected |

> **API/props table for `AutoCompleteOptionIndicator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompleteHeader

> **API/props table for `AutoCompleteHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `AutoCompleteHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompleteFooter

> **API/props table for `AutoCompleteFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `AutoCompleteFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompleteEmpty

> **API/props table for `AutoCompleteEmpty` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `AutoCompleteEmpty` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompleteArrow

> **API/props table for `AutoCompleteArrow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                      |
| ------------ | ---------------------------------------------------------- |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"` — placement |
| `data-align` | `"start"` \| `"center"` \| `"end"` — alignment             |

The arrow element exposes CSS custom properties for dynamic positioning:

| CSS Variable          | Description                    |
| --------------------- | ------------------------------ |
| `--placer-arrow-x`    | Horizontal offset of arrow     |
| `--placer-arrow-y`    | Vertical offset of arrow       |
| `--placer-arrow-left` | Left position of arrow element |
| `--placer-arrow-top`  | Top position of arrow element  |

> **API/props table for `AutoCompleteArrow` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AutoCompleteValue

> **API/props table for `AutoCompleteValue` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `AutoCompleteValue` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
