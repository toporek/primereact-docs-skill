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
        <Gallery.Root className="not-data-fullscreen:h-150!">
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
import { ChevronLeft, ChevronRight } from '@primeicons/react';
import { Gallery } from '@primereact/ui/gallery';

export default function BasicDemo() {
    return (
        <Gallery.Root className="w-full not-data-fullscreen:h-150!">
            <Gallery.Backdrop />
            <Gallery.Prev>
                <ChevronLeft />
            </Gallery.Prev>
            <Gallery.Next>
                <ChevronRight />
            </Gallery.Next>
            <Gallery.Content>
                {images.map((image) => (
                    <Gallery.Item key={image}>
                        <img src={image} alt="image" />
                    </Gallery.Item>
                ))}
            </Gallery.Content>
        </Gallery.Root>
    );
}

const photos: [number, number, number][] = [
    [10, 1200, 800],
    [11, 800, 1200],
    [15, 1400, 700],
    [16, 700, 1050],
    [17, 1000, 1000]
];

const images = photos.map(([id, w, h]) => `https://picsum.photos/id/${id}/${w}/${h}`);

```

### Toolbar

Add a `Gallery.Header` with action sub-components like `RotateLeft`, `ZoomIn`, `Download`, and `FullScreen` to expose image controls.

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

export default function ToolbarDemo() {
    return (
        <Gallery.Root className="h-150!">
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
        </Gallery.Root>
    );
}

const photos: [number, number, number][] = [
    [10, 1200, 800],
    [11, 800, 1200],
    [15, 1400, 700],
    [16, 700, 1050],
    [17, 1000, 1000]
];

const images = photos.map(([id, w, h]) => `https://picsum.photos/id/${id}/${w}/${h}`);

```

### Thumbnails

Add a `Gallery.Footer` with `Gallery.Thumbnail` to render a thumbnail strip for quick navigation.

```tsx
import { ChevronLeft, ChevronRight } from '@primeicons/react';
import { Gallery } from '@primereact/ui/gallery';

export default function ThumbnailsDemo() {
    return (
        <Gallery.Root className="h-150!">
            <Gallery.Backdrop />
            <Gallery.Prev>
                <ChevronLeft />
            </Gallery.Prev>
            <Gallery.Next>
                <ChevronRight />
            </Gallery.Next>
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

const photos: [number, number, number][] = [
    [10, 1200, 800],
    [11, 800, 1200],
    [15, 1400, 700],
    [16, 700, 1050],
    [17, 1000, 1000]
];

const images = photos.map(([id, w, h]) => `https://picsum.photos/id/${id}/${w}/${h}`);

```

### Single

Click on the image to open it in a fullscreen dialog without thumbnails or navigation buttons.

```tsx
'use client';
import { ArrowsH, ArrowsV, Download, Replay, SearchMinus, SearchPlus } from '@primeicons/react';
import { Refresh } from '@primeicons/react/refresh';
import { Times } from '@primeicons/react/times';
import { Gallery } from '@primereact/ui/gallery';
import * as React from 'react';

export default function SingleDemo() {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <div className="flex justify-center">
            <div className="w-80 aspect-[3/2] cursor-pointer hover:opacity-75 transition-opacity" onClick={() => setOpen(true)}>
                <img src={image} alt="image" className="w-full h-full object-cover rounded-lg" />
            </div>
            {open && (
                <Gallery.Root fullscreen onFullscreenChange={setOpen}>
                    <Gallery.Backdrop />
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
                        <Gallery.Item>
                            <img src={image} alt="image" />
                        </Gallery.Item>
                    </Gallery.Content>
                </Gallery.Root>
            )}
        </div>
    );
}

const image = 'https://picsum.photos/id/10/1200/800';

```

### Grid

```tsx
'use client';
import { ArrowsH, ArrowsV, ChevronLeft, ChevronRight, Download, Replay, SearchMinus, SearchPlus } from '@primeicons/react';
import { Refresh } from '@primeicons/react/refresh';
import { Times } from '@primeicons/react/times';
import { usePresence } from '@primereact/hooks';
import { Gallery, type GalleryRootChangeEvent } from '@primereact/ui/gallery';
import * as React from 'react';

export default function GridDemo() {
    const [activeIndex, setActiveIndex] = React.useState<number>(0);
    const [open, setOpen] = React.useState<boolean>(false);

    const { present, exiting, mounted, ref } = usePresence(open);
    const isVisible = present && mounted && !exiting;

    const handleOpen = (index: number) => {
        setActiveIndex(index);
        setOpen(true);
    };

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-2">
                {images.map((image, index) => (
                    <div key={image} className="aspect-square cursor-pointer hover:opacity-75 transition-opacity" onClick={() => handleOpen(index)}>
                        <img src={image} alt="image" className="w-full h-full object-cover rounded-lg" />
                    </div>
                ))}
            </div>
            {present && (
                <Gallery.Root
                    ref={ref}
                    fullscreen
                    onFullscreenChange={setOpen}
                    activeIndex={activeIndex}
                    onActiveIndexChange={(e: GalleryRootChangeEvent) => setActiveIndex(e.value ?? 0)}
                    className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
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
            )}
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

## Related

### Sub-Components

See [Primitive API](../../primitive/components/gallery.md#api) for `GalleryRoot`, `GalleryContent`, `GalleryItem`, `GalleryPrev`, `GalleryNext`, `GalleryHeader`, `GalleryFooter`, `GalleryBackdrop`, `GalleryThumbnail`, `GalleryThumbnailContent`, `GalleryThumbnailItem`, and action component documentation.

### Hooks

See [Headless API](../../headless/components/gallery.md#api) for `useGallery` hook documentation.

### Accessibility

See [Gallery Primitive](../../primitive/components/gallery.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-gallery | Class name of the root element |
| p-gallery-backdrop | Class name of the backdrop element |
| p-gallery-header | Class name of the header element |
| p-gallery-footer | Class name of the footer element |
| p-gallery-content | Class name of the content element |
| p-gallery-item | Class name of the item element |
| p-gallery-next | Class name of the next element |
| p-gallery-prev | Class name of the prev element |
| p-gallery-action | Class name of the action element |
| p-gallery-action | Class name of the zoom in element |
| p-gallery-action | Class name of the zoom out element |
| p-gallery-action | Class name of the zoom toggle element |
| p-gallery-action | Class name of the rotate left element |
| p-gallery-action | Class name of the rotate right element |
| p-gallery-action | Class name of the flip x element |
| p-gallery-action | Class name of the flip y element |
| p-gallery-action | Class name of the download element |
| p-gallery-action | Class name of the full screen element |
| p-gallery-thumbnail | Class name of the thumbnail element |
| p-gallery-thumbnail-content | Class name of the thumbnail content element |
| p-gallery-thumbnail-item | Class name of the thumbnail item element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| gallery.backdrop.background | --p-gallery-backdrop-background | Background of backdrop |
| gallery.header.padding | --p-gallery-header-padding | Padding of header |
| gallery.header.background | --p-gallery-header-background | Background of header |
| gallery.footer.padding | --p-gallery-footer-padding | Padding of footer |
| gallery.footer.background | --p-gallery-footer-background | Background of footer |
| gallery.footer.border.color | --p-gallery-footer-border-color | Border color of footer |
| gallery.item.transition.duration | --p-gallery-item-transition-duration | Transition duration of item (transform and opacity) |
| gallery.action.size | --p-gallery-action-size | Size of action (shared by action / next / prev) |
| gallery.action.border.radius | --p-gallery-action-border-radius | Border radius of action |
| gallery.action.color | --p-gallery-action-color | Color of action |
| gallery.action.hover.background | --p-gallery-action-hover-background | Hover background of action |
| gallery.action.hover.color | --p-gallery-action-hover-color | Hover color of action |
| gallery.action.disabled.opacity | --p-gallery-action-disabled-opacity | Disabled opacity of action |
| gallery.action.transition.duration | --p-gallery-action-transition-duration | Transition duration of action |
| gallery.action.icon.size | --p-gallery-action-icon-size | Icon size of action |
| gallery.navigation.background | --p-gallery-navigation-background | Background of navigation (next / prev) |
| gallery.navigation.size | --p-gallery-navigation-size | Size of navigation |
| gallery.navigation.border.radius | --p-gallery-navigation-border-radius | Border radius of navigation |
| gallery.navigation.color | --p-gallery-navigation-color | Color of navigation |
| gallery.navigation.hover.background | --p-gallery-navigation-hover-background | Hover background of navigation |
| gallery.navigation.hover.color | --p-gallery-navigation-hover-color | Hover color of navigation |
| gallery.navigation.offset | --p-gallery-navigation-offset | Edge offset of navigation |
| gallery.navigation.transition.duration | --p-gallery-navigation-transition-duration | Transition duration of navigation |
| gallery.navigation.icon.size | --p-gallery-navigation-icon-size | Icon size of navigation |
| gallery.thumbnail.size | --p-gallery-thumbnail-size | Size of thumbnail item |
| gallery.thumbnail.padding | --p-gallery-thumbnail-padding | Padding of thumbnail item |
| gallery.thumbnail.background | --p-gallery-thumbnail-background | Background of thumbnail item |
| gallery.thumbnail.border.radius | --p-gallery-thumbnail-border-radius | Border radius of thumbnail item |
| gallery.thumbnail.border.width | --p-gallery-thumbnail-border-width | Border width of thumbnail item (outline width) |
| gallery.thumbnail.hover.border.color | --p-gallery-thumbnail-hover-border-color | Hover border color of thumbnail item |
| gallery.thumbnail.active.border.color | --p-gallery-thumbnail-active-border-color | Active border color of thumbnail item |
| gallery.thumbnail.active.scale | --p-gallery-thumbnail-active-scale | Active scale of thumbnail item |
| gallery.thumbnail.transition.duration | --p-gallery-thumbnail-transition-duration | Transition duration of thumbnail item |
| gallery.thumbnail.content.padding | --p-gallery-thumbnail-content-padding | Padding of thumbnail content |
