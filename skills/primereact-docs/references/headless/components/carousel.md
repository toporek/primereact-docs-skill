# useCarousel

Hook that manages carousel scroll snapping, swipe gestures, and page-based navigation.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { useCarousel } from '@primereact/headless/carousel';

export default function BasicDemo() {
    const { rootProps, contentProps, state, getItemProps, indicatorsProps, getIndicatorProps, getPrevProps, getNextProps } = useCarousel({
        align: 'center'
    });

    return (
        <div className="max-w-xl mx-auto py-4">
            <div {...rootProps}>
                <div
                    {...contentProps}
                    className="relative flex gap-(--spacing-items) overflow-x-scroll overscroll-x-contain scrollbar-none [scroll-snap-type:var(--px-scroll-snap-type)] h-[240px]"
                    style={contentProps.style}
                >
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            {...getItemProps(i)}
                            className="grow-0 shrink-0 min-w-0 basis-[calc(100%/var(--px-slides-per-page)-var(--px-spacing-items)*(var(--px-slides-per-page)-1)/var(--px-slides-per-page))] snap-center"
                        >
                            <div className="h-full text-5xl font-semibold bg-surface-50 dark:bg-surface-950 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-xl border border-surface-200 dark:border-surface-700">
                                <span>{i + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex mt-4 gap-4">
                    <div {...indicatorsProps} className="flex flex-wrap items-center justify-start gap-2">
                        {Array.from(state.snapPoints).map((_, i) => (
                            <button
                                key={i}
                                {...getIndicatorProps(i)}
                                className="w-7 h-2 rounded-full transition-colors cursor-pointer outline-0 outline-primary focus-visible:outline-2 focus-visible:outline-offset-2 bg-surface-200 dark:bg-surface-700 hover:bg-surface-300 dark:hover:bg-surface-600 data-[active]:bg-primary"
                            />
                        ))}
                    </div>
                    <div className="flex items-center justify-end gap-2 flex-1">
                        <button
                            {...getPrevProps(state.isPrevDisabled)}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-700 cursor-pointer transition disabled:opacity-50 disabled:pointer-events-none outline-0 outline-primary focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            <ChevronLeft className="text-lg" />
                        </button>
                        <button
                            {...getNextProps(state.isNextDisabled)}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-700 cursor-pointer transition disabled:opacity-50 disabled:pointer-events-none outline-0 outline-primary focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            <ChevronRight className="text-lg" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useCarousel } from '@primereact/headless/carousel';
```

```tsx
const carousel = useCarousel({ align: 'center' });

<div {...carousel.rootProps}>
    <div ref={carousel.contentRef} {...carousel.contentProps}>
        <div {...carousel.getItemProps(0)}></div>
    </div>
    <div {...carousel.indicatorsProps}>
        <button {...carousel.getIndicatorProps(0)}></button>
    </div>
    <button {...carousel.getPrevProps(carousel.state.isPrevDisabled)}></button>
    <button {...carousel.getNextProps(carousel.state.isNextDisabled)}></button>
</div>;
```

`useCarousel` wires scroll snapping, swipe gestures, and page tracking together for a content slider. See [Primitive](../../primitive/components/carousel.md) for a component-based API.

## Features

- **Scroll-snap navigation**, CSS scroll-snap drives the layout, so native momentum, wheel, and touch gestures work out of the box
- **Swipe gestures**, pointer-based dragging with auto snap-to-closest when the drag releases
- **Page and slide addressing**, navigate by page index or by a specific slide with `scrollToPage` and `scrollToSlide`
- **Responsive visibility**, `slidesPerPage` accepts fractional values (e.g. `1.5`) to hint at off-screen content
- **Intersection tracking**, `data-inview` updates on each item as it enters or leaves the viewport
- **Configurable layout**, orientation, alignment, spacing, auto-size, and loop modes all expose reactive state

## Working with callbacks

### onPageChange, controlled navigation

Pair `page` with `onPageChange` when navigation must be driven from parent state, hash routing, or analytics hooks.

```tsx
const [page, setPage] = React.useState(0);

const carousel = useCarousel({
    page,
    onPageChange: (e) => setPage(e.value)
});
```

### Slide-indexed control

Use `slide` / `onSlideChange` for gallery-style carousels where every item is one page.

```tsx
const [slide, setSlide] = React.useState(0);

const carousel = useCarousel({
    slide,
    onSlideChange: (e) => setSlide(e.value)
});
```

### Peek layouts with fractional slides

Combine `slidesPerPage` with `align: 'start'` to show a peek of the next slide, a common mobile pattern.

```tsx
const carousel = useCarousel({ slidesPerPage: 1.5, align: 'start', spacing: 16 });
```

### Infinite loop navigation

Enable `loop` so the prev/next props never disable and navigation wraps at the boundaries.

```tsx
const carousel = useCarousel({ loop: true });
```

### Rendering custom indicators

Read `state.page` and `state.snapPoints` to draw progress bars, fractions, or dot indicators without extra calculations.

```tsx
const carousel = useCarousel();

<span>
    {carousel.state.page + 1} / {carousel.state.snapPoints.length}
</span>;
```

## Styling with data attributes

Prop objects include orientation and state-dependent data attributes. `contentProps.style` also exposes the following CSS custom properties:

| Variable             | Description                                                      |
| -------------------- | ---------------------------------------------------------------- |
| `--slides-per-page`  | Number of visible slides per page, derived from `slidesPerPage`. |
| `--spacing-items`    | Gap between items in pixels, derived from `spacing`.             |
| `--scroll-snap-type` | Resolved scroll-snap-type value (e.g. `x mandatory`).            |

```css
[data-scope='carousel'][data-part='item'] {
    flex-basis: calc(100% / var(--px-slides-per-page) - var(--px-spacing-items) * (var(--px-slides-per-page) - 1) / var(--px-slides-per-page));
}

[data-scope='carousel'][data-part='content'][data-orientation='horizontal'] {
    overflow-x: scroll;
}

[data-scope='carousel'][data-part='content'][data-orientation='vertical'] {
    flex-direction: column;
    overflow-y: scroll;
}

[data-scope='carousel'][data-part='item'][data-inview] {
    opacity: 1;
}

[data-scope='carousel'][data-part='indicator'][data-active] {
    background: var(--primary);
}
```

## API

### useCarousel

> **`useCarousel` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/carousel or the installed `@primereact/types`.

## Accessibility

Arrow keys move between slides, Home/End jump to first/last, and Space or Enter pauses autoplay. See [Primitive](../../primitive/components/carousel.md#accessibility) for full WAI-ARIA compliance details.
