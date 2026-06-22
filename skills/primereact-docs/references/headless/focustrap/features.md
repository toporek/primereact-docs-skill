# FocusTrap

Headless hook for trapping keyboard focus within a container element.

```tsx
'use client';
import { useFocusTrap } from '@primereact/headless/focustrap';
import * as React from 'react';

export default function BasicDemo() {
    const { containerRef, firstHiddenElementRef, lastHiddenElementRef, firstHiddenProps, lastHiddenProps } = useFocusTrap();

    return (
        <div className="max-w-xs mx-auto">
            <span ref={firstHiddenElementRef} tabIndex={0} {...firstHiddenProps} className="sr-only" />
            <div ref={containerRef} className="flex flex-col gap-4 p-5 rounded-lg border border-surface-200">
                <h5 className="text-sm font-semibold text-surface-900">Register</h5>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-3 py-2 text-sm rounded-md border border-surface-200 bg-surface-0 text-surface-900 outline-none focus:ring-1 focus:ring-primary"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 text-sm rounded-md border border-surface-200 bg-surface-0 text-surface-900 outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-contrast cursor-pointer hover:bg-primary-emphasis transition"
                >
                    Submit
                </button>
            </div>
            <span ref={lastHiddenElementRef} tabIndex={0} {...lastHiddenProps} className="sr-only" />
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,7-8,10}
import { useFocusTrap } from '@primereact/headless/focustrap';

const { containerRef, firstHiddenElementRef, lastHiddenElementRef, firstHiddenProps, lastHiddenProps } = useFocusTrap();

return (
    <>
        <span ref={firstHiddenElementRef} tabIndex={0} {...firstHiddenProps} className="sr-only" />
        <div ref={containerRef}></div>
        <span ref={lastHiddenElementRef} tabIndex={0} {...lastHiddenProps} className="sr-only" />
    </>
);
```

`useFocusTrap` manages focus cycling, escape key handling, and auto-focus within a container — see [Primitive](../../primitive/focustrap/features.md) for a component-based API.

## Features

- `containerRef`, `firstHiddenElementRef`, and `lastHiddenElementRef` for wiring the trap boundaries
- `firstHiddenProps` and `lastHiddenProps` return spread-ready sentinel props with `role="presentation"` and `aria-hidden`
- Auto-focus on mount: prioritizes `initialFocusRef`, then `[autofocus]`/`[data-autofocus]`, then first focusable element
- MutationObserver watches for DOM changes and refocuses when children are added or removed

## Behavior

### Trapped

Set `trapped` to `false` to disable focus cycling. Defaults to `true`.

```tsx
const focustrap = useFocusTrap({ trapped: false });
```

### Auto Focus

Set `autoFocus` to `false` to prevent automatic focus on mount. Defaults to `true`.

```tsx
const focustrap = useFocusTrap({ autoFocus: false });
```

### Initial Focus

Pass `initialFocusRef` to direct focus to a specific element when the trap activates. Takes priority over `autoFocus` and `[autofocus]` attribute detection.

```tsx
const inputRef = React.useRef<HTMLInputElement>(null);
const focustrap = useFocusTrap({ initialFocusRef: inputRef });
```

### Escape Key

Use `onEscape` to handle the Escape key press inside the trap.

```tsx
const focustrap = useFocusTrap({
    onEscape: () => setTrapped(false)
});
```

### Custom Tab Handlers

Override default focus cycling with `onTabFirst` and `onTabLast` callbacks. When provided, these replace the built-in wrap-around behavior.

```tsx
const focustrap = useFocusTrap({
    onTabFirst: (e) => console.log('Shift+Tab at start'),
    onTabLast: (e) => console.log('Tab at end')
});
```

### Custom Styling with Data Attributes

The container receives a `data-focus-trap` attribute when the trap is active.

```css
[data-focus-trap] {
    outline: 2px solid var(--p-primary-color);
}
```

## API

### useFocusTrap

> **API/props table for `useFocusTrap` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [FocusTrap Primitive](../../primitive/focustrap/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.

```

```
