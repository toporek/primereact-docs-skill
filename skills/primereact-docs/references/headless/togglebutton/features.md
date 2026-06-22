# useToggleButton

Hooks that manage toggle button pressed state and group value selection with single or multiple modes.

```tsx
'use client';
import { AlignCenter } from '@primeicons/react/align-center';
import { AlignJustify } from '@primeicons/react/align-justify';
import { AlignLeft } from '@primeicons/react/align-left';
import { AlignRight } from '@primeicons/react/align-right';
import { Bookmark } from '@primeicons/react/bookmark';
import { useToggleButton, type useToggleButtonChangeEvent } from '@primereact/headless/togglebutton';
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
                        onPressedChange: (e: useToggleButtonChangeEvent) => group.updateChange({ ...e, value: option.value })
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

```tsx showLineNumbers {1-2,4,7-8}
import { useToggleButton } from '@primereact/headless/togglebutton';
import { useToggleButtonGroup } from '@primereact/headless/togglebuttongroup';

const toggle = useToggleButton();

return (
    <button {...toggle.getRootProps()}>
        <span {...toggle.getIndicatorProps()}></span>
    </button>
);
```

`useToggleButton` manages a boolean pressed state and returns prop getter functions for root and indicator elements. `useToggleButtonGroup` coordinates multiple toggle buttons with single or multiple selection — see [Primitive](../../primitive/togglebutton/features.md) for a component-based API.

## Features

- Prop getter functions `getRootProps` and `getIndicatorProps` that accept resolved disabled and invalid state
- Controlled and uncontrolled pressed state via `pressed` / `defaultPressed`
- Group hook with single and multiple selection modes via `useToggleButtonGroup`
- Group methods `isPressed` and `updateChange` for coordinating child buttons

## Behavior

### Default

By default, a toggle button starts unpressed and toggles on click.

```tsx
const toggle = useToggleButton();

toggle.state.pressed; // false initially
```

### Controlled

Pass `pressed` and `onPressedChange` to control the state externally.

```tsx
const [pressed, setPressed] = useState(false);
const toggle = useToggleButton({
    pressed,
    onPressedChange: (e) => setPressed(e.pressed)
});
```

### Disabled

Pass `true` as the first argument to `getRootProps` to disable the button. The returned props include `disabled`, `aria-disabled`, and `data-disabled`.

```tsx
const rootProps = toggle.getRootProps(true, false);
```

### Group

Use `useToggleButtonGroup` to manage a group of toggle buttons. Each child button derives its pressed state from the group via `isPressed` and reports changes via `updateChange`.

```tsx
const group = useToggleButtonGroup({ allowEmpty: false });

const btn = useToggleButton({
    pressed: group.isPressed(group.state.value, 'bold'),
    onPressedChange: (e) => group.updateChange({ ...e, value: 'bold' })
});
```

### Multiple Selection

Set `multiple` on the group hook to allow more than one button to be pressed.

```tsx
const group = useToggleButtonGroup({ multiple: true });
```

### Allow Empty

By default, `allowEmpty` is `true`, allowing all buttons to be unpressed. Set it to `false` to require at least one selection.

```tsx
const group = useToggleButtonGroup({ allowEmpty: false });
```

### Using `state` for Custom UI

The hooks expose reactive state for custom rendering.

```tsx
const toggle = useToggleButton();
toggle.state.pressed; // boolean

const group = useToggleButtonGroup({ multiple: true });
group.state.value; // unknown[]
```

### Custom Styling with Data Attributes

The prop getters include data attributes for styling.

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

See [ToggleButton Primitive](../../primitive/togglebutton/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
