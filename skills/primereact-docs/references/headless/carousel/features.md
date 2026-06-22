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
                    className="relative flex gap-(--spacing-items) overflow-x-scroll overscroll-x-contain [scrollbar-width:none] [scroll-snap-type:var(--scroll-snap-type)] h-[240px]"
                    style={contentProps.style}
                >
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            {...getItemProps(i)}
                            className="grow-0 shrink-0 min-w-0 basis-[calc(100%/var(--slides-per-page)-var(--spacing-items)*(var(--slides-per-page)-1)/var(--slides-per-page))] snap-center"
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

```tsx showLineNumbers {1,3,6-8,10-11,13-14}
import { useCarousel } from '@primereact/headless/carousel';

const carousel = useCarousel({ align: 'center' });

return (
    <div {...carousel.rootProps}>
        <div ref={carousel.contentRef} {...carousel.contentProps}>
            <div {...carousel.getItemProps(0)}></div>
        </div>
        <div {...carousel.indicatorsProps}>
            <button {...carousel.getIndicatorProps(0)}></button>
        </div>
        <button {...carousel.getPrevProps(carousel.state.isPrevDisabled)}></button>
        <button {...carousel.getNextProps(carousel.state.isNextDisabled)}></button>
    </div>
);
```

`useCarousel` manages scroll snapping, swipe gestures, and page tracking for a content slider — see [Primitive](../../primitive/carousel/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects (`rootProps`, `contentProps`, `getItemProps`, `getNextProps`, `getPrevProps`, `indicatorsProps`, `getIndicatorProps`)
- CSS scroll-snap based navigation with configurable snap type
- Mouse swipe gestures via PointerEvent with automatic snap-to-closest
- IntersectionObserver-driven `data-inview` attribute on items
- Imperative methods: `next()`, `prev()`, `scrollToPage()`, `scrollToSlide()`
- Exposes `state.page`, `state.swiping`, `state.isPrevDisabled`, `state.isNextDisabled`, `state.snapPoints`

## Behavior

### Default Page

Set `defaultPage` to start on a specific page index.

```tsx
const carousel = useCarousel({ defaultPage: 2 });
```

### Controlled Page

Use `page` and `onPageChange` for full programmatic control over the current page.

```tsx
const [page, setPage] = React.useState(0);
const carousel = useCarousel({
    page,
    onPageChange: (e) => setPage(e.value)
});
```

### Controlled Slide

Use `slide` and `onSlideChange` to control by item index rather than page index. This is useful for gallery-style carousels where each item maps 1:1 to a page.

```tsx
const [slide, setSlide] = React.useState(0);
const carousel = useCarousel({
    slide,
    onSlideChange: (e) => setSlide(e.value)
});
```

### Alignment

Set `align` to `'start'`, `'center'`, or `'end'` to control how items snap within the viewport.

```tsx
const carousel = useCarousel({ align: 'start' });
```

### Slides Per Page

Set `slidesPerPage` to control the number of visible items. Fractional values like `1.5` show partial items to hint at more content.

```tsx
const carousel = useCarousel({ slidesPerPage: 1.5, align: 'start' });
```

### Orientation

Set `orientation` to `'vertical'` for a vertical carousel.

```tsx
const carousel = useCarousel({ orientation: 'vertical' });
```

### Loop

Set `loop` to enable infinite navigation. Navigation buttons are never disabled in loop mode.

```tsx
const carousel = useCarousel({ loop: true });
```

### Variable Size

Set `autoSize` to allow items with different widths. Items use their natural size instead of calculating from `slidesPerPage`.

```tsx
const carousel = useCarousel({ autoSize: true });
```

### Spacing

Set `spacing` to define the gap between items in pixels.

```tsx
const carousel = useCarousel({ spacing: 24 });
```

### Using `state.page` and `state.swiping`

The hook exposes reactive state for custom UI logic.

```tsx
const carousel = useCarousel();

<span>Page {carousel.state.page + 1}</span>;
{
    carousel.state.swiping && <span>Swiping...</span>;
}
```

### CSS Custom Properties

`contentProps.style` sets three CSS custom properties on the content element. These can be consumed in item sizing and layout calculations.

| Variable             | Description                                                      |
| -------------------- | ---------------------------------------------------------------- |
| `--slides-per-page`  | Number of visible slides per page, derived from `slidesPerPage`. |
| `--spacing-items`    | Gap between items in pixels, derived from `spacing`.             |
| `--scroll-snap-type` | Resolved scroll-snap-type value (e.g. `x mandatory`).            |

```css
[data-scope='carousel'][data-part='item'] {
    flex-basis: calc(100% / var(--slides-per-page) - var(--spacing-items) * (var(--slides-per-page) - 1) / var(--slides-per-page));
}
```

### Custom Styling with Data Attributes

Prop objects include orientation and state-dependent data attributes.

```css
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

> **API/props table for `useCarousel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Carousel Primitive](../../primitive/carousel/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
