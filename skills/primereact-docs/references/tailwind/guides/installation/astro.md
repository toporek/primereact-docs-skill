# With Astro

Setting up PrimeReact Tailwind components in an Astro project.

Start from our <a href="https://github.com/primefaces/primereact-examples/tree/main/astro-tailwind-quickstart" target="_blank" rel="noopener noreferrer">Astro + Tailwind template</a>, pre-configured with PrimeReact.

## Install via CLI

PrimeReact's Tailwind components ship as a shadcn-compatible registry, so the shadcn CLI can scaffold everything for you. You need a project with Tailwind CSS v4 already set up.

### Initialize

Run `init` with the PrimeReact theme. This creates `components.json`, installs the base packages, adds the `cn` helper, and writes the design tokens (`--p-primary-*`, `--p-surface-*`) and the `tailwindcss-primeui` plugin to your global stylesheet:

```bash
npx shadcn@latest init -t astro https://primereact.dev/r/theme.json
```

### Wrap with PrimeReactProvider

Wrap your components with `PrimeReactProvider` so component behavior and your [PrimeUI](https://primeui.dev/pricing) license are available — see the [PrimeReactProvider](#primereactprovider) snippet below (in Astro, render it as a React island).

### Add Components

Add any component by its registry URL:

```bash
npx shadcn@latest add https://primereact.dev/r/button.json
```

Then pick your colors — see [Theming](../theming.md).

## Manual installation

PrimeReact Tailwind components are distributed through a shadcn-compatible registry, each component is copied into your codebase, so there is no theme file or runtime theme provider to set up. In Astro, render the components as React islands.

### Install Packages

Install PrimeReact along with the icon package and the Tailwind utilities the components rely on:

```bash
npm install primereact @primeicons/react tailwindcss-primeui tailwind-merge
```

### Add the `cn` Helper

The components rely on a `cn` utility to merge class names. Create `lib/utils.ts` and add the helper:

```ts showLineNumbers title="lib/utils.ts"
import { cn as _cn } from '@primeuix/utils';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: unknown[]) {
    return twMerge(_cn(...inputs));
}
```

### Set up Global Styles

Import Tailwind and the `tailwindcss-primeui` plugin in your global stylesheet, and register the `dark` variant so utilities and components respond to a `.dark` class:

```css showLineNumbers title="src/styles/global.css" {4}
@import 'tailwindcss';
@import 'tailwindcss-primeui';

@custom-variant dark (&:where(.dark, .dark *));
```

The PrimeReact design tokens (`--p-primary-*`, `--p-surface-*`, …) live under `:root` and `.dark`. Add them by running `npx shadcn@latest add https://primereact.dev/r/theme.json`, or copy them from the [Theming](../theming.md) guide.

### PrimeReactProvider

Wrap your components with `PrimeReactProvider` so component behavior and your [PrimeUI](https://primeui.dev/pricing) license are available. Set `darkModeSelector` to the same `.dark` class used above:

```tsx showLineNumbers title="src/components/Providers.tsx" {7,10}
import { PrimeReactProvider } from '@primereact/core';
import type { ReactNode } from 'react';

const primereact = {
    theme: {
        options: {
            darkModeSelector: '.dark'
        }
    },
    license: 'PrimeUI-Commercial-Key...'
};

export default function Providers({ children }: { children: ReactNode }) {
    return <PrimeReactProvider {...primereact}>{children}</PrimeReactProvider>;
}
```

Render it as an island in your `.astro` page with a `client:*` directive so it hydrates on the client:

```astro showLineNumbers title="src/pages/index.astro"
---
import Providers from '../components/Providers';
---

<Providers client:load>
    <!-- render PrimeReact components here -->
</Providers>
```

### Add Components

You can add a component with the shadcn CLI, or add it manually. For example, to add the Button component with the CLI:

```bash
npx shadcn@latest add https://primereact.dev/r/button.json
```

To add it manually instead, head to the [Button](../../components/button.md) component page and follow the install steps there.

Once added, import the component into a React island and render it with a `client:*` directive to verify your setup:

```tsx showLineNumbers {1}
import { Button } from '@/components/ui/button';

export default function VerifyInstallation() {
    return (
        <div className="card flex justify-center">
            <Button>Verify</Button>
        </div>
    );
}
```

## Next Steps

[Theme your components](../theming.md) with CSS variables, then [browse the components](../../components/button.md) to add and customize the ones you need.
