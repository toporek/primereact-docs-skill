# Gallery

An unstyled, accessible gallery component with compound composition.

Build fully custom image galleries with complete control over viewer layout, thumbnails, and toolbar actions.

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
