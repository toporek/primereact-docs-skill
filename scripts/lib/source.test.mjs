// scripts/lib/source.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renderedMdSource, SITE } from './source.mjs';

test('renderedMdSource returns the rendered primereact.dev source', () => {
  const s = renderedMdSource();
  assert.equal(s.mode, 'rendered');
  assert.equal(s.base, 'https://primereact.dev');
});

test('SITE is the canonical rendered host', () => {
  assert.equal(SITE, 'https://primereact.dev');
});
