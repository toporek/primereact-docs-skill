# useStepper

A hook that manages stepper state, step navigation, and ARIA attributes.

```tsx
'use client';
import * as React from 'react';
import { useStepper } from '@primereact/headless/stepper';

const steps = [
    { value: '1', label: 'Header I', content: 'Content I' },
    { value: '2', label: 'Header II', content: 'Content II' },
    { value: '3', label: 'Header III', content: 'Content III' }
];

export default function BasicDemo() {
    const stepper = useStepper({ defaultValue: '1' });
    const { rootProps } = stepper;

    return (
        <div {...rootProps} className="max-w-2xl mx-auto">
            <div className="flex items-center">
                {steps.map((step, index) => {
                    const active = stepper.isStepActive(step.value);
                    const disabled = !active && stepper.isStepDisabled();
                    const stepProps = stepper.getStepProps({ active, disabled });
                    const headerProps = stepper.getHeaderProps({ activeValue: step.value, disabled });

                    return (
                        <div key={step.value} className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}>
                            <div {...stepProps} className="group">
                                <button
                                    {...(headerProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
                                    className="inline-flex items-center gap-2 bg-transparent border-0 cursor-pointer p-1 focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold border-2 transition-colors bg-surface-200 dark:bg-surface-700 text-surface-500 dark:text-surface-400 border-surface-200 dark:border-surface-700 group-data-[active]:bg-primary group-data-[active]:text-primary-contrast group-data-[active]:border-primary group-data-[active]:ring-2 group-data-[active]:ring-primary/30">
                                        {step.value}
                                    </span>
                                    <span className="text-sm font-medium text-surface-700 dark:text-surface-200">{step.label}</span>
                                </button>
                            </div>
                            {index < steps.length - 1 && <span className="flex-1 h-px mx-4 bg-surface-300 dark:bg-surface-600" />}
                        </div>
                    );
                })}
            </div>
            <div className="mt-6">
                {steps.map((step) => {
                    const active = stepper.isStepActive(step.value);
                    const panelProps = stepper.getPanelProps({ active, activeValue: step.value });

                    return (
                        active && (
                            <div key={step.value} {...panelProps}>
                                <div className="flex flex-col h-48">
                                    <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded-lg bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                        {step.content}
                                    </div>
                                </div>
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
}

```

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

> **API/props table for `useStepper` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Arrow keys navigate steps, Enter activates the focused step, and disabled steps are skipped. See [Primitive](../../primitive/components/stepper.md#accessibility) for full WAI-ARIA compliance details.
