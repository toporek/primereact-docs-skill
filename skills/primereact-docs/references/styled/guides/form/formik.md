# Formik

Build validated forms with PrimeReact and Formik.

Open the <a href="https://stackblitz.com/edit/vitejs-vite-ptxsdm4s?file=src%2Fcomponents%2Fformik-form.tsx" target="_blank" rel="noopener noreferrer">complete example on StackBlitz</a> to run and edit the form built in this guide.

## Introduction

[Formik](https://formik.org/) centralizes form state, validation and submission in a single `useFormik` hook. PrimeReact inputs are controlled, so they read their value from `formik.values` and report changes back through `getFieldProps` or `setFieldValue`.

Throughout this guide validation is handled with [Zod](https://zod.dev/) through the [`zod-formik-adapter`](https://www.npmjs.com/package/zod-formik-adapter): you describe the form once as a schema and Formik enforces it.

```bash
npm install formik zod zod-formik-adapter
```

## Anatomy

A native field binds with `getFieldProps(name)`, which returns the `name`, `value`, `onChange` and `onBlur` that Formik needs. Errors live in `formik.errors`, and `formik.touched` tells you whether the user has visited the field yet:

```tsx title="Anatomy" showLineNumbers
<InputText
    {...formik.getFieldProps('projectName')} // name, value, onChange, onBlur
    invalid={formik.touched.projectName && !!formik.errors.projectName} // error styling
/>
```

- **`getFieldProps(name)`**: bundles the handlers that bind a native input to the form.
- **`formik.values`**: the current value of every field.
- **`formik.errors` / `formik.touched`**: the validation message and visited state per field.

`getFieldProps` is enough for native inputs like `InputText` and `Textarea`. Composite components report through their own callback, which is covered in [Fields](#fields).

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

### Connect to Formik

Pass the schema through `toFormikValidationSchema`, and provide `initialValues` for every field so the inputs are controlled from the first render:

```tsx title="deploy-form.tsx" showLineNumbers {8}
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { schema, type FormValues } from './schema';

const formik = useFormik<FormValues>({
    initialValues: { projectName: '', framework: '', rootDir: './', environments: [] },
    validationSchema: toFormikValidationSchema(schema),
    onSubmit: (values) => {
        console.log(values);
    }
});
```

Formik validates with Yup natively. The `zod-formik-adapter` lets you keep a single Zod schema shared with the rest of your app; swap it for `validationSchema: yupSchema` if you prefer Yup.

### Submit

Wire the form's `onSubmit` to `formik.handleSubmit`. Formik validates first and only calls your `onSubmit` callback when every field passes:

```tsx title="Submit" showLineNumbers
return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
        {/* fields go here */}
        <Button type="submit">Deploy</Button>
    </form>
);
```

### Reset

Call `formik.resetForm()` to clear every field back to `initialValues`; pass an object to seed the form with new values instead, for example after a successful submit:

```tsx title="Reset"
// restore the initial values
<Button type="button" severity="secondary" variant="outlined" onClick={() => formik.resetForm()}>
    Reset
</Button>;

// or set new values
formik.resetForm({ values: { projectName: 'my-app', framework: 'nextjs', rootDir: './', environments: ['production'] } });
```

### Result

Everything above comes together as the complete form. Each field is broken down in [Fields](#fields):

<div className="[&_pre]:max-h-[32rem] [&_pre]:overflow-y-auto">

```tsx title="deploy-form.tsx" showLineNumbers
'use client';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
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
    const formik = useFormik<FormValues>({
        initialValues: { projectName: '', framework: '', rootDir: './', environments: [] },
        validationSchema: toFormikValidationSchema(schema),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Label htmlFor="projectName">Project name</Label>
                <InputText id="projectName" {...formik.getFieldProps('projectName')} invalid={formik.touched.projectName && !!formik.errors.projectName} fluid />
                {formik.touched.projectName && formik.errors.projectName && (
                    <Message.Root severity="error" variant="simple" size="small">
                        <Message.Content>
                            <Message.Text>{formik.errors.projectName}</Message.Text>
                        </Message.Content>
                    </Message.Root>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="framework">Framework preset</Label>
                <Select.Root
                    value={formik.values.framework}
                    onValueChange={(e) => formik.setFieldValue('framework', e.value)}
                    onBlur={() => formik.setFieldTouched('framework', true)}
                    options={FRAMEWORKS}
                    optionLabel="label"
                    optionValue="value"
                    invalid={formik.touched.framework && !!formik.errors.framework}
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
                {formik.touched.framework && formik.errors.framework && (
                    <Message.Root severity="error" variant="simple" size="small">
                        <Message.Content>
                            <Message.Text>{formik.errors.framework}</Message.Text>
                        </Message.Content>
                    </Message.Root>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="rootDir">Root directory</Label>
                <InputText id="rootDir" {...formik.getFieldProps('rootDir')} invalid={formik.touched.rootDir && !!formik.errors.rootDir} fluid />
                {formik.touched.rootDir && formik.errors.rootDir && (
                    <Message.Root severity="error" variant="simple" size="small">
                        <Message.Content>
                            <Message.Text>{formik.errors.rootDir}</Message.Text>
                        </Message.Content>
                    </Message.Root>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <Label>Environments</Label>
                <CheckboxGroup value={formik.values.environments} onValueChange={(e) => formik.setFieldValue('environments', e.value)}>
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
                {formik.touched.environments && formik.errors.environments && (
                    <Message.Root severity="error" variant="simple" size="small">
                        <Message.Content>
                            <Message.Text>{formik.errors.environments as string}</Message.Text>
                        </Message.Content>
                    </Message.Root>
                )}
            </div>

            <div className="flex justify-end gap-3">
                <Button type="button" severity="secondary" variant="outlined" onClick={() => formik.resetForm()}>
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

Every field reads from `formik.values`. How you forward the change depends on the component:

- **Native inputs**: `InputText` and `Textarea` render a real `<input>` / `<textarea>`, so spread `{...formik.getFieldProps(name)}`.
- **Composite inputs**: `Select`, `Checkbox`, `RadioButtonGroup` and `CheckboxGroup` report through `onValueChange` / `onCheckedChange` with an event object, so push the value with `setFieldValue(name, event.value)`.

Bind `invalid` on any component to get error styling.

### InputText

```tsx title="InputText"
<div className="flex flex-col gap-2">
    <Label htmlFor="projectName">Project name</Label>
    <InputText id="projectName" {...formik.getFieldProps('projectName')} invalid={formik.touched.projectName && !!formik.errors.projectName} fluid />
</div>
```

### Select

```tsx title="Select"
<Select.Root
    value={formik.values.framework}
    onValueChange={(e) => formik.setFieldValue('framework', e.value)}
    onBlur={() => formik.setFieldTouched('framework', true)}
    options={FRAMEWORKS}
    optionLabel="label"
    optionValue="value"
    invalid={formik.touched.framework && !!formik.errors.framework}
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
```

### Checkbox

A single checkbox is a boolean, so bind `checked` and forward `event.checked`:

```tsx title="Checkbox"
<Checkbox.Root checked={formik.values.agree} onCheckedChange={(e) => formik.setFieldValue('agree', e.checked)}>
    <Checkbox.Box>
        <Checkbox.Indicator match="checked">
            <Check />
        </Checkbox.Indicator>
    </Checkbox.Box>
</Checkbox.Root>
```

### Groups

`RadioButtonGroup`, `CheckboxGroup` and `ToggleButtonGroup` own a single value for the whole group, so bind the group value and push the change once:

```tsx title="CheckboxGroup"
<CheckboxGroup value={formik.values.environments} onValueChange={(e) => formik.setFieldValue('environments', e.value)}>
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
```

### Value types

Most inputs hold a string, but some do not. Match the schema and the `initialValues` to the value type:

- `InputNumber`, `Slider`, `Rating` → `number` (`z.number()`)
- `DatePicker` → `Date` (`z.date()`)
- `Checkbox`, `ToggleSwitch`, `ToggleButton` → `boolean` (`z.boolean()`)
- `CheckboxGroup`, multiple `Select`, `InputTags` → `array` (`z.array(...)`)

Number and date fields start as `null`, not `''`. An empty string breaks their value type.

## Validation

### When it runs

By default Formik validates on every change and blur. Turn either off with `validateOnChange` and `validateOnBlur`:

```tsx
useFormik({ validateOnChange: false, validateOnBlur: true /* ... */ });
```

| Option             | Default | Validates                   |
| ------------------ | ------- | --------------------------- |
| `validateOnChange` | `true`  | on every keystroke / change |
| `validateOnBlur`   | `true`  | when a field loses focus    |
| `validateOnMount`  | `false` | once when the form mounts   |

Formik always validates on submit and marks every field touched, so errors surface even for fields the user never visited.

### Showing errors

Read the message from `formik.errors[name]` and gate it on `formik.touched[name]` so it only appears after the user has interacted. Render it with the `Message` component in the `simple` variant so it sits inline under the field:

```tsx title="Error message"
<div className="flex flex-col gap-2">
    <Label htmlFor="projectName">Project name</Label>
    <InputText id="projectName" {...formik.getFieldProps('projectName')} invalid={formik.touched.projectName && !!formik.errors.projectName} fluid />
    {formik.touched.projectName && formik.errors.projectName && (
        <Message.Root severity="error" variant="simple" size="small">
            <Message.Content>
                <Message.Text>{formik.errors.projectName}</Message.Text>
            </Message.Content>
        </Message.Root>
    )}
</div>
```

## Array fields

For a repeatable set of fields, such as environment variables, describe the item shape as an array in the schema:

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

Map over `formik.values.envVars` and mutate the array with `setFieldValue`. Each input targets its row with a dotted `name` (`envVars.0.key`):

```tsx title="Array fields" showLineNumbers {2,3,10,13}
<div className="flex flex-col gap-3">
    {formik.values.envVars.map((row, i) => (
        <div key={i} className="flex items-start gap-2">
            <InputText {...formik.getFieldProps(`envVars.${i}.key`)} placeholder="KEY" />
            <InputText {...formik.getFieldProps(`envVars.${i}.value`)} placeholder="value" />
            <Button
                type="button"
                severity="secondary"
                variant="text"
                onClick={() =>
                    formik.setFieldValue(
                        'envVars',
                        formik.values.envVars.filter((_, idx) => idx !== i)
                    )
                }
            >
                <Times />
            </Button>
        </div>
    ))}
    <Button type="button" variant="outlined" onClick={() => formik.setFieldValue('envVars', [...formik.values.envVars, { key: '', value: '' }])}>
        Add variable
    </Button>
</div>
```

Formik also ships a `<FieldArray>` component with `push` / `remove` helpers. It needs the Formik context, so wrap the tree in `<FormikProvider value={formik}>` to use it.

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
<InputText {...formik.getFieldProps('build.command')} placeholder="npm run build" />
<InputText {...formik.getFieldProps('build.install')} placeholder="npm install" />
```

Initial values follow the same shape: `initialValues: { build: { command: '', install: '' } }`.
