# useSpeedDial

Hook that manages speed dial state, keyboard navigation, and directional positioning.

```tsx
'use client';
import { Pencil } from '@primeicons/react/pencil';
import { Plus } from '@primeicons/react/plus';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { useSpeedDial } from '@primereact/headless/speeddial';

const items = [
    { icon: Pencil, label: 'Edit' },
    { icon: Refresh, label: 'Refresh' },
    { icon: Trash, label: 'Delete' },
    { icon: Upload, label: 'Upload' }
];

export default function BasicDemo() {
    const { rootProps, triggerProps, listProps, getItemProps, actionProps } = useSpeedDial({ direction: 'up' });

    return (
        <div style={{ position: 'relative', height: '240px' }}>
            <div
                {...rootProps}
                className="inline-flex flex-col-reverse items-center"
                style={{ ...rootProps.style, position: 'absolute', right: 0, bottom: 0 }}
            >
                <button
                    {...triggerProps}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-contrast border-none cursor-pointer transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary data-[open]:rotate-45"
                >
                    <Plus />
                </button>
                <ul {...listProps} className="group flex flex-col-reverse items-center gap-2 list-none m-0 p-0 pb-2" style={listProps.style}>
                    {items.map((item, index) => {
                        const Icon = item.icon;
                        const itemProps = getItemProps(index);

                        return (
                            <li
                                key={item.label}
                                {...itemProps}
                                className="opacity-0 scale-50 transition-all duration-200 group-data-[open]:opacity-100 group-data-[open]:scale-100"
                                style={itemProps.style}
                            >
                                <button
                                    {...actionProps}
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-0 border border-surface-200 text-surface-600 cursor-pointer hover:bg-surface-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    aria-label={item.label}
                                >
                                    <Icon />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,6-10}
import { useSpeedDial } from '@primereact/headless/speeddial';

const { rootProps, triggerProps, listProps, getItemProps, actionProps, state } = useSpeedDial({ direction: 'up' });

return (
    <div {...rootProps}>
        <button {...triggerProps}></button>
        <ul {...listProps}>
            <li {...getItemProps(0)}>
                <button {...actionProps}></button>
            </li>
        </ul>
    </div>
);
```

`useSpeedDial` manages visibility, keyboard navigation, and positional calculations for action items — see [Primitive](../../primitive/speeddial/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects: `rootProps`, `triggerProps`, `listProps`, `actionProps`, and `getItemProps(index)`
- Four layout types: `linear`, `circle`, `semi-circle`, `quarter-circle`
- Eight direction options: `up`, `down`, `left`, `right`, `up-left`, `up-right`, `down-left`, `down-right`
- Computed `transitionDelay` and positional styles per item via `getItemProps`
- Auto-close on outside click via `hideOnClickOutside`

## Behavior

### Direction

Set `direction` to control where items appear relative to the trigger. Defaults to `up`.

```tsx
const speeddial = useSpeedDial({ direction: 'right' });
```

### Layout Type

Set `type` to `circle`, `semi-circle`, or `quarter-circle` for radial layouts. Use `radius` to control the distance from the trigger.

```tsx
const speeddial = useSpeedDial({ type: 'circle', radius: 80 });
```

### Transition Delay

Set `transitionDelay` to control the staggered animation timing (in ms) between items. Defaults to `30`.

```tsx
const speeddial = useSpeedDial({ transitionDelay: 80 });
```

The delay for each item is calculated as `index * transitionDelay` when opening and reversed when closing.

### Controlled Visibility

Use `visible` and `onVisibleChange` for programmatic control over the open state.

```tsx
const [visible, setVisible] = React.useState(false);
const speeddial = useSpeedDial({
    visible,
    onVisibleChange: (e) => setVisible(e.value)
});
```

### Hide on Click Outside

Set `hideOnClickOutside` to `false` to keep the menu open when clicking outside. Defaults to `true`.

```tsx
const speeddial = useSpeedDial({ hideOnClickOutside: false });
```

### Item Style Calculation

`getItemProps(index)` returns computed `style` with `transitionDelay` and positional coordinates for non-linear layouts. Spread these on each item element.

```tsx
const itemProps = speeddial.getItemProps(0);
// { id, role, style: { transitionDelay, left, top }, 'data-scope', 'data-part', ... }
```

### Custom Styling with Data Attributes

Prop objects include `data-scope="speeddial"` and `data-part` attributes. The trigger receives `data-open` or `data-closed` based on visibility state.

```css
[data-scope='speeddial'][data-part='trigger'][data-open] {
    transform: rotate(45deg);
}

[data-scope='speeddial'][data-part='item'] {
    opacity: 0;
    transform: scale(0.5);
    transition:
        opacity 200ms ease,
        transform 200ms ease;
}

[data-scope='speeddial'][data-part='item'][data-active] {
    outline: 2px solid var(--primary);
}
```

## API

### useSpeedDial

> **API/props table for `useSpeedDial` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [SpeedDial Primitive](../../primitive/speeddial/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
