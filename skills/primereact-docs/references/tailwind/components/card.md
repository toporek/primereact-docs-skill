# Card

Card is a flexible container component.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/card.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Card, CardBody, CardCaption, CardContent, CardFooter, CardSubTitle, CardTitle } from '@/components/ui/card';
```

```tsx
<Card>
    <CardBody>
        <CardCaption>
            <CardTitle>Title</CardTitle>
            <CardSubTitle>Subtitle</CardSubTitle>
        </CardCaption>
        <CardContent />
        <CardFooter />
    </CardBody>
</Card>
```

## Examples

### Basic

### With Form

Use `Card`, `Card.Body`, `Card.Caption`, `Card.Title`, `Card.Subtitle`, `Card.Content`, `Card.Footer`, to create a simple card.

### Advanced

Use `Card.Header` to place an image, avatar or other content in the header.

## Accessibility

### Screen Reader

`Card` is a structural container. If the card represents a standalone content region, provide an accessible name using `aria-label` or `aria-labelledby` on `Card.Root`.

### Keyboard Support

`Card` does not include built-in keyboard interaction. Keyboard behavior depends on interactive elements placed inside the card (for example buttons, links, or form controls).
