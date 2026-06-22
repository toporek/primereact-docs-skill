# useStepper

A hook that manages stepper state, step navigation, and ARIA attributes.

```tsx
'use client';
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
                                    {...headerProps}
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

```tsx showLineNumbers {1,3-4,7-11}
import { useStepper } from '@primereact/headless/stepper';

const stepper = useStepper({ defaultValue: '1' });
const { rootProps, state } = stepper;

return (
    <div {...rootProps}>
        <div {...stepper.getItemProps({ active: true })}></div>
        <div {...stepper.getStepProps({ active: true, disabled: false })}></div>
        <button {...stepper.getHeaderProps({ activeValue: '1', disabled: false })}></button>
        {stepper.isStepActive('1') && <div {...stepper.getPanelProps({ active: true, activeValue: '1' })}></div>}
    </div>
);
```

`useStepper` manages active step state and returns spread-ready prop objects for each DOM element — see [Primitive](../../primitive/stepper/features.md) for a component-based API.

## Features

- Single-hook architecture with getter functions for per-element props (`rootProps`, `getItemProps`, `getStepProps`, `getHeaderProps`, `getPanelProps`)
- Controlled and uncontrolled value management
- Linear mode to restrict free navigation between steps
- Exposes `state`, `setActiveStep`, `isStepActive`, and `isStepDisabled` for custom logic

## Behavior

### Default Value

Use `defaultValue` to set the initially active step.

```tsx
const stepper = useStepper({ defaultValue: '1' });
```

### Controlled

Use `value` and `onValueChange` for full programmatic control. The hook never updates its own state in controlled mode.

```tsx
const [value, setValue] = React.useState<string | number | null>('1');
const stepper = useStepper({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

The `onValueChange` callback receives `{ value }` where `value` is the new active step key.

### Linear

Set `linear` to restrict step navigation. When enabled, `isStepDisabled()` returns `true` for inactive steps and `getHeaderProps` sets `tabIndex` to `-1` on disabled headers.

```tsx
const stepper = useStepper({ linear: true, defaultValue: '1' });
```

Use `setActiveStep` to programmatically navigate between steps in linear mode (e.g., via Next/Back buttons).

### Vertical Layout

The hook itself is layout-agnostic. For a vertical stepper, use `Stepper.Item` to group each step header and panel together, with the separator and content nested inside the panel area.

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

### Using `setActiveStep` and `isStepActive`

The hook exposes imperative methods for custom logic outside the standard header click flow.

```tsx
const stepper = useStepper({ defaultValue: '1' });

// Programmatically navigate to a step
stepper.setActiveStep('3');

// Check if a step is active
if (stepper.isStepActive('2')) {
    // ...
}
```

### Custom Styling with Data Attributes

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

See [Stepper Primitive](../../primitive/stepper/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
