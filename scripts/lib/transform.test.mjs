// scripts/lib/transform.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseFrontmatter, parseAttrs, finalizeDoc, transformComponents, rewriteDocLinks, assertNoJsx, mdxToMarkdown, stripInlineJsx } from './transform.mjs';

test('parseFrontmatter extracts title, description, component', () => {
  const raw = '---\ntitle: Accordion\ndescription: An accordion.\ncomponent: accordion\n---\nBody\n';
  const { data, body } = parseFrontmatter(raw);
  assert.equal(data.title, 'Accordion');
  assert.equal(data.description, 'An accordion.');
  assert.equal(data.component, 'accordion');
  assert.equal(body, 'Body\n');
});

test('parseFrontmatter strips surrounding quotes', () => {
  assert.equal(parseFrontmatter('---\ntitle: "Setup"\n---\nx').data.title, 'Setup');
});

test('parseFrontmatter returns empty data when absent', () => {
  const { data, body } = parseFrontmatter('# Hi\n');
  assert.deepEqual(data, {});
  assert.equal(body, '# Hi\n');
});

test('parseAttrs reads double- and single-quoted attrs, ignores expressions', () => {
  const a = parseAttrs(` name="accordion:basic-demo" mode='hidden' components={['X']}`);
  assert.equal(a.name, 'accordion:basic-demo');
  assert.equal(a.mode, 'hidden');
  assert.equal(a.components, undefined);
});

test('finalizeDoc normalizes CRLF, collapses blanks, trailing newline', () => {
  assert.equal(finalizeDoc('# Hi\r\n\r\n\r\nBody\r\n\n\n', 'Hi'), '# Hi\n\nBody\n');
});

test('finalizeDoc prepends an H1 when missing', () => {
  assert.equal(finalizeDoc('Just prose.', 'My Title'), '# My Title\n\nJust prose.\n');
});

test('finalizeDoc keeps an existing H1', () => {
  assert.equal(finalizeDoc('# Here\n\nBody', 'Other'), '# Here\n\nBody\n');
});

test('finalizeDoc strips whole-line MDX comments outside fences', () => {
  assert.equal(finalizeDoc('# T\n\n{/* prettier-ignore */}\n\n```tsx\ncode\n```', 'T'),
    '# T\n\n```tsx\ncode\n```\n');
});

const demoMap = { 'accordion:basic-demo': 'export default () => <Accordion.Root/>;', 'accordion:accordion-pt': 'export const pt = {};' };
const lookupDemo = (comp, demo) => demoMap[`${comp}:${demo}`] ?? null;
const opts = { lookupDemo, component: 'accordion' };

test('transformComponents inlines DocDemoViewer as a tsx block', () => {
  const out = transformComponents('<DocDemoViewer name="accordion:basic-demo" mode="collapsible"/>', opts);
  assert.equal(out, '```tsx\nexport default () => <Accordion.Root/>;\n```');
});

test('transformComponents skips hidden demos and missing demos', () => {
  assert.equal(transformComponents('<DocDemoViewer name="accordion:basic-demo" mode="hidden"/>', opts), '');
  assert.equal(transformComponents('<DocDemoViewer name="accordion:nope"/>', opts), '');
});

test('transformComponents converts DocTable to a TODO note (no raw JSX)', () => {
  const out = transformComponents('<DocTable name="AccordionRoot" category="api" />', opts);
  assert.match(out, /API\/props table for `AccordionRoot` \(`api`\)/);
  assert.match(out, /TODO: mirror in v2/);
  assert.ok(!out.includes('<DocTable'));
});

test('transformComponents emits DocPrimitiveIntro description text', () => {
  assert.equal(transformComponents('<DocPrimitiveIntro description="Build custom sections." />', opts), 'Build custom sections.');
});

test('transformComponents inlines DocPTViewer via doc component', () => {
  const out = transformComponents('<DocPTViewer name="accordion-pt" components={["AccordionRoot"]} />', opts);
  assert.match(out, /```tsx\nexport const pt = \{\};\n```/);
});

test('transformComponents converts Button to a markdown link', () => {
  assert.equal(transformComponents('<Button as="a" href="/llms.txt" target="_blank">Open llms.txt</Button>', opts), '[Open llms.txt](/llms.txt)');
});

test('transformComponents drops other own-line components and import/export', () => {
  const input = "import x from 'y';\n<DocPrimitiveLinks name=\"Accordion\" />\nReal prose.";
  assert.equal(transformComponents(input, opts), 'Real prose.');
});

test('transformComponents leaves fenced content untouched', () => {
  const input = '```tsx\nimport {Accordion} from "primereact/accordion";\n<DocTable/>\n```';
  assert.equal(transformComponents(input, opts), input);
});

const slugMap = new Map([
  ['primitive/accordion', 'primitive/accordion/features.md'],
  ['primitive/motion', 'primitive/motion/features.md'],
  ['styled/theming/styled', 'styled/theming/styled.md'],
]);

test('rewriteDocLinks rewrites known root-relative links to relative paths', () => {
  assert.equal(
    rewriteDocLinks('See [Motion](/docs/primitive/motion#phases).', 'primitive/accordion/features.md', slugMap),
    'See [Motion](../motion/features.md#phases).',
  );
});

test('rewriteDocLinks rewrites known absolute primereact.org links', () => {
  assert.equal(
    rewriteDocLinks('[t](https://v11.primereact.org/docs/styled/theming/styled)', 'primitive/accordion/features.md', slugMap),
    '[t](../../styled/theming/styled.md)',
  );
});

test('rewriteDocLinks normalizes unknown root-relative /docs links to absolute', () => {
  assert.equal(
    rewriteDocLinks('[x](/docs/primitive/unknown)', 'primitive/accordion/features.md', slugMap),
    '[x](https://primereact.dev/docs/primitive/unknown)',
  );
});

test('rewriteDocLinks rewrites known absolute primereact.dev links', () => {
  assert.equal(
    rewriteDocLinks('[t](https://primereact.dev/docs/styled/theming/styled)', 'primitive/accordion/features.md', slugMap),
    '[t](../../styled/theming/styled.md)',
  );
});

test('rewriteDocLinks leaves non-doc links and fenced lines untouched', () => {
  const s = 'pre [a](/docs/primitive/motion)\n```\n[b](/docs/primitive/motion)\n```\n[ext](https://example.com)';
  assert.equal(
    rewriteDocLinks(s, 'primitive/accordion/features.md', slugMap),
    'pre [a](../motion/features.md)\n```\n[b](/docs/primitive/motion)\n```\n[ext](https://example.com)',
  );
});

test('assertNoJsx throws on surviving JSX, ignores fences and inline code', () => {
  assert.throws(() => assertNoJsx('# T\n\n<DocTable name="X"/>\n'), /Raw JSX/);
  assert.doesNotThrow(() => assertNoJsx('# T\n\nUse `<Accordion.Root>` here.\n'));
  assert.doesNotThrow(() => assertNoJsx('# T\n\n```tsx\n<Accordion.Root/>\n```\n'));
});

test('mdxToMarkdown runs the full pipeline', () => {
  const raw = [
    '---', 'title: Accordion', 'description: An accordion.', 'component: accordion', '---',
    '<DocPrimitiveIntro description="Custom sections." />',
    '',
    '<DocDemoViewer name="accordion:basic-demo" mode="collapsible"/>',
    '',
    '## API',
    '<DocTable name="AccordionRoot" category="api" />',
    '',
    'See [Motion](/docs/primitive/motion).',
    '',
  ].join('\n');
  const out = mdxToMarkdown(raw, {
    lookupDemo: (c, d) => (c === 'accordion' && d === 'basic-demo' ? 'const X = 1;' : null),
    selfOutPath: 'primitive/accordion/features.md',
    slugMap: new Map([['primitive/motion', 'primitive/motion/features.md']]),
  });
  assert.match(out, /^# Accordion\n\nAn accordion\./);
  assert.match(out, /Custom sections\./);
  assert.match(out, /```tsx\nconst X = 1;\n```/);
  assert.match(out, /TODO: mirror in v2/);
  assert.match(out, /\[Motion\]\(\.\.\/motion\/features\.md\)/);
  assert.ok(!out.includes('<Doc'));
  assert.ok(out.endsWith('\n'));
});

test('stripInlineJsx converts inline Link to a markdown link', () => {
  assert.equal(
    stripInlineJsx('such as <Link href="/button">Button</Link> and render it'),
    'such as [Button](/button) and render it',
  );
});

test('stripInlineJsx converts inline Button with href and unwraps without href', () => {
  assert.equal(stripInlineJsx('Click <Button href="/x">here</Button> now'), 'Click [here](/x) now');
  assert.equal(stripInlineJsx('a <Strong>bold</Strong> word'), 'a bold word');
});

test('stripInlineJsx strips self-closing and lone capitalized tags', () => {
  assert.equal(stripInlineJsx('Use <Check /> to confirm <Github/>'), 'Use  to confirm ');
  assert.equal(stripInlineJsx('<DocSourceViewer name="x" />'), '');
});

test('stripInlineJsx preserves inline-code spans verbatim', () => {
  assert.equal(stripInlineJsx('write `<DocTable/>` in MDX'), 'write `<DocTable/>` in MDX');
});

test('transformComponents converts an inline Link in prose and leaves no JSX', () => {
  const out = transformComponents('Create a <Link href="/button">Button</Link> and render it.', { lookupDemo: () => null, component: '' });
  assert.equal(out, 'Create a [Button](/button) and render it.');
});

test('transformComponents drops block wrapper tags but keeps their children', () => {
  const input = '<DocTabs>\n<DocTabsTab header="Vite">\nInstall with Vite.\n</DocTabsTab>\n</DocTabs>';
  assert.equal(transformComponents(input, { lookupDemo: () => null, component: '' }), 'Install with Vite.');
});

test('stripInlineJsx leaves bare digits in prose untouched (sentinel safety)', () => {
  assert.equal(stripInlineJsx('using ISO 4217 standard'), 'using ISO 4217 standard');
  assert.equal(stripInlineJsx('See step 1 for details'), 'See step 1 for details');
});

test('stripInlineJsx restores inline code even when prose has digits', () => {
  assert.equal(stripInlineJsx('set `mode` to 3 then `done`'), 'set `mode` to 3 then `done`');
});
