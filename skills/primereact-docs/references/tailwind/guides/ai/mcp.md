# MCP Server

Connect AI assistants to PrimeReact component documentation, guides, examples, setup, and API metadata.

## Introduction

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) lets AI assistants call external tools. The `@primereact/mcp` package uses those tools to search and read the PrimeReact documentation included with the package.

- Find components, guides, examples, setup instructions, and hooks.
- Read mode-scoped component APIs and documentation sections.
- Check component usage against documented properties and callbacks.
- Return links to the related PrimeReact documentation when available.

The server requires Node.js 22 or newer. It is read-only and does not change your project files or PrimeReact configuration.

## CLI Setup

The recommended setup is the [PrimeReact Plugin](./plugin). It installs this MCP server together with the PrimeReact skills for implementation, setup, theming, accessibility, and troubleshooting.

```bash
pnpm dlx @primeui/cli plugin install --tool copilot --library primereact
pnpm dlx @primeui/cli doctor --tool copilot --library primereact
```

Replace `copilot` with `claude`, `codex`, `gemini`, or `cursor` for another supported assistant. Use Manual Setup when you want the MCP server without the plugin skills.

## Manual Setup

### Claude Code

Add the server to your user configuration to use it in every project, or omit `-s user` for the current project only.

```bash
claude mcp add primereact -s user -- npx -y @primereact/mcp
```

See the [Claude Code MCP documentation](https://docs.anthropic.com/en/docs/claude-code/mcp) for client-specific options.

### VS Code

Create `.vscode/mcp.json` for project-level setup. To use the server across projects, add the same `servers` entry to your VS Code user MCP configuration.

```json
{
    "servers": {
        "primereact": {
            "command": "npx",
            "args": ["-y", "@primereact/mcp"]
        }
    }
}
```

See the [VS Code MCP documentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers) for more details.

### OpenAI Codex

Add the server with the Codex CLI, or add the same configuration to `~/.codex/config.toml`.

```bash
codex mcp add primereact -- npx -y @primereact/mcp
```

```toml
[mcp_servers.primereact]
command = "npx"
args = ["-y", "@primereact/mcp"]
```

See the [OpenAI Codex MCP documentation](https://developers.openai.com/codex/mcp/) for more details.

### Cursor

Create `.cursor/mcp.json` in your project or `~/.cursor/mcp.json` for global configuration.

```json
{
    "mcpServers": {
        "primereact": {
            "command": "npx",
            "args": ["-y", "@primereact/mcp"]
        }
    }
}
```

See the [Cursor MCP documentation](https://docs.cursor.com/context/model-context-protocol) for more details.

## Tools

The PrimeReact MCP server provides eight tools.

| Tool             | Purpose                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------- |
| `list`           | List available components, guides, examples, resources, or modes.                         |
| `search`         | Search generated component, guide, section, API, hook, and example text.                  |
| `get_component`  | Read mode-scoped component or hook documentation, API metadata, and available sections.   |
| `get_guide`      | Read a generated PrimeReact guide and its source metadata.                                |
| `get_example`    | Return an example from a documented component or hook section.                            |
| `get_setup`      | Return setup guidance for a supported PrimeReact mode and environment.                    |
| `validate_usage` | Validate component usage against generated PrimeReact API metadata in one selected mode.  |
| `version`        | Report the server version and the status of its documentation data, tools, and resources. |

## Data and Validation

The MCP package includes a generated copy of the PrimeReact documentation. This keeps the server usable without a PrimeReact source checkout and makes its answers match the installed package version. Results include a `primeui://primereact` resource URI and, when available, a link to the public documentation.

- The tools do not edit files, install dependencies, or update configuration.
- Component, setup, example, and validation calls stay in one selected mode: `styled`, `tailwind`, `primitive`, `headless`, or `hooks` where supported.
- `validate_usage` checks documented API metadata. If the required metadata is unavailable or the mode is ambiguous, it reports that limitation instead of guessing.
- Run your project type checks, tests, and browser checks after making changes. MCP validation does not replace them.

If you installed the PrimeReact Plugin, do not register the MCP server again with a manual configuration. Run the CLI `doctor` command if the server is missing or appears more than once.
