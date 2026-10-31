# Terminal

An unstyled terminal component for building command-line style interfaces with full control over layout and styling.

Build fully custom terminal interfaces with complete control over layout and styling.

## Features

- Compound component API with sub-components: `Root`, `Welcome`, `CommandList`, `Command`, `CommandValue`, `CommandPromptLabel`, `CommandResponse`, `Prompt`, `PromptLabel`, `PromptValue`
- Synchronous and asynchronous command execution via `onCommand`
- Built-in command history navigation with Arrow Up
- Clears terminal when `onCommand` returns `null`
- Default content rendering, `CommandList` and `Prompt` render their children automatically when none are provided

## Usage

```tsx
import { Terminal } from 'primereact/terminal';
```

```tsx
<Terminal.Root>
    <Terminal.Welcome />
    <Terminal.CommandList />
    <Terminal.Prompt>
        <Terminal.PromptLabel />
        <Terminal.PromptValue />
    </Terminal.Prompt>
</Terminal.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Terminal.Root as="section"></Terminal.Root>
<Terminal.CommandList as="ul"></Terminal.CommandList>
```

Default elements: `Root`=`div`, `Welcome`=`div`, `CommandList`=`div`, `Command`=`div`, `CommandValue`=`span`, `CommandPromptLabel`=`span`, `CommandResponse`=`div`, `Prompt`=`div`, `PromptLabel`=`span`, `PromptValue`=`input`.

### Render Function Children

`Root` accepts a render function as children, providing access to the component instance.

```tsx
<Terminal.Root prompt="$" onCommand={commandHandler}>
    {(instance) => <span>{instance.state.commands.length} commands executed</span>}
</Terminal.Root>
```

## Pass Through

## API

### TerminalRoot

> **`TerminalRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/terminal or the installed `@primereact/types`.

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"terminal"` |
| `data-part`  | `"root"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| commandList | TerminalRootPassThroughType> | Used to pass attributes to the commandList's DOM element. |
| commands | TerminalRootPassThroughType> | Used to pass attributes to the commands' DOM element. |
| commandValue | TerminalRootPassThroughType> | Used to pass attributes to the command value's DOM element. |
| commandResponse | TerminalRootPassThroughType> | Used to pass attributes to the command response's DOM element. |
| prompt | TerminalRootPassThroughType> | Used to pass attributes to the prompt's DOM element. |
| promptValue | TerminalRootPassThroughType> | Used to pass attributes to the prompt value's DOM element. |
| promptLabel | TerminalRootPassThroughType> | Used to pass attributes to the prompt label's DOM element. |

### TerminalWelcome

> **`TerminalWelcome` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/terminal or the installed `@primereact/types`.

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"terminal"` |
| `data-part`  | `"welcome"`  |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalWelcomePassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalCommandList

> **`TerminalCommandList` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/terminal or the installed `@primereact/types`.

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"terminal"`    |
| `data-part`  | `"commandlist"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalCommandListPassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalCommand

> **`TerminalCommand` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/terminal or the installed `@primereact/types`.

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"terminal"` |
| `data-part`  | `"command"`  |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalCommandPassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalCommandValue

> **`TerminalCommandValue` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/terminal or the installed `@primereact/types`.

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"terminal"`     |
| `data-part`  | `"commandvalue"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalCommandValuePassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalCommandPromptLabel

> **`TerminalCommandPromptLabel` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/terminal or the installed `@primereact/types`.

| Attribute    | Value                  |
| ------------ | ---------------------- |
| `data-scope` | `"terminal"`           |
| `data-part`  | `"commandpromptlabel"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalCommandPromptLabelPassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalCommandResponse

> **`TerminalCommandResponse` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/terminal or the installed `@primereact/types`.

| Attribute    | Value               |
| ------------ | ------------------- |
| `data-scope` | `"terminal"`        |
| `data-part`  | `"commandresponse"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalCommandResponsePassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalPrompt

> **`TerminalPrompt` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/terminal or the installed `@primereact/types`.

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"terminal"` |
| `data-part`  | `"prompt"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalPromptPassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalPromptLabel

> **`TerminalPromptLabel` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/terminal or the installed `@primereact/types`.

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"terminal"`    |
| `data-part`  | `"promptlabel"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalPromptLabelPassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalPromptValue

> **`TerminalPromptValue` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/terminal or the installed `@primereact/types`.

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"terminal"`    |
| `data-part`  | `"promptvalue"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalPromptValuePassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

The command response element has `aria-live="polite"` so that new responses are announced by the screen reader. Clicking anywhere on the terminal root focuses the input element.

### Keyboard Support

| Key        | Function                                                 |
| ---------- | -------------------------------------------------------- |
| `tab`      | Moves focus through the input element.                   |
| `enter`    | Executes the command when focus is on the input element. |
| `arrow up` | Recalls the previous command from history.               |
