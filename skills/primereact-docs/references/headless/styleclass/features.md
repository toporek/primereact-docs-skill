# useStyleClass

Hook that manages CSS class toggling with enter/leave animation sequences on a target element.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { useStyleClass } from '@primereact/headless/styleclass';
import * as React from 'react';

export default function BasicDemo() {
    const btnRef = React.useRef<HTMLButtonElement>(null);

    useStyleClass({
        nodeRef: btnRef,
        selector: '@next',
        enterFromClassName: 'hidden',
        enterActiveClassName: 'animate-scalein',
        leaveToClassName: 'hidden',
        leaveActiveClassName: 'animate-fadeout',
        hideOnOutsideClick: true
    });

    return (
        <div className="flex flex-col items-center gap-4 h-32">
            <button
                ref={btnRef}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-contrast hover:bg-primary/90 transition-colors cursor-pointer text-sm font-medium"
            >
                Toggle Panel
                <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="hidden w-full max-w-md p-4 rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 shadow-md origin-top">
                <p className="text-sm text-surface-700 dark:text-surface-200 leading-relaxed m-0">
                    This panel is toggled using useStyleClass with scale-in and fade-out animations. Click the button again or click outside to
                    dismiss.
                </p>
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3-8}
import { useStyleClass } from '@primereact/headless/styleclass';

useStyleClass({
    selector: '@next',
    enterFromClassName: 'hidden',
    enterActiveClassName: 'animate-scalein',
    leaveToClassName: 'hidden',
    leaveActiveClassName: 'animate-fadeout'
});
```

`useStyleClass` binds click-to-toggle behavior on the host element, applying CSS class sequences to a target element — see [StyleClass](https://v11.primereact.org/docs/styled/components/styleclass) for a component-based API.

## Features

- Enter/leave CSS class animation sequences with `animationend` cleanup
- Built-in selectors (`@next`, `@prev`, `@parent`, `@grandparent`) or any CSS selector
- Simple `toggleClassName` for non-animated toggling
- Auto-hide on outside click with `hideOnOutsideClick`
- Slidedown animation support with automatic `maxHeight` calculation
- Exposes `enter()` and `leave()` methods for programmatic control

## Behavior

### Selector

Set `selector` to determine the target element. Built-in values resolve relative to the host element.

```tsx
useStyleClass({ selector: '@next' }); // Next sibling
useStyleClass({ selector: '@prev' }); // Previous sibling
useStyleClass({ selector: '@parent' }); // Parent element
useStyleClass({ selector: '#panel' }); // CSS selector
```

### Enter Animation

Set `enterFromClassName`, `enterActiveClassName`, and optionally `enterToClassName` to define the enter sequence. Classes are applied in order and cleaned up after `animationend`.

```tsx
useStyleClass({
    selector: '@next',
    enterFromClassName: 'hidden',
    enterActiveClassName: 'animate-scalein',
    enterToClassName: 'visible'
});
```

### Leave Animation

Set `leaveFromClassName`, `leaveActiveClassName`, and `leaveToClassName` to define the leave sequence.

```tsx
useStyleClass({
    selector: '@next',
    leaveActiveClassName: 'animate-fadeout',
    leaveToClassName: 'hidden'
});
```

### Toggle Class

Use `toggleClassName` for simple class toggling without animation sequences.

```tsx
useStyleClass({ selector: '@next', toggleClassName: 'hidden' });
```

### Hide on Outside Click

Set `hideOnOutsideClick` to automatically trigger the leave sequence when clicking outside the host and target elements.

```tsx
useStyleClass({
    selector: '@next',
    enterFromClassName: 'hidden',
    enterActiveClassName: 'animate-scalein',
    leaveToClassName: 'hidden',
    leaveActiveClassName: 'animate-fadeout',
    hideOnOutsideClick: true
});
```

### Node Ref

Use `nodeRef` to bind the click listener to an external element instead of the hook's host element.

```tsx
const buttonRef = React.useRef(null);
useStyleClass({ nodeRef: buttonRef, selector: '@next', toggleClassName: 'hidden' });
```

## API

### useStyleClass

> **API/props table for `useStyleClass` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

StyleClass does not add ARIA attributes. Add `aria-expanded`, `aria-controls`, and other attributes to the trigger and target elements as needed.
