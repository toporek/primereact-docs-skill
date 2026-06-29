# useToggleButton

Hooks that manage toggle button pressed state and group value selection with single or multiple modes.

```tsx
'use client';
import { AlignCenter } from '@primeicons/react/align-center';
import { AlignJustify } from '@primeicons/react/align-justify';
import { AlignLeft } from '@primeicons/react/align-left';
import { AlignRight } from '@primeicons/react/align-right';
import { Bookmark } from '@primeicons/react/bookmark';
import { useToggleButton, type UseToggleButtonChangeEvent } from '@primereact/headless/togglebutton';
import { useToggleButtonGroup } from '@primereact/headless/togglebuttongroup';

const alignOptions = [
    { value: 'left', icon: AlignLeft },
    { value: 'center', icon: AlignCenter },
    { value: 'right', icon: AlignRight },
    { value: 'justify', icon: AlignJustify }
];

export default function BasicDemo() {
    const toggle = useToggleButton();
    const rootProps = toggle.getRootProps(false, false);
    const indicatorProps = toggle.getIndicatorProps(false, false);

    const group = useToggleButtonGroup({ allowEmpty: false });

    return (
        <div className="flex flex-col items-center gap-6">
            <button
                {...rootProps}
                className="inline-flex items-center justify-center size-8 rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-100 dark:bg-surface-900 text-surface-500 dark:text-surface-400 data-[pressed]:text-primary data-[pressed]:border-primary/30 data-[pressed]:bg-primary/10 cursor-pointer select-none transition-colors duration-200 focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60 disabled:pointer-events-none"
            >
                <span {...indicatorProps}>
                    <Bookmark />
                </span>
            </button>

            <div {...group.rootProps} className="inline-flex rounded-lg border border-surface-200 dark:border-surface-700">
                {alignOptions.map((option) => {
                    const btn = useToggleButton({
                        pressed: group.isPressed(group.state.value, option.value),
                        onPressedChange: (e: UseToggleButtonChangeEvent) => group.updateChange({ ...e, value: option.value })
                    });
                    const btnRootProps = btn.getRootProps(false, false);
                    const Icon = option.icon;

                    return (
                        <button
                            key={option.value}
                            {...btnRootProps}
                            className="inline-flex items-center justify-center size-8 bg-surface-100 dark:bg-surface-900 text-surface-500 dark:text-surface-400 data-[pressed]:bg-primary data-[pressed]:text-primary-contrast border-r border-surface-200 dark:border-surface-700 last:border-r-0 cursor-pointer select-none transition-colors duration-200 focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary focus-visible:z-10 disabled:opacity-60 disabled:pointer-events-none"
                        >
                            <Icon className="size-4" />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useToggleButton } from '@primereact/headless/togglebutton';
import { useToggleButtonGroup } from '@primereact/headless/togglebuttongroup';
```

```tsx
const toggle = useToggleButton();

<button {...toggle.getRootProps()}>
    <span {...toggle.getIndicatorProps()}></span>
</button>;
```

`useToggleButton` manages a boolean pressed state and returns prop getter functions for root and indicator elements. `useToggleButtonGroup` coordinates multiple toggle buttons with single or multiple selection. See [Primitive](../../primitive/components/togglebutton.md) for a component-based API.

## Features

- **Prop getter API**, `getRootProps` and `getIndicatorProps` accept resolved disabled and invalid state at call time
- **Controlled or uncontrolled**, `pressed`/`onPressedChange` for owned state, `defaultPressed` for hook-managed state
- **Group coordination**, `useToggleButtonGroup` manages shared value and exposes `isPressed` / `updateChange` for children
- **Single or multiple**, group switches between radio-like and multi-select behavior via the `multiple` flag
- **Minimum selection**, group `allowEmpty` guarantees at least one button stays pressed when set to `false`

## Working with callbacks

### Controlled pressed state

Pass `pressed` and `onPressedChange` to own the state externally, required when toggles drive other UI or persist across reloads.

```tsx
const [pressed, setPressed] = React.useState(false);

useToggleButton({
    pressed,
    onPressedChange: (e) => setPressed(e.pressed)
});
```

### Dynamic disabled / invalid

`getRootProps(disabled, invalid)` accepts booleans so you can compute state at render time from form context.

```tsx
const rootProps = toggle.getRootProps(isSubmitting, hasError);
```

### Group as a formatting toolbar

Use `useToggleButtonGroup` with `multiple: true` to build a toolbar where each button represents an independent flag.

```tsx
const group = useToggleButtonGroup({ multiple: true });

const bold = useToggleButton({
    pressed: group.isPressed(group.state.value, 'bold'),
    onPressedChange: (e) => group.updateChange({ ...e, value: 'bold' })
});
```

### Require a selection

Set `allowEmpty: false` when the group represents a mandatory choice like view mode or alignment.

```tsx
const group = useToggleButtonGroup({ allowEmpty: false, defaultValue: 'left' });
```

### Read live state for custom UI

Expose `state.pressed` or `state.value` to show counts, icons, or status text derived from the current selection.

```tsx
const group = useToggleButtonGroup({ multiple: true });
// group.state.value: unknown[]

const toggle = useToggleButton();
// toggle.state.pressed: boolean
```

## Styling with data attributes

The prop getters include data attributes for styling.

| Scope               | Part   | States                          |
| ------------------- | ------ | ------------------------------- |
| `togglebutton`      | `root` | `data-pressed`, `data-disabled` |
| `togglebuttongroup` | `root` | `data-multiple`                 |

```css
button[data-pressed] {
    background-color: var(--p-primary-color);
    color: var(--p-primary-contrast-color);
}

button[data-disabled] {
    pointer-events: none;
    opacity: 0.6;
}

[data-scope='togglebuttongroup'][data-multiple] {
    /* styles for multi-select group */
}
```

## API

### useToggleButton

> **API/props table for `useToggleButton` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### useToggleButtonGroup

> **API/props table for `useToggleButtonGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Space or Enter toggles the pressed state while focused. See [Primitive](../../primitive/components/togglebutton.md#accessibility) for full WAI-ARIA compliance details.
