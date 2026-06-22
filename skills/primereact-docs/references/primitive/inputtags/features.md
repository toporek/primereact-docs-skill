# InputTags

An unstyled tag input component with keyboard navigation, delimiter support, and optional typeahead suggestions.

Build fully custom tag input fields with complete control over layout and styling.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { InputTags, InputTagsRootInstance, type InputTagsRootCompleteEvent, type InputTagsRootValueChangeEvent } from 'primereact/inputtags';
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
    const [tags, setTags] = React.useState<string[]>([]);
    const [query, setQuery] = React.useState('');

    const filteredCountries = React.useMemo(() => {
        const q = query.toLowerCase();

        return countries.filter((country) => (!q || country.toLowerCase().includes(q)) && !tags.includes(country));
    }, [query, tags]);

    return (
        <div className={styles.wrapper}>
            <InputTags.Root
                value={tags}
                options={filteredCountries}
                onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}
                onComplete={(e: InputTagsRootCompleteEvent) => setQuery(e.query)}
                className={styles.root}
            >
                {(instance: InputTagsRootInstance) => (
                    <>
                        {instance?.state.value.map((value: string, index: number) => (
                            <span key={`${value}_${index}`} className={styles.tag}>
                                {value}
                                <button className={styles.remove} onClick={() => instance?.onItemRemoveClick(index)}>
                                    <Times className={styles.removeIcon} />
                                </button>
                            </span>
                        ))}
                        <InputTags.Input placeholder={tags.length === 0 ? 'Add countries...' : ''} className={styles.input} />
                        <InputTags.Portal>
                            <InputTags.Positioner sideOffset={4}>
                                <InputTags.Popup className={styles.popup}>
                                    <InputTags.List className={styles.list} style={{ maxHeight: '14rem' }}>
                                        {filteredCountries.map((country, index) => (
                                            <InputTags.Option key={country} index={index} uKey={country} className={styles.option}>
                                                {country}
                                            </InputTags.Option>
                                        ))}
                                    </InputTags.List>
                                    {filteredCountries.length === 0 && <div className={styles.empty}>No countries found</div>}
                                </InputTags.Popup>
                            </InputTags.Positioner>
                        </InputTags.Portal>
                    </>
                )}
            </InputTags.Root>
        </div>
    );
}
```

## Features

- Tag creation on Enter key press with optional delimiter character
- Maximum tag limit with `max` prop
- Duplicate prevention with `allowDuplicate`
- Optional typeahead suggestion dropdown via `options` and `onComplete`
- Add and remove event callbacks for fine-grained control
- Paste support with `addOnPaste` and automatic delimiter splitting

## Usage

```tsx
import { InputTags } from 'primereact/inputtags';
```

```tsx
<InputTags.Root>
    <InputTags.Items>
        <InputTags.Item>
            <InputTags.Label />
            <InputTags.Remove />
        </InputTags.Item>
    </InputTags.Items>
    <InputTags.Input />
</InputTags.Root>
```

### With Positioner

When `options` are provided for typeahead support, use `Portal`, `Positioner`, `Popup`, and `List` sub-components to render the suggestion dropdown.

```tsx
import { InputTags } from 'primereact/inputtags';

<InputTags.Root options={filteredItems} optionLabel="label" onComplete={search}>
    <InputTags.Items>
        <InputTags.Item>
            <InputTags.Label />
            <InputTags.Remove />
        </InputTags.Item>
    </InputTags.Items>
    <InputTags.Input />
    <InputTags.Portal>
        <InputTags.Positioner sideOffset={4}>
            <InputTags.Popup>
                <InputTags.List />
            </InputTags.Popup>
        </InputTags.Positioner>
    </InputTags.Portal>
</InputTags.Root>;
```

## Behavior

### Motion Animation

```tsx
<InputTags.Popup motionProps={{ name: 'p-inputtags' }}>...</InputTags.Popup>
```

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<InputTags.Root as="section">
    <InputTags.Input as={CustomInput} />
</InputTags.Root>
```

### Render Function Children

`InputTags.Root` accepts a render function as children, providing access to the component instance for custom tag rendering and imperative actions like `onItemRemoveClick` and `onRemoveAllItems`.

```tsx
<InputTags.Root>
    {(instance) => (
        <>
            {instance?.state.value.map((value, index) => (
                <span key={index}>
                    {value}
                    <button onClick={() => instance?.onItemRemoveClick(index)}>×</button>
                </span>
            ))}
            <InputTags.Input />
        </>
    )}
</InputTags.Root>
```

## Pass Through

**Pass Through example:**

```tsx
'use client';
import { InputTags } from '@primereact/ui/inputtags';
import { InputTagsRootValueChangeEvent } from 'primereact/inputtags';
import * as React from 'react';

export default function InputTagsPTDemo() {
    const [tags, setTags] = React.useState<string[]>(['React']);

    return (
        <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}>
            <InputTags.Items />
            <InputTags.Input />
        </InputTags.Root>
    );
}
```

## API

### InputTagsRoot

> **API/props table for `InputTagsRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"inputtags"` |
| `data-part`  | `"root"`      |

> **API/props table for `InputTagsRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsItems

> **API/props table for `InputTagsItems` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `InputTagsItems` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsItem

> **API/props table for `InputTagsItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"inputtags"` |
| `data-part`  | `"item"`      |

> **API/props table for `InputTagsItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsLabel

> **API/props table for `InputTagsLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `InputTagsLabel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsRemove

> **API/props table for `InputTagsRemove` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"inputtags"` |
| `data-part`  | `"remove"`    |

> **API/props table for `InputTagsRemove` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsInput

> **API/props table for `InputTagsInput` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `InputTagsInput` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsStart

> **API/props table for `InputTagsStart` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `InputTagsStart` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsEnd

> **API/props table for `InputTagsEnd` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `InputTagsEnd` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsPortal

> **API/props table for `InputTagsPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `InputTagsPortal` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsPositioner

> **API/props table for `InputTagsPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                      |
| ------------ | ---------------------------------------------------------- |
| `data-scope` | `"inputtags"`                                              |
| `data-part`  | `"positioner"`                                             |
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

> **API/props table for `InputTagsPositioner` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsPopup

> **API/props table for `InputTagsPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                      |
| ------------ | -------------------------- |
| `data-scope` | `"inputtags"`              |
| `data-part`  | `"popup"`                  |
| `data-open`  | Present when popup is open |

> **API/props table for `InputTagsPopup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsPanel

> **API/props table for `InputTagsPanel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `InputTagsPanel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsList

> **API/props table for `InputTagsList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"inputtags"` |
| `data-part`  | `"list"`      |

> **API/props table for `InputTagsList` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsOption

> **API/props table for `InputTagsOption` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                   |
| ----------------- | ----------------------- |
| `data-selected`   | Present when selected   |
| `data-unselected` | Present when unselected |
| `data-focused`    | Present when focused    |
| `data-disabled`   | Present when disabled   |

> **API/props table for `InputTagsOption` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputTagsArrow

> **API/props table for `InputTagsArrow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                      |
| ------------ | ---------------------------------------------------------- |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"` — placement |
| `data-align` | `"start"` \| `"center"` \| `"end"` — alignment             |

**CSS Custom Properties**

The arrow element exposes CSS custom properties for dynamic positioning:

| CSS Variable          | Description                    |
| --------------------- | ------------------------------ |
| `--placer-arrow-x`    | Horizontal offset of arrow     |
| `--placer-arrow-y`    | Vertical offset of arrow       |
| `--placer-arrow-left` | Left position of arrow element |
| `--placer-arrow-top`  | Top position of arrow element  |

> **API/props table for `InputTagsArrow` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

The input element has `textbox` role in addition to `aria-describedby` attribute. The tag list uses `listbox` role with `aria-orientation` set to horizontal.

When typeahead is enabled, the input element has `combobox` role in addition to `aria-autocomplete`, `aria-haspopup` and `aria-expanded` attributes. The relation between the input and the popup is created with `aria-controls` and `aria-activedescendant` attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list.

### Keyboard Support

| Key           | Function                                             |
| ------------- | ---------------------------------------------------- |
| `tab`         | Moves focus to the input element.                    |
| `enter`       | Adds a new tag with the current input value.         |
| `backspace`   | Removes the last tag when input is empty.            |
| `left arrow`  | Moves focus to the previous tag when input is empty. |
| `right arrow` | Moves focus to the next tag when focused on a tag.   |

### Tag Keyboard Support

| Key         | Function                 |
| ----------- | ------------------------ |
| `backspace` | Removes the focused tag. |
| `delete`    | Removes the focused tag. |

### Popup Keyboard Support (Typeahead)

| Key          | Function                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------ |
| `tab`        | Selects the focused option and closes the popup, then moves focus to next element in page. |
| `enter`      | Selects the focused option and closes the popup.                                           |
| `escape`     | Closes the popup.                                                                          |
| `down arrow` | Moves focus to the next option.                                                            |
| `up arrow`   | Moves focus to the previous option.                                                        |
| `home`       | Moves focus to the first option.                                                           |
| `end`        | Moves focus to the last option.                                                            |
