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

```tsx
import { useStyleClass } from '@primereact/headless/styleclass';
```

```tsx
useStyleClass({
    selector: '@next',
    enterFromClassName: 'hidden',
    enterActiveClassName: 'animate-scalein',
    leaveToClassName: 'hidden',
    leaveActiveClassName: 'animate-fadeout'
});
```

`useStyleClass` binds click-to-toggle behavior on a host element and applies CSS class sequences to a target element resolved by selector. See [StyleClass](https://primereact.dev/docs/styled/components/styleclass) for a component-based API.

## Features

- **Selector-based targeting**, built-in `@next`, `@prev`, `@parent`, `@grandparent` selectors or any CSS selector
- **Enter/leave sequences**, applies `{from,active,to}` classes in order and cleans them up after `animationend`
- **Simple toggle mode**, `toggleClassName` handles the common case of flipping a single class without an animation sequence
- **Outside-click dismissal**, `hideOnOutsideClick` runs the leave sequence when the user clicks outside the host and target
- **External host binding**, `nodeRef` moves the click listener onto a different element than the hook's default host
- **Imperative methods**, `enter()` and `leave()` trigger the sequences from any event source

## Working with callbacks

### Animate a sibling panel

Combine `@next` with enter and leave class sequences to animate a panel directly after the trigger.

```tsx
useStyleClass({
    selector: '@next',
    enterFromClassName: 'hidden',
    enterActiveClassName: 'animate-scalein',
    enterToClassName: 'visible',
    leaveActiveClassName: 'animate-fadeout',
    leaveToClassName: 'hidden'
});
```

### Toggle a single class

When you do not need the animation lifecycle, use `toggleClassName` to flip a class on the target.

```tsx
useStyleClass({ selector: '@next', toggleClassName: 'hidden' });
```

### Dismiss on outside click

Enable `hideOnOutsideClick` for menus and popovers that should close when the user clicks elsewhere on the page.

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

### Attach the listener to a different element

Pass `nodeRef` when the trigger lives outside the hook's host tree, for example, a global header button that controls a panel elsewhere in the DOM.

```tsx
const buttonRef = React.useRef(null);
useStyleClass({ nodeRef: buttonRef, selector: '@next', toggleClassName: 'hidden' });
```

## API

### useStyleClass

> **API/props table for `useStyleClass` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

StyleClass does not add ARIA attributes. Add `aria-expanded`, `aria-controls`, and other attributes to the trigger and target elements as needed.
