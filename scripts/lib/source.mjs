// scripts/lib/source.mjs
// PrimeReact v11 is GA; its docs are served from primereact.dev as an `llms.txt`
// index + per-page `.md`. That official rendered Markdown is the source.

export const SITE = 'https://primereact.dev';

/** The rendered-Markdown source: primereact.dev llms.txt index + per-page .md. */
export function renderedMdSource() {
  return { mode: 'rendered', base: SITE };
}
