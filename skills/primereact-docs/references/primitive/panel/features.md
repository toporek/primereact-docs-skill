# Panel

An unstyled, accessible panel component with optional collapsible content.

Build fully custom content panels with complete control over layout and styling.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Panel } from 'primereact/panel';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <Panel.Root className={styles.root}>
            <Panel.Header className={styles.header}>
                <Panel.Title className={styles.title}>Header</Panel.Title>
                <Panel.Trigger className={styles.trigger}>
                    <Panel.Indicator className={styles.indicator}>
                        <ChevronDown />
                    </Panel.Indicator>
                </Panel.Trigger>
            </Panel.Header>
            <Panel.Content className={styles.content}>
                <div className={styles.contentInner}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </Panel.Content>
        </Panel.Root>
    );
}
```

## Features

- Compound component API with seven sub-components: `Root`, `Header`, `Title`, `Trigger`, `Indicator`, `Content`, `Footer`

## Usage

```tsx
import { Panel } from 'primereact/panel';
```

```tsx
<Panel.Root>
    <Panel.Header>
        <Panel.Title />
        <Panel.Trigger>
            <Panel.Indicator />
        </Panel.Trigger>
    </Panel.Header>
    <Panel.Content />
    <Panel.Footer />
</Panel.Root>
```

## Behavior

### Motion Animation

Use `motionProps` on `Root` to configure open/close animations.

```tsx
<Panel.Root motionProps={{ name: 'p-collapsible', cssVarPrefix: 'panel-content', hideStrategy: 'none' }}>...</Panel.Root>
```

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Panel.Root as="section">
    <Panel.Header as="nav">
        <Panel.Title as="h2">...</Panel.Title>
    </Panel.Header>
    <Panel.Content as="article">...</Panel.Content>
    <Panel.Footer as="nav">...</Panel.Footer>
</Panel.Root>
```

Default elements: `Root`=`div`, `Header`=`div`, `Title`=`div`, `Trigger`=`button`, `Content`=`div`, `Footer`=`div`, `Indicator`=`span`.

### Render Function Children

`Content` accepts a render function as children, providing access to the component instance. The instance exposes `panel` (root instance) and `motion` (animation state).

```tsx
<Panel.Content>{(instance) => <div>Panel is {instance.panel?.state.open ? 'open' : 'closed'}</div>}</Panel.Content>
```

## Pass Through

**Pass Through example:**

```tsx
import { Panel } from '@primereact/ui/panel';

export default function PanelPTDemo() {
    return (
        <Panel.Root>
            <Panel.Header>
                <Panel.Title>Header</Panel.Title>
            </Panel.Header>
            <Panel.Content>
                <p className="text-sm m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel.Content>
        </Panel.Root>
    );
}
```

## API

### PanelRoot

> **API/props table for `PanelRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                  |
| --------------- | ---------------------- |
| `data-scope`    | `"panel"`              |
| `data-part`     | `"root"`               |
| `data-open`     | Present when expanded  |
| `data-closed`   | Present when collapsed |
| `data-disabled` | Present when disabled  |

> **API/props table for `PanelRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PanelHeader

> **API/props table for `PanelHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `PanelHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PanelTitle

> **API/props table for `PanelTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `PanelTitle` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PanelTrigger

> **API/props table for `PanelTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute             | Value                       |
| --------------------- | --------------------------- |
| `data-scope`          | `"panel"`                   |
| `data-part`           | `"trigger"`                 |
| `data-content-open`   | Present when content open   |
| `data-content-closed` | Present when content closed |

> **API/props table for `PanelTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PanelIndicator

> **API/props table for `PanelIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                  |
| ------------- | ---------------------- |
| `data-scope`  | `"panel"`              |
| `data-part`   | `"indicator"`          |
| `data-open`   | Present when expanded  |
| `data-closed` | Present when collapsed |

> **API/props table for `PanelIndicator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PanelContent

> **API/props table for `PanelContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                  |
| ------------- | ---------------------- |
| `data-scope`  | `"panel"`              |
| `data-part`   | `"content"`            |
| `data-open`   | Present when expanded  |
| `data-closed` | Present when collapsed |

> **API/props table for `PanelContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PanelFooter

> **API/props table for `PanelFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `PanelFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

For toggleable panels, the trigger button uses `aria-controls` to reference the content region and `aria-expanded` to reflect visibility state. The content uses `role="region"` and an `id` that matches the trigger's `aria-controls`. Accessible labels can be customized with `aria-label` or `aria-labelledby`.

### Keyboard Support

| Key           | Function                                                                |
| ------------- | ----------------------------------------------------------------------- |
| `tab`         | Moves focus to the next focusable element in the page tab sequence.     |
| `shift + tab` | Moves focus to the previous focusable element in the page tab sequence. |
| `enter`       | Toggles the visibility of the content.                                  |
| `space`       | Toggles the visibility of the content.                                  |
