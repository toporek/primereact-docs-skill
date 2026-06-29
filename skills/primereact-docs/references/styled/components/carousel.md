# Carousel

Carousel is a content slider featuring various customization options.

```tsx
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { Carousel } from '@primereact/ui/carousel';

const albums = [
    {
        title: 'Velvet Haze',
        artist: 'Aurora Skies',
        img: 'https://plus.unsplash.com/premium_photo-1721310985165-4e6e63d5e7a1?w=200&h=200&fit=crop&auto=format'
    },
    {
        title: 'Dissolve',
        artist: 'Phantom Echo',
        img: 'https://images.unsplash.com/photo-1711054824441-064a99073a0b?w=200&h=200&fit=crop&auto=format'
    },
    {
        title: 'Still Life',
        artist: 'Glass Animals',
        img: 'https://images.unsplash.com/photo-1651443039959-582bbea6be6a?w=200&h=200&fit=crop&auto=format'
    },
    {
        title: 'Bloom',
        artist: 'Petal Storm',
        img: 'https://plus.unsplash.com/premium_photo-1748180936767-e1ce9b2374fa?w=200&h=200&fit=crop&auto=format'
    },
    {
        title: 'Refraction',
        artist: 'Prism Collective',
        img: 'https://images.unsplash.com/photo-1651443146979-4cf9a27dcade?w=200&h=200&fit=crop&auto=format'
    },
    { title: 'Ivory', artist: 'Soft Landing', img: 'https://images.unsplash.com/photo-1531777992189-ad52457fbe93?w=200&h=200&fit=crop&auto=format' }
];

function Preview() {
    return (
        <Carousel.Root className="max-w-sm mx-auto" slidesPerPage={2.45} spacing={20}>
            <div className="flex items-center justify-between mb-4">
                <div className="font-bold ">Last Played</div>
                <div className="flex items-center gap-2">
                    <Carousel.Prev as={Button} size="small" severity="secondary" iconOnly>
                        <ChevronLeft />
                    </Carousel.Prev>
                    <Carousel.Next as={Button} size="small" severity="secondary" iconOnly>
                        <ChevronRight />
                    </Carousel.Next>
                </div>
            </div>
            <Carousel.Content>
                {albums.map((album) => (
                    <Carousel.Item key={album.title} className="w-full relative">
                        <div className="relative">
                            <img draggable={false} src={album.img} alt={album.title} className="rounded-xl object-cover w-full aspect-square" />
                        </div>
                        <div className="mt-2">
                            <div className="font-semibold">{album.title}</div>
                            <div className="text-sm text-muted-color">{album.artist}</div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel.Content>
        </Carousel.Root>
    );
}

export default Preview;

```

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

```tsx
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Carousel } from '@primereact/ui/carousel';

function BasicDemo() {
    return (
        <div className="mt-8 mb-16">
            <Carousel.Root className="max-w-xl mx-auto" align="center">
                <Carousel.Content className="h-[240px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Carousel.Item key={i}>
                            <div className="h-full text-5xl font-semibold bg-surface-50 dark:bg-surface-950 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-xl border border-surface">
                                <span>{i + 1}</span>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel.Content>
                <div className="flex mt-4 gap-4">
                    <Carousel.Indicators />
                    <div className="flex items-center justify-end gap-2 flex-1">
                        <Carousel.Prev className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <ChevronLeft className="text-lg"></ChevronLeft>
                        </Carousel.Prev>
                        <Carousel.Next className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <ChevronRight className="text-lg"></ChevronRight>
                        </Carousel.Next>
                    </div>
                </div>
            </Carousel.Root>
        </div>
    );
}

export default BasicDemo;

```

### Alignment

Use the `align` property to align the carousel items. `slidesPerPage` property is used to control the number of slides visible per page.

```tsx
import { Carousel } from '@primereact/ui/carousel';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';

function AlignmentDemo() {
    return (
        <div className="mt-8 mb-16">
            <Carousel.Root className="max-w-xl mx-auto" align="start" slidesPerPage={1.5}>
                <Carousel.Content className="h-[240px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Carousel.Item key={i}>
                            <div className="h-full text-5xl font-semibold bg-surface-50 dark:bg-surface-950 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-xl border border-surface">
                                <span>{i + 1}</span>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel.Content>
                <div className="flex mt-4 gap-4">
                    <Carousel.Indicators />
                    <div className="flex items-center justify-end gap-2 flex-1">
                        <Carousel.Prev className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <ChevronLeft className="text-lg"></ChevronLeft>
                        </Carousel.Prev>
                        <Carousel.Next className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <ChevronRight className="text-lg"></ChevronRight>
                        </Carousel.Next>
                    </div>
                </div>
            </Carousel.Root>
        </div>
    );
}

export default AlignmentDemo;

```

### Orientation

Use the `orientation` property to change the orientation of the carousel.

```tsx
import { Carousel } from '@primereact/ui/carousel';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronUp } from '@primeicons/react/chevron-up';

function SizeDemo() {
    return (
        <div className="mt-8 mb-16">
            <Carousel.Root className="max-w-sm mx-auto flex flex-col gap-8 items-center" orientation="vertical" slidesPerPage={1.3}>
                <Carousel.Prev className="w-10 h-10 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                    <ChevronUp className="text-lg"></ChevronUp>
                </Carousel.Prev>
                <Carousel.Content className="h-[240px] w-full">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Carousel.Item key={i}>
                            <div className="h-full text-5xl font-semibold bg-surface-50 dark:bg-surface-950 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-xl border border-surface">
                                <span>{i + 1}</span>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel.Content>
                <Carousel.Next className="w-10 h-10 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                    <ChevronDown className="text-lg"></ChevronDown>
                </Carousel.Next>
            </Carousel.Root>
        </div>
    );
}

export default SizeDemo;

```

### Loop

Use the `loop` property to enable loop mode.

```tsx
import { Carousel } from '@primereact/ui/carousel';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';

function LoopDemo() {
    return (
        <div className="mt-8 mb-16">
            <Carousel.Root className="max-w-xl mx-auto" align="center" loop slidesPerPage={1.75}>
                <Carousel.Content className="h-[240px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Carousel.Item key={i}>
                            <div className="h-full text-5xl font-semibold bg-surface-50 dark:bg-surface-950 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-xl border border-surface">
                                <span>{i + 1}</span>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel.Content>
                <div className="flex mt-4 gap-4">
                    <Carousel.Indicators />
                    <div className="flex items-center justify-end gap-2 flex-1">
                        <Carousel.Prev className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <ChevronLeft className="text-lg"></ChevronLeft>
                        </Carousel.Prev>
                        <Carousel.Next className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <ChevronRight className="text-lg"></ChevronRight>
                        </Carousel.Next>
                    </div>
                </div>
            </Carousel.Root>
        </div>
    );
}

export default LoopDemo;

```

### Variable Size

Use the `autoSize` property to enable auto size mode and set the width of the carousel items.

```tsx
import { Carousel } from '@primereact/ui/carousel';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';

const items = ['120px', '80px', '200px', '160px', '220px', '180px', '280px', '100px'];

function VariableSizeDemo() {
    return (
        <div className="mt-8 mb-16">
            <Carousel.Root className="max-w-xl mx-auto" align="center" autoSize>
                <Carousel.Content className="h-[140px]">
                    {items.map((width, i) => (
                        <Carousel.Item key={i} style={{ width }}>
                            <div className="h-full text-4xl font-semibold bg-surface-50 dark:bg-surface-950 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-lg border border-surface">
                                <span>{i + 1}</span>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel.Content>
                <div className="flex mt-4 gap-4">
                    <Carousel.Indicators />
                    <div className="flex items-center justify-end gap-2 flex-1">
                        <Carousel.Prev className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <ChevronLeft className="text-lg"></ChevronLeft>
                        </Carousel.Prev>
                        <Carousel.Next className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <ChevronRight className="text-lg"></ChevronRight>
                        </Carousel.Next>
                    </div>
                </div>
            </Carousel.Root>
        </div>
    );
}

export default VariableSizeDemo;

```

### Gallery

Gallery demo shows how to use the `slide` property to scroll to a specific slide by index.

```tsx
'use client';
import { Carousel, type CarouselRootChangeEvent } from '@primereact/ui/carousel';
import * as React from 'react';

const images = [
    'https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1704905832963-37d6f12654b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1470130623320-9583a8d06241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1678841446310-d045487ef299?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1511885663737-eea53f6d6187?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1638255402906-e838358069ab?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

function GalleryDemo() {
    const [selectedImage, setSelectedImage] = React.useState(0);

    return (
        <div className="mt-8 mb-16">
            <div className="max-w-2xl mx-auto">
                <Carousel.Root
                    slide={selectedImage}
                    onSlideChange={(e: CarouselRootChangeEvent) => setSelectedImage(Number(e.value ?? 0))}
                    align="center"
                >
                    <Carousel.Content className="h-[396px]">
                        {images.map((_, i) => (
                            <Carousel.Item key={i} className="basis-full! ">
                                <img draggable={false} src={images[i]} alt={`Image ${i + 1}`} className="h-full w-full object-cover select-none" />
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>
                </Carousel.Root>
                <Carousel.Root className="mt-3" spacing={8} align="center" slide={selectedImage}>
                    <Carousel.Content className="h-[90px]">
                        {images.map((_, i) => (
                            <Carousel.Item
                                key={i}
                                onClick={() => setSelectedImage(i)}
                                className={`cursor-pointer basis-1/4! transition-opacity ${selectedImage === i ? '' : 'opacity-60 hover:opacity-40'}`}
                            >
                                <img draggable={false} src={images[i]} alt={`Image ${i + 1}`} className="h-full w-full object-cover select-none" />
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>
                </Carousel.Root>
            </div>
        </div>
    );
}

export default GalleryDemo;

```

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

> **API/props table for `CarouselContent` (`style`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)
> **API/props table for `CarouselIndicators` (`style`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)
> **API/props table for `CarouselIndicator` (`style`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)
> **API/props table for `CarouselNext` (`style`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)
> **API/props table for `CarouselPrev` (`style`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
