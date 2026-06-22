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

test('migration.md contains the rename map, theming change, and not-yet list', () => {
  const body = readFileSync(join(SKILL, 'migration.md'), 'utf8');
  assert.match(body, /Calendar.*DatePicker/);
  assert.match(body, /Dropdown.*Select/);
  assert.match(body, /@primeuix\/themes/);
  assert.match(body, /resources\/themes/);
  assert.match(body, /DataTable/);
  assert.match(body, /package\.json/);
});

test('overview.md covers the four modes and the v11-in-progress caveat', () => {
  const body = readFileSync(join(SKILL, 'overview.md'), 'utf8');
  assert.match(body, /styled/i);
  assert.match(body, /primitive/i);
  assert.match(body, /headless/i);
  assert.match(body, /tailwind/i);
  assert.match(body, /token/i);
  assert.match(body, /in (active )?development|in progress|not yet/i);
});
