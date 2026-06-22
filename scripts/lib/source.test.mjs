// scripts/lib/source.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { githubBranchSource, renderedMdSource, selectSource, REPO, BRANCH } from './source.mjs';

test('githubBranchSource returns docs and demo roots under the vendor dir', () => {
  const s = githubBranchSource('/tmp/vendor');
  assert.equal(s.mode, 'github');
  assert.equal(s.docsRoot, join('/tmp/vendor', 'apps', 'showcase', 'docs'));
  assert.equal(s.demoRoot, join('/tmp/vendor', 'apps', 'showcase', 'demo'));
});

test('renderedMdSource throws a clear not-implemented error', () => {
  assert.throws(() => renderedMdSource(), /not implemented/i);
});

test('selectSource defaults to github and rejects rendered', () => {
  assert.equal(selectSource('/tmp/vendor', 'github').mode, 'github');
  assert.throws(() => selectSource('/tmp/vendor', 'rendered'), /not implemented/i);
});

test('upstream constants point at the v11 branch', () => {
  assert.equal(REPO, 'https://github.com/primefaces/primereact');
  assert.equal(BRANCH, 'v11');
});
