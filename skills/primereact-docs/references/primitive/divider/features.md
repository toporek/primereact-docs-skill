# Divider

An unstyled separator component with compound composition for horizontal and vertical content division.

Build fully custom content separators with complete control over layout and styling.

```tsx
'use client';
import { Divider } from 'primereact/divider';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <span className={styles.label}>Invoice No</span>
                    <span className={styles.value}>0000123</span>
                </div>
                <Divider.Root orientation="vertical" className={styles.vertical} />
                <div className={styles.column}>
                    <span className={styles.label}>Issued</span>
                    <span className={styles.value}>01/01/2026</span>
                </div>
                <Divider.Root orientation="vertical" className={styles.vertical} />
                <div className={styles.column}>
                    <span className={styles.label}>Due Date</span>
                    <span className={styles.value}>02/02/2026</span>
                </div>
            </div>
            <Divider.Root className={styles.horizontal} />
            <p className={styles.value}>Fast setup, no credit card required.</p>
        </div>
    );
}
```

## Features

- Compound component API with two sub-components: `Root`, `Content`
- Horizontal and vertical orientations
- Three border types: `solid`, `dashed`, `dotted`
- Content alignment within the divider line (`left`, `center`, `right` for horizontal; `top`, `center`, `bottom` for vertical)

## Usage

```tsx
import { Divider } from 'primereact/divider';
```

```tsx
<Divider.Root>
    <Divider.Content />
</Divider.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Divider.Root as="hr" />
```

Default elements: `Root`=`div`, `Content`=`div`.

### Render Function Children

`Divider.Content` accepts a render function as children, providing access to the component instance.

```tsx
<Divider.Content>{(instance) => <span>{instance.divider?.props.orientation}</span>}</Divider.Content>
```

## Pass Through

**Pass Through example:**

```tsx
import { Divider } from '@primereact/ui/divider';

export default function DividerPTDemo() {
    return (
        <div className="w-full">
            <p className="text-sm">Fast setup with a simple onboarding process, no credit card required to get started.</p>

            <Divider.Root align="left" type="solid">
                <Divider.Content>
                    <code className="uppercase text-xs">Getting started</code>
                </Divider.Content>
            </Divider.Root>

            <p className="text-sm">Cancel anytime directly from your account settings, with no questions asked.</p>
        </div>
    );
}
```

## API

### DividerRoot

> **API/props table for `DividerRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DividerRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DividerContent

> **API/props table for `DividerContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `DividerContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Divider uses `role="separator"` with `aria-orientation` set to either `"horizontal"` or `"vertical"`.

### Keyboard Support

Component does not include any interactive elements.
