# Gallery

An unstyled, accessible gallery component with compound composition.

Build fully custom image galleries with complete control over viewer layout, thumbnails, and toolbar actions.

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
import { Gallery } from 'primereact/gallery';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <Gallery.Root className={styles.root}>
            <Gallery.Backdrop className={styles.backdrop} />
            <Gallery.Prev className={styles.prev}>
                <ChevronLeft />
            </Gallery.Prev>
            <Gallery.Next className={styles.next}>
                <ChevronRight />
            </Gallery.Next>
            <Gallery.Header className={styles.header}>
                <Gallery.RotateLeft className={styles.action}>
                    <Replay />
                </Gallery.RotateLeft>
                <Gallery.RotateRight className={styles.action}>
                    <Refresh />
                </Gallery.RotateRight>
                <Gallery.ZoomIn className={styles.action}>
                    <SearchPlus />
                </Gallery.ZoomIn>
                <Gallery.ZoomOut className={styles.action}>
                    <SearchMinus />
                </Gallery.ZoomOut>
                <Gallery.FlipX className={styles.action}>
                    <ArrowsH />
                </Gallery.FlipX>
                <Gallery.FlipY className={styles.action}>
                    <ArrowsV />
                </Gallery.FlipY>
                <Gallery.Download className={styles.action}>
                    <Download />
                </Gallery.Download>
                <Gallery.FullScreen className={`${styles.action} ${styles.fullscreen}`}>
                    <ArrowUpRightAndArrowDownLeftFromCenter className={styles.fullscreenExpand} />
                    <ArrowDownLeftAndArrowUpRightToCenter className={styles.fullscreenCollapse} />
                </Gallery.FullScreen>
            </Gallery.Header>
            <Gallery.Content className={styles.content}>
                {images.map((image) => (
                    <Gallery.Item key={image} className={styles.item}>
                        <img src={image} alt="image" className={styles.itemImage} />
                    </Gallery.Item>
                ))}
            </Gallery.Content>
            <Gallery.Footer className={styles.footer}>
                <Gallery.Thumbnail className={styles.thumbnail}>
                    <Gallery.ThumbnailContent className={styles.thumbnailContent}>
                        {images.map((image, index) => (
                            <Gallery.ThumbnailItem key={index} index={index} className={styles.thumbnailItem}>
                                <img draggable={false} src={image} className={styles.thumbnailImage} />
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

## Features

- Compound component API with sub-components: `Root`, `Content`, `Item`, `Prev`, `Next`, `Header`, `Footer`, `Backdrop`, `Thumbnail`, `ThumbnailContent`, `ThumbnailItem`
- Action sub-components: `ZoomIn`, `ZoomOut`, `ZoomToggle`, `RotateLeft`, `RotateRight`, `FlipX`, `FlipY`, `Download`, `FullScreen`
- Per-item zoom, rotate, flip, and download via React state-driven action dispatch
- Thumbnail carousel navigation with active item tracking
- Fullscreen toggle with viewport-filling layout

## Usage

```tsx
import { Gallery } from 'primereact/gallery';
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

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Gallery.Root as="section">
    <Gallery.Content as="main"></Gallery.Content>
</Gallery.Root>
```

Default elements: `Root`=`div`, `Content`=`div`, `Item`=`div`, `Prev`=`button`, `Next`=`button`, `Header`=`div`, `Footer`=`div`, `Backdrop`=`div`, action buttons=`button`.

### Render Function Children

`Item` accepts a render function as children, providing access to the item instance with transform state.

```tsx
<Gallery.Item>{(instance) => <span>Scale: {instance.state.scale}</span>}</Gallery.Item>
```

## Pass Through

## API

### GalleryRoot

> **`GalleryRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Attribute         | Value                               |
| ----------------- | ----------------------------------- |
| `data-fullscreen` | Present when in fullscreen mode     |
| `data-zoomed`     | Present when active item is zoomed  |
| `data-rotated`    | Present when active item is rotated |
| `data-flipped`    | Present when active item is flipped |

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| item | GalleryRootPassThroughType> | Used to pass attributes to the item's DOM element. |
| thumbnailContent | GalleryRootPassThroughType> | Used to pass attributes to the thumbnail content's DOM element. |
| thumbnail | GalleryRootPassThroughType> | Used to pass attributes to the thumbnail's DOM element. |
| thumbnailItem | GalleryRootPassThroughType> | Used to pass attributes to the thumbnail item's DOM element. |

### GalleryBackdrop

> **`GalleryBackdrop` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryBackdropPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryContent

> **`GalleryContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryItem

> **`GalleryItem` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Attribute     | Value                                |
| ------------- | ------------------------------------ |
| `data-active` | Present when this is the active item |
| `data-index`  | The index of the item in the gallery |

**CSS Custom Properties**

The `Item` element sets CSS custom properties on its `style` for transform control.

| CSS Variable   | Description                              |
| -------------- | ---------------------------------------- |
| `--position-x` | Horizontal pan offset in pixels          |
| `--position-y` | Vertical pan offset in pixels            |
| `--scale`      | Current zoom scale factor                |
| `--rotation`   | Current rotation in degrees              |
| `--flip-x`     | Horizontal flip multiplier (`1` or `-1`) |
| `--flip-y`     | Vertical flip multiplier (`1` or `-1`)   |

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryPrev

> **`GalleryPrev` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryPrevPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryNext

> **`GalleryNext` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryNextPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryHeader

> **`GalleryHeader` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryFooter

> **`GalleryFooter` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryZoomIn

> **`GalleryZoomIn` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Attribute  | Value                               |
| ---------- | ----------------------------------- |
| `disabled` | Present when item is already zoomed |

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryZoomInPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryZoomOut

> **`GalleryZoomOut` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Attribute  | Value                           |
| ---------- | ------------------------------- |
| `disabled` | Present when item is not zoomed |

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryZoomOutPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryZoomToggle

> **`GalleryZoomToggle` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryZoomTogglePassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryRotateLeft

> **`GalleryRotateLeft` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryRotateLeftPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryRotateRight

> **`GalleryRotateRight` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryRotateRightPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryFlipX

> **`GalleryFlipX` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryFlipXPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryFlipY

> **`GalleryFlipY` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryFlipYPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryDownload

> **`GalleryDownload` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryDownloadPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryFullScreen

> **`GalleryFullScreen` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Attribute         | Value                           |
| ----------------- | ------------------------------- |
| `data-fullscreen` | Present when in fullscreen mode |

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryFullScreenPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryThumbnail

> **`GalleryThumbnail` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryThumbnailPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryThumbnailContent

> **`GalleryThumbnailContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryThumbnailContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryThumbnailItem

> **`GalleryThumbnailItem` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/gallery or the installed `@primereact/types`.

| Attribute     | Value                              |
| ------------- | ---------------------------------- |
| `data-active` | Present when thumbnail is selected |

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryThumbnailItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryToolbar

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryToolbarPassThroughType> | Used to pass attributes to the root's DOM element. |

### GalleryToolbarItem

| Label | Type | Description |
|:------|:------|:------|
| root | GalleryToolbarItemPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Gallery uses semantic `button` elements for all navigation and action controls. Each action button should include a descriptive `aria-label`. The content area should have an `aria-label` describing its purpose.

```tsx
<Gallery.Root>
    <Gallery.Prev aria-label="Previous image"></Gallery.Prev>
    <Gallery.Next aria-label="Next image"></Gallery.Next>
    <Gallery.Header>
        <Gallery.ZoomIn aria-label="Zoom in"></Gallery.ZoomIn>
        <Gallery.ZoomOut aria-label="Zoom out"></Gallery.ZoomOut>
        <Gallery.RotateLeft aria-label="Rotate left"></Gallery.RotateLeft>
        <Gallery.RotateRight aria-label="Rotate right"></Gallery.RotateRight>
        <Gallery.Download aria-label="Download image"></Gallery.Download>
        <Gallery.FullScreen aria-label="Toggle fullscreen"></Gallery.FullScreen>
    </Gallery.Header>
    <Gallery.Content aria-label="Image gallery"></Gallery.Content>
</Gallery.Root>
```

### Keyboard Support

| Key               | Function                                                        |
| ----------------- | --------------------------------------------------------------- |
| `tab`             | Moves focus between action buttons, navigation, and thumbnails. |
| `enter` / `space` | Activates the focused button or thumbnail.                      |
