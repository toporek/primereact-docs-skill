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

/** Fence-aware, line-oriented MDX custom-component → Markdown transform. */
export function transformComponents(body, { lookupDemo, component }) {
  const lines = body.split('\n');
  const out = [];
  let inFence = false;

  const fence = (src) => ['```tsx', String(src).replace(/\s+$/, ''), '```'];

  for (const line of lines) {
    if (FENCE.test(line)) { inFence = !inFence; out.push(line); continue; }
    if (inFence) { out.push(line); continue; }

    const t = line.trim();

    if (t === '') { out.push(line); continue; }
    if (/^(import|export)\s/.test(t)) continue;
    if (/^\{\/\*.*\*\/\}$/.test(t)) continue;

    let m = t.match(/^<DocDemoViewer\b([^>]*)\/>$/);
    if (m) {
      const { name = '', mode } = parseAttrs(m[1]);
      if (mode === 'hidden' || !name.includes(':')) continue;
      const [comp, demo] = name.split(':');
      const src = lookupDemo(comp, demo);
      if (src) out.push(...fence(src));
      continue;
    }

    m = t.match(/^<DocPTViewer\b([^>]*)\/>$/);
    if (m) {
      const { name = '' } = parseAttrs(m[1]);
      const src = name ? lookupDemo(component, name) : null;
      if (src) out.push('**Pass Through example:**', '', ...fence(src));
      continue;
    }

    m = t.match(/^<DocTable\b([^>]*)\/>$/);
    if (m) {
      const { name = 'this component', category = 'api' } = parseAttrs(m[1]);
      out.push(
        '> **API/props table for `' + name + '` (`' + category + '`) is generated from upstream ' +
          'TypeScript types and is not yet mirrored — see the installed package types or the ' +
          'upstream docs. (TODO: mirror in v2.)',
      );
      continue;
    }

    m = t.match(/^<DocPrimitiveIntro\b([^>]*)\/>$/);
    if (m) {
      const { description = '' } = parseAttrs(m[1]);
      if (description) out.push(description);
      continue;
    }

    m = t.match(/^<Button\b([^>]*)>(.*?)<\/Button>$/);
    if (m) {
      const { href } = parseAttrs(m[1]);
      const text = m[2].trim();
      out.push(href ? '[' + text + '](' + href + ')' : text);
      continue;
    }

    // Drop any own-line capitalized JSX tag (self-closing, open, or close) with no inline code.
    if (/^<\/?[A-Z][A-Za-z0-9.]*\b[^>]*>$/.test(t) && !t.includes('`')) continue;

    out.push(line);
  }

  return out.join('\n');
}

/** Rewrite internal /docs/<slug> links to local relative paths (known) or absolute upstream URLs (unknown). */
export function rewriteDocLinks(body, selfOutPath, slugMap) {
  const fromDir = selfOutPath.includes('/') ? selfOutPath.slice(0, selfOutPath.lastIndexOf('/')).split('/') : [];
  const relativeTo = (target) => {
    const to = target.split('/');
    let i = 0;
    while (i < fromDir.length && i < to.length - 1 && fromDir[i] === to[i]) i++;
    return [...Array(fromDir.length - i).fill('..'), ...to.slice(i)].join('/');
  };
  const linkRe = /\]\((?:https?:\/\/(?:v11\.)?primereact\.org)?\/docs\/([A-Za-z0-9_/-]+?)(?:\.md)?(?:\?[^)#]*)?(#[^)]*)?\)/g;
  let inFence = false;
  return body
    .split('\n')
    .map((line) => {
      if (FENCE.test(line)) { inFence = !inFence; return line; }
      if (inFence) return line;
      return line.replace(linkRe, (full, slug, anchor) => {
        const target = slugMap.get(slug);
        if (target) return '](' + relativeTo(target) + (anchor || '') + ')';
        if (full.startsWith('](/docs/')) return '](https://v11.primereact.org/docs/' + slug + (anchor || '') + ')';
        return full;
      });
    })
    .join('\n');
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

/** Fail the build if any JSX component tag survives outside code fences / inline code. */
export function assertNoJsx(text, label = 'doc') {
  let inFence = false;
  for (const line of text.split('\n')) {
    if (FENCE.test(line)) { inFence = !inFence; continue; }
    if (inFence) continue;
    const stripped = line.replace(/`[^`]*`/g, '');
    if (/<Doc[A-Za-z]/.test(stripped) || /<\/?[A-Z][A-Za-z0-9]*[\s/>]/.test(stripped)) {
      throw new Error('Raw JSX artifact left in ' + label + ': ' + line.trim());
    }
  }
}

/** Full MDX → Markdown pipeline for one doc. */
export function mdxToMarkdown(raw, { lookupDemo, selfOutPath, slugMap }) {
  const { data, body } = parseFrontmatter(raw);
  const title = data.title || 'Untitled';
  const lead = data.description ? data.description + '\n\n' : '';
  let out = transformComponents(body, { lookupDemo, component: data.component || '' });
  out = rewriteDocLinks(out, selfOutPath, slugMap);
  out = finalizeDoc('# ' + title + '\n\n' + lead + out, title);
  assertNoJsx(out, selfOutPath);
  return out;
}
