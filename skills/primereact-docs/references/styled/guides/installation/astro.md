# With Astro

Setting up PrimeReact in an Astro project.

{/* 
Start from our <a href="https://github.com/primefaces/primereact-examples/tree/main/astro-quickstart-nextgen" target="_blank" rel="noopener noreferrer">Astro template</a>, pre-configured with PrimeReact.
 */}

## Installation

### Install Packages

Add the React integration, then install PrimeReact and a theme package:

```bash
npx astro add react
npm install primereact@11.0.0-rc.1 @primeuix/themes@3.0.0-rc.1
```

### PrimeReactProvider

Create a React component that wraps your UI with `PrimeReactProvider`, a theme preset such as Aura, and your [PrimeUI](https://primeui.dev/pricing) license key:

```tsx showLineNumbers {2,3,7-9}
// src/components/Providers.tsx
import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';
import type { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <PrimeReactProvider theme={{ preset: Aura }} license="PrimeUI-Commercial-Key...">
            {children}
        </PrimeReactProvider>
    );
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

```tsx
import { Button } from '@primereact/ui/button';

export default function VerifyDemo() {
    return (
        <div className="flex justify-center">
            <Button>Verify</Button>
        </div>
    );
}

```

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

## More Tips

- You can import and use only the components you need for a smaller bundle size.
- For icons, custom themes, and advanced setup, see the [PrimeReact documentation](https://primereact.dev/setup).

## Troubleshooting

If you encounter issues during installation or setup, check the following:

- Ensure that you have the latest version of Astro and Node.js installed.
- Verify that the `@astrojs/react` integration is enabled and that components using PrimeReact are hydrated with a `client:*` directive.
- Check the browser console for any errors related to PrimeReact components or themes.
- If you are using TypeScript, ensure that you have the necessary type definitions installed.
- Refer to the [PrimeReact GitHub repository](https://github.com/primefaces/primereact) for more information and support.
