// scripts/lib/collect.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { toOutPath, toUrlSlug, variantOf, collectDocs } from './collect.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const docsRoot = join(here, '__fixtures__', 'docs');

test('toOutPath drops components/ infix and rewrites extension', () => {
  assert.equal(toOutPath('styled/components/button/features.mdx'), 'styled/button/features.md');
  assert.equal(toOutPath('primitive/accordion/features.mdx'), 'primitive/accordion/features.md');
  assert.equal(toOutPath('general/gettingstarted/setup.mdx'), 'general/gettingstarted/setup.md');
});

test('toUrlSlug strips /features.md or .md', () => {
  assert.equal(toUrlSlug('primitive/accordion/features.md'), 'primitive/accordion');
  assert.equal(toUrlSlug('general/gettingstarted/setup.md'), 'general/gettingstarted/setup');
});

test('variantOf returns the first segment', () => {
  assert.equal(variantOf('styled/components/button/features.mdx'), 'styled');
});

test('collectDocs returns normalized entries with frontmatter', () => {
  const entries = collectDocs(docsRoot);
  const byOut = Object.fromEntries(entries.map((e) => [e.outPath, e]));
  assert.equal(entries.length, 3);
  assert.equal(byOut['styled/button/features.md'].title, 'Button');
  assert.equal(byOut['styled/button/features.md'].variant, 'styled');
  assert.equal(byOut['primitive/accordion/features.md'].urlSlug, 'primitive/accordion');
  assert.equal(byOut['general/gettingstarted/setup.md'].description, 'Install guide.');
});
