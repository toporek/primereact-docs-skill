# ProgressBar

An unstyled progress bar component for displaying process completion status.

Build fully custom progress indicators with complete control over layout and styling.

```tsx
'use client';
import { ProgressBar } from 'primereact/progressbar';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <ProgressBar.Root value={50}>
                <ProgressBar.Track className={styles.track}>
                    <ProgressBar.Indicator className={styles.indicator}>
                        <ProgressBar.Label className={styles.label}>
                            <ProgressBar.Value className={styles.value} />
                        </ProgressBar.Label>
                    </ProgressBar.Indicator>
                </ProgressBar.Track>
            </ProgressBar.Root>
        </div>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `Track`, `Indicator`, `Label`, `Value`
- Normalizes `value` to a 0-100 percentage with configurable `min`/`max` bounds
- Determinate and indeterminate modes for known and unknown progress
- Configurable `formatter` function for custom display text

## Usage

```tsx
import { ProgressBar } from 'primereact/progressbar';
```

```tsx
<ProgressBar.Root>
    <ProgressBar.Track>
        <ProgressBar.Indicator>
            <ProgressBar.Label>
                <ProgressBar.Value />
            </ProgressBar.Label>
        </ProgressBar.Indicator>
    </ProgressBar.Track>
</ProgressBar.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<ProgressBar.Root as="section"></ProgressBar.Root>
<ProgressBar.Track as="span"></ProgressBar.Track>
```

Default elements: `Root`=`div`, `Track`=`div`, `Indicator`=`div`, `Label`=`div`, `Value`=`span`.

### Render Function Children

`Root` accepts a render function as children, providing access to the component instance.

```tsx
<ProgressBar.Root value={50}>{(instance) => <span>{instance.state.computedValue}%</span>}</ProgressBar.Root>
```

## Pass Through

## API

### ProgressBarRoot

> **API/props table for `ProgressBarRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"progressbar"` |
| `data-part`  | `"root"`        |

| Label | Type | Description |
|:------|:------|:------|
| root | ProgressBarRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| label | ProgressBarRootPassThroughType> | Used to pass attributes to the label's DOM element. |
| value | ProgressBarRootPassThroughType> | Used to pass attributes to the value's DOM element. |
| track | ProgressBarRootPassThroughType> | Used to pass attributes to the track's DOM element. |
| indicator | ProgressBarRootPassThroughType> | Used to pass attributes to the indicator's DOM element. |

### ProgressBarTrack

> **API/props table for `ProgressBarTrack` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"progressbar"` |
| `data-part`  | `"track"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | ProgressBarTrackPassThroughType> | Used to pass attributes to the root's DOM element. |

### ProgressBarIndicator

> **API/props table for `ProgressBarIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"progressbar"` |
| `data-part`  | `"indicator"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | ProgressBarIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### ProgressBarLabel

> **API/props table for `ProgressBarLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"progressbar"` |
| `data-part`  | `"label"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | ProgressBarLabelPassThroughType> | Used to pass attributes to the root's DOM element. |

### ProgressBarValue

> **API/props table for `ProgressBarValue` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"progressbar"` |
| `data-part`  | `"value"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | ProgressBarValuePassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

ProgressBar components uses `progressbar` role along with `aria-valuemin`, `aria-valuemax` and `aria-valuenow` attributes. Value to describe the component can be defined using `aria-labelledby` and `aria-label` props.

```tsx
<span id="label_status" />
<ProgressBar.Root aria-labelledby="label_status" />

<ProgressBar.Root aria-label="Status" />
```

### Keyboard Support

Not applicable.
