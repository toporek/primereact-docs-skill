# Plugin

Install PrimeReact workflow skills and the PrimeReact MCP server in a supported AI assistant.

## Introduction

The PrimeReact Plugin adds PrimeReact skills and the PrimeReact MCP server to Claude Code, Codex, GitHub Copilot, Cursor, or Gemini CLI. Plugins installed through GitHub Copilot CLI are also available in VS Code. Install the plugin when you want the assistant to follow PrimeReact-specific, mode-aware workflows as well as read the current component documentation.

The plugin is published from the [primefaces/primeui-plugins](https://github.com/primefaces/primeui-plugins) repository. Use `@primeui/cli` for the same installation flow across supported assistants, or follow the manual setup for your client.

## What It Installs

Installing the PrimeReact Plugin adds:

- Six focused skills covering routing, implementation, setup, theming, accessibility, and troubleshooting.
- The PrimeReact MCP server, configured with `@primereact/mcp`.
- The manifest required by the selected assistant.

PrimeVue and PrimeNG are separate plugins. Installing this plugin does not change your application or install PrimeReact dependencies in the project.

## Skills

Each skill covers one type of PrimeReact work. The skills use `@primereact/mcp` when they need mode-scoped component APIs, examples, setup guides, hooks, or usage validation.

| Skill                                 | Use it for                                                                                                                              |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `primereact-router`                   | Select the PrimeReact mode and choose the skill that matches the task.                                                                  |
| `primereact-component-implementation` | Choose and implement components, composition, properties, callbacks, and documented hooks.                                              |
| `primereact-setup-installation`       | Configure a supported React environment in `styled`, `tailwind`, `primitive`, or `headless` mode.                                       |
| `primereact-theming-customization`    | Work with styled presets and tokens, Tailwind-owned components, primitives, headless markup, or pass-through APIs without mixing modes. |
| `primereact-accessibility-icons`      | Review semantics, keyboard behavior, focus, accessible names, PrimeIcons, and custom icons in the selected mode.                        |
| `primereact-audit-troubleshooting`    | Find invalid APIs and troubleshoot components, setup, MCP, plugin, or duplicate configurations.                                         |

The current PrimeReact v11 documentation does not provide a supported version migration guide, so the plugin does not advertise a migration workflow.

Skill names use the `primereact-` prefix because assistants may keep skills from several plugins in one shared namespace.

## How Skills Work

You do not need to select a skill manually. Describe the PrimeReact task and the router chooses the relevant workflow.

- The router checks that the project uses React and PrimeReact, then selects `styled`, `tailwind`, `primitive`, or `headless` from project evidence. It uses `hooks` only for a documented standalone hook.
- The selected skill reads only the component or guide information needed for that mode.
- When component metadata is available, the skill validates the final PrimeReact usage in the same mode.
- If project evidence is ambiguous or the documentation does not confirm an API, the skill reports the limitation instead of borrowing guidance from another mode.

After implementation, run the checks required by your project, including type checking, tests, browser behavior, accessibility, and visual review where applicable.

## CLI Setup

Set `--tool` to the assistant you use. Keep `--library primereact` when you run the command outside a project or from a project that uses more than one PrimeUI library.

```bash
pnpm dlx @primeui/cli plugin install --tool copilot --library primereact
```

Supported tool values are `claude`, `codex`, `copilot`, `cursor`, and `gemini`. Use `copilot` for GitHub Copilot CLI and VS Code.

## Lifecycle and Doctor

Use the same CLI to check the installation, update the plugin, or remove it. Each command applies only to PrimeReact in the selected assistant.

```bash
pnpm dlx @primeui/cli plugin status --tool copilot --library primereact
pnpm dlx @primeui/cli plugin update --tool copilot --library primereact
pnpm dlx @primeui/cli plugin remove --tool copilot --library primereact
pnpm dlx @primeui/cli doctor --tool copilot --library primereact

# Machine-readable diagnostics
pnpm dlx @primeui/cli doctor --tool copilot --library primereact --json
```

Run `doctor` when the plugin or MCP server is not working as expected. It checks the installation, starts the MCP server, confirms the available tools, and tests documentation retrieval and component validation. Checks that an assistant does not expose are reported as unsupported.

## Manual Setup

### Source

Claude Code, Codex, and GitHub Copilot can install the plugin directly from the public marketplace. For manual Cursor or Gemini CLI setup, clone the repository to a location you intend to keep because those clients use the selected `plugins/primereact` directory after installation.

```bash
git clone --branch main https://github.com/primefaces/primeui-plugins.git ~/primeui-plugins
ls ~/primeui-plugins/plugins/primereact
```

### Claude Code

Add the PrimeUI marketplace, then install only the PrimeReact plugin.

```bash
claude plugin marketplace add primefaces/primeui-plugins
claude plugin install primereact@primeui
claude plugin list --json
```

### Codex

Add the PrimeUI marketplace, inspect its catalog, then install only the PrimeReact plugin. Use the interactive plugin browser to manage enablement.

```bash
codex plugin marketplace add primefaces/primeui-plugins
codex plugin list --available
codex plugin add primereact@primeui
codex plugin list
```

### VS Code Copilot

Install the PrimeReact Plugin through GitHub Copilot CLI. VS Code automatically discovers plugins installed by Copilot CLI, so it does not need a separate plugin configuration.

```bash
copilot plugin marketplace add primefaces/primeui-plugins
copilot plugin install primereact@primeui
```

The installation includes the seven PrimeReact skills and the PrimeReact MCP server. See the [VS Code Agent Plugins](https://code.visualstudio.com/docs/agent-customization/agent-plugins) and [GitHub Copilot CLI Plugins](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing) documentation for client-specific details.

### Cursor

For local setup, link the PrimeReact plugin directory into Cursor's local-plugin directory. Restart Cursor or run `Developer: Reload Window` after creating the link.

```bash
mkdir -p ~/.cursor/plugins/local
ln -s ~/primeui-plugins/plugins/primereact ~/.cursor/plugins/local/primereact
```

Use Cursor's Customize screen to manage the plugin, its skills, and its MCP server.

### Gemini CLI

Validate the PrimeReact extension directory, then install it from the persistent checkout. Do not install from the repository root because it contains plugins for all three PrimeUI libraries.

```bash
gemini extensions validate ~/primeui-plugins/plugins/primereact
gemini extensions install ~/primeui-plugins/plugins/primereact --consent
gemini extensions list --output-format json
```

Gemini CLI 0.29.3 requires `experimental.extensionManagement` to be enabled. The installed extension contains the seven PrimeReact skills and the PrimeReact MCP server.
