# useTimeline

Hook that provides data attributes for alignment and orientation of timeline layouts.

## Usage

```tsx
import { useTimeline } from '@primereact/headless/timeline';
```

```tsx
const { rootProps } = useTimeline();

return <div {...rootProps}></div>;
```

`useTimeline` exposes alignment and orientation as data attributes on the root so layout variations can live entirely in CSS. See [Primitive](../../primitive/components/timeline.md) for a component-based API.

## Features

- **Alignment modes**, five presets (`left`, `right`, `alternate`, `top`, `bottom`) surfaced via `data-align`
- **Orientation**, vertical and horizontal layouts driven by a `data-orientation` attribute
- **CSS-first styling**, the hook only writes attributes; templates stay untouched and style variants stay in the stylesheet
- **Spread-ready root props**, `rootProps` carries `data-scope="timeline"` and the state attributes together

## Working with callbacks

### Switching alignment

Pass `align` to change where entries sit relative to the center line. The attribute updates reactively, so CSS transitions and variants apply automatically.

```tsx
const { rootProps } = useTimeline({ align: 'alternate' });
```

### Horizontal timelines

Set `orientation` to `'horizontal'` when the timeline runs left-to-right across the viewport.

```tsx
const { rootProps } = useTimeline({ orientation: 'horizontal' });
```

### Reading the resolved attributes

The attributes are present on `rootProps` directly, so you can read them for downstream conditions without recomputing.

```tsx
const { rootProps } = useTimeline({ align: 'alternate' });

rootProps['data-align']; // 'alternate'
rootProps['data-orientation']; // 'vertical'
```

## Styling with data attributes

Use the data attributes to build CSS-driven layout variations.

```css
[data-scope='timeline'][data-orientation='horizontal'] {
    flex-direction: row;
}

[data-scope='timeline'][data-align='alternate'] .event:nth-child(even) {
    flex-direction: row-reverse;
}
```

## API

### useTimeline

> **`useTimeline` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/timeline or the installed `@primereact/types`.

## Accessibility

Tab moves through timeline entries using native semantics. See [Primitive](../../primitive/components/timeline.md#accessibility) for full WAI-ARIA compliance details.
