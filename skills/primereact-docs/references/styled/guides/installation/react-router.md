# With React Router

Setting up PrimeReact in a React Router project.

Start from our <a href="https://github.com/primefaces/primereact-examples/tree/main/react-router-quickstart" target="_blank" rel="noopener noreferrer">React Router template</a>, pre-configured with PrimeReact.

## Installation

### Install Packages

Install PrimeReact and a theme package using your favorite package manager:

```bash
npm install @primereact/ui @primeuix/themes @primeicons/react
```

### PrimeReactProvider

Wrap your app with `PrimeReactProvider` in `app/root.tsx` so PrimeReact features are available across every route. Pass a theme preset such as Aura and your [PrimeUI](https://primeui.dev/pricing) license key to enable styling:

```tsx title="app/root.tsx" showLineNumbers {2,3,9}
import { Outlet } from 'react-router';
import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';

const primereact = {
    theme: {
        preset: Aura
    },
    license: 'PrimeUI-Commercial-Key...'
};

export default function App() {
    return (
        <PrimeReactProvider {...primereact}>
            <Outlet />
        </PrimeReactProvider>
    );
}
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
