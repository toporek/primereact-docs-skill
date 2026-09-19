# With Astro

Setting up PrimeReact in an Astro project.

Start from our <a href="https://github.com/primefaces/primereact-examples/tree/main/astro-quickstart" target="_blank" rel="noopener noreferrer">Astro template</a>, pre-configured with PrimeReact.

## Installation

### Install Packages

Install PrimeReact and a theme package using your favorite package manager:

```bash
npm install @primereact/ui @primeuix/themes @primeicons/react
```

### PrimeReactProvider

Create a React component that wraps your UI with `PrimeReactProvider`, a theme preset such as Aura, and your [PrimeUI](https://primeui.dev/pricing) license key:

```tsx title="src/components/Providers.tsx" showLineNumbers {1,2,9}
import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';
import type { ReactNode } from 'react';

const primereact = {
    theme: {
        preset: Aura
    },
    license: 'PrimeUI-Commercial-Key...'
};

export default function Providers({ children }: { children: ReactNode }) {
    return <PrimeReactProvider {...primereact}>{children}</PrimeReactProvider>;
}
```

Render it as an island in your `.astro` page with a `client:*` directive so it hydrates on the client:

```astro showLineNumbers {2,3,6-8}
---
import Providers from '../components/Providers';
import VerifyInstallation from '../components/VerifyInstallation';
---

<Providers client:load>
    <VerifyInstallation client:load />
</Providers>
```

### Verify

To verify that PrimeReact is installed correctly, you can create a simple component such as [Button](/button) and render it in your application.
Each component can be imported and registered individually so that you only include what you use for bundle optimization. Import path is available in the documentation of the corresponding component.

```tsx showLineNumbers {1,6}
import { Button } from '@primereact/ui/button';

export default function VerifyInstallation() {
    return (
        <div className="card flex justify-center">
            <Button>Verify</Button>
        </div>
    );
}
```

## Next Steps

Choose how you want to style your components — [Styled](../theming/styled.md), [Tailwind](../theming/tailwind.md), or [Unstyled](../theming/unstyled.md) — then [browse the components](../../components/autocomplete.md) and import only what you need.
