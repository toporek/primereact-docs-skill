# With React Router

Setting up PrimeReact in a React Router project.

{/* 
Start from our <a href="https://github.com/primefaces/primereact-examples/tree/main/react-router-quickstart-nextgen" target="_blank" rel="noopener noreferrer">React Router template</a>, pre-configured with PrimeReact.
 */}

## Installation

### Install Packages

Install PrimeReact and a theme package using your favorite package manager:

```bash
npm install primereact@11.0.0-rc.1 @primeuix/themes@3.0.0-rc.1
```

### PrimeReactProvider

Wrap your app with `PrimeReactProvider` in `app/root.tsx` so PrimeReact features are available across every route. Pass a theme preset such as Aura and your [PrimeUI](https://primeui.dev/pricing) license key to enable styling:

```tsx showLineNumbers {1,2,7-9}
import { Outlet } from 'react-router';
import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';

export default function App() {
    return (
        <PrimeReactProvider theme={{ preset: Aura }} license="PrimeUI-Commercial-Key...">
            <Outlet />
        </PrimeReactProvider>
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

- Ensure that you have the latest version of React Router and Node.js installed.
- Verify that your project structure is correct and that the `PrimeReactProvider` is properly wrapped around your application.
- Check the browser console for any errors related to PrimeReact components or themes.
- If you are using TypeScript, ensure that you have the necessary type definitions installed.
- Refer to the [PrimeReact GitHub repository](https://github.com/primefaces/primereact) for more information and support.
