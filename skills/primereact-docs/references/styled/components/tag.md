# Tag

Tag component is used to categorize content.

```tsx
import { Clock, InfoCircle } from '@primeicons/react';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { TimesCircle } from '@primeicons/react/times-circle';
import { Tag } from '@primereact/ui/tag';

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

## Usage

```tsx
import { Tag } from '@primereact/ui/tag';
```

```tsx
<Tag />
```

## Examples

### Basic

A small label for categorizing or marking items.

```tsx
import { Tag } from '@primereact/ui/tag';

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
import { Tag } from '@primereact/ui/tag';

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
import { Tag } from '@primereact/ui/tag';

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
import { Check } from '@primeicons/react/check';
import { Cog } from '@primeicons/react/cog';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { Search } from '@primeicons/react/search';
import { Times } from '@primeicons/react/times';
import { User } from '@primeicons/react/user';
import { Tag } from '@primereact/ui/tag';

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
import { Tag } from '@primereact/ui/tag';

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
import { Tag } from '@primereact/ui/tag';

export default function ButtonDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Tag as="button">Button</Tag>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/tag.md#api) for sub-component documentation.

### Hooks

See [Headless API](../../headless/components/tag.md#api) for hook documentation.

### Accessibility

See [Tag Primitive](../../primitive/components/tag.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-tag | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| tag.font.size | --p-tag-font-size | Font size of root |
| tag.font.weight | --p-tag-font-weight | Font weight of root |
| tag.padding | --p-tag-padding | Padding of root |
| tag.gap | --p-tag-gap | Gap of root |
| tag.border.radius | --p-tag-border-radius | Border radius of root |
| tag.rounded.border.radius | --p-tag-rounded-border-radius | Rounded border radius of root |
| tag.icon.size | --p-tag-icon-size | Size of icon |
| tag.primary.background | --p-tag-primary-background | Background of primary |
| tag.primary.color | --p-tag-primary-color | Color of primary |
| tag.secondary.background | --p-tag-secondary-background | Background of secondary |
| tag.secondary.color | --p-tag-secondary-color | Color of secondary |
| tag.success.background | --p-tag-success-background | Background of success |
| tag.success.color | --p-tag-success-color | Color of success |
| tag.info.background | --p-tag-info-background | Background of info |
| tag.info.color | --p-tag-info-color | Color of info |
| tag.warn.background | --p-tag-warn-background | Background of warn |
| tag.warn.color | --p-tag-warn-color | Color of warn |
| tag.danger.background | --p-tag-danger-background | Background of danger |
| tag.danger.color | --p-tag-danger-color | Color of danger |
| tag.contrast.background | --p-tag-contrast-background | Background of contrast |
| tag.contrast.color | --p-tag-contrast-color | Color of contrast |
