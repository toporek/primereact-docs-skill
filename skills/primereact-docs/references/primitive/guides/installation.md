# Installation

Install PrimeReact and compose unstyled primitive components in your React project.

Start from our <a href="https://github.com/primefaces/primereact-examples/tree/main/nextjs-primitive-quickstart" target="_blank" rel="noopener noreferrer">Next.js template</a>, pre-configured with PrimeReact.

Primitive components ship **unstyled** — you compose the behavior and bring your own styles. They work in any React setup; the steps below show a Next.js example you can adapt to your own framework.

### Install Packages

Install PrimeReact using your favorite package manager:

```bash
npm install primereact
```

### PrimeReactProvider

Wrap your app with `PrimeReactProvider` so the primitives' shared context is available everywhere. No theme or preset is needed — you style everything yourself:

```tsx showLineNumbers title="components/prime-provider.tsx"
'use client';
import { PrimeReactProvider } from '@primereact/core';

export function PrimeProvider({ children }: { children: React.ReactNode }) {
    return <PrimeReactProvider>{children}</PrimeReactProvider>;
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

### Add a `cn` Helper (optional)

If you style with Tailwind, a `cn` helper makes merging class names easier. Install `tailwind-merge` and create `lib/utils.ts`:

```bash
npm install tailwind-merge
```

```ts showLineNumbers title="lib/utils.ts"
import { cn as _cn } from '@primeuix/utils';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: unknown[]) {
    return twMerge(_cn(...inputs));
}
```

### Verify

Render the unstyled `Button` primitive, styled with your `cn` helper, to confirm everything is wired up:

```tsx showLineNumbers {1}
import { Button } from 'primereact/button';
import { cn } from '@/lib/utils';

export default function VerifyInstallation() {
    return <Button className={cn('inline-flex items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800')}>Verify</Button>;
}
```

## Next Steps

[Browse the components](../components/autocomplete.md) and compose the unstyled primitives you need, styling them with any CSS solution.
