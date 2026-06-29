# DataView

An unstyled data container component for building list and grid layouts with full control over presentation.

Build fully custom data presentation layouts with complete control over structure and styling.

```tsx
'use client';
import { DataView } from 'primereact/dataview';
import styles from './basic-demo.module.css';

const products = [
    { name: 'Bamboo Watch', category: 'Accessories', price: 65 },
    { name: 'Black Watch', category: 'Accessories', price: 72 },
    { name: 'Blue Band', category: 'Fitness', price: 79 },
    { name: 'Blue T-Shirt', category: 'Clothing', price: 29 },
    { name: 'Gaming Set', category: 'Electronics', price: 299 }
];

export default function BasicDemo() {
    return (
        <DataView.Root className={styles.root}>
            <DataView.Header className={styles.header}>
                <span>{products.length} products</span>
            </DataView.Header>
            <DataView.Content className={styles.content}>
                {products.map((product) => (
                    <div key={product.name} className={styles.item}>
                        <div>
                            <div className={styles.name}>{product.name}</div>
                            <div className={styles.category}>{product.category}</div>
                        </div>
                        <span className={styles.price}>${product.price}</span>
                    </div>
                ))}
            </DataView.Content>
        </DataView.Root>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `Header`, `Content`, `Footer`, `Empty`
- Layout state management with controlled and uncontrolled modes
- Locale-aware `sort` utility for ordering data by field
- Layout value reflected in `data-layout` attribute for CSS-driven layout switching

## Usage

```tsx
import { DataView } from 'primereact/dataview';
```

```tsx
<DataView.Root>
    <DataView.Header></DataView.Header>
    <DataView.Content></DataView.Content>
    <DataView.Footer></DataView.Footer>
    <DataView.Empty></DataView.Empty>
</DataView.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<DataView.Root as="section"></DataView.Root>
<DataView.Content as="ul"></DataView.Content>
```

Default elements: `Root`=`div`, `Header`=`div`, `Content`=`div`, `Footer`=`div`, `Empty`=`div`.

### Render Function Children

`Root` accepts a render function as children, providing access to the component instance.

```tsx
<DataView.Root>{(instance) => <span>Layout: {instance.state.layout}</span>}</DataView.Root>
```

## Pass Through

## API

### DataViewRoot

> **API/props table for `DataViewRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                |
| ------------- | -------------------- |
| `data-scope`  | `"dataview"`         |
| `data-part`   | `"root"`             |
| `data-layout` | Current layout value |

| Label | Type | Description |
|:------|:------|:------|
| root | DataViewRootPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataViewHeader

> **API/props table for `DataViewHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"dataview"` |
| `data-part`  | `"header"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | DataViewHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataViewContent

> **API/props table for `DataViewContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"dataview"` |
| `data-part`  | `"content"`  |

| Label | Type | Description |
|:------|:------|:------|
| root | DataViewContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataViewFooter

> **API/props table for `DataViewFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"dataview"` |
| `data-part`  | `"footer"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | DataViewFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataViewEmpty

> **API/props table for `DataViewEmpty` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"dataview"` |
| `data-part`  | `"empty"`    |

| Label | Type | Description |
|:------|:------|:------|
| root | DataViewEmptyPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

DataView uses semantic `div` containers. Add `role` and `aria-label` attributes as needed for the specific data layout.

```tsx
<DataView.Root aria-label="Product list">
    <DataView.Content role="list"></DataView.Content>
</DataView.Root>
```

### Keyboard Support

Not applicable. DataView is a presentational container, keyboard interaction depends on the content rendered inside.
