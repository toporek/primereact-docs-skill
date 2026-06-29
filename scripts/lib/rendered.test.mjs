// scripts/lib/rendered.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseLlmsIndex, BASE } from './rendered.mjs';

const SAMPLE = [
  '# PrimeReact',
  '',
  '## Docs',
  '',
  '- [LLMs.txt](https://www.primereact.org/docs/headless/llms.md): meta page, should be skipped',
  '- [Button](https://www.primereact.org/docs/styled/components/button.md): Button is an extension to standard input.',
  '- [Installation](https://www.primereact.org/docs/styled/guides/installation.md): Install the styled package.',
  '- [useMask](https://www.primereact.org/docs/hooks/use-mask.md): Format an input as the user types.',
  '- [Button](https://www.primereact.org/docs/styled/components/button.md): duplicate, should be deduped.',
  '- [External](https://github.com/primefaces/primereact): not a /docs/.md link, skip.',
].join('\n');

test('parseLlmsIndex extracts doc entries with slug/outPath/variant', () => {
  const entries = parseLlmsIndex(SAMPLE);
  const bySlug = Object.fromEntries(entries.map((e) => [e.slug, e]));

  // meta (llms.md), external, and duplicate are excluded
  assert.equal(entries.length, 3);
  assert.ok(!entries.some((e) => e.slug.endsWith('/llms')));

  assert.equal(bySlug['styled/components/button'].title, 'Button');
  assert.equal(bySlug['styled/components/button'].outPath, 'styled/components/button.md');
  assert.equal(bySlug['styled/components/button'].urlSlug, 'styled/components/button');
  assert.equal(bySlug['styled/components/button'].variant, 'styled');
  assert.match(bySlug['styled/components/button'].description, /extension to standard input/);

  assert.equal(bySlug['hooks/use-mask'].variant, 'hooks');
  assert.equal(bySlug['hooks/use-mask'].outPath, 'hooks/use-mask.md');
});

test('parseLlmsIndex dedupes repeated slugs', () => {
  const entries = parseLlmsIndex(SAMPLE);
  const buttons = entries.filter((e) => e.slug === 'styled/components/button');
  assert.equal(buttons.length, 1);
});

test('BASE is the canonical primereact.dev host', () => {
  assert.equal(BASE, 'https://primereact.dev');
});
