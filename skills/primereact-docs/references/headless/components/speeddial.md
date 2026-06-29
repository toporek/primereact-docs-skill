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

```tsx
import { useSpeedDial } from '@primereact/headless/speeddial';
```

```tsx
const { rootProps, triggerProps, listProps, getItemProps, actionProps, state } = useSpeedDial({ direction: 'up' });

<div {...rootProps}>
    <button {...triggerProps}></button>
    <ul {...listProps}>
        <li {...getItemProps(0)}>
            <button {...actionProps}></button>
        </li>
    </ul>
</div>;
```

`useSpeedDial` manages visibility, keyboard navigation, and positional calculations for action items, see [Primitive](../../primitive/components/speeddial.md) for a component-based API.

## Features

- **Open/close lifecycle**, controlled or uncontrolled visibility with outside-click dismissal and keyboard navigation
- **Radial and linear layouts**, pick from `linear`, `circle`, `semi-circle`, and `quarter-circle` with configurable `radius`
- **Eight directions**, items fan out in any cardinal or diagonal direction from the trigger
- **Per-item positioning**, `getItemProps(index)` returns computed styles with coordinates and staggered `transitionDelay`
- **Data-driven styling**, trigger and items expose `data-open`, `data-closed`, and `data-active` for declarative CSS

## Working with callbacks

### Choosing a layout and direction

Combine `type` and `direction` to place items around the trigger. `radius` controls the distance in non-linear layouts.

```tsx
const speeddial = useSpeedDial({
    type: 'circle',
    direction: 'up-right',
    radius: 80
});
```

### Controlled visibility

Pair `visible` and `onVisibleChange` to drive open state from external logic, for example closing the dial after an action runs.

```tsx
const [visible, setVisible] = React.useState(false);

const speeddial = useSpeedDial({
    visible,
    onVisibleChange: (e) => setVisible(e.value)
});
```

### Staggered item animation

`transitionDelay` sets the ms increment between items. Each item's computed delay comes back as `index * transitionDelay` on open and reverses on close, spread the result of `getItemProps(index)` to pick up the inline style.

```tsx
const speeddial = useSpeedDial({ transitionDelay: 80 });

{
    items.map((_, index) => (
        <li key={index} {...speeddial.getItemProps(index)}>
            <button {...speeddial.actionProps} />
        </li>
    ));
}
```

### Keeping the menu open on outside click

By default, clicking outside closes the dial. Set `hideOnClickOutside` to `false` to opt out when the menu is inside a custom popover or modal.

```tsx
const speeddial = useSpeedDial({ hideOnClickOutside: false });
```

## Styling with data attributes

Prop objects include `data-scope="speeddial"` and a `data-part` attribute. The trigger and items also expose open/closed and active state attributes.

| Scope       | Part      | States                     |
| ----------- | --------- | -------------------------- |
| `speeddial` | `trigger` | `data-open`, `data-closed` |
| `speeddial` | `item`    | `data-active`              |

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

Space or Enter opens the menu, Arrow keys navigate items, and Escape collapses. See [Primitive](../../primitive/components/speeddial.md#accessibility) for full WAI-ARIA compliance details.
