# Gallery

Gallery is a component to display a collection of images in a gallery.

```tsx
import {
    ArrowDownLeftAndArrowUpRightToCenter,
    ArrowsH,
    ArrowsV,
    ArrowUpRightAndArrowDownLeftFromCenter,
    ChevronLeft,
    ChevronRight,
    Download,
    Replay,
    SearchMinus,
    SearchPlus
} from '@primeicons/react';
import { Refresh } from '@primeicons/react/refresh';
import { Gallery } from '@primereact/ui/gallery';

export default function Preview() {
    return (
        <Gallery.Root className="w-full h-[600px]">
            <Gallery.Backdrop />
            <Gallery.Prev>
                <ChevronLeft />
            </Gallery.Prev>
            <Gallery.Next>
                <ChevronRight />
            </Gallery.Next>
            <Gallery.Header className="justify-end gap-0.5">
                <Gallery.RotateLeft>
                    <Replay />
                </Gallery.RotateLeft>
                <Gallery.RotateRight>
                    <Refresh />
                </Gallery.RotateRight>
                <Gallery.ZoomIn>
                    <SearchPlus />
                </Gallery.ZoomIn>

                <Gallery.ZoomOut>
                    <SearchMinus />
                </Gallery.ZoomOut>
                <Gallery.FlipX>
                    <ArrowsH />
                </Gallery.FlipX>
                <Gallery.FlipY>
                    <ArrowsV />
                </Gallery.FlipY>
                <Gallery.Download>
                    <Download />
                </Gallery.Download>
                <Gallery.FullScreen className="group">
                    <ArrowUpRightAndArrowDownLeftFromCenter className="group-data-fullscreen:hidden!" />
                    <ArrowDownLeftAndArrowUpRightToCenter className="hidden! group-data-fullscreen:block!" />
                </Gallery.FullScreen>
            </Gallery.Header>
            <Gallery.Content>
                {images.map((image) => (
                    <Gallery.Item key={image}>
                        <img src={image} alt="image" />
                    </Gallery.Item>
                ))}
            </Gallery.Content>
            <Gallery.Footer>
                <Gallery.Thumbnail>
                    <Gallery.ThumbnailContent>
                        {images.map((image, index) => (
                            <Gallery.ThumbnailItem key={index} index={index}>
                                <img draggable={false} src={image} className="h-full w-full object-cover" />
                            </Gallery.ThumbnailItem>
                        ))}
                    </Gallery.ThumbnailContent>
                </Gallery.Thumbnail>
            </Gallery.Footer>
        </Gallery.Root>
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
import { Gallery } from '@primereact/ui/gallery';
```

```tsx
<Gallery.Root>
    <Gallery.Backdrop />
    <Gallery.Prev></Gallery.Prev>
    <Gallery.Next></Gallery.Next>
    <Gallery.Header>
        <Gallery.RotateLeft></Gallery.RotateLeft>
        <Gallery.RotateRight></Gallery.RotateRight>
        <Gallery.ZoomIn></Gallery.ZoomIn>
        <Gallery.ZoomOut></Gallery.ZoomOut>
        <Gallery.FlipX></Gallery.FlipX>
        <Gallery.FlipY></Gallery.FlipY>
        <Gallery.Download></Gallery.Download>
        <Gallery.FullScreen></Gallery.FullScreen>
    </Gallery.Header>
    <Gallery.Content>
        <Gallery.Item></Gallery.Item>
    </Gallery.Content>
    <Gallery.Footer>
        <Gallery.Thumbnail>
            <Gallery.ThumbnailContent>
                <Gallery.ThumbnailItem></Gallery.ThumbnailItem>
            </Gallery.ThumbnailContent>
        </Gallery.Thumbnail>
    </Gallery.Footer>
</Gallery.Root>
```

## Examples

### Basic

Displays a collection of images with a lightbox viewer.

```tsx
import {
    ArrowDownLeftAndArrowUpRightToCenter,
    ArrowsH,
    ArrowsV,
    ArrowUpRightAndArrowDownLeftFromCenter,
    ChevronLeft,
    ChevronRight,
    Download,
    Replay,
    SearchMinus,
    SearchPlus
} from '@primeicons/react';
import { Refresh } from '@primeicons/react/refresh';
import { Gallery } from '@primereact/ui/gallery';

export default function BasicDemo() {
    return (
        <Gallery.Root className="w-full h-[600px]">
            <Gallery.Backdrop />
            <Gallery.Prev>
                <ChevronLeft />
            </Gallery.Prev>
            <Gallery.Next>
                <ChevronRight />
            </Gallery.Next>
            <Gallery.Header className="justify-end gap-0.5">
                <Gallery.RotateLeft>
                    <Replay />
                </Gallery.RotateLeft>
                <Gallery.RotateRight>
                    <Refresh />
                </Gallery.RotateRight>
                <Gallery.ZoomIn>
                    <SearchPlus />
                </Gallery.ZoomIn>

                <Gallery.ZoomOut>
                    <SearchMinus />
                </Gallery.ZoomOut>
                <Gallery.FlipX>
                    <ArrowsH />
                </Gallery.FlipX>
                <Gallery.FlipY>
                    <ArrowsV />
                </Gallery.FlipY>
                <Gallery.Download>
                    <Download />
                </Gallery.Download>
                <Gallery.FullScreen className="group">
                    <ArrowUpRightAndArrowDownLeftFromCenter className="group-data-fullscreen:hidden!" />
                    <ArrowDownLeftAndArrowUpRightToCenter className="hidden! group-data-fullscreen:block!" />
                </Gallery.FullScreen>
            </Gallery.Header>
            <Gallery.Content>
                {images.map((image) => (
                    <Gallery.Item key={image}>
                        <img src={image} alt="image" />
                    </Gallery.Item>
                ))}
            </Gallery.Content>
            <Gallery.Footer>
                <Gallery.Thumbnail>
                    <Gallery.ThumbnailContent>
                        {images.map((image, index) => (
                            <Gallery.ThumbnailItem key={index} index={index}>
                                <img draggable={false} src={image} className="h-full w-full object-cover" />
                            </Gallery.ThumbnailItem>
                        ))}
                    </Gallery.ThumbnailContent>
                </Gallery.Thumbnail>
            </Gallery.Footer>
        </Gallery.Root>
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

### Grid

```tsx
'use client';
import { ArrowsH, ArrowsV, ChevronLeft, ChevronRight, Download, Replay, SearchMinus, SearchPlus } from '@primeicons/react';
import { Refresh } from '@primeicons/react/refresh';
import { Times } from '@primeicons/react/times';
import { usePresence } from '@primereact/hooks';
import { Gallery, type GalleryRootChangeEvent } from '@primereact/ui/gallery';
import { Portal } from 'primereact/portal';
import * as React from 'react';

export default function GridDemo() {
    const [activeIndex, setActiveIndex] = React.useState<number>(0);
    const [open, setOpen] = React.useState<boolean>(false);

    const { present, exiting, mounted, ref } = usePresence(open);

    const handleOpen = (index: number) => {
        setActiveIndex(index);
        setOpen(true);
    };

    const isVisible = present && mounted && !exiting;

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-2">
                {images.map((image, index) => (
                    <div key={image} className="aspect-square cursor-pointer hover:opacity-75 transition-opacity" onClick={() => handleOpen(index)}>
                        <img src={image} alt="image" className="w-full h-full object-cover rounded-lg" />
                    </div>
                ))}
            </div>
            <Portal>
                {present && (
                    <div
                        ref={ref as React.RefObject<HTMLDivElement>}
                        className={`w-full h-[100dvh] top-0 left-0 !fixed z-[100000] ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
                    >
                        <Gallery.Root
                            className="w-full h-full"
                            activeIndex={activeIndex}
                            onActiveIndexChange={(e: GalleryRootChangeEvent) => setActiveIndex(e.value ?? 0)}
                        >
                            <Gallery.Backdrop />
                            <Gallery.Prev>
                                <ChevronLeft />
                            </Gallery.Prev>
                            <Gallery.Next>
                                <ChevronRight />
                            </Gallery.Next>
                            <Gallery.Header className="justify-end gap-0.5">
                                <Gallery.RotateLeft>
                                    <Replay />
                                </Gallery.RotateLeft>
                                <Gallery.RotateRight>
                                    <Refresh />
                                </Gallery.RotateRight>
                                <Gallery.ZoomIn>
                                    <SearchPlus />
                                </Gallery.ZoomIn>
                                <Gallery.ZoomOut>
                                    <SearchMinus />
                                </Gallery.ZoomOut>
                                <Gallery.FlipX>
                                    <ArrowsH />
                                </Gallery.FlipX>
                                <Gallery.FlipY>
                                    <ArrowsV />
                                </Gallery.FlipY>
                                <Gallery.Download>
                                    <Download />
                                </Gallery.Download>
                                <button className="p-gallery-action" onClick={() => setOpen(false)}>
                                    <Times />
                                </button>
                            </Gallery.Header>
                            <Gallery.Content>
                                {images.map((image) => (
                                    <Gallery.Item key={image}>
                                        <img
                                            src={image}
                                            alt="image"
                                            className={`${isVisible ? 'scale-100 blur-none' : 'scale-[0.9] blur-2xl'} transition-[scale,filter] duration-300`}
                                        />
                                    </Gallery.Item>
                                ))}
                            </Gallery.Content>
                            <Gallery.Footer>
                                <Gallery.Thumbnail>
                                    <Gallery.ThumbnailContent>
                                        {images.map((image, index) => (
                                            <Gallery.ThumbnailItem key={index} index={index}>
                                                <img draggable={false} src={image} className="h-full w-full object-cover" />
                                            </Gallery.ThumbnailItem>
                                        ))}
                                    </Gallery.ThumbnailContent>
                                </Gallery.Thumbnail>
                            </Gallery.Footer>
                        </Gallery.Root>
                    </div>
                )}
            </Portal>
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

## API

### Sub-Components

See [Primitive API](../../primitive/gallery/features.md#api) for `GalleryRoot`, `GalleryContent`, `GalleryItem`, `GalleryPrev`, `GalleryNext`, `GalleryHeader`, `GalleryFooter`, `GalleryBackdrop`, `GalleryThumbnail`, `GalleryThumbnailContent`, `GalleryThumbnailItem`, and action component documentation.

### Hooks

See [Headless API](../../headless/gallery/features.md#api) for `useGallery` hook documentation.

## Accessibility

See [Gallery Primitive](../../primitive/gallery/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
