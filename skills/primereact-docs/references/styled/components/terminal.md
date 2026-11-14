# Terminal

Terminal is a text-based interface component that emulates a command line experience, enabling users to enter commands and receive responses.

## Usage

```tsx
import { Terminal } from '@primereact/ui/terminal';
```

```tsx
<Terminal.Root>
    <Terminal.Welcome />
    <Terminal.CommandList />
</Terminal.Root>
```

## Examples

### Basic

An interactive terminal that accepts and responds to text commands.

### Template

Use the render function to create a custom command display with full control over the output styling.

### File System

An interactive file browser demonstrating navigation commands like `ls`, `cd`, `cat`, and `pwd`.

### AI Assistant

A chat-style interface with typing indicators, demonstrating how Terminal can be styled for conversational experiences.

## Related

### Sub-Components

See [Terminal Primitive](../../primitive/components/terminal.md#api) for the full sub-component API.

### Hooks

See [useTerminal](../../headless/components/terminal.md#api) for the headless hook API.

### Accessibility

See [Terminal Primitive](../../primitive/components/terminal.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-terminal | Class name of the root element |
| p-terminal-welcome-message | Class name of the welcome element |
| p-terminal-command-list | Class name of the command list element |
| p-terminal-command | Class name of the command element |
| p-terminal-command-value | Class name of the command value element |
| p-terminal-command-response | Class name of the command response element |
| p-terminal-prompt | Class name of the prompt element |
| p-terminal-prompt-label | Class name of the prompt label element |
| p-terminal-prompt-value | Class name of the prompt value element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| terminal.background | --p-terminal-background | Background of root |
| terminal.border.color | --p-terminal-border-color | Border color of root |
| terminal.color | --p-terminal-color | Color of root |
| terminal.height | --p-terminal-height | Height of root |
| terminal.padding | --p-terminal-padding | Padding of root |
| terminal.border.radius | --p-terminal-border-radius | Border radius of root |
| terminal.font.weight | --p-terminal-font-weight | Font weight of root |
| terminal.font.size | --p-terminal-font-size | Font size of root |
| terminal.prompt.gap | --p-terminal-prompt-gap | Gap of prompt |
| terminal.command.response.margin | --p-terminal-command-response-margin | Margin of command response |
