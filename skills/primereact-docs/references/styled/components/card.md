# Card

Card is a flexible container component.

## Usage

```tsx
import { Card } from '@primereact/ui/card';
```

```tsx
<Card.Root>
    <Card.Body>
        <Card.Caption>
            <Card.Title />
            <Card.Subtitle />
        </Card.Caption>
        <Card.Content />
        <Card.Footer />
    </Card.Body>
</Card.Root>
```

## Examples

### Basic

A container with a header, body, and footer for structured content.

### With Form

Use `Card`, `Card.Body`, `Card.Caption`, `Card.Title`, `Card.Subtitle`, `Card.Content`, `Card.Footer`, to create a simple card.

### Advanced

Use `Card.Header` to place an image, avatar or other content in the header.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/card.md#api) for `CardRoot`, `CardHeader`, `CardBody`, `CardCaption`, `CardTitle`, `CardSubtitle`, `CardContent`, and `CardFooter` component documentation.

### Hooks

See [Headless API](../../headless/components/card.md#api) for `useCard` hook documentation.

### Accessibility

See [Card Primitive](../../primitive/components/card.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-card | Class name of the root element |
| p-card-header | Class name of the header element |
| p-card-body | Class name of the body element |
| p-card-caption | Class name of the caption element |
| p-card-title | Class name of the title element |
| p-card-subtitle | Class name of the subtitle element |
| p-card-content | Class name of the content element |
| p-card-footer | Class name of the footer element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| card.background | --p-card-background | Background of root |
| card.border.radius | --p-card-border-radius | Border radius of root |
| card.color | --p-card-color | Color of root |
| card.shadow | --p-card-shadow | Shadow of root |
| card.body.padding | --p-card-body-padding | Padding of body |
| card.body.gap | --p-card-body-gap | Gap of body |
| card.caption.gap | --p-card-caption-gap | Gap of caption |
| card.title.font.size | --p-card-title-font-size | Font size of title |
| card.title.font.weight | --p-card-title-font-weight | Font weight of title |
| card.subtitle.color | --p-card-subtitle-color | Color of subtitle |
| card.subtitle.font.size | --p-card-subtitle-font-size | Font size of subtitle |
| card.subtitle.font.weight | --p-card-subtitle-font-weight | Font weight of subtitle |
