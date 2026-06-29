# useScrollArea

Hook that manages custom scrollbar state, overflow detection, and handle positioning.

```tsx
'use client';
import { useScrollArea } from '@primereact/headless/scrollarea';

export default function BasicDemo() {
    const { rootProps, viewportProps, contentProps, scrollbarYProps, handleYProps, hiddenState } = useScrollArea();

    return (
        <div className="max-w-56 w-full mx-auto">
            <div
                {...rootProps}
                className="relative h-72 border border-surface-200 dark:border-surface-700 rounded has-[:focus-visible]:border-primary overflow-hidden"
            >
                <div {...viewportProps} className="h-full w-full overflow-scroll outline-none" style={{ scrollbarWidth: 'none' }}>
                    <div {...contentProps} className="flex flex-col p-1">
                        {tags.map((tag) => (
                            <div key={tag} className="py-2 px-3 text-sm text-surface-700 dark:text-surface-0 rounded-md">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                {!hiddenState.y && (
                    <div {...scrollbarYProps} className="absolute top-0 right-0 w-2.5 h-full flex touch-none select-none" style={{ padding: '2px' }}>
                        <div
                            {...handleYProps}
                            className="relative rounded-full bg-primary hover:bg-primary-emphasis transition-colors flex-1"
                            style={{
                                height: 'var(--px-handle-height, 40px)',
                                transform: 'translate3d(0, var(--px-handle-offset, 0), 0)'
                            }}
                        />
                    </div>
                )}
            </div>
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

## Usage

```tsx
import { useScrollArea } from '@primereact/headless/scrollarea';
```

```tsx
const { rootProps, viewportProps, contentProps, scrollbarYProps, handleYProps, hiddenState } = useScrollArea();

<div {...rootProps}>
    <div {...viewportProps} style={{ overflow: 'scroll', scrollbarWidth: 'none' }}>
        <div {...contentProps}></div>
    </div>
    {!hiddenState.y && (
        <div {...scrollbarYProps}>
            <div {...handleYProps} />
        </div>
```

`useScrollArea` returns pre-wired prop objects for every part of a custom scrollbar, root, viewport, content, scrollbars, handles, and corner, along with state flags that tell you which pieces are actually needed. See [Primitive](../../primitive/components/scrollarea.md) for a component-based API.

## Features

- **Part-level prop spreading**, spread-ready objects for root, viewport, content, scrollbars, handles, and corner with built-in ref callbacks
- **Automatic handle sizing**, handle dimensions recompute from the viewport-to-content ratio via ResizeObserver
- **Pointer drag handling**, dragging both the handle and the track to scroll is handled internally
- **Overflow edge detection**, granular flags for when content is scrolled past the top, bottom, left, or right edge
- **Visibility hints**, `hiddenState` tells you which scrollbars and the corner can be skipped entirely
- **Visibility variants**, `variant` controls whether scrollbars are always on, hover-only, scroll-only, auto, or hidden

## Working with callbacks

### Pick a visibility behavior

Choose `variant` based on how visible you want scrollbars to be at rest.

```tsx
const scrollArea = useScrollArea({ variant: 'hover' });
```

Available values: `'auto'` (default), `'hover'`, `'scroll'`, `'always'`, `'hidden'`.

### Skip unnecessary scrollbars

Use `hiddenState` to avoid rendering scrollbar elements when content does not overflow on that axis, which keeps the markup minimal and prevents phantom interaction areas.

```tsx
const { hiddenState } = useScrollArea();

// hiddenState.x      → true when horizontal scrollbar is unnecessary
// hiddenState.y      → true when vertical scrollbar is unnecessary
// hiddenState.corner → true when the corner element is unnecessary
```

### Render scroll-edge indicators

Read `state.scrollYBefore`, `state.scrollYAfter`, `state.scrollXBefore`, and `state.scrollXAfter` to render fade masks, shadow indicators, or trigger infinite loading at the edges.

```tsx
const { state } = useScrollArea();

{
    state.scrollYBefore && <div className="top-fade" />;
}
{
    state.scrollYAfter && <div className="bottom-fade" />;
}
```

### Both-axis scrollbars with a corner

When content overflows in both directions, render both scrollbars and the corner using the orientation-specific prop objects.

```tsx
const { scrollbarYProps, scrollbarXProps, handleYProps, handleXProps, cornerProps, hiddenState } = useScrollArea();

{
    !hiddenState.y && (
        <div {...scrollbarYProps}>
            <div {...handleYProps} />
        </div>
    );
}
{
    !hiddenState.x && (
        <div {...scrollbarXProps}>
            <div {...handleXProps} />
        </div>
    );
}
{
    !hiddenState.corner && <div {...cornerProps} />;
}
```

### Position the handle via CSS variables

The hook writes handle dimensions to CSS custom properties; read them on the handle element instead of managing size imperatively.

| Variable          | Description                              |
| ----------------- | ---------------------------------------- |
| `--handle-height` | Calculated handle height (vertical bar)  |
| `--handle-width`  | Calculated handle width (horizontal bar) |
| `--handle-offset` | Calculated handle offset along the track |

```tsx
<div style={{ height: 'var(--px-handle-height)', transform: 'translate3d(0, var(--px-handle-offset, 0), 0)' }} />
```

## Styling with data attributes

Every prop object includes `data-scope="scrollarea"` and a `data-part` attribute for targeted CSS selectors.

```css
[data-scope='scrollarea'][data-part='scrollbar-y'] {
    width: 8px;
}

[data-scope='scrollarea'][data-part='handle-y'] {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
}
```

## API

### useScrollArea

> **API/props table for `useScrollArea` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Arrow keys and PageUp/PageDown scroll when focus is inside, matching native scroll behavior. See [Primitive](../../primitive/components/scrollarea.md#accessibility) for full WAI-ARIA compliance details.
