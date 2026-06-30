// scripts/sync.mjs
import { rmSync, mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderedMdSource } from './lib/source.mjs';
import { buildRenderedFiles } from './lib/build.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
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
    'PrimeReact v11 is released; its docs are served from primereact.dev, so the\n' +
    'mirror fetches the official `llms.txt` index and each page\'s `.md`.\n'
  );
}

async function main() {
  const source = renderedMdSource();
  const { files, index } = await buildRenderedFiles({ base: source.base });
  const label = 'rendered ' + source.base;

  // Compare generated output against what's committed. SOURCE.md (which carries a
  // date stamp) is deliberately excluded so a date change alone never counts as
  // drift — otherwise every daily run would open a no-op date-only PR.
  const existing = readExistingRefs();
  const drift = [];
  for (const [p, c] of files) if (existing.get(p) !== c) drift.push(p);
  for (const p of existing.keys()) if (!files.has(p)) drift.push('(removed) ' + p);
  if (!existsSync(INDEX) || readFileSync(INDEX, 'utf8') !== index) drift.push('INDEX.md');

  if (checkMode) {
    if (drift.length) {
      console.error('Drift vs ' + label + ':\n' + drift.map((d) => '  ' + d).join('\n'));
      process.exit(1);
    }
    console.log('Up to date with ' + label);
    return;
  }

  if (!drift.length) {
    // Docs unchanged — leave everything (incl. SOURCE.md's date) untouched so the
    // working tree stays clean and the daily workflow opens no PR.
    console.log('Up to date with ' + label + ' — no doc changes; nothing written.');
    return;
  }

  rmSync(REFS, { recursive: true, force: true });
  for (const [p, content] of files) {
    const dest = join(REFS, p);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, content);
  }
  writeFileSync(INDEX, index);
  writeFileSync(SOURCE, renderedStamp(source.base, files.size));
  console.log('Synced ' + files.size + ' docs from ' + label);
}

await main();
