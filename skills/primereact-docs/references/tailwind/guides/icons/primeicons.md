# Prime Icons

PrimeIcons is the default icon library of PrimeReact with over 250 open source icons developed by PrimeTek. PrimeIcons library is optional as PrimeReact components can use any icon with templating.

    Browse all 250+ icons on <a href="https://primeicons.dev" target="_blank" rel="noopener noreferrer">primeicons.dev</a>.

## Download

`@primeicons/react` is available on npm. Each icon is a standalone React component, so only the icons you import are included in your bundle.

```bash
npm install @primeicons/react
```

## Import

Import icons individually from their own entry point.

```tsx
import { Check } from '@primeicons/react/check';
import { Search } from '@primeicons/react/search';
```

## Figma

PrimeIcons library is now available on [Figma Community](https://www.figma.com/community/file/1354343849355792252/primeicons). By adding them as a library, you can easily use these icons in your designs.

## Basic

Each icon is an SVG React component. Import and render it directly — no additional configuration needed.

```tsx
import { Check } from '@primeicons/react/check';
import { Search } from '@primeicons/react/search';
import { Times } from '@primeicons/react/times';
import { User } from '@primeicons/react/user';

export default function BasicDemo() {
    return (
        <div className="flex justify-center gap-4">
            <Check />
            <Times />
            <Search />
            <User />
        </div>
    );
}

```

## Size

Icon size is controlled with the `size` prop, which sets both the width and height in pixels.

```tsx
import { Check } from '@primeicons/react/check';
import { Search } from '@primeicons/react/search';
import { Times } from '@primeicons/react/times';
import { User } from '@primeicons/react/user';

export default function SizeDemo() {
    return (
        <div className="flex justify-center items-center gap-4">
            <Check size={16} />
            <Times size={24} />
            <Search size={32} />
            <User size={40} />
        </div>
    );
}

```

## Color

Icon color is set with the `color` prop and is inherited from the parent element by default.

```tsx
import { Check } from '@primeicons/react/check';
import { Search } from '@primeicons/react/search';
import { Times } from '@primeicons/react/times';
import { User } from '@primeicons/react/user';

export default function ColorDemo() {
    return (
        <div className="flex justify-center items-center gap-4">
            <Check color="#22c55e" />
            <Times color="#ef4444" />
            <Search color="#3b82f6" />
            <User color="#a855f7" />
        </div>
    );
}

```

## Spin

Use a spin animation utility like `animate-spin` from Tailwind apply rotation.

```tsx
import { Cog } from '@primeicons/react/cog';
import { Spinner } from '@primeicons/react/spinner';

export default function SpinDemo() {
    return (
        <div className="flex justify-center gap-4">
            <Spinner className="animate-spin" size={32} />
            <Cog className="animate-spin" size={32} />
        </div>
    );
}

```
