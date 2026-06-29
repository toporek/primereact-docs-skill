# useGallery

Hook that manages image gallery navigation, zoom, rotation, flip, and fullscreen state.

```tsx
'use client';
import { ArrowDownLeftAndArrowUpRightToCenter } from '@primeicons/react/arrow-down-left-and-arrow-up-right-to-center';
import { ArrowUpRightAndArrowDownLeftFromCenter } from '@primeicons/react/arrow-up-right-and-arrow-down-left-from-center';
import { ArrowsH } from '@primeicons/react/arrows-h';
import { ArrowsV } from '@primeicons/react/arrows-v';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Download } from '@primeicons/react/download';
import { Refresh } from '@primeicons/react/refresh';
import { Replay } from '@primeicons/react/replay';
import { SearchMinus } from '@primeicons/react/search-minus';
import { SearchPlus } from '@primeicons/react/search-plus';
import { useCarousel } from '@primereact/headless/carousel';
import { useGallery } from '@primereact/headless/gallery';
import { useGalleryItem } from '@primereact/headless/gallery/item';
import type { UseGalleryItemGalleryRef } from '@primereact/types/headless/gallery';

function GalleryItemView({ image, gallery }: { image: string; gallery: UseGalleryItemGalleryRef }) {
    const { itemProps } = useGalleryItem({ context: gallery });

    return (
        <div
            {...itemProps}
            className="absolute top-1/2 left-1/2 origin-center select-none touch-none items-center justify-center transition-[transform,opacity] duration-300 opacity-0 pointer-events-none invisible z-0 hidden data-[active=true]:opacity-100 data-[active=true]:pointer-events-auto data-[active=true]:visible data-[active=true]:z-[1] data-[active=true]:flex data-[active=true]:cursor-zoom-in data-[active=true]:will-change-transform"
            style={{
                ...itemProps.style,
                transform: `translate(calc(-50% + var(--px-position-x)), calc(-50% + var(--px-position-y))) scale(var(--px-scale)) rotate(var(--px-rotation)) scaleX(var(--px-flip-x)) scaleY(var(--px-flip-y))`
            }}
        >
            <img src={image} className="max-h-full max-w-full object-contain" draggable={false} />
        </div>
    );
}

export default function BasicDemo() {
    const gallery = useGallery();
    const {
        rootProps,
        backdropProps,
        prevProps,
        nextProps,
        headerProps,
        contentProps,
        footerProps,
        rotateLeftProps,
        rotateRightProps,
        zoomInProps,
        zoomOutProps,
        flipXProps,
        flipYProps,
        downloadProps,
        fullScreenProps,
        thumbnailItemProps,
        selectItem,
        state
    } = gallery;
    const { contentProps: carouselContentProps, getItemProps } = useCarousel({ slide: state.activeIndex, spacing: 8, align: 'center' });

    return (
        <div {...rootProps} className="relative w-full h-[600px] bg-surface-950 rounded-xl overflow-hidden flex flex-col">
            <div {...backdropProps} className="absolute inset-0 bg-surface-950" />
            <button
                {...prevProps}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-[3] w-9 h-9 flex items-center justify-center rounded-full bg-surface-800/60 text-surface-300 hover:bg-surface-800 hover:text-surface-0 cursor-pointer transition-colors"
            >
                <ChevronLeft />
            </button>
            <button
                {...nextProps}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-[3] w-9 h-9 flex items-center justify-center rounded-full bg-surface-800/60 text-surface-300 hover:bg-surface-800 hover:text-surface-0 cursor-pointer transition-colors"
            >
                <ChevronRight />
            </button>
            <div {...headerProps} className="relative z-[2] flex justify-end gap-0.5 px-4 py-3 bg-surface-950">
                <button
                    {...rotateLeftProps}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-surface-300 hover:bg-surface-800 hover:text-surface-0 cursor-pointer transition-colors"
                >
                    <Replay />
                </button>
                <button
                    {...rotateRightProps}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-surface-300 hover:bg-surface-800 hover:text-surface-0 cursor-pointer transition-colors"
                >
                    <Refresh />
                </button>
                <button
                    {...zoomInProps}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-surface-300 hover:bg-surface-800 hover:text-surface-0 cursor-pointer transition-colors disabled:opacity-40 disabled:pointer-events-none"
                >
                    <SearchPlus />
                </button>
                <button
                    {...zoomOutProps}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-surface-300 hover:bg-surface-800 hover:text-surface-0 cursor-pointer transition-colors disabled:opacity-40 disabled:pointer-events-none"
                >
                    <SearchMinus />
                </button>
                <button
                    {...flipXProps}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-surface-300 hover:bg-surface-800 hover:text-surface-0 cursor-pointer transition-colors"
                >
                    <ArrowsH />
                </button>
                <button
                    {...flipYProps}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-surface-300 hover:bg-surface-800 hover:text-surface-0 cursor-pointer transition-colors"
                >
                    <ArrowsV />
                </button>
                <button
                    {...downloadProps}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-surface-300 hover:bg-surface-800 hover:text-surface-0 cursor-pointer transition-colors"
                >
                    <Download />
                </button>
                <button
                    {...fullScreenProps}
                    className="group w-9 h-9 flex items-center justify-center rounded-full text-surface-300 hover:bg-surface-800 hover:text-surface-0 cursor-pointer transition-colors"
                >
                    <ArrowUpRightAndArrowDownLeftFromCenter className="group-data-fullscreen:hidden!" />
                    <ArrowDownLeftAndArrowUpRightToCenter className="hidden! group-data-fullscreen:block!" />
                </button>
            </div>
            <div {...contentProps} className="relative z-[1] flex-1 min-h-0">
                {images.map((image, i) => (
                    <GalleryItemView key={i} image={image} gallery={gallery} />
                ))}
            </div>
            <div {...footerProps} className="relative z-[2] flex items-center justify-center py-1 border-t border-surface-700">
                <div
                    {...carouselContentProps}
                    className="relative flex gap-(--spacing-items) overflow-x-scroll overscroll-x-contain scrollbar-none [scroll-snap-type:var(--px-scroll-snap-type)] h-full"
                    style={carouselContentProps.style}
                >
                    {images.map((image, i) => (
                        <div
                            key={i}
                            {...getItemProps(i)}
                            {...thumbnailItemProps(i)}
                            style={{ ...getItemProps(i).style, flexBasis: '5rem' }}
                            className="shrink-0 h-20 w-20 bg-surface-800 p-1 cursor-pointer rounded overflow-hidden flex snap-center transition-[scale] duration-150 hover:outline-3 hover:outline-surface-700 data-[active]:outline-3 data-[active]:outline-primary-500 data-[active]:scale-[0.85]"
                            onClick={() => selectItem(i)}
                        >
                            <img draggable={false} src={image} alt={`Thumbnail ${i + 1}`} className="h-full w-full object-cover rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// [picsum photo id, width, height]
const photos: [number, number, number][] = [
    [10, 1200, 800],
    [11, 800, 1200],
    [15, 1400, 700],
    [16, 700, 1050],
    [17, 1000, 1000],
    [18, 1300, 650],
    [19, 600, 1200],
    [20, 1200, 900],
    [27, 750, 1125],
    [28, 1400, 800],
    [29, 800, 1100],
    [36, 1100, 700],
    [37, 650, 1300],
    [39, 1200, 750],
    [42, 900, 1200],
    [43, 1300, 800],
    [47, 700, 1400],
    [48, 1000, 800],
    [49, 800, 1000],
    [50, 1400, 600],
    [52, 600, 900],
    [53, 1200, 1200],
    [54, 900, 600],
    [55, 750, 1000],
    [56, 1100, 800],
    [57, 1400, 900],
    [58, 850, 1275],
    [59, 1000, 600],
    [60, 600, 1000],
    [64, 1300, 1300]
];

const images = photos.map(([id, w, h]) => `https://picsum.photos/id/${id}/${w}/${h}`);

```

## Usage

```tsx
import { useGallery } from '@primereact/headless/gallery';
import { useGalleryItem } from '@primereact/headless/gallery/item';
```

```tsx
const gallery = useGallery();
const item = useGalleryItem({ gallery });

<div {...gallery.rootProps}>
    <div {...gallery.backdropProps}></div>
    <button {...gallery.prevProps}></button>
    <button {...gallery.nextProps}></button>
    <div {...gallery.headerProps}>
        <button {...gallery.zoomInProps}></button>
        <button {...gallery.zoomOutProps}></button>
        <button {...gallery.downloadProps}></button>
    </div>
    <div {...gallery.contentProps}>
        <div {...item.itemProps}></div>
    </div>
    <div {...gallery.footerProps}></div>
</div>;
```

`useGallery` orchestrates navigation, fullscreen, and toolbar state for an image viewer while `useGalleryItem` handles per-image transforms. See [Primitive](../../primitive/components/gallery.md) for a component-based API.

## Features

- **Two-hook split**, `useGallery` owns navigation and fullscreen; `useGalleryItem` owns per-image zoom, rotation, flip, and pan
- **Prev/next and thumbnail navigation**, pre-wired button props plus `thumbnailItemProps(index)` for clickable previews
- **Image action toolbar**, spread-ready props for zoom in/out/toggle, rotate left/right, flip X/Y, download, and fullscreen
- **Transform via CSS variables**, `useGalleryItem` writes `--scale`, `--rotation`, `--flip-x`, `--flip-y`, `--position-x`, `--position-y` so templates stay declarative
- **Imperative controls**, `selectItem`, `handleNext`, `handlePrev`, `toggleFullScreen` for custom bindings
- **Reactive state**, `state.activeIndex`, `state.isFullscreen`, `state.zoomed`, `state.rotated`, `state.flipped`, `state.pendingAction`

## Working with callbacks

### Controlled active index

Use `activeIndex` with `onActiveIndexChange` to sync the current image with URL params or adjacent UI like thumbnails.

```tsx
const [index, setIndex] = React.useState(0);

const gallery = useGallery({
    activeIndex: index,
    onActiveIndexChange: (e) => setIndex(e.value)
});
```

### Toolbar wiring

The toolbar props manage their own disabled state, `zoomInProps` disables when already zoomed, `zoomOutProps` disables when unzoomed.

```tsx
<button {...gallery.zoomInProps}>Zoom In</button>
<button {...gallery.zoomOutProps}>Zoom Out</button>
<button {...gallery.rotateLeftProps}>Rotate Left</button>
<button {...gallery.rotateRightProps}>Rotate Right</button>
<button {...gallery.flipXProps}>Flip Horizontal</button>
<button {...gallery.downloadProps}>Download</button>
<button {...gallery.fullScreenProps}>Toggle Fullscreen</button>
```

### Per-item transforms with `useGalleryItem`

Each item instantiates its own transform state. Apply the CSS variables in your `transform` to compose them.

```tsx
function GalleryItemView({ image, gallery }) {
    const item = useGalleryItem({ gallery });

    return (
        <div
            {...item.itemProps}
            style={{
                ...item.itemProps.style,
                display: item.state.isActive ? 'flex' : 'none',
                transform: 'translate(var(--px-position-x), var(--px-position-y)) scale(var(--px-scale)) rotate(var(--px-rotation)) scaleX(var(--px-flip-x)) scaleY(var(--px-flip-y))'
            }}
        >
            <img src={image} />
        </div>
    );
}
```

### Thumbnail strip

`thumbnailItemProps(index)` attaches the click handler and `data-active` so thumbnails stay in sync with `activeIndex`.

```tsx
{
    images.map((src, i) => (
        <div key={i} {...gallery.thumbnailItemProps(i)}>
            <img src={src} />
        </div>
    ));
}
```

### Reacting to fullscreen and transform state

Read reactive state to show contextual UI or pause background media when the viewer is fullscreen.

```tsx
const gallery = useGallery();

{
    gallery.state.isFullscreen && <span>Fullscreen Mode</span>;
}
{
    gallery.state.zoomed && <span>Zoomed</span>;
}
```

## Styling with data attributes

Prop objects include `data-scope="gallery"` and a `data-part` for each section, plus state-dependent attributes on the root element.

```css
[data-scope='gallery'][data-fullscreen] {
    position: fixed;
    inset: 0;
    z-index: 9999;
}

[data-scope='gallery'][data-zoomed] {
    cursor: zoom-out;
}

[data-scope='gallery'][data-part='item'][data-active='true'] {
    display: block;
}

[data-scope='gallery'][data-part='item'][data-active='false'] {
    display: none;
}

[data-scope='gallery'][data-part='thumbnailItem'][data-active] {
    opacity: 1;
}
```

## API

### useGallery

> **`useGallery` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/gallery or the installed `@primereact/types`.

### useGalleryItem

> **`useGalleryItem` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/gallery or the installed `@primereact/types`.

## Accessibility

Arrow keys navigate items, Home/End jump to first/last, and Escape exits fullscreen view. See [Primitive](../../primitive/components/gallery.md#accessibility) for full WAI-ARIA compliance details.
