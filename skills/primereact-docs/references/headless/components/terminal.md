# useTerminal

Hook that manages command execution, input state, and command history for a terminal-style interface.

```tsx
'use client';
import { TerminalResponse, useTerminal } from '@primereact/headless/terminal';

export default function BasicDemo() {
    const commandHandler = (text: string): TerminalResponse => {
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

    const { rootProps, promptValueProps, state } = useTerminal({ prompt: '

## Usage

```tsx
```

```tsx
const { rootProps, promptValueProps, commandResponseProps, state } = useTerminal({
    prompt: '$',
    onCommand: commandHandler
});

<div {...rootProps}>
    {state.commands.map((cmd, index) => (
        <div key={index}>
            <span>{cmd.text}</span>
            {cmd.response && <div {...commandResponseProps}>{cmd.response}</div>}
        </div>
    ))}
    <input {...promptValueProps} />
</div>;
```

`useTerminal` manages command input, execution, and history navigation. See [Primitive](/docs/primitive/components/terminal) for a component-based API.

## Features

- **Command execution**, `onCommand` receives the entered text and returns a `ReactNode`, a clear signal, or a promise
- **Command history**, `state.commands` records every entered command alongside its rendered response
- **History recall**, Arrow Up walks backwards through previously entered commands
- **Async support**, `onCommand` may return `Promise<TerminalResponse>` for network-backed commands
- **Live region output**, `commandResponseProps` includes `aria-live` so responses are announced to assistive tech

## Working with callbacks

### Handling commands

Return a `ReactNode` to render the response, `null` to clear the history, or `undefined` to skip rendering.

```tsx
const handler = (text: string): TerminalResponse => {
    if (text === 'clear') return null;
    if (text === 'help')
        return (
            <ul>
                <li>clear</li>
                <li>help</li>
            </ul>
        );
    return `Unknown command: ${text}`;
};

const terminal = useTerminal({ onCommand: handler });
```

### Async command execution

Return a promise from `onCommand` to handle network calls, the response renders once it resolves.

```tsx
const handler = async (text: string): Promise => {
    const result = await fetch(`/api/cmd?q=${encodeURIComponent(text)}`);
    return result.text();
};
```

### Reading command history

`state.commands` is an array of `{ text, response? }` entries, render it directly to show a running log.

```tsx
const { state } = useTerminal({ onCommand: handler });

state.commands.map((cmd) => cmd.text);
```

### Clearing via command

Return `null` from `onCommand` to wipe the terminal, giving users a conventional `clear` command.

```tsx
const handler = (text: string): TerminalResponse => {
    if (text === 'clear') return null;
    return `echo: ${text}`;
};
```

## Styling with data attributes

The prop objects include `data-scope="terminal"` and a `data-part` attribute.

| Scope      | Part              |
| ---------- | ----------------- |
| `terminal` | `root`            |
| `terminal` | `promptvalue`     |
| `terminal` | `commandresponse` |

```css
[data-scope='terminal'][data-part='root'] {
    background-color: #1e1e1e;
    color: #fff;
    font-family: monospace;
}

[data-scope='terminal'][data-part='promptvalue'] {
    background: transparent;
    border: none;
    outline: none;
}

[data-scope='terminal'][data-part='commandresponse'] {
    padding-left: 1rem;
}
```

## API

### useTerminal

<DocTable name="useTerminal" category="api" />

## Accessibility

Enter submits the current command, Up/Down arrows navigate command history, and focus is maintained on the input. See [Primitive](/docs/primitive/components/terminal#accessibility) for full WAI-ARIA compliance details.
, onCommand: commandHandler });

    return (
        <div className="max-w-2xl mx-auto">
            <div {...rootProps} className="bg-surface-900 text-surface-0 rounded-lg p-4 h-72 overflow-y-auto cursor-text font-mono text-sm">
                <div className="text-surface-400 mb-2">Welcome to PrimeReact Terminal. Type &quot;help&quot; for available commands.</div>
                <div className="flex flex-col gap-1">
                    {state.commands.map((cmd, index) => (
                        <div key={index}>
                            <div className="flex gap-2">
                                <span className="text-emerald-400">$</span>
                                <span>{cmd.text}</span>
                            </div>
                            {cmd.response && (
                                <div className="text-surface-300 whitespace-pre-wrap pl-4" aria-live="polite">
                                    {cmd.response}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 items-center mt-1">
                    <span className="text-emerald-400">$</span>
                    <input {...promptValueProps} className="flex-1 bg-transparent border-none outline-none text-surface-0 p-0 font-mono text-sm" />
                </div>
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useTerminal, TerminalResponse } from '@primereact/headless/terminal';
```

```tsx
const { rootProps, promptValueProps, commandResponseProps, state } = useTerminal({
    prompt: '$',
    onCommand: commandHandler
});

<div {...rootProps}>
    {state.commands.map((cmd, index) => (
        <div key={index}>
            <span>{cmd.text}</span>
            {cmd.response && <div {...commandResponseProps}>{cmd.response}</div>}
        </div>
    ))}
    <input {...promptValueProps} />
</div>;
```

`useTerminal` manages command input, execution, and history navigation. See [Primitive](../../primitive/components/terminal.md) for a component-based API.

## Features

- **Command execution**, `onCommand` receives the entered text and returns a `ReactNode`, a clear signal, or a promise
- **Command history**, `state.commands` records every entered command alongside its rendered response
- **History recall**, Arrow Up walks backwards through previously entered commands
- **Async support**, `onCommand` may return `Promise<TerminalResponse>` for network-backed commands
- **Live region output**, `commandResponseProps` includes `aria-live` so responses are announced to assistive tech

## Working with callbacks

### Handling commands

Return a `ReactNode` to render the response, `null` to clear the history, or `undefined` to skip rendering.

```tsx
const handler = (text: string): TerminalResponse => {
    if (text === 'clear') return null;
    if (text === 'help')
        return (
            <ul>
                <li>clear</li>
                <li>help</li>
            </ul>
        );
    return `Unknown command: ${text}`;
};

const terminal = useTerminal({ onCommand: handler });
```

### Async command execution

Return a promise from `onCommand` to handle network calls, the response renders once it resolves.

```tsx
const handler = async (text: string): Promise<TerminalResponse> => {
    const result = await fetch(`/api/cmd?q=${encodeURIComponent(text)}`);
    return result.text();
};
```

### Reading command history

`state.commands` is an array of `{ text, response? }` entries, render it directly to show a running log.

```tsx
const { state } = useTerminal({ onCommand: handler });

state.commands.map((cmd) => cmd.text);
```

### Clearing via command

Return `null` from `onCommand` to wipe the terminal, giving users a conventional `clear` command.

```tsx
const handler = (text: string): TerminalResponse => {
    if (text === 'clear') return null;
    return `echo: ${text}`;
};
```

## Styling with data attributes

The prop objects include `data-scope="terminal"` and a `data-part` attribute.

| Scope      | Part              |
| ---------- | ----------------- |
| `terminal` | `root`            |
| `terminal` | `promptvalue`     |
| `terminal` | `commandresponse` |

```css
[data-scope='terminal'][data-part='root'] {
    background-color: #1e1e1e;
    color: #fff;
    font-family: monospace;
}

[data-scope='terminal'][data-part='promptvalue'] {
    background: transparent;
    border: none;
    outline: none;
}

[data-scope='terminal'][data-part='commandresponse'] {
    padding-left: 1rem;
}
```

## API

### useTerminal

> **`useTerminal` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/terminal or the installed `@primereact/types`.

## Accessibility

Enter submits the current command, Up/Down arrows navigate command history, and focus is maintained on the input. See [Primitive](../../primitive/components/terminal.md#accessibility) for full WAI-ARIA compliance details.
