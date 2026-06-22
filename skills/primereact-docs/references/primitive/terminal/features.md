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
- Default content rendering — `CommandList` and `Prompt` render their children automatically when none are provided

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

**Pass Through example:**

```tsx
'use client';
import { Terminal } from '@primereact/ui/terminal';
import { TerminalResponse } from 'primereact/terminal';

export default function TerminalPTDemo() {
    const commandHandler = (text: string): TerminalResponse => {
        const argsIndex: number = text.indexOf(' ');
        const command: string = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'help':
                return 'Available commands:\n  date    - Display current date and time\n  greet   - Get a personalized greeting\n  random  - Generate a random number\n  clear   - Clear the terminal';

            case 'date':
                return new Date().toLocaleString();

            case 'greet': {
                const name = text.substring(argsIndex + 1).trim() || 'World';

                return `Hello, ${name}!`;
            }

            case 'random':
                return `Your random number: ${Math.floor(Math.random() * 100)}`;

            case 'clear':
                return null;

            default:
                return `Command not found: ${command}. Type "help" for available commands.`;
        }
    };

    return (
        <Terminal.Root prompt="$" onCommand={commandHandler} className="w-full">
            <Terminal.Welcome>Welcome to PrimeReact Terminal. Type &quot;help&quot; for available commands.</Terminal.Welcome>
            <Terminal.CommandList />
            <Terminal.Prompt />
        </Terminal.Root>
    );
}
```

## API

### TerminalRoot

> **API/props table for `TerminalRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"terminal"` |
| `data-part`  | `"root"`     |

> **API/props table for `TerminalRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TerminalWelcome

> **API/props table for `TerminalWelcome` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"terminal"` |
| `data-part`  | `"welcome"`  |

> **API/props table for `TerminalWelcome` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TerminalCommandList

> **API/props table for `TerminalCommandList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"terminal"`    |
| `data-part`  | `"commandlist"` |

> **API/props table for `TerminalCommandList` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TerminalCommand

> **API/props table for `TerminalCommand` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"terminal"` |
| `data-part`  | `"command"`  |

> **API/props table for `TerminalCommand` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TerminalCommandValue

> **API/props table for `TerminalCommandValue` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"terminal"`     |
| `data-part`  | `"commandvalue"` |

> **API/props table for `TerminalCommandValue` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TerminalCommandPromptLabel

> **API/props table for `TerminalCommandPromptLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                  |
| ------------ | ---------------------- |
| `data-scope` | `"terminal"`           |
| `data-part`  | `"commandpromptlabel"` |

> **API/props table for `TerminalCommandPromptLabel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TerminalCommandResponse

> **API/props table for `TerminalCommandResponse` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value               |
| ------------ | ------------------- |
| `data-scope` | `"terminal"`        |
| `data-part`  | `"commandresponse"` |

> **API/props table for `TerminalCommandResponse` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TerminalPrompt

> **API/props table for `TerminalPrompt` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"terminal"` |
| `data-part`  | `"prompt"`   |

> **API/props table for `TerminalPrompt` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TerminalPromptLabel

> **API/props table for `TerminalPromptLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"terminal"`    |
| `data-part`  | `"promptlabel"` |

> **API/props table for `TerminalPromptLabel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TerminalPromptValue

> **API/props table for `TerminalPromptValue` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"terminal"`    |
| `data-part`  | `"promptvalue"` |

> **API/props table for `TerminalPromptValue` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

The command response element has `aria-live="polite"` so that new responses are announced by the screen reader. Clicking anywhere on the terminal root focuses the input element.

### Keyboard Support

| Key        | Function                                                 |
| ---------- | -------------------------------------------------------- |
| `tab`      | Moves focus through the input element.                   |
| `enter`    | Executes the command when focus is on the input element. |
| `arrow up` | Recalls the previous command from history.               |
