// scripts/lib/demos.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createDemoLookup } from './demos.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const demoRoot = join(here, '__fixtures__', 'demo');

test('createDemoLookup reads a demo and rewrites the utils import', () => {
  const lookup = createDemoLookup({ demoRoot, variant: 'primitive' });
  const src = lookup('accordion', 'basic-demo');
  assert.match(src, /@\/lib\/utils/);
  assert.ok(!src.includes('@/components/ui/utils'));
});

test('createDemoLookup returns null for a missing demo', () => {
  const lookup = createDemoLookup({ demoRoot, variant: 'primitive' });
  assert.equal(lookup('accordion', 'nope'), null);
});
