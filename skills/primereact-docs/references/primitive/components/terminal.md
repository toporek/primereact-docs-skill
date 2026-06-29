# Terminal

An unstyled terminal component for building command-line style interfaces with full control over layout and styling.

Build fully custom terminal interfaces with complete control over layout and styling.

```tsx
'use client';
import { Terminal } from 'primereact/terminal';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    const commandHandler = (text: string) => {
        const command = text.trim().split(/\s+/)[0];

        switch (command) {
            case 'help':
                return 'Available commands: date, greet, random, clear';
            case 'date':
                return new Date().toLocaleString();
            case 'greet':
                return `Hello, ${text.substring(text.indexOf(' ') + 1).trim() || 'World'}!`;
            case 'random':
                return `Your random number: ${Math.floor(Math.random() * 100)}`;
            case 'clear':
                return null;
            default:
                return `Unknown command: ${command}. Type "help" for available commands.`;
        }
    };

    return (
        <div className={styles.wrapper}>
            <Terminal.Root prompt="$" onCommand={commandHandler} className={styles.root}>
                <Terminal.Welcome className={styles.welcome}>
                    Welcome to PrimeReact Terminal. Type &quot;help&quot; for available commands.
                </Terminal.Welcome>
                <Terminal.CommandList className={styles.commandList} />
                <Terminal.Prompt className={styles.prompt}>
                    <Terminal.PromptLabel className={styles.promptLabel} />
                    <Terminal.PromptValue className={styles.promptValue} />
                </Terminal.Prompt>
            </Terminal.Root>
        </div>
    );
}

```

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

> **API/props table for `TerminalRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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

> **API/props table for `TerminalWelcome` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"terminal"` |
| `data-part`  | `"welcome"`  |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalWelcomePassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalCommandList

> **API/props table for `TerminalCommandList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"terminal"`    |
| `data-part`  | `"commandlist"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalCommandListPassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalCommand

> **API/props table for `TerminalCommand` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"terminal"` |
| `data-part`  | `"command"`  |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalCommandPassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalCommandValue

> **API/props table for `TerminalCommandValue` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"terminal"`     |
| `data-part`  | `"commandvalue"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalCommandValuePassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalCommandPromptLabel

> **API/props table for `TerminalCommandPromptLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                  |
| ------------ | ---------------------- |
| `data-scope` | `"terminal"`           |
| `data-part`  | `"commandpromptlabel"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalCommandPromptLabelPassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalCommandResponse

> **API/props table for `TerminalCommandResponse` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value               |
| ------------ | ------------------- |
| `data-scope` | `"terminal"`        |
| `data-part`  | `"commandresponse"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalCommandResponsePassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalPrompt

> **API/props table for `TerminalPrompt` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"terminal"` |
| `data-part`  | `"prompt"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalPromptPassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalPromptLabel

> **API/props table for `TerminalPromptLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"terminal"`    |
| `data-part`  | `"promptlabel"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TerminalPromptLabelPassThroughType> | Used to pass attributes to the root's DOM element. |

### TerminalPromptValue

> **API/props table for `TerminalPromptValue` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
