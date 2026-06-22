// scripts/lib/source.mjs
import { execFileSync } from 'node:child_process';
import { rmSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

export const REPO = 'https://github.com/primefaces/primereact';
export const BRANCH = 'v11';

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

/** v2 stub: official .md / llms-full.txt endpoints are not live yet (see SOURCE.md / spec). */
export function renderedMdSource() {
  throw new Error('renderedMdSource: not implemented — v11 official .md/llms endpoints are not live yet (TODO v2).');
}

export function selectSource(vendorDir, mode = process.env.PRIMEREACT_DOCS_SOURCE || 'github') {
  if (mode === 'rendered') return renderedMdSource();
  return githubBranchSource(vendorDir);
}
