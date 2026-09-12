# With Next.js

Setting up PrimeReact Tailwind components in a Next.js project.

Start from our <a href="https://github.com/primefaces/primereact-examples/tree/main/nextjs-tailwind-quickstart" target="_blank" rel="noopener noreferrer">Next.js + Tailwind template</a>, pre-configured with PrimeReact.

## Install via CLI

PrimeReact's Tailwind components ship as a shadcn-compatible registry, so the shadcn CLI can scaffold everything for you. You need a project with Tailwind CSS v4 already set up.

### Initialize

Run `init` with the PrimeReact theme. This creates `components.json`, installs the base packages, adds the `cn` helper, and writes the design tokens (`--p-primary-*`, `--p-surface-*`) and the `tailwindcss-primeui` plugin to your global stylesheet:

```bash
npx shadcn@latest init -t next https://primereact.dev/r/theme.json
```

### Wrap with PrimeReactProvider

Wrap your app with `PrimeReactProvider` so component behavior and your [PrimeUI](https://primeui.dev/pricing) license are available everywhere — see the [PrimeReactProvider](#primereactprovider) snippet below.

### Add Components

Add any component by its registry URL:

```bash
npx shadcn@latest add https://primereact.dev/r/button.json
```

Then pick your colors — see [Theming](../theming.md).

## Manual installation

PrimeReact Tailwind components are distributed through a shadcn-compatible registry, each component is copied into your codebase and themed with CSS variables.

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

```css showLineNumbers title="app/globals.css" {4}
@import 'tailwindcss';
@import 'tailwindcss-primeui';

@custom-variant dark (&:where(.dark, .dark *));
```

The PrimeReact design tokens (`--p-primary-*`, `--p-surface-*`, …) live under `:root` and `.dark`. Add them by running `npx shadcn@latest add https://primereact.dev/r/theme.json`, or copy them from the [Theming](../theming.md) guide.

### PrimeReactProvider

Even in Tailwind mode, wrap your app with `PrimeReactProvider` so component behavior and your [PrimeUI](https://primeui.dev/pricing) license are available everywhere. Set `darkModeSelector` to the same `.dark` class used above:

```tsx showLineNumbers title="components/prime-provider.tsx" {7,10}
'use client';
import { PrimeReactProvider } from '@primereact/core';

const primereact = {
    theme: {
        options: {
            darkModeSelector: '.dark'
        }
    },
    license: 'PrimeUI-Commercial-Key...'
};

export function PrimeProvider({ children }: { children: React.ReactNode }) {
    return <PrimeReactProvider {...primereact}>{children}</PrimeReactProvider>;
}
```

Then wrap your app with it in `app/layout.tsx`:

```tsx showLineNumbers title="app/layout.tsx" {1,6}
import { PrimeProvider } from '@/components/prime-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <PrimeProvider>{children}</PrimeProvider>
            </body>
        </html>
    );
}
```

### Add Components

You can add a component with the shadcn CLI, or add it manually. For example, to add the Button component with the CLI:

```bash
npx shadcn@latest add https://primereact.dev/r/button.json
```

To add it manually instead, head to the [Button](../../components/button.md) component page and follow the install steps there.

Once added, import the component and render it to verify your setup:

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
