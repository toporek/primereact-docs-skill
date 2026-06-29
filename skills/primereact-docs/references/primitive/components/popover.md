# Popover

An unstyled popover component with positioning, focus management, and outside click dismissal.

Build fully custom popover overlays with complete control over layout and styling.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Times } from '@primeicons/react/times';
import { Popover } from 'primereact/popover';
import * as React from 'react';
import styles from './basic-demo.module.css';

const team = [
    { initials: 'AK', name: 'Alex Kim' },
    { initials: 'MR', name: 'Maya Ross' },
    { initials: 'SL', name: 'Sam Lee' }
];

export default function BasicDemo() {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('https://acme.io/project/design-system');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={styles.wrapper}>
            <Popover.Root>
                <Popover.Trigger className={styles.trigger}>Share</Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={12} side="bottom">
                        <Popover.Popup className={styles.popup}>
                            <Popover.Arrow className={styles.arrow} />
                            <Popover.Header className={styles.header}>
                                <Popover.Title className={styles.title}>Share Project</Popover.Title>
                                <Popover.Close as="button" className={styles.close}>
                                    <Times />
                                </Popover.Close>
                            </Popover.Header>
                            <Popover.Content className={styles.content}>
                                <div className={styles.linkRow}>
                                    <input type="text" readOnly value="https://acme.io/project/design-system" className={styles.input} />
                                    <button onClick={handleCopy} className={styles.copyButton}>
                                        {copied ? (
                                            <>
                                                <Check className={styles.copyIcon} /> Copied!
                                            </>
                                        ) : (
                                            'Copy'
                                        )}
                                    </button>
                                </div>
                                <p className={styles.sectionLabel}>Team Members</p>
                                <div className={styles.teamRow}>
                                    {team.map((member) => (
                                        <div key={member.initials} title={member.name} className={styles.avatar}>
                                            {member.initials}
                                        </div>
                                    ))}
                                    <button className={styles.addButton}>+</button>
                                </div>
                            </Popover.Content>
                            <Popover.Footer className={styles.footer}>
                                <span className={styles.footerText}>Anyone with the link can view this project.</span>
                            </Popover.Footer>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `Trigger`, `Portal`, `Positioner`, `Popup`, `Arrow`, `Header`, `Title`, `Close`, `Content`, `Description`, `Footer`
- Automatic positioning relative to trigger with configurable `side`, `align`, and offset options
- Outside click and escape key dismissal with optional focus trapping
- Arrow element support for visual connection to the trigger

## Usage

```tsx
import { Popover } from 'primereact/popover';
```

```tsx
<Popover.Root>
    <Popover.Trigger></Popover.Trigger>
    <Popover.Portal>
        <Popover.Positioner side="bottom" sideOffset={8}>
            <Popover.Popup>
                <Popover.Arrow />
                <Popover.Header>
                    <Popover.Title></Popover.Title>
                    <Popover.Close></Popover.Close>
                </Popover.Header>
                <Popover.Content>
                    <Popover.Description></Popover.Description>
                </Popover.Content>
                <Popover.Footer></Popover.Footer>
            </Popover.Popup>
        </Popover.Positioner>
    </Popover.Portal>
</Popover.Root>
```

## Behavior

### Motion Animation

```tsx
<Popover.Popup motionProps={{ name: 'p-popover' }}>...</Popover.Popup>
```

See [Motion](motion.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Popover.Trigger as="div">...</Popover.Trigger>
```

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Popover.Trigger>{(instance) => <span>{instance.popover?.state.open ? 'Close' : 'Open'}</span>}</Popover.Trigger>
```

## Pass Through

## API

### PopoverRoot

> **API/props table for `PopoverRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| trigger | PopoverRootPassThroughType> | Used to pass attributes to the trigger's DOM element. |
| positioner | PopoverRootPassThroughType> | Used to pass attributes to the positioner's DOM element. |
| popup | PopoverRootPassThroughType> | Used to pass attributes to the popup's DOM element. |
| arrow | PopoverRootPassThroughType> | Used to pass attributes to the arrow's DOM element. |
| header | PopoverRootPassThroughType> | Used to pass attributes to the header's DOM element. |
| title | PopoverRootPassThroughType> | Used to pass attributes to the title's DOM element. |
| description | PopoverRootPassThroughType> | Used to pass attributes to the description's DOM element. |
| content | PopoverRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| footer | PopoverRootPassThroughType> | Used to pass attributes to the footer's DOM element. |
| close | PopoverRootPassThroughType> | Used to pass attributes to the close's DOM element. |

### PopoverTrigger

> **API/props table for `PopoverTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute              | Value                        |
| ---------------------- | ---------------------------- |
| `data-positioner-open` | Present when popover is open |

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverPortal

> **API/props table for `PopoverPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverPortalPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverPositioner

> **API/props table for `PopoverPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
| root | PopoverPositionerPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverPopup

> **API/props table for `PopoverPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute   | Value                        |
| ----------- | ---------------------------- |
| `data-open` | Present when popover is open |

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverPopupPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverArrow

> **API/props table for `PopoverArrow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
| root | PopoverArrowPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverHeader

> **API/props table for `PopoverHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverTitle

> **API/props table for `PopoverTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverTitlePassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverClose

> **API/props table for `PopoverClose` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverClosePassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverContent

> **API/props table for `PopoverContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverDescription

> **API/props table for `PopoverDescription` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverDescriptionPassThroughType> | Used to pass attributes to the root's DOM element. |

### PopoverFooter

> **API/props table for `PopoverFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | PopoverFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Use a clear label for the trigger content so screen readers can identify the action.

Use `Popover.Title` and optional `Popover.Description` to provide semantic structure inside the popup.

The trigger communicates popup state using ARIA attributes such as `aria-expanded`, `aria-controls`, and `aria-haspopup`.

### Keyboard Support

| Key           | Function                                            |
| ------------- | --------------------------------------------------- |
| `enter`       | Activates the trigger button.                       |
| `space`       | Activates the trigger button.                       |
| `escape`      | Closes the popover when `closeOnEscape` is enabled. |
| `tab`         | Moves focus to the next focusable element.          |
| `shift + tab` | Moves focus to the previous focusable element.      |
