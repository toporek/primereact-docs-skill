# ScrollArea

An unstyled, accessible scroll area component with custom scrollbar support.

Build fully custom scrollable regions with complete control over scrollbar design and styling.

```tsx
'use client';
import { ScrollArea } from 'primereact/scrollarea';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <ScrollArea.Root className={styles.root}>
                <ScrollArea.Viewport className={styles.viewport}>
                    <ScrollArea.Content className={styles.content}>
                        {tags.map((tag) => (
                            <div key={tag} className={styles.tag}>
                                {tag}
                            </div>
                        ))}
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical" className={styles.scrollbar}>
                    <ScrollArea.Handle className={styles.handle} />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </div>
    );
}

const tags = [
    'Autocomplete',
    'Avatar',
    'Badge',
    'Breadcrumb',
    'Button',
    'Calendar',
    'Card',
    'Carousel',
    'Checkbox',
    'Chip',
    'Color Picker',
    'Combobox',
    'Context Menu',
    'Data Table',
    'Date Picker',
    'Dialog',
    'Divider',
    'Drawer',
    'Dropdown',
    'File Upload',
    'Gallery',
    'Icon',
    'Input',
    'Knob',
    'Listbox',
    'Menu',
    'NavigationMenu',
    'Message',
    'Multiselect',
    'Notification',
    'Paginator',
    'Panel',
    'Password',
    'Popover',
    'Progress',
    'Radio',
    'Rating',
    'Scroll Area',
    'Select',
    'Skeleton',
    'Slider',
    'Splitter',
    'Stepper',
    'Tab',
    'Tag',
    'Textarea',
    'Toast',
    'Toggle',
    'Toolbar',
    'Tooltip',
    'Tree',
    'Tree Table'
];

```

## Features

- Compound component API with six sub-components: `Root`, `Viewport`, `Content`, `Scrollbar`, `Handle`, `Corner`
- Automatic handle sizing based on viewport-to-content ratio
- Pointer-based drag interaction on both scrollbar track and handle
- ResizeObserver for automatic recalculation on content changes
- Variant-based scrollbar visibility control (`auto`, `hover`, `scroll`, `always`, `hidden`)
- Scroll edge detection for fade effects and loading indicators

## Usage

```tsx
import { ScrollArea } from 'primereact/scrollarea';
```

```tsx
<ScrollArea.Root>
    <ScrollArea.Viewport>
        <ScrollArea.Content></ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar>
        <ScrollArea.Handle />
    </ScrollArea.Scrollbar>
</ScrollArea.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<ScrollArea.Root as="section">
    <ScrollArea.Viewport as="main">
        <ScrollArea.Content as="article"></ScrollArea.Content>
    </ScrollArea.Viewport>
</ScrollArea.Root>
```

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<ScrollArea.Root>{(instance) => <div>{instance.state.scrolling ? 'Scrolling...' : 'Idle'}</div>}</ScrollArea.Root>
```

## Pass Through

## API

### ScrollAreaRoot

> **`ScrollAreaRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/scrollarea or the installed `@primereact/types`.

| Attribute              | Value                                     |
| ---------------------- | ----------------------------------------- |
| `data-scope`           | `"scrollarea"`                            |
| `data-part`            | `"root"`                                  |
| `data-variant`         | Current variant value                     |
| `data-scrolling`       | Present when actively scrolling           |
| `data-has-overflow-x`  | Present when content overflows horizontal |
| `data-has-overflow-y`  | Present when content overflows vertical   |
| `data-scroll-x-before` | Present when scrolled past left edge      |
| `data-scroll-x-after`  | Present when content remains to the right |
| `data-scroll-y-before` | Present when scrolled past top edge       |
| `data-scroll-y-after`  | Present when content remains below        |

**CSS Custom Properties**

The `Root` element sets CSS custom properties on its `style` for scrollbar corner sizing.

| CSS Variable      | Description                              |
| ----------------- | ---------------------------------------- |
| `--corner-height` | Height of the scrollbar corner in pixels |
| `--corner-width`  | Width of the scrollbar corner in pixels  |

| Label | Type | Description |
|:------|:------|:------|
| root | ScrollAreaRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| viewport | ScrollAreaRootPassThroughType> | Used to pass attributes to the viewport's DOM element. |
| scrollbar | ScrollAreaRootPassThroughType> | Used to pass attributes to the scrollbar's DOM element. |
| handle | ScrollAreaRootPassThroughType> | Used to pass attributes to the handle's DOM element. |
| corner | ScrollAreaRootPassThroughType> | Used to pass attributes to the corner's DOM element. |

### ScrollAreaViewport

> **`ScrollAreaViewport` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/scrollarea or the installed `@primereact/types`.

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"scrollarea"` |
| `data-part`  | `"viewport"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | ScrollAreaViewportPassThroughType> | Used to pass attributes to the root's DOM element. |

### ScrollAreaContent

> **`ScrollAreaContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/scrollarea or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | ScrollAreaContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### ScrollAreaScrollbar

> **`ScrollAreaScrollbar` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/scrollarea or the installed `@primereact/types`.

| Attribute    | Value                              |
| ------------ | ---------------------------------- |
| `data-scope` | `"scrollarea"`                     |
| `data-part`  | `"scrollbar-y"` or `"scrollbar-x"` |

**CSS Custom Properties**

The `Scrollbar` element sets CSS custom properties on its `style` for handle sizing and positioning. The specific variables depend on the scrollbar orientation.

| CSS Variable      | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `--handle-height` | Height of the vertical scrollbar handle in pixels       |
| `--handle-width`  | Width of the horizontal scrollbar handle in pixels      |
| `--handle-offset` | Offset position of the handle along the scrollbar track |

| Label | Type | Description |
|:------|:------|:------|
| root | ScrollAreaScrollbarPassThroughType> | Used to pass attributes to the root's DOM element. |

### ScrollAreaHandle

> **`ScrollAreaHandle` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/scrollarea or the installed `@primereact/types`.

| Attribute    | Value                        |
| ------------ | ---------------------------- |
| `data-scope` | `"scrollarea"`               |
| `data-part`  | `"handle-y"` or `"handle-x"` |

| Label | Type | Description |
|:------|:------|:------|
| root | ScrollAreaHandlePassThroughType> | Used to pass attributes to the root's DOM element. |

### ScrollAreaCorner

> **`ScrollAreaCorner` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/scrollarea or the installed `@primereact/types`.

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"scrollarea"` |
| `data-part`  | `"corner"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | ScrollAreaCornerPassThroughType> | Used to pass attributes to the root's DOM element. |

### ScrollAreaHandleY

| Label | Type | Description |
|:------|:------|:------|
| root | ScrollAreaHandleYPassThroughType> | Used to pass attributes to the root's DOM element. |

### ScrollAreaHandleX

| Label | Type | Description |
|:------|:------|:------|
| root | ScrollAreaHandleXPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Scrollbars use the `scrollbar` role with `aria-controls` referencing the scrollable content container and `aria-orientation` to indicate the scrolling direction.

### Keyboard Support

| Key           | Function                                                      |
| ------------- | ------------------------------------------------------------- |
| `tab`         | Moves focus through the scrollable region.                    |
| `down arrow`  | Scrolls content down when vertical scrolling is available.    |
| `up arrow`    | Scrolls content up when vertical scrolling is available.      |
| `left arrow`  | Scrolls content left when horizontal scrolling is available.  |
| `right arrow` | Scrolls content right when horizontal scrolling is available. |
