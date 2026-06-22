# useScrollArea

Hook that manages custom scrollbar state, overflow detection, and thumb positioning.

```tsx
'use client';
import { useScrollArea } from '@primereact/headless/scrollarea';

export default function BasicDemo() {
    const { rootProps, viewportProps, contentProps, scrollbarYProps, thumbYProps, hiddenState } = useScrollArea();

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
                            {...thumbYProps}
                            className="relative rounded-full bg-primary hover:bg-primary-emphasis transition-colors flex-1"
                            style={{
                                height: 'var(--thumb-height, 40px)',
                                transform: 'translate3d(0, var(--thumb-offset, 0), 0)'
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
    'Menubar',
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

```tsx showLineNumbers {1,3,6-8,10-12}
import { useScrollArea } from '@primereact/headless/scrollarea';

const { rootProps, viewportProps, contentProps, scrollbarYProps, thumbYProps, hiddenState } = useScrollArea();

return (
    <div {...rootProps}>
        <div {...viewportProps} style={{ overflow: 'scroll', scrollbarWidth: 'none' }}>
            <div {...contentProps}></div>
        </div>
        {!hiddenState.y && (
            <div {...scrollbarYProps}>
                <div {...thumbYProps} />
            </div>
        )}
    </div>
);
```

`useScrollArea` manages custom scrollbar state, thumb positioning, and overflow detection — see [Primitive](../../primitive/scrollarea/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects with built-in ref callbacks for all scroll area elements
- Automatic thumb size calculation based on viewport-to-content ratio
- Pointer-based drag handling for both scrollbar track and thumb
- ResizeObserver-based recalculation on content changes
- Overflow edge detection (`scrollXBefore`, `scrollXAfter`, `scrollYBefore`, `scrollYAfter`)
- Support for both vertical and horizontal scrolling

## Behavior

### Variant

Use `variant` to control scrollbar visibility behavior.

```tsx
const scrollArea = useScrollArea({ variant: 'hover' });
```

Available values: `'auto'` (default), `'hover'`, `'scroll'`, `'always'`, `'hidden'`.

### Hidden State

`hiddenState` provides boolean flags that indicate whether each scrollbar and the corner should be rendered.

```tsx
const { hiddenState } = useScrollArea();

// hiddenState.x      → true when horizontal scrollbar is unnecessary
// hiddenState.y      → true when vertical scrollbar is unnecessary
// hiddenState.corner → true when the corner element is unnecessary (at least one axis has no overflow)
```

Use these flags for conditional rendering of scrollbar and corner elements.

### Corner Size

`cornerSize` exposes the measured dimensions of the corner area where both scrollbars intersect. The hook sets `--corner-width` and `--corner-height` CSS variables on the root automatically, but `cornerSize` provides direct access for layout calculations.

```tsx
const { cornerSize } = useScrollArea();

// cornerSize.width  → pixel width of the vertical scrollbar (0 when no corner)
// cornerSize.height → pixel height of the horizontal scrollbar (0 when no corner)
```

### Overflow Detection

`state` provides fine-grained scroll position flags for building fade masks, shadow indicators, or loading triggers at content edges.

```tsx
const { state } = useScrollArea();

// state.hasOverflowX  → true when content overflows horizontally
// state.hasOverflowY  → true when content overflows vertically
// state.scrollYBefore → true when scrolled past the top edge
// state.scrollYAfter  → true when content remains below the viewport
// state.scrollXBefore → true when scrolled past the left edge
// state.scrollXAfter  → true when content remains to the right
```

### Both Scrollbars

For content that overflows in both directions, use orientation-specific prop objects for each scrollbar and thumb. The corner element fills the intersection.

```tsx
const { scrollbarYProps, scrollbarXProps, thumbYProps, thumbXProps, cornerProps, hiddenState } = useScrollArea();

{
    !hiddenState.y && (
        <div {...scrollbarYProps}>
            <div {...thumbYProps} />
        </div>
    );
}
{
    !hiddenState.x && (
        <div {...scrollbarXProps}>
            <div {...thumbXProps} />
        </div>
    );
}
{
    !hiddenState.corner && <div {...cornerProps} />;
}
```

### Thumb Positioning

The hook sets CSS custom properties on scrollbar elements for thumb dimensions and positioning:

| Variable         | Description                             |
| ---------------- | --------------------------------------- |
| `--thumb-height` | Calculated thumb height (vertical bar)  |
| `--thumb-width`  | Calculated thumb width (horizontal bar) |
| `--thumb-offset` | Calculated thumb offset along the track |

Apply these via inline styles on the thumb element:

```tsx
<div style={{ height: 'var(--thumb-height)', transform: 'translate3d(0, var(--thumb-offset, 0), 0)' }} />
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="scrollarea"` and a `data-part` attribute for targeted CSS selectors.

```css
[data-scope='scrollarea'][data-part='scrollbar-y'] {
    width: 8px;
}

[data-scope='scrollarea'][data-part='thumb-y'] {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
}
```

## API

### useScrollArea

> **API/props table for `useScrollArea` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [ScrollArea Primitive](../../primitive/scrollarea/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
