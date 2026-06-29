// scripts/lib/build.mjs
import { renderedToMarkdown } from './transform.mjs';
import { buildIndex } from './index-gen.mjs';
import { fetchRenderedDocs, BASE } from './rendered.mjs';

export function buildSlugMap(entries) {
  return new Map(entries.map((e) => [e.urlSlug, e.outPath]));
}

/** Fetch + lightly clean every rendered doc from the official primereact.dev endpoints. */
export async function buildRenderedFiles({ base = BASE, fetchImpl } = {}) {
  const { entries, bodies } = await fetchRenderedDocs({ base, ...(fetchImpl ? { fetchImpl } : {}) });
  const slugMap = buildSlugMap(entries);
  const files = new Map();
  for (const e of entries) {
    const raw = bodies.get(e.urlSlug);
    files.set(
      e.outPath,
      renderedToMarkdown(raw, { title: e.title, selfOutPath: e.outPath, slugMap, apiTableUrl: base + '/docs/' + e.slug }),
    );
  }
  return { files, index: buildIndex(entries), entries };
}
