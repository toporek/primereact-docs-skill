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
                    <ScrollArea.Thumb className={styles.thumb} />
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

## Features

- Compound component API with six sub-components: `Root`, `Viewport`, `Content`, `Scrollbar`, `Thumb`, `Corner`
- Automatic thumb sizing based on viewport-to-content ratio
- Pointer-based drag interaction on both scrollbar track and thumb
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
        <ScrollArea.Thumb />
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

**Pass Through example:**

```tsx
'use client';
import { ScrollArea } from '@primereact/ui/scrollarea';

export default function ScrollAreaPTDemo() {
    return (
        <ScrollArea.Root className="h-72 w-[200px]">
            <ScrollArea.Viewport>
                <ScrollArea.Content className="space-y-2">
                    {tags.map((tag) => (
                        <div key={tag} className="text-sm">
                            {tag}
                        </div>
                    ))}
                </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical">
                <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
        </ScrollArea.Root>
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

// import { ScrollArea } from '@primereact/ui/scrollarea';

// export default function ScrollAreaPTDemo() {
//     return (
//         <div className="max-w-56 w-full mx-auto">
//             <div className="text-surface-500 dark:text-surface-400 font-medium text-sm uppercase font-mono tracking-tight mb-2">Automobiles</div>
//             <ScrollArea.Root className="h-72">
//                 <ScrollArea.Viewport>
//                     <ScrollArea.Content className="space-y-2">
//                         {automobiles.map((car) => (
//                             <span key={car.label} className="flex items-end gap-0.5">
//                                 <a className="text-primary text-sm hover:underline!" href="">
//                                     {car.label}
//                                 </a>
//                                 <span className="text-surface-500 text-[11px] font-mono mb-px tracking-tighter">({car.value})</span>
//                             </span>
//                         ))}
//                     </ScrollArea.Content>
//                 </ScrollArea.Viewport>
//                 <ScrollArea.Scrollbar orientation="vertical">
//                     <ScrollArea.Thumb />
//                 </ScrollArea.Scrollbar>
//             </ScrollArea.Root>
//         </div>
//     );
// }

// const automobiles = [
//     { label: 'Audi', value: '200' },
//     { label: 'BMW', value: '350' },
//     { label: 'Mercedes-Benz', value: '420' },
//     { label: 'Volkswagen', value: '510' },
//     { label: 'Toyota', value: '610' },
//     { label: 'Honda', value: '280' },
//     { label: 'Hyundai', value: '390' },
//     { label: 'Kia', value: '260' },
//     { label: 'Ford', value: '470' },
//     { label: 'Renault', value: '530' },
//     { label: 'Peugeot', value: '410' },
//     { label: 'Citroen', value: '190' },
//     { label: 'Skoda', value: '360' },
//     { label: 'Seat', value: '210' },
//     { label: 'Opel', value: '440' },
//     { label: 'Fiat', value: '620' },
//     { label: 'Dacia', value: '380' },
//     { label: 'Volvo', value: '140' },
//     { label: 'Mazda', value: '120' },
//     { label: 'Mitsubishi', value: '110' },
//     { label: 'Nissan', value: '330' },
//     { label: 'Subaru', value: '60' },
//     { label: 'Suzuki', value: '170' },
//     { label: 'Jeep', value: '95' },
//     { label: 'Land Rover', value: '80' },
//     { label: 'Porsche', value: '75' },
//     { label: 'Ferrari', value: '12' },
//     { label: 'Lamborghini', value: '9' },
//     { label: 'Bentley', value: '15' },
//     { label: 'Rolls-Royce', value: '6' },
//     { label: 'Mini', value: '130' },
//     { label: 'Tesla', value: '220' },
//     { label: 'BYD', value: '55' },
//     { label: 'Chery', value: '160' },
//     { label: 'MG', value: '145' },
//     { label: 'DS Automobiles', value: '40' },
//     { label: 'Alfa Romeo', value: '50' },
//     { label: 'Lancia', value: '8' },
//     { label: 'Cadillac', value: '22' },
//     { label: 'Chevrolet', value: '105' },
//     { label: 'Dodge', value: '18' },
//     { label: 'GMC', value: '14' },
//     { label: 'Infiniti', value: '11' },
//     { label: 'Acura', value: '7' },
//     { label: 'Genesis', value: '35' },
//     { label: 'Geely', value: '27' },
//     { label: 'Proton', value: '19' },
//     { label: 'Togg', value: '65' },
//     { label: 'Rivian', value: '4' },
//     { label: 'Lucid', value: '3' }
// ];
```

## API

### ScrollAreaRoot

> **API/props table for `ScrollAreaRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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

> **API/props table for `ScrollAreaRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ScrollAreaViewport

> **API/props table for `ScrollAreaViewport` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"scrollarea"` |
| `data-part`  | `"viewport"`   |

> **API/props table for `ScrollAreaViewport` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ScrollAreaContent

> **API/props table for `ScrollAreaContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ScrollAreaContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ScrollAreaScrollbar

> **API/props table for `ScrollAreaScrollbar` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                              |
| ------------ | ---------------------------------- |
| `data-scope` | `"scrollarea"`                     |
| `data-part`  | `"scrollbar-y"` or `"scrollbar-x"` |

**CSS Custom Properties**

The `Scrollbar` element sets CSS custom properties on its `style` for thumb sizing and positioning. The specific variables depend on the scrollbar orientation.

| CSS Variable     | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `--thumb-height` | Height of the vertical scrollbar thumb in pixels       |
| `--thumb-width`  | Width of the horizontal scrollbar thumb in pixels      |
| `--thumb-offset` | Offset position of the thumb along the scrollbar track |

> **API/props table for `ScrollAreaScrollbar` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ScrollAreaThumb

> **API/props table for `ScrollAreaThumb` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                      |
| ------------ | -------------------------- |
| `data-scope` | `"scrollarea"`             |
| `data-part`  | `"thumb-y"` or `"thumb-x"` |

> **API/props table for `ScrollAreaThumb` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ScrollAreaCorner

> **API/props table for `ScrollAreaCorner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"scrollarea"` |
| `data-part`  | `"corner"`     |

> **API/props table for `ScrollAreaCorner` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ScrollAreaThumbY

> **API/props table for `ScrollAreaThumbY` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ScrollAreaThumbX

> **API/props table for `ScrollAreaThumbX` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
