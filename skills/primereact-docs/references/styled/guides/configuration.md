# Configuration

Application wide configuration for PrimeReact.

## Provider

Wrap your app with `PrimeReactProvider` in your main file (like `main.tsx` or `App.tsx`). This enables PrimeReact features everywhere in your app:

```tsx showLineNumbers {10, 12}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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

## License

PrimeReact is a commercially licensed library. Provide your license key via the `license` property of the provider to activate it. You can obtain a key from your [PrimeUI](https://primeui.dev/pricing) account.

```tsx showLineNumbers {4}
import { PrimeReactProvider } from '@primereact/core';

ReactDOM.createRoot(document.getElementById('root')).render(
    <PrimeReactProvider license="PrimeUI-Commercial-Key...">
        <App />
    </PrimeReactProvider>
);
```

## Theme

Style mode offers theming based on a design token based architecture. See the [styled mode](https://primereact.dev/docs/theming/styled) documentation for details such as building your own theme.

```tsx full showLineNumbers {2,5-12,16}
...
import Aura from '@primeuix/themes/aura';
import { PrimeReactProvider } from '@primereact/core';

const theme = {
    preset: Aura,
    options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false,
        cssVariables: true,
        scoped: false
    }
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PrimeReactProvider theme={theme}>
            <App />
        </PrimeReactProvider>
    </React.StrictMode>
);
```

## Unstyled

Unstyled mode instructs the components not to add any built-in style classes so that they can be styled using custom css or libraries like Tailwind and Bootstrap. Visit Unstyled mode documentation for more information.

```tsx showLineNumbers {6}
import { PrimeReactProvider } from '@primereact/core';
...

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PrimeReactProvider unstyled>
            <App />
        </PrimeReactProvider>
    </React.StrictMode>
);
```

The same prop works on a single component, which takes precedence over the provider. This suits an application that is themed overall but has one screen styled differently.

```tsx
<Select.Root unstyled>…</Select.Root>
```

There is also a third option that does not involve the flag at all. Importing from `primereact` gives the unstyled primitives directly, so the theming layer never enters the bundle:

```tsx
import { Select } from '@primereact/ui/select'; // themed, opt out with `unstyled`
import { Select } from 'primereact/select'; // unstyled by construction
```

## PassThrough

Defines the shared pass through properties per component type. Visit the [Pass Through Props](https://primereact.dev/docs/passthrough) documentation for more information.

```tsx showLineNumbers {4-8,12}
import { PrimeReactProvider } from '@primereact/core';
...

const pt = {
    slider: {
        handle: { className: 'bg-primary text-primary-contrast' }
    }
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PrimeReactProvider pt={pt}>
            <App />
        </PrimeReactProvider>
    </React.StrictMode>
);
```

## PassThrough Options

Used to configure the `ptOptions` properties of components. The `mergeSections` defines whether the sections from the main configuration gets added and the `mergeProps` controls whether to override or merge the defined props.
Defaults are `true` for `mergeSections` and `false` for `mergeProps`.

```tsx showLineNumbers {4-7,11}
import { PrimeReactProvider } from '@primereact/core';
...

const ptOptions = {
    mergeSections: true,
    mergeProps: false
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PrimeReactProvider ptOptions={ptOptions}>
            <App />
        </PrimeReactProvider>
    </React.StrictMode>
);
```

## CSP

Components inject their styles as `<style>` elements at runtime. Under a Content Security Policy that restricts `style-src` to a nonce, those elements are blocked unless they carry the same nonce. The `csp.nonce` property applies it to every stylesheet PrimeReact injects.

```tsx showLineNumbers {4}
import { PrimeReactProvider } from '@primereact/core';

ReactDOM.createRoot(document.getElementById('root')).render(
    <PrimeReactProvider csp={{ nonce: 'YOUR_NONCE_VALUE' }}>
        <App />
    </PrimeReactProvider>
);
```

The nonce has to match the one sent in the response header, and it is applied when a stylesheet is first created.

```
Content-Security-Policy: style-src 'nonce-YOUR_NONCE_VALUE';
```

## Locale

Sets the language used for built-in component messages such as filter operators, month names and screen reader labels. English is registered by default, so this is only needed when another language is required. See the [Internationalization and Localization](misc/internationalization.md) documentation for registering languages, translating messages and ready-made translations.

```tsx showLineNumbers {4}
import { PrimeReactProvider } from '@primereact/core';

ReactDOM.createRoot(document.getElementById('root')).render(
    <PrimeReactProvider locale="de">
        <App />
    </PrimeReactProvider>
);
```

Languages other than English have to be registered before they can be selected. The `locales` property registers them and selects one in a single step.

```tsx showLineNumbers {2,5}
import { PrimeReactProvider } from '@primereact/core';
import { de } from 'primelocale/js/de.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <PrimeReactProvider locale="de" locales={{ de }}>
        <App />
    </PrimeReactProvider>
);
```

## InputVariant

Input fields come in two styles, default is `outlined` with borders around the field whereas `filled` alternative adds a background color to the field.
Applying `p-variant-filled` to an ancestor of an input enables the filled style. If you prefer to use filled inputs in the entire application, use a global container such as the document body or the application element to apply the style class.
Note that in case you add it to the application element, components that are teleported to the document body such as Dialog will not be able to display filled inputs as they are not a descendant of the application root element in the DOM tree,
to resolve this case set inputVariant to `filled` at PrimeReactProvider as well.

```tsx showLineNumbers {6}
import { PrimeReactProvider } from '@primereact/core';
...

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PrimeReactProvider inputVariant="filled">
            <App />
        </PrimeReactProvider>
    </React.StrictMode>
);
```

## ZIndex

Overlays are layered automatically, and these values set the base each layer starts from. Raise them when PrimeReact overlays need to sit above other fixed elements on the page.

```tsx showLineNumbers {4-9}
import { PrimeReactProvider } from '@primereact/core';

ReactDOM.createRoot(document.getElementById('root')).render(
    <PrimeReactProvider
        zIndex={{
            modal: 1100,
            overlay: 1000,
            menu: 1000,
            tooltip: 1100
        }}
    >
        <App />
    </PrimeReactProvider>
);
```

| Key       | Default | Applies to                      |
| --------- | ------- | ------------------------------- |
| `modal`   | 1100    | Dialog, Drawer and other modals |
| `overlay` | 1000    | Select, DatePicker, Popover     |
| `menu`    | 1000    | Menu, ContextMenu               |
| `tooltip` | 1100    | Tooltip                         |

## Defaults

Sets default props per component, applied everywhere that component is used. Anything passed at the call site still wins.

```tsx showLineNumbers {5-9}
import { PrimeReactProvider } from '@primereact/core';

ReactDOM.createRoot(document.getElementById('root')).render(
    <PrimeReactProvider
        defaults={{
            Button: { props: { size: 'small', severity: 'secondary' } },
            InputText: { props: { variant: 'filled' } },
            Dialog: { props: { modal: true, closeOnEscape: false } }
        }}
    >
        <App />
    </PrimeReactProvider>
);
```

A call site still overrides what it sets:

```tsx
// Renders large, not small.
<Button size="large">Save</Button>
```

This is the place for house style that would otherwise be repeated on every instance, or wrapped in a local component just to change a default.

### Keys

The key is the component's registered name. For compound components that name includes the part, and four spellings are accepted so the config reads the way you want it to:

```tsx
<PrimeReactProvider
    defaults={{
        'Checkbox.Root': { props: { size: 'small' } },  // registered name
        CheckboxRoot: { props: { size: 'small' } },     // without the dot
        Checkbox: { Root: { props: { size: 'small' } } }, // nested
        button: { props: { size: 'small' } }            // lowercase
    }}
>
```

### Event handlers

Handlers work here too, and they run alongside the one at the call site rather than replacing it. This suits cross-cutting behaviour such as analytics:

```tsx
<PrimeReactProvider defaults={{ Button: { props: { onClick: track } } }}>
    <Button onClick={save}>Save</Button>
</PrimeReactProvider>
```

Clicking runs `track` and then `save`. The same chaining applies to any function prop.

### Dynamic defaults

An entry can be a function that returns the props to apply. It receives the base instance, which carries `name`, `id` and the props passed at the call site as `inProps`:

```tsx
<PrimeReactProvider
    defaults={{
        Button: (instance) => ({
            props: { size: instance.inProps?.severity === 'danger' ? 'large' : 'small' }
        })
    }}
>
```

## FilterMatchModeOptions

Defines which match modes appear in filter menus, grouped by data type. Components such as DataTable read this when building their filter dropdowns.

```tsx showLineNumbers {2,6-9}
import { PrimeReactProvider } from '@primereact/core';
import { FilterMatchMode } from '@primereact/ui/datatable';

ReactDOM.createRoot(document.getElementById('root')).render(
    <PrimeReactProvider
        filterMatchModeOptions={{
            text: [FilterMatchMode.CONTAINS, FilterMatchMode.EQUALS],
            numeric: [FilterMatchMode.EQUALS, FilterMatchMode.LESS_THAN],
            date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_BEFORE]
        }}
    >
        <App />
    </PrimeReactProvider>
);
```

Leaving it unset keeps the built-in list, which covers the common match modes for each type.

## Stylesheet

Collects the styles of rendered components so they can be sent with the server response instead of being injected after hydration. This is what prevents a flash of unstyled content in server-rendered applications.

```tsx showLineNumbers {2,5,9}
'use client';
import { PrimeReactProvider, PrimeReactStyleSheet } from '@primereact/core';

const styledStyleSheet = new PrimeReactStyleSheet();

export default function Provider({ children }) {
    return <PrimeReactProvider stylesheet={styledStyleSheet}>{children}</PrimeReactProvider>;
}
```

The [Next.js installation guide](installation/nextjs.md) shows the full setup, including how the collected styles are flushed with `useServerInsertedHTML`.
