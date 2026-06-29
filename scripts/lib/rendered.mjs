// scripts/lib/rendered.mjs
// Rendered-Markdown source adapter: PrimeReact v11 ships official docs as an
// `llms.txt` index plus per-page `.md` endpoints. Each page is already rendered
// Markdown (demos inlined, no MDX wrappers), so the heavy MDX transform is not
// needed — only a light cleanup pass (see renderedToMarkdown in transform.mjs).
//
// Canonical host is primereact.dev. NOTE: the URLs inside llms.txt point at
// `www.primereact.org`, which is a stale/broken deployment — we keep only the
// `/docs/<slug>.md` path and fetch it from `base` (primereact.dev) instead.

export const BASE = 'https://primereact.dev';

/**
 * Parse an llms.txt index into doc entries.
 * Lines look like: `- [Title](https://host/docs/<slug>.md): description`
 * Returns entries with the host stripped — only the `/docs/<slug>` path is kept.
 * Skips the per-variant `llms` meta pages and any non-`/docs/*.md` links.
 *
 * @param {string} text
 * @returns {Array<{title,description,slug,urlSlug,outPath,variant}>}
 */
export function parseLlmsIndex(text) {
  const lineRe = /^\s*-\s*\[([^\]]+)\]\((https?:\/\/[^)]+)\)\s*(?::\s*(.*))?$/;
  const entries = [];
  const seen = new Set();
  for (const line of text.split('\n')) {
    const m = lineRe.exec(line);
    if (!m) continue;
    const title = m[1].trim();
    const url = m[2].trim();
    const description = (m[3] || '').trim();
    const docMatch = /\/docs\/(.+)\.md$/.exec(url);
    if (!docMatch) continue;
    const slug = docMatch[1];
    if (slug === 'llms' || slug.endsWith('/llms')) continue; // skip meta pages
    if (seen.has(slug)) continue;
    seen.add(slug);
    entries.push({
      title,
      description,
      slug,
      urlSlug: slug,
      outPath: slug + '.md',
      variant: slug.split('/')[0],
    });
  }
  return entries;
}

/** Fetch text with a small retry for transient blips. */
async function fetchText(url, fetchImpl = fetch, attempts = 2) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetchImpl(url);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.text();
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr;
}

/**
 * Fetch the llms.txt index and every page's rendered Markdown with bounded
 * concurrency. Throws if any page fails after retries (never silently drops docs).
 * @returns {Promise<{entries, bodies: Map<slug, string>}>}
 */
export async function fetchRenderedDocs({ base = BASE, concurrency = 8, fetchImpl = fetch } = {}) {
  const indexText = await fetchText(base + '/llms.txt', fetchImpl);
  const entries = parseLlmsIndex(indexText);
  const bodies = new Map();
  const errors = [];
  const queue = [...entries];
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      for (let e; (e = queue.shift()); ) {
        const url = base + '/docs/' + e.slug + '.md';
        try {
          bodies.set(e.slug, await fetchText(url, fetchImpl));
        } catch (err) {
          errors.push(url + ' — ' + (err.message || err));
        }
      }
    }),
  );
  if (errors.length) {
    throw new Error('Failed to fetch ' + errors.length + ' rendered docs:\n  ' + errors.slice(0, 10).join('\n  '));
  }
  return { entries, bodies };
}
