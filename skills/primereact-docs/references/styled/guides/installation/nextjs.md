# With Next.js

Setting up PrimeReact in a Next.js project.

Start from our <a href="https://github.com/primefaces/primereact-examples/tree/main/nextjs-quickstart-nextgen" target="_blank" rel="noopener noreferrer">Next.js template</a>, pre-configured with PrimeReact.

## Installation

### Install Packages

Install PrimeReact and a theme package using your favorite package manager:

```bash
npm install primereact@11.0.0-rc.1 @primeuix/themes@3.0.0-rc.1
```

### PrimeReactProvider

Create a `prime-ssr-provider.tsx` file in the root of your project and add the following code. The provider configuration requires a `theme` to style the components and a `license` key to activate your commercial license, available from your [PrimeUI](https://primeui.dev/pricing) account:

```tsx showLineNumbers {26}
'use client';
import { PrimeReactProvider, PrimeReactStyleSheet } from '@primereact/core';
import { useServerInsertedHTML } from 'next/navigation';
import * as React from 'react';
import Aura from '@primeuix/themes/aura';

const styledStyleSheet = new PrimeReactStyleSheet();

export default function PrimeSSRProvider({
    children
}: Readonly<{
    children?: React.ReactNode;
}>) {
    useServerInsertedHTML(() => {
        const styleElements = styledStyleSheet.getAllElements();

        styledStyleSheet.clear();

        return <>{styleElements}</>;
    });

    const primereact = {
        theme: {
            preset: Aura
        },
        license: 'PrimeUI-Commercial-Key...'
    };

    return (
        <PrimeReactProvider {...primereact} stylesheet={styledStyleSheet}>
            {children}
        </PrimeReactProvider>
    );
}
```

### Add SSRProvider

Import the `PrimeSSRProvider` in your root `layout.tsx` file and wrap your app with it.

```tsx showLineNumbers {2,12}
...
import PrimeSSRProvider from './prime-ssr-provider';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <PrimeSSRProvider>{children}</PrimeSSRProvider>
            </body>
        </html>
    );
}
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
import { Github } from '@primeicons/react/github';

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

- Ensure that you have the latest version of Next.js and Node.js installed.
- Verify that your project structure is correct and that the `PrimeReactProvider` is properly wrapped around your application.
- Check the browser console for any errors related to PrimeReact components or themes.
- If you are using TypeScript, ensure that you have the necessary type definitions installed.
- Refer to the [PrimeReact GitHub repository](https://github.com/primefaces/primereact) for more information and support.
