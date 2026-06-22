# Stepper

An unstyled, accessible stepper component with compound composition for multi-step workflows.

Build fully custom step-by-step workflows with complete control over layout and styling.

```tsx
'use client';
import { Stepper } from 'primereact/stepper';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <Stepper.Root defaultValue="1" className={styles.root}>
            <Stepper.List className={styles.list}>
                <Stepper.Step value="1" className={styles.step}>
                    <Stepper.Header className={styles.header}>
                        <Stepper.Number className={styles.number}>1</Stepper.Number>
                        <Stepper.Title className={styles.title}>Header I</Stepper.Title>
                    </Stepper.Header>
                    <Stepper.Separator className={styles.separator} />
                </Stepper.Step>
                <Stepper.Step value="2" className={styles.step}>
                    <Stepper.Header className={styles.header}>
                        <Stepper.Number className={styles.number}>2</Stepper.Number>
                        <Stepper.Title className={styles.title}>Header II</Stepper.Title>
                    </Stepper.Header>
                    <Stepper.Separator className={styles.separator} />
                </Stepper.Step>
                <Stepper.Step value="3" className={styles.step}>
                    <Stepper.Header className={styles.header}>
                        <Stepper.Number className={styles.number}>3</Stepper.Number>
                        <Stepper.Title className={styles.title}>Header III</Stepper.Title>
                    </Stepper.Header>
                </Stepper.Step>
            </Stepper.List>
            <Stepper.Panels className={styles.panels}>
                <Stepper.Panel value="1" className={styles.panel}>
                    <div className={styles.panelPlaceholder}>Content I</div>
                </Stepper.Panel>
                <Stepper.Panel value="2" className={styles.panel}>
                    <div className={styles.panelPlaceholder}>Content II</div>
                </Stepper.Panel>
                <Stepper.Panel value="3" className={styles.panel}>
                    <div className={styles.panelPlaceholder}>Content III</div>
                </Stepper.Panel>
            </Stepper.Panels>
        </Stepper.Root>
    );
}
```

## Features

- Compound component API with eleven sub-components: `Root`, `List`, `Step`, `Item`, `Header`, `Number`, `Title`, `Separator`, `Panels`, `Panel`, `Content`
- Horizontal layout via `List` + `Step` + `Panels` + `Panel`
- Vertical layout via `Item` + `Step` + `Panel` + `Content`
- Steps-only mode by omitting `Panels`/`Panel`

## Usage

```tsx
import { Stepper } from 'primereact/stepper';
```

```tsx
<Stepper.Root>
    <Stepper.List>
        <Stepper.Step>
            <Stepper.Header>
                <Stepper.Number></Stepper.Number>
                <Stepper.Title></Stepper.Title>
            </Stepper.Header>
            <Stepper.Separator />
        </Stepper.Step>
    </Stepper.List>
    <Stepper.Panels>
        <Stepper.Panel></Stepper.Panel>
    </Stepper.Panels>
</Stepper.Root>
```

### Vertical Layout

Wrap each step header and panel inside `Stepper.Item` for vertical orientation. Use `Stepper.Separator` and `Stepper.Content` inside `Stepper.Panel` for proper vertical structure.

```tsx
<Stepper.Root>
    <Stepper.Item>
        <Stepper.Step>
            <Stepper.Header>
                <Stepper.Number></Stepper.Number>
                <Stepper.Title></Stepper.Title>
            </Stepper.Header>
        </Stepper.Step>
        <Stepper.Panel>
            <Stepper.Separator />
            <Stepper.Content></Stepper.Content>
        </Stepper.Panel>
    </Stepper.Item>
</Stepper.Root>
```

## Behavior

### Motion Animation

Use `motionProps` on `Root` to configure panel open/close animations in vertical layout.

```tsx
<Stepper.Root motionProps={{ name: 'p-collapsible', cssVarPrefix: 'stepper-panel', hideStrategy: 'remove' }}></Stepper.Root>
```

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Stepper.Root as="nav">
    <Stepper.List as="ol">
        <Stepper.Step as="li"></Stepper.Step>
    </Stepper.List>
</Stepper.Root>
```

Default elements: `Root`=`div`, `List`=`div`, `Step`=`div`, `Item`=`div`, `Header`=`button`, `Number`=`span`, `Title`=`span`, `Separator`=`span`, `Panels`=`div`, `Panel`=`div`, `Content`=`div`.

### Render Function Children

`Panel` accepts a render function as children, providing access to the component instance. The instance exposes `stepper` (root instance), `stepperitem` (parent item instance), `active`, and `activeValue`.

```tsx
<Stepper.Panel>{(instance) => <div>Step is {instance.active ? 'active' : 'inactive'}</div>}</Stepper.Panel>
```

## Pass Through

**Pass Through example:**

```tsx
import { Stepper } from '@primereact/ui/stepper';

export default function StepperPTDemo() {
    return (
        <Stepper.Root value="1" className="basis-[50rem]">
            <Stepper.List>
                <Stepper.Step value="1">
                    <Stepper.Header>
                        <Stepper.Number>1</Stepper.Number>
                        <Stepper.Title>Header I</Stepper.Title>
                    </Stepper.Header>
                    <Stepper.Separator />
                </Stepper.Step>
                <Stepper.Step value="2">
                    <Stepper.Header>
                        <Stepper.Number>2</Stepper.Number>
                        <Stepper.Title>Header II</Stepper.Title>
                    </Stepper.Header>
                    <Stepper.Separator />
                </Stepper.Step>
                <Stepper.Step value="3">
                    <Stepper.Header>
                        <Stepper.Number>3</Stepper.Number>
                        <Stepper.Title>Header III</Stepper.Title>
                    </Stepper.Header>
                </Stepper.Step>
            </Stepper.List>
            <Stepper.Panels>
                <Stepper.Panel value="1">
                    <div className="flex flex-col h-48">
                        <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                            Content I
                        </div>
                    </div>
                </Stepper.Panel>
                <Stepper.Panel value="2">
                    <div className="flex flex-col h-48">
                        <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                            Content II
                        </div>
                    </div>
                </Stepper.Panel>
                <Stepper.Panel value="3">
                    <div className="flex flex-col h-48">
                        <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                            Content III
                        </div>
                    </div>
                </Stepper.Panel>
            </Stepper.Panels>
        </Stepper.Root>
    );
}
```

## API

### StepperRoot

> **API/props table for `StepperRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value       |
| ------------ | ----------- |
| `data-scope` | `"stepper"` |
| `data-part`  | `"root"`    |

> **API/props table for `StepperRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### StepperList

> **API/props table for `StepperList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `StepperList` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### StepperItem

> **API/props table for `StepperItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                       |
| ------------- | --------------------------- |
| `data-scope`  | `"stepper"`                 |
| `data-part`   | `"item"`                    |
| `data-active` | Present when item is active |

> **API/props table for `StepperItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### StepperStep

> **API/props table for `StepperStep` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                         |
| --------------- | ----------------------------- |
| `data-scope`    | `"stepper"`                   |
| `data-part`     | `"step"`                      |
| `data-active`   | Present when step is active   |
| `data-disabled` | Present when step is disabled |

> **API/props table for `StepperStep` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### StepperHeader

> **API/props table for `StepperHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value       |
| ------------ | ----------- |
| `data-scope` | `"stepper"` |
| `data-part`  | `"header"`  |

> **API/props table for `StepperHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### StepperNumber

> **API/props table for `StepperNumber` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `StepperNumber` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### StepperTitle

> **API/props table for `StepperTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `StepperTitle` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### StepperSeparator

> **API/props table for `StepperSeparator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `StepperSeparator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### StepperPanels

> **API/props table for `StepperPanels` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `StepperPanels` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### StepperPanel

> **API/props table for `StepperPanel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                        |
| ------------- | ---------------------------- |
| `data-scope`  | `"stepper"`                  |
| `data-part`   | `"panel"`                    |
| `data-active` | Present when panel is active |

> **API/props table for `StepperPanel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### StepperContent

> **API/props table for `StepperContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `StepperContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Stepper container is defined with the `tablist` role. Each stepper header has a `tab` role and `aria-controls` to refer to the corresponding stepper content element. The content element of each stepper has `tabpanel` role, an id to match the `aria-controls` of the header and `aria-labelledby` reference to the header as the accessible name. Use `aria-labelledby` on the root element to specify an element to describe the Stepper.

### Tab Header Keyboard Support

| Key     | Function                              |
| ------- | ------------------------------------- |
| `tab`   | Moves focus through the header.       |
| `enter` | Activates the focused stepper header. |
| `space` | Activates the focused stepper header. |
