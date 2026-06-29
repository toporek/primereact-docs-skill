// scripts/lib/build.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildRenderedFiles, buildSlugMap } from './build.mjs';

const BASE = 'https://primereact.dev';

// A hermetic mock of the rendered-docs endpoints (no network).
function mockFetch(index, bodies) {
  return async (url) => {
    const { pathname } = new URL(url);
    let body;
    if (pathname === '/llms.txt') body = index;
    else body = bodies[pathname.replace(/^\/docs\//, '').replace(/\.md$/, '')];
    if (body == null) return { ok: false, status: 404, text: async () => 'not found' };
    return { ok: true, status: 200, text: async () => body };
  };
}

const INDEX = [
  '# PrimeReact',
  '## Docs',
  `- [Button](${BASE}/docs/styled/components/button.md): A button.`,
  `- [Select](${BASE}/docs/styled/components/select.md): A select.`,
].join('\n');

const BODIES = {
  'styled/components/button':
    '# Button\n\nA button.\n\nSee [Select](/docs/styled/components/select) too.\n\n# Button API\n<DocTable name="Button" category="api" type="props" />\n',
  'styled/components/select': '# Select\n\nA select.\n',
};

test('buildRenderedFiles fetches, cleans, rewrites links, notes DocTable, and indexes', async () => {
  const { files, index, entries } = await buildRenderedFiles({ base: BASE, fetchImpl: mockFetch(INDEX, BODIES) });

  assert.equal(entries.length, 2);
  assert.equal(files.size, 2);

  const btn = files.get('styled/components/button.md');
  assert.match(btn, /^# Button\n\nA button\./);
  // internal /docs link rewritten to a local relative path
  assert.match(btn, /See \[Select\]\(select\.md\) too\./);
  // <DocTable> → live-link note (bare upstream URL, no raw JSX)
  assert.match(btn, /`Button` API table \(`api\/props`\)/);
  assert.match(btn, /https:\/\/primereact\.dev\/docs\/styled\/components\/button/);
  assert.ok(!btn.includes('<DocTable'));

  // INDEX lists the generated docs
  assert.match(index, /references\/styled\/components\/button\.md/);
  assert.match(index, /references\/styled\/components\/select\.md/);
});

test('buildRenderedFiles throws if a referenced page cannot be fetched', async () => {
  const idx = `# PrimeReact\n## Docs\n- [Missing](${BASE}/docs/styled/components/missing.md): gone.`;
  await assert.rejects(() => buildRenderedFiles({ base: BASE, fetchImpl: mockFetch(idx, {}) }), /Failed to fetch/);
});

test('buildSlugMap maps urlSlug to outPath', () => {
  const map = buildSlugMap([{ urlSlug: 'styled/components/a', outPath: 'styled/components/a.md' }]);
  assert.equal(map.get('styled/components/a'), 'styled/components/a.md');
});
