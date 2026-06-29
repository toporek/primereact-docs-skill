// scripts/lib/source.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { githubBranchSource, renderedMdSource, selectSource, REPO, BRANCH, SITE } from './source.mjs';

test('githubBranchSource returns docs and demo roots under the vendor dir', () => {
  const s = githubBranchSource('/tmp/vendor');
  assert.equal(s.mode, 'github');
  assert.equal(s.docsRoot, join('/tmp/vendor', 'apps', 'showcase', 'docs'));
  assert.equal(s.demoRoot, join('/tmp/vendor', 'apps', 'showcase', 'demo'));
});

test('renderedMdSource returns the rendered primereact.dev source', () => {
  const s = renderedMdSource();
  assert.equal(s.mode, 'rendered');
  assert.equal(s.base, 'https://primereact.dev');
});

test('selectSource defaults to rendered and honors github opt-in', () => {
  assert.equal(selectSource('/tmp/vendor').mode, 'rendered');
  assert.equal(selectSource('/tmp/vendor', 'rendered').mode, 'rendered');
  assert.equal(selectSource('/tmp/vendor', 'github').mode, 'github');
});

test('constants: GitHub repo (legacy) + canonical rendered host', () => {
  assert.equal(REPO, 'https://github.com/primefaces/primereact');
  assert.equal(BRANCH, 'v11');
  assert.equal(SITE, 'https://primereact.dev');
});
