// scripts/lib/collect.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { parseFrontmatter } from './transform.mjs';

/** Recursively collect sorted absolute paths of *.mdx under dir. */
export function findMdx(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...findMdx(full));
    else if (name.endsWith('.mdx')) out.push(full);
  }
  return out.sort();
}

export function toOutPath(srcRel) {
  return srcRel.split(sep).join('/').replace(/\.mdx$/, '.md').replace('/components/', '/');
}

export function toUrlSlug(outPath) {
  return outPath.endsWith('/features.md') ? outPath.slice(0, -'/features.md'.length) : outPath.replace(/\.md$/, '');
}

export function variantOf(srcRel) {
  return srcRel.split(sep)[0];
}

export function collectDocs(docsRoot) {
  const entries = [];
  for (const srcAbs of findMdx(docsRoot)) {
    const srcRel = relative(docsRoot, srcAbs);
    const outPath = toOutPath(srcRel);
    const { data } = parseFrontmatter(readFileSync(srcAbs, 'utf8'));
    entries.push({
      srcAbs,
      variant: variantOf(srcRel),
      outPath,
      urlSlug: toUrlSlug(outPath),
      title: data.title || 'Untitled',
      description: data.description || '',
    });
  }
  return entries;
}
