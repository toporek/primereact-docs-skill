// scripts/sync.mjs
import { rmSync, mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cloneV11, selectSource, REPO, BRANCH } from './lib/source.mjs';
import { buildFiles, buildRenderedFiles } from './lib/build.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const VENDOR = join(ROOT, '.vendor', 'primereact');
const SKILL = join(ROOT, 'skills', 'primereact-docs');
const REFS = join(SKILL, 'references');
const INDEX = join(SKILL, 'INDEX.md');
const SOURCE = join(ROOT, 'SOURCE.md');
const checkMode = process.argv.includes('--check');

function readExistingRefs() {
  const out = new Map();
  if (!existsSync(REFS)) return out;
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) walk(full);
      else out.set(relative(REFS, full).split(sep).join('/'), readFileSync(full, 'utf8'));
    }
  };
  walk(REFS);
  return out;
}

const today = () => new Date().toISOString().slice(0, 10);

function renderedStamp(base, pages) {
  return (
    '# Source\n\n' +
    'Docs mirrored from ' + base + ' (official `llms.txt` index + per-page `.md`).\n' +
    'Pages: ' + pages + '\n' +
    'Synced: ' + today() + '\n' +
    'Source mode: rendered (primereact.dev rendered Markdown).\n\n' +
    'PrimeReact v11 is released; the upstream GitHub `v11` branch was removed, so the\n' +
    'mirror now tracks the official primereact.dev docs endpoints. The legacy `github`\n' +
    'branch adapter remains available via `PRIMEREACT_DOCS_SOURCE=github`.\n'
  );
}

function githubStamp(sha) {
  return (
    '# Source\n\n' +
    'Docs mirrored from ' + REPO + ' (branch `' + BRANCH + '`).\n' +
    'Upstream commit: ' + sha + '\n' +
    'Synced: ' + today() + '\n' +
    'Source mode: github-branch (MDX under apps/showcase/docs + demos under apps/showcase/demo).\n'
  );
}

async function main() {
  const source = selectSource(VENDOR);
  let files;
  let index;
  let stamp;
  let label;
  if (source.mode === 'github') {
    const sha = cloneV11(VENDOR);
    ({ files, index } = buildFiles({ docsRoot: source.docsRoot, demoRoot: source.demoRoot }));
    stamp = githubStamp(sha);
    label = 'github ' + sha;
  } else {
    ({ files, index } = await buildRenderedFiles({ base: source.base }));
    stamp = renderedStamp(source.base, files.size);
    label = 'rendered ' + source.base;
  }

  if (checkMode) {
    const existing = readExistingRefs();
    const drift = [];
    for (const [p, c] of files) if (existing.get(p) !== c) drift.push(p);
    for (const p of existing.keys()) if (!files.has(p)) drift.push('(removed) ' + p);
    if (!existsSync(INDEX) || readFileSync(INDEX, 'utf8') !== index) drift.push('INDEX.md');
    if (drift.length) {
      console.error('Drift vs ' + label + ':\n' + drift.map((d) => '  ' + d).join('\n'));
      process.exit(1);
    }
    console.log('Up to date with ' + label);
    return;
  }

  rmSync(REFS, { recursive: true, force: true });
  for (const [p, content] of files) {
    const dest = join(REFS, p);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, content);
  }
  writeFileSync(INDEX, index);
  writeFileSync(SOURCE, stamp);
  console.log('Synced ' + files.size + ' docs from ' + label);
}

await main();
