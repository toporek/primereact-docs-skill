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
            <div ref={containerRef as React.RefObject<HTMLDivElement>} className="flex flex-col gap-4 p-5 rounded-lg border border-surface-200">
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

```tsx
import { useFocusTrap } from '@primereact/headless/focustrap';
```

```tsx
const { containerRef, firstHiddenElementRef, lastHiddenElementRef, firstHiddenProps, lastHiddenProps } = useFocusTrap();

<>
    <span ref={firstHiddenElementRef} tabIndex={0} {...firstHiddenProps} className="sr-only" />
    <div ref={containerRef}></div>
    <span ref={lastHiddenElementRef} tabIndex={0} {...lastHiddenProps} className="sr-only" />
</>;
```

`useFocusTrap` keeps focus inside a container while it is active, managing initial focus, tab cycling, and escape dismissal. See [Primitive](../../primitive/components/focustrap.md) for a component-based API.

## Features

- **Boundary wiring**, `containerRef` plus `firstHiddenElementRef` / `lastHiddenElementRef` define the trap edges with invisible sentinel spans
- **Auto focus strategy**, on mount, focus prioritizes `initialFocusRef`, then `[autofocus]` / `[data-autofocus]`, then the first focusable element
- **Tab cycling**, focus wraps from the last element back to the first and vice versa, with override hooks for both edges
- **Dynamic content**, a MutationObserver refocuses when children are added or removed from the container
- **Escape handling**, `onEscape` fires when the user presses Escape inside the trap so you can close the surrounding UI

## Working with callbacks

### Direct initial focus

Pass `initialFocusRef` to land focus on a specific element, which takes priority over any `autoFocus` attributes.

```tsx
const inputRef = React.useRef<HTMLInputElement>(null);
const focustrap = useFocusTrap({ initialFocusRef: inputRef });
```

### Close on Escape

Wire `onEscape` to dismiss the surrounding dialog or menu when the user presses Escape.

```tsx
const focustrap = useFocusTrap({
    onEscape: () => setOpen(false)
});
```

### Override tab wrap-around

Replace the default wrap behavior with `onTabFirst` and `onTabLast` when you need custom focus flow, for example, moving focus to an external element when the user tabs past the last trapped element.

```tsx
const focustrap = useFocusTrap({
    onTabFirst: (e) => focusPreviousPanel(),
    onTabLast: (e) => focusNextPanel()
});
```

### Temporarily disable the trap

Toggle `trapped` or `autoFocus` when the trap should be mounted but inactive, for example, while an inner modal owns focus.

```tsx
const focustrap = useFocusTrap({ trapped: isActive, autoFocus: isActive });
```

## Styling with data attributes

The container receives a `data-focus-trap` attribute when the trap is active, giving you a hook for debugging or visual outlines.

```css
[data-focus-trap] {
    outline: 2px solid var(--p-primary-color);
}
```

## API

### useFocusTrap

> **`useFocusTrap` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/focustrap or the installed `@primereact/types`.

## Accessibility

Tab cycles focusable elements inside, Shift+Tab reverses, and focus returns to the trigger when unmounted. See [Primitive](../../primitive/components/focustrap.md#accessibility) for full WAI-ARIA compliance details.
