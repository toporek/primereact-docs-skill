// scripts/lib/build.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSlugMap, buildFiles } from './build.mjs';
import { collectDocs } from './collect.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const docsRoot = join(here, '__fixtures__', 'docs');
const demoRoot = join(here, '__fixtures__', 'demo');

test('buildSlugMap maps urlSlug to outPath', () => {
  const map = buildSlugMap(collectDocs(docsRoot));
  assert.equal(map.get('primitive/accordion'), 'primitive/accordion/features.md');
});

test('buildFiles transforms every doc and builds an index', () => {
  const { files, index, entries } = buildFiles({ docsRoot, demoRoot });
  assert.equal(files.size, entries.length);
  const acc = files.get('primitive/accordion/features.md');
  assert.match(acc, /^# Accordion\n/);
  assert.ok(!acc.includes('<Doc'));
  assert.match(acc, /```tsx/);
  assert.match(index, /references\/primitive\/accordion\/features\.md/);
});
