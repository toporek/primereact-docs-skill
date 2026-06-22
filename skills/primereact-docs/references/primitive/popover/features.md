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

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

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

**Pass Through example:**

```tsx
import { Button } from '@primereact/ui/button';
import { Popover } from '@primereact/ui/popover';

export default function PopoverPTDemo() {
    return (
        <div className="flex flex-wrap flex-col justify-center min-h-60">
            <Popover.Root />
            <Button className="hidden" />
            <button
                data-scope="popover"
                data-part="trigger"
                className="px-2.5 h-8 mb-8 rounded-lg border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium"
                data-slot="root"
                data-id="pc__r_19_"
            >
                Trigger
            </button>

            <div className="p-popover-popup translate-[unset]! inset-[unset]! relative! w-72">
                <div
                    className="p-popover-arrow left-[50%]!"
                    data-scope="popover"
                    data-slot="root"
                    data-part="arrow"
                    data-id="pc__r_37_"
                    data-side="bottom"
                    data-align="start"
                ></div>
                <div className="p-popover-header" data-scope="popover" data-slot="root" data-part="header" data-id="pc__r_39_">
                    <h2 className="p-popover-title" data-scope="popover" data-slot="root" data-part="title" data-id="pc__r_3b_">
                        Title
                    </h2>
                    <button
                        data-scope="popover"
                        data-part="close"
                        id="pr_id__r_3g_"
                        className="p-button p-component p-button-icon-only p-button-secondary p-button-text p-button-sm"
                        type="button"
                        data-slot="root"
                        data-id="pc__r_3d_"
                        data-extend="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            aria-hidden="true"
                            className="p-icon p-icon-times"
                        >
                            <path
                                d="M14.4199 4.51962C14.7128 4.22696 15.1876 4.22685 15.4805 4.51962C15.7731 4.81246 15.7731 5.28732 15.4805 5.58016L11.0606 10L15.4805 14.4199C15.773 14.7129 15.7732 15.1877 15.4805 15.4805C15.1877 15.7732 14.7128 15.773 14.4199 15.4805L10 11.0606L5.58014 15.4805C5.2873 15.7731 4.81245 15.7731 4.5196 15.4805C4.22682 15.1876 4.22692 14.7128 4.5196 14.4199L8.93949 10L4.5196 5.58016C4.22676 5.28727 4.22673 4.8125 4.5196 4.51962C4.81248 4.22677 5.28726 4.22678 5.58014 4.51962L10 8.93951L14.4199 4.51962Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="p-popover-content" data-scope="popover" data-slot="root" data-part="content" data-id="pc__r_3l_">
                    <p className="mt-0 mb-1 text-sm">
                        Component-driven development is an approach that focuses on building loosely coupled, independent components that can be
                        composed together to build complex user interfaces. This methodology promotes reusability, testability, and maintainability.
                    </p>
                </div>
                <div className="p-popover-footer text-sm" data-scope="popover" data-slot="root" data-part="footer" data-id="pc__r_3v_">
                    Popover Footer
                </div>
            </div>
        </div>
    );
}
```

## API

### PopoverRoot

> **API/props table for `PopoverRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `PopoverRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PopoverTrigger

> **API/props table for `PopoverTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute              | Value                        |
| ---------------------- | ---------------------------- |
| `data-positioner-open` | Present when popover is open |

> **API/props table for `PopoverTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PopoverPortal

> **API/props table for `PopoverPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `PopoverPortal` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PopoverPositioner

> **API/props table for `PopoverPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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

> **API/props table for `PopoverPositioner` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PopoverPopup

> **API/props table for `PopoverPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute   | Value                        |
| ----------- | ---------------------------- |
| `data-open` | Present when popover is open |

> **API/props table for `PopoverPopup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PopoverArrow

> **API/props table for `PopoverArrow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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

> **API/props table for `PopoverArrow` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PopoverHeader

> **API/props table for `PopoverHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `PopoverHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PopoverTitle

> **API/props table for `PopoverTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `PopoverTitle` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PopoverClose

> **API/props table for `PopoverClose` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `PopoverClose` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PopoverContent

> **API/props table for `PopoverContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `PopoverContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PopoverDescription

> **API/props table for `PopoverDescription` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `PopoverDescription` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PopoverFooter

> **API/props table for `PopoverFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `PopoverFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
