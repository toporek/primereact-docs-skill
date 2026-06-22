// scripts/lib/index-gen.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildIndex } from './index-gen.mjs';

test('buildIndex groups by variant in order and lists every entry', () => {
  const out = buildIndex([
    { variant: 'styled', outPath: 'styled/button/features.md', title: 'Button', description: 'A button.' },
    { variant: 'general', outPath: 'general/gettingstarted/setup.md', title: 'Setup', description: '' },
    { variant: 'primitive', outPath: 'primitive/accordion/features.md', title: 'Accordion', description: 'An accordion.' },
  ]);
  assert.match(out, /# PrimeReact v11 Docs Index/);
  assert.ok(out.indexOf('## General') < out.indexOf('## Styled'));
  assert.ok(out.indexOf('## Styled') < out.indexOf('## Primitive'));
  assert.match(out, /- \[Button\]\(references\/styled\/button\/features\.md\) — A button\./);
  assert.match(out, /- \[Setup\]\(references\/general\/gettingstarted\/setup\.md\)\n/);
  assert.ok(out.endsWith('\n'));
});
