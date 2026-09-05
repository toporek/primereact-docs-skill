# Carousel

Carousel is a content slider featuring various customization options.

## Usage

```tsx
import { Carousel } from '@primereact/ui/carousel';
```

```tsx
<Carousel.Root>
    <Carousel.Content>
        <Carousel.Item></Carousel.Item>
    </Carousel.Content>
    <Carousel.Indicators />
    <Carousel.Prev></Carousel.Prev>
    <Carousel.Next></Carousel.Next>
</Carousel.Root>
```

## Examples

### Basic

Cycles through a set of items with navigation controls.

### Alignment

Use the `align` property to align the carousel items. `slidesPerPage` property is used to control the number of slides visible per page.

### Orientation

Use the `orientation` property to change the orientation of the carousel.

### Loop

Use the `loop` property to enable loop mode.

### Variable Size

Use the `autoSize` property to enable auto size mode and set the width of the carousel items.

### Gallery

Gallery demo shows how to use the `slide` property to scroll to a specific slide by index.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/carousel.md#api) for `CarouselRoot`, `CarouselContent`, `CarouselItem`, `CarouselPrev`, `CarouselNext`, `CarouselIndicators`, `CarouselIndicator` component documentation.

### Hooks

See [Headless API](../../headless/components/carousel.md#api) for `useCarousel` hook documentation.

### Accessibility

See [Carousel Primitive](../../primitive/components/carousel.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-carousel | Class name of the root element |

> **`CarouselContent` API table (`style`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/carousel or the installed `@primereact/types`.
> **`CarouselIndicators` API table (`style`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/carousel or the installed `@primereact/types`.
> **`CarouselIndicator` API table (`style`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/carousel or the installed `@primereact/types`.
> **`CarouselNext` API table (`style`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/carousel or the installed `@primereact/types`.
> **`CarouselPrev` API table (`style`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/carousel or the installed `@primereact/types`.

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| carousel.transition.duration | --p-carousel-transition-duration | Transition duration of root |
| carousel.content.gap | --p-carousel-content-gap | Gap of content |
| carousel.indicator.list.padding | --p-carousel-indicator-list-padding | Padding of indicator list |
| carousel.indicator.list.gap | --p-carousel-indicator-list-gap | Gap of indicator list |
| carousel.indicator.width | --p-carousel-indicator-width | Width of indicator |
| carousel.indicator.height | --p-carousel-indicator-height | Height of indicator |
| carousel.indicator.border.radius | --p-carousel-indicator-border-radius | Border radius of indicator |
| carousel.indicator.focus.ring.width | --p-carousel-indicator-focus-ring-width | Focus ring width of indicator |
| carousel.indicator.focus.ring.style | --p-carousel-indicator-focus-ring-style | Focus ring style of indicator |
| carousel.indicator.focus.ring.color | --p-carousel-indicator-focus-ring-color | Focus ring color of indicator |
| carousel.indicator.focus.ring.offset | --p-carousel-indicator-focus-ring-offset | Focus ring offset of indicator |
| carousel.indicator.focus.ring.shadow | --p-carousel-indicator-focus-ring-shadow | Focus ring shadow of indicator |
| carousel.indicator.background | --p-carousel-indicator-background | Background of indicator |
| carousel.indicator.hover.background | --p-carousel-indicator-hover-background | Hover background of indicator |
| carousel.indicator.active.background | --p-carousel-indicator-active-background | Active background of indicator |
