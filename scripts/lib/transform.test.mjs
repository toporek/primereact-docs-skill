// scripts/lib/transform.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseFrontmatter, parseAttrs } from './transform.mjs';

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
