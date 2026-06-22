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

```tsx showLineNumbers {1,3,5}
import { useAnimateOnScroll } from '@primereact/headless/animateonscroll';

const { rootProps } = useAnimateOnScroll({ enterClassName: 'fade-in' });

return <div {...rootProps}></div>;
```

`useAnimateOnScroll` uses the Intersection Observer API to detect viewport entry/exit and applies CSS animation classes — see [Primitive](../../primitive/animateonscroll/features.md) for a component-based API.

## Features

- Applies `enterClassName` when the element enters the viewport and `leaveClassName` when it leaves
- Configurable Intersection Observer options: `root`, `rootMargin`, `threshold`
- `once` mode to trigger the animation only on first intersection
- Automatic cleanup of animation classes after `animationend` and `transitionend` events

## Behavior

### Enter and Leave Classes

Set `enterClassName` for enter animations and `leaveClassName` for leave animations. Any valid CSS animation class works.

```tsx
const { rootProps } = useAnimateOnScroll({
    enterClassName: 'slide-in',
    leaveClassName: 'fade-out'
});
```

### One-Time Animation

Set `once` to animate only on the first viewport entry. After the element enters, the observer is disconnected.

```tsx
const { rootProps } = useAnimateOnScroll({ enterClassName: 'fade-in', once: true });
```

### Intersection Observer Options

Configure `root`, `rootMargin`, and `threshold` to control when the intersection triggers.

```tsx
const { rootProps } = useAnimateOnScroll({
    enterClassName: 'fade-in',
    threshold: 0.8,
    rootMargin: '0px 0px -100px 0px'
});
```

`threshold` defaults to `0.5`. Set higher values to require more of the element to be visible before triggering.

### Custom Styling with Data Attributes

The root element includes `data-scope="animateonscroll"` and `data-part="root"`. During animation phases, `data-enter` or `data-leave` attributes are set on the element.

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

> **API/props table for `useAnimateOnScroll` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [AnimateOnScroll Primitive](../../primitive/animateonscroll/features.md#accessibility) for accessibility details.
