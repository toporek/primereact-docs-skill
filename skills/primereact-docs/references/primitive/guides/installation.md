# Installation

Install the primitive package and compose unstyled components in your React project.

## Install the package

```bash
npm install @primereact/ui
```

## Compose a component

```tsx
import { AutoComplete } from '@primereact/ui/autocomplete';

function MyAutoComplete() {
    return (
        <AutoComplete.Root suggestions={['Apple', 'Banana', 'Cherry']}>
            <AutoComplete.Input />
            <AutoComplete.Portal>
                <AutoComplete.Positioner>
                    <AutoComplete.Popup>
                        <AutoComplete.List>
                            <AutoComplete.Option />
                        </AutoComplete.List>
                    </AutoComplete.Popup>
                </AutoComplete.Positioner>
            </AutoComplete.Portal>
        </AutoComplete.Root>
    );
}
```

The components ship unstyled, use any CSS solution you prefer. Data attributes like `data-state` and `data-disabled` are available for styling.
