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

## Size

Icon size is controlled with the `size` prop, which sets both the width and height in pixels.

## Color

Icon color is set with the `color` prop and is inherited from the parent element by default.

## Spin

Use the `spin` property to apply a rotation animation to an icon. Alternatively, a spin animation utility such as `animate-spin` from Tailwind can also be used.
