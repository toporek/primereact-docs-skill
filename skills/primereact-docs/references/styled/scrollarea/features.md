# ScrollArea

ScrollArea is a cross browser, lightweight and themable alternative to native browser scrollbar.

```tsx
import { ScrollArea } from '@primereact/ui/scrollarea';

export default function Preview() {
    return (
        <div className="max-w-56 w-full mx-auto">
            <div className="text-surface-500 dark:text-surface-400 font-medium text-sm uppercase font-mono tracking-tight mb-2">Automobiles</div>
            <ScrollArea.Root className="h-72">
                <ScrollArea.Viewport>
                    <ScrollArea.Content className="space-y-2">
                        {automobiles.map((car) => (
                            <span key={car.label} className="flex items-end gap-0.5">
                                <a className="text-primary text-sm hover:underline!" href="">
                                    {car.label}
                                </a>
                                <span className="text-surface-500 text-[11px] font-mono mb-px tracking-tighter">({car.value})</span>
                            </span>
                        ))}
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical">
                    <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </div>
    );
}

const automobiles = [
    { label: 'Audi', value: '200' },
    { label: 'BMW', value: '350' },
    { label: 'Mercedes-Benz', value: '420' },
    { label: 'Volkswagen', value: '510' },
    { label: 'Toyota', value: '610' },
    { label: 'Honda', value: '280' },
    { label: 'Hyundai', value: '390' },
    { label: 'Kia', value: '260' },
    { label: 'Ford', value: '470' },
    { label: 'Renault', value: '530' },
    { label: 'Peugeot', value: '410' },
    { label: 'Citroen', value: '190' },
    { label: 'Skoda', value: '360' },
    { label: 'Seat', value: '210' },
    { label: 'Opel', value: '440' },
    { label: 'Fiat', value: '620' },
    { label: 'Dacia', value: '380' },
    { label: 'Volvo', value: '140' },
    { label: 'Mazda', value: '120' },
    { label: 'Mitsubishi', value: '110' },
    { label: 'Nissan', value: '330' },
    { label: 'Subaru', value: '60' },
    { label: 'Suzuki', value: '170' },
    { label: 'Jeep', value: '95' },
    { label: 'Land Rover', value: '80' },
    { label: 'Porsche', value: '75' },
    { label: 'Ferrari', value: '12' },
    { label: 'Lamborghini', value: '9' },
    { label: 'Bentley', value: '15' },
    { label: 'Rolls-Royce', value: '6' },
    { label: 'Mini', value: '130' },
    { label: 'Tesla', value: '220' },
    { label: 'BYD', value: '55' },
    { label: 'Chery', value: '160' },
    { label: 'MG', value: '145' },
    { label: 'DS Automobiles', value: '40' },
    { label: 'Alfa Romeo', value: '50' },
    { label: 'Lancia', value: '8' },
    { label: 'Cadillac', value: '22' },
    { label: 'Chevrolet', value: '105' },
    { label: 'Dodge', value: '18' },
    { label: 'GMC', value: '14' },
    { label: 'Infiniti', value: '11' },
    { label: 'Acura', value: '7' },
    { label: 'Genesis', value: '35' },
    { label: 'Geely', value: '27' },
    { label: 'Proton', value: '19' },
    { label: 'Togg', value: '65' },
    { label: 'Rivian', value: '4' },
    { label: 'Lucid', value: '3' }
];
```

## Usage

```tsx
import { ScrollArea } from '@primereact/ui/scrollarea';
```

```tsx
<ScrollArea.Root>
    <ScrollArea.Viewport>
        <ScrollArea.Content />
    </ScrollArea.Viewport>
    <ScrollArea.ThumbX />
    <ScrollArea.ThumbY />
</ScrollArea.Root>
```

## Examples

### Basic

A custom scrollable container with styled scrollbars.

```tsx
import { ScrollArea } from '@primereact/ui/scrollarea';

export default function BasicDemo() {
    return (
        <div className="max-w-56 w-full mx-auto">
            <div className="text-surface-500 dark:text-surface-400 font-medium text-sm uppercase font-mono tracking-tight mb-2">Automobiles</div>
            <ScrollArea.Root className="h-72">
                <ScrollArea.Viewport>
                    <ScrollArea.Content className="space-y-2">
                        {automobiles.map((car) => (
                            <span key={car.label} className="flex items-end gap-0.5">
                                <a className="text-primary text-sm hover:underline!" href="">
                                    {car.label}
                                </a>
                                <span className="text-surface-500 text-[11px] font-mono mb-px tracking-tighter">({car.value})</span>
                            </span>
                        ))}
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical">
                    <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </div>
    );
}

const automobiles = [
    { label: 'Audi', value: '200' },
    { label: 'BMW', value: '350' },
    { label: 'Mercedes-Benz', value: '420' },
    { label: 'Volkswagen', value: '510' },
    { label: 'Toyota', value: '610' },
    { label: 'Honda', value: '280' },
    { label: 'Hyundai', value: '390' },
    { label: 'Kia', value: '260' },
    { label: 'Ford', value: '470' },
    { label: 'Renault', value: '530' },
    { label: 'Peugeot', value: '410' },
    { label: 'Citroen', value: '190' },
    { label: 'Skoda', value: '360' },
    { label: 'Seat', value: '210' },
    { label: 'Opel', value: '440' },
    { label: 'Fiat', value: '620' },
    { label: 'Dacia', value: '380' },
    { label: 'Volvo', value: '140' },
    { label: 'Mazda', value: '120' },
    { label: 'Mitsubishi', value: '110' },
    { label: 'Nissan', value: '330' },
    { label: 'Subaru', value: '60' },
    { label: 'Suzuki', value: '170' },
    { label: 'Jeep', value: '95' },
    { label: 'Land Rover', value: '80' },
    { label: 'Porsche', value: '75' },
    { label: 'Ferrari', value: '12' },
    { label: 'Lamborghini', value: '9' },
    { label: 'Bentley', value: '15' },
    { label: 'Rolls-Royce', value: '6' },
    { label: 'Mini', value: '130' },
    { label: 'Tesla', value: '220' },
    { label: 'BYD', value: '55' },
    { label: 'Chery', value: '160' },
    { label: 'MG', value: '145' },
    { label: 'DS Automobiles', value: '40' },
    { label: 'Alfa Romeo', value: '50' },
    { label: 'Lancia', value: '8' },
    { label: 'Cadillac', value: '22' },
    { label: 'Chevrolet', value: '105' },
    { label: 'Dodge', value: '18' },
    { label: 'GMC', value: '14' },
    { label: 'Infiniti', value: '11' },
    { label: 'Acura', value: '7' },
    { label: 'Genesis', value: '35' },
    { label: 'Geely', value: '27' },
    { label: 'Proton', value: '19' },
    { label: 'Togg', value: '65' },
    { label: 'Rivian', value: '4' },
    { label: 'Lucid', value: '3' }
];
```

### Horizontal

ScrollArea supports horizontal scrolling for content that extends beyond the horizontal viewport.

```tsx
'use client';
import { PhotoService } from '@/shared/services/photo.service';
import { ScrollArea } from '@primereact/ui/scrollarea';
import * as React from 'react';

interface ImageData {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
    title: string;
}

export default function HorizontalDemo() {
    const [images, setImages] = React.useState<ImageData[] | null>(null);

    React.useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    return (
        <div className="flex justify-center">
            <ScrollArea.Root className="max-w-md mx-auto">
                <ScrollArea.Viewport className="p-3.5">
                    <ScrollArea.Content>
                        <div className="flex gap-4 min-w-max">
                            {images &&
                                images.map((image, index) => (
                                    <figure key={index} className="shrink-0">
                                        <img src={image.itemImageSrc} alt={image.title} className="w-72 h-40 object-cover rounded-sm" />
                                        <figcaption className="mt-2 text-xs">
                                            <span className="opacity-60">Photo by</span> <span className="font-medium">{image.title}</span>
                                        </figcaption>
                                    </figure>
                                ))}
                        </div>
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="horizontal">
                    <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </div>
    );
}
```

### Both Scrollbars

```tsx
import { ScrollArea } from '@primereact/ui/scrollarea';

const columns = [
    { key: 'city', label: 'City' },
    { key: 'state', label: 'State' },
    { key: 'population', label: 'Population' },
    { key: 'area_km2', label: 'Area (km²)' }
] as const;

export default function BothScrollbarsDemo() {
    return (
        <ScrollArea.Root className="h-80 max-w-sm mx-auto w-full rounded-md overflow-hidden">
            <ScrollArea.Viewport className="p-0">
                <ScrollArea.Content>
                    <table className="min-w-xl w-full text-sm border-collapse border-0">
                        <thead className="sticky top-0 z-10 ">
                            <tr className="bg-surface-100 dark:bg-surface-800 border-b border-surface">
                                {columns.map((col) => (
                                    <th
                                        key={col.key}
                                        className="border-b border-surface px-4 py-2 text-left text-sm whitespace-nowrap uppercase font-mono font-light"
                                    >
                                        {col.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {usCities.map((city, i) => (
                                <tr
                                    key={i}
                                    className="last:border-0 border-b border-surface odd:bg-surface-50 dark:odd:bg-surface-900/40 hover:bg-primary/5"
                                >
                                    <td className=" px-4 py-2 font-medium whitespace-nowrap">{city.city}</td>
                                    <td className=" px-4 py-2 text-surface-500">{city.state}</td>
                                    <td className=" px-4 py-2 tabular-nums">{city.population.toLocaleString()}</td>
                                    <td className=" px-4 py-2 tabular-nums">{city.area_km2.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ScrollArea.Content>
            </ScrollArea.Viewport>

            <ScrollArea.Scrollbar orientation="vertical" className="m-0 bg-transparent">
                <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>

            <ScrollArea.Scrollbar orientation="horizontal" className="m-0 bg-transparent">
                <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>

            <ScrollArea.Corner />
        </ScrollArea.Root>
    );
}

const usCities = [
    { city: 'New York', state: 'NY', population: 8419600, area_km2: 783.8 },
    { city: 'Los Angeles', state: 'CA', population: 3980400, area_km2: 1214.9 },
    { city: 'Chicago', state: 'IL', population: 2716000, area_km2: 589.6 },
    { city: 'Houston', state: 'TX', population: 2328000, area_km2: 1651.1 },
    { city: 'Phoenix', state: 'AZ', population: 1690000, area_km2: 1340.6 },
    { city: 'Philadelphia', state: 'PA', population: 1584200, area_km2: 369.6 },
    { city: 'San Antonio', state: 'TX', population: 1547200, area_km2: 1194.0 },
    { city: 'San Diego', state: 'CA', population: 1423800, area_km2: 964.5 },
    { city: 'Dallas', state: 'TX', population: 1341100, area_km2: 882.9 },
    { city: 'San Jose', state: 'CA', population: 1035300, area_km2: 469.7 },
    { city: 'Austin', state: 'TX', population: 1010000, area_km2: 704.0 },
    { city: 'Jacksonville', state: 'FL', population: 949600, area_km2: 2265.3 },
    { city: 'Fort Worth', state: 'TX', population: 918900, area_km2: 920.9 },
    { city: 'Columbus', state: 'OH', population: 905700, area_km2: 577.9 },
    { city: 'Charlotte', state: 'NC', population: 885700, area_km2: 771.0 },
    { city: 'San Francisco', state: 'CA', population: 873900, area_km2: 121.4 },
    { city: 'Indianapolis', state: 'IN', population: 876400, area_km2: 953.0 },
    { city: 'Seattle', state: 'WA', population: 737000, area_km2: 217.0 },
    { city: 'Denver', state: 'CO', population: 715500, area_km2: 401.3 },
    { city: 'Washington', state: 'DC', population: 689500, area_km2: 177.0 },
    { city: 'Boston', state: 'MA', population: 675600, area_km2: 232.1 },
    { city: 'El Paso', state: 'TX', population: 678800, area_km2: 663.7 },
    { city: 'Nashville', state: 'TN', population: 689400, area_km2: 1362.2 },
    { city: 'Detroit', state: 'MI', population: 639100, area_km2: 370.0 },
    { city: 'Oklahoma City', state: 'OK', population: 681100, area_km2: 1608.8 }
];
```

### Scroll Fade

```tsx
import { ScrollArea } from '@primereact/ui/scrollarea';

export default function FadeDemo() {
    return (
        <div className="max-w-56 w-full mx-auto">
            <div className="text-surface-500 dark:text-surface-400 font-medium text-sm uppercase font-mono tracking-tight mb-2">Automobiles</div>
            <ScrollArea.Root className="h-72" mask>
                <ScrollArea.Viewport className="">
                    <ScrollArea.Content className="space-y-2">
                        {automobiles.map((car) => (
                            <span key={car.label} className="flex items-end gap-0.5">
                                <a className="text-primary text-sm hover:underline!" href="">
                                    {car.label}
                                </a>
                                <span className="text-surface-500 text-[11px] font-mono mb-px tracking-tighter">({car.value})</span>
                            </span>
                        ))}
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical">
                    <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </div>
    );
}

const automobiles = [
    { label: 'Audi', value: '200' },
    { label: 'BMW', value: '350' },
    { label: 'Mercedes-Benz', value: '420' },
    { label: 'Volkswagen', value: '510' },
    { label: 'Toyota', value: '610' },
    { label: 'Honda', value: '280' },
    { label: 'Hyundai', value: '390' },
    { label: 'Kia', value: '260' },
    { label: 'Ford', value: '470' },
    { label: 'Renault', value: '530' },
    { label: 'Peugeot', value: '410' },
    { label: 'Citroen', value: '190' },
    { label: 'Skoda', value: '360' },
    { label: 'Seat', value: '210' },
    { label: 'Opel', value: '440' },
    { label: 'Fiat', value: '620' },
    { label: 'Dacia', value: '380' },
    { label: 'Volvo', value: '140' },
    { label: 'Mazda', value: '120' },
    { label: 'Mitsubishi', value: '110' },
    { label: 'Nissan', value: '330' },
    { label: 'Subaru', value: '60' },
    { label: 'Suzuki', value: '170' },
    { label: 'Jeep', value: '95' },
    { label: 'Land Rover', value: '80' },
    { label: 'Porsche', value: '75' },
    { label: 'Ferrari', value: '12' },
    { label: 'Lamborghini', value: '9' },
    { label: 'Bentley', value: '15' },
    { label: 'Rolls-Royce', value: '6' },
    { label: 'Mini', value: '130' },
    { label: 'Tesla', value: '220' },
    { label: 'BYD', value: '55' },
    { label: 'Chery', value: '160' },
    { label: 'MG', value: '145' },
    { label: 'DS Automobiles', value: '40' },
    { label: 'Alfa Romeo', value: '50' },
    { label: 'Lancia', value: '8' },
    { label: 'Cadillac', value: '22' },
    { label: 'Chevrolet', value: '105' },
    { label: 'Dodge', value: '18' },
    { label: 'GMC', value: '14' },
    { label: 'Infiniti', value: '11' },
    { label: 'Acura', value: '7' },
    { label: 'Genesis', value: '35' },
    { label: 'Geely', value: '27' },
    { label: 'Proton', value: '19' },
    { label: 'Togg', value: '65' },
    { label: 'Rivian', value: '4' },
    { label: 'Lucid', value: '3' }
];
```

### Variant

Change the visibility behavior of scrollbars with the `variant` property.

```tsx
'use client';
import { ScrollAreaRootProps } from 'primereact/scrollarea';
import { Button } from '@primereact/ui/button';
import { ScrollArea } from '@primereact/ui/scrollarea';
import * as React from 'react';

const modes = ['auto', 'hover', 'scroll', 'always', 'hidden'] as ScrollAreaRootProps['variant'][];

export default function VariantDemo() {
    const [variant, setVariant] = React.useState<ScrollAreaRootProps['variant']>('auto');

    return (
        <div className="flex flex-col items-center ">
            <div className="flex flex-wrap items-center justify-center gap-0.5">
                {modes.map((mode) => (
                    <Button
                        key={mode}
                        size="small"
                        variant={mode === variant ? undefined : 'text'}
                        severity={variant === mode ? undefined : 'secondary'}
                        onClick={() => setVariant(mode)}
                        className="capitalize cursor-pointer"
                    >
                        {mode}
                    </Button>
                ))}
            </div>
            <div className="mt-8 max-w-56 w-full mx-auto">
                <div className="text-surface-500 dark:text-surface-400 font-medium text-sm uppercase font-mono tracking-tight mb-2">Automobiles</div>
                <ScrollArea.Root className="h-72" variant={variant}>
                    <ScrollArea.Viewport>
                        <ScrollArea.Content className="space-y-2">
                            {automobiles.map((car) => (
                                <span key={car.label} className="flex items-end gap-0.5">
                                    <a className="text-primary text-sm hover:underline!" href="">
                                        {car.label}
                                    </a>
                                    <span className="text-surface-500 text-[11px] font-mono mb-px tracking-tighter">({car.value})</span>
                                </span>
                            ))}
                        </ScrollArea.Content>
                    </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar orientation="vertical">
                        <ScrollArea.Thumb />
                    </ScrollArea.Scrollbar>
                </ScrollArea.Root>
            </div>
        </div>
    );
}

const automobiles = [
    { label: 'Audi', value: '200' },
    { label: 'BMW', value: '350' },
    { label: 'Mercedes-Benz', value: '420' },
    { label: 'Volkswagen', value: '510' },
    { label: 'Toyota', value: '610' },
    { label: 'Honda', value: '280' },
    { label: 'Hyundai', value: '390' },
    { label: 'Kia', value: '260' },
    { label: 'Ford', value: '470' },
    { label: 'Renault', value: '530' },
    { label: 'Peugeot', value: '410' },
    { label: 'Citroen', value: '190' },
    { label: 'Skoda', value: '360' },
    { label: 'Seat', value: '210' },
    { label: 'Opel', value: '440' },
    { label: 'Fiat', value: '620' },
    { label: 'Dacia', value: '380' },
    { label: 'Volvo', value: '140' },
    { label: 'Mazda', value: '120' },
    { label: 'Mitsubishi', value: '110' },
    { label: 'Nissan', value: '330' },
    { label: 'Subaru', value: '60' },
    { label: 'Suzuki', value: '170' },
    { label: 'Jeep', value: '95' },
    { label: 'Land Rover', value: '80' },
    { label: 'Porsche', value: '75' },
    { label: 'Ferrari', value: '12' },
    { label: 'Lamborghini', value: '9' },
    { label: 'Bentley', value: '15' },
    { label: 'Rolls-Royce', value: '6' },
    { label: 'Mini', value: '130' },
    { label: 'Tesla', value: '220' },
    { label: 'BYD', value: '55' },
    { label: 'Chery', value: '160' },
    { label: 'MG', value: '145' },
    { label: 'DS Automobiles', value: '40' },
    { label: 'Alfa Romeo', value: '50' },
    { label: 'Lancia', value: '8' },
    { label: 'Cadillac', value: '22' },
    { label: 'Chevrolet', value: '105' },
    { label: 'Dodge', value: '18' },
    { label: 'GMC', value: '14' },
    { label: 'Infiniti', value: '11' },
    { label: 'Acura', value: '7' },
    { label: 'Genesis', value: '35' },
    { label: 'Geely', value: '27' },
    { label: 'Proton', value: '19' },
    { label: 'Togg', value: '65' },
    { label: 'Rivian', value: '4' },
    { label: 'Lucid', value: '3' }
];
```

### Custom

```tsx
import { ScrollArea } from '@primereact/ui/scrollarea';

export default function CustomDemo() {
    return (
        <div className="max-w-56 w-full mx-auto">
            <div className="text-surface-500 dark:text-surface-400 font-medium text-sm uppercase font-mono tracking-tight mb-2">Automobiles</div>
            <ScrollArea.Root className="h-72">
                <ScrollArea.Viewport>
                    <ScrollArea.Content className="space-y-2">
                        {automobiles.map((car) => (
                            <span key={car.label} className="flex items-end gap-0.5">
                                <a className="text-primary text-sm hover:underline!" href="">
                                    {car.label}
                                </a>
                                <span className="text-surface-500 text-[11px] font-mono mb-px tracking-tighter">({car.value})</span>
                            </span>
                        ))}
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="rounded-full bg-indigo-500/10 w-2">
                    <ScrollArea.Thumb className="relative bg-transparent after:content-[''] after:rounded-full after:bg-indigo-500 after:absolute after:inset-0 active:after:scale-y-90 active:after:scale-x-75 after:transition-transform" />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </div>
    );
}

const automobiles = [
    { label: 'Audi', value: '200' },
    { label: 'BMW', value: '350' },
    { label: 'Mercedes-Benz', value: '420' },
    { label: 'Volkswagen', value: '510' },
    { label: 'Toyota', value: '610' },
    { label: 'Honda', value: '280' },
    { label: 'Hyundai', value: '390' },
    { label: 'Kia', value: '260' },
    { label: 'Ford', value: '470' },
    { label: 'Renault', value: '530' },
    { label: 'Peugeot', value: '410' },
    { label: 'Citroen', value: '190' },
    { label: 'Skoda', value: '360' },
    { label: 'Seat', value: '210' },
    { label: 'Opel', value: '440' },
    { label: 'Fiat', value: '620' },
    { label: 'Dacia', value: '380' },
    { label: 'Volvo', value: '140' },
    { label: 'Mazda', value: '120' },
    { label: 'Mitsubishi', value: '110' },
    { label: 'Nissan', value: '330' },
    { label: 'Subaru', value: '60' },
    { label: 'Suzuki', value: '170' },
    { label: 'Jeep', value: '95' },
    { label: 'Land Rover', value: '80' },
    { label: 'Porsche', value: '75' },
    { label: 'Ferrari', value: '12' },
    { label: 'Lamborghini', value: '9' },
    { label: 'Bentley', value: '15' },
    { label: 'Rolls-Royce', value: '6' },
    { label: 'Mini', value: '130' },
    { label: 'Tesla', value: '220' },
    { label: 'BYD', value: '55' },
    { label: 'Chery', value: '160' },
    { label: 'MG', value: '145' },
    { label: 'DS Automobiles', value: '40' },
    { label: 'Alfa Romeo', value: '50' },
    { label: 'Lancia', value: '8' },
    { label: 'Cadillac', value: '22' },
    { label: 'Chevrolet', value: '105' },
    { label: 'Dodge', value: '18' },
    { label: 'GMC', value: '14' },
    { label: 'Infiniti', value: '11' },
    { label: 'Acura', value: '7' },
    { label: 'Genesis', value: '35' },
    { label: 'Geely', value: '27' },
    { label: 'Proton', value: '19' },
    { label: 'Togg', value: '65' },
    { label: 'Rivian', value: '4' },
    { label: 'Lucid', value: '3' }
];
```

## API

### Sub-Components

See [Primitive API](../../primitive/scrollarea/features.md#api) for `ScrollAreaRoot`, `ScrollAreaViewport`, `ScrollAreaContent`, `ScrollAreaThumbY`, and `ScrollAreaThumbX` component documentation.

### Hooks

See [Headless API](../../headless/scrollarea/features.md#api) for `useScrollArea` hook documentation.

## Accessibility

See [ScrollArea Primitive](../../primitive/scrollarea/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
