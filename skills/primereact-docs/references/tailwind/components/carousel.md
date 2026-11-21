# Carousel

Carousel is a content slider featuring various customization options.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/carousel.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Carousel, CarouselContent, CarouselIndicators, CarouselItem, CarouselNext, CarouselPrev } from '@/components/ui/carousel';
```

```tsx
<Carousel>
    <CarouselContent>
        <CarouselItem>...</CarouselItem>
    </CarouselContent>
    <CarouselIndicators />
    <CarouselPrev />
    <CarouselNext />
</Carousel>
```

## Examples

### Basic

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
