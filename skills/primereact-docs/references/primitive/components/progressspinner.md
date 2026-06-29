# ProgressSpinner

An unstyled, accessible circular progress component with compound composition.

Build fully custom circular progress indicators with complete control over track, range, and value rendering.

```tsx
'use client';
import { ProgressSpinner } from 'primereact/progressspinner';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <ProgressSpinner.Root className={styles.root} aria-label="Loading">
                <ProgressSpinner.Track className={styles.track} />
                <ProgressSpinner.Range className={styles.range} />
            </ProgressSpinner.Root>
        </div>
    );
}

```

## Features

- Compound component API with four sub-components: `Root`, `Track`, `Range`, `Value`
- SVG-based circular geometry with automatic radius and circumference calculation
- Determinate mode with stroke dash animation and indeterminate mode with CSS-driven animation
- Configurable `min`, `max`, and `strokeWidth`

## Usage

```tsx
import { ProgressSpinner } from 'primereact/progressspinner';
```

```tsx
<ProgressSpinner.Root>
    <ProgressSpinner.Track />
    <ProgressSpinner.Range />
</ProgressSpinner.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered element.

```tsx
<ProgressSpinner.Root as="section">
    <ProgressSpinner.Track />
    <ProgressSpinner.Range />
    <ProgressSpinner.Value as="span" />
</ProgressSpinner.Root>
```

Default elements: `Root`=`div`, `Track`=`circle`, `Range`=`circle`, `Value`=`text`.

### Render Function Children

`Value` accepts a render function as children, providing access to the component instance. The instance exposes `progressspinner` (root instance with `state.percent` and `state.indeterminate`).

```tsx
<ProgressSpinner.Value>{(instance) => <tspan>{Math.round(instance.progressspinner?.state.percent ?? 0)}%</tspan>}</ProgressSpinner.Value>
```

## Pass Through

## API

### ProgressSpinnerRoot

> **API/props table for `ProgressSpinnerRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                                |
| --------------- | ------------------------------------ |
| `data-scope`    | `"progress"`                         |
| `data-part`     | `"root"`                             |
| `data-state`    | `"determinate"` or `"indeterminate"` |
| `data-value`    | Current value (determinate only)     |
| `data-disabled` | Present when disabled                |

### ProgressSpinnerTrack

> **API/props table for `ProgressSpinnerTrack` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                |
| ------------ | ------------------------------------ |
| `data-scope` | `"progress"`                         |
| `data-part`  | `"circleTrack"`                      |
| `data-state` | `"determinate"` or `"indeterminate"` |

### ProgressSpinnerRange

> **API/props table for `ProgressSpinnerRange` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                |
| ------------ | ------------------------------------ |
| `data-scope` | `"progress"`                         |
| `data-part`  | `"circleRange"`                      |
| `data-state` | `"determinate"` or `"indeterminate"` |

### ProgressSpinnerValue

> **API/props table for `ProgressSpinnerValue` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

ProgressSpinner uses `role="progressbar"` on the root element. In determinate mode, `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` describe the current progress. Provide `aria-label` or `aria-labelledby` to give the component an accessible name.

```tsx
<ProgressSpinner.Root aria-label="Loading">
    <ProgressSpinner.Track />
    <ProgressSpinner.Range />
</ProgressSpinner.Root>

<ProgressSpinner.Root value={75} aria-label="Upload progress">
    <ProgressSpinner.Track />
    <ProgressSpinner.Range />
    <ProgressSpinner.Value />
</ProgressSpinner.Root>
```

### Keyboard Support

ProgressSpinner is a non-interactive display component and does not receive keyboard focus.
