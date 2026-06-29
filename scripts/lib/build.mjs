// scripts/lib/build.mjs
import { readFileSync } from 'node:fs';
import { collectDocs } from './collect.mjs';
import { createDemoLookup } from './demos.mjs';
import { mdxToMarkdown, renderedToMarkdown } from './transform.mjs';
import { buildIndex } from './index-gen.mjs';
import { fetchRenderedDocs, BASE } from './rendered.mjs';

export function buildSlugMap(entries) {
  return new Map(entries.map((e) => [e.urlSlug, e.outPath]));
}

/** Read + transform every doc under docsRoot, inlining demos from demoRoot (github/MDX source). */
export function buildFiles({ docsRoot, demoRoot }) {
  const entries = collectDocs(docsRoot);
  const slugMap = buildSlugMap(entries);
  const files = new Map();
  for (const e of entries) {
    const raw = readFileSync(e.srcAbs, 'utf8');
    const lookupDemo = createDemoLookup({ demoRoot, variant: e.variant });
    files.set(e.outPath, mdxToMarkdown(raw, { lookupDemo, selfOutPath: e.outPath, slugMap }));
  }
  return { files, index: buildIndex(entries), entries };
}

/** Fetch + lightly clean every rendered doc from the official endpoints (rendered source). */
export async function buildRenderedFiles({ base = BASE } = {}) {
  const { entries, bodies } = await fetchRenderedDocs({ base });
  const slugMap = buildSlugMap(entries);
  const files = new Map();
  for (const e of entries) {
    const raw = bodies.get(e.urlSlug);
    files.set(e.outPath, renderedToMarkdown(raw, { title: e.title, selfOutPath: e.outPath, slugMap }));
  }
  return { files, index: buildIndex(entries), entries };
}
