# Isolated Mode

Give an app its own theme, so several apps can share a page or render in shadow roots.

## Overview

By default every PrimeReact app on a page shares one theme. Its styles go to the document head and its design tokens to `:root`, so a second app on that page restyles the first one, and an app inside a shadow root does not see the styles at all.

Isolated mode gives an app its own theme. The app's root element, its components and its overlays carry a `data-p-theme` attribute with the app's key, every rule is scoped to that attribute, and its styles go into each root the app renders in, the document or a shadow root. Overlays appended to the body and the dark mode follow the same scope.

It is meant for micro frontends, embeddable widgets and web components, and an app that is alone on its page does not need it. The API is experimental and may change based on feedback.

## Setup

Pass the result of `withIsolation` to the `isolation` prop of `PrimeReactProvider` and keep the rest of the configuration. The provider reads it once on mount. Give the element the app renders into as `root`, so the app's own markup carries the key as well.

```tsx
import Aura from '@primeuix/themes/aura';
import { PrimeReactProvider } from '@primereact/core';
import { withIsolation } from '@primereact/core/isolation';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const isolation = withIsolation({ key: 'shop', root: container });

ReactDOM.createRoot(container).render(
    <React.StrictMode>
        <PrimeReactProvider theme={{ preset: Aura }} isolation={isolation}>
            <App />
        </PrimeReactProvider>
    </React.StrictMode>
);
```

## Root

The theme variables, such as `--p-content-border-color`, are defined on elements that carry the key. PrimeReact puts the key on every element it renders, but the provider renders no element of its own, so it cannot reach the app's own markup without `root`. With `root`, CSS written for the app reads the variables in the same way as the components do:

```css
.order-list {
    border: 1px solid var(--p-content-border-color);
    background: var(--p-content-background);
}
```

The root carries the key while the provider is mounted and loses it on unmount. Without `root`, only the elements PrimeReact renders read the variables.

## Key

The key names the app's scope. It may contain letters, digits, `_` and `-`, up to 128 characters. Without a key the browser picks a random one. When another app on the page already holds the key, the new app gets a `-2`, `-3` suffix.

A key is only needed when custom CSS refers to it, since the server derives it as well.

## CSS Layer

Scoping gives the theme rules a higher specificity than a plain selector. A plain rule such as `.p-button { ... }` loses to the scoped rule, whether it comes from the app or from the host page. `cssLayer` moves the theme into a cascade layer, and CSS without a layer wins again as in the default mode. Which setting fits depends on who writes the other CSS on the page.

The app owns the page: enable `cssLayer`, so overrides written for the app work as in the default mode.

The page belongs to someone else, as with a browser extension or an embedded widget: leave `cssLayer` off, so the page's own `.p-button` rules do not override the theme's rules. For a full separation from the host CSS, render the app in a shadow root. Isolated mode places its styles there.

```tsx
<PrimeReactProvider theme={{ preset: Aura, options: { cssLayer: true } }} isolation={isolation}>
```

## Isolation API

`useIsolation` returns the isolation of the current app, or `undefined` in the default mode. Use `retain` to bring the app's styles into a shadow root it does not render in yet, `hold` to put an element appended outside the app inside its scope, and `set` with `scopeCSS` to add custom CSS to the app's scope.

```tsx
import { useIsolation } from '@primereact/core';
import * as React from 'react';

export function Widget({ shadowRoot }) {
    const isolation = useIsolation();

    React.useEffect(() => {
        if (!isolation) return;

        const release = isolation.retain(shadowRoot);

        isolation.set('my-styles', isolation.scopeCSS('.my-card { padding: 1rem; }'));

        return () => {
            release();
            isolation.delete('my-styles');
        };
    }, [isolation, shadowRoot]);

    return null;
}
```

## Shadow Root

An app that keeps the default mode but renders components inside shadow roots uses `withShadowRoot` instead, which copies the page styles into the shadow roots that PrimeReact components render in. Isolated mode already does this, so the two options are not combined. Set the option on the outermost provider. A nested `ThemeProvider` does not inherit it.

```tsx
import Aura from '@primeuix/themes/aura';
import { PrimeReactProvider } from '@primereact/core';
import { withShadowRoot } from '@primereact/core/shadowroot';

<PrimeReactProvider theme={{ preset: Aura }} shadowRoot={withShadowRoot()}>
    <App />
</PrimeReactProvider>;
```

## Limits

Isolated mode keeps the app's theme and styles apart from other apps. It does not stop CSS on the page from matching the app's elements; only a shadow root does that. One isolated app inside another is not supported.
