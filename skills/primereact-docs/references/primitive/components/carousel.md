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
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Carousel.Indicator key={i} page={i} className={styles.indicator} />
                    ))}
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

## API

### CarouselRoot

> **`CarouselRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/carousel or the installed `@primereact/types`.

| Attribute          | Value                              |
| ------------------ | ---------------------------------- |
| `data-orientation` | `"horizontal"` or `"vertical"`     |
| `data-align`       | `"start"`, `"center"`, or `"end"`  |
| `data-page`        | Current page index                 |
| `data-swiping`     | Present when user is swiping       |
| `data-autosize`    | Present when `autoSize` is enabled |

| Label | Type | Description |
|:------|:------|:------|
| root | CarouselRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| content | CarouselRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| item | CarouselRootPassThroughType> | Used to pass attributes to the item's DOM element. |
| prev | CarouselRootPassThroughType> | Used to pass attributes to the prev button's DOM element. |
| next | CarouselRootPassThroughType> | Used to pass attributes to the next button's DOM element. |
| indicators | CarouselRootPassThroughType> | Used to pass attributes to the indicators' DOM element. |
| indicator | CarouselRootPassThroughType> | Used to pass attributes to the indicator's DOM element. |

### CarouselContent

> **`CarouselContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/carousel or the installed `@primereact/types`.

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

| Label | Type | Description |
|:------|:------|:------|
| root | CarouselContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### CarouselItem

> **`CarouselItem` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/carousel or the installed `@primereact/types`.

| Attribute          | Value                              |
| ------------------ | ---------------------------------- |
| `data-value`       | Item value identifier              |
| `data-inview`      | Present when item is in viewport   |
| `data-orientation` | `"horizontal"` or `"vertical"`     |
| `data-align`       | `"start"`, `"center"`, or `"end"`  |
| `data-autosize`    | Present when `autoSize` is enabled |

| Label | Type | Description |
|:------|:------|:------|
| root | CarouselItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### CarouselPrev

> **`CarouselPrev` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/carousel or the installed `@primereact/types`.

| Attribute          | Value                               |
| ------------------ | ----------------------------------- |
| `data-disabled`    | Present when navigation is disabled |
| `data-orientation` | `"horizontal"` or `"vertical"`      |

| Label | Type | Description |
|:------|:------|:------|
| root | CarouselPrevPassThroughType> | Used to pass attributes to the root's DOM element. |

### CarouselNext

> **`CarouselNext` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/carousel or the installed `@primereact/types`.

| Attribute          | Value                               |
| ------------------ | ----------------------------------- |
| `data-disabled`    | Present when navigation is disabled |
| `data-orientation` | `"horizontal"` or `"vertical"`      |

| Label | Type | Description |
|:------|:------|:------|
| root | CarouselNextPassThroughType> | Used to pass attributes to the root's DOM element. |

### CarouselIndicators

> **`CarouselIndicators` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/carousel or the installed `@primereact/types`.

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |

| Label | Type | Description |
|:------|:------|:------|
| root | CarouselIndicatorsPassThroughType> | Used to pass attributes to the root's DOM element. |

### CarouselIndicator

> **`CarouselIndicator` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/carousel or the installed `@primereact/types`.

| Attribute          | Value                            |
| ------------------ | -------------------------------- |
| `data-active`      | Present when indicator is active |
| `data-orientation` | `"horizontal"` or `"vertical"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | CarouselIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

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
