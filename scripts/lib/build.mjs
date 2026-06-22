// scripts/lib/build.mjs
import { readFileSync } from 'node:fs';
import { collectDocs } from './collect.mjs';
import { createDemoLookup } from './demos.mjs';
import { mdxToMarkdown } from './transform.mjs';
import { buildIndex } from './index-gen.mjs';

export function buildSlugMap(entries) {
  return new Map(entries.map((e) => [e.urlSlug, e.outPath]));
}

/** Read + transform every doc under docsRoot, inlining demos from demoRoot. */
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
