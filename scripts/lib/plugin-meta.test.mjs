// scripts/lib/plugin-meta.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const read = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf8'));

test('plugin.json is valid, named, and has NO version field', () => {
  const p = read('.claude-plugin/plugin.json');
  assert.equal(p.name, 'primereact-docs');
  assert.equal(p.version, undefined);
  assert.equal(p.license, 'MIT');
});

test('marketplace.json lists the plugin from ./', () => {
  const m = read('.claude-plugin/marketplace.json');
  assert.equal(m.name, 'primereact-docs');
  assert.equal(m.plugins[0].name, 'primereact-docs');
  assert.equal(m.plugins[0].source, './');
});
