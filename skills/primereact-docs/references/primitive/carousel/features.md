# Carousel

An unstyled, accessible carousel component with compound composition.

Build fully custom content sliders with complete control over layout, navigation, and indicators.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Carousel } from 'primereact/carousel';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <Carousel.Root className={styles.root} align="center">
            <Carousel.Content className={styles.content}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <Carousel.Item key={i} className={styles.item}>
                        <div className={styles.itemInner}>
                            <span>{i + 1}</span>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel.Content>
            <div className={styles.controls}>
                <Carousel.Indicators className={styles.indicators}>
                    {(instance) => {
                        return Array.from(instance.carousel?.state.snapPoints ?? []).map((s, i) => (
                            <Carousel.Indicator key={s} page={i} className={styles.indicator} />
                        ));
                    }}
                </Carousel.Indicators>
                <div className={styles.nav}>
                    <Carousel.Prev className={styles.navButton}>
                        <ChevronLeft />
                    </Carousel.Prev>
                    <Carousel.Next className={styles.navButton}>
                        <ChevronRight />
                    </Carousel.Next>
                </div>
            </div>
        </Carousel.Root>
    );
}
```

## Features

- Compound component API with sub-components: `Root`, `Content`, `Item`, `Prev`, `Next`, `Indicators`, `Indicator`
- CSS scroll-snap based navigation with configurable alignment and snap type
- Mouse swipe gestures with automatic snap-to-closest behavior
- IntersectionObserver-driven `data-inview` attribute on items
- Horizontal and vertical orientation
- Fractional `slidesPerPage` for partial item visibility

## Usage

```tsx
import { Carousel } from 'primereact/carousel';
```

```tsx
<Carousel.Root>
    <Carousel.Content>
        <Carousel.Item></Carousel.Item>
    </Carousel.Content>
    <Carousel.Indicators />
    <Carousel.Prev></Carousel.Prev>
    <Carousel.Next></Carousel.Next>
</Carousel.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Carousel.Root as="section">
    <Carousel.Content as="ul">
        <Carousel.Item as="li"></Carousel.Item>
    </Carousel.Content>
</Carousel.Root>
```

Default elements: `Root`=`div`, `Content`=`div`, `Item`=`div`, `Prev`=`button`, `Next`=`button`, `Indicators`=`div`, `Indicator`=`button`.

### Render Function Children

`Indicators` accepts a render function as children, providing access to the component instance. The instance exposes `carousel` (root instance with `state.snapPoints`).

```tsx
<Carousel.Indicators>{(instance) => Array.from(instance.carousel?.state.snapPoints ?? []).map((_, i) => <Carousel.Indicator key={i} page={i}></Carousel.Indicator>)}</Carousel.Indicators>
```

## Pass Through

**Pass Through example:**

```tsx
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Carousel } from '@primereact/ui/carousel';

export default function CarouselPTDemo() {
    return (
        <div className="mt-8 mb-16">
            <Carousel.Root className="max-w-xl mx-auto" align="center">
                <Carousel.Content className="h-[240px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Carousel.Item key={i}>
                            <div className="h-full text-5xl font-semibold bg-surface-50 dark:bg-surface-950 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-xl border border-surface">
                                <span>{i + 1}</span>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel.Content>
                <div className="flex mt-4 gap-4">
                    <Carousel.Indicators />
                    <div className="flex items-center justify-end gap-2 flex-1">
                        <Carousel.Prev className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <ChevronLeft className="text-lg"></ChevronLeft>
                        </Carousel.Prev>
                        <Carousel.Next className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <ChevronRight className="text-lg"></ChevronRight>
                        </Carousel.Next>
                    </div>
                </div>
            </Carousel.Root>
        </div>
    );
}
```

## API

### CarouselRoot

> **API/props table for `CarouselRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                              |
| ------------------ | ---------------------------------- |
| `data-orientation` | `"horizontal"` or `"vertical"`     |
| `data-align`       | `"start"`, `"center"`, or `"end"`  |
| `data-page`        | Current page index                 |
| `data-swiping`     | Present when user is swiping       |
| `data-autosize`    | Present when `autoSize` is enabled |

> **API/props table for `CarouselRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CarouselContent

> **API/props table for `CarouselContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                              |
| ------------------ | ---------------------------------- |
| `data-orientation` | `"horizontal"` or `"vertical"`     |
| `data-align`       | `"start"`, `"center"`, or `"end"`  |
| `data-page`        | Current page index                 |
| `data-swiping`     | Present when user is swiping       |
| `data-autosize`    | Present when `autoSize` is enabled |

**CSS Custom Properties**

The `Content` element sets three CSS custom properties on its `style` for use in item sizing and layout.

| CSS Variable         | Description                                                      |
| -------------------- | ---------------------------------------------------------------- |
| `--slides-per-page`  | Number of visible slides per page, derived from `slidesPerPage`. |
| `--spacing-items`    | Gap between items in pixels, derived from `spacing`.             |
| `--scroll-snap-type` | Resolved scroll-snap-type value (e.g. `x mandatory`).            |

> **API/props table for `CarouselContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CarouselItem

> **API/props table for `CarouselItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                              |
| ------------------ | ---------------------------------- |
| `data-value`       | Item value identifier              |
| `data-inview`      | Present when item is in viewport   |
| `data-orientation` | `"horizontal"` or `"vertical"`     |
| `data-align`       | `"start"`, `"center"`, or `"end"`  |
| `data-autosize`    | Present when `autoSize` is enabled |

> **API/props table for `CarouselItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CarouselPrev

> **API/props table for `CarouselPrev` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                               |
| ------------------ | ----------------------------------- |
| `data-disabled`    | Present when navigation is disabled |
| `data-orientation` | `"horizontal"` or `"vertical"`      |

> **API/props table for `CarouselPrev` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CarouselNext

> **API/props table for `CarouselNext` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                               |
| ------------------ | ----------------------------------- |
| `data-disabled`    | Present when navigation is disabled |
| `data-orientation` | `"horizontal"` or `"vertical"`      |

> **API/props table for `CarouselNext` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CarouselIndicators

> **API/props table for `CarouselIndicators` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |

> **API/props table for `CarouselIndicators` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CarouselIndicator

> **API/props table for `CarouselIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                            |
| ------------------ | -------------------------------- |
| `data-active`      | Present when indicator is active |
| `data-orientation` | `"horizontal"` or `"vertical"`   |

> **API/props table for `CarouselIndicator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Carousel uses semantic HTML with `button` elements for navigation controls and indicators. Navigation buttons should include descriptive labels via `aria-label`. The current page can be announced with an `aria-live` region.

```tsx
<Carousel.Root>
    <Carousel.Content aria-label="Image carousel">
        <Carousel.Item></Carousel.Item>
    </Carousel.Content>
    <Carousel.Prev aria-label="Previous slide"></Carousel.Prev>
    <Carousel.Next aria-label="Next slide"></Carousel.Next>
</Carousel.Root>
```

### Keyboard Support

| Key               | Function                                               |
| ----------------- | ------------------------------------------------------ |
| `tab`             | Moves focus between navigation buttons and indicators. |
| `enter` / `space` | Activates the focused button or indicator.             |
