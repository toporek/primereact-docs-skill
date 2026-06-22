// scripts/lib/transform.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseFrontmatter, parseAttrs, finalizeDoc, transformComponents } from './transform.mjs';

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
