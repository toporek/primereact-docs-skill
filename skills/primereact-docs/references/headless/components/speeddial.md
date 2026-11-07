# useSpeedDial

Hook that manages speed dial state, keyboard navigation, and directional positioning.

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

> **`useSpeedDial` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/speeddial or the installed `@primereact/types`.

## Accessibility

Space or Enter opens the menu, Arrow keys navigate items, and Escape collapses. See [Primitive](../../primitive/components/speeddial.md#accessibility) for full WAI-ARIA compliance details.
