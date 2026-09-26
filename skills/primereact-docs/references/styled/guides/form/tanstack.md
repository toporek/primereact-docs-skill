# TanStack Form

Build validated forms with PrimeReact and TanStack Form.

Open the <a href="https://stackblitz.com/edit/vitejs-vite-bluiv8e7?file=src%2Fcomponents%2Ftanstack-form.tsx" target="_blank" rel="noopener noreferrer">complete example on StackBlitz</a> to run and edit the form built in this guide.

## Introduction

[TanStack Form](https://tanstack.com/form) is a headless, fully type-safe form library. Fields are declared with the `form.Field` component, and each one owns its value and handlers. PrimeReact inputs are controlled, so they read from `field.state.value` and report through `field.handleChange`.

TanStack Form implements the [Standard Schema](https://github.com/standard-schema/standard-schema) spec, so a [Zod](https://zod.dev/) schema plugs straight into `validators` with no adapter.

```bash
npm install @tanstack/react-form zod
```

## Anatomy

A field is a `form.Field` whose render callback receives a `field` object. Read the value from `field.state.value`, push changes with `field.handleChange`, and mark it visited with `field.handleBlur`:

```tsx title="Anatomy" showLineNumbers
<form.Field name="projectName">
    {(field) => (
        <InputText
            id={field.name}
            value={field.state.value} // current value
            onChange={(e) => field.handleChange(e.target.value)} // push the change
            onBlur={field.handleBlur} // mark as touched
            invalid={field.state.meta.errors.length > 0} // error styling
        />
    )}
</form.Field>
```

- **`field.state.value`**: the current value of this field.
- **`field.handleChange` / `field.handleBlur`**: update the value and the touched state.
- **`field.state.meta`**: the field's status (`errors`, `isTouched`, `isDirty`, `isValidating`).

Native inputs report a DOM event, so pass `e.target.value`. Composite components report their own value, covered in [Fields](#fields).

## Create the form

### Schema

Describe the shape and rules of the form with Zod. The message passed to each rule is what surfaces as the field error:

```tsx title="schema.ts" showLineNumbers
import { z } from 'zod';

export const schema = z.object({
    projectName: z.string().min(1, 'Project name is required.'),
    framework: z.string().min(1, 'Please select a framework.'),
    rootDir: z.string().min(1, 'Root directory is required.'),
    environments: z.array(z.string()).min(1, 'Select at least one environment.')
});

export type FormValues = z.infer<typeof schema>;
```

### Connect to TanStack Form

Create the form with `useForm`. Provide `defaultValues` for every field, pass the schema to `validators`, and handle the typed `value` in `onSubmit`:

```tsx title="deploy-form.tsx" showLineNumbers {5,6}
import { useForm } from '@tanstack/react-form';
import { schema } from './schema';

const form = useForm({
    defaultValues: { projectName: '', framework: '', rootDir: './', environments: [] as string[] },
    validators: { onChange: schema },
    onSubmit: ({ value }) => {
        console.log(value);
    }
});
```

`validators` accepts any Standard Schema validator, so you can swap Zod for Valibot or ArkType without changing anything else. Attach `onBlur` or `onSubmit` validators instead of `onChange` to control timing.

### Submit

TanStack Form does not hijack the native submit, so prevent the default and call `form.handleSubmit` yourself. It validates first and only runs your `onSubmit` when every field passes:

```tsx title="Submit" showLineNumbers
return (
    <form
        onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
        }}
        className="flex flex-col gap-6"
    >
        {/* fields go here */}
        <Button type="submit">Deploy</Button>
    </form>
);
```

### Reset

Call `form.reset()` to clear every field back to `defaultValues`, or pass an object to seed the form with new values instead, for example after a successful submit:

```tsx title="Reset"
// restore the defaults
<Button type="button" severity="secondary" variant="outlined" onClick={() => form.reset()}>
    Reset
</Button>;

// or set new values
form.reset({ projectName: 'my-app', framework: 'nextjs', rootDir: './', environments: ['production'] });
```

### Result

Everything above comes together as the complete form. `form.Subscribe` reads the live form state so the submit button can disable itself while the form is invalid or submitting. Each field is broken down in [Fields](#fields):

<div className="[&_pre]:max-h-[32rem] [&_pre]:overflow-y-auto">

```tsx title="deploy-form.tsx" showLineNumbers
'use client';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { ChevronDown, Check } from '@primeicons/react';
import { InputText } from '@primereact/ui/inputtext';
import { Select } from '@primereact/ui/select';
import { Checkbox } from '@primereact/ui/checkbox';
import { CheckboxGroup } from '@primereact/ui/checkboxgroup';
import { Label } from '@primereact/ui/label';
import { Button } from '@primereact/ui/button';
import { Message } from '@primereact/ui/message';

const FRAMEWORKS = [
    { label: 'Next.js', value: 'nextjs' },
    { label: 'Vite', value: 'vite' },
    { label: 'Astro', value: 'astro' }
];

const ENVIRONMENTS = [
    { label: 'Production', value: 'production' },
    { label: 'Preview', value: 'preview' },
    { label: 'Development', value: 'development' }
];

const schema = z.object({
    projectName: z.string().min(1, 'Project name is required.'),
    framework: z.string().min(1, 'Please select a framework.'),
    rootDir: z.string().min(1, 'Root directory is required.'),
    environments: z.array(z.string()).min(1, 'Select at least one environment.')
});

export default function DeployForm() {
    const form = useForm({
        defaultValues: { projectName: '', framework: '', rootDir: './', environments: [] as string[] },
        validators: { onChange: schema },
        onSubmit: ({ value }) => {
            console.log(value);
        }
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
            className="flex flex-col gap-6"
        >
            <form.Field name="projectName">
                {(field) => (
                    <div className="flex flex-col gap-2">
                        <Label htmlFor={field.name}>Project name</Label>
                        <InputText id={field.name} value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} onBlur={field.handleBlur} invalid={field.state.meta.errors.length > 0} fluid />
                        {field.state.meta.errors.length > 0 && (
                            <Message.Root severity="error" variant="simple" size="small">
                                <Message.Content>
                                    <Message.Text>{field.state.meta.errors[0]?.message}</Message.Text>
                                </Message.Content>
                            </Message.Root>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name="framework">
                {(field) => (
                    <div className="flex flex-col gap-2">
                        <Label htmlFor={field.name}>Framework preset</Label>
                        <Select.Root
                            value={field.state.value}
                            onValueChange={(e) => field.handleChange(e.value as string)}
                            onBlur={field.handleBlur}
                            options={FRAMEWORKS}
                            optionLabel="label"
                            optionValue="value"
                            invalid={field.state.meta.errors.length > 0}
                        >
                            <Select.Trigger type="button">
                                <Select.Value placeholder="Select a framework" />
                                <Select.Indicator>
                                    <ChevronDown />
                                </Select.Indicator>
                            </Select.Trigger>
                            <Select.Portal>
                                <Select.Positioner>
                                    <Select.Popup>
                                        <Select.List />
                                    </Select.Popup>
                                </Select.Positioner>
                            </Select.Portal>
                        </Select.Root>
                        {field.state.meta.errors.length > 0 && (
                            <Message.Root severity="error" variant="simple" size="small">
                                <Message.Content>
                                    <Message.Text>{field.state.meta.errors[0]?.message}</Message.Text>
                                </Message.Content>
                            </Message.Root>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name="rootDir">
                {(field) => (
                    <div className="flex flex-col gap-2">
                        <Label htmlFor={field.name}>Root directory</Label>
                        <InputText id={field.name} value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} onBlur={field.handleBlur} invalid={field.state.meta.errors.length > 0} fluid />
                        {field.state.meta.errors.length > 0 && (
                            <Message.Root severity="error" variant="simple" size="small">
                                <Message.Content>
                                    <Message.Text>{field.state.meta.errors[0]?.message}</Message.Text>
                                </Message.Content>
                            </Message.Root>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field name="environments">
                {(field) => (
                    <div className="flex flex-col gap-2">
                        <Label>Environments</Label>
                        <CheckboxGroup value={field.state.value} onValueChange={(e) => field.handleChange(e.value as string[])}>
                            {ENVIRONMENTS.map((env) => (
                                <div key={env.value} className="flex items-center gap-2">
                                    <Checkbox.Root inputId={env.value} value={env.value}>
                                        <Checkbox.Box>
                                            <Checkbox.Indicator match="checked">
                                                <Check />
                                            </Checkbox.Indicator>
                                        </Checkbox.Box>
                                    </Checkbox.Root>
                                    <Label htmlFor={env.value}>{env.label}</Label>
                                </div>
                            ))}
                        </CheckboxGroup>
                        {field.state.meta.errors.length > 0 && (
                            <Message.Root severity="error" variant="simple" size="small">
                                <Message.Content>
                                    <Message.Text>{field.state.meta.errors[0]?.message}</Message.Text>
                                </Message.Content>
                            </Message.Root>
                        )}
                    </div>
                )}
            </form.Field>

            <div className="flex justify-end gap-3">
                <Button type="button" severity="secondary" variant="outlined" onClick={() => form.reset()}>
                    Reset
                </Button>
                <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
                    {([canSubmit, isSubmitting]) => (
                        <Button type="submit" disabled={!canSubmit}>
                            {isSubmitting ? 'Deploying…' : 'Deploy'}
                        </Button>
                    )}
                </form.Subscribe>
            </div>
        </form>
    );
}
```

</div>

## Fields

Every field is a `form.Field`. How you forward the change depends on the component:

- **Native inputs**: `InputText` and `Textarea` render a real `<input>` / `<textarea>` and report a DOM event, so pass `e.target.value` to `field.handleChange`.
- **Composite inputs**: `Select`, `Checkbox`, `RadioButtonGroup` and `CheckboxGroup` report through `onValueChange` / `onCheckedChange` with an event object, so forward `event.value` / `event.checked`.

Bind `invalid={field.state.meta.errors.length > 0}` on any component to get error styling.

### InputText

```tsx title="InputText"
<form.Field name="projectName">
    {(field) => (
        <div className="flex flex-col gap-2">
            <Label htmlFor={field.name}>Project name</Label>
            <InputText id={field.name} value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} onBlur={field.handleBlur} invalid={field.state.meta.errors.length > 0} fluid />
        </div>
    )}
</form.Field>
```

### Select

```tsx title="Select"
<form.Field name="framework">
    {(field) => (
        <Select.Root value={field.state.value} onValueChange={(e) => field.handleChange(e.value as string)} onBlur={field.handleBlur} options={FRAMEWORKS} optionLabel="label" optionValue="value" invalid={field.state.meta.errors.length > 0}>
            <Select.Trigger type="button">
                <Select.Value placeholder="Select a framework" />
                <Select.Indicator>
                    <ChevronDown />
                </Select.Indicator>
            </Select.Trigger>
            <Select.Portal>
                <Select.Positioner>
                    <Select.Popup>
                        <Select.List />
                    </Select.Popup>
                </Select.Positioner>
            </Select.Portal>
        </Select.Root>
    )}
</form.Field>
```

### Checkbox

A single checkbox is a boolean, so bind `checked` and forward `event.checked`:

```tsx title="Checkbox"
<form.Field name="agree">
    {(field) => (
        <Checkbox.Root checked={field.state.value} onCheckedChange={(e) => field.handleChange(e.checked)}>
            <Checkbox.Box>
                <Checkbox.Indicator match="checked">
                    <Check />
                </Checkbox.Indicator>
            </Checkbox.Box>
        </Checkbox.Root>
    )}
</form.Field>
```

### Groups

`RadioButtonGroup`, `CheckboxGroup` and `ToggleButtonGroup` own a single value for the whole group, so wrap the group (not each item) in one `form.Field`:

```tsx title="CheckboxGroup"
<form.Field name="environments">
    {(field) => (
        <CheckboxGroup value={field.state.value} onValueChange={(e) => field.handleChange(e.value as string[])}>
            {ENVIRONMENTS.map((env) => (
                <div key={env.value} className="flex items-center gap-2">
                    <Checkbox.Root inputId={env.value} value={env.value}>
                        <Checkbox.Box>
                            <Checkbox.Indicator match="checked">
                                <Check />
                            </Checkbox.Indicator>
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label htmlFor={env.value}>{env.label}</Label>
                </div>
            ))}
        </CheckboxGroup>
    )}
</form.Field>
```

### Value types

Most inputs hold a string, but some do not. Match the schema and the `defaultValues` to the value type:

- `InputNumber`, `Slider`, `Rating` → `number` (`z.number()`)
- `DatePicker` → `Date` (`z.date()`)
- `Checkbox`, `ToggleSwitch`, `ToggleButton` → `boolean` (`z.boolean()`)
- `CheckboxGroup`, multiple `Select`, `InputTags` → `array` (`z.array(...)`)

Number and date fields start as `null`, not `''`. An empty string breaks their value type.

## Validation

### When it runs

Attach the schema to the timing you want under `validators`. You can set them on the whole form or on an individual `form.Field`:

```tsx
// whole form
useForm({ validators: { onChange: schema } });

// single field
<form.Field name="projectName" validators={{ onBlur: z.string().min(1, 'Required.') }}>
```

| Validator       | Runs                             |
| --------------- | -------------------------------- |
| `onChange`      | on every keystroke / change      |
| `onBlur`        | when a field loses focus         |
| `onSubmit`      | on submit only                   |
| `onChangeAsync` | debounced async check (e.g. API) |

Field-level validators run alongside the form-level ones, so you can layer a cheap sync rule with an async uniqueness check.

### Showing errors

`field.state.meta.errors` is an array of the schema issues for that field. Render the first message with the `Message` component in the `simple` variant so it sits inline under the field:

```tsx title="Error message"
<form.Field name="projectName">
    {(field) => (
        <div className="flex flex-col gap-2">
            <Label htmlFor={field.name}>Project name</Label>
            <InputText id={field.name} value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} onBlur={field.handleBlur} invalid={field.state.meta.errors.length > 0} fluid />
            {field.state.meta.errors.length > 0 && (
                <Message.Root severity="error" variant="simple" size="small">
                    <Message.Content>
                        <Message.Text>{field.state.meta.errors[0]?.message}</Message.Text>
                    </Message.Content>
                </Message.Root>
            )}
        </div>
    )}
</form.Field>
```

Gate the message on `field.state.meta.isTouched` if you only want it to appear after the user has visited the field.

## Array fields

For a repeatable set of fields, such as environment variables, describe the item shape as an array in the schema and declare the field with `mode="array"`:

```tsx title="schema" showLineNumbers
const schema = z.object({
    envVars: z.array(
        z.object({
            key: z.string().min(1, 'Key is required.'),
            value: z.string().min(1, 'Value is required.')
        })
    )
});
```

An array field exposes `pushValue` and `removeValue`. Each input targets its row with a nested `form.Field` whose `name` includes the index:

```tsx title="Array fields" showLineNumbers {1,4,17,20}
<form.Field name="envVars" mode="array">
    {(arrayField) => (
        <div className="flex flex-col gap-3">
            {arrayField.state.value.map((_, i) => (
                <div key={i} className="flex items-start gap-2">
                    <form.Field name={`envVars[${i}].key`}>{(field) => <InputText value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} placeholder="KEY" />}</form.Field>
                    <form.Field name={`envVars[${i}].value`}>{(field) => <InputText value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} placeholder="value" />}</form.Field>
                    <Button type="button" severity="secondary" variant="text" onClick={() => arrayField.removeValue(i)}>
                        <Times />
                    </Button>
                </div>
            ))}
            <Button type="button" variant="outlined" onClick={() => arrayField.pushValue({ key: '', value: '' })}>
                Add variable
            </Button>
        </div>
    )}
</form.Field>
```

## Nested objects

Group related fields under an object in the schema and target them with a dotted `name`:

```tsx title="schema"
const schema = z.object({
    build: z.object({
        command: z.string().min(1, 'Build command is required.'),
        install: z.string().min(1, 'Install command is required.')
    })
});
```

```tsx title="Nested fields"
<form.Field name="build.command">
    {(field) => <InputText value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} placeholder="npm run build" />}
</form.Field>
<form.Field name="build.install">
    {(field) => <InputText value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} placeholder="npm install" />}
</form.Field>
```

Defaults follow the same shape: `defaultValues: { build: { command: '', install: '' } }`.
