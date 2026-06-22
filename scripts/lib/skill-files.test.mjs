// scripts/lib/skill-files.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFrontmatter } from './transform.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const SKILL = join(ROOT, 'skills', 'primereact-docs');

test('SKILL.md has name and a non-trivial description', () => {
  const { data } = parseFrontmatter(readFileSync(join(SKILL, 'SKILL.md'), 'utf8'));
  assert.equal(data.name, 'primereact-docs');
  assert.ok(data.description && data.description.length > 60);
});

test('SKILL.md references the version guardrail and INDEX', () => {
  const body = readFileSync(join(SKILL, 'SKILL.md'), 'utf8');
  assert.match(body, /migration\.md/);
  assert.match(body, /INDEX\.md/);
  assert.match(body, /package\.json/);
});
