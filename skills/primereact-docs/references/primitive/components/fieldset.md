# Fieldset

An unstyled, accessible fieldset component with semantic legend and optional collapsible content.

Build fully custom fieldset containers with complete control over layout and styling.

```tsx
'use client';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { Fieldset } from 'primereact/fieldset';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <Fieldset.Root className={styles.root}>
            <Fieldset.Legend className={styles.legend}>
                <Fieldset.Trigger className={styles.trigger}>
                    <Fieldset.Indicator match="open" className={styles.indicator}>
                        <Minus />
                    </Fieldset.Indicator>
                    <Fieldset.Indicator match="closed" className={styles.indicator}>
                        <Plus />
                    </Fieldset.Indicator>
                    <Fieldset.Title className={styles.title}>Legend</Fieldset.Title>
                </Fieldset.Trigger>
            </Fieldset.Legend>
            <Fieldset.Content className={styles.content}>
                <div className={styles.contentInner}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </Fieldset.Content>
        </Fieldset.Root>
    );
}

```

## Features

- Compound component API with six sub-components: `Root`, `Legend`, `Title`, `Trigger`, `Indicator`, `Content`
- Semantic `fieldset`/`legend` HTML structure for native form grouping

## Usage

```tsx
import { Fieldset } from 'primereact/fieldset';
```

```tsx
<Fieldset.Root>
    <Fieldset.Legend>
        <Fieldset.Trigger>
            <Fieldset.Indicator />
            <Fieldset.Title />
        </Fieldset.Trigger>
    </Fieldset.Legend>
    <Fieldset.Content />
</Fieldset.Root>
```

## Behavior

### Motion Animation

Use `motionProps` on `Root` to configure open/close animations.

```tsx
<Fieldset.Root motionProps={{ name: 'p-collapsible', cssVarPrefix: 'fieldset-content', hideStrategy: 'none' }}>...</Fieldset.Root>
```

See [Motion](motion.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Fieldset.Root as="div">
    <Fieldset.Legend as="div">
        <Fieldset.Title as="h3">...</Fieldset.Title>
    </Fieldset.Legend>
    <Fieldset.Content as="section">...</Fieldset.Content>
</Fieldset.Root>
```

Default elements: `Root`=`fieldset`, `Legend`=`legend`, `Title`=`span`, `Trigger`=`button`, `Content`=`div`, `Indicator`=`span`.

### Render Function Children

`Content` accepts a render function as children, providing access to the component instance. The instance exposes `fieldset` (root instance) and `motion` (animation state).

```tsx
<Fieldset.Content>{(instance) => <div>Fieldset is {instance.fieldset?.state.open ? 'open' : 'closed'}</div>}</Fieldset.Content>
```

## Pass Through

## API

### FieldsetRoot

> **API/props table for `FieldsetRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                  |
| --------------- | ---------------------- |
| `data-scope`    | `"fieldset"`           |
| `data-part`     | `"root"`               |
| `data-open`     | Present when expanded  |
| `data-closed`   | Present when collapsed |
| `data-disabled` | Present when disabled  |

| Label | Type | Description |
|:------|:------|:------|
| root | FieldsetRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| legend | FieldsetRootPassThroughType> | Used to pass attributes to the legend's DOM element. |
| title | FieldsetRootPassThroughType> | Used to pass attributes to the title's DOM element. |
| trigger | FieldsetRootPassThroughType> | Used to pass attributes to the trigger's DOM element. |
| content | FieldsetRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| contentOuter | FieldsetRootPassThroughType> | Used to pass attributes to the content outer wrapper's DOM element. |
| contentInner | FieldsetRootPassThroughType> | Used to pass attributes to the content inner wrapper's DOM element. |
| indicator | FieldsetRootPassThroughType> | Used to pass attributes to the indicator's DOM element. |

### FieldsetLegend

> **API/props table for `FieldsetLegend` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | FieldsetLegendPassThroughType> | Used to pass attributes to the root's DOM element. |

### FieldsetTitle

> **API/props table for `FieldsetTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | FieldsetTitlePassThroughType> | Used to pass attributes to the root's DOM element. |

### FieldsetTrigger

> **API/props table for `FieldsetTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute             | Value                       |
| --------------------- | --------------------------- |
| `data-scope`          | `"fieldset"`                |
| `data-part`           | `"trigger"`                 |
| `data-content-open`   | Present when content open   |
| `data-content-closed` | Present when content closed |

| Label | Type | Description |
|:------|:------|:------|
| root | FieldsetTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### FieldsetIndicator

> **API/props table for `FieldsetIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                  |
| ------------- | ---------------------- |
| `data-scope`  | `"fieldset"`           |
| `data-part`   | `"indicator"`          |
| `data-open`   | Present when expanded  |
| `data-closed` | Present when collapsed |

| Label | Type | Description |
|:------|:------|:------|
| root | FieldsetIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### FieldsetContent

> **API/props table for `FieldsetContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                  |
| ------------- | ---------------------- |
| `data-scope`  | `"fieldset"`           |
| `data-part`   | `"content"`            |
| `data-open`   | Present when expanded  |
| `data-closed` | Present when collapsed |

| Label | Type | Description |
|:------|:------|:------|
| root | FieldsetContentPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Fieldset uses the semantic `fieldset` element with a `legend` for the title. This native structure provides accessible grouping without additional ARIA roles. For toggleable usage, the trigger button uses `aria-controls` to reference the content region and `aria-expanded` to reflect visibility state.

### Keyboard Support

| Key           | Function                                                                |
| ------------- | ----------------------------------------------------------------------- |
| `tab`         | Moves focus to the next focusable element in the page tab sequence.     |
| `shift + tab` | Moves focus to the previous focusable element in the page tab sequence. |
| `enter`       | Toggles the visibility of the content.                                  |
| `space`       | Toggles the visibility of the content.                                  |
