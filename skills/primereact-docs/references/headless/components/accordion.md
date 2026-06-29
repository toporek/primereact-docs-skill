# useAccordion

Hooks that manage accordion state, keyboard navigation, and ARIA attributes.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { useAccordion, useAccordionPanel } from '@primereact/headless/accordion';

export default function BasicDemo() {
    const accordion = useAccordion({ defaultValue: '1' });

    const panel1 = useAccordionPanel({ value: '1', context: accordion });
    const panel2 = useAccordionPanel({ value: '2', context: accordion });
    const panel3 = useAccordionPanel({ value: '3', context: accordion });

    const items = [
        { panel: panel1, title: 'What is PrimeReact?', content: 'PrimeReact is a rich set of open source UI components for React.' },
        { panel: panel2, title: 'How to get started?', content: 'Install PrimeReact via npm and import the components you need.' },
        { panel: panel3, title: 'What about accessibility?', content: 'All components follow WAI-ARIA guidelines with full keyboard support.' }
    ];

    return (
        <div {...accordion.rootProps} className="max-w-md mx-auto">
            {items.map(({ panel, title, content }) => (
                <div key={title} {...panel.panelProps} className="border-b border-surface-200 dark:border-surface-700">
                    <div {...panel.headerProps}>
                        <button
                            {...panel.triggerProps}
                            className="flex items-center justify-between w-full py-3 px-4 text-left cursor-pointer text-muted-color hover:text-color transition focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-primary"
                        >
                            <span>{title}</span>
                            <span {...panel.indicatorProps} className="transition-transform duration-200 data-[open]:rotate-180">
                                <ChevronDown />
                            </span>
                        </button>
                    </div>
                    {panel.state.open && (
                        <div {...panel.contentProps} className="px-4 pb-3 text-surface-600 dark:text-surface-300 text-sm">
                            {content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

```

## Usage

```tsx
import { useAccordion, useAccordionPanel } from '@primereact/headless/accordion';
```

```tsx
const accordion = useAccordion({ defaultValue: '1' });
const { rootProps } = accordion;

const { panelProps, headerProps, triggerProps, contentProps, indicatorProps, state } = useAccordionPanel({
    value: '1',
    context: accordion
});

<div {...rootProps}>
    <div {...panelProps}>
        <div {...headerProps}>
            <button {...triggerProps}>
                <span {...indicatorProps} />
            </button>
        </div>
        {state.open && <div {...contentProps}></div>}
    </div>
</div>;
```

`useAccordion` manages root state while `useAccordionPanel` consumes that context to return prop objects for each panel element, see [Primitive](../../primitive/components/accordion.md) for a component-based API.

## Features

- **Two-hook architecture**, `useAccordion` owns root state and keyboard focus cycling; `useAccordionPanel` consumes its context to render individual panels
- **Single or multiple expansion**, one open panel at a time or an array of open keys, switchable via the `multiple` flag
- **Controlled or uncontrolled**, drive the active key(s) from outside or let the hook manage its own state
- **Focus-triggered expansion**, opt into `openOnFocus` to open a panel the moment its trigger is focused via keyboard
- **Imperative controls**, `updateValue()` toggles a key and `isItemActive()` checks open state from custom code paths
- **Full render control**, `state.open` lets you conditionally mount content, pair with CSS, or wire up animation hooks

## Working with callbacks

### Controlled active panel

Drive the open panel from outside state by pairing `value` with `onValueChange`.

```tsx
const [value, setValue] = React.useState<string | null>('1');

const accordion = useAccordion({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

`onValueChange` receives `{ originalEvent, value }`, `value` is a single key in single mode or the new array in multiple mode.

### Multiple open panels

Set `multiple` to keep several panels open at once. Both `value` and `defaultValue` become arrays.

```tsx
const accordion = useAccordion({
    multiple: true,
    defaultValue: ['1', '2'],
    onValueChange: (e) => console.log(e.value) // string[]
});
```

### Imperative toggling from custom UI

Use `updateValue` to toggle panels from buttons that live outside the accordion tree, such as a sidebar or toolbar.

```tsx
const accordion = useAccordion({ multiple: true });

<button onClick={(e) => accordion.updateValue(e, '3')}>Toggle section 3</button>;

if (accordion.isItemActive('2')) {
    // run logic only when panel 2 is open
}
```

In single mode `updateValue` toggles between the key and `null`; in multiple mode it adds or removes the key from the array.

### Animated enter/leave with `state.open`

Because the hook leaves content rendering to you, pair `state.open` with a motion primitive to animate transitions.

```tsx
const { contentProps, state } = useAccordionPanel({ value: '1', context: accordion });

<AnimatePresence>
    {state.open && (
        <motion.div {...contentProps} initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
            Panel content
        </motion.div>
    )}
</AnimatePresence>;
```

For a built-in approach, use the [useMotion](motion.md) hook alongside `state.open`.

## Styling with data attributes

Every prop object includes `data-scope="accordion"` and a `data-part` attribute. State-dependent attributes are applied automatically so styling can stay in CSS.

| Scope       | Part      | States                                      |
| ----------- | --------- | ------------------------------------------- |
| `accordion` | `panel`   | `data-open`, `data-closed`, `data-disabled` |
| `accordion` | `trigger` | `data-content-open`, `data-content-closed`  |
| `accordion` | `content` | `data-open`, `data-closed`                  |

```css
[data-scope='accordion'][data-part='trigger'] {
    font-weight: 600;
}

[data-scope='accordion'][data-part='content'][data-open] {
    animation: slideDown 200ms ease-out;
}

[data-scope='accordion'][data-part='content'][data-closed] {
    animation: slideUp 200ms ease-out;
}

[data-scope='accordion'][data-part='panel'][data-disabled] {
    opacity: 0.5;
}

[data-scope='accordion'][data-part='trigger'][data-content-open] {
    color: blue;
    font-weight: 700;
}
```

## API

### useAccordion

> **`useAccordion` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/accordion or the installed `@primereact/types`.

### useAccordionPanel

> **`useAccordionPanel` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/accordion or the installed `@primereact/types`.

## Accessibility

Arrow keys move between headers, Home/End jump to first/last, and Enter or Space toggles the focused panel. See [Primitive](../../primitive/components/accordion.md#accessibility) for full WAI-ARIA compliance details.
