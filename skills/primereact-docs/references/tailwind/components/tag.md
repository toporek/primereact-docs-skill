# Tag

Tag is a label component used to categorize content.

```tsx
import { Check, Clock, ExclamationTriangle, InfoCircle, TimesCircle } from '@primeicons/react';
import { Tag } from '@/components/ui/tag';

export default function Preview() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-3 max-w-xs mx-auto">
            <Tag severity="secondary">Draft</Tag>

            <Tag severity="info">
                <InfoCircle />
                Info
            </Tag>

            <Tag severity="success" rounded>
                Active
            </Tag>

            <Tag severity="warn">
                <ExclamationTriangle />
                Attention
            </Tag>

            <Tag severity="danger" rounded>
                <TimesCircle />
                Error
            </Tag>

            <Tag severity="contrast">Featured</Tag>

            <Tag severity="info">New</Tag>

            <Tag severity="secondary" rounded>
                Archived
            </Tag>

            <Tag severity="warn" rounded>
                <Clock />
                Pending
            </Tag>

            <Tag severity="success">
                <Check />
                Verified
            </Tag>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/tag.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Tag } from '@/components/ui/tag';
```

```tsx
<Tag>Label</Tag>
```

## Examples

### Basic

A small label for categorizing or marking items.

```tsx
import { Tag } from '@/components/ui/tag';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <Tag severity="contrast">Highlighted</Tag>
        </div>
    );
}

```

### Severity

Use `severity` property to define the severity of the tag.

```tsx
import { Tag } from '@/components/ui/tag';

export default function SeverityDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Tag>Primary</Tag>
            <Tag severity="secondary">Secondary</Tag>
            <Tag severity="success">Success</Tag>
            <Tag severity="info">Info</Tag>
            <Tag severity="warn">Warn</Tag>
            <Tag severity="danger">Danger</Tag>
            <Tag severity="contrast">Contrast</Tag>
        </div>
    );
}

```

### Pill

Use `rounded` property to display a tag as a pill.

```tsx
import { Tag } from '@/components/ui/tag';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Tag rounded>Primary</Tag>
            <Tag severity="secondary" rounded>
                Secondary
            </Tag>
            <Tag severity="success" rounded>
                Success
            </Tag>
            <Tag severity="info" rounded>
                Info
            </Tag>
            <Tag severity="warn" rounded>
                Warn
            </Tag>
            <Tag severity="danger" rounded>
                Danger
            </Tag>
            <Tag severity="contrast" rounded>
                Contrast
            </Tag>
        </div>
    );
}

```

### Icon

Place the icon left or right of the label.

```tsx
import { Check, Cog, ExclamationTriangle, Search, Times, User } from '@primeicons/react';
import { Tag } from '@/components/ui/tag';

export default function IconDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2">
                <Tag>
                    <User></User>
                    Primary
                </Tag>
                <Tag severity="secondary">
                    <User />
                    Secondary
                </Tag>
                <Tag severity="success">
                    <Check />
                    Success
                </Tag>
                <Tag severity="info">
                    <Search />
                    Info
                </Tag>
                <Tag severity="warn">
                    <ExclamationTriangle />
                    Warn
                </Tag>
                <Tag severity="danger">
                    <Times />
                    Danger
                </Tag>
                <Tag severity="contrast">
                    <Cog />
                    Contrast
                </Tag>
            </div>
        </div>
    );
}

```

### Template

Children of the component are passed as the content for templating.

```tsx
import { Tag } from '@/components/ui/tag';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <Tag
                className="flex items-center gap-2 px-3"
                style={{ border: '2px solid var(--border-color)', background: 'transparent', color: 'var(--text-color)' }}
            >
                <img
                    alt="Country"
                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                    className="flag flag-it"
                    style={{ width: '18px' }}
                />
                <span className="text-base">Italy</span>
            </Tag>
        </div>
    );
}

```

### As button

Use `as="button"` to display a tag as a button.

```tsx
import { Tag } from '@/components/ui/tag';

export default function ButtonDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Tag as="button">Button</Tag>
        </div>
    );
}

```

## Accessibility

### Screen Reader

Tag does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required.

### Keyboard Support

Component does not include any interactive elements.
