# useGallery

Hook that manages image gallery navigation, zoom, rotation, flip, and fullscreen state.

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
