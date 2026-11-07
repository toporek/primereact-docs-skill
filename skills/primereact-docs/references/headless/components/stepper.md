# useStepper

A hook that manages stepper state, step navigation, and ARIA attributes.

## Usage

```tsx
import { useStepper } from '@primereact/headless/stepper';
```

```tsx
const stepper = useStepper({ defaultValue: '1' });
const { rootProps, state } = stepper;
```

`useStepper` manages active step state and returns spread-ready prop objects for each DOM element, see [Primitive](../../primitive/components/stepper.md) for a component-based API.

## Features

- **Single-hook architecture**, one call returns `rootProps` plus getter functions (`getItemProps`, `getStepProps`, `getHeaderProps`, `getPanelProps`) for every step part
- **Linear or free navigation**, opt into `linear` to gate forward jumps, or leave it off to let users bounce between steps
- **Controlled or uncontrolled**, drive the active step from outside with `value`/`onValueChange` or let the hook own it
- **Layout-agnostic**, no assumptions about horizontal vs vertical; compose panels and separators however you need
- **Imperative controls**, `setActiveStep()` moves the pointer, `isStepActive()` and `isStepDisabled()` answer per-step queries

## Working with callbacks

### Controlled active step

Drive the active step from parent state using `value` and `onValueChange`.

```tsx
const [value, setValue] = React.useState<string | number | null>('1');

const stepper = useStepper({
    value,
    onValueChange: (e) => setValue(e.value)
});

<div {...rootProps}>
    <div {...stepper.getItemProps({ active: true })}></div>
    <div {...stepper.getStepProps({ active: true, disabled: false })}></div>
    <button {...stepper.getHeaderProps({ activeValue: '1', disabled: false })}></button>
    {stepper.isStepActive('1') && <div {...stepper.getPanelProps({ active: true, activeValue: '1' })}></div>}
</div>;
```

`onValueChange` receives `{ value }` where `value` is the new active step key.

### Wizard-style Next/Back navigation

`setActiveStep` is the imperative escape hatch for Next/Back buttons, essential when `linear` mode prevents clicking headers directly.

```tsx
const stepper = useStepper({ linear: true, defaultValue: '1' });

<button onClick={() => stepper.setActiveStep('2')}>Next</button>
<button onClick={() => stepper.setActiveStep('1')}>Back</button>
```

### Gating with linear mode

Turn on `linear` to lock inactive steps, `isStepDisabled()` will return `true` for them and `getHeaderProps` sets `tabIndex` to `-1`, so only the active step is reachable by keyboard.

```tsx
const stepper = useStepper({ linear: true, defaultValue: '1' });

stepper.isStepDisabled('3'); // true until user advances
```

### Vertical layout composition

The hook stays layout-agnostic. For a vertical stepper, use `getItemProps` to wrap each header and panel together so separators can nest inside the panel region.

```tsx
<div {...rootProps}>
    <div {...stepper.getItemProps({ active })}>
        <div {...stepper.getStepProps({ active, disabled })}>
            <button {...stepper.getHeaderProps({ activeValue: '1', disabled })}>Step 1</button>
        </div>
        {stepper.isStepActive('1') && (
            <div {...stepper.getPanelProps({ active: true, activeValue: '1' })}>
                <span>Separator</span>
                <div>Panel content</div>
            </div>
        )}
    </div>
</div>
```

## Styling with data attributes

Every prop object includes `data-scope="stepper"` and a `data-part` attribute. `data-active` is present only on active elements; `data-disabled` is added automatically when applicable.

```css
[data-scope='stepper'][data-part='step'][data-active] {
    background-color: var(--primary);
}

[data-scope='stepper'][data-part='header'][disabled] {
    opacity: 0.5;
    pointer-events: none;
}

[data-scope='stepper'][data-part='panel'][data-active] {
    display: block;
}
```

## API

### useStepper

> **`useStepper` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/stepper or the installed `@primereact/types`.

## Accessibility

Arrow keys navigate steps, Enter activates the focused step, and disabled steps are skipped. See [Primitive](../../primitive/components/stepper.md#accessibility) for full WAI-ARIA compliance details.
