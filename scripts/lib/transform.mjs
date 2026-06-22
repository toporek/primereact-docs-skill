// scripts/lib/transform.mjs

export const FENCE = /^\s*(```|~~~)/;

/** Parse a leading YAML-ish frontmatter block (--- ... ---). Simple key: value only. */
export function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = /^([\w-]+):\s*(.*)$/.exec(line);
    if (!m) continue;
    let value = m[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[m[1]] = value;
  }
  return { data, body: raw.slice(match[0].length) };
}

/** Extract quoted string attributes from a JSX tag's attribute text. */
export function parseAttrs(s) {
  const attrs = {};
  const re = /([\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;
  let m;
  while ((m = re.exec(s))) attrs[m[1]] = m[2] !== undefined ? m[2] : m[3];
  return attrs;
}

/** Normalize a transformed body: drop MDX comments outside fences, collapse blanks, ensure H1 + trailing newline. */
export function finalizeDoc(body, title) {
  let inFence = false;
  let out = body
    .replace(/\r\n/g, '\n')
    .split('\n')
    .filter((line) => {
      if (FENCE.test(line)) { inFence = !inFence; return true; }
      return inFence || !/^\s*\{\/\*.*\*\/\}\s*$/.test(line);
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  if (!/^#\s/.test(out)) out = '# ' + title + '\n\n' + out;
  return out + '\n';
}
