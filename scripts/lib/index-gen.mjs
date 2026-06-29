// scripts/lib/index-gen.mjs
const GROUP_LABELS = { general: 'General', styled: 'Styled', primitive: 'Primitive', headless: 'Headless', tailwind: 'Tailwind', hooks: 'Hooks' };
const GROUP_ORDER = ['general', 'styled', 'primitive', 'headless', 'tailwind', 'hooks'];

export function buildIndex(entries) {
  const groups = new Map();
  for (const e of entries) {
    if (!groups.has(e.variant)) groups.set(e.variant, []);
    groups.get(e.variant).push(e);
  }
  const rank = (g) => { const i = GROUP_ORDER.indexOf(g); return i === -1 ? GROUP_ORDER.length + 1 : i; };
  const keys = [...groups.keys()].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));

  const lines = ['# PrimeReact v11 Docs Index', ''];
  for (const key of keys) {
    lines.push('## ' + (GROUP_LABELS[key] || key), '');
    for (const e of groups.get(key).sort((a, b) => a.outPath.localeCompare(b.outPath))) {
      lines.push('- [' + e.title + '](references/' + e.outPath + ')' + (e.description ? ' — ' + e.description : ''));
    }
    lines.push('');
  }
  return lines.join('\n').trim() + '\n';
}
