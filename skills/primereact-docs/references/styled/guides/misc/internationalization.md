# Internationalization and Localization

Translating component messages and configuring regional settings such as date formats and the first day of the week.

## Overview

Components ship with a set of built-in messages such as filter operator labels, month names and ARIA descriptions. These messages live in a locale registry that is shared across PrimeReact, PrimeVue and PrimeNG through the `@primeuix/locale` package, and are re-exported from `@primereact/core/locale`.

English is registered by default, so no configuration is required until another language is needed.

Setting a language is enough for components to pick it up. No per-component prop is involved. Switching the language below re-renders the calendar with translated month and day names, moves the first day of the week, and updates the button label.

## Import

```js
import { $t, $l, defineLocale, updateLocale, useLocale, Locale, LocaleService, en } from '@primereact/core/locale';
```

## Setting the Language

`Locale.use` selects the active language. Every component reading a message re-renders when it changes, so this works both at startup and later in response to a language switcher.

```js
import { Locale } from '@primereact/core/locale';

Locale.use('de');
```

Only `en` is built in, so any other language has to be registered first. See [Adding a Language](#adding-a-language) below.

`PrimeReactProvider` also accepts a `locale` prop, which sets the initial language for the components beneath it.

```jsx
import { PrimeReactProvider } from '@primereact/core';

<PrimeReactProvider locale="de">
    <App />
</PrimeReactProvider>;
```

## Adding a Language

`defineLocale` registers a new language.

```js
import { defineLocale, Locale } from '@primereact/core/locale';

defineLocale('es', {
    clear: 'Limpiar',
    apply: 'Aplicar',
    accept: 'Sí',
    reject: 'No',
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
});

Locale.use('es');
```

A registered language must be complete. Keys that are left out resolve to `undefined` rather than falling back to English, which renders as an empty label. The practical approach is to spread the built-in English messages and override from there:

```js
import { defineLocale, en } from '@primereact/core/locale';

defineLocale('es', {
    ...en,
    clear: 'Limpiar',
    apply: 'Aplicar'
});
```

The `en` object holds the built-in English messages and is exported for exactly this purpose. Ready-made translations from [PrimeLocale](#ready-made-translations) already cover every key, so spreading is only needed for hand-written translations.

The provider accepts a `locales` map, which registers languages and selects one in a single step. Anything listed here is registered before `locale` is applied.

```jsx
import { PrimeReactProvider } from '@primereact/core';

<PrimeReactProvider locale="es" locales={{ es: spanishMessages }}>
    <App />
</PrimeReactProvider>;
```

## Updating an Existing Language

`updateLocale` merges new values into a language that is already registered, leaving the remaining keys untouched. It is useful for overriding a handful of labels without redefining a full translation.

```js
import { updateLocale } from '@primereact/core/locale';

updateLocale('en', {
    clear: 'Reset',
    apply: 'Confirm'
});
```

If the language does not exist yet, `updateLocale` registers it, behaving like `defineLocale`.

## Reading Messages

### In Components

`useLocale` is the React hook for reading the active locale. It re-renders the calling component when the language changes.

```jsx
import { Button } from '@primereact/ui/button';
import { useLocale } from '@primereact/core/locale';

function ClearFilterButton({ onClear }) {
    const { t } = useLocale();

    return (
        <Button severity="secondary" onClick={onClear}>
            {t('clear')}
        </Button>
    );
}
```

| Field      | Description                                   |
| ---------- | --------------------------------------------- |
| `lang`     | Active language code, such as `en` or `de`.   |
| `messages` | Full message object of the active language.   |
| `t`        | Translates a key against the active language. |

Re-rendering on a language change relies on the context published by `PrimeReactProvider`, which applications normally have at their root. A component rendered outside any provider still reads the correct messages on first render, but will not update when the language changes later.

### Outside Components

`$t` performs the same lookup without a React context, which suits utilities, event handlers and module-level code.

```js
import { $t } from '@primereact/core/locale';

$t('clear'); // 'Clear'
```

Nested keys use dot notation.

```js
$t('aria.selectRow'); // 'Row Selected'
```

Messages containing placeholders accept replacement values. Positional placeholders such as `{0}` are filled from the argument order, while named ones are filled from an object.

```js
$t('searchMessage', 5); // '5 results are available'
$t('selectionMessage', 3); // '3 items selected'
$t('aria.stars', { star: 4 }); // '4 stars'
```

## Reacting to Language Changes

Language changes emit a `locale:change` event. Components handle this automatically through `useLocale`; the event is only needed for code living outside React, such as syncing a third-party library.

```js
import { LocaleService } from '@primereact/core/locale';

const onChange = ({ lang }) => console.log('Language is now', lang);

LocaleService.on('locale:change', onChange);

// remove the listener when it is no longer needed
LocaleService.off('locale:change', onChange);
```

## Inspecting the Registry

`$l` returns a facade over the registry, which helps when building a language switcher.

```js
import { $l } from '@primereact/core/locale';

$l().langs; // ['en', 'es']
$l().get('es'); // message object of the Spanish locale
```

## Message Keys

These components read their labels from the active language:

| Component  | Keys                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DatePicker | `dayNames`, `dayNamesShort`, `dayNamesMin`, `monthNames`, `monthNamesShort`, `today`, `weekHeader`, `clear`, `am`, `pm`, `firstDayOfWeek`, `dateFormat` |
| FileUpload | `fileSizeTypes`                                                                                                                                         |
| Paginator  | `aria.firstPageLabel`, `aria.prevPageLabel`, `aria.nextPageLabel`, `aria.lastPageLabel`, `aria.pageLabel`                                               |
| Sidebar    | `aria.toggleSidebar`                                                                                                                                    |

The registry holds a larger set covering filter operators, password strength labels, empty-state messages and the remaining `aria` labels. Those are reserved for components that do not consume them yet, so translating them has no visible effect today.

Not every entry is a string. `firstDayOfWeek` is a number, `showMonthAfterYear` is a boolean, and `dayNames`, `monthNames` and `fileSizeTypes` are arrays. `searchMessage` and similar entries carry a `{0}` placeholder.

The full set with default English values is exported as `en`, which can also be inspected at runtime:

```js
import { en } from '@primereact/core/locale';

Object.keys(en); // every top-level key
```

## Ready-Made Translations

Writing a translation from scratch is rarely necessary. The community maintained [PrimeLocale](https://github.com/primefaces/primelocale) repository publishes complete translations for 70+ languages, shared across all Prime libraries. Each file covers every built-in message key, so nothing is left resolving to `undefined`.

### Copying a File

Grab the JSON file for the desired language from the repository, for example `es.json`, and place it in the project.

Each file wraps its messages in a single key named after the language:

```json
{
    "es": {
        "clear": "Limpiar",
        "apply": "Aplicar",
        "aria": { "selectRow": "Seleccionar fila" }
    }
}
```

That wrapper has to be unwrapped before registering, otherwise every lookup resolves to `undefined`:

```js
import { defineLocale, Locale } from '@primereact/core/locale';
import es from './locales/es.json';

defineLocale('es', es.es);
Locale.use('es');
```

The same unwrapping applies when the language is registered through the provider:

```jsx
import { PrimeReactProvider } from '@primereact/core';
import es from './locales/es.json';

<PrimeReactProvider locale="es" locales={{ es: es.es }}>
    <App />
</PrimeReactProvider>;
```

### Installing the Package

The translations are also published to npm, which avoids maintaining copies by hand.

```bash
npm install primelocale
```

```js
import { defineLocale, Locale } from '@primereact/core/locale';
import { es } from 'primelocale/js/es.js';

defineLocale('es', es);
Locale.use('es');
```

The package entry points export the messages directly, so no unwrapping is needed there.

Regional variants are named with an underscore in the package and a hyphen in the JSON files. Brazilian Portuguese is `primelocale/js/pt_BR.js` when imported and `pt-BR.json` when copied.

### Adjusting a Translation

A ready-made translation can be tuned without editing the file, by layering overrides on top of it:

```js
defineLocale('es', es.es);
updateLocale('es', { clear: 'Borrar' });
```

Contributions of new languages and corrections are welcome in the PrimeLocale repository, and benefit every Prime library at once.

## Coming from v10

The locale helpers from `primereact/api` were replaced. The [migration guide](../migration/updating-to-v11.md) maps each one to its replacement.
