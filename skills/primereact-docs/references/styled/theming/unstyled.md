# Unstyled Mode

Build fully customizable components with complete control over styling by disabling default themes and implementing your own design system.

## Architecture

The term `unstyled` is used to define an alternative styling approach instead of the default theming with design tokens. In unstyled mode the css variables of the design tokens and the css rule sets that utilize them are not
included. Here is an example of an Unstyled Checkbox, the core functionality and accessibility is provided whereas styling is not included. Unstyled components still need to be styled on your end, in the next sections, we'll cover the
styling solutions for both modes.

## Setup

Unstyled mode is enabled for the whole suite by enabling `unstyled` option during PrimeReact installation.

```tsx showLineNumbers
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { PrimeReactProvider } from '@primereact/core';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <PrimeReactProvider unstyled={true}>
            <App />
        </PrimeReactProvider>
    </StrictMode>
);
```

Alternatively even in the default styled mode, a particular component can still be used as unstyled by adding the `unstyled` prop of the component.

```tsx
import { Button } from '@primereact/ui/button';
import { Check } from '@primeicons/react/check';

export default function AlternativeButtonDemo() {
    return (
        <div className="flex justify-center">
            <Button unstyled>
                Check
                <Check />
            </Button>
        </div>
    );
}
```

## Example

Here is a sample that styles a button component with Tailwind CSS using [passthrough](https://v11.primereact.org/docs/passthrough) attributes. Before beginning, head over to the the pass through section at
[button](https://v11.primereact.org/docs/button) documentation to learn more about the components internals section. We'll be using the `root` element to add a custom style.

```tsx
import { Button } from '@primereact/ui/button';
import { Search } from '@primeicons/react/search';

export default function ButtonDemo() {
    return (
        <div className="flex justify-center">
            <Button
                unstyled
                pt-root-className="bg-teal-500 hover:bg-teal-700 active:bg-teal-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2 text-white text-lg font-bold"
            >
                Search
                <Search className="!text-lg !font-bold" />
            </Button>
        </div>
    );
}
```

## Global

A global configuration can be created at application level to avoid repetition via the global `pt` option so that the styles can be shared from a single location. A particular component can still override a global configuration with
its own `pt` property.

```tsx showLineNumbers
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { PrimeReactProvider } from '@primereact/core';

const globalPT = {
    button: {
        root: "bg-teal-500 hover:bg-teal-700 active:bg-teal-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2 text-white text-lg font-bold"
    }
    panel: {
        header: 'bg-primary text-primary-contrast border-primary',
        content: 'border-primary text-lg text-primary-700',
        title: 'bg-primary text-primary-contrast text-xl'
    }
};

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <PrimeReactProvider pt={globalPT}>
            <App />
        </PrimeReactProvider>
    </StrictMode>
);
```
