// scripts/lib/source.mjs
import { execFileSync } from 'node:child_process';
import { rmSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

export const REPO = 'https://github.com/primefaces/primereact';
export const BRANCH = 'v11';
// Official rendered-docs host (the default source since v11 shipped and the
// upstream `v11` branch was removed).
export const SITE = 'https://primereact.dev';

/** Shallow-clone the v11 branch into vendorDir; return the resolved HEAD SHA. */
export function cloneV11(vendorDir) {
  rmSync(vendorDir, { recursive: true, force: true });
  mkdirSync(dirname(vendorDir), { recursive: true });
  execFileSync('git', ['clone', '--depth', '1', '--branch', BRANCH, REPO, vendorDir], { stdio: 'inherit' });
  return execFileSync('git', ['-C', vendorDir, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
}

/** Source adapter reading MDX + demos from a vendored v11 clone. */
export function githubBranchSource(vendorDir) {
  return {
    mode: 'github',
    docsRoot: join(vendorDir, 'apps', 'showcase', 'docs'),
    demoRoot: join(vendorDir, 'apps', 'showcase', 'demo'),
  };
}

/** Official rendered-Markdown source: primereact.dev llms.txt index + per-page .md. */
export function renderedMdSource() {
  return { mode: 'rendered', base: SITE };
}

/**
 * Default source is `rendered` (primereact.dev) since v11 released and the
 * upstream GitHub `v11` branch was removed. The legacy MDX-branch source is
 * still available via PRIMEREACT_DOCS_SOURCE=github.
 */
export function selectSource(vendorDir, mode = process.env.PRIMEREACT_DOCS_SOURCE || 'rendered') {
  if (mode === 'github') return githubBranchSource(vendorDir);
  return renderedMdSource();
}
