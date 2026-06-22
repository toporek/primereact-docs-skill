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

```tsx showLineNumbers {1,3-4,6-9,12-16,19}
import { useAccordion, useAccordionPanel } from '@primereact/headless/accordion';

const accordion = useAccordion({ defaultValue: '1' });
const { rootProps } = accordion;

const { panelProps, headerProps, triggerProps, contentProps, indicatorProps, state } = useAccordionPanel({
    value: '1',
    context: accordion
});

return (
    <div {...rootProps}>
        <div {...panelProps}>
            <div {...headerProps}>
                <button {...triggerProps}>
                    <span {...indicatorProps} />
                </button>
            </div>
            {state.open && <div {...contentProps}></div>}
        </div>
    </div>
);
```

`useAccordion` manages root state while `useAccordionPanel` consumes that context to return prop objects for each panel element — see [Primitive](../../primitive/accordion/features.md) for a component-based API.

## Features

- Two-hook architecture: `useAccordion` for root state, `useAccordionPanel` for per-panel behavior
- Returns spread-ready prop objects (`rootProps`, `panelProps`, `triggerProps`, `contentProps`, `headerProps`, `indicatorProps`)
- Controlled and uncontrolled value management
- Single or multiple panel expansion
- Exposes `state`, `updateValue`, and `isItemActive` for custom logic
- `openOnFocus` option for focus-triggered expansion

## Behavior

### Default Value

Use `defaultValue` to set initially expanded panels.

```tsx
const accordion = useAccordion({ defaultValue: '1' });
```

### Controlled

Use `value` and `onValueChange` for full programmatic control. The hook never updates its own state in controlled mode.

```tsx
const [value, setValue] = React.useState<string | null>('1');
const accordion = useAccordion({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

The `onValueChange` callback receives `{ originalEvent, value }` where `value` is the new active panel key (or array in multiple mode).

### Multiple

Set `multiple` to allow multiple panels to be open simultaneously. In this mode, `value`/`defaultValue` accepts an array.

```tsx
const accordion = useAccordion({ multiple: true, defaultValue: ['1', '2'] });
```

### Disabled

Set `disabled` on the root to disable all panels, or pass `disabled` to individual `useAccordionPanel` calls.

```tsx
// Disable all panels
const accordion = useAccordion({ disabled: true });

// Disable a specific panel
const panel = useAccordionPanel({ value: '2', disabled: true, context: accordion });
```

When disabled, `triggerProps` sets `tabIndex` to `-1`, adds `aria-disabled`, and suppresses `onClick`/`onKeyDown` handlers.

### Open on Focus

Set `openOnFocus` to expand panels when their trigger receives focus via keyboard navigation (Arrow keys, Home, End).

```tsx
const accordion = useAccordion({ openOnFocus: true });
```

### Using `updateValue` and `isItemActive`

The hook exposes imperative methods for custom logic outside the standard trigger flow.

```tsx
const accordion = useAccordion({ multiple: true });

// Programmatically open a panel
accordion.updateValue(syntheticEvent, '3');

// Check if a panel is active
if (accordion.isItemActive('2')) {
    // ...
}
```

In single mode, `updateValue` toggles between the key and `null`. In multiple mode, it adds or removes the key from the array.

### Conditional Rendering with `state.open`

Unlike the primitive component, the headless hook gives you full control over whether content is rendered. Use `state.open` to conditionally mount or unmount content.

```tsx
const { contentProps, state } = useAccordionPanel({ value: '1', context: accordion });

{
    state.open && <div {...contentProps}>Panel content — only in DOM when open</div>;
}
```

Alternatively, always render content and use CSS to show/hide:

```tsx
<div {...contentProps} style={{ display: state.open ? 'block' : 'none' }}>
    Panel content — always in DOM, toggled with CSS
</div>
```

For animated enter/leave transitions, use the [useMotion](../motion/features.md) hook alongside `state.open`.

### Custom Styling with Data Attributes

Every prop object includes `data-scope="accordion"` and a `data-part` attribute. State-dependent attributes (`data-open`, `data-closed`, `data-disabled`) are added automatically.

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
```

`triggerProps` also includes `data-content-open`/`data-content-closed` for styling the trigger based on content state.

```css
[data-scope='accordion'][data-part='trigger'][data-content-open] {
    color: blue;
    font-weight: 700;
}

[data-scope='accordion'][data-part='trigger'][data-content-closed] {
    color: inherit;
    font-weight: 400;
}
```

## API

### useAccordion

> **API/props table for `useAccordion` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### useAccordionPanel

> **API/props table for `useAccordionPanel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Accordion Primitive](../../primitive/accordion/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
