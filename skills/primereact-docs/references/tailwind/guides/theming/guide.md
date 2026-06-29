# Theming

Theme PrimeReact's Tailwind components with CSS variables and the tailwindcss-primeui plugin.

## Overview

Like shadcn/ui, the Tailwind components are themed entirely through **CSS variables**, design tokens defined on `:root`. The [`tailwindcss-primeui`](https://github.com/primefaces/tailwindcss-primeui) plugin maps those tokens to Tailwind utilities (`bg-primary`, `text-muted-color`, `border-surface`, …) that every component is built with, so editing a single variable re-themes the whole UI.

## How it works

Two pieces work together:

- **CSS variables**, PrimeUI design tokens (`--p-primary-*`, `--p-surface-*`, and semantic tokens) added to your global stylesheet's `:root`.
- **tailwindcss-primeui**, a Tailwind plugin that turns those tokens into utility classes (`bg-primary`, `text-surface-500`, `text-color`, `text-muted-color`, `border-surface`, `rounded-border`, …) and a dark-mode variant. Install it during [installation](../installation.md) and import it in your global CSS:

```css title="app/globals.css"
@import 'tailwindcss';

@import 'tailwindcss-primeui';
```

## CSS Variables

The PrimeReact registry ships as a `registry:style`, so when you set it up these tokens are written to your global stylesheet. This is the default theme:

```css title="app/globals.css"
:root {
    --p-primary-50: oklch(98.5% 0 0);
    --p-primary-100: oklch(97% 0 0);
    --p-primary-200: oklch(92.2% 0 0);
    --p-primary-300: oklch(87% 0 0);
    --p-primary-400: oklch(70.8% 0 0);
    --p-primary-500: oklch(55.6% 0 0);
    --p-primary-600: oklch(43.9% 0 0);
    --p-primary-700: oklch(37.1% 0 0);
    --p-primary-800: oklch(26.9% 0 0);
    --p-primary-900: oklch(20.5% 0 0);
    --p-primary-950: oklch(14.5% 0 0);
    --p-surface-0: oklch(100% 0 0);
    --p-surface-50: oklch(98.5% 0 0);
    --p-surface-100: oklch(97% 0 0);
    --p-surface-200: oklch(92.2% 0 0);
    --p-surface-300: oklch(87% 0 0);
    --p-surface-400: oklch(70.8% 0 0);
    --p-surface-500: oklch(55.6% 0 0);
    --p-surface-600: oklch(43.9% 0 0);
    --p-surface-700: oklch(37.1% 0 0);
    --p-surface-800: oklch(26.9% 0 0);
    --p-surface-900: oklch(20.5% 0 0);
    --p-surface-950: oklch(14.5% 0 0);
    --p-content-border-radius: 6px;
    --p-primary-color: var(--p-primary-500);
    --p-primary-contrast-color: var(--p-surface-0);
    --p-primary-hover-color: var(--p-primary-600);
    --p-primary-active-color: var(--p-primary-700);
    --p-content-border-color: var(--p-surface-200);
    --p-content-hover-background: var(--p-surface-100);
    --p-content-hover-color: var(--p-surface-800);
    --p-highlight-background: var(--p-primary-50);
    --p-highlight-color: var(--p-primary-700);
    --p-highlight-focus-background: var(--p-primary-100);
    --p-highlight-focus-color: var(--p-primary-800);
    --p-text-color: var(--p-surface-700);
    --p-text-hover-color: var(--p-surface-800);
    --p-text-muted-color: var(--p-surface-500);
    --p-text-hover-muted-color: var(--p-surface-600);
}

@media (prefers-color-scheme: dark) {
    :root {
        --p-primary-color: var(--p-primary-400);
        --p-primary-contrast-color: var(--p-surface-900);
        --p-primary-hover-color: var(--p-primary-300);
        --p-primary-active-color: var(--p-primary-200);
        --p-content-border-color: var(--p-surface-700);
        --p-content-hover-background: var(--p-surface-800);
        --p-content-hover-color: var(--p-surface-0);
        --p-highlight-background: color-mix(in srgb, var(--p-primary-400), transparent 84%);
        --p-highlight-color: rgba(255, 255, 255, 0.87);
        --p-highlight-focus-background: color-mix(in srgb, var(--p-primary-400), transparent 76%);
        --p-highlight-focus-color: rgba(255, 255, 255, 0.87);
        --p-text-color: var(--p-surface-0);
        --p-text-hover-color: var(--p-surface-0);
        --p-text-muted-color: var(--p-surface-400);
        --p-text-hover-muted-color: var(--p-surface-300);
    }
}
```

### Token groups

- **Primary scale**, `--p-primary-50` … `--p-primary-950`, the accent ramp (neutral gray by default).
- **Surface scale**, `--p-surface-0` … `--p-surface-950`, the neutrals used for backgrounds, borders and text.
- **Semantic tokens**, resolve to the scales and are what components actually reference: `--p-primary-color`, `--p-primary-contrast-color`, `--p-primary-hover-color`, `--p-primary-active-color`, `--p-text-color`, `--p-text-muted-color`, `--p-content-border-color`, `--p-content-hover-background`, `--p-highlight-background` / `--p-highlight-color`, and `--p-content-border-radius` for rounding.

## Customizing the theme

### Primary color

The default primary ramp is neutral gray. Point it at any palette, for example Tailwind's built-in `blue`, whose tokens are exposed as `--color-*` variables in Tailwind v4:

```css title="app/globals.css"
:root {
    --p-primary-50: var(--color-blue-50);
    --p-primary-100: var(--color-blue-100);
    --p-primary-200: var(--color-blue-200);
    --p-primary-300: var(--color-blue-300);
    --p-primary-400: var(--color-blue-400);
    --p-primary-500: var(--color-blue-500);
    --p-primary-600: var(--color-blue-600);
    --p-primary-700: var(--color-blue-700);
    --p-primary-800: var(--color-blue-800);
    --p-primary-900: var(--color-blue-900);
    --p-primary-950: var(--color-blue-950);
}
```

The semantic tokens (`--p-primary-color`, hover, active, contrast) follow the ramp automatically, so every component updates at once.

### Surface color

Remap `--p-surface-*` the same way to change the neutral tone, for example to one of Tailwind's neutral palettes like `zinc` (or `slate`, `stone`, `neutral`). Note `--p-surface-0` is pure white, so map it to `--color-white`:

```css title="app/globals.css"
:root {
    --p-surface-0: var(--color-white);
    --p-surface-50: var(--color-zinc-50);
    --p-surface-100: var(--color-zinc-100);
    --p-surface-200: var(--color-zinc-200);
    --p-surface-300: var(--color-zinc-300);
    --p-surface-400: var(--color-zinc-400);
    --p-surface-500: var(--color-zinc-500);
    --p-surface-600: var(--color-zinc-600);
    --p-surface-700: var(--color-zinc-700);
    --p-surface-800: var(--color-zinc-800);
    --p-surface-900: var(--color-zinc-900);
    --p-surface-950: var(--color-zinc-950);
}
```

### Border radius

`--p-content-border-radius` controls how rounded the components are:

```css title="app/globals.css"
:root {
    --p-content-border-radius: 10px;
}
```

## Dark mode

By default the dark tokens apply under `@media (prefers-color-scheme: dark)`, following the user's system setting. To toggle dark mode yourself, move the dark overrides into a class selector and add that class to your `<html>` element:

```css title="app/globals.css"
.dark {
    --p-primary-color: var(--p-primary-400);
    --p-primary-contrast-color: var(--p-surface-900);
    /* …rest of the dark overrides… */
}
```

```tsx
<html className="dark">...</html>
```

## Using tokens in your own markup

Because the tokens are exposed as utilities by `tailwindcss-primeui`, you can style your own elements to match the components:

```tsx
<div className="bg-surface-0 text-color border border-surface rounded-border p-4">
    <span className="text-primary">Themed with the same tokens</span>
</div>
```

## Reference

- [tailwindcss-primeui](https://github.com/primefaces/tailwindcss-primeui), the Tailwind plugin and the full list of utilities it generates.
