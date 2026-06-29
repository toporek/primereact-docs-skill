# StyleClass

StyleClass manages CSS classes on a target element with enter/leave animations triggered by user interaction.

```tsx
'use client';
import { Sparkles } from '@primeicons/react/sparkles';
import { StyleClass } from 'primereact/styleclass';

const changes = [
    { type: 'New', label: 'AI-powered command palette' },
    { type: 'Improved', label: 'Faster theme switching' },
    { type: 'Fixed', label: 'Crash on empty filter' }
];

const tagColor: Record<string, string> = {
    New: 'bg-emerald-500/10 text-emerald-500',
    Improved: 'bg-sky-500/10 text-sky-500',
    Fixed: 'bg-amber-500/10 text-amber-500'
};

export default function Preview() {
    return (
        <div className="flex flex-col items-center gap-3 h-60">
            <StyleClass
                as="button"
                type="button"
                selector="@next"
                enterFromClassName="hidden"
                enterActiveClassName="p-anchored-overlay-enter-active"
                leaveToClassName="hidden"
                leaveActiveClassName="p-anchored-overlay-leave-active"
                hideOnOutsideClick
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors cursor-pointer text-sm font-medium"
            >
                <Sparkles className="size-3.5! text-primary" />
                What's new
                <span className="text-xs text-muted-color tabular-nums">v2.4</span>
            </StyleClass>
            <div className="hidden w-72 rounded-lg border border-surface bg-surface-0 dark:bg-surface-900 shadow-md origin-top">
                <div className="px-4 py-3 border-b border-surface">
                    <div className="font-semibold text-sm">Release 2.4</div>
                    <div className="text-xs text-muted-color">May 6, 2026</div>
                </div>
                <ul className="p-3 space-y-2 list-none m-0">
                    {changes.map((c) => (
                        <li key={c.label} className="flex items-start gap-2 text-sm">
                            <span className={`shrink-0 text-[10px] uppercase tracking-wide font-semibold px-1.5 py-0.5 rounded ${tagColor[c.type]}`}>
                                {c.type}
                            </span>
                            <span className="text-color">{c.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { StyleClass } from 'primereact/styleclass';
```

```tsx
<StyleClass
    as="button"
    selector="@next"
    enterFromClassName="hidden"
    enterActiveClassName="animate-scalein"
    leaveToClassName="hidden"
    leaveActiveClassName="animate-fadeout"
    hideOnOutsideClick
>
    Toggle
</StyleClass>
<div className="hidden">Content</div>
```

## Examples

### Basic

Toggle visibility of a target element with enter and leave animations.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { StyleClass } from 'primereact/styleclass';

export default function BasicDemo() {
    return (
        <div className="flex flex-col items-center gap-4 h-32">
            <StyleClass
                as="button"
                type="button"
                selector="@next"
                enterFromClassName="hidden"
                enterActiveClassName="animate-scalein"
                leaveToClassName="hidden"
                leaveActiveClassName="animate-fadeout"
                hideOnOutsideClick
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-contrast hover:bg-primary/90 transition-colors cursor-pointer text-sm font-medium"
            >
                Toggle Panel
                <ChevronDown className="w-3.5 h-3.5" />
            </StyleClass>
            <div className="hidden w-full max-w-md p-4 rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 shadow-md origin-top">
                <p className="text-sm text-surface-700 dark:text-surface-200 leading-relaxed m-0">
                    This panel is toggled using StyleClass with scale-in and fade-out animations. Click the button again or click outside to dismiss.
                </p>
            </div>
        </div>
    );
}

```

### Animation

Custom CSS animations and built-in slide animations for enter and leave transitions.

```tsx
'use client';
import { StyleClass } from 'primereact/styleclass';
import styles from './animation-demo.module.css';

export default function AnimationDemo() {
    return (
        <div className="flex items-center justify-center gap-8">
            <div className="flex flex-col items-center">
                <div className="flex gap-2">
                    <StyleClass
                        as="button"
                        type="button"
                        selector=".box1"
                        enterFromClassName={styles.myHidden}
                        enterActiveClassName={styles.myFadein}
                        className="px-4 py-2 rounded-lg bg-primary text-primary-contrast hover:bg-primary/90 transition-colors cursor-pointer text-sm font-medium"
                    >
                        FadeIn
                    </StyleClass>
                    <StyleClass
                        as="button"
                        type="button"
                        selector=".box1"
                        leaveActiveClassName={styles.myFadeout}
                        leaveToClassName={styles.myHidden}
                        className="px-4 py-2 rounded-lg bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-200 hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors cursor-pointer text-sm font-medium"
                    >
                        FadeOut
                    </StyleClass>
                </div>
                <div className="h-32 flex items-start justify-center mt-4">
                    <div className={`${styles.myHidden} box1`}>
                        <div className="flex bg-primary text-primary-contrast items-center justify-center rounded-lg w-32 h-32 font-bold shadow-md">
                            Custom
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex gap-2">
                    <StyleClass
                        as="button"
                        type="button"
                        selector=".box2"
                        enterFromClassName="hidden"
                        enterActiveClassName="animate-slidedown"
                        className="px-4 py-2 rounded-lg bg-primary text-primary-contrast hover:bg-primary/90 transition-colors cursor-pointer text-sm font-medium"
                    >
                        SlideDown
                    </StyleClass>
                    <StyleClass
                        as="button"
                        type="button"
                        selector=".box2"
                        leaveActiveClassName="animate-slideup"
                        leaveToClassName="hidden"
                        className="px-4 py-2 rounded-lg bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-200 hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors cursor-pointer text-sm font-medium"
                    >
                        SlideUp
                    </StyleClass>
                </div>
                <div className="h-32 flex items-start justify-center mt-4">
                    <div className="hidden box2 overflow-hidden">
                        <div className="flex bg-primary text-primary-contrast items-center justify-center rounded-lg w-32 h-32 font-bold shadow-md">
                            Content
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

```

### Toggle Class

Use `toggleClassName` for simple class toggling without enter/leave animations.

```tsx
'use client';
import { StyleClass } from 'primereact/styleclass';

export default function ToggleDemo() {
    return (
        <div className="flex flex-col items-center gap-4 h-32">
            <StyleClass
                as="button"
                type="button"
                selector="@next"
                toggleClassName="hidden"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-contrast hover:bg-primary/90 transition-colors cursor-pointer text-sm font-medium"
            >
                Toggle
            </StyleClass>
            <div className="w-full max-w-md p-4 rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 shadow-md">
                <p className="text-sm text-surface-700 dark:text-surface-200 leading-relaxed m-0">
                    This panel is toggled instantly using{' '}
                    <code className="text-xs bg-surface-100 dark:bg-surface-800 px-1.5 py-0.5 rounded">toggleClassName</code> without any enter/leave
                    animations.
                </p>
            </div>
        </div>
    );
}

```

### Selector

Different selector types to target elements: `@next`, `@prev`, and CSS selectors.

```tsx
'use client';
import { StyleClass } from 'primereact/styleclass';

export default function SelectorDemo() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-surface-500 dark:text-surface-400">@next</span>
                <div className="flex items-center gap-4">
                    <StyleClass
                        as="button"
                        type="button"
                        selector="@next"
                        enterFromClassName="hidden"
                        enterActiveClassName="animate-fadein"
                        leaveActiveClassName="animate-fadeout"
                        leaveToClassName="hidden"
                        className="px-4 py-2 rounded-lg bg-primary text-primary-contrast hover:bg-primary/90 transition-colors cursor-pointer text-sm font-medium shrink-0"
                    >
                        @next
                    </StyleClass>
                    <div className="hidden px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">Next Sibling</div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-surface-500 dark:text-surface-400">@prev</span>
                <div className="flex items-center gap-4">
                    <div className="hidden px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">Previous Sibling</div>
                    <StyleClass
                        as="button"
                        type="button"
                        selector="@prev"
                        enterFromClassName="hidden"
                        enterActiveClassName="animate-fadein"
                        leaveActiveClassName="animate-fadeout"
                        leaveToClassName="hidden"
                        className="px-4 py-2 rounded-lg bg-primary text-primary-contrast hover:bg-primary/90 transition-colors cursor-pointer text-sm font-medium shrink-0"
                    >
                        @prev
                    </StyleClass>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-surface-500 dark:text-surface-400">CSS Selector</span>
                <div className="flex items-center gap-4">
                    <StyleClass
                        as="button"
                        type="button"
                        selector="#remote-target"
                        enterFromClassName="hidden"
                        enterActiveClassName="animate-scalein"
                        leaveActiveClassName="animate-fadeout"
                        leaveToClassName="hidden"
                        className="px-4 py-2 rounded-lg bg-primary text-primary-contrast hover:bg-primary/90 transition-colors cursor-pointer text-sm font-medium shrink-0"
                    >
                        #remote-target
                    </StyleClass>
                </div>
                <div id="remote-target" className="hidden px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium origin-top w-fit">
                    Remote Target
                </div>
            </div>
        </div>
    );
}

```

### Hide on Resize

Use `hideOnResize` to dismiss the target when a resize occurs. Pair it with `resizeSelector` to observe a specific element instead of the window.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { StyleClass } from 'primereact/styleclass';

export default function ResizeDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <StyleClass
                as="button"
                type="button"
                selector="@next"
                enterFromClassName="hidden"
                enterActiveClassName="animate-scalein"
                leaveToClassName="hidden"
                leaveActiveClassName="animate-fadeout"
                hideOnResize
                resizeSelector="#resize-source"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-contrast hover:bg-primary/90 transition-colors cursor-pointer text-sm font-medium"
            >
                Toggle Panel
                <ChevronDown className="w-3.5 h-3.5" />
            </StyleClass>
            <div className="hidden w-full max-w-md p-4 rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 shadow-md origin-top">
                <p className="text-sm text-surface-700 dark:text-surface-200 leading-relaxed m-0">
                    Open this panel, then drag the bottom-right corner of the box below to resize it. With{' '}
                    <code className="text-xs bg-surface-100 dark:bg-surface-800 px-1.5 py-0.5 rounded">hideOnResize</code> and{' '}
                    <code className="text-xs bg-surface-100 dark:bg-surface-800 px-1.5 py-0.5 rounded">resizeSelector</code> the panel auto-hides when
                    its observed target resizes.
                </p>
            </div>
            <div
                id="resize-source"
                className="resize overflow-auto min-h-16 w-56 h-24 p-3 grid place-items-center text-center rounded-lg border border-dashed border-surface-300 dark:border-surface-600 bg-surface-50 dark:bg-surface-800 text-xs text-surface-500 dark:text-surface-400"
            >
                Drag my bottom-right corner to resize
            </div>
        </div>
    );
}

```

## Selector

The `selector` prop determines the target element. Built-in values:

- `@next`, Next sibling element
- `@prev`, Previous sibling element
- `@parent`, Parent element
- `@grandparent`, Grandparent element
- Any CSS selector string (e.g. `#my-panel`)

## Animation Classes

StyleClass applies CSS classes in sequence to create enter and leave transitions.

**Enter sequence:**

1. Remove `enterFromClassName` (e.g. `hidden`)
2. Add `enterActiveClassName` (e.g. `animate-scalein`)
3. On animation end: remove `enterActiveClassName`, add `enterToClassName`

**Leave sequence:**

1. Remove `leaveFromClassName`
2. Add `leaveActiveClassName` (e.g. `animate-fadeout`)
3. On animation end: remove `leaveActiveClassName`, add `leaveToClassName` (e.g. `hidden`)

## Outside Click

Set `hideOnOutsideClick` to automatically hide the target when clicking outside the trigger and target elements.

## Hide on Resize

Set `hideOnResize` to trigger the leave animation when a resize happens while the target is visible.

By default the `window` is observed. Provide a `resizeSelector` to watch a specific element instead, valid values are `"window"`, `"document"`, or a CSS selector. When it resolves to an element, a `ResizeObserver` is used and the initial observation is ignored so only genuine resizes dismiss the target.

```tsx
<StyleClass as="button" selector="@next" enterFromClassName="hidden" enterActiveClassName="animate-scalein" leaveToClassName="hidden" leaveActiveClassName="animate-fadeout" hideOnResize resizeSelector="#resize-source">
    Toggle
</StyleClass>
```

## Related

### Hooks

See [useStyleClass](../../headless/components/styleclass.md#api) for the headless hook API.

### Accessibility

StyleClass does not add ARIA attributes, it is a utility for CSS class manipulation. Add appropriate `aria-expanded`, `aria-controls`, and other attributes to the trigger and target elements as needed.
