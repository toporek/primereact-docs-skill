# useTerminal

Hook that manages command execution, input state, and command history for a terminal-style interface.

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
