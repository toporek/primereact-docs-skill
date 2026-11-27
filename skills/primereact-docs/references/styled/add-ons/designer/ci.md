# Figma to Theme Code CI Pipeline

Automate the conversion of Figma design tokens to theme code using CI pipelines and the theme designer API.

> **UI Kit v4 Users:** You may ignore this documentation and use the [PrimeUI Theme Generator](https://www.figma.com/community/plugin/1592914021886732603/primeui-theme-generator) Figma plugin instead, which provides built-in synchronization capabilities that automate the theme generation process.
>
> **UI Kit v3 Users:** Follow the CI pipeline configuration below to integrate with Figma via the Tokens Studio plugin.

## Overview

The Figma UI Kit and the theming api is fully synchronized, meaning the design tokens in Figma map to the corresponding properties in a theme preset. The Theme Designer offers a feature to create a theme by uploading a tokens.json file that is exported from the Tokens Studio plugin in Figma. Once the theme is converted, it can either be edited further in the visual editor or downloaded as a zip file to access the full code. Visit the [Figma](guide.md#figma) section at the designer documentation for more information.

Manually exporting the tokens file from Figma and uploading it to the online designer tool may quickly become tedious in active development cycles. As a solution, theme designer provides a remote API that can be integrated into your CI pipeline.

![Theme Designer CI](https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/common.images/designer/themedesigner-ci.jpg)

## Video Tutorial

Before diving into the implementation details, if you would like to understand the final outcome and see how the solution operates, please refer to the [video tutorial](https://www.youtube.com/watch?v=ksNPUrCYcto) for a comprehensive walkthrough and demonstration.

## Designer API

Theme Designer public endpoint is hosted at PrimeUI Store.

```text
https://primeui.store/api/designer/integration/theme/create
```

### Get a Secret Key

1. Visit the [PrimeUI Store](https://primeui.store/designer).
2. Purchase an Extended License of Theme Designer.
3. Navigate to your [account settings](https://primeui.store/user/designer).
4. Generate a secret key for CI/CD integration.

### Authentication

Define an _Authorization: Bearer_ request header to configure your secret key.

### Parameters

The request type must be _POST_.

| Name                 | Type   | Required | Description                                                                         |
| -------------------- | ------ | -------- | ----------------------------------------------------------------------------------- |
| `name`               | string | yes      | Name of the theme to be generated.                                                  |
| `tokens`             | json   | yes      | Content of the json file exported from Figma.                                       |
| `project`            | string | yes      | Name of the project, possible values are "primereact", "primeng" or "primevue".     |
| `config.font_size`   | string | no       | Font size for theme preview in visual editor at website, defaults to "14px".        |
| `config.font_family` | string | no       | Font family for theme preview in visual editor at website, defaults to "Inter Var". |

### Example

```ts
const response = await fetch('https://primeui.store/api/designer/integration/theme/create', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, application/zip',
        Authorization: `Bearer ${designer_secret_key}`
    },
    body: JSON.stringify({
        name: 'acme-theme',
        project: 'primereact',
        tokens: tokensJson // JSON data
    })
});
```

### Response

A successful response returns a zip file containing the source code of the generated theme preset. The content-type header of this type of response is _application/zip_.

### Error Handling

When theme generation fails, a json response is returned with _application/json_ content-type header. The response contains an error object with _code_ and _message_.

```json
{
    "error": {
        "code": "download_failed",
        "message": "Failed to create archive."
    }
}
```

## Figma

Tokens Studio in Figma is the starting point of a continuous integration pipeline. You can connect a remote repository to sync your tokens data so that changes are saved remotely instead of locally. Tokens Studio offers various remote storage options such as [GitHub](https://docs.tokens.studio/token-storage/remote/sync-git-github), [GitLab](https://docs.tokens.studio/token-storage/remote/sync-git-gitlab) and [Bitbucket](https://docs.tokens.studio/token-storage/remote/sync-git-bitbucket). Refer to these documentations based on your environment before proceeding to the integrations in the next section.

## Integration

Once the Tokens Studio Sync Provider is running and you have obtained a Secret Key for the Designer API, you can connect your repository to the Theme Designer API to automatically generate themes whenever the tokens file changes via your CI pipeline. For GitHub, PrimeTek provides an official GitHub Action available on the GitHub Marketplace, while for GitLab and Bitbucket, sample implementations are provided as references for building your own integration.

### GitHub

The [prime-figma-to-theme-code-generator](https://github.com/marketplace/actions/prime-figma-to-theme-code-generator) is a GitHub Action that is available on the marketplace.

#### 1. Add Secret Key to Repository Secrets

- Go to your GitHub repository.
- Navigate to **Settings > Secrets and variables > Actions**.
- Click **New repository secret**.
- Give a name such as: _THEME_DESIGNER_SECRET_KEY_.
- Value: Your API key from Prime Theme Designer.
- Click **Add secret**.

#### 2. Add the action to your `.github/workflows`

Visit the [inputs](https://github.com/marketplace/actions/prime-figma-to-theme-code-generator#-inputs) documentation for more details about the parameters such as the _theme-name_.

```yaml
name: Automated Figma To Theme Code

on:
    push:
        paths:
            - 'tokens.json'

permissions:
    contents: write

jobs:
    generate-tokens:
        name: Generate Theme Code
        runs-on: ubuntu-latest
        steps:
            - name: Checkout repository
              uses: actions/checkout@v3

            - name: Generate Prime Theme
              uses: primefaces/theme-designer-ci@1.0.0-beta.4
              with:
                  designer-secret: ${{ secrets.THEME_DESIGNER_SECRET_KEY }}
                  theme-name: 'acme'
                  project: 'primereact'
                  font-size: '14px'
                  font-family: 'Inter Var'
                  tokens-path: 'tokens.json'
                  output-dir: './acme-theme'
```

#### 3. Test Integration

Edit a token in Tokens Studio in Figma and click **Push to GitHub** button to update the tokens file in your Git repository, triggering the configured GitHub Action. The GitHub Action then sends the updated file content to the Theme Designer API, receives the generated theme code, and commits the resulting changes back to your repository. An [example repository](https://github.com/primefaces/theme-designer-ci-test) is available at GitHub that you may use as a starter.

### GitLab

The GitLab integration is implemented by executing a script whenever the tokens file changes.

#### 1. Add Secret Key to Repository Secrets

- Go to your GitLab repository.
- Navigate to **Settings > CI/CD > Variables**.
- Click **Add variable**.
- Give a name such as: _THEME_DESIGNER_SECRET_KEY_.
- Value: Your API key from Prime Theme Designer.
- Click **Add variable**.

#### 2. Add the script to your project

A sample script named [figma-to-theme-converter.sh](https://gitlab.com/cagataycivici/theme-designer-ci-test/-/blob/main/figma-to-theme-converter.sh?ref_type=heads) is available as a starter, copy and paste this script to your project. You may alter the script further per your requirements.

#### 3. Add the script to your `.gitlab-ci.yml`

Define the configuration parameters for the Designer API and add the script to the action.

```yaml
variables:
    # Set these as GitLab CI/CD variables for security
    DESIGNER_SECRET: ${THEME_DESIGNER_SECRET_KEY}
    THEME_NAME: 'my-custom-theme'
    PROJECT: 'primereact' # or your target project
    TOKENS_PATH: './tokens.json'
    OUTPUT_DIR: './my-custom-theme'
    # Optional configuration
    FONT_SIZE: '14px'
    FONT_FAMILY: 'Inter'

stages:
    - generate-theme

generate_theme_tokens:
    stage: generate-theme
    image: ubuntu:22.04

    before_script:
        # Install required dependencies
        - apt-get update -qq
        - apt-get install -y -qq git curl python3 unzip
        - git config --global --add safe.directory $CI_PROJECT_DIR
        # Ensure we're on the correct branch and have latest changes
        - git fetch origin
        - git checkout $CI_COMMIT_REF_NAME
        - git pull origin $CI_COMMIT_REF_NAME || true

    script:
        # Run the theme generator script
        - ./figma-to-theme-converter.sh

    artifacts:
        paths:
            - $OUTPUT_DIR/
        expire_in: 1 week

    rules:
        # Run on main branch when tokens.json is modified
        - if: $CI_COMMIT_BRANCH == "main"
          changes:
              - tokens.json
        # Or run manually
        - when: manual
```

#### 4. Test Integration

Edit a token in Tokens Studio in Figma and click **Push to GitLab** button to update the tokens file in your Git repository, triggering the configured GitLab Action. The GitLab Action then sends the updated file content to the Theme Designer API, receives the generated theme code, and commits the resulting changes back to your repository. An [example repository](https://gitlab.com/cagataycivici/theme-designer-ci-test) is available at GitLab that you may use as a starter.

### Bitbucket

The BitBucket integration is implemented by executing a custom pipe whenever the tokens file changes.

#### 1. Add Secret Key to Repository Secrets

- Go to your BitBucket repository.
- Navigate to **Repository Settings > Repository Variables**.
- Give a name such as: _THEME_DESIGNER_SECRET_KEY_.
- Value: Your API key from Prime Theme Designer.
- Click **Add**.

#### 2. Add the pipe configuration to your `bitbucket-pipelines.yml`

Define the configuration parameters for the Designer API and add the pipe as a runnable script to the action. Notice that, the referenced [pipe](https://bitbucket.org/cagataycivici/figma-to-theme-code-generator/src/main/) is executed as a script rather than a pipe from the BitBucket pipe registry as PrimeTek currently has no intentions to maintain an official pipe for BitBucket. You may further improve this example by building a dockerized pipe that is accessible in the BitBucket Registry to refer it with the _pipe_ config in yml.

```yaml
image: atlassian/default-image:4

pipelines:
    default:
        - step:
              name: Generate Theme with Theme Designer
              condition:
                  changesets:
                      includePaths:
                          - 'tokens.json'
              script:
                  - apt-get update && apt-get install -y jq curl unzip
                  - git clone https://bitbucket.org/cagataycivici/figma-to-theme-code-generator.git temp-pipe
                  - cp temp-pipe/pipe.sh ./
                  - chmod +x pipe.sh
                  - export DESIGNER_SECRET="${THEME_DESIGNER_SECRET_KEY}"
                  - export THEME_NAME="acme-theme"
                  - export PROJECT="primereact"
                  - export FONT_SIZE="14px"
                  - export FONT_FAMILY="Inter Var"
                  - export TOKENS_PATH="./tokens.json"
                  - export OUTPUT_DIR="./acme-theme"
                  - ./pipe.sh
```

#### 3. Test Integration

Edit a token in Tokens Studio in Figma and click **Push to BitBucket** button to update the tokens file in your Git repository, triggering the configured BitBucket Pipe. The pipe then sends the updated file content to the Theme Designer API, receives the generated theme code, and commits the resulting changes back to your repository. An [example repository](https://bitbucket.org/cagataycivici/theme-designer-ci-test) is available at BitBucket that you may use as a starter.

## Live Preview

After your CI pipeline completes successfully, your theme also becomes available in the Prime UI Theme Designer.

- Navigate to the Prime UI library website.
- Click the ⚙️ icon at topbar to open up Designer Editor.
- Sign in with your license key and pass key credentials.
- Then select your theme from the available options to apply it across all demos and website content.
- Note that CI-generated themes are provided in read-only mode for preview purposes only and cannot be edited within the Theme Designer. The Migration Assistant is available to identify any missing tokens in your preset; however, if tokens are missing, they must be added manually in Figma as needed.
