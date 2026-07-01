# With Vite

Setting up PrimeReact in a Vite project.

Start from our <a href="https://github.com/primefaces/primereact-examples/tree/main/vite-quickstart-nextgen" target="_blank" rel="noopener noreferrer">Vite template</a>, pre-configured with PrimeReact.

## Installation

### Install Packages

Install PrimeReact and a theme package using your favorite package manager:

```bash
npm install primereact@11.0.0-rc.1 @primeuix/themes@3.0.0-rc.1
```

### PrimeReactProvider

Wrap your app with `PrimeReactProvider` in your main file (like `main.tsx` or `App.tsx`). This enables PrimeReact features everywhere in your app:

```tsx showLineNumbers {5,11-13}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PrimeReactProvider } from "@primereact/core";

...

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
        <App />
    </PrimeReactProvider>
  </StrictMode>,
)
```

### Theme

PrimeReact supports many themes. To use the Aura theme, import it and pass it to the provider together with your [PrimeUI](https://primeui.dev/pricing) license key:

```tsx showLineNumbers {1,7-9,13}
import Aura from '@primeuix/themes/aura';
import { PrimeReactProvider } from '@primereact/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const theme = {
    preset: Aura
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PrimeReactProvider theme={theme} license="PrimeUI-Commercial-Key...">
            <App />
        </PrimeReactProvider>
    </React.StrictMode>
);
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

- Ensure that you have the latest version of Vite and Node.js installed.
- Verify that your project structure is correct and that the `PrimeReactProvider` is properly wrapped around your application.
- Check the browser console for any errors related to PrimeReact components or themes.
- If you are using TypeScript, ensure that you have the necessary type definitions installed.
- Refer to the [PrimeReact GitHub repository](https://github.com/primefaces/primereact) for more information and support.
