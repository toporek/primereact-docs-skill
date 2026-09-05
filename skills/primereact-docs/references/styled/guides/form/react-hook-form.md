# React Hook Form

Build validated forms with PrimeReact and React Hook Form.

Open the <a href="https://stackblitz.com/edit/vitejs-vite-jkwqpcwm?file=src%2Fcomponents%2Frhf-form.tsx" target="_blank" rel="noopener noreferrer">complete example on StackBlitz</a> to run and edit the form built in this guide.

## Introduction

[React Hook Form](https://react-hook-form.com/) manages form state, submission and validation with minimal re-renders. PrimeReact inputs are controlled, so they connect to the form through its `Controller` component.

Throughout this guide validation is handled with [Zod](https://zod.dev/): you describe the form once as a schema and React Hook Form enforces it on every change and submit.

```bash
npm install react-hook-form zod @hookform/resolvers
```

## Anatomy

A field is a `Controller` wrapped around an input. The `Controller` owns the value in the form state and hands it to the input through its `render` callback:

```tsx title="Anatomy" showLineNumbers
<Controller
    name="projectName" // path of this field in the form data
    control={control} // the instance returned by useForm
    render={({ field, fieldState }) => (
        <InputText
            {...field} // value, onChange, onBlur, name, ref
            invalid={fieldState.invalid} // error styling
        />
    )}
/>
```

- **`field`**: the value and handlers that bind the input to the form (`value`, `onChange`, `onBlur`, `name`, `ref`).
- **`fieldState`**: the validation state of this field (`error`, `invalid`, `isTouched`, `isDirty`).

Spreading `{...field}` is enough for native inputs like `InputText` and `Textarea`. Other components need their change forwarded explicitly, which is covered in [Fields](#fields).

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

### Connect to React Hook Form

Pass the schema to `useForm` through `zodResolver`, and provide `defaultValues` for every field so the inputs are controlled from the first render:

```tsx title="deploy-form.tsx" showLineNumbers {6}
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, type FormValues } from './schema';

const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { projectName: '', framework: '', rootDir: './', environments: [] }
});
```

`zodResolver` is used here, but `@hookform/resolvers` also ships resolvers for Yup, Valibot, Joi and more. Swap the resolver and keep everything else the same.

### Submit

Wrap your handler with `handleSubmit`. It validates first and only calls your callback when every field passes; the `values` argument is fully typed from the schema:

```tsx title="Submit" showLineNumbers
const onSubmit = handleSubmit((values) => {
    console.log(values);
});

return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
        {/* fields go here */}
        <Button type="submit">Deploy</Button>
    </form>
);
```

### Reset

Pull `reset` from `useForm`. With no argument it clears every field back to `defaultValues`; pass an object to seed the form with new values instead, for example after a successful submit:

```tsx title="Reset"
const { control, handleSubmit, reset } = useForm({/* ... */});

// restore the defaults
<Button type="button" severity="secondary" variant="outlined" onClick={() => reset()}>
    Reset
</Button>;

// or set new values
reset({ projectName: 'my-app', framework: 'nextjs', environments: ['production'] });
```

### Result

Everything above comes together as the complete form. Each field is broken down in [Fields](#fields):

<div className="[&_pre]:max-h-[32rem] [&_pre]:overflow-y-auto">

```tsx title="deploy-form.tsx" showLineNumbers
'use client';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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

type FormValues = z.infer<typeof schema>;

export default function DeployForm() {
    const { control, handleSubmit, reset } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: { projectName: '', framework: '', rootDir: './', environments: [] }
    });

    const onSubmit = handleSubmit((values) => {
        console.log(values);
    });

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <Controller
                name="projectName"
                control={control}
                render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="projectName">Project name</Label>
                        <InputText id="projectName" {...field} invalid={fieldState.invalid} fluid />
                        {fieldState.error && (
                            <Message.Root severity="error" variant="simple" size="small">
                                <Message.Content>
                                    <Message.Text>{fieldState.error.message}</Message.Text>
                                </Message.Content>
                            </Message.Root>
                        )}
                    </div>
                )}
            />

            <Controller
                name="framework"
                control={control}
                render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="framework">Framework preset</Label>
                        <Select.Root value={field.value} onValueChange={(e) => field.onChange(e.value)} options={FRAMEWORKS} optionLabel="label" optionValue="value" invalid={fieldState.invalid}>
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
                        {fieldState.error && (
                            <Message.Root severity="error" variant="simple" size="small">
                                <Message.Content>
                                    <Message.Text>{fieldState.error.message}</Message.Text>
                                </Message.Content>
                            </Message.Root>
                        )}
                    </div>
                )}
            />

            <Controller
                name="rootDir"
                control={control}
                render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="rootDir">Root directory</Label>
                        <InputText id="rootDir" {...field} invalid={fieldState.invalid} fluid />
                        {fieldState.error && (
                            <Message.Root severity="error" variant="simple" size="small">
                                <Message.Content>
                                    <Message.Text>{fieldState.error.message}</Message.Text>
                                </Message.Content>
                            </Message.Root>
                        )}
                    </div>
                )}
            />

            <Controller
                name="environments"
                control={control}
                render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-2">
                        <Label>Environments</Label>
                        <CheckboxGroup value={field.value} onValueChange={(e) => field.onChange(e.value)}>
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
                        {fieldState.error && (
                            <Message.Root severity="error" variant="simple" size="small">
                                <Message.Content>
                                    <Message.Text>{fieldState.error.message}</Message.Text>
                                </Message.Content>
                            </Message.Root>
                        )}
                    </div>
                )}
            />

            <div className="flex justify-end gap-3">
                <Button type="button" severity="secondary" variant="outlined" onClick={() => reset()}>
                    Reset
                </Button>
                <Button type="submit">Deploy</Button>
            </div>
        </form>
    );
}
```

</div>

## Fields

Every input lives inside a `Controller`. How you forward the change depends on the component:

- **Native inputs**: `InputText` and `Textarea` render a real `<input>` / `<textarea>`, so spread `{...field}` (or pass `field.onChange` directly).
- **Composite inputs**: `Select`, `Checkbox`, `RadioButtonGroup` and `CheckboxGroup` report changes through `onValueChange` / `onCheckedChange` with an event object, so forward `event.value` / `event.checked`.

Bind `invalid={fieldState.invalid}` on any component to get error styling.

### InputText

```tsx title="InputText"
<Controller
    name="projectName"
    control={control}
    render={({ field, fieldState }) => (
        <div className="flex flex-col gap-2">
            <Label htmlFor="projectName">Project name</Label>
            <InputText id="projectName" {...field} invalid={fieldState.invalid} fluid />
        </div>
    )}
/>
```

### Select

```tsx title="Select"
<Controller
    name="framework"
    control={control}
    render={({ field, fieldState }) => (
        <Select.Root value={field.value} onValueChange={(e) => field.onChange(e.value)} options={FRAMEWORKS} optionLabel="label" optionValue="value" invalid={fieldState.invalid}>
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
/>
```

### Checkbox

A single checkbox is a boolean, so bind `checked` and forward `event.checked`:

```tsx title="Checkbox"
<Controller
    name="agree"
    control={control}
    render={({ field }) => (
        <Checkbox.Root checked={field.value} onCheckedChange={(e) => field.onChange(e.checked)}>
            <Checkbox.Box>
                <Checkbox.Indicator match="checked">
                    <Check />
                </Checkbox.Indicator>
            </Checkbox.Box>
        </Checkbox.Root>
    )}
/>
```

### Groups

`RadioButtonGroup`, `CheckboxGroup` and `ToggleButtonGroup` own a single value for the whole group, so wrap the group (not each item) in one `Controller`:

```tsx title="CheckboxGroup"
<Controller
    name="environments"
    control={control}
    render={({ field }) => (
        <CheckboxGroup value={field.value} onValueChange={(e) => field.onChange(e.value)}>
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
/>
```

### Value types

Most inputs hold a string, but some do not. Match the schema and the empty `defaultValue` to the value type:

- `InputNumber`, `Slider`, `Rating` → `number` (`z.number()`)
- `DatePicker` → `Date` (`z.date()`)
- `Checkbox`, `ToggleSwitch`, `ToggleButton` → `boolean` (`z.boolean()`)
- `CheckboxGroup`, multiple `Select`, `InputTags` → `array` (`z.array(...)`)

Number and date fields start as `null`, not `''`. An empty string breaks their value type.

## Validation

### When it runs

By default the form validates on submit and then re-validates a field on every change. Change this with `mode`:

```tsx
useForm({ mode: 'onBlur', resolver: zodResolver(schema) });
```

| Mode                   | Validates                              |
| ---------------------- | -------------------------------------- |
| `onSubmit` _(default)_ | on submit, then re-validates on change |
| `onBlur`               | when a field loses focus               |
| `onChange`             | on every keystroke / change            |
| `onTouched`            | on first blur, then on every change    |
| `all`                  | on both blur and change                |

`reValidateMode` (default `onChange`) controls how fields re-validate _after_ the first submit.

### Showing errors

`fieldState.error.message` holds the message resolved from the schema. Render it with the `Message` component in the `simple` variant so it sits inline under the field:

```tsx title="Error message"
<Controller
    name="projectName"
    control={control}
    render={({ field, fieldState }) => (
        <div className="flex flex-col gap-2">
            <Label htmlFor="projectName">Project name</Label>
            <InputText id="projectName" {...field} invalid={fieldState.invalid} fluid />
            {fieldState.error && (
                <Message.Root severity="error" variant="simple" size="small">
                    <Message.Content>
                        <Message.Text>{fieldState.error.message}</Message.Text>
                    </Message.Content>
                </Message.Root>
            )}
        </div>
    )}
/>
```

## Array fields

For a repeatable set of fields, such as environment variables, describe the item shape as an array in the schema and drive the rows with `useFieldArray`:

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

`useFieldArray` returns the current rows plus helpers to add and remove them. Each input targets its row with a dotted `name` (`envVars.0.key`):

```tsx title="Array fields" showLineNumbers {1,7,8}
const { fields, append, remove } = useFieldArray({ control, name: 'envVars' });

return (
    <div className="flex flex-col gap-3">
        {fields.map((row, i) => (
            <div key={row.id} className="flex items-start gap-2">
                <Controller name={`envVars.${i}.key`} control={control} render={({ field, fieldState }) => <InputText {...field} invalid={fieldState.invalid} placeholder="KEY" />} />
                <Controller name={`envVars.${i}.value`} control={control} render={({ field, fieldState }) => <InputText {...field} invalid={fieldState.invalid} placeholder="value" />} />
                <Button type="button" severity="secondary" variant="text" onClick={() => remove(i)}>
                    <Times />
                </Button>
            </div>
        ))}
        <Button type="button" variant="outlined" onClick={() => append({ key: '', value: '' })}>
            Add variable
        </Button>
    </div>
);
```

Use `row.id` from `fields` as the React `key`, not the array index. `useFieldArray` keeps these ids stable across add and remove.

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
<Controller
    name="build.command"
    control={control}
    render={({ field, fieldState }) => (
        <InputText {...field} invalid={fieldState.invalid} placeholder="npm run build" />
    )}
/>
<Controller
    name="build.install"
    control={control}
    render={({ field, fieldState }) => (
        <InputText {...field} invalid={fieldState.invalid} placeholder="npm install" />
    )}
/>
```

Defaults follow the same shape: `defaultValues: { build: { command: '', install: '' } }`.
