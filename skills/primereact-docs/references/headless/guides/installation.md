# Installation

Install the headless package and start using hooks in your React project.

## Install the package

```bash
npm install @primereact/headless
```

## Import a hook

```tsx
import { useAutoComplete } from '@primereact/headless/autocomplete';

function MyAutoComplete() {
    const { rootProps, inputProps } = useAutoComplete({
        suggestions: ['Apple', 'Banana', 'Cherry']
    });

    return (
        <div {...rootProps}>
            <input {...inputProps} />
        </div>
    );
}
```

That's it, the hook handles state, keyboard navigation, focus, and accessibility. You provide the markup and styles.
