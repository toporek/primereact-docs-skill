# Stepper

The Stepper component displays a wizard-like workflow by guiding users through the multi-step progression.

```tsx
import { Stepper } from '@primereact/ui/stepper';

export default function Preview() {
    return (
        <div className="flex justify-center">
            <Stepper.Root value="1" className="basis-[50rem]">
                <Stepper.List>
                    <Stepper.Step value="1">
                        <Stepper.Header>
                            <Stepper.Number>1</Stepper.Number>
                            <Stepper.Title>Header I</Stepper.Title>
                        </Stepper.Header>
                        <Stepper.Separator />
                    </Stepper.Step>
                    <Stepper.Step value="2">
                        <Stepper.Header>
                            <Stepper.Number>2</Stepper.Number>
                            <Stepper.Title>Header II</Stepper.Title>
                        </Stepper.Header>
                        <Stepper.Separator />
                    </Stepper.Step>
                    <Stepper.Step value="3">
                        <Stepper.Header>
                            <Stepper.Number>3</Stepper.Number>
                            <Stepper.Title>Header III</Stepper.Title>
                        </Stepper.Header>
                    </Stepper.Step>
                </Stepper.List>
                <Stepper.Panels>
                    <Stepper.Panel value="1">
                        <div className="flex flex-col h-48">
                            <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                Content I
                            </div>
                        </div>
                    </Stepper.Panel>
                    <Stepper.Panel value="2">
                        <div className="flex flex-col h-48">
                            <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                Content II
                            </div>
                        </div>
                    </Stepper.Panel>
                    <Stepper.Panel value="3">
                        <div className="flex flex-col h-48">
                            <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                Content III
                            </div>
                        </div>
                    </Stepper.Panel>
                </Stepper.Panels>
            </Stepper.Root>
        </div>
    );
}

```

## Usage

```tsx
import { Stepper } from '@primereact/ui/stepper';
```

```tsx
<Stepper.Root>
    <Stepper.List>
        <Stepper.Step>
            <Stepper.Header />
            <Stepper.Separator />
        </Stepper.Step>
    <Stepper.Panels>
        <Stepper.Panel />
    </Stepper.Panels>
</Stepper.Root>
```

## Examples

### Horizontal

Stepper requires two `Stepper.List`, `Stepper.Step`, `Stepper.Panels` and `Stepper.Panel` components as children which are displayed horizontally.

```tsx
import { Stepper } from '@primereact/ui/stepper';

export default function HorizontalDemo() {
    return (
        <div className="flex justify-center">
            <Stepper.Root value="1" className="basis-[50rem]">
                <Stepper.List>
                    <Stepper.Step value="1">
                        <Stepper.Header>
                            <Stepper.Number>1</Stepper.Number>
                            <Stepper.Title>Header I</Stepper.Title>
                        </Stepper.Header>
                        <Stepper.Separator />
                    </Stepper.Step>
                    <Stepper.Step value="2">
                        <Stepper.Header>
                            <Stepper.Number>2</Stepper.Number>
                            <Stepper.Title>Header II</Stepper.Title>
                        </Stepper.Header>
                        <Stepper.Separator />
                    </Stepper.Step>
                    <Stepper.Step value="3">
                        <Stepper.Header>
                            <Stepper.Number>3</Stepper.Number>
                            <Stepper.Title>Header III</Stepper.Title>
                        </Stepper.Header>
                    </Stepper.Step>
                </Stepper.List>
                <Stepper.Panels>
                    <Stepper.Panel value="1">
                        <div className="flex flex-col h-48">
                            <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                Content I
                            </div>
                        </div>
                    </Stepper.Panel>
                    <Stepper.Panel value="2">
                        <div className="flex flex-col h-48">
                            <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                Content II
                            </div>
                        </div>
                    </Stepper.Panel>
                    <Stepper.Panel value="3">
                        <div className="flex flex-col h-48">
                            <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                Content III
                            </div>
                        </div>
                    </Stepper.Panel>
                </Stepper.Panels>
            </Stepper.Root>
        </div>
    );
}

```

### Vertical

Stepper requires two `Stepper.Item`, `Stepper.Step` and `Stepper.Panel` components as children which are displayed vertically.

```tsx
'use client';
import { Stepper } from '@primereact/ui/stepper';

export default function VerticalDemo() {
    return (
        <div>
            <Stepper.Root value="1">
                <Stepper.Item value="1">
                    <Stepper.Step>
                        <Stepper.Header>
                            <Stepper.Number>1</Stepper.Number>
                            <Stepper.Title>Header I</Stepper.Title>
                        </Stepper.Header>
                    </Stepper.Step>
                    <Stepper.Panel>
                        <Stepper.Separator />
                        <Stepper.Content>
                            <div className="flex flex-col h-48">
                                <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                    Content I
                                </div>
                            </div>
                        </Stepper.Content>
                    </Stepper.Panel>
                </Stepper.Item>
                <Stepper.Item value="2">
                    <Stepper.Step>
                        <Stepper.Header>
                            <Stepper.Number>2</Stepper.Number>
                            <Stepper.Title>Header II</Stepper.Title>
                        </Stepper.Header>
                    </Stepper.Step>
                    <Stepper.Panel>
                        <Stepper.Separator />
                        <Stepper.Content>
                            <div className="flex flex-col h-48">
                                <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                    Content II
                                </div>
                            </div>
                        </Stepper.Content>
                    </Stepper.Panel>
                </Stepper.Item>
                <Stepper.Item value="3">
                    <Stepper.Step>
                        <Stepper.Header>
                            <Stepper.Number>3</Stepper.Number>
                            <Stepper.Title>Header III</Stepper.Title>
                        </Stepper.Header>
                    </Stepper.Step>
                    <Stepper.Panel>
                        <Stepper.Content>
                            <div className="flex flex-col h-48">
                                <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                    Content III
                                </div>
                            </div>
                        </Stepper.Content>
                    </Stepper.Panel>
                </Stepper.Item>
            </Stepper.Root>
        </div>
    );
}

```

### Linear

Linear mode enforces step-by-step progression through the workflow, requiring users to complete the current step before proceeding to the next one. This ensures a controlled navigation flow through the process.

```tsx
'use client';
import { ArrowLeft } from '@primeicons/react/arrow-left';
import { ArrowRight } from '@primeicons/react/arrow-right';
import { StepperPanelInstance } from '@primereact/ui/stepper';
import { Button } from '@primereact/ui/button';
import { Stepper } from '@primereact/ui/stepper';

export default function HorizontalDemo() {
    return (
        <div className="flex justify-center">
            <Stepper.Root defaultValue="1" linear className="basis-[50rem]">
                <Stepper.List>
                    <Stepper.Step value="1">
                        <Stepper.Header>
                            <Stepper.Number>1</Stepper.Number>
                            <Stepper.Title>Header I</Stepper.Title>
                        </Stepper.Header>
                        <Stepper.Separator />
                    </Stepper.Step>
                    <Stepper.Step value="2">
                        <Stepper.Header>
                            <Stepper.Number>2</Stepper.Number>
                            <Stepper.Title>Header II</Stepper.Title>
                        </Stepper.Header>
                        <Stepper.Separator />
                    </Stepper.Step>
                    <Stepper.Step value="3">
                        <Stepper.Header>
                            <Stepper.Number>3</Stepper.Number>
                            <Stepper.Title>Header III</Stepper.Title>
                        </Stepper.Header>
                    </Stepper.Step>
                </Stepper.List>
                <Stepper.Panels>
                    <Stepper.Panel asChild value="1">
                        {(instance: StepperPanelInstance) => {
                            const { stepper } = instance;

                            return (
                                <>
                                    <div className="flex flex-col h-48">
                                        <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                            Content I
                                        </div>
                                    </div>
                                    <div className="flex pt-6 justify-end">
                                        <Button onClick={() => stepper?.setActiveStep('2')}>
                                            Next
                                            <ArrowRight />
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Stepper.Panel>
                    <Stepper.Panel asChild value="2">
                        {(instance: StepperPanelInstance) => {
                            const { stepper } = instance;

                            return (
                                <>
                                    <div className="flex flex-col h-48">
                                        <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                            Content II
                                        </div>
                                    </div>
                                    <div className="flex pt-6 justify-between">
                                        <Button severity="secondary" onClick={() => stepper?.setActiveStep('1')}>
                                            <ArrowLeft />
                                            Back
                                        </Button>
                                        <Button onClick={() => stepper?.setActiveStep('3')}>
                                            Next
                                            <ArrowRight />
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Stepper.Panel>
                    <Stepper.Panel asChild value="3">
                        {(instance: StepperPanelInstance) => {
                            const { stepper } = instance;

                            return (
                                <>
                                    <div className="flex flex-col h-48">
                                        <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                            Content III
                                        </div>
                                    </div>
                                    <div className="pt-6">
                                        <Button severity="secondary" onClick={() => stepper?.setActiveStep('2')}>
                                            <ArrowLeft />
                                            Back
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Stepper.Panel>
                </Stepper.Panels>
            </Stepper.Root>
        </div>
    );
}

```

### Steps Only

For a more compact UI, the steps-only mode displays just the step indicators without content panels. This is useful for indicating progress without showing the actual step content.

```tsx
import { Stepper } from '@primereact/ui/stepper';

export default function StepsOnlyDemo() {
    return (
        <div className="flex justify-center">
            <Stepper.Root value="1" className="basis-[50rem]">
                <Stepper.List>
                    <Stepper.Step value="1">
                        <Stepper.Header>
                            <Stepper.Number>1</Stepper.Number>
                            <Stepper.Title>Design</Stepper.Title>
                        </Stepper.Header>
                        <Stepper.Separator />
                    </Stepper.Step>
                    <Stepper.Step value="2">
                        <Stepper.Header>
                            <Stepper.Number>2</Stepper.Number>
                            <Stepper.Title>Development</Stepper.Title>
                        </Stepper.Header>
                        <Stepper.Separator />
                    </Stepper.Step>
                    <Stepper.Step value="3">
                        <Stepper.Header>
                            <Stepper.Number>3</Stepper.Number>
                            <Stepper.Title>QA</Stepper.Title>
                        </Stepper.Header>
                        <Stepper.Separator />
                    </Stepper.Step>
                </Stepper.List>
            </Stepper.Root>
        </div>
    );
}

```

### Template

The optional `as` property controls the default container element of a step, for example setting it to a button renders a button for the header instead of a div. The `asChild` option enables the headless mode for further customization by passing callbacks and properties to implement your own step.

```tsx
'use client';
import { IdCard } from '@primeicons/react';
import { ArrowLeft } from '@primeicons/react/arrow-left';
import { ArrowRight } from '@primeicons/react/arrow-right';
import { Star } from '@primeicons/react/star';
import { User } from '@primeicons/react/user';
import { StepperPanelInstance, StepperStepInstance } from '@primereact/ui/stepper';
import { Button } from '@primereact/ui/button';
import { Divider } from '@primereact/ui/divider';
import { InputText } from '@primereact/ui/inputtext';
import { Stepper } from '@primereact/ui/stepper';
import { ToggleButton } from '@primereact/ui/togglebutton';
import Image from 'next/image';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <Stepper.Root value={1} className="basis-[40rem]">
                <Stepper.List>
                    <Stepper.Step asChild value={1}>
                        {(instance: StepperStepInstance) => {
                            const { stepper, props } = instance;

                            return (
                                <div className="flex flex-row flex-auto gap-2">
                                    <button
                                        className="bg-transparent border-0 inline-flex flex-col gap-2 cursor-pointer"
                                        onClick={() => stepper?.setActiveStep(props.value)}
                                    >
                                        <span
                                            className={`rounded-full border-2 w-12 h-12 inline-flex items-center justify-center ${
                                                (instance?.props?.value as number) <= (stepper?.state.value as number)
                                                    ? 'bg-primary text-primary-contrast border-primary'
                                                    : 'border-surface-200 dark:border-surface-700'
                                            }`}
                                        >
                                            <User />
                                        </span>
                                    </button>
                                    <Divider />
                                </div>
                            );
                        }}
                    </Stepper.Step>
                    <Stepper.Step asChild value={2}>
                        {(instance: StepperStepInstance) => {
                            const { stepper, props } = instance;

                            return (
                                <div className="flex flex-row flex-auto gap-2">
                                    <button
                                        className="bg-transparent border-0 inline-flex flex-col gap-2 cursor-pointer"
                                        onClick={() => stepper?.setActiveStep(props.value)}
                                    >
                                        <span
                                            className={`rounded-full border-2 w-12 h-12 inline-flex items-center justify-center ${
                                                (props?.value as number) <= (stepper?.state.value as number)
                                                    ? 'bg-primary text-primary-contrast border-primary'
                                                    : 'border-surface-200 dark:border-surface-700'
                                            }`}
                                        >
                                            <Star />
                                        </span>
                                    </button>
                                    <Divider />
                                </div>
                            );
                        }}
                    </Stepper.Step>
                    <Stepper.Step asChild value={3}>
                        {(instance: StepperStepInstance) => {
                            const { stepper, props } = instance;

                            return (
                                <div className="flex flex-row gap-2">
                                    <button
                                        className="bg-transparent border-0 inline-flex flex-col gap-2 cursor-pointer"
                                        onClick={() => stepper?.setActiveStep(props.value)}
                                    >
                                        <span
                                            className={`rounded-full border-2 w-12 h-12 inline-flex items-center justify-center ${
                                                (props?.value as number) <= (stepper?.state.value as number)
                                                    ? 'bg-primary text-primary-contrast border-primary'
                                                    : 'border-surface-200 dark:border-surface-700'
                                            }`}
                                        >
                                            <IdCard />
                                        </span>
                                    </button>
                                </div>
                            );
                        }}
                    </Stepper.Step>
                </Stepper.List>
                <Stepper.Panels>
                    <Stepper.Panel asChild value={1}>
                        {(instance: StepperPanelInstance) => {
                            const { stepper } = instance;

                            return (
                                <>
                                    <div className="flex flex-col gap-2 mx-auto" style={{ minHeight: '16rem', maxWidth: '20rem' }}>
                                        <div className="text-center mt-4 mb-4 text-xl font-semibold">Create your account</div>
                                        <div className="field">
                                            <InputText id="input" type="text" placeholder="Name" fluid />
                                        </div>
                                        <div className="field">
                                            <InputText id="email" type="email" placeholder="Email" fluid />
                                        </div>
                                        <div className="field">
                                            <InputText id="password" placeholder="Password" fluid />
                                        </div>
                                    </div>
                                    <div className="flex pt-6 justify-end">
                                        <Button onClick={() => stepper?.setActiveStep(2)}>
                                            Next
                                            <ArrowRight />
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Stepper.Panel>
                    <Stepper.Panel asChild value={2}>
                        {(instance: StepperPanelInstance) => {
                            const { stepper } = instance;

                            return (
                                <>
                                    <div className="flex flex-col gap-2 mx-auto" style={{ minHeight: '16rem', maxWidth: '24rem' }}>
                                        <div className="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
                                        <div className="flex flex-wrap justify-center gap-4">
                                            <ToggleButton.Root>
                                                <ToggleButton.Indicator>Nature</ToggleButton.Indicator>
                                            </ToggleButton.Root>
                                            <ToggleButton.Root>
                                                <ToggleButton.Indicator>Art</ToggleButton.Indicator>
                                            </ToggleButton.Root>
                                            <ToggleButton.Root>
                                                <ToggleButton.Indicator>Music</ToggleButton.Indicator>
                                            </ToggleButton.Root>
                                            <ToggleButton.Root>
                                                <ToggleButton.Indicator>Design</ToggleButton.Indicator>
                                            </ToggleButton.Root>
                                            <ToggleButton.Root>
                                                <ToggleButton.Indicator>Photography</ToggleButton.Indicator>
                                            </ToggleButton.Root>
                                            <ToggleButton.Root>
                                                <ToggleButton.Indicator>Movies</ToggleButton.Indicator>
                                            </ToggleButton.Root>
                                            <ToggleButton.Root>
                                                <ToggleButton.Indicator>Sports</ToggleButton.Indicator>
                                            </ToggleButton.Root>
                                            <ToggleButton.Root>
                                                <ToggleButton.Indicator>Gaming</ToggleButton.Indicator>
                                            </ToggleButton.Root>
                                            <ToggleButton.Root>
                                                <ToggleButton.Indicator>Traveling</ToggleButton.Indicator>
                                            </ToggleButton.Root>
                                            <ToggleButton.Root>
                                                <ToggleButton.Indicator>Dancing</ToggleButton.Indicator>
                                            </ToggleButton.Root>
                                        </div>
                                    </div>
                                    <div className="flex pt-6 justify-between">
                                        <Button severity="secondary" onClick={() => stepper?.setActiveStep(1)}>
                                            <ArrowLeft />
                                            Back
                                        </Button>
                                        <Button onClick={() => stepper?.setActiveStep(3)}>
                                            Next
                                            <ArrowRight />
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Stepper.Panel>
                    <Stepper.Panel asChild value={3}>
                        {(instance: StepperPanelInstance) => {
                            const { stepper } = instance;

                            return (
                                <>
                                    <div className="flex flex-col gap-2 mx-auto" style={{ minHeight: '16rem', maxWidth: '24rem' }}>
                                        <div className="text-center mt-4 mb-4 text-xl font-semibold">Account created successfully</div>
                                        <div className="flex justify-center">
                                            <Image
                                                alt="logo"
                                                width={240}
                                                height={160}
                                                src="https://primefaces.org/cdn/primevue/images/stepper/content.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex pt-6 justify-start">
                                        <Button severity="secondary" onClick={() => stepper?.setActiveStep(2)}>
                                            <ArrowLeft />
                                            Back
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Stepper.Panel>
                </Stepper.Panels>
            </Stepper.Root>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/stepper.md#api) for `StepperRoot`, `StepperList`, `StepperStep`, `StepperItem`, `StepperHeader`, `StepperNumber`, `StepperTitle`, `StepperSeparator`, `StepperPanels`, `StepperPanel`, `StepperContent` component documentation.

### Hooks

See [Headless API](../../headless/components/stepper.md#api) for `useStepper` hook documentation.

### Accessibility

See [Stepper Primitive](../../primitive/components/stepper.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-stepper | Class name of the root element |
| p-stepper-separator | Class name of the separator element |
| p-steppanels | Class name of the panels element |
| p-steppanel | Class name of the panel element |
| p-steppanel-content | Class name of the content element |
| p-steplist | Class name of the list element |
| p-stepitem | Class name of the item element |
| p-step-header | Class name of the header element |
| p-step-number | Class name of the number element |
| p-step-title | Class name of the title element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| stepper.transition.duration | --p-stepper-transition-duration | Transition duration of root |
| stepper.separator.background | --p-stepper-separator-background | Background of separator |
| stepper.separator.active.background | --p-stepper-separator-active-background | Active background of separator |
| stepper.separator.margin | --p-stepper-separator-margin | Margin of separator |
| stepper.separator.size | --p-stepper-separator-size | Size of separator |
| stepper.step.padding | --p-stepper-step-padding | Padding of step |
| stepper.step.gap | --p-stepper-step-gap | Gap of step |
| stepper.step.header.padding | --p-stepper-step-header-padding | Padding of step header |
| stepper.step.header.border.radius | --p-stepper-step-header-border-radius | Border radius of step header |
| stepper.step.header.focus.ring.width | --p-stepper-step-header-focus-ring-width | Focus ring width of step header |
| stepper.step.header.focus.ring.style | --p-stepper-step-header-focus-ring-style | Focus ring style of step header |
| stepper.step.header.focus.ring.color | --p-stepper-step-header-focus-ring-color | Focus ring color of step header |
| stepper.step.header.focus.ring.offset | --p-stepper-step-header-focus-ring-offset | Focus ring offset of step header |
| stepper.step.header.focus.ring.shadow | --p-stepper-step-header-focus-ring-shadow | Focus ring shadow of step header |
| stepper.step.header.gap | --p-stepper-step-header-gap | Gap of step header |
| stepper.step.title.color | --p-stepper-step-title-color | Color of step title |
| stepper.step.title.active.color | --p-stepper-step-title-active-color | Active color of step title |
| stepper.step.title.font.weight | --p-stepper-step-title-font-weight | Font weight of step title |
| stepper.step.title.font.size | --p-stepper-step-title-font-size | Font size of step title |
| stepper.step.number.background | --p-stepper-step-number-background | Background of step number |
| stepper.step.number.active.background | --p-stepper-step-number-active-background | Active background of step number |
| stepper.step.number.border.color | --p-stepper-step-number-border-color | Border color of step number |
| stepper.step.number.active.border.color | --p-stepper-step-number-active-border-color | Active border color of step number |
| stepper.step.number.color | --p-stepper-step-number-color | Color of step number |
| stepper.step.number.active.color | --p-stepper-step-number-active-color | Active color of step number |
| stepper.step.number.size | --p-stepper-step-number-size | Size of step number |
| stepper.step.number.font.size | --p-stepper-step-number-font-size | Font size of step number |
| stepper.step.number.font.weight | --p-stepper-step-number-font-weight | Font weight of step number |
| stepper.step.number.border.radius | --p-stepper-step-number-border-radius | Border radius of step number |
| stepper.step.number.shadow | --p-stepper-step-number-shadow | Shadow of step number |
| stepper.steppanels.padding | --p-stepper-steppanels-padding | Padding of steppanels |
| stepper.steppanel.background | --p-stepper-steppanel-background | Background of steppanel |
| stepper.steppanel.color | --p-stepper-steppanel-color | Color of steppanel |
| stepper.steppanel.padding | --p-stepper-steppanel-padding | Padding of steppanel |
| stepper.steppanel.indent | --p-stepper-steppanel-indent | Indent of steppanel |
