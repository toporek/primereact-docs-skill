// scripts/lib/demos.mjs
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/** Build a demo resolver bound to a demo root + variant. */
export function createDemoLookup({ demoRoot, variant }) {
  return (component, demo) => {
    const file = join(demoRoot, variant, component, demo + '.tsx');
    if (!existsSync(file)) return null;
    return readFileSync(file, 'utf8').replace('@/components/ui/utils', '@/lib/utils');
  };
}
