// scripts/lib/transform.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseFrontmatter, parseAttrs, finalizeDoc } from './transform.mjs';

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
