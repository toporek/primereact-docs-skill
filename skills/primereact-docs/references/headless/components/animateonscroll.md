# useAnimateOnScroll

Hook that applies enter and leave CSS animations to elements based on viewport intersection.

```tsx
'use client';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { useAnimateOnScroll } from '@primereact/headless/animateonscroll';
import * as React from 'react';

function AnimatedBox({ enterClassName, leaveClassName, children }: { enterClassName: string; leaveClassName?: string; children: React.ReactNode }) {
    const { rootProps } = useAnimateOnScroll({ enterClassName, leaveClassName });

    return <div {...rootProps}>{children}</div>;
}

export default function BasicDemo() {
    return (
        <div className="flex flex-col items-center overflow-hidden">
            <div className="flex flex-col items-center gap-4">
                <div className="text-2xl font-medium">Scroll Down</div>
                <div className="animate-bounce h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center">
                    <ArrowDown />
                </div>
            </div>
            <div className="h-[45rem]"></div>
            <div className="flex flex-col items-center gap-8 w-full">
                <AnimatedBox
                    enterClassName="animate-enter fade-in-10 slide-in-from-b-16 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <div className="text-5xl lg:text-[4rem] text-center font-bold max-w-lg lg:max-w-3xl text-surface-900">
                        Discover real-world design inspiration.
                    </div>
                </AnimatedBox>
                <AnimatedBox
                    enterClassName="animate-enter fade-in-10 slide-in-from-b-16 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <div className="max-w-md lg:max-w-md text-base lg:text-lg text-center text-surface-500">
                        Featuring over 400,000 screens and 1,000 iOS, Android & Web apps.
                    </div>
                </AnimatedBox>
            </div>
            <div className="h-[15rem]"></div>
        </div>
    );
}

```

## Usage

```tsx
import { useAnimateOnScroll } from '@primereact/headless/animateonscroll';
```

```tsx
const { rootProps } = useAnimateOnScroll({ enterClassName: 'fade-in' });

return <div {...rootProps}></div>;
```

`useAnimateOnScroll` wires an Intersection Observer to a single element and toggles CSS animation classes based on viewport visibility. See [Primitive](../../primitive/components/animateonscroll.md) for a component-based API.

## Features

- **Viewport-driven animation**, applies an enter class when the element scrolls in and a leave class when it scrolls out
- **Intersection control**, pass `root`, `rootMargin`, and `threshold` to tune when the observer fires
- **Single-shot mode**, `once` disconnects the observer after the first entry so the animation never repeats
- **Automatic class cleanup**, animation classes are removed on `animationend` and `transitionend` to leave a clean DOM
- **Data-attribute hooks**, `data-enter` and `data-leave` flip on the root during each phase for CSS targeting

## Working with callbacks

### Pair enter and leave classes

Combine `enterClassName` with a matching `leaveClassName` when you need bidirectional motion tied to scroll position.

```tsx
const { rootProps } = useAnimateOnScroll({
    enterClassName: 'slide-in',
    leaveClassName: 'fade-out'
});
```

### Fire the animation only once

Set `once` when the element should animate in on first view and then stay in its final state even as the user scrolls past it.

```tsx
const { rootProps } = useAnimateOnScroll({ enterClassName: 'fade-in', once: true });
```

### Tune the trigger point

Use `threshold` and `rootMargin` to require more of the element to be visible before the animation starts, which is useful for larger hero sections.

```tsx
const { rootProps } = useAnimateOnScroll({
    enterClassName: 'fade-in',
    threshold: 0.8,
    rootMargin: '0px 0px -100px 0px'
});
```

### Scope intersection to a scroll container

Pass an element as `root` to observe intersection inside a scrollable panel rather than the viewport.

```tsx
const scrollRef = React.useRef<HTMLDivElement>(null);

const { rootProps } = useAnimateOnScroll({
    enterClassName: 'fade-in',
    root: scrollRef.current
});
```

## Styling with data attributes

The root element carries `data-scope="animateonscroll"` and `data-part="root"`. During each animation phase, `data-enter` or `data-leave` is set so you can target mid-animation state from CSS.

```css
[data-scope='animateonscroll'][data-enter] {
    will-change: opacity, transform;
}

[data-scope='animateonscroll'][data-leave] {
    pointer-events: none;
}
```

## API

### useAnimateOnScroll

> **`useAnimateOnScroll` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/animateonscroll or the installed `@primereact/types`.

## Accessibility

No keyboard behavior, animations trigger based on viewport visibility only. See [Primitive](../../primitive/components/animateonscroll.md#accessibility) for full WAI-ARIA compliance details.
